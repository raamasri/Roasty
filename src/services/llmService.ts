import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { GroupSettings } from '../types';
import { MemoryContext } from './memorySystem';

export interface RoastRequest {
  settings: GroupSettings;
  memoryContext: MemoryContext;
  targetName?: string;
  triggerMessage: string;
}

export class LLMService {
  private anthropic?: Anthropic;
  private openai?: OpenAI;
  private provider: 'anthropic' | 'openai';

  constructor() {
    this.provider = (process.env.LLM_PROVIDER as 'anthropic' | 'openai') || 'anthropic';
    
    if (process.env.ANTHROPIC_API_KEY) {
      this.anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });
    }

    if (process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
    }
  }

  /**
   * Generate a contextual roast using LLM
   */
  async generateRoast(request: RoastRequest): Promise<string> {
    const prompt = this.buildRoastPrompt(request);
    
    try {
      if (this.provider === 'anthropic' && this.anthropic) {
        return await this.generateWithClaude(prompt, request.settings);
      } else if (this.provider === 'openai' && this.openai) {
        return await this.generateWithGPT(prompt, request.settings);
      } else {
        throw new Error('No LLM provider configured');
      }
    } catch (error) {
      console.error('❌ LLM generation failed:', error);
      return this.getSafeFallback(request.settings.style);
    }
  }

  /**
   * Build context-aware prompt for roast generation
   */
  private buildRoastPrompt(request: RoastRequest): string {
    const { settings, memoryContext, targetName, triggerMessage } = request;

    let contextSection = '';
    
    // Add recent conversation context
    if (memoryContext.recentMessages.length > 0) {
      const recentContext = memoryContext.recentMessages.slice(-10).join('\n');
      contextSection += `\nRecent conversation:\n${recentContext}\n`;
    }

    // Add personal memories for more targeted roasts
    if (memoryContext.personalMemories.length > 0) {
      const facts = memoryContext.personalMemories
        .slice(0, 3)
        .map(m => m.content)
        .join('; ');
      contextSection += `\nWhat I know about ${targetName || 'them'}: ${facts}\n`;
    }

    // Add running jokes for callbacks
    if (memoryContext.runningJokes.length > 0) {
      const jokes = memoryContext.runningJokes
        .slice(0, 2)
        .map(m => m.content)
        .join('; ');
      contextSection += `\nRunning jokes: ${jokes}\n`;
    }

    // Add personality traits for better targeting
    if (memoryContext.participantTraits.length > 0) {
      const traits = memoryContext.participantTraits
        .slice(0, 2)
        .map(m => m.content)
        .join('; ');
      contextSection += `\nPersonality notes: ${traits}\n`;
    }

    return `You are RoastBot, a CONSENSUAL, LIGHT-ROAST group chat friend.

CORE PRINCIPLES:
- Humor ≠ harm. Be playful, empathetic, and punch UP at situations, not people.
- NEVER reference protected classes (race, religion, gender, orientation, disability, nationality), body/looks/health, trauma, or private info.
- Keep replies SHORT: max 2 sentences or 240 chars. Use 1 emoji in ~20% of replies.
- Respect "topics_off": ${settings.topicsOff.join(', ')}. If any roast would violate them, pick a neutral, situational tease instead.
- Style preset: ${settings.style}. Heat level: ${settings.heat}/10 (0=wholesome, 10=spicy but still safe).
- If conversation is serious (grief, crisis, personal help), DO NOT roast; respond kindly or stay silent.

STYLE GUIDELINES:
${this.getStyleGuidelines(settings.style)}

HEAT CALIBRATION:
${this.getHeatGuidelines(settings.heat)}

${contextSection}

Current trigger: "${triggerMessage}"
${targetName ? `Target: ${targetName}` : ''}

Generate a ${settings.style} roast at heat level ${settings.heat}/10. Remember: playful, not harmful. Reference the context naturally if relevant.

Response (roast only, no explanation):`;
  }

  /**
   * Generate roast using Claude
   */
  private async generateWithClaude(prompt: string, settings: GroupSettings): Promise<string> {
    if (!this.anthropic) {
      throw new Error('Anthropic client not initialized');
    }
    
    const response = await this.anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 150,
      temperature: this.mapHeatToTemperature(settings.heat),
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const content = response.content[0];
    if (content.type === 'text') {
      return content.text.trim();
    }

    throw new Error('Unexpected response format from Claude');
  }

  /**
   * Generate roast using GPT
   */
  private async generateWithGPT(prompt: string, settings: GroupSettings): Promise<string> {
    if (!this.openai) {
      throw new Error('OpenAI client not initialized');
    }
    
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 150,
      temperature: this.mapHeatToTemperature(settings.heat),
      messages: [
        {
          role: 'system',
          content: 'You are RoastBot, a consensual light-roast bot. Follow the instructions exactly.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content received from GPT');
    }

    return content.trim();
  }

  /**
   * Get style-specific guidelines
   */
  private getStyleGuidelines(style: string): string {
    const guidelines = {
      bestie: 'Warm teasing, pop culture references, affectionate nicknames (sparingly). Like a supportive friend who lovingly calls out your choices.',
      dad: 'Gentle sarcasm, "proud of you" jokes, corny analogies. Channel supportive-but-sassy parent energy.',
      dry: 'Deadpan, concise, observational. Deliver burns with the emotional range of a weather report.',
      gamer: 'Playful competitiveness, game metaphors, zero toxicity. Think friendly rivalry, not toxic gaming culture.'
    };

    return guidelines[style as keyof typeof guidelines] || guidelines.bestie;
  }

  /**
   * Get heat level guidelines
   */
  private getHeatGuidelines(heat: number): string {
    if (heat <= 2) return 'Very gentle, wholesome teasing. More supportive than roasty.';
    if (heat <= 4) return 'Light, friendly ribbing. Clearly playful and affectionate.';
    if (heat <= 6) return 'Standard roast level. Witty and pointed but not mean.';
    if (heat <= 8) return 'Spicier roasts, more direct. Still respectful but with bite.';
    return 'Maximum spice while staying safe. Creative, sharp, but never cruel.';
  }

  /**
   * Map heat level to LLM temperature
   */
  private mapHeatToTemperature(heat: number): number {
    if (heat <= 2) return 0.5;
    if (heat <= 5) return 0.8;
    if (heat <= 8) return 1.0;
    return 1.1;
  }

  /**
   * Get safe fallback response when generation fails
   */
  private getSafeFallback(style: string): string {
    const fallbacks = {
      bestie: [
        "That energy hits different, not gonna lie.",
        "Main character vibes, supporting character execution.",
        "Bold of you to bring confidence and zero receipts."
      ],
      dad: [
        "Proud of you, sport. Now let's work on that follow-through.",
        "That's some championship-level optimism right there.",
        "I'd be impressed if I weren't so concerned."
      ],
      dry: [
        "Fascinating choice.",
        "The confidence is... notable.",
        "That's certainly one way to approach it."
      ],
      gamer: [
        "Achievement unlocked: Bold Strategy.",
        "That's a bold play, let's see how it works out.",
        "Respawn recommended."
      ]
    };

    const styleFallbacks = fallbacks[style as keyof typeof fallbacks] || fallbacks.bestie;
    return styleFallbacks[Math.floor(Math.random() * styleFallbacks.length)];
  }

  /**
   * Check if content needs safety filtering
   */
  async moderateContent(text: string): Promise<{ safe: boolean; reason?: string }> {
    // Simple keyword-based moderation - could be enhanced with external API
    const unsafePatterns = [
      /\b(kill|die|suicide|hurt)\b/i,
      /\b(ugly|fat|stupid|dumb|idiot)\b/i,
      /\b(race|religion|gay|straight|trans)\b/i,
      /(fuck|shit|damn)/i // Adjust based on your safety requirements
    ];

    for (const pattern of unsafePatterns) {
      if (pattern.test(text)) {
        return { safe: false, reason: 'Contains potentially harmful content' };
      }
    }

    return { safe: true };
  }
}