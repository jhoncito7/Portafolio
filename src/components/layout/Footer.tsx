import { Mail, MapPin, Phone } from 'lucide-react'
import { profile, socials } from '@/data/profile'

const navLinks = [
  { id: 'sobre', label: 'Sobre Mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

const serviceLinks = ['Desarrollo Web', 'Sistemas a Medida', 'Mesas de Ayuda', 'UI/UX & Accesibilidad']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-night-soft">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/lee.jpeg"
              alt=""
              className="h-11 w-11 rounded-full border-2 border-brand object-cover"
            />
            <span className="font-display text-xl font-bold text-brand">{profile.firstName.split(' ')[0]}</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft dark:text-slate-400">
            {profile.tagline} {profile.availability}
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-soft shadow-soft transition-all hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand hover:to-accent hover:text-white dark:bg-night dark:text-slate-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink dark:text-white">Navegación</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-ink-soft transition-colors hover:text-brand dark:text-slate-400 dark:hover:text-brand-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink dark:text-white">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-ink-soft transition-colors hover:text-brand dark:text-slate-400"
              >
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${profile.phoneRaw}`}
                className="flex items-center gap-2 text-ink-soft transition-colors hover:text-brand dark:text-slate-400"
              >
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-ink-soft dark:text-slate-400">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>
          <ul className="mt-6 space-y-2">
            {serviceLinks.map((service) => (
              <li key={service} className="text-xs font-medium text-ink-faint dark:text-slate-500">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-soft dark:text-slate-500">
            &copy; {year} {profile.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-ink-soft dark:text-slate-500">
            Hecho con React, TypeScript y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
