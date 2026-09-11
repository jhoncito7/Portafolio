import {
  Accessibility,
  Atom,
  Boxes,
  Braces,
  Container,
  Database,
  // Figma,
  FileCode2,
  GitBranch,
  Network,
  Paintbrush,
  PenTool,
  Server,
  Wind,
  // Workflow,
} from 'lucide-react'
import type { Skill, SkillCategory } from '@/types'

export const skillCategories: { id: SkillCategory; label: string; description: string }[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces modernas, tipadas y responsivas.',
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'APIs, lógica de negocio y datos.',
  },
  {
    id: 'devops',
    label: 'DevOps & Herramientas',
    description: 'Entregas confiables y control de versiones.',
  },
  {
    id: 'diseno',
    label: 'Diseño & UI/UX',
    description: 'Experiencias centradas en el usuario.',
  },
]

export const skills: Skill[] = [
  { name: 'React / Next.js', description: 'Componentes, hooks y routing', category: 'frontend', icon: Atom, level: 90 },
  { name: 'TypeScript', description: 'Tipado estático y código seguro', category: 'frontend', icon: FileCode2, level: 85 },
  { name: 'Tailwind CSS', description: 'Design systems y UI moderna', category: 'frontend', icon: Wind, level: 88 },
  { name: 'JavaScript', description: 'Interactividad y lógica cliente', category: 'frontend', icon: Braces, level: 92 },
  { name: 'HTML5 & CSS3', description: 'Semántica y diseño responsivo', category: 'frontend', icon: Paintbrush, level: 95 },
  { name: 'Node.js / Express', description: 'Servicios backend y APIs', category: 'backend', icon: Server, level: 80 },
  { name: 'Django', description: 'Backend y APIs con Python', category: 'backend', icon: Boxes, level: 78 },
  { name: 'APIs REST', description: 'Integración de servicios externos', category: 'backend', icon: Network, level: 85 },
  { name: 'SQL', description: 'Modelado y consultas de datos', category: 'backend', icon: Database, level: 82 },
  { name: 'Docker', description: 'Contenedores y despliegue', category: 'devops', icon: Container, level: 72 },
  { name: 'Git', description: 'Control de versiones', category: 'devops', icon: GitBranch, level: 85 },
  // { name: 'Pipelines', description: 'Integración y entrega continua', category: 'devops', icon: Workflow, level: 70 },
  { name: 'UI/UX', description: 'Diseño centrado en el usuario', category: 'diseno', icon: PenTool, level: 84 },
  // { name: 'Figma', description: 'Prototipado y handoff', category: 'diseno', icon: Figma, level: 80 },
  { name: 'Accesibilidad', description: 'WCAG, teclado y semántica', category: 'diseno', icon: Accessibility, level: 82 },
]
