# Deployment Instructions & SEO Verification

## Post-Deployment Checklist

### 1. Google Search Console
- Go to Google Search Console (GSC).
- Navigate to **Sitemaps** in the left sidebar.
- Submit the new sitemap: `https://isolationqc.com/sitemap.xml`.
- Check for any indexation errors.

### 2. Robots.txt Verification
- Visit `https://isolationqc.com/robots.txt` in your browser.
- Ensure the file is accessible and properly formatted.
- Test it using the GSC Robots.txt Tester tool.

### 3. Indexation Check
- After a few days, run `site:isolationqc.com` in Google Search.
- Verify that the title tags and meta descriptions match the newly optimized versions.

### 4. Performance Auditing
- Run the site through **Google PageSpeed Insights** (https://pagespeed.web.dev/).
- Verify that Core Web Vitals metrics meet the targets:
  - **LCP (Largest Contentful Paint)** < 2.5s
  - **INP (Interaction to Next Paint)** < 100ms
  - **CLS (Cumulative Layout Shift)** < 0.1
- Check image optimization warnings (WebP, explicit width/height).

### 5. Schema Validation
- Use the **Google Rich Results Test** (https://search.google.com/test/rich-results).
- Validate the LocalBusiness, Service, FAQ, and BreadcrumbList schemas.