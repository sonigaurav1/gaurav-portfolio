import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://gauravsonidev.com';
const authorName = 'Gaurav Soni';
const pageTitle = 'Gaurav Soni - Frontend Engineer & Next.js Specialist';
const pageDescription =
  'Gaurav Soni is a frontend developer specializing in the React and Next.js ecosystem. Building fast, scalable web applications, e-commerce storefronts, and SaaS dashboards.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${authorName}`,
  },
  description: pageDescription,
  applicationName: 'Gaurav Soni Portfolio',
  authors: [{ name: authorName, url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Gaurav Soni',
    'Frontend Developer',
    'Next.js Specialist',
    'React Developer',
    'TypeScript Engineer',
    'Freelance Frontend Engineer',
    'D2C E-Commerce Developer',
    'SaaS Dashboard Developer',
    'Full-Stack JavaScript',
    'Web Performance Optimization',
    'Remote Frontend Engineer',
  ],
  creator: authorName,
  publisher: authorName,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'Gaurav Soni Portfolio',
    firstName: 'Gaurav',
    lastName: 'Soni',
    gender: 'male',
    images: [
      {
        url: `${siteUrl}/images/gaurav-portrait.webp`,
        width: 1200,
        height: 630,
        alt: 'Gaurav Soni - Frontend Engineer & Next.js Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    creator: '@gauravsonidev',
    images: [`${siteUrl}/images/gaurav-portrait.webp`],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Gaurav Soni Portfolio',
      description: pageDescription,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: pageTitle,
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      description: pageDescription,
      inLanguage: 'en-US',
      mainEntity: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Gaurav Soni',
      givenName: 'Gaurav',
      familyName: 'Soni',
      jobTitle: 'Frontend Engineer & Next.js Specialist',
      description:
        'Frontend engineer specializing in the React and Next.js ecosystem, building fast, scalable web applications that drive business growth.',
      url: siteUrl,
      email: 'mailto:gauravsoni7763@gmail.com',
      image: `${siteUrl}/images/gaurav-portrait.webp`,
      sameAs: [
        'https://www.linkedin.com/in/gaurav-web-dev/',
        'https://github.com/sonigaurav1',
        'https://wa.me/9779705470563',
        siteUrl,
      ],
      knowsAbout: [
        {
          '@type': 'DefinedTerm',
          name: 'Next.js',
          sameAs: 'https://www.wikidata.org/wiki/Q110852973',
        },
        {
          '@type': 'DefinedTerm',
          name: 'React',
          sameAs: 'https://www.wikidata.org/wiki/Q19842880',
        },
        {
          '@type': 'DefinedTerm',
          name: 'TypeScript',
          sameAs: 'https://www.wikidata.org/wiki/Q21201',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Tailwind CSS',
          sameAs: 'https://www.wikidata.org/wiki/Q104840509',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Frontend Web Development',
          sameAs: 'https://www.wikidata.org/wiki/Q1129466',
        },
        'Single Page Applications',
        'Multi-Tenant SaaS Architecture',
        'E-Commerce Conversion Optimization',
        'Web Performance & Core Web Vitals',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Frontend Developer',
        occupationLocation: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide Remote (EMEA & US Timezones)',
        },
        skills: 'Next.js, React, TypeScript, Tailwind CSS, REST APIs, Performance Optimization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://bizos-demo.pages.dev/#application',
      name: 'Nirdeep Arts Cloud OS',
      operatingSystem: 'All Web Browsers',
      applicationCategory: 'BusinessApplication',
      url: 'https://bizos-demo.pages.dev/',
      description:
        'Dual-shop retail fabrication ERP, real-time POS & automated accounting engine deployed across active fabrication locations in Kathmandu with Convex sync, automated dimension math, dual BS/AD calendar, and WhatsApp invoicing. Interactive demo sandbox available.',
      author: {
        '@id': `${siteUrl}/#person`,
      },
      creator: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://digitaldukan.vercel.app/#application',
      name: 'Invento (DigitalDukan)',
      operatingSystem: 'All Web Browsers',
      applicationCategory: 'BusinessApplication',
      url: 'https://digitaldukan.vercel.app/',
      description:
        'Full-stack multi-tenant inventory & analytics management SaaS deployed for consumer electronics & home appliances retail (TV, refrigerator, washing machines) to manage real-time stock and supplier data.',
      author: {
        '@id': `${siteUrl}/#person`,
      },
      creator: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://puremelt.vercel.app/#application',
      name: 'Penowa',
      operatingSystem: 'All Web Browsers',
      applicationCategory: 'ShoppingApplication',
      url: 'https://puremelt.vercel.app',
      description:
        'Conversion-optimized Direct-to-Consumer (D2C) organic peanut butter storefront built for an Indian entrepreneur with high-performance UI/UX and frictionless mobile checkout.',
      author: {
        '@id': `${siteUrl}/#person`,
      },
      creator: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Gaurav Soni?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gaurav Soni is a frontend developer specializing in the React and Next.js ecosystem. He builds high-converting e-commerce storefronts, internal tools, and SaaS dashboards that drive business growth.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does Gaurav Soni specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gaurav specializes in Next.js (App Router, Server Components), React, TypeScript, and Tailwind CSS, focusing on performance, Core Web Vitals, and scalable architecture.',
          },
        },
        {
          '@type': 'Question',
          name: 'What projects has Gaurav Soni built?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Notable projects include Nirdeep Arts Cloud OS (a dual-shop ERP & POS with real-time Convex sync and interactive demo sandbox at bizos-demo.pages.dev), Invento / DigitalDukan (a multi-tenant inventory management SaaS at digitaldukan.vercel.app), and Penowa (a D2C organic nuts butter storefront at puremelt.vercel.app).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Gaurav Soni available for freelance web development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Gaurav is currently taking on new freelance clients for web applications, SaaS dashboards, and e-commerce development worldwide.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content={pageDescription} />
      </head>
      <body suppressHydrationWarning>
        <script
          id="schema-org-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
          suppressHydrationWarning
        />
        {children}
      </body>
    </html>
  );
}
