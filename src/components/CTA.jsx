function CTA() {
  return (
    <section id="contact" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-white/5 to-white/0 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">Let’s put a friendly face on your first impression</h3>
              <p className="mt-3 text-white/80">Tell us about your call volume, channels, and tools. We’ll show you a tailored receptionist in a live demo.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@hellodesk.ai" className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-400 text-black font-medium px-5 py-3 transition-colors">Book a demo</a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3 transition-colors">Download overview</a>
              </div>
              <p className="mt-4 text-xs text-white/60">No hard sales — just a walkthrough and a proof‑of‑concept.</p>
            </div>
            <form className="bg-black/40 border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/60">Name</label>
                  <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-xs text-white/60">Work Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="jane@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-white/60">Company</label>
                  <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="Acme Inc." />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-white/60">What are you looking to automate?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="Bookings, intake, after-hours coverage..." />
                </div>
              </div>
              <button type="button" className="mt-4 inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-black font-medium px-5 py-3 transition-colors w-full sm:w-auto">Send inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
