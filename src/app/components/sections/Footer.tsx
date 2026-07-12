import { motion } from 'motion/react'
import { Github, Twitter, MessageCircle, Download } from 'lucide-react'
import type { NavLink } from '@/types'

const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="py-8 lg:py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-bold text-foreground">HUA</p>
          <p className="text-xs text-muted-foreground font-mono mt-0.5">
            &copy; {new Date().getFullYear()} Hosea Urbanus Audu. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-mono text-muted-foreground" aria-label="Footer navigation">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {label}
            </button>
          ))}
          <a
            href="/Hosea_Urbanus_Audu_CV.pdf"
            download
            className="hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center gap-1"
          >
            <Download size={12} />
            CV
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          {[
            { Icon: Github, href: 'https://github.com/Hoseaurbanus', label: 'GitHub' },
            { Icon: Twitter, href: 'https://twitter.com/AuduHosea38095', label: 'Twitter' },
            { Icon: MessageCircle, href: 'https://wa.me/2349030031278', label: 'WhatsApp' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
