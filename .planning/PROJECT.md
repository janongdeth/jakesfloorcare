# Jake's Floor Care — Website Rebuild

## What This Is

A static HTML website for Jake's Floor Care, a floor care and epoxy coatings company based in Wolcottville, Indiana serving NE Indiana. The homepage is complete and sets the design standard — all inner pages need to be rebuilt to match it. The site also needs comprehensive SEO and AEO optimization before launch.

## Core Value

Every page on the site looks and feels like one cohesive brand, ranks well for local floor care searches, and drives phone calls and quote requests through GHL.

## Requirements

### Validated

- ✓ Homepage design — existing, sets the design standard
- ✓ Service pages exist (11 services) — existing, need rebuild
- ✓ Service area pages exist (10 cities) — existing, need rebuild
- ✓ About, Reviews, Contact pages exist — existing, need rebuild
- ✓ Vercel deployment config — existing (`vercel.json` with clean URLs)
- ✓ Mobile sticky CTA bar — existing on homepage
- ✓ LocalBusiness schema markup — existing on homepage
- ✓ Google Fonts loaded (Sora + Outfit) — existing on homepage

### Active

- [ ] Rebuild all inner pages to match homepage design (Sora/Outfit fonts, blue/dark palette, same component patterns)
- [ ] Remove old design system (Barlow Condensed/Source Serif 4, copper/sand/cream palette) from all inner pages
- [ ] Eliminate any AI-looking design elements across all pages
- [ ] Full SEO optimization (technical, on-page, local, schema, sitemap, images, content)
- [ ] Full AEO optimization (answer engine optimization for AI search results)
- [ ] GHL form embed on contact page
- [ ] GHL chat widget integration
- [ ] Consistent nav/header/footer across all pages matching homepage

### Out of Scope

- New pages beyond what already exists — just fix what's there
- Backend or CMS — stays static HTML
- Blog or content marketing pages — not in this round
- Redesigning the homepage — it's the master, don't touch it

## Context

- **Client:** Jake Lazzarino, Jake's Floor Care, Wolcottville IN
- **Phone:** (260) 343-1775
- **Address:** 11511 E 1150 N-57, Wolcottville, IN 46795
- **Hours:** Mon–Sat 7am–7pm, Sunday closed
- **Business type:** Carpet cleaning, epoxy flooring, concrete coatings, tile work
- **Service area:** Fort Wayne, Kendallville, Auburn, Angola, Columbia City, Warsaw, Goshen, Huntington, Decatur, Wolcottville
- **Trust signals:** BBB A+ rated, 5-star Google reviews, 500+ floors completed, 10+ years experience
- **Site status:** Not live yet, being built for launch
- **Hosting:** Vercel static site
- **Lead capture:** GoHighLevel (GHL) — form embed + chat widget
- **Design mismatch:** Homepage uses Sora/Outfit fonts with blue (#2a4592) / dark (#141414) palette. Inner pages use Barlow Condensed/Source Serif 4 with copper/sand/cream palette — completely different design language.
- **SEO tools available:** Full agricidaniel-seo plugin suite (/seo-audit, /seo-local, /seo-schema, /seo-technical, /seo-content, /seo-maps, /seo-geo, /seo-sitemap, /seo-images, /seo-sxo, /seo-performance)

## Constraints

- **Stack:** Static HTML/CSS/JS only — no frameworks, no build step
- **Design:** Homepage is the master — all pages must match its design language exactly
- **Anti-AI:** No gradient blobs, glassmorphism, generic icon grids, rounded-2xl everywhere, emoji icons, or centered-hero-three-column-features patterns
- **Nav/Footer:** Duplicated across pages — bulk find-replace with sed for changes
- **Images:** Convert to .webp, quality 80, max 1200px wide. Use Pillow (no ImageMagick on this machine)
- **Mobile:** Disable tap highlights on interactive cards, disable image long-press on content images

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Homepage is design master | Already polished and approved by client | — Pending |
| Rebuild inner pages (not just restyle) | Old pages use entirely different font families and color system — patching won't cut it | — Pending |
| Use all SEO/AEO skills | Pre-launch is the ideal time to bake in SEO/AEO from the ground up | — Pending |
| GHL for lead capture | Client already has GHL account set up | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-16 after initialization*
