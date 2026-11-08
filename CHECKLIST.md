# SEO Optimization Verification Checklist

## 1. On-Page SEO
- [x] Titles optimized (50-60 chars) across all pages.
- [x] Meta descriptions optimized (120-155 chars) with target keywords.
- [x] Unique H1 for every page.
- [x] H2 structure implemented (3-5 per page) for content hierarchy.
- [x] Canonical tags added to all pages pointing to absolute URLs.
- [x] Robots meta tags (`index, follow`) properly implemented.
- [x] Alt texts optimized with relevant keywords ("isolation grenier Québec", "entrepreneur isolation Montréal", etc.).

## 2. Technical SEO & Schema
- [x] `sitemap.xml` generated with correct priorities, changefreq, and lastmod.
- [x] `robots.txt` created and mapped to sitemap.
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) included dynamically in `SEOHead`.
- [x] Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) implemented.
- [x] JSON-LD LocalBusiness schema added with company info.
- [x] JSON-LD Service schema implemented on service pages.
- [x] JSON-LD FAQPage schema implemented for accordion sections.
- [x] JSON-LD BreadcrumbList schema added for LocalCity pages.

## 3. Core Web Vitals & Performance
- [x] Image format updated to WebP via Unsplash APIs (`&fm=webp&auto=format`).
- [x] Explicit `width` and `height` properties added to images where applicable to prevent CLS.
- [x] `loading="lazy"` applied to non-critical images.
- [x] Preconnect and DNS-prefetch added for Google Fonts in `SEOHead`.
- [x] Font loading optimized (`font-display: swap`).
- [x] Code splitting implemented using `React.lazy()` and `<Suspense>` in `App.jsx` for non-critical pages.
- [x] Critical hero images preloaded via `<link rel="preload" as="image">` in `SEOHead`.