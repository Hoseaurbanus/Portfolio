import { motion } from 'motion/react'
import {
  Code2,
  Layers,
  Zap,
  Shield,
  Server,
  BookOpen,
} from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'

const principles = [
  {
    Icon: Code2,
    title: 'Problem First',
    body: 'Before writing a line of code, I understand the problem fully. The best code is often code that never needed to be written.',
  },
  {
    Icon: Layers,
    title: 'Clean Architecture',
    body: 'Systems that survive growth are designed with intention. Clear separation of concerns, explicit dependencies, bounded contexts.',
  },
  {
    Icon: Zap,
    title: 'Performance by Default',
    body: 'Speed is a feature. Performance is a design constraint woven into every decision, not an afterthought to be optimized later.',
  },
  {
    Icon: Shield,
    title: 'Accessibility',
    body: 'Software that excludes users has failed its purpose. Accessibility is a fundamental requirement, not a finishing touch.',
  },
  {
    Icon: Server,
    title: 'Scalability',
    body: 'Design for 10x from the start. Systems that cannot grow impose architectural debt that compounds exponentially.',
  },
  {
    Icon: BookOpen,
    title: 'Continuous Learning',
    body: 'Technology evolves. Curiosity is a methodology. I invest in fundamentals that outlast any specific technology or framework.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Engineering Philosophy</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-4 leading-[1.1] max-w-2xl"
          >
            How I think about building software.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-10 lg:mb-14 leading-[1.75] text-base"
          >
            These are not aspirations. They are constraints I impose on every
            project I touch — from architecture to code review to deployment.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {principles.map(({ Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="group p-6 sm:p-8 bg-background hover:bg-card transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ duration: 0.3, ease }}
                  className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300"
                >
                  <Icon size={16} className="text-accent" />
                </motion.div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.75]">
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
