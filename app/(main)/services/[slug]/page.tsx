
import { DetailedHeader } from "@/components/details/header"
import { Overview } from "@/components/details/overview"

import { AboutDetails } from "@/components/details/about"
import { getServiceBySlug } from "@/sanity/lib/getOffering"

import { CardGrid } from "@/components/details/new/newGrid"
import { NewServicesList } from "@/components/details/new/NewSL"

import { notFound } from "next/navigation"
import WM from "./_components/wm"
// type RegularService = {
//   type: "regular"
//   title: string
//   description: string
//   backgroundImage: string
// }

// type BigServiceType = {
//   type: "big"
//   title: string
//   description: string
//   coverageItems: string[]
//   imageSrc: string
// }



// type Offering = {
//   type: string;
//   title: string;
//   description: string;
//   coverageItems?: string[];
//   imageSrc?: string;
//   backgroundImage?: any;
// }
interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default async function ServicePage({ params }: any) {
  const {slug} = await params;
  const service = await getServiceBySlug(slug); // Fetch data on the server

  // Handle case where service is not found
  if (!service) {
    notFound(); // Triggers Next.js 404 page
  }

  // No more useState, useEffect, loading, error states needed here for the main data fetch

  return (
    <>
      {/* Wrap in a fragment or a single root element */}
      <div className="min-h-screen">
        {/* Pass fetched data as props */}
        <DetailedHeader
          // Ensure asset and url exist before accessing
          image={service.image?.asset?.url}
          title={service.title}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column */}
          {/* Added 'relative' here so the absolutely positioned WM inside it is positioned correctly */}
          <div className="relative flex flex-col  lg:w-3/4"> {/* Adjust bg color or remove */}
            <Overview overview={service.overview} />

            {/* Render the WM Client Component */}
            {/* Wrap WM for positioning and styling */}
            {/* This div places WM behind other content (-z-10) and makes it non-interactive */}
             <div className="absolute inset-0 flex top-20 items-center justify-center -z-10 opacity-10 pointer-events-none overflow-hidden">
              <WM />
             </div>

            {/* Ensure content below WM has a positive z-index or is positioned later */}
            <div className="mt-8 relative z-[1]"> {/* Adjust z-index as needed */}
              <CardGrid services={service.offering} title={service.title} />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-1/4 "> {/* Adjust bg color or remove */}
            <NewServicesList /> {/* Assuming this fetches its own data or receives static props */}
          </div>
        </div>
      </div>
    </>
  );
}
  
      {/* <div className="mt-8">
      { (service.services && service.services.length > 0) && <MiniService services={service.services} />}
       
      


<div className="relative w-full mx-auto   py-12 md:py-24">
      {/* Main content container */}
// const serviceItems = service.offering.map((offering: Offering) => {
//   if (offering.type === 'big') {
//     return {
//       type: 'big',
//       title: offering.title,
//       description: offering.description,
//       coverageItems: offering.coverageItems,
//       imageSrc: offering.imageSrc,
//     } as BigServiceType;
//   } else {
//     return {
//       type: 'regular',
//       title: offering.title,
//       description: offering.description,
//       backgroundImage: offering.backgroundImage,
//     } as RegularService;
//   }
// });
 
// {/* </div>
//       <ServicesGrid services={serviceItems} title={service.title} /> */}
//       </div>
//       */}
//      {/* {
//    (service.features && service.features.features.length > 0) && <AboutDetails imageAlt={service.features.imageAlt} imageSrc={service.features.imageSrc.asset.url} features={service.features.features} />
//  } */}

