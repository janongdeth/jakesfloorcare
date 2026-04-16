# Codebase Concerns

**Analysis Date:** 2026-04-16

## Tech Debt

**Inconsistent Logo Implementation:**
- Issue: Homepage (`index.html`) uses a PNG logo at 975KB, while service pages (`services/*.html`, `about.html`, etc.) use text-based logo
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html` (line 739), `C:/Users/janon/websites/jakesfloorcare/images/logo-transparent.png`
- Impact: Larger file size on homepage, inconsistent branding across site, PNG not webp optimized
- Fix approach: Convert PNG to webp (~34KB based on existing logo.webp), or unify to text logo across all pages

**Duplicate CSS in Service Pages:**
- Issue: Each service page contains minified inline CSS (hundreds of bytes per page) instead of extracting shared styles to `style.css`
- Files: `C:/Users/janon/websites/jakesfloorcare/services/epoxy-flooring.html` (line 13-17), all files in `services/` directory
- Impact: Increased page weight, harder to maintain consistency, violates DRY principle
- Fix approach: Extract `.service-overview`, `.process-steps`, `.benefits-grid`, `.related-grid` styles to `style.css` and remove inline `<style>` blocks

**Dual CSS Color Schemes:**
- Issue: `index.html` has inline CSS with blue/gray palette (`--blue: #2a4592`), while `style.css` uses copper/charcoal palette (`--copper: #b86e2d`, `--charcoal: #1e1e1e`)
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html` (lines 13-732), `C:/Users/janon/websites/jakesfloorcare/style.css` (lines 1-637)
- Impact: Homepage looks visually distinct from rest of site, maintenance confusion, brand inconsistency
- Fix approach: Migrate index.html CSS to use style.css variables, refactor both to single cohesive palette

**External Script and Stylesheet References on Home Page:**
- Issue: `index.html` lacks `<link rel="stylesheet" href="/style.css">` and `<script src="/script.js">` tags - all styles are inline; other pages properly reference shared files
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html`
- Impact: No cache benefits for stylesheet/script, home page can't reuse assets loaded from other pages, 44KB of inline CSS that could be shared
- Fix approach: Move inline styles to `style.css` (merge with existing), add script src tags

**Scroll Event Handler Threshold Mismatch:**
- Issue: Index.html uses `scrollY > 50` for header shadow, but `script.js` uses `scrollY > 100`
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html` (line 1101), `C:/Users/janon/websites/jakesfloorcare/script.js` (line 53)
- Impact: Header shadow appears at different scroll positions on homepage vs other pages, inconsistent UX
- Fix approach: Standardize to single threshold (recommend 50px for faster feedback); use `script.js` version for all pages after removing inline script from index.html

**Minified Service Page Styles:**
- Issue: Service pages contain minified CSS (lines 14-16 in epoxy-flooring.html example), making debugging and maintenance difficult
- Files: All files in `C:/Users/janon/websites/jakesfloorcare/services/`
- Impact: Cannot read/edit inline styles without tools, harder to spot issues, difficult to extract to shared CSS
- Fix approach: Extract to `style.css` with proper formatting, remove inline minified blocks

## Image Optimization Issues

**PNG Logo Not Converted to WebP:**
- Problem: Logo at `images/logo-transparent.png` is 976KB while `logo.webp` exists at 34KB but is only used in some places
- Files: `C:/Users/janon/websites/jakesfloorcare/images/logo-transparent.png`
- Current usage: `index.html` footer (line 1030)
- Improvement path: Use webp across all pages; convert PNG to webp if needed for higher quality transparency; update all logo references

**Large Hero Images Not Responsive:**
- Problem: Hero image URLs are hardcoded without srcset or responsive variants
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html` (lines 146, 153), background images: `hero-metallic-epoxy.webp` (396KB), `hero-epoxy-garage.webp` (484KB)
- Cause: Single full-resolution image served to all devices; mobile gets same size as desktop
- Improvement path: Create smaller hero variants (max 800px width), use CSS media queries with different background-image URLs (already done for mobile/desktop but could optimize sizes)

**Service Page Placeholder Images:**
- Problem: Service pages use placeholder text "Epoxy flooring photo" instead of actual images
- Files: `services/epoxy-flooring.html` (line 47), all service pages
- Impact: Lost opportunity for visual engagement and SEO benefit; affects user experience
- Improvement path: Add real service photos to `images/` and update service page `.service-overview-image` divs to use actual images instead of text placeholders

## Fragile Areas

**Navigation Duplication Across 27 HTML Files:**
- Files: Header and footer code duplicated in all 27 HTML pages
- Why fragile: Any navigation change requires manual edits to 27 files; easy to miss pages during updates; no single source of truth
- Safe modification: Use a templating solution (EJS, Nunjucks, static site generator) to include nav/footer from partials
- Test coverage: No automated way to verify nav consistency across pages

**Service Page Navigation Contains Empty Link:**
- Problem: Service dropdown menu has empty link `<li><a href="/services"></a></li>` between "Decorative Concrete" and "Industrial Flooring"
- Files: `services/epoxy-flooring.html` (line 25), likely all service pages
- Impact: Broken link in dropdown, poor user experience
- Safe fix: Remove the empty `<li>` element or verify it should link to "Services overview" page

**Mobile Menu Dropdown Logic Relies on Window Width Check:**
- Issue: `script.js` line 26 checks `if (window.innerWidth <= 768)` but some CSS media queries use different breakpoints (768px, 1024px, 480px)
- Files: `C:/Users/janon/websites/jakesfloorcare/script.js` (line 26)
- Why fragile: If breakpoint changes in CSS, JS won't follow; can cause dropdown to malfunction at certain screen sizes
- Safe modification: Extract breakpoint to shared constant or check computed styles instead of hard-coded pixel value

