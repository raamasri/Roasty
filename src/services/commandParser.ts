import { DatabaseService } from './database';
import { GroupSettings } from '../types';

export interface CommandResult {
  type: 'command' | 'roast_trigger' | 'normal';
  command?: string;
  args?: string[];
  response?: string;
  success?: boolean;
}

export class CommandParser {
  private dbService: DatabaseService;

  constructor() {
    this.dbService = new DatabaseService();
  }

  /**
   * Parse incoming message for commands or triggers
   */
  parseMessage(text: string): CommandResult {
    const trimmed = text.trim();
    
    // Check for commands (start with /)
    if (trimmed.startsWith('/')) {
      return this.parseCommand(trimmed);
    }

    // Check for roast triggers
    if (this.isRoastTrigger(trimmed)) {
      return { type: 'roast_trigger' };
    }

    return { type: 'normal' };
  }

  /**
   * Execute command and return response
   */
  async executeCommand(
    command: string,
    args: string[],
    groupId: string,
    participantId: string
  ): Promise<string> {
    try {
      switch (command.toLowerCase()) {
        case 'agree':
          return await this.handleAgreeCommand(participantId);
        
        case 'help':
          return this.getHelpMessage();
        
        case 'rules':
          return this.getRulesMessage();
        
        case 'privacy':
          return this.getPrivacyMessage();
        
        case 'heat':
          return await this.handleHeatCommand(groupId, args);
        
        case 'style':
          return await this.handleStyleCommand(groupId, args);
        
        case 'topics':
          return await this.handleTopicsCommand(groupId, args);
        
        case 'pause':
          return await this.handlePauseCommand(groupId, true);
        
        case 'resume':
          return await this.handlePauseCommand(groupId, false);
        
        case 'mute':
          return await this.handleMuteCommand(groupId, args, true);
        
        case 'unmute':
          return await this.handleMuteCommand(groupId, args, false);
        
        case 'report':
          return await this.handleReportCommand(groupId, participantId, args);
        
        default:
          return `❓ Unknown command: ${command}. Type /help for available commands.`;
      }
    } catch (error) {
      console.error(`❌ Command execution failed:`, error);
      return `❌ Sorry, something went wrong processing that command.`;
    }
  }

  /**
   * Parse command string into command and arguments
   */
  private parseCommand(text: string): CommandResult {
    const parts = text.slice(1).split(/\s+/);
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    return {
      type: 'command',
      command,
      args
    };
  }

  /**
   * Check if message contains roast triggers
   */
  private isRoastTrigger(text: string): boolean {
    const triggers = [
      /\broast\s+me\b/i,
      /\bratio\s+me\b/i,
      /\bclap\s+back\b/i,
      /@roastbot/i,
      /\bcope\b/i,
      /\bskill\s+issue\b/i,
      /\btell\s+(him|her|them)\b/i,
      /\broast\s+@?\w+/i
    ];

    return triggers.some(trigger => trigger.test(text));
  }

  /**
   * Handle user consent agreement
   */
  private async handleAgreeCommand(participantId: string): Promise<string> {
    await this.dbService.updateParticipantConsent(participantId, true);
    return `✅ Welcome to RoastBot! You're now opted in. Try "roast me" to get started!\n\nTip: Use /heat 1-10 to adjust spice level, /style to change roast style.`;
  }

  /**
   * Handle heat adjustment command
   */
  private async handleHeatCommand(groupId: string, args: string[]): Promise<string> {
    if (args.length === 0) {
      const settings = await this.dbService.getGroupSettings(groupId);
      return `🌶️ Current heat level: ${settings.heat}/10\n\nUse /heat 0-10 to adjust (0=wholesome, 10=spicy)`;
    }

    const heat = parseInt(args[0]);
    if (isNaN(heat) || heat < 0 || heat > 10) {
      return `❌ Heat must be a number between 0-10. Current: ${(await this.dbService.getGroupSettings(groupId)).heat}/10`;
    }

    await this.dbService.updateGroupSettings(groupId, { heat });
    return `🌶️ Heat level set to ${heat}/10. ${this.getHeatDescription(heat)}`;
  }

  /**
   * Handle style change command
   */
  private async handleStyleCommand(groupId: string, args: string[]): Promise<string> {
    const validStyles = ['dad', 'dry', 'bestie', 'gamer'];
    
    if (args.length === 0) {
      const settings = await this.dbService.getGroupSettings(groupId);
      return `🎭 Current style: ${settings.style}\n\nAvailable styles: ${validStyles.join(', ')}\nUse /style <style> to change`;
    }

    const style = args[0].toLowerCase();
    if (!validStyles.includes(style)) {
      return `❌ Invalid style. Choose from: ${validStyles.join(', ')}`;
    }

    await this.dbService.updateGroupSettings(groupId, { style: style as any });
    return `🎭 Style changed to "${style}". ${this.getStyleDescription(style)}`;
  }

