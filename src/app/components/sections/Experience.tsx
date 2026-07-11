import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Experience } from '@/types'

const experience: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'TechVenture Labs',
    period: '2023 — Present',
    location: 'Remote',
    description:
      'Leading full-stack development of a SaaS analytics platform serving 200+ enterprise clients. Responsible for architecture decisions, code review, and mentoring junior engineers.',
    highlights: [
      'Reduced API response time by 60% through query optimisation and strategic caching',
      'Built real-time collaboration features serving 10k concurrent users',
      'Established CI/CD pipelines and code review practices across the engineering org',
    ],
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'BuildRight Digital',
    period: '2022 — 2023',
    location: 'Lagos, Nigeria',
    description:
      'Developed custom web applications for clients across fintech, edtech, and logistics sectors. Sole developer on 6 of 8 projects.',
    highlights: [
      'Delivered 8 production applications across diverse industry verticals',
      'Introduced TypeScript adoption, reducing runtime errors by 40%',
      'Built a payment integration layer handling ₦50M+ in monthly transactions',
    ],
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'GCP'],
  },
  {
    role: 'Data Analyst',
    company: 'Insight Analytics Group',
    period: '2021 — 2022',
    location: 'Lagos, Nigeria',
    description:
      'Analysed large datasets to support business intelligence and strategic planning for corporate clients across 5 industries.',
    highlights: [
      'Built automated reporting pipelines, reclaiming 15 analyst-hours per week',
      'Developed inventory forecasting models with 87% accuracy',
      'Presented weekly insights to C-suite stakeholders across 5 client accounts',
    ],
    tech: ['Python', 'Pandas', 'SQL', 'Tableau', 'Excel'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Experience</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-14 leading-[1.1]"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative">
            <div className="absolute left-0 md:left-[11rem] top-3 bottom-3 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="md:grid md:grid-cols-[11rem_1fr] gap-10"
                >
                  <div className="hidden md:flex flex-col items-end pr-10 pt-1 relative">
                    <p className="text-xs font-mono text-muted-foreground text-right leading-[1.6]">
                      {job.period}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground/60 text-right">
                      {job.location}
                    </p>
                    <div className="absolute right-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-background" />
                  </div>

                  <div className="p-6 lg:p-8 rounded-xl border border-border bg-card hover:border-accent/25 transition-colors duration-300">
                    <div className="md:hidden mb-2">
                      <p className="text-[10px] font-mono text-muted-foreground">
                        {job.period} · {job.location}
                      </p>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-accent font-mono text-sm mt-0.5 mb-3">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-[1.75] mb-4">
                      {job.description}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-accent mt-0.5 shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[11px] font-mono bg-background border border-border text-muted-foreground rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
