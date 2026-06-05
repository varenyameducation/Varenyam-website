# Varenyam Website

Public-facing marketing site for **Varenyam Coaching Institute** (JEE · NEET · CBSE).

Separate from the teacher/admin **portal** repo — this site shares only the brand
look (teal `#0E6E84`, red `#D63D2F`, gold `#F2B33D` + the logo), not code.

## Stack

- **Next.js 14** (App Router), statically generated — every page is pre-rendered
  and served from the edge CDN. No database, no auth, no server runtime.
- **Tailwind CSS** for styling.
- **lucide-react** for icons.

## Develop

```bash
npm install
npm run dev      # http://localhost:4100
```

## Build

```bash
npm run build    # all routes should report ○ (Static)
```

## Editing content

All copy, courses, faculty, stats and contact details live in **`lib/site.ts`** —
edit there, no component changes needed. Replace the placeholder phone/email/address
and faculty names before going live.

## Deploy

Deploy as its **own Vercel project** (separate from the portal) with its own domain.
No environment variables required. Pure static output → low latency everywhere.
