import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['inicio', 'sobre', 'servicios', 'experiencia', 'habilidades', 'proyectos', 'contacto']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <div className="min-h-screen bg-white dark:bg-night">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[3000] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>

      <ScrollProgress />
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
