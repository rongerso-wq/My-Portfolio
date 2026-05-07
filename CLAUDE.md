# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for **Dr. Roni Gershonovitch** (DMD, MPH, BSc) — *Digital Medical Advisor · Clinical AI Strategy*. Single-page Next.js 16 site. Repo: `github.com/rongerso-wq/My-Portfolio`.

Two live deployments:

| Branch | Purpose | URL |
|---|---|---|
| `master` | Original portfolio (frozen, do not modify casually) | https://antigravity-app-mocha.vercel.app |
| `redesign` | Active redesigned portfolio | https://dr-roni-gershonovitch.vercel.app |

The `dr-roni-gershonovitch.vercel.app` alias is configured in Vercel as a **Preview environment** pinned to the `redesign` branch (Vercel Authentication is disabled at the project level so both URLs are public).

## Commands

```bash
npm run dev      # Turbopack dev server on :3000
npm run build    # Production build (TypeScript checked here, not in dev)
npm run start    # Serve the built output
npm run lint     # ESLint via eslint-config-next
```

There is no test runner configured. Type errors only surface during `next build` — run it before considering UI work done.

## Architecture

Single-page composition. [src/app/page.tsx](src/app/page.tsx) renders a `<Nav>` outside `<main>`, then stacks the section components inside `<main className="bg-black">` in order:

```
<Nav>  (fixed, glassmorphic, anchor links: About / Work / CV / Contact)
<main>
  <Hero> → <About> → <Skills> → <Projects> → <CV> → <Contact>
</main>
```

A persistent **`<Signature>`** watermark is rendered at the body level in [src/app/layout.tsx](src/app/layout.tsx) — fixed bottom-right, `pointer-events:none`, visible across the whole page. It uses the Caveat handwriting font for the name. Don't move it into individual sections; it lives at the body root precisely so it persists when scrolling.

**Each section is self-contained** — owns its data (project arrays, skill lists, link maps, experience entries) inline at the top of the file. There is no shared state, no global store, no per-section data file. To add or edit content, edit the section component itself.

Sections live in [src/components/sections/](src/components/sections/). They use Tailwind v4 with the `purple/pink/orange` accent system established in [projects.tsx](src/components/sections/projects.tsx) — a typed `Accent` union plus `Record<Accent, string>` className maps. Reuse this pattern when adding accents elsewhere; don't introduce ad-hoc colors.

### Hero shader (the only non-trivial piece)

[src/components/ui/shader-animation.tsx](src/components/ui/shader-animation.tsx) is a Three.js WebGL fragment-shader background. It's imported into [hero.tsx](src/components/sections/hero.tsx) via `next/dynamic` with `ssr: false` — **don't change that**, the shader needs `window` / WebGL context and will break SSR if loaded synchronously. It has a built-in WebGL-detection fallback that swaps to a CSS gradient when WebGL is unavailable; don't strip the `webglFailed` branch.

### CV section

[cv.tsx](src/components/sections/cv.tsx) is more than a download link — it embeds the CV content inline as a structured experience timeline (vertical line + dotted markers per role), an Education list, and a Technical Adaptability list. The actual PDF lives at `public/cv/roni-gershonovitch-cv.pdf` and is referenced via `CV_PATH`. When the CV content changes, edit the `experience`, `education`, and `technical` arrays at the top of the file *and* drop in a new PDF — keep them in sync.

### About photos

The About section embeds two action photos under the bio (stage + workshop), pulled from `public/about/stage.jpg` and `public/about/workshop.jpg`. They render in **natural color** with only a soft bottom-darkening gradient for caption legibility — an earlier purple/pink mix-blend duotone treatment was rejected because it tinted skin tones unnaturally. Don't reintroduce the colored wash without checking first.

### Routing & metadata

App Router, single route. SEO metadata lives in [src/app/layout.tsx](src/app/layout.tsx) (`metadata` export: `title`, `description`, `keywords`, `openGraph`, `twitter`; `viewport` export: `themeColor: "#000000"`). The current title across all three (browser tab / OG / Twitter) is **"Dr. Roni Gershonovitch WebPage"** — keep them in sync if you change one.

### Asset conventions

