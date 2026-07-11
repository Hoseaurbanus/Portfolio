import { Github, Linkedin, Twitter } from 'lucide-react'
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
    <footer className="py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm font-bold text-foreground">HUA</p>
          <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
            &copy; {new Date().getFullYear()} Hosea Urbanus Audu. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-mono text-muted-foreground" aria-label="Footer navigation">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="hover:text-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {[
            { Icon: Github, href: 'https://github.com/hoseaaudu', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/hoseaaudu', label: 'LinkedIn' },
            { Icon: Twitter, href: 'https://twitter.com/hoseaaudu', label: 'Twitter' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
