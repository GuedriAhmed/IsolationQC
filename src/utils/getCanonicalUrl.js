
/**
 * Removes tracking and pagination parameters from URL to generate clean canonical URLs
 * @param {string} pathname - The URL pathname (e.g., '/services')
 * @param {URLSearchParams|string} searchParams - Optional search parameters to filter
 * @returns {string} - Clean canonical URL without tracking/pagination parameters
 */
export function getCanonicalUrl(pathname, searchParams = '') {
  const baseUrl = 'https://isolationqc.com';
  
  // Remove trailing slash for consistency (except for homepage)
  const cleanPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
  
  // If no search params, return clean path immediately
  if (!searchParams) {
    return `${baseUrl}${cleanPath}`;
  }
  
  // Parse search params if string
  const params = typeof searchParams === 'string' 
    ? new URLSearchParams(searchParams) 
    : searchParams;
  
  // List of tracking and pagination parameters to remove
  const paramsToRemove = [
    // UTM tracking parameters
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'utm_id',
    
    // Click tracking parameters
    'fbclid',      // Facebook click ID
    'gclid',       // Google click ID
    'msclkid',     // Microsoft click ID
    'dclid',       // DoubleClick ID
    'gbraid',      // Google Ads iOS 14.5+
    'wbraid',      // Google Ads iOS 14.5+
    
    // Social media tracking
    'ref',
    'referrer',
    'source',
    
    // Analytics and session tracking
    '_ga',
    '_gid',
    'mc_cid',
    'mc_eid',
    
    // Pagination and filtering (for canonical purposes, we want the base URL)
    'page',
    'p',
    'offset',
    'limit',
    'sort',
    'order',
    'filter',
    'search',
    'q',
    'query'
  ];
  
  // Create new URLSearchParams with tracking params removed
  const filteredParams = new URLSearchParams();
  
  for (const [key, value] of params.entries()) {
    // Only keep params that are not in the removal list
    if (!paramsToRemove.includes(key.toLowerCase())) {
      filteredParams.append(key, value);
    }
  }
  
  // If filtered params exist, append them to canonical URL
  const queryString = filteredParams.toString();
  const fullPath = queryString ? `${cleanPath}?${queryString}` : cleanPath;
  
  return `${baseUrl}${fullPath}`;
}

/**
 * Extracts clean pathname without query parameters or hash
 * @param {string} fullPath - Full URL path including query params
 * @returns {string} - Clean pathname
 */
export function getCleanPathname(fullPath) {
  // Remove query parameters and hash
  return fullPath.split('?')[0].split('#')[0];
}
