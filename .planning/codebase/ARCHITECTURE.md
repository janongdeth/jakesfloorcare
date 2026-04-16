# Architecture

**Analysis Date:** 2026-04-16

## Pattern Overview

**Overall:** Static HTML website with modular template structure and shared styling system.

**Key Characteristics:**
- Server-side routing via Vercel with `cleanUrls` enabled (no `.html` extensions in URLs)
- Inline critical styles in `<head>`, shared stylesheet for template styles (`style.css`)
- Vanilla JavaScript for progressive enhancement (menu toggle, scroll reveal, header effects)
- Content-driven pages with reusable header/footer templates
- Page-specific styles embedded in individual HTML files for component isolation

## Layers

**Presentation:**
- Purpose: Visual rendering and user interaction
- Location: `index.html`, `services/`, `service-areas/`, `about.html`, `contact.html`, `reviews.html`
- Contains: HTML structure, inline/page-specific CSS, semantic markup with schema.org JSON-LD
- Depends on: `style.css` (shared), `script.js` (enhancements), Google Fonts
- Used by: Browser renderer

**Styling System:**
- Purpose: Design tokens, reusable component styles, responsive design
- Location: `style.css`
- Contains: CSS custom properties (color palette, typography families), header/footer/nav styles, form styles, section patterns (reveal, grids), responsive breakpoints
- Depends on: Google Fonts API
- Used by: All pages via `<link rel="stylesheet" href="/style.css">`

**Interactivity Layer:**
- Purpose: Progressive enhancement for menu navigation, scroll effects, form handling
- Location: `script.js` (inlined in `index.html`), inline scripts in individual pages
- Contains: Mobile menu toggle, dropdown handlers, IntersectionObserver for scroll reveal, header shadow on scroll
- Depends on: DOM structure, CSS classes for state management
- Used by: All pages with interactive components

## Data Flow

**Page Load → Rendering → Interaction:**

1. Browser requests clean URL (e.g., `/services/epoxy-flooring`)
2. Vercel routes to corresponding `.html` file via `vercel.json` cleanUrls config
3. HTML loads with:
   - Meta tags (title, description, canonical, og: tags for SEO)
   - Preconnect to Google Fonts
   - Inline critical CSS for above-fold content
   - Semantic HTML with ARIA labels
4. `style.css` loads asynchronously, provides design system
5. Page-specific CSS provides component overrides
6. JavaScript initializes:
   - Menu toggle handlers (mobile)
   - Dropdown state management
   - Scroll reveal IntersectionObserver
   - Header shadow on scroll threshold
7. User interactions trigger class-based state changes (e.g., `.open`, `.visible`, `.mobile-open`)

**State Management:**
- Menu state: CSS classes on `<nav>` and `<button>` elements (`.open`, `.mobile-open`)
- Scroll reveal: IntersectionObserver adds `.visible` class to `.reveal` elements
- Header shadow: Conditional style injection based on `window.scrollY` threshold
- Form state: Standard HTML form handling (no client-side validation visible in current code)

## Key Abstractions

**Service/Service Area Template Pattern:**
- Purpose: Render individual service or geographic area pages with consistent structure
- Examples: `services/epoxy-flooring.html`, `service-areas/fort-wayne.html`
- Pattern: 
  - Shared header/footer from `style.css`
  - Page-specific inline `<style>` block for unique layouts (`.service-overview`, `.sa-intro`, etc.)
  - Breadcrumb navigation
  - Multi-section layout with semantic heading hierarchy
  - `.reveal` class on content sections for scroll animation
  - Related links back to other services/areas

**Grid Layout System:**
- Purpose: Flexible content organization across all page types
- Pattern: CSS Grid with responsive column counts
  - Desktop: 3-column for service cards, 2-column for two-up layouts
  - Tablet (768px): 2-column, 1-column
  - Mobile (480px): Single column
- Used in: Services display, benefits blocks, related services, service area listings

**Component Classes:**
- `.reveal` - Elements that fade in on scroll via IntersectionObserver
- `.container` - Max-width wrapper with horizontal padding
- `.section-*` - Semantic section tags with consistent padding
- `.btn-*` - Button styles (`.btn-blue`, `.btn-white`, `.btn-ghost`)

## Entry Points

**Home Page:**
- Location: `index.html`
- Triggers: Direct navigation to `/` or domain root
- Responsibilities: Hero banner with trust signals, service category overview, testimonials carousel, service area grid, CTA section, company story

**Service Pages:**
- Location: `services/{service-slug}.html` (12 service files)
- Triggers: Navigation via services dropdown or home page grid
- Responsibilities: Service-specific overview, process steps, benefits grid, related service recommendations, schema.org markup

**Service Area Pages:**
- Location: `service-areas/{area-slug}.html` (10 area files)
- Triggers: Service area dropdown or home page areas list
- Responsibilities: Location-specific introduction, service offerings, local testimonials, why choose this business for that area

**Secondary Pages:**
- `about.html` - Company story, team, credentials
- `reviews.html` - Testimonials and rating aggregation
- `contact.html` - Contact form, business hours, location
- `services.html` - All services browse page
- `service-areas.html` - All service areas browse page

## Error Handling

**Strategy:** No explicit error handling visible in current JavaScript (vanilla, enhancement-only approach)

**Patterns:**
- Graceful degradation: Menu functions without JavaScript via semantic HTML
- Navigation always available (header links are text links, not JavaScript-dependent)
- Forms submit to standard HTTP POST (no client-side validation visible)

## Cross-Cutting Concerns

**SEO:**
- Approach: Semantic HTML with schema.org JSON-LD in `<script type="application/ld+json">`
- LocalBusiness schema on home page with contact, hours, service areas
- Canonical URLs on all pages
- Meta descriptions on all pages
- Clean URLs via Vercel config (`vercel.json`)
- Open Graph tags for social sharing

**Navigation:**
- Approach: Sticky fixed header with dropdown menus
- Mobile: Hamburger menu toggle that reveals off-canvas nav
- Dropdowns show/hide based on hover (desktop) and click (mobile)

**Performance:**
- Approach: Lazy loading for images via `loading="lazy"` attribute
- Inline critical CSS for above-fold content
- Minimal JavaScript, vanilla (no frameworks)
- CSS animations use transform/opacity for performance
- Image optimization: WebP format with fallbacks

**Accessibility:**
- Approach: Semantic HTML, ARIA labels on buttons
- Focus management in mobile menu
- Color contrast maintained in design tokens
- Heading hierarchy preserved across all pages

---

*Architecture analysis: 2026-04-16*
