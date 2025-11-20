import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.15),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(0,0,0,0.4))]" />
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              24/7 AI Receptionists for Modern Businesses
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Turn every call and chat into a delightful first impression
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
              We train friendly AI receptionists that greet, qualify, schedule, and follow up — so you never miss a lead and your team stays focused.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-medium px-5 py-3 transition-colors">Get a demo</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition-colors">See features</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="text-2xl font-semibold">+32%</div>
              <div className="text-sm">avg. increase in captured leads</div>
              <div className="h-4 w-px bg-white/20" />
              <div className="text-2xl font-semibold"><span className="align-top text-base">$</span>3.5k</div>
              <div className="text-sm">avg. monthly savings vs. staffing</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
