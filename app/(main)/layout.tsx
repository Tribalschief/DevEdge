import type { Metadata } from "next";

import "../globals.css";
import { Navbar } from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { CookieConsentProvider } from "@/context/cookies-context";
import { CookieConsentDialog } from "@/components/cookies-dialog/consnet-dialog";
import { CookieScriptLoader } from "@/components/cookies-dialog/script-loader";
import { Suspense } from "react";
import Loading from "./loading";


export const metadata: Metadata = {
  // --- Core Metadata ---
  title: {
    template: '%s | DevEdge Consulting', // For sub-pages like "Internal Audit | DevEdge Consulting"
    default: 'DevEdge Consulting | Technology, Risk & Digital Transformation Solutions', // Default title for the homepage
  },
  description: 'Partner with DevEdge Consulting in Dubai, KSA, & ME for tailored technology consulting, cybersecurity, AI, cloud, audit, and digital transformation solutions.',
  keywords: [
    'DevEdge Consulting',
    'Technology Consulting',
    'Cybersecurity Services',
    'Internal Audit',
    'GRC', // Governance, Risk & Compliance
    'Multi-Cloud Services',
    'AI Services',
    'Artificial Intelligence',
    'Analytics',
    'Application Development',
    'Intelligent Enterprise Systems',
    'Digital Transformation',
    'Business Automation',
    'Risk Management',
    'Human Capital Advisory',
    'Data Management',
    'Data Privacy',
    'Financial Advisory',
    'Accounting Services',
    'ICS Security',
    'OT Security',
    'Fixed Asset Management',
    'Business Continuity',
    'BCM',
    'Middle East',
    'Dubai',
    'KSA', // Saudi Arabia
    'Oman',
    'Kuwait',
    'Egypt',
    'Pakistan',
    'ERP',
  ],
  // --- Authorship & Publishing ---
  authors: [{ name: 'DevEdge Consulting', url: 'https://www.devedgeconsulting.com' }], // Replace with actual URL
  creator: 'DevEdge Consulting',
  publisher: 'DevEdge Consulting',

  // --- URL & Base ---
  metadataBase: new URL('https://www.devedgeconsulting.com'), // !! REPLACE with your actual domain !!
  alternates: {
    canonical: '/', // Canonical URL for the homepage
    // languages: { 'en-US': '/en-US', 'ar-AE': '/ar-AE' }, // Example if you add languages
  },

  // --- Open Graph (Social Media Sharing) ---
  openGraph: {
    title: 'DevEdge Consulting | Technology, Risk & Digital Transformation Solutions',
    description: 'Partner with DevEdge Consulting for tailored technology, cybersecurity, AI, cloud, audit, and digital transformation solutions across the Middle East.',
    url: '/', // Relative to metadataBase
    siteName: 'DevEdge Consulting',
    images: [
      {
        url: '/og-image.png', // !! REPLACE with path to your Open Graph image !!
        width: 1200,         // !! REPLACE with actual width !!
        height: 630,        // !! REPLACE with actual height !!
        alt: 'DevEdge Consulting Logo and Services Overview',
      },
    ],
    locale: 'en_US', // Default locale
    type: 'website',
  },

  // --- Twitter Card ---
  twitter: {
    card: 'summary_large_image',
    title: 'DevEdge Consulting | Technology, Risk & Digital Transformation Solutions',
    description: 'Partner with DevEdge Consulting for tailored technology, cybersecurity, AI, cloud, audit, and digital transformation solutions across the Middle East.',
     // images: ['/twitter-image.png'], // Optional: Specific Twitter image, often uses og:image
     // site: '@YourTwitterHandle', // Optional: Your Twitter handle
     // creator: '@CreatorTwitterHandle', // Optional: Creator handle
  },

  // --- Search Engine Instructions ---
  robots: {
    index: true,  // Allow indexing
    follow: true, // Allow following links
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large', // Allow large image previews in SERPs
      'max-snippet': -1,            // Allow longer snippets
      'max-video-preview': -1,       // Allow video previews
    },
  },

  // --- Icons ---
   icons: {
    icon: '/favicon.ico', // Standard favicon
    shortcut: '/favicon-16x16.png', // Example shortcut icon sizes
    apple: '/apple-touch-icon.png', // Apple touch icon
    // other: { rel: 'other-icon', url: '/other-icon.png' }, // Example for other icons
   },

  // --- Optional ---
  // verification: { // Example verification tags
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  //   other: { me: ['my-email@example.com', 'my-link'] },
  // },
  // category: 'Technology Consulting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <CookieConsentProvider>
          <Suspense fallback={<Loading/>}>
          {children}
          </Suspense>
          <CookieConsentDialog />
          <CookieScriptLoader googleAnalyticsId={process.env.GOOGLE_ID}/>
        </CookieConsentProvider>
        <Footer/>
      </body>
    </html>
  );
}
