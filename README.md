# GPOST Growth Strategy

An executive strategy site prepared for Joe Kessler's GPOST General Manager candidacy. It presents a clear operating thesis for evolving GPOST's location-based communication platform into an actionable service layer while protecting trust.

## What the site covers

- GPOST's verified public product and purpose
- A clearly labeled hypothesis for platform payments
- A detailed target operating model spanning Dev/AI, Merchant Success, Customer Engagement, payment operations, global operations, risk, finance, and people
- A composable AI and technology architecture with responsible-data guardrails
- A practical 30/60/90-day and 3–12-month roadmap
- Executive decisions leadership should resolve before committing capital
- A persistent GPOST-light/Strategy-dark presentation system

The brand system, palette, asset history, and extension guidance are internal repository documentation in `docs/BRAND_SYSTEM.md`; they are intentionally not exposed as a public site route.

## Evidence standard

The site separates:

- **Verified:** statements supported by GPOST public materials or recruiter-provided role context
- **Interpretation:** strategic conclusions drawn from supported facts
- **Hypothesis:** recommended future-state designs that GPOST has not publicly confirmed

Primary public sources:

- [GPOST purpose](https://www.gpost.com/about.php)
- [GPOST technology](https://www.gpost.com/technology.php)
- [GPOST product FAQ](https://www.gpost.com/faqs.php)

The public product pages appear to reflect a 2019-era product description, so current product status and roadmap should be validated with GPOST leadership.

## Repository structure

```text
app/
  globals.css        Visual system and responsive layout
  layout.tsx         Metadata and social-sharing configuration
  page.tsx           Strategy narrative and interactions
public/
  og.png             Bespoke social preview card
  brand/             Current identity assets plus retained evolution references
docs/
  BRAND_SYSTEM.md    Internal instructions, palette, and asset evolution record
.github/workflows/
  deploy-pages.yml   Automatic public GitHub Pages publishing
.openai/
  hosting.json       Sites deployment configuration
```

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Static GitHub Pages build:

```bash
pnpm run build:pages
```

## Publishing

The repository deploys automatically to GitHub Pages whenever `main` changes. The workflow creates a static export and publishes it at `https://kessler-co-tx.github.io/gpost-strategy/`.

The existing Sites deployment remains available independently. GitHub is now the source of truth for public version history and GitHub Pages publishing.

Before sharing externally, confirm that every recruiter-derived fact is appropriate to publish and decide whether the URL should be public or restricted.
