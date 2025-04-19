import type { Metadata } from "next";

// const siteUrl = 'https://www.devedgeconsulting.com'; // !! REPLACE with your actual domain !!
export const metadata: Metadata = {
  // --- Core Metadata ---
  title: 'Careers | Join DevEdge Consulting',
  description: 'Explore exciting career opportunities at DevEdge Consulting. Join our expert team delivering technology, risk, and transformation solutions in the Middle East.',
  keywords: [
    'DevEdge Consulting Careers',
    'Consulting Jobs',
    'Technology Jobs',
    'Cybersecurity Jobs',
    'AI Jobs',
    'Internal Audit Jobs',
    'Risk Management Jobs',
    'GRC Jobs',
    'Application Development Jobs',
    'Data Management Jobs',
    'Financial Advisory Jobs',
    'Middle East Careers',
    'Dubai Jobs',
    'KSA Jobs', // Saudi Arabia Jobs
    'Pakistan Jobs',
    'Job Opportunities',
    'IT Consultant',
    'Data Scientist',
  ],

//   // --- Authorship & Publishing (remains the company) ---
//   authors: [{ name: 'DevEdge Consulting', url: siteUrl }],
//   creator: 'DevEdge Consulting',
//   publisher: 'DevEdge Consulting',

//   // --- URL ---
//   alternates: {
//     canonical: '/careers', // Canonical URL for the careers page (adjust path if different)
//   },

//   // --- Open Graph (Tailored for Careers) ---
//   openGraph: {
//     title: 'Careers at DevEdge Consulting | Shape the Future',
//     description: 'Build your career with us! We seek talented consultants in tech, cybersecurity, AI, audit & more to drive transformation across the Middle East.',
//     url: '/careers', // Relative to metadataBase (if defined in layout) or provide full URL
//     siteName: 'DevEdge Consulting',
//     type: 'website', // Or consider 'profile' if focusing on company culture
//   },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
