import { Boxes, Code2, LifeBuoy, Palette } from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas, rápidas y responsivas, construidas con tecnología actual.',
    icon: Code2,
    items: [
      'SPA con React y TypeScript',
      'Diseño responsive mobile-first',
      'Integración de APIs REST',
      'Optimización de rendimiento',
    ],
  },
  {
    title: 'Sistemas a Medida',
    description: 'Soluciones adaptadas a los procesos reales de tu operación, no plantillas genéricas.',
    icon: Boxes,
    items: [
      'Levantamiento de requerimientos',
      'Módulos de gestión y consultas',
      'Roles, permisos y seguridad',
      'Reportes y exportación de datos',
    ],
  },
  {
    title: 'Mesas de Ayuda',
    description: 'Herramientas para ordenar la atención y dar trazabilidad a cada incidencia.',
    icon: LifeBuoy,
    items: [
      'Gestión de tickets e incidencias',
      'Prioridades y seguimiento de estados',
      'Asignación y trazabilidad',
      'Paneles de indicadores',
    ],
  },
  {
    title: 'UI/UX & Accesibilidad',
    description: 'Interfaces claras y usables, pensadas para las personas que usan el sistema a diario.',
    icon: Palette,
    items: [
      'Prototipado en Figma',
      'Design systems consistentes',
      'Accesibilidad WCAG',
      'Micro-interacciones con propósito',
    ],
  },
]
