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
    title: `${title} | Winora Tech Academy`,
    description,
    keywords: keywords?.join(', '),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Winora Tech Academy',
      images: [{ url: ogImage || '/image/hero/hero-1.jpg' }],
      locale: 'en_IN',
      type: 'website'
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage || '/image/hero/hero-1.jpg'] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    url: 'https://winoratech.com',
    logo: 'https://winoratech.com/image/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.pincode,
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS_INFO.coordinates.lat, longitude: BUSINESS_INFO.coordinates.lng },
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    areaServed: ['Erode', 'Tiruppur', 'Coimbatore', 'Salem', 'Tamil Nadu'],
    priceRange: '₹₹'
  };
}

export function generateCourseSchema(course: any, location: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${course.name} in ${location}`,
    description: course.description,
    provider: { '@type': 'Organization', name: BUSINESS_INFO.shortName, sameAs: 'https://winoratech.com' },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      location: { '@type': 'Place', name: `${BUSINESS_INFO.shortName}, ${location}`, address: { '@type': 'PostalAddress', addressLocality: location, addressRegion: 'Tamil Nadu' } }
    },
    educationalLevel: course.level,
    timeRequired: course.duration,
    teaches: course.technologies
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
