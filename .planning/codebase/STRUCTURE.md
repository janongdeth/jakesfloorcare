# Codebase Structure

**Analysis Date:** 2026-04-16

## Directory Layout

```
jakesfloorcare/
├── index.html                 # Home page — hero, services overview, trust, areas, CTA
├── about.html                 # Company story and team page
├── contact.html               # Contact form and business information
├── reviews.html               # Customer testimonials and ratings page
├── services.html              # Browse all services
├── service-areas.html         # Browse all service areas
│
├── services/                  # Service detail pages
│   ├── carpet-cleaning.html
│   ├── epoxy-flooring.html
│   ├── tile-and-grout-cleaning.html
│   ├── metallic-and-marble-epoxy.html
│   ├── tile-resurfacing.html
│   ├── concrete-coatings.html
│   ├── upholstery-cleaning.html
│   ├── floor-waxing.html
│   ├── decorative-concrete.html
│   ├── commercial-flooring.html
│   ├── industrial-flooring.html
│   └── [12 total service pages]
│
├── service-areas/             # Service area location pages
│   ├── fort-wayne.html
│   ├── kendallville.html
│   ├── auburn.html
│   ├── angola.html
│   ├── columbia-city.html
│   ├── warsaw.html
│   ├── goshen.html
│   ├── huntington.html
│   ├── decatur.html
│   ├── wolcottville.html
│   └── [10 total area pages]
│
├── images/                    # Static image assets
│   ├── logo-transparent.png
│   ├── hero-*.webp
│   ├── tile-*.webp
│   ├── team-*.webp
│   ├── bbb-logo.svg
│   ├── google-icon.svg
│   └── [service and hero images]
│
├── style.css                  # Shared stylesheet — design system, header, footer, common components
├── script.js                  # Shared JavaScript — menu toggle, scroll reveal, header effects
├── vercel.json                # Deployment config — cleanUrls enabled for Vercel routing
│
└── .planning/
    └── codebase/              # Documentation (this directory)
```

## Directory Purposes

**Root:**
- Purpose: HTML page templates and deployment configuration
- Contains: All `.html` files for public routes
- Key files: `index.html` (home/entry point), `vercel.json` (URL routing)

**services/:**
- Purpose: Service detail pages for individual offerings
- Contains: 12 HTML files, one per service
- Naming: Kebab-case slugs matching URL structure (e.g., `epoxy-flooring.html` → `/services/epoxy-flooring`)
- Pattern: Each page has inline `<style>` block with page-specific CSS, shared header/footer from main stylesheet

**service-areas/:**
- Purpose: Geographic service area landing pages
- Contains: 10 HTML files, one per service area
- Naming: Kebab-case city/town names (e.g., `fort-wayne.html` → `/service-areas/fort-wayne`)
- Pattern: Same structure as service pages — inline styles, shared header/footer

**images/:**
- Purpose: Static image assets
- Contains: SVG logos, WebP optimized hero and service card images
- Naming: Descriptive kebab-case filenames (`hero-metallic-epoxy.webp`, `team-jakes-crew.webp`, `bbb-logo.svg`)
- Format: `.webp` for photos (optimized), `.svg` for logos

## Key File Locations

**Entry Points:**
- `index.html`: Home page, primary entry point
- `services.html`: All services browse
- `service-areas.html`: All areas browse
- `about.html`: Company information
- `contact.html`: Contact form and details
- `reviews.html`: Customer testimonials

**Configuration:**
- `vercel.json`: Routing config with `cleanUrls: true` and `trailingSlash: false`

**Core Logic:**
- `style.css`: Global design system (custom properties, layout grids, header/footer templates, responsive breakpoints)
- `script.js`: Progressive enhancement (menu toggle, scroll reveal, header shadow on scroll)

**Styling:**
- `style.css`: Shared stylesheet imported by all pages
- Individual HTML files: Inline `<style>` blocks for page-specific component styles

## Naming Conventions

**Files:**
- HTML pages: Kebab-case slugs that match URLs (e.g., `epoxy-flooring.html` → `/services/epoxy-flooring`)
- Images: Descriptive kebab-case prefixed by type (e.g., `hero-*`, `tile-*`, `team-*`, `bbb-*`, `google-*`)
- Root pages: Descriptive names (`about.html`, `contact.html`, `reviews.html`)

**Directories:**
- Semantic plural names (`services/`, `service-areas/`, `images/`)

**CSS Class Names:**
- BEM-inspired but simplified (`.site-header`, `.hero-content`, `.svc-card`, `.btn-blue`)
- Utility classes: `.container`, `.reveal`, `.section-*`, `.btn-*`, `.sr-only` (screen-reader only)
- State classes: `.open`, `.visible`, `.mobile-open`, `.has-dropdown`

**HTML IDs:**
- Minimal use, only when needed for JavaScript hooks (e.g., `id="mainNav"` for menu toggle)

## Where to Add New Code

**New Service Page:**
- Create file: `services/{service-slug}.html`
- Structure: Copy structure from existing service page (e.g., `services/epoxy-flooring.html`)
- Include:
  - Header navigation (copy from existing file)
  - Page header with breadcrumbs
  - Service overview section
  - Process/steps section
  - Benefits grid
  - Related services section
  - Footer (copy from existing file)
  - Inline `<style>` block for component styles
  - Schema.org JSON-LD markup
- Link from: `services.html` browse page, update navigation dropdowns in shared header

**New Service Area Page:**
- Create file: `service-areas/{city-slug}.html`
- Structure: Copy from existing area page (e.g., `service-areas/fort-wayne.html`)
- Include:
  - Header and breadcrumbs
  - Intro paragraph mentioning city name
  - Service offerings for that area
  - "Why choose us" section
  - CTA
  - Footer
  - Inline styles for layout
  - Schema.org LocalBusiness markup for the city
- Link from: `service-areas.html` browse page, update service area dropdown in shared header

**New Shared Component/Style:**
- Location: `style.css`
- Approach: Add CSS custom properties for colors (if design token), or add new `.component-name` class
- Pattern: Follow existing pattern (e.g., `.btn-*` for buttons, `.section-*` for sections)

**New Global JavaScript Feature:**
- Location: `script.js` (preferred) or inlined in `index.html`
- Approach: Use vanilla JavaScript with DOM APIs
- Pattern: Event listeners on elements, class toggles for state, IntersectionObserver for visibility events

**New Form or Interactive Feature:**
- Location: Create in individual HTML file with inline `<script>` tag
- Approach: Vanilla JavaScript, no frameworks
- Pattern: Event delegation, class-based state management, avoid global variables

## Special Directories

**images/:**
- Purpose: Static image assets served directly
- Generated: No (user uploads)
- Committed: Yes (all images committed to git)
- Optimization: WebP format for photos (quality 80), SVG for logos
- Naming: Descriptive kebab-case with type prefixes

**.planning/codebase/:**
- Purpose: Architecture and structure documentation
- Generated: Yes (generated by analysis tools)
- Committed: Yes (documentation artifacts)

## URL Routing

**Vercel Configuration (`vercel.json`):**
- `cleanUrls: true` — removes `.html` extension from URLs
- `trailingSlash: false` — removes trailing slashes
- Effect: `index.html` becomes `/`, `services/epoxy-flooring.html` becomes `/services/epoxy-flooring`

**Internal Link Format:**
- All links use clean URLs (no `.html` extension)
- Examples: `href="/"`, `href="/services/epoxy-flooring"`, `href="/service-areas/fort-wayne"`

---

*Structure analysis: 2026-04-16*
