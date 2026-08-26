import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    index: '01',
    name: 'SMUG Flex Multi-School',
    tagline: 'Multi-school management platform for SMUGFlex Venture',
    overview: 'A full-stack multi-school management system serving educational institutions in Lagos, Nigeria. Built with role-based access control for administrators, teachers, and students.',
    problem: 'Schools in Nigeria needed a centralized platform to manage multiple institutions, student records, and administrative workflows efficiently.',
    solution: 'Developed a multi-school management platform with role-based dashboards (Admin, Teacher, Student), real-time notifications, and reporting features.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'jsPDF'],
    outcome: 'Live production system managing multiple schools in Lagos, Nigeria. Trusted by SMUGFlex Venture for their multi-school operations.',
    image: '/smugflex.jpg',
    github: 'https://github.com/Hoseaurbanus',
    demo: 'https://smug-flex-multi-school-o3to.vercel.app/',
  },
  {
    id: 2,
    index: '02',
    name: 'Graceland Royal Academy',
    tagline: 'Full-stack school management ERP with CBT and payment processing',
    overview: 'Comprehensive school management system serving 5 user roles (Admin, Teacher, Accountant, Parent, Student). Features include student lifecycle management, academic scoring with PDF report cards, fee processing via Paystack, CBT exam engine, and real-time SSE notifications.',
    problem: 'The academy needed a centralized digital platform to replace manual operations across enrollment, grading, fee collection, attendance, and parent communication for a K-12 institution in Gombe State, Nigeria.',
    solution: 'Built a custom PHP MVC backend with JWT auth, MySQL database (65 tables), and a React/TypeScript frontend with Radix UI. Implemented auto-migration, SSE real-time updates, Paystack payments, jsPDF report cards with QR codes, and an anti-cheating CBT exam engine.',
    tech: ['React', 'TypeScript', 'Vite', 'Radix UI', 'Tailwind CSS', 'jsPDF'],
    outcome: 'Live at gracelandroyalacademy.com.ng — managing all school operations including enrollment, grading, payments, exams, and parent portal.',
    image: '/graceland.jpg',
    github: 'https://github.com/Hoseaurbanus/graceland-academy-website',
    demo: 'https://gracelandroyalacademy.com.ng/',
  },
  {
    id: 3,
    index: '03',
    name: 'PAJUMA School Portal',
    tagline: 'Full-stack school management ERP for ECWA PAJUMA Christian Academy',
    overview: 'Comprehensive ERP-style platform managing student enrollment, academic scoring, fee payments, CBT exams, attendance, and parent communication for a K-12 school in Gombe State, Nigeria.',
    problem: 'The school needed a centralized digital system to replace manual record-keeping across 65 database tables, serving 5 user roles (Admin, Teacher, Accountant, Parent, Student).',
    solution: 'Built a custom PHP MVC backend with JWT auth and a React/TypeScript frontend. Features include auto-migration, SSE real-time notifications, Paystack payments, PDF report cards with QR codes, and an anti-cheating CBT exam engine.',
    tech: ['React', 'TypeScript', 'Vite', 'Radix UI', 'Recharts', 'Paystack'],
    outcome: 'Live production system managing all school operations — enrollment, grading, payments, exams, and parent portal — for ECWA PAJUMA Christian Academy.',
    image: '/PAJUMA.jpg',
    github: 'https://github.com/Hoseaurbanus/PAJUMA',
    demo: 'https://pajuma-m6gj.vercel.app/',
  },
  {
    id: 4,
    index: '04',
    name: 'CampusFund',
    tagline: 'Campus fundraising and donation management system',
    overview: 'A full-stack platform connecting students in financial hardship with donors. Manages the entire lifecycle from assistance request submission, through administrative approval, to donor-funded disbursement.',
    problem: 'Students at Graceland Royal Academy needed a way to request financial assistance digitally, and donors needed a way to contribute and track their impact.',
    solution: 'Built a custom PHP micro-framework backend with JWT auth and a React/TypeScript frontend. Features include Paystack payments, manual bank transfer verification, in-app notifications, analytics dashboards, and role-based access for Students, Donors, and Admins.',
    tech: ['React', 'TypeScript', 'Vite', 'PHP', 'Tailwind CSS', 'Paystack'],
    outcome: 'Live production system at anns.com.gracelandroyalacademy.com.ng, enabling transparent fundraising and disbursement for students in need.',
    image: '/FUND.jpg',
    github: 'https://github.com/Hoseaurbanus/FUND-RAISING',
    demo: 'https://fund-raising-git-main-hosea-urbanus-audus-projects.vercel.app/',
  },
  {
    id: 5,
    index: '05',
    name: 'SMUGFLEX POS',
    tagline: 'Enterprise point of sale system with full inventory and reporting',
    overview: 'A complete POS system with a React frontend and standalone PHP REST API backend. 35 database tables, 103+ API endpoints, 22 controllers, 8 user roles with 55+ permissions, and a custom JWT authentication system.',
    problem: 'SmugFlex Ventures needed a full point of sale system to manage sales, inventory, purchases, customers, suppliers, and multi-branch operations — without paying for expensive off-the-shelf software.',
    solution: 'Built a standalone PHP 8.2 REST API (no Composer, no framework) with a custom regex router and JWT implementation. React frontend with Bootstrap 5.3, dark glassmorphism theme, and full mobile responsiveness. MySQL database with triggers, foreign keys, and seed data.',
    tech: ['React', 'JavaScript', 'Vite', 'PHP', 'MySQL', 'Bootstrap'],
    outcome: 'Live POS system at smugflex-pos-mrfb.vercel.app managing sales, inventory, purchases, expenses, and reporting for SmugFlex Ventures.',
    image: '/pos.jpg',
    github: 'https://github.com/Hoseaurbanus/SMUGFLEX-POS',
    demo: 'https://smugflex-pos-mrfb.vercel.app/login',
  },
  {
    id: 6,
    index: '06',
    name: 'SCPHD',
    tagline: 'NGO management platform for Springfield Center for Peace and Humanitarian Development',
    overview: 'A full-stack NGO management platform with a React 19 frontend and PHP CodeIgniter 4 backend. Features role-based dashboards for Super Admin, Administrator, Program Manager, Volunteer Manager, Finance Officer, Editor, Donor, Volunteer, Member, and Viewer roles.',
    problem: 'An NGO needed a comprehensive digital platform to manage donations, volunteer coordination, programs, events, and reporting — replacing fragmented manual processes with a unified system.',
    solution: 'Built a React 19 + TypeScript frontend with Vite, Tailwind CSS v4, Framer Motion animations, Recharts, and React Hook Form with Yup validation. Backend powered by PHP CodeIgniter 4 with MySQL, JWT authentication, and a RESTful API with rate limiting and CORS filters.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'PHP', 'MySQL'],
    outcome: 'Live at scphd.vercel.app — managing donations, volunteer coordination, programs, events, and multi-role dashboards for the Springfield Center for Peace and Humanitarian Development.',
    image: '/NGO.jpg',
    github: 'https://github.com/Hoseaurbanus/SCPHD',
    demo: 'https://scphd.vercel.app/',
  },
]

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="02" label="Featured Projects" />
        <RevealGroup>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[1.75rem] sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-3 sm:mb-4 leading-[1.1] tracking-tight"
          >
            Work that speaks.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-xl mb-7 sm:mb-10 lg:mb-12 leading-relaxed text-[15px] sm:text-base"
          >
            Real projects I built and deployed. Tap to see details, or open the live demo.
          </motion.p>

          <div className="space-y-3 sm:space-y-4">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                variants={fadeUp}
                className={`group rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${expanded === p.id ? 'border-accent/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'border-border hover:border-accent/15 hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'}`}
              >
                <div className="grid lg:grid-cols-[380px_1fr] gap-0">
                  <div className="relative h-44 xs:h-48 sm:h-52 lg:h-full lg:min-h-[220px] overflow-hidden bg-[#0f1215] shrink-0">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={380}
                        height={220}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 via-accent/5 to-card flex items-center justify-center">
                        <span className="text-3xl font-display font-bold text-accent/20">{p.index}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/0 lg:to-card hidden lg:block pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:hidden pointer-events-none" />
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-3 mb-2.5 sm:mb-3">
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono tracking-[0.18em] sm:tracking-[0.2em] uppercase text-accent">
                          Project {p.index}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground mt-1 leading-tight">
                          {p.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                        aria-expanded={expanded === p.id}
                        aria-label={expanded === p.id ? 'Collapse details' : 'Expand details'}
                        className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-background flex items-center justify-center hover:border-accent/30 hover:bg-accent/10 transition-colors duration-200 mt-1"
                      >
                        <motion.span animate={{ rotate: expanded === p.id ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight size={16} className="text-muted-foreground" />
                        </motion.span>
                      </button>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {p.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-mono bg-background border border-border text-muted-foreground rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 5 && (
                        <span className="px-2 py-1 text-[10px] font-mono text-muted-foreground">+{p.tech.length - 5}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-accent/10 border border-accent/20 text-accent text-xs font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 min-h-[40px]"
                      >
                        {expanded === p.id ? 'Hide details' : 'View details'}
                        <ChevronRight size={13} className={expanded === p.id ? 'rotate-90' : ''} />
                      </button>
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200 min-h-[40px]"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-border"
                    >
                      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.18em] mb-2.5">
                            Overview
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {p.overview}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.18em] mb-2.5">
                            Problem → Solution
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {p.problem}
                          </p>
                          <p className="text-sm text-foreground/90 leading-relaxed">
                            {p.solution}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.18em] mb-2.5">
                            Outcome
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {p.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
