import { Phone, Calendar, MessageSquare, Globe, Shield, Zap } from 'lucide-react'

function Features() {
  const features = [
    { icon: Phone, title: 'Calls & IVR', desc: 'Answer, route, and handle common questions with natural, friendly voice.' },
    { icon: Calendar, title: 'Scheduling', desc: 'Offer real-time calendar booking and rescheduling across time zones.' },
    { icon: MessageSquare, title: 'Omnichannel', desc: 'Web chat, SMS, WhatsApp, and email — unified conversation history.' },
    { icon: Globe, title: 'Multilingual', desc: 'Greeting in 50+ languages with local accents and cultural nuance.' },
    { icon: Shield, title: 'Compliance', desc: 'HIPAA/GDPR-ready logs, consent capture, redaction, and access control.' },
    { icon: Zap, title: 'Integrations', desc: 'Connect to your CRM, ticketing, and phone providers in minutes.' }
  ]

  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Built to greet, qualify, and book — beautifully</h2>
          <p className="mt-4 text-white/70 max-w-2xl">Purpose‑built capabilities that turn first contact into loyal customers while keeping your team free for high‑impact work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/[0.08] transition-colors">
              <div className="h-10 w-10 rounded-lg bg-orange-500/15 border border-orange-500/20 text-orange-300 flex items-center justify-center mb-4">
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

export default Features
