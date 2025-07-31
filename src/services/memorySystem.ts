import { DatabaseService } from './database';
import { ConversationMemory, Participant } from '../types';
import { redis } from '../config/database';

export interface MemoryContext {
  recentMessages: string[];
  personalMemories: ConversationMemory[];
  groupDynamics: ConversationMemory[];
  runningJokes: ConversationMemory[];
  participantTraits: ConversationMemory[];
}

export class MemorySystem {
  private dbService: DatabaseService;
  private readonly CONTEXT_WINDOW = 200; // Keep more messages for better context
  private readonly MEMORY_CONFIDENCE_THRESHOLD = 0.3;

  constructor() {
    this.dbService = new DatabaseService();
  }

  /**
   * Build comprehensive context for roast generation
   */
  async buildRoastContext(
    groupId: string, 
    participantId: string, 
    targetUserId?: string
  ): Promise<MemoryContext> {
    // Get recent conversation history
    const recentMessages = await this.getContextualMessages(groupId);

    // Get memories for the participant and target
    const personalMemories = await this.dbService.getMemories(groupId, participantId);
    const targetMemories = targetUserId ? 
      await this.dbService.getMemories(groupId, targetUserId) : [];

    // Get group-wide memories (running jokes, dynamics)
    const groupMemories = await this.dbService.getMemories(groupId);

    // Categorize memories
    const categorized = this.categorizeMemories([...personalMemories, ...targetMemories, ...groupMemories]);

    return {
      recentMessages,
      personalMemories: targetMemories.length > 0 ? targetMemories : personalMemories,
      groupDynamics: categorized.relationship,
      runningJokes: categorized.running_joke,
      participantTraits: categorized.personality_trait
    };
  }

  /**
   * Extract and store new memories from conversation
   */
  async extractAndStoreMemories(
    groupId: string, 
    participantId: string, 
    messageText: string,
    conversationContext: string[]
  ): Promise<void> {
    const extractedMemories = await this.extractMemoriesFromText(
      messageText, 
      conversationContext, 
      groupId, 
      participantId
    );

    for (const memory of extractedMemories) {
      await this.dbService.storeMemory(memory);
    }
  }

  /**
   * Get contextual messages with smart summarization
   */
  private async getContextualMessages(groupId: string): Promise<string[]> {
    // Try Redis cache first
    const cached = await redis.get(`context:${groupId}`);
    if (cached) {
      return JSON.parse(cached);
    }

    // Get from database and cache
    const messages = await this.dbService.getRecentMessages(groupId, this.CONTEXT_WINDOW);
    
    // Store in Redis with 10 minute expiry
    await redis.setEx(`context:${groupId}`, 600, JSON.stringify(messages));
    
    return messages;
  }

  /**
   * Extract memories using pattern matching and heuristics
   */
  private async extractMemoriesFromText(
    text: string, 
    context: string[], 
    groupId: string, 
    participantId: string
  ): Promise<Array<Omit<ConversationMemory, 'id' | 'createdAt'>>> {
    const memories: Array<Omit<ConversationMemory, 'id' | 'createdAt'>> = [];
    const lowerText = text.toLowerCase();

    // Extract fun facts (hobbies, interests, jobs)
    const funFactPatterns = [
      /i (work|working) (at|for|as) (.+)/i,
      /i (love|like|enjoy|hate) (.+)/i,
      /i'm (studying|learning) (.+)/i,
      /my (hobby|job|favorite) is (.+)/i,
      /i (play|watch|listen to) (.+)/i
    ];

    for (const pattern of funFactPatterns) {
      const match = text.match(pattern);
      if (match) {
        memories.push({
          groupId,
          participantId,
          memoryType: 'fun_fact',
          content: match[0],
          confidenceScore: 0.7,
          lastReferenced: new Date()
        });
      }
    }

    // Extract personality traits from repeated patterns
    if (this.hasPersonalityPattern(text, context)) {
      const trait = this.identifyPersonalityTrait(text, context);
      if (trait) {
        memories.push({
          groupId,
          participantId,
          memoryType: 'personality_trait',
          content: trait,
          confidenceScore: 0.6,
          lastReferenced: new Date()
        });
      }
    }

    // Extract potential running jokes
    if (this.isRunningJoke(text, context)) {
      memories.push({
        groupId,
        participantId,
        memoryType: 'running_joke',
        content: text,
        confidenceScore: 0.8,
        lastReferenced: new Date()
      });
    }

    return memories;
  }

