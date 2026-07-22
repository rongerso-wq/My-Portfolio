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
  title: "ReboundIQ",
  tag: "GLP-1 Maintenance AI",
  description:
    "Concept artifact for Novo Nordisk: predict the post-GLP-1 weight rebound before it happens and personalize the maintenance to prevent it. Pairs an evidence-anchored 12-month rebound forecast with a Claude-powered maintenance coach — so patients keep what they earned on therapy, and clinicians can stratify, taper, and follow up with data, not guesswork.",
  highlights: [
    "Bilingual EN · HE",
    "Evidence-anchored",
    "Claude Coach",
    "HCP + Patient modes",
  ],
  tech: ["React", "Tailwind", "Claude Sonnet 4.6", "Vercel Edge"],
  href: "https://rebound-iq.vercel.app",
  image: "/projects/reboundiq.jpg",
  accent: "pink",
}

const projects: Project[] = [
  {
    title: "VibeWorking",
    tag: "Job-Search Coaching Platform",
    description:
      "Real one-on-one help with your CV, LinkedIn, and interviews — job-search coaching and matching in Israel, with relocation support for those moving abroad. \"Your dream job, together.\"",
    tech: ["React", "Vite", "Tailwind"],
    href: "https://vibeworking-xi.vercel.app/",
    image: "/projects/vibeworking.png",
    accent: "orange",
  },
  {
    title: "Universal Medical App Advisor",
    tag: "SaMD Classification Engine",
    description:
      "Classifies medical software under FDA 21 CFR 820, EU MDR Rule 11, and IEC 62304, then walks the user through generating a full Design History File — risk management (ISO 14971 FMEA), traceability matrix, cybersecurity threat model, and 11 more regulatory documents.",
    tech: ["React", "Regulatory Logic", "ISO 14971"],
    href: "https://rongerso-wq.github.io/universal-medical-app-advisor/",
    image: "/projects/universal-medical-advisor.png",
    accent: "purple",
  },
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
    title: "Apex Home Solutions",
    tag: "Contractor Landing Page",
    description:
      "Cinematic landing page for a home renovation & remodeling contractor — GSAP-driven scroll animations, before/after project gallery, testimonials, and a lead-capture quote modal.",
    tech: ["React", "GSAP", "Tailwind CSS v4"],
    href: "https://apex-home-solutions-ecru.vercel.app",
    image: "/projects/apex-home-solutions.png",
    accent: "orange",
  },
  {
    title: "CardiaHome",
    tag: "Remote Monitoring Concept",
    description:
      "Elderly-first mobile dashboard for Congestive Heart Failure patients — daily self-check (weight, blood pressure, symptoms), medication tracking, and a direct line to the care team, with a Green/Yellow/Red zone engine flagging red flags in real time.",
    tech: ["Vanilla JS", "Inline SVG", "Clinical Logic"],
    href: "https://rongerso-wq.github.io/CardiaHome/",
    image: "/projects/cardiahome.png",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
