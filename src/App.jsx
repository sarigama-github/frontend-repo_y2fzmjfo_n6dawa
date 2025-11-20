import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background texture and soft vignettes */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 opacity-[0.6]" style={{
          backgroundImage:
            'radial-gradient(1200px 600px at 10% -10%, rgba(251,146,60,0.10), transparent), radial-gradient(1000px 500px at 90% 110%, rgba(255,255,255,0.06), transparent)'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} HelloDesk AI — Friendly AI Receptionists</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
