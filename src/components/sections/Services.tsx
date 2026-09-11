import { Check } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'

export function Services() {
  return (
    <Section
      id="servicios"
      title="Servicios"
      intro="Acompaño cada proyecto de principio a fin, combinando desarrollo, criterio de producto y atención al detalle."
      alt
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Reveal
              key={service.title}
              delay={(index % 4) * 90}
              className="group card-base flex flex-col p-7 hover:-translate-y-2 hover:border-brand/30 hover:shadow-glow"
            >
              <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-200/70 pt-5 dark:border-white/10">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft dark:text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
