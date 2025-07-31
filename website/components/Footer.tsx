export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-roast-dark border-t border-roast-orange/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🤖🔥</div>
              <h3 className="text-xl font-bold gradient-text">RoastBot</h3>
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
            <h4 className="text-lg font-semibold text-white mb-4">Project</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/raamasri/Roasty" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/raamasri/Roasty#readme" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/raamasri/Roasty/issues" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Issues & Support
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Try Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Built With</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.anthropic.com/claude" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Claude AI
                </a>
              </li>
              <li>
                <a href="https://www.twilio.com" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Twilio SMS
                </a>
              </li>
              <li>
                <a href="https://nodejs.org" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  Node.js
                </a>
              </li>
              <li>
                <a href="https://www.postgresql.org" target="_blank" className="text-gray-400 hover:text-roast-orange transition-colors">
                  PostgreSQL
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-roast-orange/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RoastBot. Open source project. Built with Claude Code.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/raamasri/Roasty" 
                target="_blank"
                className="text-gray-400 hover:text-roast-orange transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="code-block rounded-lg p-4 inline-block">
            <div className="text-xs text-gray-400 font-mono">
              🔥 Generated with <span className="text-roast-orange">Claude Code</span> • 
              Co-Authored-By: <span className="text-roast-orange">Claude</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}