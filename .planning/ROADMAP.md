# Roadmap: Jake's Floor Care Website

## Overview

Three phases: extract shared design components from the homepage, rebuild every inner page to use them, then run the full SEO/AEO/performance optimization sweep before launch.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Design System** - Extract shared nav/footer/components from homepage into reusable form
- [ ] **Phase 2: Page Rebuilds** - Rebuild all 21+ inner pages using the design system, process photos, integrate GHL
- [ ] **Phase 3: SEO, AEO & Performance** - Full technical/local/content SEO, AEO, schema, sitemap, Core Web Vitals

## Phase Details

### Phase 1: Design System
**Goal**: The shared design components exist and are ready for every page to use
**Depends on**: Nothing (first phase)
**Requirements**: DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05, DESIGN-06
**Success Criteria** (what must be TRUE):
  1. A shared CSS file contains the full Sora/Outfit font stack, blue (#2a4592)/dark (#141414) palette, and all reusable component classes (section-tag, section-title, buttons, cards, reveal animations)
  2. A canonical nav and footer HTML snippet exists that matches the homepage exactly — ready to paste into any page
  3. The mobile sticky CTA bar component exists and works on all screen sizes
  4. Mobile tap highlight and image long-press are suppressed site-wide via the shared stylesheet
  5. Any old Barlow Condensed/Source Serif 4 and copper/sand/cream palette CSS is identified and documented for removal
**Plans**: TBD
**UI hint**: yes

### Phase 2: Page Rebuilds
**Goal**: Every inner page matches the homepage design language and GHL integrations are live site-wide
**Depends on**: Phase 1
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07
**Success Criteria** (what must be TRUE):
  1. All 11 service pages render with Sora/Outfit fonts, blue/dark palette, and homepage component patterns — old design system fully removed
  2. All 10 service area pages render with the same design language
  3. About, Reviews, and Contact pages match the homepage design; Contact page has the GHL form embed
  4. GHL chat widget appears on every page
  5. Best client photos are processed (.webp, 1200px max) and placed on relevant pages with descriptive filenames
**Plans**: TBD
**UI hint**: yes

### Phase 3: SEO, AEO & Performance
**Goal**: Every page is technically sound, locally optimized, and ready to rank before launch
**Depends on**: Phase 2
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, AEO-01, AEO-02, PERF-01, PERF-02
**Success Criteria** (what must be TRUE):
  1. All pages pass technical SEO audit (correct meta tags, canonical URLs, proper heading hierarchy, no crawl errors)
  2. LocalBusiness schema and NAP are consistent across all pages; service and service-area pages have appropriate Service/FAQ/BreadcrumbList schema
  3. XML sitemap is generated and all image assets are .webp with descriptive alt tags and lazy loading
  4. Each service page and service-area page has geo-targeted content with target keywords and FAQ sections formatted for AI snippets
  5. Core Web Vitals pass on representative pages (LCP, CLS, FID within acceptable thresholds)
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design System | 0/TBD | Not started | - |
| 2. Page Rebuilds | 0/TBD | Not started | - |
| 3. SEO, AEO & Performance | 0/TBD | Not started | - |
