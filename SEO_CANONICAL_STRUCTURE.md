
# SEO Canonical URL Structure Documentation

**Last Updated**: 2026-04-27  
**Project**: Isolation QC  
**Domain**: https://isolationqc.com

---

## Overview

This document outlines the canonical URL implementation strategy for the Isolation QC website. Canonical tags prevent duplicate content issues by telling search engines which URL is the "master" version when multiple URLs contain similar or identical content.

---

## Implementation Strategy

### Self-Canonical Approach
Every page on the site uses a **self-canonical** strategy, meaning each page points to its own clean URL as the canonical version. This ensures:

1. **Tracking Parameter Removal**: All UTM, Facebook, Google Ads, and other tracking parameters are stripped from canonical URLs
2. **Pagination & Filtering Removal**: Query parameters for pagination, sorting, and filtering are removed to point to the base URL
3. **Consistency**: All variations of a URL (with different tracking codes) consolidate to a single canonical URL

### Automatic Injection

The `<CanonicalTag />` component automatically:
- Detects the current page pathname using React Router's `useLocation()`
- Removes all tracking and pagination query parameters
- Injects `<link rel="canonical" href="..." />` into the `<head>` tag
- Adds `<link rel="sitemap" href="..." />` reference for search engines

---

## Technical Implementation

### Components & Utilities

#### 1. `src/utils/getCanonicalUrl.js`
Utility function that generates clean canonical URLs.

**Removed Parameters:**
- **UTM Tracking**: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id`
- **Click Tracking**: `fbclid`, `gclid`, `msclkid`, `dclid`, `gbraid`, `wbraid`
- **Social Tracking**: `ref`, `referrer`, `source`
- **Analytics**: `_ga`, `_gid`, `mc_cid`, `mc_eid`
- **Pagination/Filtering**: `page`, `p`, `offset`, `limit`, `sort`, `order`, `filter`, `search`, `q`, `query`

**Usage Example:**
