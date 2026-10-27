# Erwin Lopez — Portfolio

React + TypeScript + Vite portfolio with a recruiter-focused hero, four concise project highlights, and resume-based work history.

The project plan and design context are documented in [PROJECT_PLAN.md](PROJECT_PLAN.md). Read it alongside this README before making substantial changes so the portfolio’s content hierarchy, visual direction, and recruiter-focused purpose remain consistent.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Content

Edit `src/data.ts` for projects, employer descriptions, dates, and project relationships. Introductory copy and contact details are in `src/main.tsx`. Design tokens and responsive behavior are in `src/style.css`.

Content comes from the supplied resume. The 40% Designly backlog reduction is described as a contribution, not sole ownership. Company experience precedes one combined project section with four highlights and six expandable summaries. The contact section includes email and the requested click-to-call cellphone number. The website has no resume download, postal code, analytics, or backend contact form. Former `/work/:slug` case-study URLs redirect to the corresponding project highlight on the homepage.

## Deploy

Publish the output `dist` folder to a static host. All requests that do not match a file must fall back to `index.html` for React Router deep links. `public/_redirects` provides this rule for Netlify and compatible hosts. On Vercel add a rewrite from `/(.*)` to `/index.html`. For other hosts configure the equivalent SPA fallback; plain GitHub Pages does not provide one automatically. This project is prepared for a domain root.

The Epilogue font is bundled locally; no remote font request is required. Projects show context, contributions, and technology directly, without separate case-study pages.

## Design references

The refreshed design applies a Swiss direction from `frontend-design`: soft white, charcoal, vivid orange, one sans-serif family, strong type hierarchy, and aligned project rows. `ui-ux-pro-max` informs contrast, accessible controls, responsive layouts, and reduced motion. The user's request for a simpler, more prominent hero takes precedence over photography and elaborate motion recommendations.

Recent references researched for the palette and typography-led direction:
- Lovably, One Page Love (June 2026): https://onepagelove.com/lovably
- New Material, One Page Love (October 2026): https://onepagelove.com/new-material

These inform the design direction; there is no single universal “latest” portfolio palette. Subtle dividers intentionally support the aligned project summaries and disclosure controls.
