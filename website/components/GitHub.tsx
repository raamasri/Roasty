export default function GitHub() {
  const features = [
    "🤖 Claude AI integration with context-aware prompting",
    "🧠 Advanced memory system with conversation persistence", 
    "📱 Twilio SMS webhook handling with signature validation",
    "🛡️ Multi-layer safety pipeline with moderation",
    "⚙️ Complete command system for user control",
    "🗄️ PostgreSQL + Redis architecture for scalability",
    "🎭 Multiple roast styles (bestie, dad, dry, gamer)",
    "📊 Incident tracking and safety analytics",
    "🔒 Production-ready security measures",
    "📚 Comprehensive documentation and setup guide"
  ]

  const techStack = [
    "TypeScript", "Node.js", "Express", "PostgreSQL", 
    "Redis", "Claude AI", "Twilio", "OpenTelemetry"
  ]

  return (
    <section id="github" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Open Source
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            RoastBot is completely open source. Deploy your own instance or contribute to the project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Repository Info */}
          <div className="space-y-6">
            <div className="bg-roast-dark rounded-lg p-6 border border-roast-orange/20">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-roast-orange mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-white">raamasri/Roasty</h3>
                  <p className="text-gray-400">AI-powered consent-based SMS roasting bot</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  TypeScript
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  Star
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                  Fork
                </span>
              </div>

              <a 
                href="https://github.com/raamasri/Roasty"
                target="_blank"
                className="inline-flex items-center bg-roast-orange text-white px-6 py-3 rounded-lg hover:bg-roast-red transition-colors glow"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Tech Stack */}
            <div className="code-block rounded-lg p-6">
              <h4 className="text-lg font-semibold text-roast-orange mb-4">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-roast-gray/50 rounded px-3 py-2 text-sm font-mono text-center">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white mb-6">What's Included</h4>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-roast-gray/30 transition-colors">
                <div className="text-roast-orange">✓</div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}

            <div className="mt-8 code-block rounded-lg p-4">
              <h5 className="text-roast-orange font-semibold mb-2">Quick Start</h5>
              <div className="font-mono text-sm space-y-1">
                <div className="text-gray-300">$ git clone https://github.com/raamasri/Roasty.git</div>
                <div className="text-gray-300">$ cd Roasty && npm install</div>
                <div className="text-gray-300">$ cp .env.example .env</div>
                <div className="text-gray-300">$ npm run dev</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-roast-dark rounded-lg p-8 border border-roast-orange/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-roast-orange mb-4">
              Deploy Your Own Instance
            </h3>
            <p className="text-gray-300 mb-6">
              RoastBot is production-ready and can be deployed on any cloud platform. 
              Full documentation included for setup with Twilio, Claude AI, and databases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/raamasri/Roasty#readme"
                target="_blank"
                className="bg-roast-orange text-white px-6 py-3 rounded-lg hover:bg-roast-red transition-colors"
              >
                Setup Guide
              </a>
              <a 
                href="https://github.com/raamasri/Roasty/issues"
                target="_blank"
                className="border border-roast-orange text-roast-orange px-6 py-3 rounded-lg hover:bg-roast-orange hover:text-white transition-colors"
              >
                Report Issues
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}