'use client'
// import LeadershipSection from "@/components/leaders/section"
// import { Advisory } from '@/components/leaders/advisory'
import a from '@/public/leaders/a.jpg'
// import b from '@/public/leaders/b.jpg'
// import { PageProgressIndicator } from '../../about/_components/page-progress-indicator'
import dynamic from "next/dynamic"

// Dynamically import components that use browser APIs
const LeadershipSection = dynamic(() => import("@/components/leaders/section"), {
  ssr: false,
})
const Advisory = dynamic(() => import("@/components/leaders/advisory").then((mod) => ({ default: mod.Advisory })), {
  ssr: false,
})
const PageProgressIndicator = dynamic(
  () =>
    import("../../about/_components/page-progress-indicator").then((mod) => ({ default: mod.PageProgressIndicator })),
  {
    ssr: false,
  },
)

export default function LeadershipPage() {
  const leaders = [
    {
      pic: a,
      name: "Zabeeh Ullah Abid",
      title: "Founder & CEO   ",
      company: "DevEdge Consulting ",
      title2: "CTO",
      company2: "Galaxy World-wide Shipping",
      imageSrc: "/ceo-headshot.png",
      background: [
        "I'm a technology leader, product strategist, and entrepreneur focused on transforming operations through AI-integrated ERP systems, custom software development, and automation. As the founder and CTO of a multi-solution software company, I help logistics, finance, and import/export businesses optimize their workflows, reduce manual processes, and deliver seamless customer experiences.",
        "Over the years, I've architected and delivered complex enterprise systems including vehicle import/export ERPs, financial operations platforms, mobile tracking apps, and real-time customer support chatbots (voice/text, multilingual). I lead with a vision that connects business goals, technical depth, and human-centric design.",
        "Now, I'm focused on building intelligent systems by integrating AI/ ML, real-time data, and automation to simplify operations and scale business impact.",
      ],
      education: [
        { title: "BSc Computer Science" },
        { title: "Certified Cloud Security Professional (CCSP)" },
        { title: "TOGAF 9.2 Certified" },
      ],
      industries: [
        { name: "Industry Experience" },
        { name: "Government & Public Sector" },
        { name: "Financial Services & Banking" },
        { name: "Energy Utilities Oil & Gas" },
        { name: "Healthcare & Education" },
      ],
      engagements: [
        {
          title: "Enterprise Security Architecture for Hybrid Environments",
          description:
            "Designed and implemented security architectures across IaaS, PaaS, and on-premises environments, ensuring end-to-end protection in complex hybrid infrastructures.",
        },
        {
          title: "Identity & Access Management (IAM)",
          description:
            "Delivered enterprise IAM programs including persona-based access control, privileged access governance, MFA, OAuth 2.0, and OpenID Connect integration.",
        },
        {
          title: "Application & DevSecOps Security",
          description:
            "Led secure SDLC programs implementing security by design, threat modeling, code reviews, dynamic testing, and post-deployment vulnerability management.",
        },
        {
          title: "Zero Trust Network Architecture (ZTNA)",
          description:
            "Architected Zero Trust models with east-west traffic protection, segmentation policies, and next-gen firewall integrations for modern enterprise networks.",
        },
        {
          title: "Cybersecurity Governance & Compliance Programs",
          description:
            "Enabled organizations to leverage security technologies including DLP, PAM, IAM, SIEM, SOAR, AD, and endpoint protection systems to identify configuration gaps and ensure enforcement of robust security controls.",
        },
        {
          title: "Secured OT/IoT Integration",
          description:
            "Secured IC/IOT environments by implementing tailored controls for industrial assets connected to enterprise networks.",
        },
        {
          title: "Enterprise Risk Management & Business",
          description:
            "Designed integrated ERM and BCM strategies to enhance resilience and ensure availability of mission-critical systems.",
        },
        {
          title: "Cloud Strategy & Secure Migration",
          description:
            "Led public cloud adoption and secure migration programs focused on cost optimization, application modernization, and compliance.",
        },
        {
          title: "Technology Strategy & IT Governance Frameworks",
          description:
            "Defined IT governance pillars, roadmaps, and transformation strategies to align technology investments with long-term business goals.",
        },
        {
          title: "Solution & Integration Architecture Leadership",
          description:
            "Architected scalable, microservice-based and event-driven systems using APIs, middleware, and modern application frameworks.",
        },
        {
          title: "DevSecOps & SRE Enablement",
          description:
            "Spearheaded the transition to DevSecOps and SRE practices to drive automation, agility, and operational excellence.",
        },
        {
          title: "Enterprise Architecture Modeling using TOGAF & SABSA",
          description:
            "Delivered transition and target architectures using leading EA frameworks with structured modeling and capability mapping.",
        },
      ],
    },
  ]

  const advisor = [
    {
      name: "Muhammad Shafi",
      title: "Board Member & Strategic Advisor",
      title2: " Founder & CEO",
      company: "DevEdge Consulting ",
      company2: "Galaxy World Wide Shipping",
      imageSrc: "/professional-headshot-advisor.png",
      background: [
        "Muhammad Shafi is a respected industry leader with over 20 years of experience in shipping, logistics, and digital automation. He is the Founder and CEO of Galaxy World Wide Shipping, a UAE-based international logistics firm with a strong operational footprint across the UAE, Germany, Afghanistan, Ajman, and other regions. Under his leadership, Galaxy has grown into a globally recognized name in vehicle export, freight forwarding, and logistics technology. Since 2023, Muhammad has also served as a Board Member and Strategic Advisor to DevEdge Consulting, bringing his vast operational knowledge and entrepreneurial insight to help shape DevEdge's logistics, automation, and technology strategy. Renowned for bridging the gap between traditional logistics and modern digital ecosystems, Muhammad has led the design and rollout of vehicle shipping ERP systems, car selling platforms, and AI-driven logistics automation tools that serve as the backbone of many cross-border operations today. His dual leadership roles allow him to contribute to innovation and digital transformation across the broader supply chain and consulting landscape, positioning him as a trusted advisor to enterprises aiming to modernize and scale with confidence.",
      ],
    },
  ]

  const sections = [
    { id: "leaders", title: "Leaders" },
    { id: "advisor", title: "Advisor" },
  ]

  return (
    <main className="container mx-auto py-8">
      <PageProgressIndicator sections={sections} />
      <div className="w-full mt-10 lg:mt-20">
        <h1 className="text-4xl font-bold text-center py-6 text-black">Our Leaders</h1>
      </div>
      <section id="leaders">
        <LeadershipSection leaders={leaders} />
      </section>
      <section id="advisor">
        <Advisory advisor={advisor[0]} />
      </section>
    </main>
  )
}

