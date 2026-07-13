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
    <section id="experience" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="05" label="Experience" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-10 lg:mb-14 leading-[1.1] tracking-tight"
          >
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 md:left-[11rem] top-3 bottom-3 w-px bg-border hidden md:block"
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-6 lg:space-y-8">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="md:grid md:grid-cols-[11rem_1fr] gap-8 lg:gap-10"
                >
                  <div className="hidden md:flex flex-col items-end pr-10 pt-1 relative">
                    <p className="text-xs font-mono text-muted-foreground text-right leading-[1.6]">
                      {job.period}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground/60 text-right">
                      {job.location}
                    </p>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.15, ease }}
                      className="absolute right-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-background"
                    />
                  </div>

                  <motion.div
                    whileHover={{ borderColor: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
                    className="p-5 sm:p-6 lg:p-8 rounded-xl border border-border bg-card transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2 md:hidden">
                      <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono text-muted-foreground bg-muted rounded-full border border-border">
                        {job.period}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground/60">
                        {job.location}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-accent font-mono text-sm mt-0.5 mb-3">
                      {job.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <ul className="space-y-2 mb-4 lg:mb-5">
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
