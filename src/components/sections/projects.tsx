const projects = [
  {
    title: "Cortex AI",
    tag: "AI Platform",
    description:
      "A conversational AI platform designed for clinical workflows. Brings large language model reasoning into structured medical decision-making.",
    tech: ["Next.js", "Claude API", "TypeScript"],
    accent: "purple",
  },
  {
    title: "Dento-Safe",
    tag: "Clinical App",
    description:
      "Dental trauma decision support app. Guides clinicians through evidence-based trauma protocols step by step.",
    tech: ["React", "TypeScript", "Clinical Logic"],
    accent: "pink",
  },
  {
    title: "Solventum App",
    tag: "Brand Platform",
    description:
      "Full branded digital platform for Solventum dental products — campaigns, tools, and clinical resources in one place.",
    tech: ["Next.js", "Tailwind CSS", "Solventum Brand"],
    accent: "orange",
  },
  {
    title: "Dental Clinic Calculator",
    tag: "Clinical Tool",
    description:
      "A clinical decision calculator built for dental practices. Supports material selection, dosing, and treatment planning workflows.",
    tech: ["React", "Clinical Logic", "TypeScript"],
    accent: "pink",
  },
  {
    title: "Solventum Calculator",
    tag: "Clinical Tool",
    description:
      "Branded clinical calculator for Solventum dental products. Helps practitioners select and dose materials with confidence.",
    tech: ["Next.js", "Tailwind CSS", "Solventum Brand"],
    accent: "orange",
  },
  {
    title: "Artemis Tracker",
    tag: "Space Mission",
    description:
      "A real-time mission tracker for NASA's Artemis program — following the Starship lunar lander and crewed moon missions as they happen.",
    tech: ["React", "NASA API", "TypeScript"],
    accent: "purple",
  },
]

const accentMap: Record<string, string> = {
  purple: "border-purple-500/20 hover:border-purple-500/50",
  pink: "border-pink-500/20 hover:border-pink-500/50",
  orange: "border-orange-500/20 hover:border-orange-500/50",
}

const tagMap: Record<string, string> = {
  purple: "text-purple-400 bg-purple-500/10",
  pink: "text-pink-400 bg-pink-500/10",
  orange: "text-orange-400 bg-orange-500/10",
}

const dotMap: Record<string, string> = {
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  orange: "bg-orange-400",
}

export function Projects() {
  return (
    <section id="projects" className="bg-black py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
          Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 ${accentMap[p.accent]}`}
            >
              {/* Tag */}
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full uppercase tracking-widest ${tagMap[p.accent]}`}
              >
                {p.tag}
              </span>

              <h3 className="text-xl font-bold text-white mt-4 mb-3">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{p.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-white/30 font-mono">
                    <span className={`w-1.5 h-1.5 rounded-full ${dotMap[p.accent]}`} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