  /**
   * Categorize memories by type
   */
  private categorizeMemories(memories: ConversationMemory[]): Record<string, ConversationMemory[]> {
    return memories.reduce((acc, memory) => {
      if (!acc[memory.memoryType]) {
        acc[memory.memoryType] = [];
      }
      acc[memory.memoryType].push(memory);
      return acc;
    }, {} as Record<string, ConversationMemory[]>);
  }

  /**
   * Check if text shows personality patterns
   */
  private hasPersonalityPattern(text: string, context: string[]): boolean {
    const personalityIndicators = [
      /always/i, /never/i, /usually/i, /typically/i,
      /i tend to/i, /i usually/i, /i always/i,
      /that's so me/i, /typical me/i
    ];

    return personalityIndicators.some(pattern => pattern.test(text));
  }

  /**
   * Identify personality trait from text and context
   */
  private identifyPersonalityTrait(text: string, context: string[]): string | null {
    // Simple trait extraction - could be enhanced with ML
    const traits = {
      sarcastic: /sarcasm|sarcastic|yeah right|sure buddy/i,
      competitive: /win|lose|beat|competitive|game|score/i,
      funny: /lol|haha|joke|funny|humor/i,
      serious: /serious|important|focus|work/i,
      optimistic: /positive|great|awesome|amazing/i,
      dramatic: /omg|dramatic|can't even|literally dying/i
    };

    for (const [trait, pattern] of Object.entries(traits)) {
      if (pattern.test(text)) {
        return `tends_to_be_${trait}`;
      }
    }

    return null;
  }

  /**
   * Check if text is part of a running joke
   */
  private isRunningJoke(text: string, context: string[]): boolean {
    // Check if similar phrases appear in recent context
    const normalizedText = text.toLowerCase().replace(/[^\w\s]/g, '');
    const words = normalizedText.split(/\s+/);
    
    if (words.length < 2) return false;

    // Look for repeated phrases in context
    const contextText = context.join(' ').toLowerCase();
    return words.some(word => 
      word.length > 3 && 
      contextText.split(word).length > 2 // Appears multiple times
    );
  }

  /**
   * Update memory usage and confidence scores
   */
  async updateMemoryReference(memoryId: string): Promise<void> {
    await this.dbService.db.query(
      'UPDATE conversation_memory SET last_referenced = NOW() WHERE id = $1',
      [memoryId]
    );
  }

  /**
   * Clean up old, low-confidence memories
   */
  async pruneMemories(groupId: string): Promise<void> {
    // Remove memories older than 30 days with low confidence
    await this.dbService.db.query(
      `DELETE FROM conversation_memory 
       WHERE group_id = $1 
       AND confidence_score < $2 
       AND created_at < NOW() - INTERVAL '30 days'`,
      [groupId, this.MEMORY_CONFIDENCE_THRESHOLD]
    );
  }

  /**
   * Get conversation summary for efficient context
   */
  async getConversationSummary(groupId: string, limit: number = 10): Promise<string> {
    const messages = await this.dbService.getRecentMessages(groupId, limit);
    
    // Simple summarization - extract key topics and participants
    const participants = new Set<string>();
    const topics = new Set<string>();
    
    messages.forEach(msg => {
      const [speaker, text] = msg.split(': ', 2);
      participants.add(speaker);
      
      // Extract potential topics (nouns, verbs)
      const words = text.toLowerCase().match(/\b\w{4,}\b/g) || [];
      words.forEach(word => topics.add(word));
    });

    return `Recent conversation with ${Array.from(participants).join(', ')}. Topics: ${Array.from(topics).slice(0, 5).join(', ')}.`;
  }
}