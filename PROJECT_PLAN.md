# Project Plan — Erwin Lopez Portfolio

## Purpose

Create a clean, intentional portfolio that helps recruiters quickly understand Erwin Lopez’s role, experience, technical range, and strongest work.

## Audience

- Recruiters and hiring managers screening software engineers
- Engineering leads evaluating fullstack experience
- Potential collaborators looking for practical web application experience

## Core positioning

- Primary role: Fullstack Developer
- Supporting role: Software Engineer
- Positioning: a fullstack builder who turns complex product work into reliable web experiences
- Location: Quezon City, Philippines 1125
- Contact: whinlopez06@gmail.com and +63 917 676 5499

## Content structure

1. Hero — role, positioning statement, availability, technical range, and a measurable Designly contribution
2. Experience — companies, roles, dates, responsibilities, and links to related projects
3. Selected work — four highlighted projects with dates, context, outcomes, and technologies
4. More experience — six expandable project summaries integrated into the selected work section
5. About — background, education, languages, and capabilities
6. Contact — direct email, phone, LinkedIn, GitHub, location, and a clear call to action

## Design direction

- Typography-led Swiss-inspired layout
- Soft white page background, charcoal text, dark feature panel, and vivid orange accent
- Epilogue as the single bundled typeface
- Strong hierarchy with readable supporting text
- Aligned grids and restrained dividers to create a smooth visual flow
- Responsive layouts for desktop, tablet, and phone
- Minimal motion with reduced-motion support

## Interaction principles

- Make the first screen understandable without scrolling
- Keep the main role and value proposition visible and readable
- Let recruiters scan companies, dates, projects, and technologies quickly
- Use expandable project summaries to preserve context without creating a long case-study interface
- Keep all contact actions direct and accessible

## Technical constraints

- React + TypeScript + Vite
- React Router for homepage anchors and legacy `/work/:slug` redirects
- Static-host compatible deployment
- No backend contact form, analytics, or resume download
- Content remains based on the supplied resume; measurable claims are framed as contributions

## Source of truth

- `src/main.tsx` — page structure and copy
- `src/data.ts` — projects, employers, dates, and relationships
- `src/style.css` — design tokens, layout, responsive behavior, and motion
- `README.md` — setup, deployment, and project overview
- `VERIFICATION.md` — validation history and browser checks

## AI implementation guidance

When extending this project, preserve the role-first hierarchy, resume-grounded content, high-contrast palette, responsive behavior, accessible controls, and direct recruiter flow. Prefer improving an existing section or interaction before adding a new page or decorative feature.
