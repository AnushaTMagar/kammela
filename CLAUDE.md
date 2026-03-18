# KamMela — Design System & AI Instructions

This file is the single source of truth for design, content, and code conventions for the KamMela website. Follow these rules strictly in every AI-assisted edit. Do not deviate from this document.

---

## Brand Identity

**Company:** Mangawa Nepal Pvt. Ltd.
**Product:** KamMela — Nepal's premier job marketplace
**Logo text rule:** "Kam" is always `text-primary` (`#00577D`, dark blue) and "Mela" is always `text-gold` (`#EFC900`, yellow). This applies **everywhere** the word "KamMela" is rendered as styled/prominent text — Navbar, Footer, section headings, captions, download sections, anywhere. Never use a single color for the whole word. Never use dark mode variants that override these colors. The exact JSX pattern to always use is:
```jsx
<span className="text-primary">Kam</span><span className="text-gold">Mela</span>
```
**Tagline:** Connect Clients With Professionals
**Positioning:** Direct, transparent, fraud-free hiring between clients and professionals in Nepal.

---

## Color Palette

| Token              | Hex         | Usage |
|--------------------|-------------|-------|
| `primary`          | `#00577D`   | Primary actions, links, highlights |
| `primary-300`      | `#4db8e8`   | Dark mode primary text / borders |
| `primary-600`      | `#00577D`   | Same as primary (alias) |
| `primary-700`      | `#003d5c`   | Hover state for primary buttons |
| `gold`             | `#EFC900`   | Accent, hero animated word, CTA buttons |
| `gold-dark`        | `#c9a800`   | Hover state for gold elements |
| Light background   | `#FFFFFF` / `#F9FAFB` | Page and section backgrounds |
| Dark background    | `#0A0A0A`   | Main dark mode background |
| Dark surface       | `#0D0D0D`   | Alternate section dark background |
| Dark card          | `#111111`   | Card background in dark mode |
| Dark border        | `#1E1E1E`   | Borders / dividers in dark mode |
| Text dark          | `#0F0F0F`   | Primary text (light mode) |
| Text muted         | `#6B7280`   | Subtext and descriptions |

**Never** introduce new brand colors without updating this file.

---

## Typography

- **Font family:** Inter (loaded from Google Fonts)
- **Weights used:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black)
- **Base size:** 16px (Tailwind default)
- **Hero heading:** `text-[clamp(3rem,8vw,6.5rem)]`, `font-black`, `leading-[0.92]`, `tracking-tight`
- **Section headings:** `text-4xl md:text-5xl`, `font-black`, `tracking-tight`
- **Section subtext:** `text-lg`, `text-gray-500 dark:text-gray-400`, `leading-relaxed`
- **Body:** default (1rem), `text-gray-600 dark:text-gray-400`

---

## Spacing Philosophy

- **Generous padding.** Sections use `py-28` (112px) vertically.
- **Container:** `max-w-6xl mx-auto px-6 md:px-10 lg:px-16` — use the `.section-container` utility class.
- **Section header margin:** `mb-20` below the header block before the content grid.
- **Cards:** `p-8` to `p-10` internal padding, `rounded-2xl`.
- **Never crowd the layout.** If in doubt, add more space.

---

## Component Conventions

### Reusable Classes (defined in `src/index.css`)
```
.section-container   → max-w-6xl wrapper with responsive px
.section-label       → small uppercase label above headings
.section-heading     → large bold heading
.section-subtext     → muted subtitle paragraph
.btn-primary         → gold filled button (black text, hover scale)
.btn-outline         → primary bordered button (hover fill)
.card                → white/dark-surface card with border and rounded-2xl
.card-hover          → adds hover glow + border tint to .card
```

### Dark Mode
- Strategy: Tailwind `darkMode: 'class'`
- Toggle managed in `App.jsx` state, applied to `document.documentElement`
- Respects OS `prefers-color-scheme` on first load
- Every component must include `dark:` variants for backgrounds, text, and borders
- Dark backgrounds: `dark:bg-[#0a0a0a]`, `dark:bg-[#0d0d0d]`, `dark:bg-[#111111]`
- Dark borders: `dark:border-[#1e1e1e]`, `dark:border-[#2a2a2a]`

---

## Page Sections (in order)

