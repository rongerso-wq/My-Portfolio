export function About() {
  return (
    <section id="about" className="bg-black py-32 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Label + heading */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Clinician.<br />
            Advisor.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              AI Enabler.
            </span>
          </h2>
        </div>

        {/* Bio text */}
        <div className="space-y-5 text-white/60 text-base leading-relaxed">
          <p>
            I'm a clinical advisor with deep roots in dental medicine and a growing obsession with
            artificial intelligence. My work sits at the intersection of healthcare and emerging
            technology — translating complex clinical knowledge into smarter digital tools.
          </p>
          <p>
            Over the years I've advised on clinical products, built AI-powered calculators and
            decision aids, and partnered with teams to bring evidence-based thinking into the
            software development process.
          </p>
          <p>
            I believe the future of medicine is built with code — and I'm here to help design it.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
            {[
              { value: "15+", label: "Years Clinical" },
              { value: "10+", label: "AI Projects" },
              { value: "3", label: "Apps Launched" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1 font-mono">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
