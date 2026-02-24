# KCYM Anathadam

Website for **KCYM Anathadam** — Kerala Catholic Youth Movement at St. Thomas Church, Anathadam. Faith, Fellowship, Service.

## Tech stack

- **Next.js 14** (App Router)
- **React 18** · **TypeScript**
- **Tailwind CSS** · **shadcn/ui** (Radix UI)
- **Framer Motion** · **Lucide React** · **next-themes**

## Getting started

### Prerequisites

- Node.js 18+ and npm (or [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Run locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server (after build)
npm run lint    # Run ESLint
```

## Project structure

- **`app/`** — Next.js App Router: pages (home, story, church, initiatives, gallery, contact), layout, global styles
- **`components/`** — Layout (Navbar, Footer), BibleQuoteSlider, theme provider, shadcn UI components
- **`lib/`** — Utilities (e.g. `cn`)
- **`hooks/`** — React hooks (e.g. toast)
- **`public/`** — Static assets: hero image, meta logo, gallery images, favicon

## Content

- **Home** — Hero, about KCYM, Bible quote slider
- **Our Story** — Journey timeline, unit members
- **St. Thomas Church** — Parish history, vicars
- **Initiatives** — Blood Cell, Digital Magazine, events
- **Gallery** — Image grid (add images in `public/gallery/`)
- **Contact** — Vicar, church officials, KCYM officials, unit officials, map embed

Social links (header & footer): Instagram, Facebook, YouTube. Map: St. Thomas Church, Anathadam (Google Maps embed).

## Deployment

Build and run in production:

```bash
npm run build
npm run start
```

Or deploy to [Vercel](https://vercel.com) (recommended for Next.js): connect the repo and use the default build settings. Set `NEXT_PUBLIC_SITE_URL` to your production URL for correct meta/OG image URLs.
