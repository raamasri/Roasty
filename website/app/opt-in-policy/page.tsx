export default function OptInPolicy() {
  return (
    <div className="min-h-screen bg-roast-dark pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-roast-gray/50 rounded-lg p-8 border border-roast-orange/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Opt-In Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Your consent and privacy are our top priorities. Please read this policy carefully.
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                1. Consent-Based Service
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is a <strong>100% consent-based service</strong>. We will only send you messages after you have explicitly opted in by texting <code className="bg-roast-dark px-2 py-1 rounded text-roast-orange">/agree</code> to our service.
                </p>
                <p>
                  <strong>No messages will be sent to you without your explicit consent.</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                2. How to Opt In
              </h2>
              <div className="bg-roast-dark rounded-lg p-4 mb-4">
                <p className="font-mono text-green-400 mb-2">To start receiving roasts:</p>
                <ol className="list-decimal list-inside space-y-2 font-mono text-sm">
                  <li>Text <span className="text-roast-orange">"roast me"</span> to <span className="text-roast-orange">+1 (877) 780-4236</span></li>
                  <li>Read the welcome message and terms</li>
                  <li>Reply <span className="text-roast-orange">"/agree"</span> to give your consent</li>
                  <li>Start receiving personalized AI roasts!</li>
                </ol>
              </div>
              <p>
                By typing <code className="bg-roast-dark px-2 py-1 rounded text-roast-orange">/agree</code>, you confirm that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>You are 13 years of age or older</li>
                <li>You consent to receiving SMS messages from Roasty</li>
                <li>You understand this is an AI-powered roasting service</li>
                <li>You agree to our terms of use and content policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                3. How to Opt Out
              </h2>
              <div className="bg-roast-dark rounded-lg p-4 mb-4">
                <p className="font-mono text-red-400 mb-2">To stop receiving messages:</p>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm">
                  <li>Text <span className="text-roast-orange">"/pause"</span> to temporarily pause</li>
                  <li>Text <span className="text-roast-orange">"/stop"</span> or <span className="text-roast-orange">"STOP"</span> to permanently opt out</li>
                  <li>Text <span className="text-roast-orange">"UNSUBSCRIBE"</span> to opt out</li>
                </ul>
              </div>
              <p>
                <strong>You can opt out at any time, no questions asked.</strong> When you opt out:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>We will immediately stop sending you messages</li>
                <li>Your conversation history will be retained for 30 days then deleted</li>
                <li>You can opt back in anytime by texting "/agree" again</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                4. Message Frequency & Charges
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>Message Frequency:</strong> Roasty only responds when you initiate conversation. We do not send unsolicited messages or marketing content.
                </p>
                <p>
                  <strong>Typical Usage:</strong> 1-10 messages per day, depending on your activity.
                </p>
                <p>
                  <strong>Charges:</strong> Message and data rates may apply from your mobile carrier. Roasty is free to use, but your carrier may charge for SMS messages.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                5. Content & Safety
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is designed to be <strong>playful, not harmful</strong>. Our AI is programmed with safety guardrails:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>No hate speech</strong> or harassment</li>
                  <li><strong>No targeting</strong> of protected classes (race, religion, gender, etc.)</li>
                  <li><strong>No body shaming</strong> or appearance-based comments</li>
                  <li><strong>No personal attacks</strong> on sensitive topics</li>
                  <li><strong>Respectful boundaries</strong> with multiple safety layers</li>
                </ul>
                <p>
                  If you receive content that violates these standards, text <code className="bg-roast-dark px-2 py-1 rounded text-roast-orange">/report [reason]</code> and we will investigate immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                6. Data & Privacy
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>What we collect:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your phone number (for SMS delivery)</li>
                  <li>Messages you send us (for context and AI responses)</li>
                  <li>Your preferences (heat level, style, topics)</li>
                  <li>Usage analytics (anonymized)</li>
                </ul>
                <p>
                  <strong>What we DON'T do:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Share your data with third parties for marketing</li>
                  <li>Sell your personal information</li>
                  <li>Store your messages longer than necessary</li>
                  <li>Use your data for advertising</li>
                </ul>
                <p>
                  <strong>Data retention:</strong> Messages are kept for 30 days for context, then automatically deleted. Preferences are kept while you're opted in.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                7. Age Requirements
              </h2>
              <p>
                You must be <strong>at least 13 years old</strong> to use Roasty. If you are under 18, you should have parental consent before opting in. Parents can opt their minor children out at any time by texting "STOP" from the child's phone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                8. Service Availability
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is currently available in the United States. Message delivery depends on:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your mobile carrier's SMS service</li>
                  <li>Network connectivity</li>
                  <li>Our service uptime (we aim for 99.9% availability)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this opt-in policy occasionally. If we make significant changes that affect your rights, we'll notify you via SMS before the changes take effect. Continued use after notification constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                10. Contact Us
              </h2>
              <div className="bg-roast-dark rounded-lg p-4">
                <p className="mb-2">Questions about this policy? Contact us:</p>
                <ul className="space-y-2 font-mono text-sm">
                  <li><strong>SMS:</strong> Text "help" to <span className="text-roast-orange">+1 (877) 780-4236</span></li>
                  <li><strong>Issues:</strong> Text <span className="text-roast-orange">"/report [your message]"</span></li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-roast-orange/10 rounded-lg border border-roast-orange/30">
            <h3 className="text-xl font-semibold text-roast-orange mb-3">
              Quick Summary
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✅ <strong>100% consent-based</strong> - no messages without your agreement</li>
              <li>✅ <strong>Easy opt-out</strong> - text "STOP" anytime</li>
              <li>✅ <strong>Safe content</strong> - AI with built-in safety guardrails</li>
              <li>✅ <strong>Privacy focused</strong> - we don't sell your data</li>
              <li>✅ <strong>You're in control</strong> - adjust settings or pause anytime</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="bg-roast-orange text-white px-6 py-3 rounded-lg hover:bg-roast-red transition-colors"
            >
              ← Back to Roasty
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}