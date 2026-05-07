import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { CV } from "@/components/sections/cv"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>
    </>
  )
}
