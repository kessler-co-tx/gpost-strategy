# GPOST Strategy Brand System

Version 1.1 — August 2026

This is an internal implementation guide for keeping the strategy site consistent. It is not a public section of the site and is not a replacement for GPOST's official corporate brand standards.

## Two connected expressions

### Light mode — current-state continuity

Use light mode for verified GPOST facts, existing-product explanations, public research, and content that should feel adjacent to GPOST's current public website.

- Canvas: Cloud `#F7FAFF` or white
- Primary text: Ink `#101D2F`
- Structure and action: GPOST Cobalt `#1767F2`
- Secondary orientation: Signal Cyan `#18A9CF`
- Geographic imagery should be restrained or contained in a card.

### Dark mode — future-state strategy

Use dark mode for recommendations, operating-model design, payment architecture, AI strategy, target-state roadmaps, and executive decisions.

- Canvas: Midnight `#071522` or Strategy Navy `#10233A`
- Primary text: white
- Structure: GPOST Cobalt `#1767F2`
- Progress and recommended paths: Progress Lime `#B8D930`
- Geographic systems are the signature visual motif.

Theme is semantic, not decorative. The public site has one presentation control: a two-state toggle between **GPOST** (light) and **Strategy** (dark). Both modes carry the same core narrative unless a deliberate, documented content variation is added later. The shared toggle persists a visitor's preference across the site.

### Header lockups

- **Light / GPOST:** show only the established GPOST wordmark. Do not append “GPOST Growth Strategy” or another strategy label.
- **Dark / Strategy:** show the latest compact GPOST icon with the larger “GPOST / Growth Strategy” lockup. This is the bolder strategy expression.

## Approved palette

| Token | Value | Purpose |
|---|---|---|
| Midnight | `#071522` | Dark canvas and footer |
| Strategy Navy | `#10233A` | Primary dark surface |
| GPOST Cobalt | `#1767F2` | Navigation, structure, action |
| Signal Cyan | `#18A9CF` | Eyebrows, orientation, secondary signal |
| Progress Lime | `#B8D930` | Progress, proof, completion, recommended path |
| Warm Paper | `#F4F1EA` | Editorial light canvas |
| Cloud | `#F7FAFF` | Current-state light surface |
| Ink | `#101D2F` | Primary light-mode text |

Do not introduce another accent color unless it carries a distinct, repeated meaning. Orange is reserved for exceptional customer or risk callouts already present in the operating model.

## Typography

- Display: Georgia or a compatible editorial serif.
- Interface and body: Arial, Helvetica, or a compatible neutral sans serif.
- Headlines: sentence case, compact line height, 6–12 words when possible.
- Eyebrows: uppercase sans serif, 8–11 pixels, generous letter spacing.
- Body: 15–18 pixels for lead copy; 11–14 pixels for dense operating content.
- Italics: reserved for the strategic turn in a headline, not general emphasis.

## Evidence language

- **Verified** — supported by an official GPOST source or direct recruiter/leadership communication.
- **Interpretation** — a source-supported strategic conclusion.
- **Hypothesis** — a proposed future state that GPOST has not confirmed publicly.

Never present a hypothesis as a confirmed roadmap item.

## Geographic system

Use geographic imagery when the subject materially involves place, routing, networks, local relevance, or global operations. Recommended elements include latitude/longitude grids, dotted world maps, concentric coverage rings, location pins, connected nodes, thin cobalt routing lines, and lime completion markers.

Avoid generic stock skylines, globes without a functional relationship, satellite photographs, payment-card clichés, and decorative maps that compete with the content.

## Identity assets and evolution record

Files are under `public/brand/`:

- `gpost-wordmark-transparent.png` — **current wordmark asset**, introduced in commit `277391b` for the latest site header treatment.
- `gpost-icon-transparent.png` — **current compact icon**, introduced in commit `277391b` and used by the dark Strategy header.
- `geographic-strategy-reference.png`
- `../og.png`

Earlier working resources are retained for provenance but are not the current implementation assets:

- `gpost-wordmark-reference.png` — the original white-field wordmark reference used to establish proportions and identity treatment.
- `gpost-icon-reference.png` — the original white-field compact-icon reference used before the transparent export.

The evolution was from screenshot-style reference resources with fixed white fields to transparent production-friendly exports that work cleanly in the site header. Do not revert the site to the older reference PNGs. Preserve both generations without recoloring, stretching, rotating, retyping, or adding effects. Confirm original production-ready trademark files with GPOST before an external commercial launch.

## Additional-page anatomy

1. **Orient** — shared header, active theme, page number, and executive headline.
2. **Frame** — one short thesis paragraph plus evidence classification.
3. **Make visible** — one primary relationship: flow, hierarchy, comparison, timeline, or scorecard.
4. **Make actionable** — decisions, owners, measures, risks, or next steps.

## Layout rules

- Reuse `.topbar`, `.section`, `.section-head`, `.eyebrow`, badge styles, and the shared `ThemeToggle`.
- Keep primary content near a 1,250-pixel maximum width.
- Use a 12-column mental model; most pages should resolve into 7/5, 8/4, 6/6, or 4/4/4 arrangements.
- Use 72–110 pixels of desktop section spacing and 56–76 pixels on mobile.
- Cards align to a shared baseline and use borders before shadows.
- Use one dominant visual relationship per section.

## Interaction and accessibility

- All controls must be keyboard operable and visibly focused.
- Maintain at least WCAG AA text contrast.
- Do not encode meaning with color alone.
- Persist theme locally; default the strategy presentation to dark.
- Respect reduced-motion preferences.
- Stack grids into a single column below 680 pixels.
- Write useful alt text for geographic visuals; use empty alt text for purely decorative identity marks.

## New-page checklist

- Does the headline state an outcome or decision?
- Is each claim labeled correctly?
- Is the selected theme appropriate to the page's meaning?
- Does the page reuse shared components and tokens?
- Is the geographic motif doing explanatory work?
- Is lime reserved for progress or the recommended path?
- Does the page end with action?
- Are public facts linked to authoritative sources?
- Does the page work on mobile and by keyboard?
- Has the production build passed before publishing?
