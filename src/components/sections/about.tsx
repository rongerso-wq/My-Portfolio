export function About() {
  return (
    <section id="about" className="bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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

          <div className="space-y-5 text-white/60 text-base leading-relaxed">
            <p>
              I&apos;m a clinical advisor with deep roots in dental medicine and 15+ years of practice,
              now working at the intersection of healthcare and emerging technology.
              I translate complex clinical knowledge into AI-powered tools clinicians can actually trust.
            </p>
            <p>
              My work spans clinical product advisory, decision-support apps, and full-stack
              AI integration — anchored in evidence-based reasoning, primary literature, and
              the rigor that regulated clinical software demands.
            </p>
            <p>
              The future of medicine is built with code — and I&apos;m here to help design it.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {[
                { value: "15+", label: "Years Clinical" },
                { value: "4", label: "Flagship Apps" },
                { value: "He · En", label: "Bilingual" },
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

        {/* In the field — stage + workshop */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-20">
          {[
            {
              src: "/about/stage.jpg",
              alt: "Dr. Roni Gershonovitch presenting on stage at a clinical conference",
              eyebrow: "On stage",
              caption: "Keynote · clinical conference",
            },
            {
              src: "/about/workshop.jpg",
              alt: "Dr. Roni Gershonovitch leading a clinical workshop",
              eyebrow: "In the field",
              caption: "Hands-on clinical workshop · HCPs",
            },
          ].map((p) => (
            <figure
              key={p.src}
              className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Bottom darkening for caption legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-mono mb-1">
                  {p.eyebrow}
                </p>
                <p className="text-white text-sm md:text-base font-medium">
                  {p.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
