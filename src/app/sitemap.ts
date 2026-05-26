import { MetadataRoute } from 'next';
import { courses } from '@/data/courses';
import { SERVICES, CITIES, DISTRICTS } from '@/data/seo-data';

const BASE_URL = 'https://winoratech.com';
const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/programs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
  ];

  LOCATIONS.forEach(location => {
    const slug = location.toLowerCase().replace(/\s+/g, '-');
    sitemap.push({ url: `${BASE_URL}/locations/${slug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 });
  });

  courses.forEach(course => {
    LOCATIONS.forEach(location => {
      const locSlug = location.toLowerCase().replace(/\s+/g, '-');
      sitemap.push({ url: `${BASE_URL}/courses/${course.id}/${locSlug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 });
    });
  });

  SERVICES.forEach(service => {
    LOCATIONS.forEach(location => {
      const locSlug = location.toLowerCase().replace(/\s+/g, '-');
      sitemap.push({ url: `${BASE_URL}/services/${service.slug}/${locSlug}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
    });
  });

  return sitemap;
}
