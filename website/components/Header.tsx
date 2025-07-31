export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-roast-dark/90 backdrop-blur-sm border-b border-roast-orange/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🤖🔥</div>
            <h1 className="text-xl font-bold gradient-text">RoastBot</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-roast-orange transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-300 hover:text-roast-orange transition-colors">
              Demo
            </a>
            <a href="#github" className="text-gray-300 hover:text-roast-orange transition-colors">
              GitHub
            </a>
            <a 
              href="https://github.com/raamasri/Roasty" 
              target="_blank"
              className="bg-roast-orange text-white px-4 py-2 rounded-lg hover:bg-roast-red transition-colors glow"
            >
              View Code
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-roast-orange">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}