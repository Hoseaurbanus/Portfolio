import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Globe,
  Server,
  BarChart3,
  Terminal,
  Database,
  Cpu,
} from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { SkillGroup } from '@/types'

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    Icon: Terminal,
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'Bash'],
  },
  {
    label: 'Frontend',
    Icon: Globe,
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'Framer Motion'],
  },
  {
    label: 'Backend',
    Icon: Server,
    skills: ['FastAPI', 'Node.js', 'Django', 'Express.js', 'GraphQL', 'REST APIs', 'tRPC'],
  },
  {
    label: 'Data & ML',
    Icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
  },
  {
    label: 'Databases',
    Icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'SQLAlchemy'],
  },
  {
    label: 'Cloud & DevOps',
    Icon: Cpu,
    skills: ['AWS', 'Docker', 'Vercel', 'GitHub Actions', 'Linux', 'Nginx'],
  },
]

export default function Skills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Technical Skills</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1]"
          >
            The toolkit.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-14 leading-[1.75] text-[0.95rem]"
          >
            Technologies I work with daily, organized by domain. Hover a
            category to explore it.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {skillGroups.map(({ label, Icon, skills }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                onMouseEnter={() => setActive(label)}
                onMouseLeave={() => setActive(null)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-default ${
                  active === label
                    ? 'border-accent/50 bg-accent/5'
                    : 'border-border bg-card hover:border-accent/25'
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      active === label ? 'bg-accent/20' : 'bg-muted'
                    }`}
                  >
                    <Icon
                      size={15}
                      className={
                        active === label ? 'text-accent' : 'text-muted-foreground'
                      }
                    />
                  </div>
                  <h3 className="text-sm font-mono font-medium text-foreground tracking-wide">
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all duration-200 ${
                        active === label
                          ? 'bg-accent/10 text-accent border border-accent/25'
                          : 'bg-background border border-border text-muted-foreground'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
