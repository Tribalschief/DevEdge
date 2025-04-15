import { DetailedHeader } from "@/components/details/header"
import { Overview } from "@/components/details/overview"
import { MiniService } from "@/components/details/miniservice"
import ServicesGrid from "@/components/details/grid"
import { AboutDetails } from "@/components/details/about"
import { getServiceBySlug } from "@/sanity/lib/getOffering"
import Image from 'next/image';
type RegularService = {
  type: "regular"
  title: string
  description: string
  backgroundImage: string
}

type BigServiceType = {
  type: "big"
  title: string
  description: string
  coverageItems: string[]
  imageSrc: string
}



interface Offering {
  type: string;
  title: string;
  description: string;
  coverageItems?: string[];
  imageSrc?: string;
  backgroundImage?: any;
}

interface ServicePageProps {
  params: {
    slug: string;
  };
}
export default async function ServicePage({ params }: ServicePageProps): Promise<JSX.Element | null> {
  const { slug } = params;
const service = await getServiceBySlug(slug); // already filtered by slug

if (!service) {
  return <div>Service not found</div>;
}

const serviceItems = service.offering.map((offering: Offering) => {
  if (offering.type === 'big') {
    return {
      type: 'big',
      title: offering.title,
      description: offering.description,
      coverageItems: offering.coverageItems,
      imageSrc: offering.imageSrc,
    } as BigServiceType;
  } else {
    return {
      type: 'regular',
      title: offering.title,
      description: offering.description,
      backgroundImage: offering.backgroundImage,
    } as RegularService;
  }
});
 console.log(service.features.features);
  return (
    <>
    <div className="min-h-screen">

      <DetailedHeader image={service.image.asset.url} title={service.title} />
      <Overview overview={service.overview} />
      <div className="mt-8">
      { (service.services && service.services.length > 0) && <MiniService services={service.services} />}
        <h2 className="text-3xl font-bold text-center mt-8 text-[#0e0f0c]">DevEdge {service.title} Offerings</h2>
        
      </div>
      <ServicesGrid services={serviceItems} />
    </div>
    
    {
  (service.features && service.features.features.length > 0) && <AboutDetails imageAlt={service.features.imageAlt} imageSrc={service.features.imageSrc.asset.url} features={service.features.features} />
}
    </>
  )
}


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