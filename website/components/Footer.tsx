export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-roast-dark border-t border-roast-orange/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🤖🔥</div>
              <h3 className="text-xl font-bold gradient-text">Roasty</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The AI-powered SMS bot that learns your personality and delivers 
              consent-based, personalized roasts via text message.
            </p>
            <div className="code-block rounded p-3 inline-block">
              <span className="text-roast-orange font-mono">📱 +1 (877) 780-4236</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Roasty</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Try Demo
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-roast-orange transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="sms:+18777804236&body=roast me" className="text-gray-400 hover:text-roast-orange transition-colors">
                  🔥 Start Roasting
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/opt-in-policy" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Opt-In Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm">
                  Ages 13+
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-roast-orange/20">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-gray-400 text-sm text-center">
              © 2024 Roasty. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}