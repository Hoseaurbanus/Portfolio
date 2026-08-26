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
    <section id="services" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="04" label="Services" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-7 sm:mb-10 lg:mb-12 leading-[1.1] tracking-tight"
          >
            What I can help with.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {services.map(({ Icon, title, body, tags }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease }}
                className="group p-5 sm:p-6 lg:p-8 bg-card border border-border rounded-2xl hover:border-accent/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-foreground mb-2.5 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono bg-muted border border-border text-muted-foreground rounded-md"
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