1. **Navbar** (`src/components/Navbar.jsx`)
   - Transparent until scroll, then frosted glass (`backdrop-blur-md`)
   - Logo: image + "Kam**Mela**" text (primary color on "Mela")
   - Links: About, How It Works, Services, Contact
   - Right: dark mode toggle + "Sign Up Free" CTA → `https://kammela.com/sign-up`
   - Mobile: hamburger menu

2. **Hero** (`src/components/Hero.jsx`)
   - Full viewport height (`min-h-screen`)
   - Dot grid + ambient glow background
   - Animated rotating word in `text-gold` cycling through profession types
   - Stats: 10K+ Downloads, 500+ Professionals, 50+ Categories, 0 Fraud Tolerance
   - Primary CTA: "Download App" → `https://onelink.to/cpnd73`
   - Secondary CTA: "Sign Up Free" → `https://kammela.com/sign-up`

3. **About** (`src/components/About.jsx`) — `id="about"`
   - Mission overview
   - Two audience cards: For Clients / For Professionals
   - Four value props: Direct, Fast, Zero Fraud, Built for Everyone

4. **How It Works** (`src/components/HowItWorks.jsx`) — `id="how-it-works"`
   - Two column layout: Clients (3 steps) / Professionals (3 steps)
   - Vertical step connector lines

5. **Services** (`src/components/Services.jsx`) — `id="services"`
   - 4-column grid of service categories with colored icons
   - 12 categories covering all sectors

6. **Download** (`src/components/Download.jsx`) — `id="download"`
   - Full-bleed card with primary color background
   - App Store + Google Play buttons → `https://onelink.to/cpnd73`
   - Feature grid: Fast, Secure, Notifications, Platforms

7. **Contact** (`src/components/Contact.jsx`) — `id="contact"`
   - Contact form (mailto fallback, no backend)
   - Contact info: address, email, phone, WhatsApp
   - Opening hours table
   - WhatsApp: `https://wa.me/9779705435952`

8. **Footer** (`src/components/Footer.jsx`)
   - Brand + social icons (Facebook, LinkedIn)
   - Nav links, Download CTA, Privacy Policy
   - Copyright: © 2026 KamMela · Mangawa Nepal Pvt. Ltd.

---

## Content & Copy Rules

- **Never fabricate stats or user counts** — use the values defined: 10K+, 500+, 50+, 0
- **Company name:** always "KamMela" (capital K, capital M, lowercase rest)
- **Legal entity:** Mangawa Nepal Pvt. Ltd.
- **Address:** Ward 06, Mahankal, Kathmandu, Nepal
- **Email:** info@kammela.com
- **Phone:** +977 9705435952
- **WhatsApp:** https://wa.me/9779705435952
- **App download:** https://onelink.to/cpnd73
- **Sign up:** https://kammela.com/sign-up
- **Facebook:** https://www.facebook.com/profile.php?id=61572287257901
- **LinkedIn:** https://www.linkedin.com/company/kammela
- **Privacy Policy:** https://kammela.com/privacy-policy

---

## Tech Stack

| Tool          | Version  | Purpose |
|---------------|----------|---------|
| React         | 18.3+    | UI framework |
| Vite          | 5.4+     | Build tool / dev server |
| Tailwind CSS  | 3.4+     | Styling (class strategy dark mode) |
| lucide-react  | 0.344+   | Icons |
| PostCSS       | 8.4+     | CSS processing |

---

## File Structure

```
src/
├── App.jsx              ← Dark mode state, section layout
├── main.jsx             ← React root
├── index.css            ← Tailwind + custom component classes
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── HowItWorks.jsx
    ├── Services.jsx
    ├── Download.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

---

## AI Behavior Rules

1. **Read this file before making any edits** to the codebase.
2. **Do not change brand colors** without explicit user approval. The primary teal (`#00577D`) and gold (`#EFC900`) are non-negotiable.
3. **Maintain generous spacing.** Do not reduce section padding or card padding without a specific request.
4. **Dark mode must always work.** Every new component must include `dark:` variants.
5. **Do not introduce new dependencies** without asking the user first.
6. **Keep components lean.** No business logic in UI components. No over-engineering.
7. **Do not rename files** unless the user explicitly requests it.
8. **Do not add new sections** without user approval — the section order in this file is canonical.
9. **Never fabricate content.** Only use content from this file or directly sourced from the user.
10. **Component classes** — prefer reusable utilities (`.card`, `.btn-primary`, etc.) over inline one-offs.
