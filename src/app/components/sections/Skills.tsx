import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Globe, Server, BarChart3, Terminal, Database, Cpu, PenTool } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import type { SkillGroup } from '@/types'

const skillGroups: SkillGroup[] = [
  { label: 'Programming Languages', Icon: Terminal, skills: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL', 'HTML/CSS'] },
  { label: 'Frontend', Icon: Globe, skills: ['React', 'Vite', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'React Router'] },
  { label: 'Backend & Databases', Icon: Server, skills: ['PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'REST APIs'] },
  { label: 'Data & Visualization', Icon: BarChart3, skills: ['Pandas', 'NumPy', 'Matplotlib', 'Recharts', 'Data Visualization'] },
  { label: 'Tools & Platforms', Icon: Cpu, skills: ['Git/GitHub', 'Vercel', 'VS Code', 'Linux', 'Paystack'] },
  { label: 'QA & Documentation', Icon: Database, skills: ['Manual Testing', 'Bug Tracking', 'jsPDF', 'Test Reporting'] },
  { label: 'Communication', Icon: PenTool, skills: ['Technical Writing', 'Content Creation', 'Virtual Assistance', 'Research'] },
]

export default function Skills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="03" label="Technical Skills" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-3 sm:mb-4 leading-[1.1] tracking-tight"
          >
            The toolkit.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-7 sm:mb-10 lg:mb-12 leading-relaxed text-[15px] sm:text-base"
          >
            Technologies I use to ship real products — not buzzwords.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {skillGroups.map(({ label, Icon, skills }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                onClick={() => setActive(active === label ? null : label)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(active === label ? null : label) }}}
                role="button"
                tabIndex={0}
                aria-pressed={active === label}
                className={`p-4 sm:p-5 lg:p-6 rounded-xl border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                  active === label
                    ? 'border-accent/40 bg-accent/[0.06] shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
                    : 'border-border bg-card hover:border-accent/20'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      active === label ? 'bg-accent/15' : 'bg-muted'
                    }`}
                  >
                    <Icon size={15} className={active === label ? 'text-accent' : 'text-muted-foreground'} />
                  </div>
                  <h3 className="text-sm font-display font-medium text-foreground tracking-wide leading-tight">
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <AnimatePresence>
                    {skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={active === label ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, delay: active === label ? i * 0.03 : 0 }}
                        className={`px-2.5 py-1 text-xs rounded-md transition-all duration-200 ${
                          active === label
                            ? 'bg-accent/10 text-accent border border-accent/25'
                            : 'bg-background border border-border text-muted-foreground'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
