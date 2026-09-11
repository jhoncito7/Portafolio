import type { LucideIcon } from 'lucide-react'

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'diseno'

export interface Skill {
  name: string
  description: string
  category: SkillCategory
  icon: LucideIcon
  level: number
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  role: string
  year: string
  summary: string
  problem: string
  solution: string
  features: string[]
  stack: string[]
  metrics: ProjectMetric[]
  images: string[]
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
}

export interface ExperienceEntry {
  period: string
  role: string
  organization: string
  location: string
  description: string
  highlights: string[]
  tags: string[]
  current?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export interface ContactChannel {
  label: string
  value: string
  href: string
  icon: LucideIcon
}
