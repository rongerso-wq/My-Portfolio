"use client"

import dynamic from "next/dynamic"

const ShaderAnimation = dynamic(
  () => import("@/components/ui/shader-animation").then((m) => m.ShaderAnimation),
  { ssr: false, loading: () => <div className="w-full h-full bg-black" /> }
)

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Shader fills full screen — loaded client-side only, safe on all browsers */}
      <ShaderAnimation />

      {/* Overlay gradient so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4 font-mono">
          Clinical Advisor · AI Enthusiast
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            Dr. Roni
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
            Gershonovitch
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-md font-light">
          Where medicine meets machine intelligence.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs tracking-widest uppercase font-mono">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
