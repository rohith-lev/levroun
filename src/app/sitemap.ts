import { MetadataRoute } from 'next';
import { SERVICES, CITIES, DISTRICTS } from '@/data/seo-data';

const BASE_URL = 'https://levroun.com';
const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                  lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/services`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE_URL}/products`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE_URL}/tech-stack`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${BASE_URL}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ];

  // Service × Location pages
  const serviceLocationPages: MetadataRoute.Sitemap = SERVICES.flatMap(service =>
    LOCATIONS.map(location => ({
      url: `${BASE_URL}/services/${service.slug}/${location.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  );

  return [
    ...staticPages,
    ...serviceLocationPages,
  ];
}
