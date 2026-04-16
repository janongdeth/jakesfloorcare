<!-- GSD:project-start source:PROJECT.md -->
## Project

**Jake's Floor Care — Website Rebuild**

A static HTML website for Jake's Floor Care, a floor care and epoxy coatings company based in Wolcottville, Indiana serving NE Indiana. The homepage is complete and sets the design standard — all inner pages need to be rebuilt to match it. The site also needs comprehensive SEO and AEO optimization before launch.

**Core Value:** Every page on the site looks and feels like one cohesive brand, ranks well for local floor care searches, and drives phone calls and quote requests through GHL.

### Constraints

- **Stack:** Static HTML/CSS/JS only — no frameworks, no build step
- **Design:** Homepage is the master — all pages must match its design language exactly
- **Anti-AI:** No gradient blobs, glassmorphism, generic icon grids, rounded-2xl everywhere, emoji icons, or centered-hero-three-column-features patterns
- **Nav/Footer:** Duplicated across pages — bulk find-replace with sed for changes
- **Images:** Convert to .webp, quality 80, max 1200px wide. Use Pillow (no ImageMagick on this machine)
- **Mobile:** Disable tap highlights on interactive cards, disable image long-press on content images
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- HTML5 - Markup for all pages (`*.html`)
- CSS3 - Styling, embedded in `<style>` tags and `style.css`
- JavaScript (vanilla) - Client-side interactions in `script.js`
- JSON-LD - Schema markup for SEO in `<script type="application/ld+json">` tags
## Runtime
- Browser (client-side only, no backend runtime)
- Not applicable — no Node.js, npm, or Python dependency management
- Not applicable
## Frameworks
- None — pure HTML, CSS, JavaScript (no framework dependencies)
- No CSS framework — custom CSS in `style.css` and inline `<style>` tags
- Vanilla JavaScript only — no jQuery, React, Vue, or other libraries
## Key Dependencies
- Google Fonts API (`https://fonts.googleapis.com`) - Provides `Sora`, `Outfit`, `Barlow Condensed`, and `Source Serif 4` typefaces
- None — no backend servers, databases, or APIs consumed
## Configuration
- No `.env` file or environment variable configuration required
- No build step or tooling — static HTML served directly
- `vercel.json` configuration: enables clean URLs (`cleanUrls: true`, `trailingSlash: false`)
- Deployed to Vercel as a static site
- Configuration: `C:/Users/janon/websites/jakesfloorcare/vercel.json`
## Platform Requirements
- Static HTML files
- A text editor or IDE for HTML/CSS/JS editing
- No build step required
- Vercel static hosting
- HTTP/2 support for image optimization
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- HTML files: kebab-case (e.g., `contact.html`, `epoxy-flooring.html`)
- CSS files: kebab-case (e.g., `style.css`)
- JavaScript files: kebab-case or no suffix (e.g., `script.js`)
- Nested structure: service pages organized by category (`/services/`, `/service-areas/`)
- BEM-like approach with kebab-case (e.g., `.main-nav`, `.nav-arrow`, `.header-inner`)
- Utility-inspired naming (e.g., `.sr-only`, `.container`, `.reveal`)
- Semantic section/component prefixes (e.g., `.page-header`, `.cta-band`, `.site-footer`)
- State variants with double dash (e.g., `.mobile-open`, `.visible`)
- Semantic color naming: `--charcoal`, `--warm-gray`, `--copper`, `--copper-light`
- Structural variables: `--header-h`, `--ff-heading`, `--ff-body`
- All variables declared in `:root` block at top of stylesheet
- Used consistently across all pages via shared `style.css`
- camelCase for constants and variables (e.g., `toggle`, `nav`, `observer`, `header`)
- Descriptive names derived from element selectors (e.g., `const header = document.querySelector('.site-header')`)
## Code Style
- No automated formatter detected (Prettier/ESLint not configured)
- Manual formatting conventions observed:
- Grouped by component/section with comment headers
- Example: `/* ======== HEADER ======== */`, `/* ======== BUTTONS ======== */`
- Mobile-responsive rules consolidated at end with `@media` queries
- Reset and common styles first, then component-specific styles
- Functional programming approach preferred (arrow functions)
- Event listeners attached via `addEventListener` (not inline)
- DOM queries use `querySelector` and `querySelectorAll`
- No external dependencies or build process
## Import Organization
- Shared stylesheet: `/style.css` (included on all pages)
- Shared script: `/script.js` (included on all pages)
- Page-specific styles: Inline `<style>` blocks in page `<head>`
## Error Handling
- No explicit error handling in JavaScript
- DOM queries assume elements exist (implicit contract)
- Example: `const toggle = document.querySelector('.menu-toggle')` - no null check
- Fallback behavior: IntersectionObserver gracefully handles missing elements
- Form inputs use HTML5 attributes (required, pattern, type)
- No JavaScript validation layer observed
- Form submission likely handled by backend or form service
## Logging
- No logging framework or console usage in production code
- Comments used to document complex logic (e.g., `// Scroll reveal`, `// Mobile menu toggle`)
## Comments
- Section headers: Used extensively (e.g., `/* HEADER */`, `/* BUTTONS */`)
- Complex calculations: Rare, but example is IntersectionObserver threshold logic
- State changes: Documented with comments (e.g., `// Mobile dropdown toggles`)
- Section headers use visible divider format: `/* ======== NAME ======== */`
- Inline comments use `//` for JavaScript, `/* */` for CSS
- Purpose-focused (WHY), not implementation-focused (WHAT)
- Not used - no TypeScript or modern JS documentation
## Function Design
- Keep functions small and focused (e.g., single responsibility per event listener)
- Example: Menu toggle function ~20 lines, isolated to one task
- Minimal parameters, often none
- Use closure to access outer scope (e.g., arrow functions with implicit `this`)
- Example:
- Most functions return nothing (side-effect based)
- DOM manipulation via `classList.add()`, `classList.toggle()`
- Example: No explicit returns in event handlers
## Module Design
- Not applicable (no modules)
- All code is global scope on same page
- Not used - single `script.js` for all functionality
- Single `<script src="/script.js"></script>` at end of body
- Executes after DOM fully parsed
- All functionality runs on page load via immediate selectors
## Responsive Design Patterns
- Single breakpoint at `max-width: 768px` (mobile)
- Secondary breakpoint at `max-width: 480px` (small mobile)
- Declared at end of stylesheets
- CSS variable override approach (e.g., `--header-h: 60px` on mobile)
- `clamp()` used for responsive typography: `clamp(36px, 4vw, 52px)`
- Max-width containers at 1140-1200px
- Viewport padding: `padding: 0 24px`
- Desktop-first approach (media queries for mobile max-width)
- Hamburger menu hidden by default, shown on mobile
- Dropdowns repositioned for touch (`.mobile-open` state)
- Sticky bottom bar on mobile
## Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<section>`, `<button>`
- aria-label on button: `.menu-toggle` has `aria-label="Toggle menu"`
- Screen reader class: `.sr-only` for skip links and hidden text
- Focus states implied through `:focus-within` selector
## Schema & SEO
- JSON-LD blocks embedded in page `<head>`
- LocalBusiness schema on about page
- Opening hours, service areas, ratings included
- Example file: `/about.html` (lines 15-68)
- All pages have canonical links, descriptions
- Open Graph tags present but not extensively used
- Preconnect hints to Google Fonts
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Server-side routing via Vercel with `cleanUrls` enabled (no `.html` extensions in URLs)
- Inline critical styles in `<head>`, shared stylesheet for template styles (`style.css`)
- Vanilla JavaScript for progressive enhancement (menu toggle, scroll reveal, header effects)
- Content-driven pages with reusable header/footer templates
- Page-specific styles embedded in individual HTML files for component isolation
## Layers
- Purpose: Visual rendering and user interaction
- Location: `index.html`, `services/`, `service-areas/`, `about.html`, `contact.html`, `reviews.html`
- Contains: HTML structure, inline/page-specific CSS, semantic markup with schema.org JSON-LD
- Depends on: `style.css` (shared), `script.js` (enhancements), Google Fonts
- Used by: Browser renderer
- Purpose: Design tokens, reusable component styles, responsive design
- Location: `style.css`
- Contains: CSS custom properties (color palette, typography families), header/footer/nav styles, form styles, section patterns (reveal, grids), responsive breakpoints
- Depends on: Google Fonts API
- Used by: All pages via `<link rel="stylesheet" href="/style.css">`
- Purpose: Progressive enhancement for menu navigation, scroll effects, form handling
- Location: `script.js` (inlined in `index.html`), inline scripts in individual pages
- Contains: Mobile menu toggle, dropdown handlers, IntersectionObserver for scroll reveal, header shadow on scroll
- Depends on: DOM structure, CSS classes for state management
- Used by: All pages with interactive components
## Data Flow
- Menu state: CSS classes on `<nav>` and `<button>` elements (`.open`, `.mobile-open`)
- Scroll reveal: IntersectionObserver adds `.visible` class to `.reveal` elements
- Header shadow: Conditional style injection based on `window.scrollY` threshold
- Form state: Standard HTML form handling (no client-side validation visible in current code)
## Key Abstractions
- Purpose: Render individual service or geographic area pages with consistent structure
- Examples: `services/epoxy-flooring.html`, `service-areas/fort-wayne.html`
- Pattern: 
- Purpose: Flexible content organization across all page types
- Pattern: CSS Grid with responsive column counts
- Used in: Services display, benefits blocks, related services, service area listings
- `.reveal` - Elements that fade in on scroll via IntersectionObserver
- `.container` - Max-width wrapper with horizontal padding
- `.section-*` - Semantic section tags with consistent padding
- `.btn-*` - Button styles (`.btn-blue`, `.btn-white`, `.btn-ghost`)
## Entry Points
- Location: `index.html`
- Triggers: Direct navigation to `/` or domain root
- Responsibilities: Hero banner with trust signals, service category overview, testimonials carousel, service area grid, CTA section, company story
- Location: `services/{service-slug}.html` (12 service files)
- Triggers: Navigation via services dropdown or home page grid
- Responsibilities: Service-specific overview, process steps, benefits grid, related service recommendations, schema.org markup
- Location: `service-areas/{area-slug}.html` (10 area files)
- Triggers: Service area dropdown or home page areas list
- Responsibilities: Location-specific introduction, service offerings, local testimonials, why choose this business for that area
- `about.html` - Company story, team, credentials
- `reviews.html` - Testimonials and rating aggregation
- `contact.html` - Contact form, business hours, location
- `services.html` - All services browse page
- `service-areas.html` - All service areas browse page
## Error Handling
- Graceful degradation: Menu functions without JavaScript via semantic HTML
- Navigation always available (header links are text links, not JavaScript-dependent)
- Forms submit to standard HTTP POST (no client-side validation visible)
## Cross-Cutting Concerns
- Approach: Semantic HTML with schema.org JSON-LD in `<script type="application/ld+json">`
- LocalBusiness schema on home page with contact, hours, service areas
- Canonical URLs on all pages
- Meta descriptions on all pages
- Clean URLs via Vercel config (`vercel.json`)
- Open Graph tags for social sharing
- Approach: Sticky fixed header with dropdown menus
- Mobile: Hamburger menu toggle that reveals off-canvas nav
- Dropdowns show/hide based on hover (desktop) and click (mobile)
- Approach: Lazy loading for images via `loading="lazy"` attribute
- Inline critical CSS for above-fold content
- Minimal JavaScript, vanilla (no frameworks)
- CSS animations use transform/opacity for performance
- Image optimization: WebP format with fallbacks
- Approach: Semantic HTML, ARIA labels on buttons
- Focus management in mobile menu
- Color contrast maintained in design tokens
- Heading hierarchy preserved across all pages
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
