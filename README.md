# Hosea Urbanus Audu — Portfolio

A premium personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion (via `motion`)
- **Icons:** Lucide React
- **Contact Form:** EmailJS

## Getting Started

```bash
npm install
npm run dev
```

## Contact Form Setup

Create a `.env` file in the project root with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [EmailJS](https://www.emailjs.com/).

## Project Structure

```
src/
├── main.tsx                          # Entry point
├── app/
│   ├── App.tsx                       # Root component
│   └── components/
│       ├── layout/
│       │   └── Nav.tsx               # Navigation bar
│       ├── sections/
│       │   ├── Hero.tsx              # Hero section
│       │   ├── About.tsx             # About section
│       │   ├── Philosophy.tsx        # Engineering philosophy
│       │   ├── Projects.tsx          # Featured projects
│       │   ├── Skills.tsx            # Technical skills
│       │   ├── Services.tsx          # Services offered
│       │   ├── Experience.tsx        # Work experience
│       │   ├── Education.tsx         # Education & certifications
│       │   ├── GitHubActivity.tsx    # GitHub contribution heatmap
│       │   ├── Testimonials.tsx      # Testimonials
│       │   ├── Contact.tsx           # Contact form
│       │   └── Footer.tsx            # Footer
│       └── shared/
│           ├── Reveal.tsx            # Scroll animation wrapper
│           ├── RevealGroup.tsx       # Stagger animation wrapper
│           └── SectionLabel.tsx      # Section label component
├── lib/
│   ├── cn.ts                         # Tailwind class merging utility
│   ├── github.ts                     # GitHub API integration
│   └── emailjs.ts                    # EmailJS contact form
├── types/
│   └── index.ts                      # TypeScript interfaces
└── styles/
    ├── index.css                     # Style entry point
    ├── fonts.css                     # Google Fonts import
    ├── tailwind.css                  # Tailwind configuration
    └── theme.css                     # Design tokens & theme
```

## Build

```bash
npm run build
```

Output will be in the `dist/` directory.
