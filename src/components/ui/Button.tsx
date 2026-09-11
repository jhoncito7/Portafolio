import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand to-brand-dark text-white shadow-[0_10px_20px_rgba(99,102,241,0.15)] hover:-translate-y-0.5 hover:shadow-glow',
  secondary:
    'border-2 border-brand text-brand hover:bg-gradient-to-r hover:from-brand hover:to-accent hover:text-white',
  ghost: 'text-ink-soft hover:text-brand dark:text-slate-300',
}

const sizes: Record<Size, string> = {
  md: 'px-7 py-3 text-base',
  sm: 'px-4 py-2 text-sm',
}

interface BaseProps {
  as?: 'a' | 'button'
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type Props = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>

export function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (as === 'a') {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
