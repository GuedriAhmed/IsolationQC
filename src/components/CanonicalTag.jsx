
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl } from '@/utils/getCanonicalUrl';

/**
 * CanonicalTag Component
 * Automatically injects canonical and sitemap links into page <head>
 * Uses current location to generate clean canonical URLs without tracking parameters
 * 
 * @param {string} pathname - Optional custom pathname (defaults to current location)
 */
const CanonicalTag = ({ pathname: customPathname }) => {
  const location = useLocation();
  
  // Use custom pathname if provided, otherwise use current location
  const pathname = customPathname || location.pathname;
  const searchParams = location.search;
  
  // Generate clean canonical URL (removes all tracking and pagination params)
  const canonicalUrl = getCanonicalUrl(pathname, searchParams);
  
  return (
    <Helmet>
      {/* Canonical URL - prevents duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Sitemap reference for search engines */}
      <link rel="sitemap" type="application/xml" href="https://isolationqc.com/sitemap.xml" />
    </Helmet>
  );
};

export default CanonicalTag;
