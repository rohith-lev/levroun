import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://winoratech.com'),
  title: {
    default: 'WINORA TECH ACADEMY | Best Software Training Institute in Tamil Nadu',
    template: '%s | Winora Tech Academy'
  },
  description: 'Leading software training institute in Perundurai, Erode, Tamil Nadu. Learn Full Stack, AI/ML, Cloud, UI/UX with 100% placement. Courses in Python, Java, React, Data Science. 5000+ students placed.',
  keywords: ['software training institute Tamil Nadu', 'IT courses Erode', 'best training center Perundurai', 'full stack course Coimbatore', 'placement training Tiruppur', 'AI ML training Salem', 'coding classes Tamil Nadu', 'internship training Erode'],
  authors: [{ name: 'Winora Tech Academy' }],
  creator: 'Winora Tech Academy',
  publisher: 'Winora Infotech Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://winoratech.com',
    siteName: 'Winora Tech Academy',
    title: 'Best Software Training Institute in Tamil Nadu | Winora Tech Academy',
    description: 'Transform your career with industry-leading IT training. 100% placement support, live projects, expert trainers. Serving Erode, Tiruppur, Coimbatore, Salem.',
    images: [{ url: '/image/hero/hero-1.jpg', width: 1200, height: 630, alt: 'Winora Tech Academy' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winora Tech Academy | Best IT Training Institute',
    description: 'Master Full Stack, AI/ML, Cloud with 100% placement support',
    images: ['/image/hero/hero-1.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'WINORA TECH ACADEMY AND INFOTECH PRIVATE LIMITED',
    alternateName: 'Winora Tech Academy',
    url: 'https://winoratech.com',
    logo: 'https://winoratech.com/image/logo.png',
    description: 'Leading software training institute and IT services company in Tamil Nadu',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'TVR Corner, 54/7, Old Bus Stand Road',
      addressLocality: 'Perundurai',
      addressRegion: 'Tamil Nadu',
      postalCode: '638052',
      addressCountry: 'IN'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 11.2753, longitude: 77.5877 },
    areaServed: ['Erode', 'Tiruppur', 'Coimbatore', 'Salem', 'Namakkal', 'Tamil Nadu'],
    sameAs: [
      'https://facebook.com/winoratech',
      'https://twitter.com/winoratech',
      'https://linkedin.com/company/winoratech',
      'https://instagram.com/winoratech'
    ]
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
