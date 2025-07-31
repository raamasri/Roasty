export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-roast-dark pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-roast-gray/50 rounded-lg p-8 border border-roast-orange/20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: July 31, 2024
            </p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By texting <code className="bg-roast-dark px-2 py-1 rounded text-roast-orange">/agree</code> to Roasty or using our service, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                2. Description of Service
              </h2>
              <div className="space-y-3">
                <p>
                  Roasty is an AI-powered SMS service that provides humorous, personalized "roasts" (playful teasing) via text message. The service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Uses artificial intelligence to generate responses</li>
                  <li>Learns from your conversations to provide personalized content</li>
                  <li>Operates solely through SMS text messaging</li>
                  <li>Requires explicit opt-in consent before sending any messages</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                3. Eligibility & Age Requirements
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>Minimum Age:</strong> You must be at least 13 years old to use Roasty.
                </p>
                <p>
                  <strong>Minors (13-17):</strong> If you are under 18, you represent that you have parental or guardian consent to use this service.
                </p>
                <p>
                  <strong>Capacity:</strong> You must have the legal capacity to enter into this agreement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                4. Consent & Opt-In
              </h2>
              <div className="bg-roast-dark rounded-lg p-4 mb-4">
                <h3 className="text-white font-semibold mb-2">By opting in, you consent to:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Receiving SMS messages from Roasty</li>
                  <li>AI-generated humorous content about you</li>
                  <li>Processing of your messages for personalization</li>
                  <li>Storage of conversation context and preferences</li>
                </ul>
              </div>
              <p>
                <strong>Withdrawal of Consent:</strong> You may withdraw consent and opt out at any time by texting "STOP", "/pause", or "UNSUBSCRIBE".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                5. User Conduct & Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Prohibited Uses</h3>
                  <p>You may not use Roasty to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Send illegal, harmful, or abusive content</li>
                    <li>Harass, threaten, or intimidate others</li>
                    <li>Share personal information of third parties</li>
                    <li>Attempt to hack, exploit, or disrupt the service</li>
                    <li>Use the service for commercial purposes without permission</li>
                    <li>Impersonate others or provide false information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate information when requested</li>
                    <li>Use the service respectfully and in good faith</li>
                    <li>Report inappropriate content via <code className="bg-roast-dark px-1 rounded text-roast-orange">/report</code></li>
                    <li>Understand that responses are AI-generated and not human opinions</li>
                    <li>Take responsibility for your own reactions to content</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                6. Content Standards & Safety
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Commitment</h3>
                  <p>Roasty is designed to be playful, not harmful. Our AI avoids:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Hate speech, slurs, or discriminatory language</li>
                    <li>Comments about protected characteristics (race, religion, gender, etc.)</li>
                    <li>Body shaming or appearance-based attacks</li>
                    <li>Content involving minors inappropriately</li>
                    <li>Threats, violence, or harmful suggestions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Content Moderation</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All content passes through automated safety filters</li>
                    <li>Users can report inappropriate content</li>
                    <li>We investigate all reports promptly</li>
                    <li>Violations may result in service termination</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                7. Privacy & Data
              </h2>
              <p>
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our <a href="/privacy-policy" className="text-roast-orange hover:underline">Privacy Policy</a>, which is incorporated into these terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                8. Service Availability & Limitations
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>Availability:</strong> We strive for 99.9% uptime but cannot guarantee uninterrupted service.
                </p>
                <p>
                  <strong>Geographic Limitations:</strong> Currently available only in the United States.
                </p>
                <p>
                  <strong>Carrier Dependency:</strong> Service depends on your mobile carrier's SMS capabilities.
                </p>
                <p>
                  <strong>AI Limitations:</strong> Responses are AI-generated and may occasionally be inappropriate despite our safeguards.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                9. Fees & Charges
              </h2>
              <div className="bg-roast-dark rounded-lg p-4">
                <ul className="space-y-2">
                  <li><strong>Roasty Service:</strong> <span className="text-green-400">Free</span></li>
                  <li><strong>SMS Charges:</strong> <span className="text-yellow-400">Your carrier's standard rates apply</span></li>
                  <li><strong>Data Usage:</strong> <span className="text-yellow-400">Minimal (text messages only)</span></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                10. Disclaimers & Limitations of Liability
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Disclaimer</h3>
                  <p className="text-sm">
                    ROASTY IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                  <p className="text-sm">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF ROASTY.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User Understanding</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li>AI responses are automated and not human opinions</li>
                    <li>Content is intended for entertainment purposes</li>
                    <li>You use the service at your own risk</li>
                    <li>We are not responsible for your emotional reactions to content</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                11. Termination
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>By You:</strong> You may terminate your use of Roasty at any time by texting "STOP".
                </p>
                <p>
                  <strong>By Us:</strong> We may terminate or suspend your access if you violate these terms or engage in harmful behavior.
                </p>
                <p>
                  <strong>Effect of Termination:</strong> Upon termination, we will stop sending you messages and delete your data according to our retention policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                12. Changes to Terms
              </h2>
              <div className="space-y-3">
                <p>
                  We may modify these terms occasionally. Material changes will be communicated via SMS before taking effect.
                </p>
                <p>
                  Your continued use of Roasty after notification constitutes acceptance of the modified terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                13. Governing Law & Disputes
              </h2>
              <div className="space-y-3">
                <p>
                  These terms are governed by the laws of the United States and the state where our company is incorporated.
                </p>
                <p>
                  Any disputes will be resolved through binding arbitration rather than court proceedings, except where prohibited by law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-roast-orange mb-4">
                14. Contact Information
              </h2>
              <div className="bg-roast-dark rounded-lg p-4">
                <p className="mb-4">Questions about these terms?</p>
                <div className="space-y-2 font-mono text-sm">
                  <p><strong>SMS:</strong> Text "terms" to <span className="text-roast-orange">+1 (877) 780-4236</span></p>
                  <p><strong>Help:</strong> Text <span className="text-roast-orange">"/help"</span></p>
                  <p><strong>Legal Issues:</strong> Text <span className="text-roast-orange">"/legal [your concern]"</span></p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-roast-orange/10 rounded-lg border border-roast-orange/30">
            <h3 className="text-xl font-semibold text-roast-orange mb-3">
              Terms Summary
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✅ <strong>Consent required</strong> - explicit opt-in before any messages</li>
              <li>✅ <strong>Age requirement</strong> - must be 13+ to use</li>
              <li>✅ <strong>Safe content</strong> - AI designed to avoid harmful material</li>
              <li>✅ <strong>Easy exit</strong> - text "STOP" to opt out anytime</li>
              <li>✅ <strong>Free service</strong> - only carrier SMS charges apply</li>
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