// const images = [
//   {
//     slug: "1",
//     image: cyber,
//     title: "Cyber Security",
//     overview:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.",
//     services: [
//       { image: adiv, name: "Cybersecurity Advisory & transformation" },
//       { image: adiv, name: "Cybersecurity Advisory & transformation" },
//       { image: adiv, name: "Cybersecurity Advisory & transformation" },
//       { image: adiv, name: "Security Operations & Incident Response" },
//       { image: adiv, name: "Identity & Access Management" },
//       { image: adiv, name: "Cloud Security Services" },
//     ],
//     Offering: [
//       {
//         type: "regular",
//         title: "Cybersecurity Awareness Training & Phishing Simulations",
//         description:
//           "Strengthening your first line of defense by training employees and conducting simulated phishing attacks to improve cyber awareness.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Incident Response Planning & Crisis Management",
//         description:
//           "We help you develop robust response playbooks and readiness exercises to ensure swift, coordinated action during cyber incidents.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Compromise Assessment Services",
//         description:
//           "Conducting in-depth scans and forensic reviews to detect hidden compromises and active threats within your network.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       // Big service can be placed anywhere in the array
//       {
//         type: "big",
//         title: "Vulnerability Assessments & Penetration Testing (VAPT)",
//         description:
//           "Simulating cyberattacks on your IT systems and applications to identify exploitable vulnerabilities and help you close security gaps.",
//         coverageItems: [
//           "External Network Penetration Testing",
//           "Internal Network Penetration Testing",
//           "Web Application Security Testing",
//           "Mobile (Android + iOS) Application Security Testing",
//           "Wireless Network Penetration Testing",
//           "Cloud Security Testing",
//           "API Security Testing",
//           "Active Directory Testing",
//         ],
//         imageSrc: "/placeholder.svg?height=400&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Architecture Review",
//         description: "Expert evaluation of your security infrastructure to identify gaps and recommend improvements.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Cloud Security Assessment",
//         description: "Comprehensive evaluation of your cloud environment to ensure proper security controls.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Awareness Program",
//         description: "Ongoing education and training to build a security-conscious organizational culture.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//     ],
//     features : [
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "30+ years of consulting expertise with deep regional understanding across Dubai, KSA, Oman, Kuwait, and Egypt",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Professional data scientists, AI engineers, and cloud architects",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Proven delivery of advanced analytics and AI solutions for government, finance, healthcare, and large enterprises",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Strong focus on business outcomes, not just technology delivery",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "AI and ML models that are explainable, ethical, and business-aligned",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "End-to-end services from strategy, data engineering, model development, deployment, to ongoing support",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Scalable cloud-based analytics environments designed for flexibility and growth",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Seamless integration with ERP, CRM, and core enterprise systems",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Advanced use of data analytics and continuous auditing tools for deeper, faster insights",
//       },
//     ]
//   },
//   {
//     slug: "2",
//     image: cyber,
//     title: "Title 2",
//     overview:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.",
//     services: [{ image: adiv, name: "Service 1" }],
//     Offering: [
//       {
//         type: "regular",
//         title: "Cybersecurity Awareness Training & Phishing Simulations",
//         description:
//           "Strengthening your first line of defense by training employees and conducting simulated phishing attacks to improve cyber awareness.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Incident Response Planning & Crisis Management",
//         description:
//           "We help you develop robust response playbooks and readiness exercises to ensure swift, coordinated action during cyber incidents.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Compromise Assessment Services",
//         description:
//           "Conducting in-depth scans and forensic reviews to detect hidden compromises and active threats within your network.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       // Big service can be placed anywhere in the array
//       {
//         type: "big",
//         title: "Vulnerability Assessments & Penetration Testing (VAPT)",
//         description:
//           "Simulating cyberattacks on your IT systems and applications to identify exploitable vulnerabilities and help you close security gaps.",
//         coverageItems: [
//           "External Network Penetration Testing",
//           "Internal Network Penetration Testing",
//           "Web Application Security Testing",
//           "Mobile (Android + iOS) Application Security Testing",
//           "Wireless Network Penetration Testing",
//           "Cloud Security Testing",
//           "API Security Testing",
//           "Active Directory Testing",
//         ],
//         imageSrc: "/placeholder.svg?height=400&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Architecture Review",
//         description: "Expert evaluation of your security infrastructure to identify gaps and recommend improvements.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Cloud Security Assessment",
//         description: "Comprehensive evaluation of your cloud environment to ensure proper security controls.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Awareness Program",
//         description: "Ongoing education and training to build a security-conscious organizational culture.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//     ],
//     features : [
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "30+ years of consulting expertise with deep regional understanding across Dubai, KSA, Oman, Kuwait, and Egypt",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Professional data scientists, AI engineers, and cloud architects",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Proven delivery of advanced analytics and AI solutions for government, finance, healthcare, and large enterprises",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Strong focus on business outcomes, not just technology delivery",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "AI and ML models that are explainable, ethical, and business-aligned",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "End-to-end services from strategy, data engineering, model development, deployment, to ongoing support",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Scalable cloud-based analytics environments designed for flexibility and growth",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Seamless integration with ERP, CRM, and core enterprise systems",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Advanced use of data analytics and continuous auditing tools for deeper, faster insights",
//       },
//     ],
//   },
//   {
//     slug: "3",
//     image: cyber,
//     title: "Title 3",
//     overview:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.",
//     services: [{ image: adiv, name: "Service 1" }],
//     Offering: [
//       {
//         type: "regular",
//         title: "Cybersecurity Awareness Training & Phishing Simulations",
//         description:
//           "Strengthening your first line of defense by training employees and conducting simulated phishing attacks to improve cyber awareness.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Incident Response Planning & Crisis Management",
//         description:
//           "We help you develop robust response playbooks and readiness exercises to ensure swift, coordinated action during cyber incidents.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Compromise Assessment Services",
//         description:
//           "Conducting in-depth scans and forensic reviews to detect hidden compromises and active threats within your network.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       // Big service can be placed anywhere in the array
//       {
//         type: "big",
//         title: "Vulnerability Assessments & Penetration Testing (VAPT)",
//         description:
//           "Simulating cyberattacks on your IT systems and applications to identify exploitable vulnerabilities and help you close security gaps.",
//         coverageItems: [
//           "External Network Penetration Testing",
//           "Internal Network Penetration Testing",
//           "Web Application Security Testing",
//           "Mobile (Android + iOS) Application Security Testing",
//           "Wireless Network Penetration Testing",
//           "Cloud Security Testing",
//           "API Security Testing",
//           "Active Directory Testing",
//         ],
//         imageSrc: "/placeholder.svg?height=400&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Architecture Review",
//         description: "Expert evaluation of your security infrastructure to identify gaps and recommend improvements.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Cloud Security Assessment",
//         description: "Comprehensive evaluation of your cloud environment to ensure proper security controls.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//       {
//         type: "regular",
//         title: "Security Awareness Program",
//         description: "Ongoing education and training to build a security-conscious organizational culture.",
//         backgroundImage: "/placeholder.svg?height=300&width=400",
//       },
//     ],
//     features : [
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "30+ years of consulting expertise with deep regional understanding across Dubai, KSA, Oman, Kuwait, and Egypt",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Professional data scientists, AI engineers, and cloud architects",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Proven delivery of advanced analytics and AI solutions for government, finance, healthcare, and large enterprises",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Strong focus on business outcomes, not just technology delivery",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "AI and ML models that are explainable, ethical, and business-aligned",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "End-to-end services from strategy, data engineering, model development, deployment, to ongoing support",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Scalable cloud-based analytics environments designed for flexibility and growth",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Seamless integration with ERP, CRM, and core enterprise systems",
//       },
//       {
//         iconSrc: "/placeholder.svg?height=40&width=40",
//         text: "Advanced use of data analytics and continuous auditing tools for deeper, faster insights",
//       },
//     ]
//   },
// ]