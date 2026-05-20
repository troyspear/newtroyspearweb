# Iteration 1 — Troy SPEAR RoboSub Website

## Tech Stack
- Next.js 16.2.6 (App Router) + TypeScript
- Tailwind CSS v4 (theme configured via `@theme inline` in globals.css)
- Framer Motion (scroll animations, page transitions)
- React Three Fiber + @react-three/drei (3D submarine viewer)
- @splinetool/react-spline (3D background animation)
- Fuse.js (client-side fuzzy search)
- lucide-react (icons)

## Design Language
- Deep ocean color theme: navy backgrounds (#010b12 → #0a6189), cyan/teal accents (#00e5ff, #1de9b6)
- Glass morphism cards: `bg-white/5 backdrop-blur-md border-white/10`
- Fonts: Inter (body via next/font), Space Grotesk (headings via next/font)
- Troy SPEAR branding kept lowkey — small helmet icon in navbar, full logo in footer only

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              — Root layout: ClientShell wrapper, fonts, metadata
│   ├── page.tsx                — Home page
│   ├── globals.css             — Tailwind v4 theme, custom keyframes, scrollbar styles
│   ├── about/page.tsx          — Team page
│   ├── vehicle/page.tsx        — Vehicle page with 3D viewer
│   ├── documentation/
│   │   ├── page.tsx            — Blog listing with category filter
│   │   └── [slug]/page.tsx     — Individual blog post
│   ├── sponsors/page.tsx       — Tiered sponsor display
│   ├── gallery/page.tsx        — Photo gallery with filters + lightbox
│   └── contact/page.tsx        — Contact form + info
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          — Fixed top nav, transparent→solid on scroll
│   │   ├── Footer.tsx          — Full logo, quick links, social links
│   │   ├── MobileMenu.tsx      — Slide-down mobile nav (framer-motion)
│   │   ├── SearchModal.tsx     — Cmd+K search with Fuse.js
│   │   └── ClientShell.tsx     — Client wrapper for Navbar + Footer + search state
│   ├── home/
│   │   ├── SplineBackground.tsx      — Spline 3D scene with gradient overlay
│   │   ├── SplineBackgroundLoader.tsx — Client-side dynamic import wrapper
│   │   ├── HeroSection.tsx           — Hero text + CTA buttons
│   │   ├── QuickLinks.tsx            — 4-card grid (Vehicle, Docs, Gallery, Sponsors)
│   │   └── HighlightsCarousel.tsx    — 3 recent update cards
│   ├── vehicle/
│   │   ├── SubmarineViewer.tsx       — React Three Fiber canvas with OrbitControls
│   │   ├── SubmarineViewerLoader.tsx — Client-side dynamic import wrapper
│   │   └── SpecsTable.tsx            — Two-column specs display
│   ├── team/
│   │   ├── MemberCard.tsx      — Individual member card
│   │   └── TeamGrid.tsx        — Member grid + sub-team descriptions
│   ├── documentation/
│   │   ├── BlogCard.tsx        — Blog post preview card
│   │   └── CategoryFilter.tsx  — Filter buttons (Design/Testing/Competition/Build)
│   ├── sponsors/               — (inline in page)
│   ├── gallery/                — (inline in page)
│   └── ui/
│       ├── AnimatedSection.tsx — Scroll-triggered fade-in-up (framer-motion)
│       ├── SectionHeading.tsx  — Title + subtitle + gradient underline
│       └── Card.tsx            — Glass morphism card with hover effects
├── lib/
│   ├── utils.ts               — cn() helper (clsx + tailwind-merge)
│   └── data/
│       ├── team-members.ts    — 12 placeholder members + 4 sub-team descriptions
│       ├── sponsors.ts        — 8 placeholder sponsors (platinum/gold/silver/bronze)
│       ├── gallery-items.ts   — 12 placeholder gallery items with categories + years
│       ├── blog-posts.ts      — 5 detailed blog posts with full markdown content
│       └── vehicle-specs.ts   — 14 vehicle specs + 4 subsystem descriptions
└── hooks/                     — (empty, reserved for future)

public/
├── images/
│   ├── logo/
│   │   ├── troyspear.png      — Spartan helmet icon
│   │   └── troyspearfull.png  — Full logo with text
│   ├── vehicle/               — Placeholder directory
│   ├── team/                  — Placeholder directory
│   ├── gallery/               — Placeholder directory
│   └── sponsors/              — Placeholder directory
└── models/                    — Placeholder directory for .glb files
```

## Pages Built

### 1. Home (`/`)
- Full-viewport Spline 3D background (loads via dynamic import, ssr: false)
- Animated bubble fallback while Spline loads
- Gradient overlay for text readability
- Hero: "Engineering the Deep" headline, subtitle, two CTA buttons
- Quick-access card grid linking to Vehicle, Documentation, Gallery, Sponsors
- Latest updates section with 3 highlight cards
- Scroll indicator at bottom of hero

### 2. Team (`/about`)
- Team introduction paragraphs
- 12-member grid with placeholder avatar icons
- 4 sub-team description cards (Mechanical, Electrical, Software, Business)
- "Get Involved" CTA section

### 3. Vehicle (`/vehicle`)
- Interactive 3D submarine viewer (React Three Fiber)
  - Placeholder submarine model built from primitives (hull, conning tower, thrusters)
  - OrbitControls: drag to rotate, scroll to zoom, auto-rotate enabled
  - Night environment map for reflections
  - Cyan point light for underwater ambiance
- Vehicle specs table (14 entries)
- Subsystem breakdown (Propulsion, Vision, Controls, Hull & Frame)

### 4. Documentation (`/documentation`)
- Category filter bar (All / Design / Testing / Competition / Build Progress)
- 5 blog post cards with date, category tag, title, summary
- Links to individual post pages

### 5. Blog Posts (`/documentation/[slug]`)
- 5 pre-written posts with substantial content:
  - Hull Design v2 (design decisions, CFD results)
  - Pool Test March 2025 (test matrix with pass/fail table)
  - Electrical System Architecture (PCBs, sensors, power)
  - Building Our Autonomy Stack (ROS 2, YOLOv8, EKF, simulation)
  - Competition Preparation (strategy, checklist, lessons learned)
- Previous/next navigation
- Renders headings, lists, and tables from markdown-like content

### 6. Sponsors (`/sponsors`)
- 4-tier display: Platinum (1), Gold (2), Silver (2), Bronze (3)
- Responsive grid sizing per tier
- "Become a Sponsor" CTA card with contact link

### 7. Gallery (`/gallery`)
- Category filter (Competition / Practice / Build / Team)
- Year filter (2025 / 2024)
- Responsive masonry grid (2-col mobile, 4-col desktop)
- Lightbox modal with caption and date
- 12 placeholder items

### 8. Contact (`/contact`)
- Contact form (name, email, subject dropdown, message)
- Success state with "Message Sent" confirmation
- Email, location, and social media cards
- Note: form is client-side only (no backend)

## Features

### Search (Cmd+K)
- Global keyboard shortcut Cmd/Ctrl+K opens modal
- Fuse.js fuzzy search across 17 indexed items (pages, sub-teams, vehicle systems, docs)
- Results grouped by category with icons
- Escape to close

### Navbar
- Fixed position, transparent on hero → solid with backdrop-blur on scroll
- Small helmet logo + "TROY SPEAR" text (hidden on mobile)
- 7 nav links (hidden on mobile, shown in hamburger menu)
- Search icon
- Mobile hamburger menu with framer-motion animation

### Animations
- All sections use AnimatedSection wrapper (fade-in-up on scroll via Intersection Observer)
- Hero elements stagger in sequence (0.2s delays)
- Framer Motion for mobile menu and lightbox transitions

## Placeholder Content to Replace

| What | Where | Format |
|------|-------|--------|
| Spline 3D scene URL | `src/components/home/SplineBackground.tsx` line 8 | Spline publish URL |
| Submarine 3D model | `src/components/vehicle/SubmarineViewer.tsx` | Replace PlaceholderSubmarine with useGLTF('.glb') |
| Team member data | `src/lib/data/team-members.ts` | Name, role, subTeam, image path |
| Team member photos | `public/images/team/` | Square images |
| Sponsor logos | `public/images/sponsors/` | PNG/SVG logos |
| Sponsor data | `src/lib/data/sponsors.ts` | Name, logo path, URL, tier |
| Gallery photos | `public/images/gallery/` | Any aspect ratio |
| Gallery data | `src/lib/data/gallery-items.ts` | Caption, date, category, year |
| Vehicle photos | `public/images/vehicle/` | Any images |
| Blog post content | `src/lib/data/blog-posts.ts` | Title, date, summary, content |
| Social media links | Footer.tsx, contact/page.tsx | URLs |
| Contact email | Footer.tsx, contact/page.tsx | Real email address |
| Contact form backend | contact/page.tsx | Currently client-only, needs API route or service |

## Known Limitations
- Contact form has no backend — submits client-side only with success animation
- No actual images — all gallery/team/vehicle/sponsor sections show placeholder icons
- Spline scene uses a default URL that may not load (replace with your own)
- 3D submarine is built from basic Three.js primitives, not a real model
- Search index is static — doesn't index blog post body content
- No `prefers-reduced-motion` media query handling yet
- No sitemap.xml or robots.txt configured
- Footer logo uses `invert` filter which may need adjustment depending on logo colors

## Commands
```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Serve production build
```
