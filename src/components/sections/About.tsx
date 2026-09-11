import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Counter } from '@/components/ui/Counter'

const paragraphs = [
  'Soy desarrollador web full-stack y me enfoco en crear aplicaciones modernas, responsivas y mantenibles. Trabajo con React, TypeScript y Tailwind en el frontend, y con Node.js, Express y SQL en el backend.',
  'He desarrollado sistemas reales como SISCOLAS (gestión de colas), módulos de consulta de información y BAML, una mesa de ayuda para gestión de incidencias. En cada proyecto priorizo la claridad del flujo, el rendimiento y la accesibilidad.',
  'Transformo ideas en soluciones funcionales y estéticamente cuidadas, con código ordenado y una experiencia de usuario pensada para las personas que usan el sistema todos los días.',
  'Me mantengo en constante aprendizaje de las últimas tecnologías y buenas prácticas, trabajando con metodologías ágiles y entregas por etapas validadas con el cliente.',
]

const stats = [
  { value: 1, label: 'Años de experiencia' },
  { value: 3, label: 'Sistemas en producción' },
  { value: 3, label: 'Clientes satisfechos' },
]

export function About() {
  return (
    <Section id="sobre" title="Sobre Mí">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="space-y-5">
          {paragraphs.map((text) => (
            <p key={text} className="leading-relaxed text-ink-soft dark:text-slate-300">
              {text}
            </p>
          ))}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 120}
              className="rounded-xl border-l-4 border-brand bg-slate-50 p-7 text-center shadow-soft transition-transform hover:-translate-y-1.5 hover:shadow-glow dark:bg-night-soft"
            >
              <Counter value={stat.value} />
              <p className="mt-2 text-sm text-ink-soft dark:text-slate-400">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
