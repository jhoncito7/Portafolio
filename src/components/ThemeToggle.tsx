import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
      className="rounded-full p-2 text-ink transition-transform duration-300 hover:rotate-12 hover:text-brand dark:text-white dark:hover:text-brand-light"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
