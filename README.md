# Nazar Yankevych — Portfolio

[![CI](https://github.com/yankevych0210/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yankevych0210/portfolio/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Personal portfolio of **Nazar Yankevych**, Front-End Developer (React · Next.js · TypeScript · Shopify).

**Live:** https://portfolio-yankevych.vercel.app · **CV:** [/resume](https://portfolio-yankevych.vercel.app/en/resume)

## Features

- **28 case studies** grouped as commercial work, products, test assignments and learning projects. Each one has a live demo, source link, desktop and mobile screenshots, and notes on what was built and how.
- **Experience timeline, skills and education** taken from the current CV.
- **Three languages:** English, Ukrainian and Russian (`/en`, `/ua`, `/ru`). Both the UI and the case-study content are translated.
- **Light and dark theme**, responsive down to 320 px, keyboard-accessible, respects `prefers-reduced-motion`.
- **SEO:**
  - per-page metadata, canonical and hreflang links, a sitemap with alternates
  - JSON-LD (`Person`, `CreativeWork`) and a localized dynamic OG image
- **Performance:** every page is pre-rendered at build time, and images are served as WebP/AVIF through `next/image`.
- **Security headers:** HSTS, `X-Frame-Options`, `nosniff`, Referrer-Policy and Permissions-Policy.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 15 (App Router, SSG), React 19, TypeScript (strict) |
| i18n | next-intl (locale segment + middleware) |
| Styling | Tailwind CSS 4, shadcn/ui primitives on Radix, design tokens as CSS variables |
| Motion | Framer Motion |
| Media | `next/image`, Fancybox lightbox |
| Quality | ESLint (`next/core-web-vitals`), `tsc --noEmit`, GitHub Actions CI |

## Getting started

Requires Node.js 20+ (see `.nvmrc`).

```bash
npm ci
npm run dev         # http://localhost:3000
npm run typecheck
npm run lint
npm run build       # production build, all pages pre-rendered
npm start
```

| Env variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://portfolio-yankevych.vercel.app` | Absolute URL for metadata, sitemap and JSON-LD |

## Architecture

```
src/
├── app/                          # Routing only; pages are thin and compose components
│   ├── [locale]/
│   │   ├── layout.tsx            # <html lang>, fonts, metadata, header/footer
│   │   ├── page.tsx              # home: composes sections/*
│   │   ├── projects/[slug]/      # case-study page
│   │   ├── resume/               # CV viewer + download
│   │   └── not-found.tsx, loading.tsx
│   ├── api/og/route.tsx          # dynamic Open Graph image (edge)
│   ├── sitemap.ts, robots.ts
│   └── globals.css               # theme tokens (light/dark) + utilities
├── components/
│   ├── layout/                   # header, footer, logo, theme & language switchers, providers
│   ├── sections/                 # home sections: hero, about, projects, experience, skills, education, contact
│   ├── project/                  # project card, filterable grid, case header/details/gallery/nav
│   ├── shared/                   # Section + SectionHeading, JsonLd, CopyEmail
│   └── ui/                       # shadcn/ui primitives
├── config/site.ts                # site URL, name, contact links
├── data/                         # all content, typed and localized
│   ├── projects/                 # types, helpers, one file per category, index
│   ├── experience.ts, skills.ts, education.ts, profile.ts
├── i18n/                         # locales, Localized<T> type, next-intl request config
├── messages/                     # UI strings: en.json, ua.json, ru.json
├── lib/                          # cn(), SEO helpers
└── middleware.ts                 # locale routing ("/" → "/en")
public/
├── projects/<slug>/              # desktop-N.webp, mobile.webp
├── profile.webp
└── resume.pdf
```

**Principles**

- **Content is data.** Pages never hard-code biography or project text. Everything lives in `src/data/` as typed `Localized<T>` objects, and UI strings live in `src/messages/`.
- **Server by default.** Only interactive pieces are client components: the header, the switchers, the project filter, the gallery and copy-to-clipboard.
- **One source of truth.** The project list drives the home grid, the case pages, `generateStaticParams` and the sitemap.

## Adding a project

1. Save screenshots to `public/projects/<slug>/`:
   - desktop: `desktop-1.webp`, `desktop-2.webp`, … at 1600 px wide
   - mobile: `mobile.webp` at 780 px wide (optional)
2. Add an entry to the right file in `src/data/projects/`, for example `assignments.ts`. Use `...shots("<slug>", <desktop count>)` for the images.
3. Done: the grid, the case page, static params and the sitemap pick it up automatically.

## Updating the CV

Replace `public/resume.pdf`, then update `src/data/experience.ts`, `skills.ts` and `education.ts` so the site matches.

## License

The source code is released under the [MIT License](LICENSE). The photo, the CV and the biographical and case-study texts are **not** covered by it. Screenshots of third-party sites belong to their owners. See [LICENSE](LICENSE) for details.
