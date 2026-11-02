---
name: Launch checklist
about: Pre-launch checks to complete before going to production
title: "Launch checklist"
labels: launch
assignees: ''
---

<!-- Tick items as you go. Don't close this issue until every box is checked or explicitly marked N/A with a reason. -->

## Metadata & SEO

- [ ] Favicon added (`favicon.ico` + SVG).
- [ ] `<meta name="theme-color">` added.
- [ ] `<html lang="…">` is set correctly.
- [ ] Every route has a unique `<title>` and `<meta name="description">`.
- [ ] Every route has a canonical URL: `<link rel="canonical" href="…">`.
- [ ] Open Graph and Twitter tags are added (globally in `index.html` or per route). Use absolute URLs for `og:url` and `og:image`:

  ```html
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SITE_NAME" />
  <meta property="og:title" content="TITLE" />
  <meta property="og:description" content="DESCRIPTION" />
  <meta property="og:url" content="https://example.com/page" />
  <meta property="og:image" content="https://example.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="IMAGE_ALT_TEXT" />
  <meta name="twitter:card" content="summary_large_image" />
  ```
  
- [ ] Social previews verified with a preview tool (e.g. opengraph.xyz, LinkedIn Post Inspector).
- [ ] `robots.txt` and `sitemap.xml` are in place.
- [ ] `<meta name="robots" content="noindex">` is added to routes that should not be indexed for search.
- [ ] Production is indexable (no leftover `noindex`), and staging is **not** indexable.
- [ ] `apple-touch-icon` (180×180) added - only needed for site which the users might "install".
- [ ] `site.webmanifest` added - only needed for site which the users might "install".

## Functionality & QA

- [ ] All routes load, including on direct visit or refresh (host has SPA fallback routing).
- [ ] A custom 404 page exists, and React error boundaries catch runtime errors.
- [ ] No errors or warnings in the browser console.
- [ ] All forms, links and external integrations work in production.
- [ ] Design QA is complete and signed off.
- [ ] The layout works on all viewport widths from 360px up. At minimum, check 360, 768, 1024 and 1440px.
- [ ] Tested in the latest Chrome, Firefox, Edge and Safari.

## Performance

- [ ] Initial JS on first page load is ≤ 175 KB gzipped.
- [ ] Main CSS file is ≤ 50 KB gzipped.
- [ ] Images are optimised (WebP/AVIF, correctly sized, ≤ 75 KB each, lazy-loaded below the fold).
- [ ] Fonts are subset and preloaded, with `font-display: swap`.
- [ ] Lighthouse scores (run in incognito against production):

  | Category       | Desktop | Mobile |
  |----------------|---------|--------|
  | Performance    | ≥ 90    | ≥ 70   |
  | Accessibility  | ≥ 90    | ≥ 90   |
  | Best Practices | ≥ 90    | ≥ 90   |
  | SEO            | ≥ 90    | ≥ 90   |

## Security & infrastructure

- [ ] `npm audit` shows no high or critical vulnerabilities.
- [ ] `npm audit --omit=dev` shows no vulnerabilities.
- [ ] No secrets or private API keys in the client bundle.

## Analytics & privacy

- [ ] Google Analytics and/or Microsoft Clarity are installed and events are confirmed arriving from production.
