export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "Claude AI Integration",
      description: "Powered by Anthropic's Claude for context-aware, intelligent roasting",
      tech: "Claude API"
    },
    {
      icon: "🧠",
      title: "Advanced Memory System",
      description: "Stores fun facts, running jokes, and personality traits to build better roasts over time",
      tech: "PostgreSQL + Redis"
    },
    {
      icon: "📱",
      title: "SMS Integration",
      description: "Works via text message using Twilio's reliable SMS infrastructure",
      tech: "Twilio API"
    },
    {
      icon: "🛡️",
      title: "Multi-Layer Safety",
      description: "Pre/post content moderation, user controls, and automatic cooling systems",
      tech: "Custom Pipeline"
    },
    {
      icon: "⚙️",
      title: "Full User Control",
      description: "Adjust heat level (0-10), style, topics, pause/resume, and more via commands",
      tech: "Command System"
    },
    {
      icon: "🔄",
      title: "Context Building",
      description: "References past conversations and develops inside jokes naturally",
      tech: "Memory Engine"
    },
    {
      icon: "🎭",
      title: "Multiple Personalities",
      description: "Choose from bestie, dad, dry, or gamer roasting styles",
      tech: "Style Engine"
    },
    {
      icon: "📊",
      title: "Analytics & Monitoring",
      description: "Track incidents, performance metrics, and safety analytics",
      tech: "OpenTelemetry"
    }
  ]

  return (
    <section id="features" className="py-20 px-6 bg-roast-gray/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Features & Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with modern tech stack for reliability, safety, and intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-roast-dark/80 rounded-lg p-6 border border-roast-orange/20 hover:border-roast-orange/50 transition-all hover:glow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-roast-orange mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-xs text-roast-orange/70 font-mono bg-roast-gray/50 px-2 py-1 rounded">
                {feature.tech}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="code-block rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-roast-orange mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
              <div className="text-blue-400">TypeScript</div>
              <div className="text-green-400">Node.js</div>
              <div className="text-purple-400">Express</div>
              <div className="text-yellow-400">PostgreSQL</div>
              <div className="text-red-400">Redis</div>
              <div className="text-cyan-400">Claude AI</div>
              <div className="text-orange-400">Twilio</div>
              <div className="text-pink-400">Next.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}