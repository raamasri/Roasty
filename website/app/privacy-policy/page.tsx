export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-roast-dark pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-roast-gray/50 rounded-lg p-8 border border-roast-orange/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: July 31, 2024
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Information You Provide</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Phone Number:</strong> Required for SMS message delivery</li>
                    <li><strong>Messages:</strong> Text messages you send to interact with Roasty</li>
                    <li><strong>Preferences:</strong> Settings like heat level, style, and topic restrictions</li>
                    <li><strong>Personal Details:</strong> Information you voluntarily share (hobbies, job, interests) to improve roast personalization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Usage Data:</strong> Message frequency, response times, feature usage</li>
                    <li><strong>Technical Data:</strong> Carrier information, message delivery status</li>
                    <li><strong>Analytics:</strong> Aggregated, anonymized usage statistics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white mb-2">Primary Uses</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Delivery:</strong> Send you personalized AI-generated roasts via SMS</li>
                  <li><strong>Personalization:</strong> Remember your preferences and conversation context</li>
                  <li><strong>Safety:</strong> Monitor for inappropriate content and enforce community standards</li>
                  <li><strong>Support:</strong> Respond to help requests and resolve issues</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-white mb-2 mt-6">We Do NOT Use Your Information For</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Marketing or advertising to you</li>
                  <li>Selling to third parties</li>
                  <li>Unsolicited communications</li>
                  <li>Creating user profiles for external use</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                3. Information Sharing & Disclosure
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                  <p>We share limited data with trusted service providers who help us operate Roasty:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Twilio:</strong> SMS message delivery (phone number, message content)</li>
                    <li><strong>Anthropic/OpenAI:</strong> AI response generation (message content, anonymized)</li>
                    <li><strong>Cloud Providers:</strong> Data storage and processing (encrypted data)</li>
                  </ul>
                  <p className="mt-2">All service providers are bound by strict data protection agreements.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                  <p>We may disclose information if required by law or to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Comply with legal process or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Protect users or the public from harm</li>
                    <li>Investigate potential violations of our terms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">We Never</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sell your personal information to advertisers</li>
                    <li>Share your messages publicly</li>
                    <li>Use your data for purposes you haven't consented to</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                4. Data Security
              </h2>
              <div className="space-y-3">
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Encryption:</strong> Data encrypted in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Limited employee access on need-to-know basis</li>
                  <li><strong>Monitoring:</strong> Continuous security monitoring and threat detection</li>
                  <li><strong>Regular Audits:</strong> Security reviews and vulnerability assessments</li>
                  <li><strong>Incident Response:</strong> Procedures for handling any security incidents</li>
                </ul>
                <p className="mt-4">
                  <strong>Note:</strong> While we use best practices to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                5. Data Retention
              </h2>
              <div className="bg-roast-dark rounded-lg p-4 mb-4">
                <h3 className="text-white font-semibold mb-2">Retention Periods</h3>
                <ul className="list-disc list-inside space-y-2 text-sm font-mono">
                  <li><span className="text-roast-orange">Messages:</span> 30 days for context, then deleted</li>
                  <li><span className="text-roast-orange">Preferences:</span> Until you opt out or delete account</li>
                  <li><span className="text-roast-orange">Safety incidents:</span> 90 days for investigation</li>
                  <li><span className="text-roast-orange">Analytics:</span> Aggregated data retained indefinitely</li>
                </ul>
              </div>
              <p>
                We automatically delete your personal data according to these schedules. You can request earlier deletion by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                6. Your Rights & Choices
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Control Your Experience</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Opt Out:</strong> Text "STOP" to immediately stop all messages</li>
                    <li><strong>Pause:</strong> Text "/pause" to temporarily pause messages</li>
                    <li><strong>Adjust Settings:</strong> Change heat level, style, or topic restrictions</li>
                    <li><strong>Delete Data:</strong> Request deletion of your stored information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Rights (where applicable)</h3>
                  <p>Depending on your location, you may have additional rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data</li>
                    <li><strong>Restriction:</strong> Request limitation of data processing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                7. Children's Privacy
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
                <p>
                  If you are between 13-17, you should have parental consent before using Roasty. Parents can opt their children out at any time.
                </p>
                <p>
                  If we become aware that we have collected personal information from a child under 13, we will delete that information immediately.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                8. International Users
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is currently available only in the United States. Your information is processed and stored in the United States.
                </p>
                <p>
                  If you use Roasty from outside the United States, you consent to the transfer of your information to the United States for processing and storage.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                9. Changes to Privacy Policy
              </h2>
              <div className="space-y-3">
                <p>
                  We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements.
                </p>
                <p>
                  <strong>Notification:</strong> We will notify you of material changes via SMS before they take effect.
                </p>
                <p>
                  <strong>Continued Use:</strong> Your continued use of Roasty after notification constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                10. Contact Us
              </h2>
              <div className="bg-roast-dark rounded-lg p-4">
                <p className="mb-4">Questions about this Privacy Policy or your data?</p>
                <div className="space-y-2 font-mono text-sm">
                  <p><strong>SMS:</strong> Text "privacy" to <span className="text-roast-orange">+1 (877) 780-4236</span></p>
                  <p><strong>Data Requests:</strong> Text <span className="text-roast-orange">"/data [your request]"</span></p>
                  <p><strong>Opt Out:</strong> Text <span className="text-roast-orange">"STOP"</span></p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-roast-orange/10 rounded-lg border border-roast-orange/30">
            <h3 className="text-xl font-semibold text-roast-orange mb-3">
              Privacy Summary
            </h3>
            <ul className="space-y-2 text-sm">
              <li>🔒 <strong>We protect your data</strong> with industry-standard security</li>
              <li>🚫 <strong>We don't sell your information</strong> to third parties</li>
              <li>⏰ <strong>Messages auto-delete</strong> after 30 days</li>
              <li>✋ <strong>You control your experience</strong> - opt out anytime</li>
              <li>🛡️ <strong>Safety-focused</strong> - AI with built-in protections</li>
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