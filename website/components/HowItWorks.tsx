export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Send SMS",
      description: "Text 'roast me' to +1 (877) 780-4236",
      icon: "📱",
      code: "SMS → Twilio → RoastBot"
    },
    {
      number: "2", 
      title: "Consent & Learn",
      description: "Agree to roasts and share info about yourself",
      icon: "🤝",
      code: "/agree → Bot learns context"
    },
    {
      number: "3",
      title: "AI Processing",
      description: "Claude AI analyzes context and generates roast",
      icon: "🧠",
      code: "Context + Claude → Roast"
    },
    {
      number: "4",
      title: "Safety Check", 
      description: "Multi-layer moderation ensures appropriate content",
      icon: "🛡️",
      code: "Moderation → Safe delivery"
    },
    {
      number: "5",
      title: "Personalized Roast",
      description: "Receive your custom burn via SMS",
      icon: "🔥",
      code: "RoastBot → SMS → You"
    },
    {
      number: "6",
      title: "Memory Update",
      description: "Bot remembers interaction for future roasts",
      icon: "💾",
      code: "Store context → Better roasts"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-roast-gray/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From SMS to AI-generated roast in seconds, with full memory persistence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-8 w-16 h-0.5 bg-gradient-to-r from-roast-orange to-transparent"></div>
              )}
              
              <div className="bg-roast-dark rounded-lg p-6 border border-roast-orange/20 hover:border-roast-orange/50 transition-all hover:glow h-full">
                {/* Step Number */}
                <div className="w-12 h-12 bg-roast-orange text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon and Title */}
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{step.icon}</span>
                  <h3 className="text-lg font-semibold text-roast-orange">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Code Flow */}
                <div className="code-block rounded p-2 text-xs font-mono text-center">
                  <span className="text-green-400">{step.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="code-block rounded-lg p-6">
            <h3 className="text-xl font-semibold text-roast-orange mb-4 text-center">
              Architecture Overview
            </h3>
            <div className="font-mono text-sm text-center space-y-2">
              <div className="text-blue-400">📱 SMS (Twilio) → 🔗 Webhook → 🤖 Express Server</div>
              <div className="text-green-400">⬇️</div>
              <div className="text-purple-400">🗄️ PostgreSQL (Persistent Memory) + 🔄 Redis (Cache)</div>
              <div className="text-green-400">⬇️</div>
              <div className="text-yellow-400">🧠 Claude AI (Context + Generation) + 🛡️ Safety Pipeline</div>
              <div className="text-green-400">⬇️</div>
              <div className="text-orange-400">📤 SMS Response + 💾 Memory Update</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}