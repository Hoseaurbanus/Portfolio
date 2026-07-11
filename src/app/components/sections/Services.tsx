import { motion } from 'motion/react'
import { Globe, BarChart3, Server, Briefcase } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionLabel } from '../shared/SectionLabel'
import type { Service } from '@/types'

const services: Service[] = [
  {
    Icon: Globe,
    title: 'Full Stack Development',
    body: 'End-to-end application development from database schema to polished user interface. React, Next.js, FastAPI, and beyond.',
    tags: ['React', 'Node.js', 'APIs', 'Databases'],
  },
  {
    Icon: BarChart3,
    title: 'Data Analytics & Visualisation',
    body: 'Transform raw data into actionable insight. From exploratory analysis to production dashboards with real-time updates.',
    tags: ['Python', 'SQL', 'Tableau', 'Dashboards'],
  },
  {
    Icon: Server,
    title: 'API Design & Integration',
    body: 'RESTful and GraphQL API design with clear contracts, versioning, documentation, and secure authentication.',
    tags: ['REST', 'GraphQL', 'OpenAPI', 'Auth'],
  },
  {
    Icon: Briefcase,
    title: 'Technical Consulting',
    body: 'Architecture review, technology selection, and engineering process recommendations for growing teams.',
    tags: ['Architecture', 'Code Review', 'Strategy'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup>
          <SectionLabel>Services</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl lg:text-[3.25rem] font-bold text-foreground mb-14 leading-[1.1]"
          >
            What I deliver.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {services.map(({ Icon, title, body, tags }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group p-8 lg:p-10 bg-background hover:bg-card transition-colors duration-300"
              >
                <Icon size={22} className="text-accent mb-6" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.75] mb-5">
                  {body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono bg-muted border border-border text-muted-foreground rounded-md"
                    >
                      {tag}
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
