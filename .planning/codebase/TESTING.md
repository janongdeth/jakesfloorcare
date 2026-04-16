# Testing Patterns

**Analysis Date:** 2026-04-16

## Test Framework

**Status:** Not detected

**Runtime:**
- No test framework configured (Jest, Vitest, Playwright, etc.)
- No test configuration files found (`jest.config.js`, `vitest.config.js`, etc.)
- No npm scripts for testing in package.json (no package.json exists)

**Coverage Tool:**
- No coverage reporting configured

## Testing Approach

**Current State:**
- This is a static HTML website with vanilla JavaScript
- No automated testing infrastructure in place
- Testing, if any, is manual (browser-based)

## Manual Testing Strategy

**JavaScript Functionality:**

1. **Mobile Menu Toggle** (`script.js` lines 1-21)
   - Test in browser: Click hamburger on mobile
   - Verify: Nav slides in from right, hamburger animates to X
   - Verify: Second click closes menu, hamburger returns to normal

2. **Dropdown Toggles** (`script.js` lines 23-37)
   - Desktop: Hover over "Services" or "Service Areas" triggers dropdown
   - Mobile (≤768px): Click button to toggle dropdown visibility
   - Verify: Arrow icon rotates appropriately

3. **Scroll Reveal** (`script.js` lines 39-48)
   - Test: Load page, scroll down
   - Verify: Elements with `.reveal` class fade in and slide up as they enter viewport
   - Used on all service pages for staggered animations

4. **Header Shadow on Scroll** (`script.js` lines 50-58)
   - Test: Load page, scroll past 100px
   - Verify: Header shadow appears below site header
   - Verify: Shadow removed when scrolling back up

**Responsive Behavior:**

- Viewport sizes to test:
  - Desktop: 1200px+ (full nav, dropdowns, desktop layout)
  - Tablet: 768px-1199px (hamburger appears, sticky bottom bar)
  - Mobile: 375-667px (full mobile experience, touch targets)

- Test files: `index.html`, `/about.html`, `/services/epoxy-flooring.html`, `/contact.html`

**Cross-Browser Testing:**

- Modern browsers: Chrome, Firefox, Safari, Edge
- Mobile browsers: iOS Safari, Chrome Mobile
- Features to verify:
  - CSS custom properties support
  - IntersectionObserver API (scroll reveal)
  - CSS Grid and Flexbox layouts
  - Form input styling consistency

**Form Testing** (`contact.html`):

- No client-side validation detected
- Form submission likely handled by form service (GHL or similar)
- Manual test: Fill form, verify all fields accept input
- Verify: Submit button functions (check network tab for form submission)

## Testing Gaps

**High Priority:**
- No automated testing for JavaScript functionality
- No visual regression tests
- No accessibility testing (WCAG compliance)
- No performance testing (Lighthouse, Core Web Vitals)

**Medium Priority:**
- No cross-browser compatibility tests
- No responsive design tests
- No form validation tests
- No broken link detection

**Implementation Recommendations:**

1. **Quick Wins (Manual):**
   - Create manual testing checklist in project documentation
   - Test checklist for each feature:
     - Mobile menu toggle
     - Dropdown navigation (hover and click)
     - Scroll reveals
     - Form submission
     - All service area links
     - All service page links

2. **Automated Testing (if needed):**
   - Consider Playwright for E2E tests (simple click/nav tests)
   - Consider Lighthouse CI for performance monitoring
   - Consider Pa11y for accessibility baseline

3. **Visual Regression (if desired):**
   - Consider Percy or Chromatic
   - Test critical pages: home, service pages, contact

## Critical Flows to Test Manually

**User Journey 1: Find Service**
1. Load homepage
2. Scroll reveal animations trigger
3. Click service category in nav dropdown
4. Navigate to service detail page
5. Verify page content loads, schema is valid

**User Journey 2: Get Quote**
1. Click "Get Free Quote" button from any page
2. Land on `/contact.html`
3. Fill form with all required fields
4. Submit form
5. Verify submission works (success message or redirect)

**User Journey 3: Find Service Area**
1. Click "Service Areas" in nav
2. Select specific city
3. Land on service area page (e.g., `/service-areas/fort-wayne.html`)
4. Verify relevant content displays

**User Journey 4: Mobile Experience**
1. Open site on mobile device (or use DevTools)
2. Verify header is compact
3. Click hamburger to open menu
4. Navigate to different pages
5. Close menu after navigation
6. Verify sticky bottom bar appears with Call/Quote buttons

## What Would Be Tested (If Framework Existed)

**Unit Test Example (Menu Toggle):**
```javascript
describe('Menu Toggle', () => {
  it('should toggle nav open class when clicked', () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('mainNav');
    
    toggle.click();
    expect(nav.classList.contains('open')).toBe(true);
    
    toggle.click();
    expect(nav.classList.contains('open')).toBe(false);
  });

  it('should animate hamburger icon on toggle', () => {
    const toggle = document.querySelector('.menu-toggle');
    const spans = toggle.querySelectorAll('span');
    
    toggle.click();
    expect(spans[0].style.transform).toBe('rotate(45deg)');
    expect(spans[1].style.opacity).toBe('0');
  });
});
```

**Integration Test Example (Scroll Reveal):**
```javascript
describe('Scroll Reveal', () => {
  it('should add visible class when element enters viewport', () => {
    const element = document.querySelector('.reveal');
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.classList.add('visible');
      }
    });
    
    observer.observe(element);
    // Simulate intersection
    expect(element.classList.contains('visible')).toBe(true);
  });
});
```

## Performance Considerations

**Current Optimizations:**
- Passive event listeners on scroll: `{ passive: true }`
- CSS transitions for smooth animations (GPU accelerated)
- IntersectionObserver for efficient scroll reveal (not polling)
- CSS custom properties reduce code repetition

**Potential Issues:**
- No lazy loading for images (should be added)
- No minification of inline CSS (recommend for production)
- No service worker for offline support
- No caching headers configured (Vercel defaults should suffice)

## Documentation Needed

Before adding comprehensive testing, document:
1. Expected behavior for each interactive feature
2. Accessibility requirements (WCAG level)
3. Browser support policy
4. Performance targets (Core Web Vitals thresholds)
5. Form submission success/error flows

---

*Testing analysis: 2026-04-16*
