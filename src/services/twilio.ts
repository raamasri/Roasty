import twilio from 'twilio';

// Initialize client lazily to ensure env vars are loaded
let client: twilio.Twilio;
function getClient() {
  if (!client) {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new Error('Twilio credentials not found in environment variables');
    }
    client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }
  return client;
}

export interface TwilioMessage {
  From: string;
  To: string;
  Body: string;
  MessageSid: string;
  AccountSid: string;
}

export class TwilioService {
  private static instance: TwilioService;
  
  static getInstance(): TwilioService {
    if (!TwilioService.instance) {
      TwilioService.instance = new TwilioService();
    }
    return TwilioService.instance;
  }

  /**
   * Validate Twilio webhook signature for security
   */
  validateSignature(signature: string, url: string, params: any): boolean {
    if (!process.env.TWILIO_AUTH_TOKEN) return false;
    
    const expected = twilio.validateRequest(
      process.env.TWILIO_AUTH_TOKEN,
      signature,
      url,
      params
    );
    
    return expected;
  }

  /**
   * Send SMS message
   */
  async sendSMS(to: string, message: string): Promise<void> {
    try {
      const twilioClient = getClient();
      await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: to
      });
      console.log(`✅ SMS sent to ${to}`);
    } catch (error) {
      console.error(`❌ Failed to send SMS to ${to}:`, error);
      throw error;
    }
  }

  /**
   * Parse incoming message and extract key information
   */
  parseIncomingMessage(body: any): TwilioMessage {
    return {
      From: body.From,
      To: body.To,
      Body: body.Body || '',
      MessageSid: body.MessageSid,
      AccountSid: body.AccountSid
    };
  }

  /**
   * Format phone number for consistent storage
   */
  formatPhoneNumber(phone: string): string {
    // Remove all non-digits and add +1 if US number
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
      return `+1${digits}`;
    }
    if (digits.length === 11 && digits.startsWith('1')) {
      return `+${digits}`;
    }
    return `+${digits}`;
  }
}