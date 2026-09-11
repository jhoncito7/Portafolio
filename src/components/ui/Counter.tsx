import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  className?: string
}

export function Counter({ value, suffix = '+', className }: CounterProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [display, setDisplay] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)

        const duration = 1600
        const step = value / (duration / 16)
        let current = 0

        const timer = window.setInterval(() => {
          current += step
          if (current >= value) {
            setDisplay(value)
            setDone(true)
            window.clearInterval(timer)
          } else {
            setDisplay(Math.floor(current))
          }
        }, 16)
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <h3 ref={ref} className={className ?? 'text-4xl font-extrabold text-brand'}>
      {display}
      {done ? suffix : ''}
    </h3>
  )
}