//     {
//         pic:b,
//         name: "Zakwan Hussain",
//         title: "Co-Founder & CTO ",
//         company: "DevEdge Consulting",
//         imageSrc: "/placeholder.svg?height=300&width=300",
//         background: [
//           "Zakwan Abid is the Co-Founder and Chief Technology Officer of DevEdge Consulting a visionary technologist and cybersecurity strategist with a passion for secure innovation. With deep technical expertise and a proven track record in offensive and defensive security, Zakwan brings a hands-on, research-driven approach to building resilient digital ecosystems.",
// "A skilled ethical hacker, Zakwan has identified vulnerabilities in several high-profile platforms, including a reflected XSS bug in ISC² official website, showcasing his commitment to proactive security and responsible disclosure. His work has contributed to strengthening the security posture of well-known enterprises and critical platforms, earning him recognition within the cybersecurity community.",
// "With 5 years of experience across secure systems design, penetration testing, and technology infrastructure, Zakwan leads DevEdge’s technical vision ensuring that every solution is not only innovative but inherently secure by design. From enterprise cloud strategies to AI-powered architectures, he champions scalable, high-performance solutions that solve real business problems while anticipating future threats. Zakwan believes that cybersecurity should not be an afterthought it must be embedded into the foundation of every system, process, and digital experience. Under his leadership, DevEdge continues to deliver future-ready technology with integrity, precision, and resilience.",
//         ],
//         education: [
//           {
//               "title": "Offensive Security Certified Professional (OSCP)",
//           },
//           {
//               "title": "eLearnSecurity Certified Professional Penetration Tester (eCPPT)",
              
//           },
//           {
//               "title": "Certified Ethical Hacker (CEH)",
              
//           },
//           {
//               "title": "Microsoft Certified: Identity and Access Administrator (MCIAA)",
              
//           }
//       ],
//         industries : [
//           { name: "Financial Services" },
//           { name: "Healthcare" },
//           { name: "Telecommunications" },
//           { name: "Hospitality" },
//           { name: "Banking" },
//           { name: "Oil & Gas" },
//         ]
//         ,
//         engagements: [
//           {
//             title: "Vulnerability Assessment & Penetration Testing (VAPT)",
//             description:
//               "Performed in-depth penetration tests for web, mobile, network, and Active Directory environments, identifying vulnerabilities and implementing mitigation strategies for leading financial and technology firms in KSA.",
//           },
//           {
//             title: " Compromise Assessment & Threat Hunting",
//             description:
//               "Led compromise assessments on Linux and Windows environments using EDR/XDR solutions to identify Indicators of Compromise (IOCs), ensuring timely threat detection, investigation, and remediation.",
//           },
//           {
//             title: "Cybersecurity & Data Privacy Audits",
//             description:
//               "Executed full-scope IT, cybersecurity, and privacy audits for major enterprises in alignment with IIA guidelines and regional regulations including NCA ECC, SAMA CSF, PDPL, CMA, and Tadawul frameworks.",
//           },
//           {
//             title: "Regulatory Compliance & Gap Assessments",
//             description:
//               "Conducted compliance assessments and gap analyses based on ISO 27001, COBIT, ITIL, NDMO, and PDPL, supporting clients in meeting stringent regulatory obligations in the Kingdom of Saudi Arabia.",
//           },
//           {
//             title: "Evaluation of Cybersecurity Solutions",
//             description:
//               "Audited and validated critical security tools and technologies including DLP, PAM, IAM, SIEM, SOAR, AD, and endpoint protection systems to identify configuration gaps and ensure enforcement of robust security controls.",
//           },
//           {
//             title: " SIEM Effectiveness & Security Monitoring Reviews",
//             description:
//               "Reviewed the design and performance of SIEM solutions to validate log aggregation, correlation rules, and incident detection capabilities, ensuring real-time threat visibility and operational readiness.",
//           },
//         ],
//       },
    // You can add more leaders here