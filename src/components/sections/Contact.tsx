import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { contactChannels, socials } from '@/data/profile'

type FormValues = { name: string; email: string; message: string }
type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = { name: '', email: '', message: '' }
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Ingresa tu nombre.'
  if (!values.email.trim()) errors.email = 'Ingresa tu email.'
  else if (!emailRegex.test(values.email)) errors.email = 'Ingresa un email válido.'
  if (!values.message.trim()) errors.message = 'Escribe tu mensaje.'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    window.setTimeout(() => {
      setValues(initialValues)
      setStatus('success')
    }, 1200)
  }

  const fieldClass = (field: keyof FormValues) =>
    `w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:ring-2 focus:ring-brand/30 dark:bg-night dark:text-white ${
      errors[field] ? 'border-red-400' : 'border-slate-200 dark:border-white/10'
    }`

  return (
    <Section
      id="contacto"
      title="Ponte en Contacto"
      intro="¿Tienes una idea o proyecto? Escríbeme y trabajemos juntos para convertirlo en una solución digital de alto impacto."
      alt
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5">
          {contactChannels.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-xl bg-white p-6 shadow-soft transition-transform hover:translate-x-2 hover:shadow-glow dark:bg-night"
            >
              <span className="rounded-full bg-brand/10 p-3 text-brand dark:bg-brand/20">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink-faint dark:text-slate-500">{label}</span>
                <span className="block font-medium text-ink dark:text-slate-200">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl bg-white p-7 shadow-soft dark:bg-night">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                Tu nombre
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={fieldClass('name')}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                Tu email
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(event) => update('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={fieldClass('email')}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                Tu mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(event) => update('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${fieldClass('message')} resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs font-medium text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === 'sending'} className="w-full">
              <Send className="h-4 w-4" />
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </Button>

            <p aria-live="polite" className="min-h-5 text-center text-sm">
              {status === 'success' && (
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  ¡Mensaje enviado! Me pondré en contacto pronto.
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>

      <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent text-white shadow-soft transition-transform hover:-translate-y-1.5 hover:shadow-glow"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </Reveal>
    </Section>
  )
}
