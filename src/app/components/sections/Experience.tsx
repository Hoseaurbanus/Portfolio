import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { ease } from '@/lib/constants'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import type { Experience } from '@/types'

const experience: Experience[] = [
  {
    role: 'Data Analyst & QA Specialist',
    company: 'Sterling One Foundation',
    period: '2024 — Present',
    location: 'Nigeria',
    description:
      'Develop Python scripts, maintain internal systems, and perform statistical analysis. Build dashboards and manage data using Pandas, NumPy, and Matplotlib.',
    highlights: [
      'Built Python automation tools using Pandas that cut manual reporting time for field operations',
      'Kept systems running reliably through proactive monitoring and documentation',
      'Developed dashboards tracking financial and operational KPIs across 5 program units',
      'Performed statistical analysis with Pandas and NumPy, delivering monthly reports that guided leadership decisions',
      'Tested internal applications, tracking and resolving bugs to improve stability',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Dashboard Tools'],
  },
  {
    role: 'Virtual Assistant',
    company: 'Self-Employed / Freelance',
    period: '2023 — Present',
    location: 'Remote',
    description:
      'Provided remote administrative, technical, and creative support to multiple clients, managing tasks across social media, research, and data entry.',
    highlights: [
      'Managed social media accounts for 3 clients, creating content and scheduling posts that boosted engagement',
      'Conducted research and compiled reports for business development projects',
      'Handled email management, calendar coordination, and travel logistics for busy professionals',
      'Delivered consistently on tight deadlines while maintaining high client satisfaction',
    ],
    tech: ['Google Workspace', 'Social Media Tools', 'Research', 'Data Entry', 'Communication'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="05" label="Experience" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-7 sm:mb-10 lg:mb-12 leading-[1.1] tracking-tight"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative">
            {/* Timeline line - visible on all sizes now */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[7px] md:left-[11rem] top-3 bottom-3 w-px bg-border"
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="grid grid-cols-[20px_1fr] md:grid-cols-[11rem_1fr] gap-4 md:gap-8 lg:gap-10"
                >
                  {/* Mobile dot + desktop meta */}
                  <div className="relative flex md:flex-col md:items-end md:pr-10 pt-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.15 + i * 0.1, ease }}
                      className="w-3.5 h-3.5 rounded-full bg-accent border-2 border-background md:absolute md:right-[-7px] md:top-1.5 shrink-0"
                    />
                    <div className="hidden md:block text-right">
                      <p className="text-xs font-mono text-muted-foreground leading-[1.6]">
                        {job.period}
                      </p>
                      <p className="text-[10px] font-mono text-muted-foreground/60">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ borderColor: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}
                    className="p-4 sm:p-5 lg:p-7 rounded-xl border border-border bg-card hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3 md:hidden">
                      <span className="inline-flex items-center px-2.5 py-1 text-[10px] sm:text-[11px] font-mono text-muted-foreground bg-muted rounded-full border border-border">
                        {job.period}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground/70">
                        {job.location}
                      </span>
                    </div>
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                      {job.role}
                    </h3>
                    <p className="text-accent font-mono text-xs sm:text-sm mt-1 mb-3">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <ul className="space-y-2 sm:space-y-2.5 mb-4">
                      {job.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-accent mt-0.5 shrink-0"
                          />
                          <span className="flex-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono bg-background border border-border text-muted-foreground rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
