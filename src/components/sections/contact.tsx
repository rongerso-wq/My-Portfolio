import { Mail, Link2, Phone } from "lucide-react"

const links = [
  {
    label: "Email",
    value: "Rongerso@gmail.com",
    href: "mailto:Rongerso@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+972 52-443-5567",
    href: "tel:+972524435567",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "dr-roni-gershonovitch-dmd-mph",
    href: "https://www.linkedin.com/in/dr-roni-gershonovitch-dmd-mph-8a4811182/",
    icon: Link2,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-mono mb-4">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Contact
        </h2>
        <p className="text-white/40 text-lg mb-16 max-w-md">
          Interested in collaborating on clinical AI, digital health tools, or advisory work? Let's talk.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <Icon className="w-5 h-5 text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-0.5">
                  {label}
                </p>
                <p className="text-white/80 text-sm truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer — tech credit only; signature is fixed/persistent across the whole page */}
      <div className="max-w-4xl mx-auto mt-24 pt-8 border-t border-white/5 flex items-center justify-end">
        <span className="text-white/20 text-xs font-mono">
          Built with Next.js + Three.js
        </span>
      </div>
    </section>
  )
}
