import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://levroun.com'),
  title: {
    default: 'LEVROUN INDIA | Custom Software, AI Solutions & Digital Products',
    template: '%s | LEVROUN INDIA'
  },
  description:
    'LEVROUN INDIA — Building custom software, AI solutions, and in-house digital products for startups and enterprises. Based in Erode, Tamil Nadu. Building What\'s Next.',
  keywords: [
    'LEVROUN INDIA',
    'Levroun',
    'Custom Software Development Erode',
    'IT Company Erode',
    'Software Company Tamil Nadu',
    'AI Automation',
    'Cloud DevOps',
    'Web Development',
    'Mobile App Development',
    'SmartOps AI',
    'AI Solutions India',
    'SaaS Development Tamil Nadu',
    'Enterprise Software India',
    'Building What\'s Next'
  ],
  authors: [{ name: 'LEVROUN INDIA' }],
  creator: 'LEVROUN INDIA',
  publisher: 'LEVROUN INDIA',
  alternates: { canonical: 'https://levroun.com' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://levroun.com',
    siteName: 'LEVROUN INDIA',
    title: 'LEVROUN INDIA | Custom Software, AI & Digital Products',
    description:
      'Building What\'s Next. LEVROUN INDIA crafts custom software, AI automation, cloud infrastructure, and scalable digital products for ambitious businesses.',
    images: [{ url: '/image/levroun-logo.png', width: 1200, height: 630, alt: 'LEVROUN INDIA' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEVROUN INDIA | Building What\'s Next',
    description: 'Custom software, AI solutions, and digital products for startups and enterprises. Erode, Tamil Nadu.',
    images: ['/image/levroun-logo.png']
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
  category: 'technology',
  classification: 'IT & Software Engineering',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LEVROUN INDIA',
    alternateName: ['Levroun', 'Levroun India'],
    url: 'https://levroun.com',
    logo: 'https://levroun.com/image/levroun-logo.png',
    image: 'https://levroun.com/image/levroun-logo.png',
    description:
      'LEVROUN INDIA — Building custom software, AI solutions, and in-house digital products for startups and enterprises. Based in Erode, Tamil Nadu. Building What\'s Next.',
    foundingDate: '2025',
    legalName: 'LEVROUN INDIA',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Erode',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-89398-06110',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil']
      }
    ],
    email: 'hello@levroun.com',
    telephone: '+91 8939806110',
    sameAs: [
      'https://levroun.com'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LEVROUN INDIA',
    url: 'https://levroun.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://levroun.com/services?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LEVROUN INDIA',
    image: 'https://levroun.com/image/levroun-logo.png',
    url: 'https://levroun.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30'
      }
    ],
    telephone: '+91 8939806110',
    email: 'hello@levroun.com',
    priceRange: '₹₹₹'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Erode, Tamil Nadu" />
        <meta name="geo.position" content="11.3410;77.7172" />
        <meta name="ICBM" content="11.3410, 77.7172" />

        {/* Language & mobile tags */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="language" content="English" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="revisit-after" content="3 days" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <MainLayout>{children}</MainLayout>

        {process.env.NEXT_PUBLIC_GTM_ID &&
          process.env.NEXT_PUBLIC_GTM_ID !== 'GTM-XXXXXXX' && (
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
            </Script>
          )}
      </body>
    </html>
  );
}
