export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 hero-gradient">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="text-8xl mb-6">🤖🔥</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text glow-text">RoastBot</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The AI-powered SMS bot that learns your personality and delivers 
            <span className="text-roast-orange font-semibold"> consent-based</span>, 
            <span className="text-roast-orange font-semibold"> personalized roasts</span> via text message.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="code-block rounded-lg p-4 font-mono text-sm">
            <div className="text-green-400">📱 Text: +1 (877) 780-4236</div>
            <div className="text-blue-400">💬 &quot;roast me&quot;</div>
            <div className="text-roast-orange">🤖 *AI generates personalized burn*</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#demo" 
            className="bg-roast-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-roast-red transition-colors glow"
          >
            Try Demo
          </a>
          <a 
            href="https://github.com/raamasri/Roasty" 
            target="_blank"
            className="border border-roast-orange text-roast-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-roast-orange hover:text-white transition-colors"
          >
            View Source Code
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🧠</div>
            <h3 className="text-lg font-semibold text-roast-orange mb-2">Memory System</h3>
            <p className="text-gray-400">Remembers conversations and builds context over time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="text-lg font-semibold text-roast-orange mb-2">Safe by Default</h3>
            <p className="text-gray-400">Consent-based with multiple safety layers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎭</div>
            <h3 className="text-lg font-semibold text-roast-orange mb-2">Multiple Styles</h3>
            <p className="text-gray-400">Dad jokes, dry humor, bestie teasing, gamer banter</p>
          </div>
        </div>
      </div>
    </section>
  )
}