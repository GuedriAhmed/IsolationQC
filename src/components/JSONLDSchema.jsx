import React from 'react';

const JSONLDSchema = ({ type, data }) => {
  let schemaData = {};

  const baseLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Isolation QC",
    "image": "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf",
    "@id": "https://isolationqc.com",
    "url": "https://isolationqc.com",
    "telephone": "+15141234567",
    "email": "contact@isolationqc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Rue de l'Isolation",
      "addressLocality": "Montréal",
      "addressRegion": "QC",
      "postalCode": "H1A 1A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5017,
      "longitude": -73.5673
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  switch (type) {
    case 'LocalBusiness':
      schemaData = { ...baseLocalBusiness, ...data };
      break;
    case 'Organization':
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Isolation QC",
        "url": "https://isolationqc.com",
        "logo": "https://isolationqc.com/favicon.svg",
        "description": "Solutions d'isolation grenier certifiées au Québec",
        "foundingDate": "2014",
        "areaServed": "Québec",
        ...data
      };
      break;
    case 'Service':
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "Isolation QC"
        },
        ...data
      };
      break;
    case 'FAQ':
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      };
      break;
    case 'BreadcrumbList':
      schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url.startsWith('http') ? item.url : `https://isolationqc.com${item.url}`
        }))
      };
      break;
    default:
      schemaData = data;
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default JSONLDSchema;