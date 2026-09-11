import { Facebook, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import type { ContactChannel, SocialLink } from '@/types'

export const profile = {
  name: 'Jhon Lee Ramirez Coloma',
  firstName: 'Jhon Lee',
  role: 'Desarrollador Web Full-Stack',
  tagline: 'Construyo sistemas y aplicaciones web centradas en las personas.',
  description:
    'Desarrollo soluciones web de extremo a extremo: interfaces modernas con React y TypeScript, APIs REST y bases de datos SQL, cuidando el rendimiento, la accesibilidad y una experiencia de usuario clara.',
  location: 'Lima, Perú',
  email: 'leeramirez.colomajhon98@gmail.com',
  phone: '+51 928280765',
  phoneRaw: '51928280765',
  availability: 'Disponible para proyectos freelance, colaboraciones y oportunidades full-time.',
  resumeUrl: '#',
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/jhoncito7', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jhon-lee-ramirez-coloma-123456789/', icon: Linkedin },
  { label: 'Facebook', href: 'https://web.facebook.com/Jhon16ramirez', icon: Facebook },
  { label: 'WhatsApp', href: 'https://wa.me/51928280765', icon: MessageCircle },
  { label: 'Correo', href: 'mailto:leeramirez.colomajhon98@gmail.com', icon: Mail },
]

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Teléfono',
    value: profile.phone,
    href: `tel:+${profile.phoneRaw}`,
    icon: Phone,
  },
  {
    label: 'Ubicación',
    value: profile.location,
    href: 'https://maps.google.com/?q=Lima,Peru',
    icon: MapPin,
  },
]
