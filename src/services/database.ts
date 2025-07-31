import { db } from '../config/database';
import { Group, Participant, GroupSettings, ConversationMemory } from '../types';

export class DatabaseService {
  public db = db; // Expose db for direct queries when needed
  
  async getOrCreateGroup(channel: 'twilio' | 'telegram', channelRef: string): Promise<Group> {
    // Try to find existing group
    const result = await db.query(
      'SELECT * FROM groups WHERE channel = $1 AND channel_ref = $2',
      [channel, channelRef]
    );

    if (result.rows.length > 0) {
      const row = result.rows[0];
      return {
        id: row.id,
        channel: row.channel,
        channelRef: row.channel_ref,
        createdAt: row.created_at,
        active: row.active
      };
    }

    // Create new group
    const insertResult = await db.query(
      'INSERT INTO groups (channel, channel_ref) VALUES ($1, $2) RETURNING *',
      [channel, channelRef]
    );

    const newGroup = insertResult.rows[0];

    // Create default settings
    await db.query(
      'INSERT INTO settings (group_id) VALUES ($1)',
      [newGroup.id]
    );

    return {
      id: newGroup.id,
      channel: newGroup.channel,
      channelRef: newGroup.channel_ref,
      createdAt: newGroup.created_at,
      active: newGroup.active
    };
  }

  async getOrCreateParticipant(groupId: string, handle: string, displayName: string): Promise<Participant> {
    // Try to find existing participant
    const result = await db.query(
      'SELECT * FROM participants WHERE group_id = $1 AND handle = $2',
      [groupId, handle]
    );

    if (result.rows.length > 0) {
      const row = result.rows[0];
      return {
        id: row.id,
        groupId: row.group_id,
        handle: row.handle,
        displayName: row.display_name,
        role: row.role,
        consent: row.consent,
        muted: row.muted,
        createdAt: row.created_at
      };
    }

    // Create new participant
    const insertResult = await db.query(
      'INSERT INTO participants (group_id, handle, display_name) VALUES ($1, $2, $3) RETURNING *',
      [groupId, handle, displayName]
    );

    const newParticipant = insertResult.rows[0];
    return {
      id: newParticipant.id,
      groupId: newParticipant.group_id,
      handle: newParticipant.handle,
      displayName: newParticipant.display_name,
      role: newParticipant.role,
      consent: newParticipant.consent,
      muted: newParticipant.muted,
      createdAt: newParticipant.created_at
    };
  }

  async getGroupSettings(groupId: string): Promise<GroupSettings> {
    const result = await db.query(
      'SELECT * FROM settings WHERE group_id = $1',
      [groupId]
    );

    if (result.rows.length === 0) {
      throw new Error(`No settings found for group ${groupId}`);
    }

    const row = result.rows[0];
    return {
      groupId: row.group_id,
      heat: row.heat,
      style: row.style,
      topicsOff: row.topics_off || [],
      maxRateSecs: row.max_rate_secs,
      safeMode: row.safe_mode,
      paused: row.paused
    };
  }

  async storeMessage(
    groupId: string, 
    participantId: string | null, 
    text: string, 
    channelMsgId: string | null,
    isBotMessage: boolean = false
  ): Promise<void> {
    await db.query(
      'INSERT INTO messages (group_id, participant_id, text, channel_msg_id, is_bot_message) VALUES ($1, $2, $3, $4, $5)',
      [groupId, participantId, text, channelMsgId, isBotMessage]
    );
  }

  async getRecentMessages(groupId: string, limit: number = 50): Promise<string[]> {
    const result = await db.query(
      `SELECT p.display_name, m.text, m.is_bot_message 
       FROM messages m 
       LEFT JOIN participants p ON m.participant_id = p.id 
       WHERE m.group_id = $1 
       ORDER BY m.created_at DESC 
       LIMIT $2`,
      [groupId, limit]
    );

    return result.rows.reverse().map(row => {
      const sender = row.is_bot_message ? 'RoastBot' : (row.display_name || 'User');
      return `${sender}: ${row.text}`;
    });
  }

  async updateParticipantConsent(participantId: string, consent: boolean): Promise<void> {
    await db.query(
      'UPDATE participants SET consent = $1 WHERE id = $2',
      [consent, participantId]
    );
  }

  async updateGroupSettings(groupId: string, updates: Partial<GroupSettings>): Promise<void> {
    const fields = [];
    const values = [];
    let paramCount = 1;

    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        // Convert camelCase to snake_case for database
        const dbField = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        fields.push(`${dbField} = $${paramCount}`);
        values.push(value);
        paramCount++;
      }
    }

    if (fields.length > 0) {
      values.push(groupId);
      await db.query(
        `UPDATE settings SET ${fields.join(', ')} WHERE group_id = $${paramCount}`,
        values
      );
    }
  }

  async storeMemory(memory: Omit<ConversationMemory, 'id' | 'createdAt'>): Promise<void> {
    await db.query(
      'INSERT INTO conversation_memory (group_id, participant_id, memory_type, content, confidence_score, last_referenced) VALUES ($1, $2, $3, $4, $5, $6)',
      [memory.groupId, memory.participantId, memory.memoryType, memory.content, memory.confidenceScore, memory.lastReferenced]
    );
  }

  async getMemories(groupId: string, participantId?: string): Promise<ConversationMemory[]> {
    let query = 'SELECT * FROM conversation_memory WHERE group_id = $1';
    let params = [groupId];

    if (participantId) {
      query += ' AND participant_id = $2';
      params.push(participantId);
    }

    query += ' ORDER BY last_referenced DESC, created_at DESC';

    const result = await db.query(query, params);
    
    return result.rows.map(row => ({
      id: row.id,
      groupId: row.group_id,
      participantId: row.participant_id,
      memoryType: row.memory_type,
      content: row.content,
      confidenceScore: row.confidence_score,
      lastReferenced: row.last_referenced,
      createdAt: row.created_at
    }));
  }
}