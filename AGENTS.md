# GPOST Strategy Site Context

This repository contains Joe Kessler's strategy presentation for his GPOST General Manager candidacy. The primary audience is GPOST founders, hiring leaders, and potential investors—not end customers.

## Strategic and editorial rules

- Distinguish verified GPOST facts, source-supported interpretations, and informed hypotheses throughout the site.
- Do not present inferred or confidential GPOST plans as confirmed.
- Preserve Joe's positioning in fintech, payments operations, distributed teams, technology delivery, vendor management, AI transformation, and operating-system design.
- Keep the operating-model section the most substantial part of the strategy. It includes Dev/AI, Merchant Success, Customer Engagement, and the shared global operating backbone.

## Brand direction

- Light mode represents GPOST's current public-facing brand: bright, clean, approachable, and aligned with the supplied GPOST references.
- Dark mode represents Joe's future-state strategy: premium navy, electric blue, lime accents, geographic networks, trust, location, and coordinated action.
- Preserve the supplied GPOST wordmark and icon as reference assets. New dark-strategy concepts must begin as alternatives; do not overwrite approved assets before Joe selects a direction.
- Continue the geographic imagery and global network motif established in the strategy hero.
- The interactive brand guide lives at `/brand`; supporting guidance is in `docs/BRAND_SYSTEM.md`.

## Repository and publishing workflow

- `main` is the approved public site and automatically deploys to GitHub Pages.
- Public site: https://kessler-co-tx.github.io/gpost-strategy/
- Repository: https://github.com/kessler-co-tx/gpost-strategy
- Work locally on a named branch and preview at `http://localhost:3000/` before any push.
- Never push, merge, open a pull request, deploy, or change the public site unless Joe explicitly approves that action.
- Use short-lived branches by outcome rather than permanent branches for site sections.
- Current local work areas:
  - `chore/section-components` — behavior-preserving homepage component refactor.
  - `explore/dark-brand-icons` — dark-strategy logo/icon concepts and brand-lab work.
  - `improve/mobile-responsive` — device-by-device responsive audit and improvements.
- Only one branch is shown by the local preview at a time. State which branch is active whenever handing off a preview.

## Code organization and scope control

- `app/page.tsx` coordinates homepage state and section order.
- `app/components/sections/` contains one component per homepage section. For a section-specific request, edit only that component unless a shared change is genuinely necessary.
- `app/globals.css` contains the core site layout and responsive styling.
- `app/brand-system.css` contains shared light/dark brand tokens and brand-guide styles.
- `app/brand/page.tsx` is the interactive brand guide.
- `public/brand/` contains brand references and downloadable guidance.
- Preserve unrelated sections and user-authored changes. Report any shared-style change that could affect multiple sections.

## Work-area rules

### Dark brand exploration

- Use `explore/dark-brand-icons`.
- Keep concepts under `public/brand/concepts/` until one is approved.
- Prefer a local comparison or brand-lab route showing concepts on real dark backgrounds.
- Wire only the chosen concept into dark mode after explicit selection.

### Mobile improvements

- Use `improve/mobile-responsive`.
- Treat mobile work as a site-wide change, but preserve desktop appearance unless an improvement is explicitly approved.
- Check representative widths around 390, 430, 768, 1024, and desktop before proposing a merge.
- Verify navigation, typography, image cropping, section grids, payment diagrams, operating-model cards, accordions, and touch targets.

## Validation

- Start the local site with `./scripts/start-local.sh`.
- Run the Sites build after implementation: `pnpm run build`.
- Run the GitHub Pages export before publication: `GITHUB_ACTIONS=true NEXT_PUBLIC_BASE_PATH=/gpost-strategy NEXT_PUBLIC_SITE_URL=https://kessler-co-tx.github.io/gpost-strategy pnpm run build:pages`.
- Do not use the existing starter tests in `tests/rendered-html.test.mjs` as a release gate; they describe the removed starter skeleton and are stale.
