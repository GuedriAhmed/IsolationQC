export const generateLocalBusinessSchema = (city, url) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `Isolation QC - ${city}`,
  "image": "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf?w=1200&q=80",
  "@id": `${url}#localbusiness`,
  "url": url,
  "telephone": "+15141234567",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": city,
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "46.8139",
    "longitude": "-71.2080"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/isolationqc"
  ]
});

export const generateServiceSchema = (city, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": `Services d'isolation à ${city}`,
  "provider": {
    "@type": "LocalBusiness",
    "name": `Isolation QC - ${city}`
  },
  "areaServed": {
    "@type": "City",
    "name": city
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services d'isolation",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Isolation de grenier"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Isolation d'entretoit"
        }
      }
    ]
  }
});

export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});