**Inline Styles in Mobile Menu Toggle:**
- Issue: Mobile menu animation applies styles directly via `cssText` instead of CSS classes
- Files: `C:/Users/janon/websites/jakesfloorcare/script.js` (lines 8-20, inline in index.html lines 1088-1094)
- Why fragile: Hard to override, debug, or test; mixed imperative/declarative code
- Safe modification: Create `.menu-open` classes in CSS, toggle classes instead of applying direct styles

## Cross-File Consistency Issues

**Header Implementation Varies:**
- Index.html header: Logo is image, uses `<img src="images/logo-transparent.png">`
- Service pages: Logo is text, uses `<span class="logo-name">Jake's Floor Care</span>`
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html` (line 739), `services/epoxy-flooring.html` (line 20)
- Risk: Users see different branding on homepage vs service pages; confusing identity

**Stylesheet Loading Inconsistency:**
- Index.html: No external stylesheet link (all CSS inline)
- All other pages: Link to `/style.css` in `<head>`
- Files: `C:/Users/janon/websites/jakesfloorcare/index.html`, others
- Risk: Maintenance nightmare; updating one page's CSS doesn't affect others

## Missing Critical Features

**No Lazy Loading on Images:**
- Problem: All images are loaded immediately, no `loading="lazy"` attribute or IntersectionObserver pattern
- Affects: LCP (Largest Contentful Paint), overall page performance
- Impact: Slower initial page load, wasted bandwidth on images user may not scroll to
- Priority: High - easy fix with major performance impact

**No Metadata on Service Pages:**
- Problem: Service pages may lack individual Open Graph / Twitter Card meta tags
- Files: All service page headers should have `og:title`, `og:description`, `og:image` for social sharing
- Impact: Poor preview when pages are shared on social media
- Priority: Medium

**No 404 Page:**
- Problem: No custom 404.html for broken links
- Impact: Users hit generic Vercel 404, lose brand context
- Priority: Low - typical for Vercel-hosted sites without custom configuration

## Performance Bottlenecks

**No Compression or Minification on HTML:**
- Issue: HTML files are uncompressed with full whitespace; `script.js` is human-readable but service pages have minified inline CSS
- Files: All HTML files, `script.js`
- Cause: Inconsistent build process
- Improvement path: Minify HTML/CSS/JS with build tool (esbuild, Parcel); use Vercel's automatic compression

**CSS Payload Larger Than Necessary:**
- Problem: Between index.html inline (44KB) + style.css (16KB) + service page inline styles, significant CSS is loaded and potentially redundant
- Improvement path: Audit and merge all CSS into single `style.css`, remove duplicate utility classes

**No Critical CSS Extraction:**
- Issue: No attempt to inline critical (above-fold) CSS; all CSS deferred or loaded normally
- Impact: FOUT/FOUC possible on slower connections
- Improvement path: Extract hero + header critical CSS and inline in `<head>`, defer below-fold CSS

## Security Considerations

**Phone Numbers in Plain Text:**
- Risk: Scrapers easily harvest phone numbers for spam/harassment
- Files: Appears in every HTML file (e.g., `index.html` line 780)
- Current mitigation: None; numbers are easily harvestable
- Recommendations: No realistic mitigation for phone numbers (business needs them visible); monitor for abuse; consider honeypot phone field in contact form to catch bots

**No Form Validation / Sanitization Documentation:**
- Risk: Contact form may be vulnerable to XSS or spam injection if backend doesn't validate
- Files: `contact.html` (lines 26-100+)
- Current mitigation: HTML5 `required`, `type="email"`, `type="tel"` attributes (client-side only)
- Recommendations: Verify backend validates all form inputs; sanitize before storing/sending email; implement rate limiting on form submissions

**External Font Loading (Google Fonts):**
- Risk: Fonts loaded from googleapis.com could be intercepted or tracked
- Files: `index.html` (line 11), service pages reference fonts
- Current mitigation: Using `crossorigin` attribute and preconnect
- Recommendations: Monitor Google Fonts privacy; consider self-hosting if privacy is concern (adds build complexity)

## Scaling Limits

**All Pages as Separate HTML Files:**
- Current capacity: 27 HTML files, each with duplicated navigation/footer
- Limit: Beyond ~50 pages, manual maintenance becomes impractical
- Scaling path: Migrate to static site generator (11ty, Hugo, Jekyll) or CMS to manage templates and content
- Impact: Homepage and service pages can scale to 50+ pages without major refactoring

**CSS Shared State via Custom Properties (CSS Variables):**
- Current: Works well for color/spacing systems
- Limit: Not suitable for complex responsive layouts or theme switching
- Improvement: Fine for current scope; no immediate scaling concern

## Test Coverage Gaps

**No Automated Testing:**
- What's not tested: Navigation consistency across pages, image loading, form submission, responsive breakpoints
- Files: No `*.test.js`, `*.spec.js`, or test directory
- Risk: Breaking changes (like changing navigation) aren't caught until manual QA
- Priority: Medium - static site, so lower risk, but worthwhile for future changes

**No Responsive Testing Documentation:**
- What's missing: No documented breakpoints or test cases for mobile/tablet/desktop
- Risk: Subtle layout issues at intermediate breakpoints (e.g., 600px, 900px) might not be caught
- Priority: Low - CSS media queries visible in style.css, but manual testing required

**No Performance Benchmarks:**
- What's missing: No lighthouse scores, CWV metrics, load time targets
- Risk: Regressions in performance go unnoticed
- Priority: Medium - site is relatively fast, but good baseline to maintain

---

*Concerns audit: 2026-04-16*
