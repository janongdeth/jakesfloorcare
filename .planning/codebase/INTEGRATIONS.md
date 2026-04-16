# External Integrations

**Analysis Date:** 2026-04-16

## APIs & External Services

**Google Fonts:**
- Service: Google Fonts CDN
- What it's used for: Typography — provides four web fonts used throughout the site
  - `Sora` (weights: 400, 500, 600, 700, 800)
  - `Outfit` (weights: 300, 400, 500, 600)
  - `Barlow Condensed` (weights: 400, 500, 600, 700)
  - `Source Serif 4` (weights: 400, 600, italics)
- URL: `https://fonts.googleapis.com` and `https://fonts.gstatic.com`
- Implementation: Preconnected in all HTML page `<head>` sections with `<link rel="preconnect">`

## Data Storage

**Databases:**
- None — static HTML site with no data persistence

**File Storage:**
- Local filesystem only
  - Images stored in `C:/Users/janon/websites/jakesfloorcare/images/` directory (WebP format)
  - All files served statically from Vercel

**Caching:**
- Vercel's built-in CDN caching for static assets

## Authentication & Identity

**Auth Provider:**
- None — public site with no authentication or user accounts

## Monitoring & Observability

**Error Tracking:**
- None detected

**Logs:**
- Vercel platform logs only (standard web hosting logs)

**Analytics:**
- Not detected in codebase — no Google Analytics, Plausible, Mixpanel, or similar tracking

## CI/CD & Deployment

**Hosting:**
- Vercel (static site hosting)

**CI Pipeline:**
- Not explicitly configured in visible files
- Vercel auto-deploys from GitHub on git push (per deployment platform setup)

**Deployment Config:**
- `C:/Users/janon/websites/jakesfloorcare/vercel.json`
  - `cleanUrls: true` — removes `.html` extensions from URLs
  - `trailingSlash: false` — no trailing slashes on URLs

## Environment Configuration

**Required env vars:**
- None — site requires no environment variables

**Secrets location:**
- No secrets in use

## Webhooks & Callbacks

**Incoming:**
- Contact form (line 291 in `contact.html`): form action points to `#` (not connected)
  - Form fields: name, phone, email, service selection, message
  - Currently a placeholder form with no backend submission

**Outgoing:**
- None detected

## Third-Party Integrations Summary

**Present:**
- Google Fonts API for typography

**Not Present:**
- No form submission handler (webhook/API backend needed for quote requests)
- No chat widget (GHL, Intercom, etc.)
- No analytics/tracking
- No CRM integration
- No email service (Mailgun, SendGrid, etc.)
- No payment processing

## Notes

The contact form at `C:/Users/janon/websites/jakesfloorcare/contact.html` (line 291) is currently a frontend-only form with no backend handling. To make it functional, it would need:
1. A form submission handler (backend API, Formspree, Netlify Forms, etc.)
2. Email notification system to deliver quote requests to Jake's Floor Care
3. Optional: CRM integration for lead tracking

---

*Integration audit: 2026-04-16*
