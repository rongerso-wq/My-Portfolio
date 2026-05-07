export function Signature() {
  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-baseline gap-2 backdrop-blur-md bg-black/40 rounded-full px-3 py-1.5 ring-1 ring-white/10"
    >
      <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/40">
        Created by
      </span>
      <span
        className="text-lg sm:text-xl text-white/80 leading-none"
        style={{ fontFamily: "var(--font-caveat), cursive" }}
      >
        Roni Gershonovitch
      </span>
    </aside>
  )
}
