# Roni Gershonovitch — Personal Portfolio

A personal portfolio for **Roni Gershonovitch**, Clinical Advisor & AI Enthusiast.
Built with Next.js, Three.js WebGL shader animation, shadcn/ui, Tailwind CSS, and TypeScript.

---
i
## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen shader animation with name + tagline overlay |
| **About** | Bio, background, and key stats |
| **Skills** | Clinical expertise + AI & technology tools |
| **Projects** | Neuro-point, Dento-Safe, Solventum Calculator, Artemis Tracker |
| **Contact** | Email, LinkedIn, GitHub, Website |

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| shadcn/ui | 4 |
| Three.js | 0.183 |
| lucide-react | latest |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page — assembles all sections
│   └── globals.css              # Global styles
└── components/
    ├── ui/
    │   ├── shader-animation.tsx  # Three.js WebGL shader (core animation)
    │   ├── shader-demo.tsx       # Demo wrapper
    │   └── button.tsx            # shadcn Button
    └── sections/
        ├── hero.tsx              # Hero with shader background
        ├── about.tsx             # Bio + stats
        ├── skills.tsx            # Clinical & AI skill pills
        ├── projects.tsx          # Project cards
        └── contact.tsx           # Contact links + footer
```

---

## Key Component: `ShaderAnimation`

A full-screen WebGL animation rendered via Three.js with a custom GLSL fragment shader.
Produces a looping colorful radial wave pattern — used as the hero background.

```tsx
import { ShaderAnimation } from "@/components/ui/shader-animation"

<ShaderAnimation />
```

---

## Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
