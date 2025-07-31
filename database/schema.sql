-- RoastBot Database Schema
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Groups and channels
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  channel VARCHAR(20) NOT NULL CHECK (channel IN ('twilio', 'telegram')),
  channel_ref TEXT NOT NULL, -- Phone number for SMS, chat_id for Telegram
  created_at TIMESTAMP DEFAULT now(),
  active BOOLEAN DEFAULT true
);

-- Participants in groups
CREATE TABLE participants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  handle TEXT, -- Phone number or username
  display_name TEXT,
  role VARCHAR(10) DEFAULT 'member' CHECK (role IN ('member', 'admin')),
  consent BOOLEAN DEFAULT false,
  muted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- Group settings
CREATE TABLE settings (
  group_id UUID PRIMARY KEY REFERENCES groups(id) ON DELETE CASCADE,
  heat INT DEFAULT 5 CHECK (heat BETWEEN 0 AND 10),
  style TEXT DEFAULT 'bestie' CHECK (style IN ('dad', 'dry', 'bestie', 'gamer')),
  topics_off TEXT[] DEFAULT ARRAY['looks', 'family', 'religion', 'politics', 'health']::TEXT[],
  max_rate_secs INT DEFAULT 45,
  safe_mode BOOLEAN DEFAULT true,
  paused BOOLEAN DEFAULT false
);

-- Message history
CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  participant_id UUID REFERENCES participants(id),
  channel_msg_id TEXT,
  text TEXT,
  is_bot_message BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

-- Long-term memory for context building
CREATE TABLE conversation_memory (
  id BIGSERIAL PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  participant_id UUID REFERENCES participants(id),
  memory_type TEXT CHECK (memory_type IN ('fun_fact', 'running_joke', 'personality_trait', 'relationship')),
  content TEXT,
  confidence_score FLOAT DEFAULT 0.5,
  last_referenced TIMESTAMP,
  created_at TIMESTAMP DEFAULT now()
);

-- Interaction history for relationship building
CREATE TABLE interaction_history (
  id BIGSERIAL PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  participant_id UUID REFERENCES participants(id),
  interaction_type TEXT CHECK (interaction_type IN ('roasted', 'defended', 'mentioned', 'command')),
  context TEXT,
  sentiment FLOAT, -- -1 to 1 scale
  created_at TIMESTAMP DEFAULT now()
);

-- Safety incidents
CREATE TABLE incidents (
  id BIGSERIAL PRIMARY KEY,
  group_id UUID REFERENCES groups(id),
  participant_id UUID REFERENCES participants(id),
  type TEXT CHECK (type IN ('report', 'moderation_block', 'fallback', 'safety_violation')),
  reason TEXT,
  raw_input JSONB,
  raw_output JSONB,
  created_at TIMESTAMP DEFAULT now()
);

-- Indexes for performance
CREATE INDEX idx_messages_group_created ON messages(group_id, created_at DESC);
CREATE INDEX idx_participants_group ON participants(group_id);
CREATE INDEX idx_memory_group_participant ON conversation_memory(group_id, participant_id);
CREATE INDEX idx_interactions_group_participant ON interaction_history(group_id, participant_id);
CREATE INDEX idx_incidents_created ON incidents(created_at DESC);