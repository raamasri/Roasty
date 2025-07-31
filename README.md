# RoastBot 🤖🔥

A consent-based, light-roast SMS bot that builds context and memory over time.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
- `TWILIO_ACCOUNT_SID`: Your Twilio Account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio Auth Token  
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number (format: +1234567890)
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_URL`: Redis connection string
- `ANTHROPIC_API_KEY`: Claude API key

### 3. Set Up Database
```bash
# Create PostgreSQL database named 'roastbot'
createdb roastbot

# Run the schema
psql -d roastbot -f database/schema.sql
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Expose Webhook (for testing)
```bash
# In another terminal
npx ngrok http 8080
```

### 6. Configure Twilio Webhook
1. Go to Twilio Console → Phone Numbers → Manage → Active Numbers
2. Click your phone number
3. Set webhook URL to: `https://your-ngrok-url.ngrok.io/webhook/twilio`
4. Set HTTP method to POST
5. Save configuration

## Testing the Bot

Send SMS messages to your Twilio number:

1. **First message**: `"roast me"` → Get onboarding message
2. **Opt-in**: `"/agree"` → Give consent 
3. **Try roasting**: `"roast me"` → Get bot response

## Commands

- `/agree` - Opt-in to bot roasts
- `/help` - Show available commands
- `/heat 0-10` - Set roast intensity
- `/style dad|dry|bestie|gamer` - Set roast style
- `/pause` - Pause bot responses
- `/resume` - Resume bot responses
- `/topics off looks,family` - Disable certain topics

## Architecture

- **Express/TypeScript** server with Twilio webhooks
- **PostgreSQL** for persistent data and memory
- **Redis** for rate limiting and ephemeral context
- **Claude/GPT** for roast generation (coming next)

## Development

```bash
npm run dev    # Development with auto-reload
npm run build  # Compile TypeScript  
npm run start  # Production server
npm run lint   # Code linting
```

## Project Status

✅ SMS webhook integration
✅ Database schema and models  
✅ User consent and onboarding
✅ Rate limiting and safety
🚧 LLM integration (next)
🚧 Advanced memory system
🚧 Command parser