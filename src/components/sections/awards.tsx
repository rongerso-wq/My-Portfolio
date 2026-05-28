import { Award } from "lucide-react"

type Accent = "purple" | "pink" | "orange"

type Recognition = {
  title: string
  issuer: string
  year: string
  citation: string
  image: string
  accent: Accent
}

const awards: Recognition[] = [
  {
    title: "Special Cultural Element Award",
    issuer: "Solventum · Dental Solutions EMEA",
    year: "2026",
    citation:
      "Recognized for dedication and effort in developing an AI application with the potential to bring great benefits to the business. Cultural element: Win with Excellence · Lead.",
    image: "/awards/solventum-cultural-element-2026.jpg",
    accent: "orange",
  },
]

const accentBorder: Record<Accent, string> = {
  purple: "border-purple-500/20 hover:border-purple-500/40",
  pink: "border-pink-500/20 hover:border-pink-500/40",
  orange: "border-orange-500/20 hover:border-orange-500/40",
}

const accentTag: Record<Accent, string> = {
  purple: "text-purple-300 bg-purple-500/10 border-purple-500/30",
  pink: "text-pink-300 bg-pink-500/10 border-pink-500/30",
  orange: "text-orange-300 bg-orange-500/10 border-orange-500/30",
}

const accentIcon: Record<Accent, string> = {
  purple: "text-purple-300",
  pink: "text-pink-300",
  orange: "text-orange-300",
}

export function Awards() {
  return (
    <section id="awards" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-orange-400 font-mono mb-4">
          Recognition
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Awards
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mb-16">
          External recognition for clinical AI work delivered to industry partners.
        </p>

        <div className="grid gap-8">
          {awards.map((a) => (
            <article
              key={a.title}
              className={`group rounded-3xl border bg-white/[0.02] overflow-hidden transition-all duration-300 ${accentBorder[a.accent]}`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[360px] bg-zinc-950 overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.title} certificate`}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest border ${accentTag[a.accent]}`}
                    >
                      {a.issuer}
                    </span>
                    <div className="flex items-start justify-between gap-4 mt-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {a.title}
                      </h3>
                      <Award
                        className={`w-6 h-6 ${accentIcon[a.accent]} flex-shrink-0`}
                        aria-hidden
                      />
                    </div>
                    <p className="text-white/60 text-[15px] leading-relaxed">
                      {a.citation}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-6 mt-6 border-t border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    <span className="text-xs text-white/40 font-mono uppercase tracking-widest">
                      {a.year}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
