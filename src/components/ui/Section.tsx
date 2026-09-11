import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
  alt?: boolean
}

export function Section({ id, title, intro, children, className, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 py-24',
        alt
          ? 'bg-gradient-to-br from-slate-50 to-slate-100 dark:from-night-soft dark:to-night-deep'
          : 'bg-white dark:bg-night',
        className,
      )}
    >
      <div className="container-page">
        <Reveal className="mb-14 text-center">
          <h2 className="relative inline-block pb-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title}
            <span className="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-accent" />
          </h2>
          {intro && <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink-soft dark:text-slate-300">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
