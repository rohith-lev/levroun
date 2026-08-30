import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Inzovate Technologies | Enterprise IT Solutions & AI Platforms',
  description: 'Contact Inzovate Technologies Pvt. Ltd. Call +91 93420 08797 | +91 93637 57078. Email: info@inzovate-technologies.com.',
  keywords: 'Inzovate contact, Inzovate Technologies contact, Inzovate phone number, Inzovate address, contact Inzovate Technologies, Inzovate email',
  alternates: { canonical: 'https://inzovate.com/contact' },
  openGraph: {
    title: 'Contact Inzovate Technologies | Enterprise IT & AI Solutions',
    description: 'Contact Inzovate Technologies Pvt. Ltd. Call +91 93420 08797 | +91 93637 57078.',
    url: 'https://inzovate.com/contact',
    siteName: 'Inzovate Technologies',
    images: [{ url: '/image/hero/hero-1.jpg', width: 1200, height: 630, alt: 'Contact Inzovate Technologies' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Contact Inzovate Technologies', description: 'Call +91 93420 08797 | +91 93637 57078 - Inzovate Technologies' }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
