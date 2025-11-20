import { Menu, Bot } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center">
            <Bot className="h-6 w-6 text-orange-400" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">HelloDesk AI</p>
            <p className="text-xs text-white/60">Receptionist Agency</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-white/80 hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">Book a Demo</a>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"><Menu className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
