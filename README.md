# Hosea Urbanus Audu — Portfolio

> Full Stack Developer & Data Analyst — Physics graduate from Gombe State University (Best Graduating Student).

A premium dark-themed personal portfolio built with React, TypeScript, Tailwind CSS 4, and Framer Motion. Features a custom design system, scroll-driven animations, a live GitHub contribution heatmap, and a working contact form.

**Live:** [hosea-u-audu.vercel.app](https://hosea-u-audu.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Motion (Framer Motion v12) |
| Icons | Lucide React |
| Contact Form | EmailJS |
| Hosting | Vercel |

## Design System

- **Dark-first** with warm amber accent (`#e8a838`)
- **Fonts:** Space Grotesk (display), DM Sans (body), JetBrains Mono (mono)
- **CSS variables** mapped to Tailwind v4 `@theme inline` tokens
- Scroll-reveal animations with `prefers-reduced-motion` support

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [EmailJS](https://www.emailjs.com/).

## Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── main.tsx                              # Entry point
├── app/
│   ├── App.tsx                           # Root component & section composition
│   └── components/
│       ├── layout/
│       │   └── Nav.tsx                   # Responsive navbar with scroll tracking
│       ├── sections/
│       │   ├── Hero.tsx                  # Hero with rotating roles & parallax
│       │   ├── About.tsx                 # Bio, stat cards, animated counters
│       │   ├── Projects.tsx              # Expandable project cards
│       │   ├── Skills.tsx                # Interactive skill groups
│       │   ├── Services.tsx              # Service offerings
│       │   ├── Experience.tsx            # Work timeline
│       │   ├── Education.tsx             # Academic background
│       │   ├── GitHubActivity.tsx        # Live contribution heatmap
│       │   ├── Contact.tsx               # Contact form + social links
│       │   ├── Philosophy.tsx            # Engineering principles
│       │   └── Footer.tsx                # Footer with nav & socials
│       └── shared/
│           ├── AnimatedCounter.tsx       # Number counter animation
│           ├── BackToTop.tsx             # Scroll-to-top button
│           ├── Preloader.tsx             # Loading screen with monogram
│           ├── Reveal.tsx                # Scroll-reveal animation variants
│           ├── RevealGroup.tsx           # Staggered group reveal wrapper
│           └── SectionNumber.tsx         # Section header (number + label)
├── lib/
│   ├── constants.ts                      # Shared easing curves
│   ├── github.ts                         # GitHub API integration
│   └── emailjs.ts                        # EmailJS contact form
├── types/
│   └── index.ts                          # TypeScript interfaces
└── styles/
    ├── index.css                         # Style entry point
    ├── fonts.css                         # Google Fonts import
    ├── tailwind.css                      # Tailwind directives
    └── theme.css                         # Design tokens & CSS variables
```

## Sections

| # | Section | Description |
|---|---------|-------------|
| — | **Hero** | Name, rotating roles, portrait, social links, CV download |
| 01 | **About** | Bio, stat cards (projects, experience, technologies) |
| 02 | **Projects** | 4 production projects with expandable details |
| 03 | **Skills** | 7 skill groups with interactive highlighting |
| 04 | **Services** | Full stack dev, data analytics, API design, consulting |
| 05 | **Experience** | Sterling One Foundation + Freelance VA |
| 06 | **Education** | B.Sc. Physics (Best Graduating Student) + Diploma |
| 07 | **GitHub** | Live contribution heatmap + stats |
| 08 | **Contact** | Form + email, phone, WhatsApp, GitHub, Twitter |
| 09 | **Philosophy** | 6 engineering principles |

## Featured Projects

| Project | Description | Live |
|---------|-------------|------|
| **SMUG Flex Multi-School** | Multi-school management platform | [Demo](https://smug-flex-multi-school-o3to.vercel.app/) |
| **Graceland Royal Academy** | School management ERP with CBT & payments | [Demo](https://gracelandroyalacademy.com.ng/) |
| **PAJUMA School Portal** | Full ERP with Radix UI, Recharts, Paystack | [Demo](https://pajuma-m6gj.vercel.app/) |
| **CampusFund** | Campus fundraising & donation platform | [Demo](https://fund-raising-git-main-hosea-urbanus-audus-projects.vercel.app/) |

## Deployment

Optimized for [Vercel](https://vercel.com):

- SPA routing configured in `vercel.json`
- Build output: `dist/`
- No server-side code required

## License

MIT
