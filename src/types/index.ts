import type { LucideIcon } from 'lucide-react'

export interface Project {
  id: number
  index: string
  name: string
  tagline: string
  overview: string
  problem: string
  solution: string
  tech: string[]
  outcome: string
  image: string
  github: string
  demo: string
}

export interface SkillGroup {
  label: string
  Icon: LucideIcon
  skills: string[]
}

export interface Service {
  Icon: LucideIcon
  title: string
  body: string
  tags: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  description: string
  highlights: string[]
  tech: string[]
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
}

export interface NavLink {
  label: string
  href: string
}

export interface GitHubStats {
  publicRepos: number
  totalStars: number
  contributions: number
  pullRequestsMerged: number
}

export interface GitHubDay {
  level: number
  date: string
  count: number
}
