import { IncomingMessage, Group, Participant, GroupSettings } from '../types';
import { DatabaseService } from './database';
import { TwilioService } from './twilio';
import { MemorySystem } from './memorySystem';
import { LLMService } from './llmService';
import { CommandParser } from './commandParser';

export class MessageHandler {
  private dbService: DatabaseService;
  private twilioService: TwilioService;
  private memorySystem: MemorySystem;
  private llmService: LLMService;
  private commandParser: CommandParser;

  constructor() {
    this.dbService = new DatabaseService();
    this.twilioService = TwilioService.getInstance();
    this.memorySystem = new MemorySystem();
    this.llmService = new LLMService();
    this.commandParser = new CommandParser();
  }

  async handleIncomingMessage(message: IncomingMessage): Promise<void> {
    try {
      // Get or create group
      const group = await this.dbService.getOrCreateGroup(message.channel, message.channelRef);
      
      // Get or create participant
      const participant = await this.dbService.getOrCreateParticipant(
        group.id, 
        message.from,
        this.extractDisplayName(message.from)
      );

      // Store the incoming message
      await this.dbService.storeMessage(group.id, participant.id, message.text, message.messageId);

      // Parse message for commands or triggers
      const parseResult = this.commandParser.parseMessage(message.text);

      if (parseResult.type === 'command') {
        // Handle command
        const response = await this.commandParser.executeCommand(
          parseResult.command!,
          parseResult.args!,
          group.id,
          participant.id
        );
        await this.sendResponse(message, response);
      } else if (parseResult.type === 'roast_trigger') {
        // Check if bot should respond with roast
        if (await this.shouldRespond(message, group, participant)) {
          await this.generateAndSendResponse(message, group, participant);
        }
      }

      // Extract and store memories from the conversation
      const recentMessages = await this.dbService.getRecentMessages(group.id, 10);
      await this.memorySystem.extractAndStoreMemories(
        group.id,
        participant.id,
        message.text,
        recentMessages
      );

    } catch (error) {
      console.error('❌ Error handling message:', error);
    }
  }

  private async shouldRespond(
    message: IncomingMessage, 
    group: Group, 
    participant: Participant
  ): Promise<boolean> {
    // Get group settings
    const settings = await this.dbService.getGroupSettings(group.id);
    
    // Check if paused
    if (settings.paused) return false;
    
    // Check if user has consent
    if (!participant.consent) {
      // Show onboarding if this looks like a trigger
      if (this.isTriggerMessage(message.text)) {
        await this.sendOnboardingMessage(message);
      }
      return false;
    }
    
    // Check if user is muted
    if (participant.muted) return false;
    
    // Check rate limiting
    if (await this.isRateLimited(group.id, settings.maxRateSecs)) return false;
    
    // Check if message contains triggers
    return this.isTriggerMessage(message.text);
  }

  private isTriggerMessage(text: string): boolean {
    const triggers = [
      /\broast\s+me\b/i,
      /\bratio\s+me\b/i,
      /\bclap\s+back\b/i,
      /@roastbot/i,
      /\bcope\b/i,
      /\bskill\s+issue\b/i,
      /\btell\s+him\b/i
    ];
    
    return triggers.some(trigger => trigger.test(text));
  }

  private async isRateLimited(groupId: string, maxRateSecs: number): Promise<boolean> {
    // Check Redis for last bot reply timestamp
    const { redis } = await import('../config/database');
    const lastReply = await redis.get(`ratelimit:${groupId}`);
    
    if (!lastReply) return false;
    
    const timeSinceLastReply = Date.now() - parseInt(lastReply);
    return timeSinceLastReply < (maxRateSecs * 1000);
  }

  private async generateAndSendResponse(
    message: IncomingMessage,
    group: Group,
    participant: Participant
  ): Promise<void> {
    try {
      // Set rate limit
      const { redis } = await import('../config/database');
      await redis.set(`ratelimit:${group.id}`, Date.now().toString());

      // Get group settings
      const settings = await this.dbService.getGroupSettings(group.id);

      // Build memory context for the roast
      const memoryContext = await this.memorySystem.buildRoastContext(
        group.id,
        participant.id
      );

      // Generate roast using LLM
      const roastRequest = {
        settings,
        memoryContext,
        targetName: participant.displayName || participant.handle,
        triggerMessage: message.text
      };

      const roast = await this.llmService.generateRoast(roastRequest);

      // Moderate the generated content
      const moderation = await this.llmService.moderateContent(roast);
      
      let finalResponse = roast;
      if (!moderation.safe) {
        console.warn(`⚠️ Moderation blocked roast: ${moderation.reason}`);
        // Log incident
        await this.dbService.db.query(
          'INSERT INTO incidents (group_id, participant_id, type, reason, raw_output) VALUES ($1, $2, $3, $4, $5)',
          [group.id, participant.id, 'moderation_block', moderation.reason, JSON.stringify({ original: roast })]
        );
        
        // Use safe fallback
        finalResponse = this.getSafeFallback(settings.style);
      }

      // Send response
      await this.sendResponse(message, finalResponse);
      
      // Store bot message
      await this.dbService.storeMessage(group.id, null, finalResponse, null, true);

    } catch (error) {
      console.error('❌ Error generating roast:', error);
      const fallback = "🤖 My roast generator is taking a coffee break. Try again in a moment!";
      await this.sendResponse(message, fallback);
    }
  }

  private async sendResponse(message: IncomingMessage, response: string): Promise<void> {
    if (message.channel === 'twilio') {
      await this.twilioService.sendSMS(message.from, response);
    }
    // Add other channel handlers here (Telegram, etc.)
  }

  private getSafeFallback(style: string): string {
    const fallbacks = {
      bestie: "Your energy is... unique. 💫",
      dad: "I'm proud of your confidence, sport.",
      dry: "Fascinating approach.",
      gamer: "Bold strategy. Respawn recommended."
    };
    
    return fallbacks[style as keyof typeof fallbacks] || fallbacks.bestie;
  }

  private async sendOnboardingMessage(message: IncomingMessage): Promise<void> {
    const onboardingText = `👋 Welcome to RoastBot! I'm a consent-based roast bot that keeps things playful, not harmful.

To get started, reply "/agree" to opt-in. Then try "roast me" to see what I've got!

Use "/help" to see all commands or "/rules" to understand the boundaries.`;

    if (message.channel === 'twilio') {
      await this.twilioService.sendSMS(message.from, onboardingText);
    }
  }

  private extractDisplayName(handle: string): string {
    // For phone numbers, return last 4 digits as display name
    if (handle.startsWith('+')) {
      return `User${handle.slice(-4)}`;
    }
    return handle;
  }
}