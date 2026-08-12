# GPOST Growth Strategy

An executive site prepared for Joe Kessler's GPOST General Manager candidacy. One URL contains two intentionally different editorial views: GPOST's established place-based product in the light view, and Joe's proposed General Manager operating strategy in the dark view.

## What the site covers

- **GPOST / light:** Mission, Product, and Payments
- **Strategy / dark:** Office & People, Technology & AI, Global Operations, and Executive Scorecard
- Evidence labels separating public facts, interpretation, interview-informed context, and proposals to validate
- A third-party payments integration hypothesis, including an emerging-market and mobile-money branch
- A chronological General Manager operating sequence with management cadence and KPIs
- Direct-linkable views through `?view=gpost` and `?view=strategy`

The brand system, palette, asset history, and extension guidance are internal repository documentation in `docs/BRAND_SYSTEM.md`; they are intentionally not exposed as a public site route.

## Evidence standard

The site separates:

- **Publicly documented:** supported by GPOST's public materials
- **My interpretation:** a conclusion drawn from supported facts
- **Interview-informed:** context supplied in private leadership conversations without presenting it as a public company statement
- **Proposal to validate:** a candidate recommendation or planning assumption requiring leadership confirmation

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

GitHub Pages is the sole maintained deployment and the source of truth for public version history. The former Sites configuration has been removed from this repository.

Before sharing externally, confirm that every recruiter-derived fact is appropriate to publish and decide whether the URL should be public or restricted.
