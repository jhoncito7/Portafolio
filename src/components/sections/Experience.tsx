import { Briefcase, MapPin } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiencia"
      intro="Un recorrido por mi trayectoria construyendo productos y sistemas web."
    >
      <ol className="relative mx-auto max-w-3xl space-y-8 before:absolute before:left-[13px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-brand before:via-accent before:to-transparent sm:before:left-[15px]">
        {experience.map((item, index) => (
          <li key={`${item.period}-${item.role}`} className="relative pl-12 sm:pl-16">
            <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-brand/20 dark:bg-night">
              <span className="h-3 w-3 rounded-full bg-gradient-to-br from-brand to-accent" />
            </span>

            <Reveal delay={index * 100} className="card-base p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark dark:bg-brand/20 dark:text-brand-light">
                  {item.period}
                </span>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Actual
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-bold">{item.role}</h3>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-soft dark:text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Briefcase className="h-4 w-4 text-brand" aria-hidden="true" />
                  {item.organization}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {item.location}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-soft dark:bg-night dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
