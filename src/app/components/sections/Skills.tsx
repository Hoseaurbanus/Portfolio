import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const ease = [0.22, 1, 0.36, 1] as const
import {
  Globe,
  Server,
  BarChart3,
  Terminal,
  Database,
  Cpu,
  PenTool,
} from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { SkillGroup } from '@/types'

const skillGroups: SkillGroup[] = [
  {
    label: 'Programming Languages',
    Icon: Terminal,
    skills: ['Python', 'Java', 'C++', 'SQL', 'Bash', 'HTML/CSS'],
  },
  {
    label: 'Data Analysis',
    Icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Modeling', 'Data Visualization'],
  },
  {
    label: 'Frontend',
    Icon: Globe,
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5'],
  },
  {
    label: 'Backend',
    Icon: Server,
    skills: ['Node.js', 'REST APIs', 'Express.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Tools & DevOps',
    Icon: Cpu,
    skills: ['Git/GitHub', 'VS Code', 'Linux', 'Agile/Scrum', 'CI/CD'],
  },
  {
    label: 'QA & Testing',
    Icon: Database,
    skills: ['Manual Testing', 'Bug Tracking', 'Test Reporting', 'Documentation'],
  },
  {
    label: 'Content & Communication',
    Icon: PenTool,
    skills: ['Technical Writing', 'Physics Blogging', 'Content Creation', 'Virtual Assistance'],
  },
]

export default function Skills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Technical Skills</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1]"
          >
            The toolkit.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-10 lg:mb-14 leading-[1.75] text-base"
          >
            Technologies I work with daily, organized by domain.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skillGroups.map(({ label, Icon, skills }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActive(active === label ? null : label)}
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  active === label
                    ? 'border-accent/50 bg-accent/5 shadow-lg shadow-accent/5'
                    : 'border-border bg-card hover:border-accent/25'
                }`}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <motion.div
                    animate={active === label ? { rotate: 12, scale: 1.1 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease }}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      active === label ? 'bg-accent/20' : 'bg-muted'
                    }`}
                  >
                    <Icon
                      size={15}
                      className={active === label ? 'text-accent' : 'text-muted-foreground'}
                    />
                  </motion.div>
                  <h3 className="text-sm font-mono font-medium text-foreground tracking-wide">
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
