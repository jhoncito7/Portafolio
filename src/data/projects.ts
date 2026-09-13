import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'siscolas',
    title: 'SISCOLAS',
    tagline: 'Sistema de gestión de colas y turnos',
    category: 'Sistema web',
    role: 'Desarrollo full-stack',
    year: '2026',
    summary:
      'Plataforma para organizar la atención al público mediante turnos, con pantalla de llamado y panel de reportes para medir la operación.',
    problem:
      'La atención se gestionaba con filas físicas y sin datos: tiempos de espera largos, sin visibilidad del flujo y sin métricas para mejorar.',
    solution:
      'Diseñé un flujo de turnos con emisión por servicio, pantalla pública de llamado en tiempo real y un panel de operador con reportes para tomar decisiones.',
    features: [
      'Emisión de turnos por servicio y prioridad',
      'Pantalla pública de llamado en tiempo real',
      'Panel de operador para gestionar la atención',
      'Reportes y estadísticas de tiempos de espera',
      'Roles y permisos por tipo de usuario',
    ],
    stack: ['React', 'TypeScript', 'Django', 'DRF', 'WebSockets', 'Redis', 'MySQL', 'Tailwind CSS', 'Docker'],
    metrics: [
      { label: 'Módulos', value: '5' },
      { label: 'Roles de usuario', value: '4' },
      { label: 'Tiempo de respuesta', value: '< 1s' },
    ],
    images: [
      '/projects/siscolas/dashboard.webp',
      '/projects/siscolas/ventanillas.webp',
      '/projects/siscolas/registrototem.webp',
    ],
    featured: true,
  },
  {
    id: 'consultas',
    title: 'Módulos de Consultas',
    tagline: 'Consulta y exportación de información',
    category: 'Sistema web',
    role: 'Desarrollo full-stack',
    year: '2026',
    summary:
      'Conjunto de módulos para consultar, filtrar y exportar información desde MySQL, integrando APIs externas con búsquedas ágiles y resultados claros.',
    problem:
      'La información estaba dispersa y consultarla requería procesos manuales lentos, sin filtros ni forma sencilla de exportar resultados.',
    solution:
      'Construí módulos de consulta sobre MySQL con filtros combinables, paginación y exportación, integrando APIs externas y optimizando las consultas para respuestas rápidas.',
    features: [
      'Búsqueda con filtros combinables por fecha y criterio',
      'Consumo e integración de APIs externas',
      'Paginación y ordenamiento de resultados',
      'Exportación a PDF y Excel',
      'Validación de datos y manejo de errores',
      'Interfaz accesible y responsiva',
    ],
    stack: ['React', 'TypeScript', 'Django', 'DRF', 'JWT', 'Redux Toolkit', 'ApexCharts', 'MySQL', 'Docker'],
    metrics: [
      { label: 'Base de datos', value: 'MySQL' },
      { label: 'Fuentes de datos', value: 'APIs externas' },
      { label: 'Exportación', value: 'PDF / Excel' },
      { label: 'Filtros', value: 'Avanzados' },
    ],
    images: [
      '/projects/consultas/loginmpm_consultas.webp',
      '/projects/consultas/dashboard.webp',
      '/projects/consultas/modulos.webp'
    ],
    featured: true,
  },
  {
    id: 'baml',
    title: 'BAML',
    tagline: 'Mesa de ayuda y gestión de incidencias',
    category: 'Sistema web',
    role: 'Desarrollo full-stack',
    year: '2025',
    summary:
      'Mesa de ayuda para registrar, priorizar y dar seguimiento a incidencias y solicitudes, con estados, asignación y trazabilidad.',
    problem:
      'Los reportes llegaban por canales informales y se perdían: sin priorización, sin responsables claros y sin historial de resolución.',
    solution:
      'Implementé un flujo de tickets con categorías, prioridades, asignación a responsables y seguimiento de estados hasta el cierre.',
    features: [
      'Registro de incidencias y solicitudes',
      'Prioridades, categorías y estados',
      'Asignación y seguimiento de responsables',
      'Historial y trazabilidad de cada caso',
      'Panel con indicadores de la mesa de ayuda',
    ],
    stack: ['React', 'TypeScript', 'Django', 'DRF', 'JWT', 'WebSockets', 'MySQL', 'Excel', 'cPanel/VPS'],
    metrics: [
      { label: 'Tipos de ticket', value: '6' },
      { label: 'Estados de flujo', value: '5' },
      { label: 'Roles', value: '3' },
    ],
    images: ['/projects/baml/login.webp',
      '/projects/baml/dashboard_1.webp',
      '/projects/baml/Estadisticas.webp',
      '/projects/baml/solicitud_incidencia.webp'
    ],
    featured: true,
  },
]
