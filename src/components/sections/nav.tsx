const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-baseline gap-2 min-w-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded"
        >
          <span className="text-white text-sm font-semibold tracking-tight truncate">
            Roni Gershonovitch
          </span>
          <span className="hidden sm:inline text-white/30 text-[10px] tracking-[0.25em] font-mono uppercase">
            DMD · MPH
          </span>
        </a>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block text-xs sm:text-sm font-mono uppercase tracking-widest text-white/50 hover:text-white px-2 sm:px-3 py-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
