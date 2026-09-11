import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre Mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

interface NavbarProps {
  activeSection: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="glass-nav sticky top-0 z-[1000] shadow-card">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Navegación principal">
        <a href="#inicio" className="flex items-center gap-3 transition-transform hover:scale-105">
          <img
            src="/lee.jpeg"
            alt="Foto de Jhon Lee Ramirez Coloma"
            className="h-10 w-10 rounded-full border-2 border-brand object-cover"
          />
          <span className="text-2xl font-bold text-brand">{profile.firstName.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'relative font-medium text-ink transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-brand after:to-accent after:transition-all after:duration-300 hover:after:w-full dark:text-slate-200',
                  activeSection === item.id ? 'text-brand after:w-full' : 'after:w-0',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md p-2 text-ink lg:hidden dark:text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-slate-200 bg-white transition-[max-height] duration-300 lg:hidden dark:border-white/10 dark:bg-night-soft',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <ul className="container-page flex flex-col py-2">
          {navItems.map((item) => (
            <li key={item.id} className="border-b border-slate-100 last:border-none dark:border-white/5">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-4 font-medium transition-colors',
                  activeSection === item.id ? 'text-brand' : 'text-ink dark:text-slate-200',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
