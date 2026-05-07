import { ArrowUpRight } from "lucide-react"

type Accent = "purple" | "pink" | "orange"

type Project = {
  title: string
  tag: string
  description: string
  highlights?: string[]
  tech: string[]
  href: string
  image: string
  accent: Accent
}

const featured: Project = {
  title: "Octo-perio",
  tag: "Clinical AI Suite",
  description:
    "Bilingual periodontal & peri-implant decision support. Implements AAP/EFP 2018 staging, the IDRA implant-risk octagon, and EFP S3 stepwise treatment. Hybrid radiographic AI — offline ONNX plus opt-in Claude Vision — generates a chart-ready bilingual referral letter, ICD-10 ready.",
  highlights: [
    "Bilingual He · En",
    "Offline + Cloud AI",
    "AAP/EFP 2018",
    "Citation-anchored",
  ],
  tech: ["React", "Tailwind", "Claude Vision", "Vercel Edge", "ONNX Runtime"],
  href: "https://octo-perio.vercel.app/",
  image: "/projects/octo-perio.jpg",
  accent: "purple",
}

const projects: Project[] = [
  {
    title: "Neuro-point",
    tag: "Clinical Decision Suite",
    description:
      "Neurological decision tools — ABC/2 hematoma volume estimation and pupil-adjusted GCS-P scoring for TBI prognosis. Anchored to Kothari 1996, Brennan 2008, and STICH II.",
    tech: ["React", "TypeScript", "Clinical Logic"],
    href: "https://rongerso-wq.github.io/Neuro-point/",
    image: "/projects/neuro-point.jpg",
    accent: "pink",
  },
  {
    title: "Solventum Calculator",
    tag: "Branded Clinical Tool",
    description:
      "Clinic profitability calculator for Solventum's Filtek One Bulk Fill and Clinpro Clear Fluoride. Real-time P&L impact analysis with time savings, revenue projections, and print-ready PDF export.",
    tech: ["HTML/JS", "Solventum Brand", "Print PDF"],
    href: "https://rongerso-wq.github.io/Solventum-All/health-care-calculator-solventum.html",
    image: "/projects/solventum-calc.jpg",
    accent: "orange",
  },
  {
    title: "DentoSafe",
    tag: "Trauma Decision Support",
    description:
      "IADT 2020 dental trauma protocols with dual modes — first-aid guidance for parents and full clinical workflows for dentists, including splinting details, follow-up schedules, and prognosis.",
    tech: ["React", "IADT 2020", "Clinical Logic"],
    href: "https://rongerso-wq.github.io/DentoSafe/",
    image: "/projects/dentosafe.jpg",
    accent: "pink",
  },
]

const accentBorder: Record<Accent, string> = {
  purple: "border-purple-500/20 hover:border-purple-500/60",
  pink: "border-pink-500/20 hover:border-pink-500/60",
  orange: "border-orange-500/20 hover:border-orange-500/60",
}

const accentTag: Record<Accent, string> = {
  purple: "text-purple-300 bg-purple-500/10 border-purple-500/30",
  pink: "text-pink-300 bg-pink-500/10 border-pink-500/30",
  orange: "text-orange-300 bg-orange-500/10 border-orange-500/30",
}

const accentDot: Record<Accent, string> = {
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  orange: "bg-orange-400",
}

const accentArrow: Record<Accent, string> = {
  purple: "text-purple-300",
  pink: "text-pink-300",
  orange: "text-orange-300",
}

export function Projects() {
  return (
    <section id="projects" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
          Selected work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Projects
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mb-16">
          Clinical decision-support tools, branded clinic apps, and AI-powered workflows — built with evidence-based logic and citation-anchored thresholds.
        </p>

        {/* Featured */}
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block rounded-3xl border bg-white/[0.02] overflow-hidden transition-all duration-300 ${accentBorder[featured.accent]} mb-8`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[420px] bg-zinc-950 overflow-hidden">
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              <span className="absolute top-5 left-5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white/80 border border-white/10">
                Featured
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest border ${accentTag[featured.accent]}`}>
                  {featured.tag}
                </span>
                <div className="flex items-start justify-between gap-4 mt-4 mb-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {featured.title}
                  </h3>
                  <ArrowUpRight className={`w-6 h-6 ${accentArrow[featured.accent]} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0`} />
                </div>
                <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                  {featured.description}
                </p>

                {featured.highlights && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-6 border-t border-white/10">
                {featured.tech.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${accentDot[featured.accent]}`} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl border bg-white/[0.02] overflow-hidden transition-all duration-300 ${accentBorder[p.accent]}`}
            >
              <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <span className={`inline-block text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-widest border ${accentTag[p.accent]}`}>
                  {p.tag}
                </span>
                <div className="flex items-start justify-between gap-3 mt-3 mb-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className={`w-4 h-4 ${accentArrow[p.accent]} transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 mt-1`} />
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-1.5 pt-4 border-t border-white/10">
                  {p.tech.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-[11px] text-white/40 font-mono">
                      <span className={`w-1 h-1 rounded-full ${accentDot[p.accent]}`} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
