import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark dark:bg-brand/20 dark:text-brand-light',
        className,
      )}
    >
      {children}
    </span>
  )
}
