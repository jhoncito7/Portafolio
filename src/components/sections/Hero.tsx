import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'
import { profile } from '@/data/profile'

const stats = [
  { value: 1, label: 'Año de experiencia' },
  { value: 3, label: 'Sistemas en producción' },
  { value: 3, label: 'Clientes satisfechos' },
]

const technologies = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  // 'Express',
  'SQL',
  'Tailwind CSS',
  'REST APIs',
  'Docker',
  'Git',
  // 'Figma',
  'UI/UX',
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden py-24"
    >
      <div className="absolute inset-0 -z-20 animate-gradient-move animate-gradient bg-gradient-to-br from-slate-50 via-white to-brand-50 dark:from-night-soft dark:via-night dark:to-night-deep" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-70 dark:bg-grid-dark" />
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Disponible para nuevos proyectos
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-ink-soft dark:text-slate-300 sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft dark:text-slate-400 sm:text-lg">
            {profile.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="#proyectos">
              Ver mis proyectos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="a" href="#contacto" variant="secondary">
              <Mail className="h-4 w-4" />
              Contactarme
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-ink-soft dark:text-slate-400">
            <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
            {profile.location}
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-200/80 pt-8 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <Counter value={stat.value} className="text-3xl font-extrabold text-brand dark:text-brand-light" />
                  <span className="mt-1 block text-xs text-ink-soft dark:text-slate-400">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-brand to-accent opacity-30 blur-3xl" />
            <div className="absolute -right-4 -top-4 h-20 w-20 animate-float rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm motion-reduce:animate-none dark:border-white/10 dark:bg-white/5" />
            <div className="h-64 w-64 animate-float overflow-hidden rounded-[2rem] border-4 border-white/80 shadow-glow outline outline-[6px] outline-brand/15 motion-reduce:animate-none sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]">
              <img
                src="/lee.jpeg"
                alt={`Retrato de ${profile.name}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-14">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-faint dark:text-slate-500">
          Stack tecnológico
        </p>
        <div className="space-y-3">
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee gap-3 pause-on-hover">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={`top-${tech}-${index}`}
                  className="whitespace-nowrap rounded-full border border-slate-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee-reverse gap-3 pause-on-hover">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={`bottom-${tech}-${index}`}
                  className="whitespace-nowrap rounded-full border border-slate-200/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
