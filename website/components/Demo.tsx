'use client'

import { useState } from 'react'

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const demoSteps = [
    {
      user: "roast me",
      bot: "👋 Welcome to RoastBot! I'm a consent-based roast bot that keeps things playful, not harmful.\n\nTo get started, reply \"/agree\" to opt-in. Then try \"roast me\" to see what I've got!\n\nUse \"/help\" to see all commands or \"/rules\" to understand the boundaries.",
      explanation: "First contact - Bot explains consent and safety"
    },
    {
      user: "/agree",
      bot: "✅ Welcome to RoastBot! You're now opted in. Try \"roast me\" to get started!\n\nTip: Use /heat 1-10 to adjust spice level, /style to change roast style.",
      explanation: "User consents - Bot confirms and gives tips"
    },
    {
      user: "I work at Starbucks and love gaming",
      bot: "Got it! I'll remember that you work at Starbucks and love gaming. This helps me craft better roasts! 🎮☕",
      explanation: "Bot learns and stores personal info for context"
    },
    {
      user: "roast me",
      bot: "Your gaming skills are like your coffee - everyone's just being polite when they say it's good. ☕🎮",
      explanation: "AI generates personalized roast using stored info"
    },
    {
      user: "/heat 8",
      bot: "🌶️ Heat level set to 8/10. Spicy but safe 🌶️",
      explanation: "User adjusts settings for spicier roasts"
    },
    {
      user: "/style dad",
      bot: "🎭 Style changed to \"dad\". Gentle dad jokes and proud-but-sassy energy 👨‍💼",
      explanation: "User changes roast style to dad jokes"
    },
    {
      user: "roast me again",
      bot: "I'm proud of your confidence, sport. Takes real courage to ask for seconds when the first serving was that generous. ☕",
      explanation: "Bot delivers dad-style roast at higher heat level"
    }
  ]

  return (
    <section id="demo" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how RoastBot learns, remembers, and adapts to deliver personalized roasts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-roast-dark rounded-lg border border-roast-orange/20 overflow-hidden">
            {/* Phone Header */}
            <div className="bg-roast-gray p-4 border-b border-roast-orange/20">
              <div className="flex items-center justify-center space-x-2">
                <div className="text-green-400 text-sm font-mono">●</div>
                <span className="text-white font-semibold">RoastBot (+1 877-780-4236)</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 h-96 overflow-y-auto">
              {demoSteps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="mb-6">
                  {/* User Message */}
                  <div className="flex justify-end mb-2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                      {step.user}
                    </div>
                  </div>
                  
                  {/* Bot Response */}
                  <div className="flex justify-start mb-2">
                    <div className="bg-roast-gray text-white px-4 py-2 rounded-lg max-w-md whitespace-pre-line">
                      {step.bot}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="text-center">
                    <span className="text-roast-orange text-sm italic">
                      {step.explanation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="bg-roast-gray p-4 border-t border-roast-orange/20">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="bg-roast-orange text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-roast-red transition-colors"
                >
                  ← Previous
                </button>
                
                <span className="text-gray-300 text-sm">
                  Step {currentStep + 1} of {demoSteps.length}
                </span>
                
                <button
                  onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === demoSteps.length - 1}
                  className="bg-roast-orange text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-roast-red transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              Ready to try it yourself?
            </p>
            <div className="code-block rounded-lg p-4 inline-block font-mono">
              <span className="text-roast-orange">Text:</span> <span className="text-white">+1 (877) 780-4236</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}