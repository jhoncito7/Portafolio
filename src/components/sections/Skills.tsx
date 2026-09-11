import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { skillCategories, skills } from '@/data/skills'
import type { SkillCategory } from '@/types'
import { cn } from '@/lib/utils'

type Filter = 'all' | SkillCategory

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Todas' },
  ...skillCategories.map((category) => ({ id: category.id as Filter, label: category.label })),
]

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all')
  const [activeIndex, setActiveIndex] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const visibleSkills = useMemo(
    () => (filter === 'all' ? skills : skills.filter((skill) => skill.category === filter)),
    [filter],
  )

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const clamped = Math.max(0, Math.min(index, scroller.children.length - 1))
    const card = scroller.children[clamped] as HTMLElement | undefined
    if (!card) return
    scroller.scrollTo({ left: card.offsetLeft - scroller.offsetLeft, behavior: 'smooth' })
  }, [])

  const handleScroll = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    setAtStart(scroller.scrollLeft <= 1)
    setAtEnd(scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1)

    const center = scroller.scrollLeft + scroller.clientWidth / 2
    let nearest = 0
    let minDistance = Number.POSITIVE_INFINITY

    Array.from(scroller.children).forEach((child, index) => {
      const element = child as HTMLElement
      const elementCenter = element.offsetLeft - scroller.offsetLeft + element.clientWidth / 2
      const distance = Math.abs(elementCenter - center)
      if (distance < minDistance) {
        minDistance = distance
        nearest = index
      }
    })

    setActiveIndex(nearest)
  }, [])

  useEffect(() => {
    setActiveIndex(0)
    setAtStart(true)
    setAtEnd(false)
    const scroller = scrollerRef.current
    if (scroller) scroller.scrollTo({ left: 0, behavior: 'smooth' })
  }, [filter])

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [handleScroll])

  return (
    <Section
      id="habilidades"
      title="Habilidades Técnicas"
      intro="Stack con el que construyo productos de extremo a extremo, priorizando buenas prácticas, rendimiento y accesibilidad."
      alt
    >
      <div className="mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar habilidades">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-semibold transition-all',
              filter === item.id
                ? 'bg-gradient-to-r from-brand to-accent text-white shadow-soft'
                : 'bg-white text-ink-soft hover:text-brand dark:bg-night-soft dark:text-slate-300',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <Reveal className="relative">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [justify-content:safe_center]"
          role="region"
          aria-label="Carrusel de habilidades"
          tabIndex={0}
        >
          {visibleSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <article
                key={skill.name}
                className="group flex w-[85%] flex-shrink-0 snap-start flex-col rounded-2xl border border-slate-200/70 bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-glow sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] dark:border-white/10 dark:bg-night"
              >
                <div className="mb-4 inline-flex self-center rounded-2xl bg-brand/10 p-4 text-brand transition-colors group-hover:bg-accent/10 group-hover:text-accent dark:bg-brand/20">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <p className="mt-1 text-sm text-ink-soft dark:text-slate-400">{skill.description}</p>

                <div
                  className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Nivel de ${skill.name}`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={atStart}
            aria-label="Habilidad anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:-translate-y-0.5 hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 dark:bg-night dark:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5" role="tablist" aria-label="Paginación de habilidades">
            {visibleSkills.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir a ${skill.name}`}
                aria-current={activeIndex === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  activeIndex === index
                    ? 'w-7 bg-gradient-to-r from-brand to-accent'
                    : 'w-2.5 bg-slate-300 hover:bg-brand/50 dark:bg-white/20',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={atEnd}
            aria-label="Habilidad siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card transition-all hover:-translate-y-0.5 hover:text-brand disabled:cursor-not-allowed disabled:opacity-40 dark:bg-night dark:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </Section>
  )
}
