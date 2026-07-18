import React from "react";

type JSONValue =
  | string
  | number
  | boolean
  | null
  | { [x: string]: JSONValue }
  | JSONValue[];

interface JsonLdProps {
  data: Record<string, JSONValue> | JSONValue;
}

function safeJsonSerialize(value: JSONValue): string {
  return JSON.stringify(value)
    .replace(/&/g, "\\u0026")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e");
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonSerialize(data) }}
    />
  );
}

// Pre-built schemas generator helpers
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Teebot",
    "url": "https://www.iteebot.com",
    "logo": "https://www.iteebot.com/logo.png",
    "sameAs": [
      "https://github.com/ateebnoone",
      "https://www.linkedin.com/company/teebot"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "hello@iteebot.com",
      "availableLanguage": ["English", "Urdu"]
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Teebot",
    "image": "https://www.iteebot.com/logo.png",
    "@id": "https://www.iteebot.com/#business",
    "url": "https://www.iteebot.com",
    "telephone": "",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8607,
      "longitude": 67.0011
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
      "opens": "09:00",
      "closes": "18:00"
    }
  };
}

export function getServiceSchema(
  name: string,
  description: string,
  url: string,
  providerName: string = "Teebot"
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": providerName,
      "url": "https://www.iteebot.com"
    },
    "url": url
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  authorName = "Ateeb Noone"
}: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": [imageUrl],
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://www.linkedin.com/in/ateebnoone"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Teebot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iteebot.com/logo.png"
      }
    },
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}
