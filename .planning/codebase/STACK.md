# Technology Stack

**Analysis Date:** 2026-04-16

## Languages

**Primary:**
- HTML5 - Markup for all pages (`*.html`)
- CSS3 - Styling, embedded in `<style>` tags and `style.css`
- JavaScript (vanilla) - Client-side interactions in `script.js`

**Secondary:**
- JSON-LD - Schema markup for SEO in `<script type="application/ld+json">` tags

## Runtime

**Environment:**
- Browser (client-side only, no backend runtime)

**Package Manager:**
- Not applicable — no Node.js, npm, or Python dependency management

**Lockfile:**
- Not applicable

## Frameworks

**Core:**
- None — pure HTML, CSS, JavaScript (no framework dependencies)

**CSS:**
- No CSS framework — custom CSS in `style.css` and inline `<style>` tags

**JavaScript:**
- Vanilla JavaScript only — no jQuery, React, Vue, or other libraries

## Key Dependencies

**Critical:**
- Google Fonts API (`https://fonts.googleapis.com`) - Provides `Sora`, `Outfit`, `Barlow Condensed`, and `Source Serif 4` typefaces
  - Loaded via `<link>` with preconnect optimization

**Infrastructure:**
- None — no backend servers, databases, or APIs consumed

## Configuration

**Environment:**
- No `.env` file or environment variable configuration required

**Build:**
- No build step or tooling — static HTML served directly
- `vercel.json` configuration: enables clean URLs (`cleanUrls: true`, `trailingSlash: false`)

**Deploy:**
- Deployed to Vercel as a static site
- Configuration: `C:/Users/janon/websites/jakesfloorcare/vercel.json`

## Platform Requirements

**Development:**
- Static HTML files
- A text editor or IDE for HTML/CSS/JS editing
- No build step required

**Production:**
- Vercel static hosting
- HTTP/2 support for image optimization

---

*Stack analysis: 2026-04-16*
