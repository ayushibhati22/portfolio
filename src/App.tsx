import { GoldenDripTransition } from '@/components/golden-lines'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { OpenToWork } from '@/components/open-to-work'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

function App() {
  return (
    <div className="paper-texture min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <GoldenDripTransition />
        <OpenToWork />
        <GoldenDripTransition />
        <About />
        <GoldenDripTransition />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <GoldenDripTransition />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
