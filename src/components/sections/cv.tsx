import { Download, FileText, ArrowUpRight } from "lucide-react"

const CV_PATH = "/cv/roni-gershonovitch-cv.pdf"

const summary =
  "Medical Affairs expert with 10+ years bridging clinical excellence and digital innovation. Specialized in transforming complex science into impactful content and leveraging AI/LLMs to drive KOL strategy and clinical engagement."

type Role = {
  title: string
  org: string
  dates: string
  bullets: { label?: string; text: string }[]
}

const experience: Role[] = [
  {
    title: "Clinical Advisor",
    org: "Solventum (formerly 3M Healthcare)",
    dates: "2024 – Present",
    bullets: [
      {
        label: "Digital Innovation",
        text: "Proactively led the development of the Solventum App and Clinical Calculator to enhance HCP data accessibility.",
      },
      {
        label: "KOL Management",
        text: "Recruited and managed new KOLs to support restorative positioning and co-led clinical sessions to strengthen brand credibility.",
      },
      {
        label: "Scientific Journeys",
        text: "Production of scientific journeys and interactive clinical workshops for 9,000+ HCPs; synthesized complex research into webinars and streamlined messaging.",
      },
      {
        label: "Leadership",
        text: "Mentored and onboarded new Clinical Advisors in the company.",
      },
    ],
  },
  {
    title: "Clinical Specialist",
    org: "3M Healthcare (IL / GR / CY)",
    dates: "2021 – 2024",
    bullets: [
      {
        label: "International Clinical Lead",
        text: "Led 100+ clinical workshops and large-scale hands-on training across Israel, Greece, and Cyprus in English, driving high product adoption.",
      },
      {
        label: "Academic Outreach",
        text: "Built local and international academic partnerships to increase student engagement and early-stage product exposure.",
      },
    ],
  },
  {
    title: "Medical Affairs & PV Specialist",
    org: "TEVA",
    dates: "2019 – 2021",
    bullets: [
      {
        text: "Supported oncology and neurology portfolios with compliant scientific communication and pharmacovigilance.",
      },
    ],
  },
  {
    title: "Dental Surgeon",
    org: "Rabin Medical Center",
    dates: "2016 – 2019",
    bullets: [
      {
        text: "Provided clinical treatment and surgical dentistry in a tertiary hospital setting.",
      },
    ],
  },
]

const education = [
  { school: "Harvard University", detail: "Drug Regulation (2021 – 2022)" },
  {
    school: "Tel Aviv University",
    detail: "MPH · DMD · BSc (Life Sciences)",
  },
]

const technical = [
  {
    label: "AI Strategy",
    text: "Proficient in LLMs (Claude Code, NotebookLM) for medical engagement and workflow optimization.",
  },
  {
    label: "Content Storytelling",
    text: "Expert at translating clinical data into impactful formats for healthcare audiences.",
  },
]

export function CV() {
  return (
    <section id="cv" className="bg-zinc-950 py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
          Curriculum Vitae
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          CV
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mb-12">
          Digital Medical Advisor · Clinical AI Strategy. 10+ years bridging clinical excellence with digital innovation across Solventum, 3M Healthcare, TEVA, and Rabin Medical Center.
        </p>

        {/* Download / Preview CTAs */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          <a
            href={CV_PATH}
            download
            className="group flex items-center gap-5 p-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/60 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
              <Download className="w-5 h-5 text-purple-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-purple-300/60 text-xs font-mono uppercase tracking-widest mb-0.5">
                Download
              </p>
              <p className="text-white text-sm font-medium">
                Roni Gershonovitch — CV (PDF)
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-purple-300/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
          </a>

          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
              <FileText className="w-5 h-5 text-white/70" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-0.5">
                Preview
              </p>
              <p className="text-white text-sm font-medium">Open in new tab</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
          </a>
        </div>

        {/* Summary */}
        <div className="mb-20">
          <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-4">
            Professional Summary
          </h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
            {summary}
          </p>
        </div>

        {/* Experience timeline */}
        <div className="mb-20">
          <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-8">
            Experience
          </h3>
          <ol className="relative border-l border-white/10 ml-2 space-y-12">
            {experience.map((role) => (
              <li key={`${role.title}-${role.org}`} className="pl-8 relative">
                <span
                  aria-hidden
                  className="absolute -left-[6px] top-1.5 w-[11px] h-[11px] rounded-full bg-zinc-950 border-2 border-purple-400"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h4 className="text-white text-lg font-semibold tracking-tight">
                    {role.title}
                  </h4>
                  <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                    {role.dates}
                  </span>
                </div>
                <p className="text-purple-300/80 text-sm font-medium mb-4">
                  {role.org}
                </p>
                <ul className="space-y-2.5 text-white/60 text-sm leading-relaxed">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 w-1 h-1 rounded-full bg-white/30 flex-shrink-0"
                      />
                      <span>
                        {b.label && (
                          <span className="text-white/80 font-medium">{b.label}: </span>
                        )}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Education + Technical */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-6">
              Education
            </h3>
            <ul className="space-y-5">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="border-l-2 border-purple-500/40 pl-4"
                >
                  <p className="text-white text-base font-medium mb-0.5">
                    {e.school}
                  </p>
                  <p className="text-white/50 text-sm">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-6">
              Technical Adaptability
            </h3>
            <ul className="space-y-5">
              {technical.map((t) => (
                <li
                  key={t.label}
                  className="border-l-2 border-pink-500/40 pl-4"
                >
                  <p className="text-white text-base font-medium mb-1">
                    {t.label}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
