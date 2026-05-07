# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for **Dr. Roni Gershonovitch** (DMD, MPH) — Clinical Advisor & AI Enabler. Single-page Next.js 16 site deployed to Vercel at https://antigravity-app-mocha.vercel.app/. Repo: `github.com/rongerso-wq/My-Portfolio` (default branch `master`).

## Commands

```bash
npm run dev      # Turbopack dev server on :3000
npm run build    # Production build (TypeScript checked here, not in dev)
npm run start    # Serve the built output
npm run lint     # ESLint via eslint-config-next
```

There is no test runner configured. Type errors only surface during `next build` — run it before considering UI work done.

## Architecture

Single-page composition. [src/app/page.tsx](src/app/page.tsx) imports section components and stacks them in order on a black background. **Each section is self-contained** — owns its data (project arrays, skill lists, link maps) inline at the top of the file. There is no shared state, no global store, no per-section data file. To add or edit content, edit the section component itself.

```
<Hero> → <About> → <Skills> → <Projects> → <CV> → <Contact>
```

Section components live in [src/components/sections/](src/components/sections/). They use Tailwind v4 with the `purple/pink/orange` accent system established in [projects.tsx](src/components/sections/projects.tsx). Pattern: a typed `Accent` union plus `Record<Accent, string>` className maps. Reuse this pattern when adding accents elsewhere — don't introduce ad-hoc colors.

### Hero shader (the only non-trivial piece)

[src/components/ui/shader-animation.tsx](src/components/ui/shader-animation.tsx) is a Three.js WebGL fragment-shader background. It's imported into [hero.tsx](src/components/sections/hero.tsx) via `next/dynamic` with `ssr: false` — **don't change that**, the shader needs `window` / WebGL context and will break SSR if loaded synchronously. It also has a built-in WebGL-detection fallback that swaps to a CSS gradient when WebGL is unavailable, so don't strip the `webglFailed` branch.

### Routing & metadata

App Router, single route. SEO metadata lives in [src/app/layout.tsx](src/app/layout.tsx) (`metadata` export with `title`, `description`, `keywords`, `openGraph`, `twitter`). Update there when changing how the site appears in link previews.

### Asset conventions

- Project screenshot thumbnails: `public/projects/<slug>.jpg` referenced as `/projects/<slug>.jpg` from [projects.tsx](src/components/sections/projects.tsx).
- CV download: `public/cv/roni-gershonovitch-cv.pdf` (path is hardcoded in [cv.tsx](src/components/sections/cv.tsx) as `CV_PATH`).
- Use plain `<img>` tags rather than `next/image` for these — current sections do.

### shadcn / Base UI

[components.json](components.json) is configured for shadcn (`style: base-nova`, `iconLibrary: lucide`). Only [button.tsx](src/components/ui/button.tsx) is currently installed. Add new shadcn primitives via the CLI (don't hand-write into `components/ui/` if a registry equivalent exists).

## Critical: Next.js 16 has breaking changes

[AGENTS.md](AGENTS.md) flags this and it's true: Next 16 + React 19 differ from older training data. Conventions and APIs may not match what you expect. **Before writing non-trivial framework-specific code** (route handlers, dynamic params, server actions, caching, image optimization) read the relevant guide in `node_modules/next/dist/docs/` first. Heed deprecation notices that appear during `npm run build`.

The current code uses only stable patterns: `Metadata` export, `next/font/google`, `next/dynamic`. These are safe.

## Branch & deploy posture

Production deploys from `master`. Active redesign work happens on the `redesign` branch — keep design changes there until reviewed. Vercel auto-deploys on push to `master`, so:

- Run `npm run build` locally before pushing `master`.
- Confirm `git remote -v` and `git status` first.
- Don't `--no-verify`. Don't amend pushed commits.
- Open a PR from `redesign` → `master` rather than fast-forwarding by hand when the redesign is ready.

## Conventions

- All copy in JSX — no i18n, no string tables. Site is English-only.
- Lucide icons via `import { IconName } from "lucide-react"`.
- TypeScript: keep `Project`, `Accent`, etc. typed; don't widen to `any`.
- File-level constants (`CV_PATH`, project arrays, link arrays) live at the top of the section file. Edit data in place rather than threading props through.
