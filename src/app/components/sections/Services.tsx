import { motion } from 'motion/react'
import { Globe, BarChart3, Server, FileText } from 'lucide-react'
import { ease } from '@/lib/constants'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import type { Service } from '@/types'

const services: Service[] = [
  { Icon: Globe, title: 'School Management Systems', body: 'Full-stack web applications for schools — student records, grading, fee payments, CBT exams, and parent portals. Built with React, PHP, MySQL, and Paystack.', tags: ['React', 'PHP', 'MySQL', 'Paystack'] },
  { Icon: BarChart3, title: 'Data Analysis & Dashboards', body: 'Python-based data analysis with Pandas and NumPy. Dashboards for tracking KPIs, financial data, and operational metrics.', tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib'] },
  { Icon: Server, title: 'Web Application Development', body: 'Frontend and backend development for business tools, internal systems, and landing pages. React, TypeScript, Tailwind CSS.', tags: ['React', 'TypeScript', 'Tailwind CSS'] },
  { Icon: FileText, title: 'Virtual Assistance & Admin Support', body: 'Remote administrative support — email management, research, data entry, social media scheduling, and document preparation.', tags: ['Google Workspace', 'Research', 'Data Entry'] },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="04" label="Services" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-10 lg:mb-14 leading-[1.1] tracking-tight"
          >
            What I can help with.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-3">
            {services.map(({ Icon, title, body, tags }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="group p-6 sm:p-8 lg:p-10 bg-card border border-border rounded-2xl hover:border-accent/25 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mb-5 lg:mb-6"
                >
                  <Icon size={22} className="text-accent" />
                </motion.div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 lg:mb-5">
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
