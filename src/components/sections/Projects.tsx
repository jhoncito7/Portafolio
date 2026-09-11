import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, Star } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'
import type { Project } from '@/types'

function ProjectVisual({ project, className }: { project: Project; className?: string }) {
  const [failed, setFailed] = useState(false)
  const image = project.images[0]

  if (!image || failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-white ${className ?? ''}`}
      >
        <Layers className="h-14 w-14 opacity-90" aria-hidden="true" />
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={`Vista del sistema ${project.title}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`rounded-xl object-cover ${className ?? ''}`}
    />
  )
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-glow dark:border-white/10 dark:bg-night-soft">
      <div className="relative mb-5">
        <ProjectVisual project={project} className="h-44 w-full transition-transform duration-500 group-hover:scale-[1.02]" />
        {project.featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand shadow-soft backdrop-blur dark:bg-night/80 dark:text-brand-light">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" />
            Destacado
          </span>
        )}
      </div>
      <div className="mb-3 flex items-center justify-between gap-2">
        <Badge>{project.category}</Badge>
        <span className="text-xs font-medium text-ink-faint dark:text-slate-500">{project.year}</span>
      </div>
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-1 text-sm font-medium text-brand dark:text-brand-light">{project.tagline}</p>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-soft dark:text-slate-400">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-soft dark:bg-night dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand transition-colors hover:text-accent dark:text-brand-light"
      >
        Ver caso de estudio
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="p-8 sm:p-10">
      <Badge>{project.category}</Badge>
      <h2 className="mt-4 text-3xl font-extrabold">{project.title}</h2>
      <p className="mt-1 font-medium text-brand dark:text-brand-light">{project.tagline}</p>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="font-semibold text-ink-faint dark:text-slate-500">Rol</dt>
          <dd className="text-ink dark:text-slate-200">{project.role}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-faint dark:text-slate-500">Año</dt>
          <dd className="text-ink dark:text-slate-200">{project.year}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-faint dark:text-slate-500">Tipo</dt>
          <dd className="text-ink dark:text-slate-200">{project.category}</dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-slate-100 p-4 text-center dark:bg-night">
            <p className="text-xl font-extrabold text-brand">{metric.value}</p>
            <p className="mt-1 text-xs text-ink-soft dark:text-slate-400">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="flex items-center gap-2 font-bold">
            <Sparkles className="h-4 w-4 text-accent" /> El reto
          </h3>
          <p className="mt-2 leading-relaxed text-ink-soft dark:text-slate-300">{project.problem}</p>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-bold">
            <Sparkles className="h-4 w-4 text-brand" /> La solución
          </h3>
          <p className="mt-2 leading-relaxed text-ink-soft dark:text-slate-300">{project.solution}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Funcionalidades clave</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-bold">Tecnologías</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark dark:bg-brand/20 dark:text-brand-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.images.length > 1 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.images.slice(1).map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} captura ${index + 2}`}
              loading="lazy"
              className="h-40 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState('Todos')

  const categories = ['Todos', ...Array.from(new Set(projects.map((project) => project.category)))]
  const visibleProjects = filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)

  return (
    <Section
      id="proyectos"
      title="Proyectos Destacados"
      intro="Sistemas reales que diseñé y desarrollé, con foco en resolver problemas concretos de operación y atención."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar proyectos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={
              filter === category
                ? 'rounded-full bg-gradient-to-r from-brand to-accent px-5 py-2 text-sm font-semibold text-white shadow-soft'
                : 'rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink-soft shadow-soft transition-colors hover:text-brand dark:bg-night-soft dark:text-slate-300'
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 100}>
            <ProjectCard project={project} onOpen={() => setActive(project)} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="text-ink-soft dark:text-slate-400">
          ¿Quieres ver más detalles de algún sistema o agendar una demo?
        </p>
        <Button as="a" href="#contacto" variant="secondary" className="mt-4">
          Conversemos
        </Button>
      </Reveal>

      <Modal open={active !== null} onClose={() => setActive(null)} label={active?.title ?? 'Detalle del proyecto'}>
        {active && <ProjectDetail project={active} />}
      </Modal>
    </Section>
  )
}