- Project screenshot thumbnails: `public/projects/<slug>.jpg`, referenced as `/projects/<slug>.jpg` from [projects.tsx](src/components/sections/projects.tsx).
- CV PDF: `public/cv/roni-gershonovitch-cv.pdf` (hardcoded as `CV_PATH` in [cv.tsx](src/components/sections/cv.tsx)).
- About photos: `public/about/stage.jpg` and `public/about/workshop.jpg`.
- Use plain `<img>` tags rather than `next/image` — current sections do.

### Fonts

[layout.tsx](src/app/layout.tsx) loads three Google fonts via `next/font/google` (self-hosted at build time):
- `--font-geist-sans` (Geist) — body and headings
- `--font-geist-mono` (Geist_Mono) — eyebrows, labels, mono pills
- `--font-caveat` (Caveat) — the signature watermark only, accessed via `style={{ fontFamily: "var(--font-caveat), cursive" }}`

### shadcn / Base UI

[components.json](components.json) is configured for shadcn (`style: base-nova`, `iconLibrary: lucide`). Only [button.tsx](src/components/ui/button.tsx) is installed. Add new shadcn primitives via the CLI (don't hand-write into `components/ui/` if a registry equivalent exists).

[globals.css](src/app/globals.css) defines a full shadcn light/dark token system (`--background`, `--foreground`, `--primary`, etc.) but most of it is currently unused — sections use raw Tailwind colors (`bg-black`, `bg-zinc-950`, `text-white/60`). Don't try to refactor onto the token system without a deliberate decision about whether to commit to dark-mode tokens or strip them.

## Security headers

[next.config.ts](next.config.ts) sets a Content-Security-Policy plus X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and HSTS on every route. The CSP allows `'unsafe-inline' 'unsafe-eval'` for scripts (Next.js bootstrap + dev tooling) and `'unsafe-inline'` for styles (Tailwind injection); `connect-src 'self'`; `frame-ancestors 'none'`. If you add a third-party script, font, or API endpoint, you must extend the relevant CSP directive — otherwise it'll silently break in production.

## Critical: Next.js 16 has breaking changes

[AGENTS.md](AGENTS.md) flags this and it's true: Next 16 + React 19 differ from older training data. Conventions and APIs may not match what you expect. **Before writing non-trivial framework-specific code** (route handlers, dynamic params, server actions, caching, image optimization) read the relevant guide in `node_modules/next/dist/docs/` first. Heed deprecation notices that appear during `npm run build`.

The current code uses only stable patterns: `Metadata` / `Viewport` exports, `next/font/google`, `next/dynamic`, App Router static rendering. These are safe.

## Lucide note

`lucide-react` is on the **1.x major** (released March 2026). The semver is confusing: `0.x` versions (`0.4xx` and up) were the line that ran from 2020 to early 2026; `1.0.0` was a fresh major rewrite released March 2026 and is now the active line. Don't downgrade to `0.x` thinking it's "more current" — it's the legacy line being maintained for compatibility, not the future.

## Branch & deploy posture

- `master` → production. Vercel auto-deploys, custom domain `antigravity-app-mocha.vercel.app`.
- `redesign` → preview. Vercel auto-deploys, custom domain `dr-roni-gershonovitch.vercel.app` (configured as Preview env pinned to this branch).
- The two are independent live sites today. **Don't push to `master` casually** — that overwrites the original.
- When the redesign is ready to become the canonical site: open a PR `redesign → master`, review, merge. Both custom domains will then serve the redesign content.
- Run `npm run build` locally before any push. Confirm `git remote -v` and `git status` first.
- Don't `--no-verify`. Don't amend pushed commits.

## Conventions

- All copy in JSX — no i18n, no string tables. Site is English-only.
- Lucide icons via `import { IconName } from "lucide-react"`.
- TypeScript: keep `Project`, `Accent`, `Role`, etc. typed; don't widen to `any`.
- File-level constants (`CV_PATH`, project arrays, link arrays, experience arrays) live at the top of the section file. Edit data in place rather than threading props through.
- Anchor offsets are handled by `section[id] { scroll-margin-top: 5rem }` in [globals.css](src/app/globals.css) — match this if you add a new top-level section.
- A `prefers-reduced-motion: reduce` block in [globals.css](src/app/globals.css) collapses all animations/transitions for users with vestibular sensitivities. Don't introduce JS-driven animations that bypass it without a parallel guard.
