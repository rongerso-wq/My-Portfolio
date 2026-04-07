const clinicalSkills = [
  "Clinical Advisory",
  "Dental Medicine",
  "Patient Risk Assessment",
  "Evidence-Based Practice",
  "Medical Education",
  "Product Clinical Validation",
  "Trauma Protocols",
  "Pediatric Dentistry",
]

const aiSkills = [
  "AI Integration",
  "Prompt Engineering",
  "Claude API",
  "Next.js / React",
  "Clinical Decision Tools",
  "LLM Application Design",
  "TypeScript",
  "Tailwind CSS",
]

function SkillPill({ label, accent }: { label: string; accent: "purple" | "pink" }) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-mono border transition-colors ${
        accent === "purple"
          ? "border-purple-500/30 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20"
          : "border-pink-500/30 text-pink-300 bg-pink-500/10 hover:bg-pink-500/20"
      }`}
    >
      {label}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
          Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">
          Skills & Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Clinical */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-6">
              Clinical
            </h3>
            <div className="flex flex-wrap gap-3">
              {clinicalSkills.map((s) => (
                <SkillPill key={s} label={s} accent="purple" />
              ))}
            </div>
          </div>

          {/* AI & Tech */}
          <div>
            <h3 className="text-white/40 text-xs uppercase tracking-widest font-mono mb-6">
              AI & Technology
            </h3>
            <div className="flex flex-wrap gap-3">
              {aiSkills.map((s) => (
                <SkillPill key={s} label={s} accent="pink" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
