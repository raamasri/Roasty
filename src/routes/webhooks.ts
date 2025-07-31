import { Router, Request, Response } from 'express';
import { TwilioService } from '../services/twilio';
import { MessageHandler } from '../services/messageHandler';

const router = Router();
const twilioService = TwilioService.getInstance();
const messageHandler = new MessageHandler();

/**
 * Twilio SMS webhook endpoint
 */
router.post('/twilio', async (req: Request, res: Response) => {
  try {
    // Validate Twilio signature for security (disabled for testing)
    if (process.env.NODE_ENV === 'production') {
      const signature = req.headers['x-twilio-signature'] as string;
      const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
      
      if (!twilioService.validateSignature(signature, url, req.body)) {
        console.warn('❌ Invalid Twilio signature');
        return res.status(403).send('Forbidden');
      }
    }

    // Parse the incoming message
    const message = twilioService.parseIncomingMessage(req.body);
    console.log(`📱 SMS received from ${message.From}: ${message.Body}`);

    // Process the message through our handler
    await messageHandler.handleIncomingMessage({
      channel: 'twilio',
      channelRef: message.From, // Use sender's phone as group reference for SMS
      from: message.From,
      text: message.Body,
      messageId: message.MessageSid
    });

    // Respond with TwiML (empty response is fine)
    res.type('text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
    
  } catch (error) {
    console.error('❌ Error processing Twilio webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Health check endpoint
 */
router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;