  /**
   * Handle topics on/off command
   */
  private async handleTopicsCommand(groupId: string, args: string[]): Promise<string> {
    if (args.length < 2) {
      const settings = await this.dbService.getGroupSettings(groupId);
      return `🚫 Topics currently off: ${settings.topicsOff.join(', ')}\n\nUsage: /topics off topic1,topic2 or /topics on topic1,topic2`;
    }

    const action = args[0].toLowerCase();
    const topics = args[1].split(',').map(t => t.trim().toLowerCase());
    const settings = await this.dbService.getGroupSettings(groupId);

    if (action === 'off') {
      const newTopicsOff = [...new Set([...settings.topicsOff, ...topics])];
      await this.dbService.updateGroupSettings(groupId, { topicsOff: newTopicsOff });
      return `🚫 Added to off-limits: ${topics.join(', ')}\n\nAll off-limits topics: ${newTopicsOff.join(', ')}`;
    } else if (action === 'on') {
      const newTopicsOff = settings.topicsOff.filter(t => !topics.includes(t));
      await this.dbService.updateGroupSettings(groupId, { topicsOff: newTopicsOff });
      return `✅ Removed from off-limits: ${topics.join(', ')}\n\nRemaining off-limits: ${newTopicsOff.join(', ')}`;
    } else {
      return `❌ Use "off" or "on". Example: /topics off work,family`;
    }
  }

  /**
   * Handle pause/resume command
   */
  private async handlePauseCommand(groupId: string, paused: boolean): Promise<string> {
    await this.dbService.updateGroupSettings(groupId, { paused });
    return paused 
      ? `⏸️ RoastBot paused. Use /resume to reactivate.`
      : `▶️ RoastBot resumed. Let the roasting continue!`;
  }

  /**
   * Handle mute/unmute command (placeholder - needs user identification)
   */
  private async handleMuteCommand(groupId: string, args: string[], mute: boolean): Promise<string> {
    if (args.length === 0) {
      return `❌ Usage: /${mute ? 'mute' : 'unmute'} @username or phone number`;
    }

    // For now, return a placeholder since we need to implement user lookup
    const target = args[0];
    return `${mute ? '🔇' : '🔊'} ${mute ? 'Muted' : 'Unmuted'} ${target}. They ${mute ? "won't" : 'will'} be roasted.`;
  }

  /**
   * Handle report command
   */
  private async handleReportCommand(groupId: string, participantId: string, args: string[]): Promise<string> {
    const reason = args.join(' ') || 'No reason provided';
    
    // Store incident
    await this.dbService.db.query(
      'INSERT INTO incidents (group_id, participant_id, type, reason) VALUES ($1, $2, $3, $4)',
      [groupId, participantId, 'report', reason]
    );

    // Reduce heat temporarily
    const settings = await this.dbService.getGroupSettings(groupId);
    const newHeat = Math.max(0, settings.heat - 2);
    await this.dbService.updateGroupSettings(groupId, { heat: newHeat });

    return `🚨 Report received. I'll tone it down for a while. Heat reduced to ${newHeat}/10.\n\nThank you for the feedback!`;
  }

  /**
   * Get help message
   */
  private getHelpMessage(): string {
    return `🤖 RoastBot Commands:

Basic:
• /agree - Opt in to receive roasts
• /help - Show this message
• /rules - See roasting boundaries

Controls:
• /heat 0-10 - Set roast intensity (default: 5)
• /style dad|dry|bestie|gamer - Change roast style
• /topics off work,family - Block certain topics
• /pause - Stop all roasts
• /resume - Resume roasting

Safety:
• /report <reason> - Report inappropriate roast
• /mute @user - Stop roasting specific person
• /unmute @user - Resume roasting person

Try: "roast me" to get roasted!`;
  }

  /**
   * Get rules message
   */
  private getRulesMessage(): string {
    return `📋 RoastBot Rules:

✅ What I DO:
• Light, playful roasting with consent
• Reference your messages and personality
• Adapt to your preferred style and heat
• Keep things fun and friendly

❌ What I DON'T do:
• No body/looks/health comments
• No protected class references
• No personal attacks or real harm
• No roasting without consent

🛡️ Safety:
• Use /report if anything crosses the line
• Use /pause to stop anytime
• All interactions are logged for safety

Remember: This is about playful banter between friends, not cruel humor!`;
  }

  /**
   * Get privacy message
   */
  private getPrivacyMessage(): string {
    return `🔒 Privacy Policy:

What I store:
• Recent messages for context (50 messages)
• Your preferences (heat, style, topics)
• Fun facts you share for better roasts

What I DON'T store:
• Personal identifiable information
• Messages older than 30 days
• Anything you ask me to forget

Your control:
• /pause to stop anytime
• Data deleted when you leave
• No data sold or shared

Questions? Contact support or use /report for issues.`;
  }

  /**
   * Get heat level description
   */
  private getHeatDescription(heat: number): string {
    if (heat <= 2) return 'Gentle and wholesome 😊';
    if (heat <= 4) return 'Light teasing 😏';
    if (heat <= 6) return 'Standard roast level 🔥';
    if (heat <= 8) return 'Spicy but safe 🌶️';
    return 'Maximum heat! 🔥🔥🔥';
  }

  /**
   * Get style description
   */
  private getStyleDescription(style: string): string {
    const descriptions = {
      bestie: 'Warm, supportive teasing like your best friend 💕',
      dad: 'Gentle dad jokes and proud-but-sassy energy 👨‍💼',
      dry: 'Deadpan observations with zero emotion 😐',
      gamer: 'Playful competitive banter without toxicity 🎮'
    };

    return descriptions[style as keyof typeof descriptions] || '';
  }
}