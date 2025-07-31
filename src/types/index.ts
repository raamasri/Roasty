export interface IncomingMessage {
  channel: 'twilio' | 'telegram';
  channelRef: string; // phone number or chat_id
  from: string; // sender identifier
  text: string;
  messageId: string;
}

export interface Group {
  id: string;
  channel: 'twilio' | 'telegram';
  channelRef: string;
  createdAt: Date;
  active: boolean;
}

export interface Participant {
  id: string;
  groupId: string;
  handle: string;
  displayName?: string;
  role: 'member' | 'admin';
  consent: boolean;
  muted: boolean;
  createdAt: Date;
}

export interface GroupSettings {
  groupId: string;
  heat: number; // 0-10
  style: 'dad' | 'dry' | 'bestie' | 'gamer';
  topicsOff: string[];
  maxRateSecs: number;
  safeMode: boolean;
  paused: boolean;
}

export interface ConversationMemory {
  id: string;
  groupId: string;
  participantId: string;
  memoryType: 'fun_fact' | 'running_joke' | 'personality_trait' | 'relationship';
  content: string;
  confidenceScore: number;
  lastReferenced?: Date;
  createdAt: Date;
}

export interface RoastContext {
  group: Group;
  settings: GroupSettings;
  participant: Participant;
  recentMessages: string[];
  memories: ConversationMemory[];
  targetUser?: Participant;
}