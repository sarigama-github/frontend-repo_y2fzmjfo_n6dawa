import { ListChecks, Cog, Smile } from 'lucide-react'

function HowItWorks() {
  const steps = [
    { icon: ListChecks, title: 'Map your workflow', desc: 'We capture your greeting, FAQs, routing rules, and scheduling preferences.' },
    { icon: Cog, title: 'Train your AI receptionist', desc: 'Your brand voice and knowledge are distilled into a safe, reliable agent.' },
    { icon: Smile, title: 'Go live and iterate', desc: 'Launch across channels, review transcripts, and refine with our team.' },
  ]

  return (
    <section id="how" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">From hello to booked — in days, not months</h2>
          <p className="mt-4 text-white/70 max-w-2xl">A guided rollout that respects your processes, keeps data secure, and delivers value fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 text-white/90 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
