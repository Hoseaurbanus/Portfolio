import { useState, useEffect, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Github, Twitter, ArrowRight, CheckCircle2, Loader2, XCircle, MessageCircle, Phone } from 'lucide-react'
import { RevealGroup } from '../shared/RevealGroup'
import { fadeUp } from '../shared/Reveal'
import { SectionNumber } from '../shared/SectionNumber'
import { sendContactEmail } from '@/lib/emailjs'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 5000)
      return () => clearTimeout(timer)
    }
    if (status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const success = await sendContactEmail(form)
    if (success) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionNumber number="08" label="Contact" />
        <RevealGroup>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            <div>
              <motion.h2
                variants={fadeUp}
                className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-foreground mb-5 lg:mb-6 leading-[1.1] tracking-tight"
              >
                Let&apos;s build something great.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-base mb-8 lg:mb-10"
              >
                Whether you have a project in mind, a role to fill, or simply
                want to connect — I read every message and respond within 24
                hours.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-3 sm:space-y-4">
                {[
                  {
                    Icon: Mail,
                    label: 'Email',
                    value: 'hoseaurbanusaudu1@gmail.com',
                    href: 'mailto:hoseaurbanusaudu1@gmail.com',
                  },
                  {
                    Icon: Phone,
                    label: 'Phone',
                    value: '+234 (0) 9030031278',
                    href: 'tel:+2349030031278',
                  },
                  {
                    Icon: MessageCircle,
                    label: 'WhatsApp',
                    value: '+234 9030031278',
                    href: 'https://wa.me/2349030031278',
                  },
                  {
                    Icon: Github,
                    label: 'GitHub',
                    value: 'github.com/Hoseaurbanus',
                    href: 'https://github.com/Hoseaurbanus',
                  },
                  {
                    Icon: Twitter,
                    label: 'Twitter / X',
                    value: '@AuduHosea38095',
                    href: 'https://twitter.com/AuduHosea38095',
                  },
                ].map(({ Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 group min-h-[44px]"
                  >
                    <div className="p-2.5 rounded-lg border border-border bg-card group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200">
                      <Icon
                        size={15}
                        className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                        {label}
                      </p>
                      <p className="text-sm text-foreground">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ borderColor: 'color-mix(in srgb, var(--accent) 50%, transparent)', boxShadow: '0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent)' }}
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200 min-h-[44px]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ borderColor: 'color-mix(in srgb, var(--accent) 50%, transparent)', boxShadow: '0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent)' }}
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200 min-h-[44px]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ borderColor: 'color-mix(in srgb, var(--accent) 50%, transparent)', boxShadow: '0 0 0 3px color-mix(in srgb, var(--accent) 10%, transparent)' }}
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200 resize-none"
                />
              </div>
              <div aria-live="polite">
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full py-3 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <Loader2 size={15} className="animate-spin" />
                        Sending...
                      </motion.div>
                    ) : status === 'success' ? (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <CheckCircle2 size={15} />
                        Sent! I&apos;ll reply soon.
                      </motion.div>
                    ) : status === 'error' ? (
                      <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <XCircle size={15} />
                        Failed. Try again.
                      </motion.div>
                    ) : (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        Send Message
                        <ArrowRight size={15} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </RevealGroup>
      </div>
    </section>
  )
}
