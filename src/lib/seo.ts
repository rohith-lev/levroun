import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/seo-data';

export function generateMetadata(config: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}): Metadata {
  const { title, description, keywords, canonical, ogImage } = config;
  return {
    title: `${title} | LEVROUN INDIA`,
    description,
    keywords: keywords?.join(', '),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'LEVROUN INDIA',
      images: [{ url: ogImage || '/image/levroun-logo.png' }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage || '/image/levroun-logo.png'] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    identifier: BUSINESS_INFO.cin,
    url: BUSINESS_INFO.website,
    logo: `${BUSINESS_INFO.website}/image/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.addressPrimary,
      addressLocality: BUSINESS_INFO.cityPrimary,
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.pincodePrimary,
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS_INFO.coordinates.lat, longitude: BUSINESS_INFO.coordinates.lng },
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    areaServed: ['Bhavani', 'Tiruchengode', 'Erode', 'Tiruppur', 'Coimbatore', 'Salem', 'Tamil Nadu', 'India'],
    priceRange: '$$'
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url }))
  };
}

export function generateServiceSchema(service: any, location: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${location}`,
    provider: { '@type': 'Organization', name: BUSINESS_INFO.shortName },
    areaServed: { '@type': 'City', name: location },
    serviceType: service.name
  };
}
