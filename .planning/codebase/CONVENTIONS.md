# Coding Conventions

**Analysis Date:** 2026-04-16

## Naming Patterns

**Files:**
- HTML files: kebab-case (e.g., `contact.html`, `epoxy-flooring.html`)
- CSS files: kebab-case (e.g., `style.css`)
- JavaScript files: kebab-case or no suffix (e.g., `script.js`)
- Nested structure: service pages organized by category (`/services/`, `/service-areas/`)

**CSS Classes:**
- BEM-like approach with kebab-case (e.g., `.main-nav`, `.nav-arrow`, `.header-inner`)
- Utility-inspired naming (e.g., `.sr-only`, `.container`, `.reveal`)
- Semantic section/component prefixes (e.g., `.page-header`, `.cta-band`, `.site-footer`)
- State variants with double dash (e.g., `.mobile-open`, `.visible`)

**CSS Variables (Custom Properties):**
- Semantic color naming: `--charcoal`, `--warm-gray`, `--copper`, `--copper-light`
- Structural variables: `--header-h`, `--ff-heading`, `--ff-body`
- All variables declared in `:root` block at top of stylesheet
- Used consistently across all pages via shared `style.css`

**JavaScript Variables:**
- camelCase for constants and variables (e.g., `toggle`, `nav`, `observer`, `header`)
- Descriptive names derived from element selectors (e.g., `const header = document.querySelector('.site-header')`)

## Code Style

**Formatting:**
- No automated formatter detected (Prettier/ESLint not configured)
- Manual formatting conventions observed:
  - Single space indentation in CSS rules
  - Multi-line selectors grouped logically
  - Consistent 0.2s/0.3s transitions for interactive states

**CSS Organization:**
- Grouped by component/section with comment headers
- Example: `/* ======== HEADER ======== */`, `/* ======== BUTTONS ======== */`
- Mobile-responsive rules consolidated at end with `@media` queries
- Reset and common styles first, then component-specific styles

**JavaScript Style:**
- Functional programming approach preferred (arrow functions)
- Event listeners attached via `addEventListener` (not inline)
- DOM queries use `querySelector` and `querySelectorAll`
- No external dependencies or build process

## Import Organization

**Not applicable** - This is a static HTML project. No module imports.

**External Resources:**
1. Google Fonts (preconnect hints)
2. Canonical and meta tags
3. Inline `<style>` blocks on individual pages
4. Shared `style.css` imported on all pages
5. `script.js` loaded last in `<body>`

**Local Files:**
- Shared stylesheet: `/style.css` (included on all pages)
- Shared script: `/script.js` (included on all pages)
- Page-specific styles: Inline `<style>` blocks in page `<head>`

## Error Handling

**Pattern:**
- No explicit error handling in JavaScript
- DOM queries assume elements exist (implicit contract)
- Example: `const toggle = document.querySelector('.menu-toggle')` - no null check
- Fallback behavior: IntersectionObserver gracefully handles missing elements

**Validation:**
- Form inputs use HTML5 attributes (required, pattern, type)
- No JavaScript validation layer observed
- Form submission likely handled by backend or form service

## Logging

**Pattern:** Not detected

**Approach:**
- No logging framework or console usage in production code
- Comments used to document complex logic (e.g., `// Scroll reveal`, `// Mobile menu toggle`)

## Comments

**When to Comment:**
- Section headers: Used extensively (e.g., `/* HEADER */`, `/* BUTTONS */`)
- Complex calculations: Rare, but example is IntersectionObserver threshold logic
- State changes: Documented with comments (e.g., `// Mobile dropdown toggles`)

**Style:**
- Section headers use visible divider format: `/* ======== NAME ======== */`
- Inline comments use `//` for JavaScript, `/* */` for CSS
- Purpose-focused (WHY), not implementation-focused (WHAT)

**JSDoc/TSDoc:**
- Not used - no TypeScript or modern JS documentation

## Function Design

**Size:**
- Keep functions small and focused (e.g., single responsibility per event listener)
- Example: Menu toggle function ~20 lines, isolated to one task

**Parameters:**
- Minimal parameters, often none
- Use closure to access outer scope (e.g., arrow functions with implicit `this`)
- Example:
  ```javascript
  btn.addEventListener('click', () => {
    // Closure accesses `btn` and window context
  });
  ```

**Return Values:**
- Most functions return nothing (side-effect based)
- DOM manipulation via `classList.add()`, `classList.toggle()`
- Example: No explicit returns in event handlers

## Module Design

**Exports:**
- Not applicable (no modules)
- All code is global scope on same page

**Barrel Files:**
- Not used - single `script.js` for all functionality

**Script Loading:**
- Single `<script src="/script.js"></script>` at end of body
- Executes after DOM fully parsed
- All functionality runs on page load via immediate selectors

## Responsive Design Patterns

**Media Queries:**
- Single breakpoint at `max-width: 768px` (mobile)
- Secondary breakpoint at `max-width: 480px` (small mobile)
- Declared at end of stylesheets
- CSS variable override approach (e.g., `--header-h: 60px` on mobile)

**Fluid Sizing:**
- `clamp()` used for responsive typography: `clamp(36px, 4vw, 52px)`
- Max-width containers at 1140-1200px
- Viewport padding: `padding: 0 24px`

**Mobile-First Considerations:**
- Desktop-first approach (media queries for mobile max-width)
- Hamburger menu hidden by default, shown on mobile
- Dropdowns repositioned for touch (`.mobile-open` state)
- Sticky bottom bar on mobile

## Accessibility

**Patterns:**
- Semantic HTML: `<header>`, `<nav>`, `<section>`, `<button>`
- aria-label on button: `.menu-toggle` has `aria-label="Toggle menu"`
- Screen reader class: `.sr-only` for skip links and hidden text
- Focus states implied through `:focus-within` selector

## Schema & SEO

**Structured Data:**
- JSON-LD blocks embedded in page `<head>`
- LocalBusiness schema on about page
- Opening hours, service areas, ratings included
- Example file: `/about.html` (lines 15-68)

**Meta Tags:**
- All pages have canonical links, descriptions
- Open Graph tags present but not extensively used
- Preconnect hints to Google Fonts

---

*Convention analysis: 2026-04-16*
