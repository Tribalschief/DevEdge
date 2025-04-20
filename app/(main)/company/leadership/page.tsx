import React from 'react'

import LeadershipSection from "@/components/leaders/section"
import type { Leader } from "@/components/leaders/types"
import { Advisory } from '@/components/leaders/advisory'

export default function LeadershipPage() {
  // Sample data - in a real app, this would come from an API or CMS
  const leaders: Leader[] = [
    {
      name: "Zabeeh Ullah Abid",
      title: "Founder & CEO",
      company: "DevEdge Consulting",
      imageSrc: "/placeholder.svg?height=300&width=300",
      background: [
        "Zabeeh Ullah Abid is the Founder and CEO of DevEdge Consulting, a visionary leader with over 12 years of experience in enterprise architecture, cybersecurity, digital transformation, and intelligent systems development. Throughout his career, he has worked with leading organizations across the Middle East, helping them navigate complex business challenges through strategic technology solutions.",
        "His expertise spans enterprise IT governance, risk management, AI-driven platforms, business automation, and secure cloud architecture development. By aligning his technical expertise with business strategy and technology execution, Zabeeh brings a hands-on approach to leadership— shaping DevEdge into a results-driven consulting firm recognized for innovation, integrity, and impact.",
        "Under his leadership, DevEdge Consulting has become a trusted partner for organizations seeking tailored solutions in internal audit, cybersecurity, AI, and digital transformations. He is a thought leader in the fields of risk intelligence, automation, and enterprise resilience, with a passion for empowering businesses to grow smarter and operate safer.",
      ],
      education: [
        { title: "BSc Computer Science" },
        { title: "Certified Cloud Security Professional (CCSP)" },
        { title: "CISSP" },
        { title: "The Open Group Certified (regarding Risk and Security)" },
        { title: "Azure Administrator" },
        { title: "AWS Cloud Practitioner" },
        { title: "Blockchain Essentials" },
        { title: "Certified Hacking Forensic Investigator (CHFI)" },
        { title: "Microsoft Certified Technology Specialist (MCTS)" },
        { title: "ITIL v3 Foundation" },
        { title: "TOGAF Certified" },
        { title: "Cybersecurity Assessment Expert" },
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
    {
        name: "Zakwan Hussain",
        title: "CEO DevEdge",
        company: "DevEdge Consulting",
        imageSrc: "/placeholder.svg?height=300&width=300",
        background: [
          "Zakwan Abid is the Co-Founder and Chief Technology Officer of DevEdge Consulting a visionary technologist and cybersecurity strategist with a passion for secure innovation. With deep technical expertise and a proven track record in offensive and defensive security, Zakwan brings a hands-on, research-driven approach to building resilient digital ecosystems.",
"A skilled ethical hacker, Zakwan has identified vulnerabilities in several high-profile platforms, including a reflected XSS bug in ISC² official website, showcasing his commitment to proactive security and responsible disclosure. His work has contributed to strengthening the security posture of well-known enterprises and critical platforms, earning him recognition within the cybersecurity community.",
"With 5 years of experience across secure systems design, penetration testing, and technology infrastructure, Zakwan leads DevEdge’s technical vision ensuring that every solution is not only innovative but inherently secure by design. From enterprise cloud strategies to AI-powered architectures, he champions scalable, high-performance solutions that solve real business problems while anticipating future threats. Zakwan believes that cybersecurity should not be an afterthought it must be embedded into the foundation of every system, process, and digital experience. Under his leadership, DevEdge continues to deliver future-ready technology with integrity, precision, and resilience.",
        ],
        education: [
          {
              "title": "Offensive Security Certified Professional (OSCP)",
          },
          {
              "title": "eLearnSecurity Certified Professional Penetration Tester (eCPPT)",
              
          },
          {
              "title": "Certified Ethical Hacker (CEH)",
              
          },
          {
              "title": "Microsoft Certified: Identity and Access Administrator (MCIAA)",
              
          }
      ],
        industries : [
          { name: "Financial Services" },
          { name: "Healthcare" },
          { name: "Telecommunications" },
          { name: "Hospitality" },
          { name: "Banking" },
          { name: "Oil & Gas" },
        ]
        ,
        engagements: [
          {
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            description:
              "Performed in-depth penetration tests for web, mobile, network, and Active Directory environments, identifying vulnerabilities and implementing mitigation strategies for leading financial and technology firms in KSA.",
          },
          {
            title: " Compromise Assessment & Threat Hunting",
            description:
              "Led compromise assessments on Linux and Windows environments using EDR/XDR solutions to identify Indicators of Compromise (IOCs), ensuring timely threat detection, investigation, and remediation.",
          },
          {
            title: "Cybersecurity & Data Privacy Audits",
            description:
              "Executed full-scope IT, cybersecurity, and privacy audits for major enterprises in alignment with IIA guidelines and regional regulations including NCA ECC, SAMA CSF, PDPL, CMA, and Tadawul frameworks.",
          },
          {
            title: "Regulatory Compliance & Gap Assessments",
            description:
              "Conducted compliance assessments and gap analyses based on ISO 27001, COBIT, ITIL, NDMO, and PDPL, supporting clients in meeting stringent regulatory obligations in the Kingdom of Saudi Arabia.",
          },
          {
            title: "Evaluation of Cybersecurity Solutions",
            description:
              "Audited and validated critical security tools and technologies including DLP, PAM, IAM, SIEM, SOAR, AD, and endpoint protection systems to identify configuration gaps and ensure enforcement of robust security controls.",
          },
          {
            title: " SIEM Effectiveness & Security Monitoring Reviews",
            description:
              "Reviewed the design and performance of SIEM solutions to validate log aggregation, correlation rules, and incident detection capabilities, ensuring real-time threat visibility and operational readiness.",
          },
        ],
      },
    // You can add more leaders here
  ]
  const advisor= [
    {
      name: "Muhammad Ghazali",
        title: "CEO DevEdge",
        company: "Managing Partner",
        imageSrc: "/placeholder.svg?height=300&width=300",
        background: [
          "Muhammad Ghazali is the CEO, Transviti and Managing Partner, FAMCO Associates, who has successfully led and delivered numerous engagements on software development, ERP implementation, business continuity, information security & risk, dashboard and analytics solutions etc. He is an active member of P@SHA (Pakistan Software Houses Association) and active aspirant for growth and enablement of technology innovation through development of Technology Parks in Pakistan. His experience spans across industry sectors including government, banking and financial, oil and gas, retail, telecom, insurance, manufacturing, construction, trading and services. He possesses more than 22 years of cross-functional experience in delivering optimal values in high growth environments across wide range IT products and services. He has worked in Pakistan and the Middle East in leading consulting firms and software companies. He is a certified trainer and subject matter expert of Business Continuity Management. He has been awarded 'BCI Merit Award' during the BCI Global Awards held on November 2014 at London, UK for a 'significant contribution' to BCI. He was also recognized as the 'Highly Recommended Consultant of the year for 2013' at the BCI Global Awards in London."
        ],
    }
  ]

  return (
    <main className="container mx-auto py-8">
        <div className="w-full mt-10">
        <h1 className="text-4xl font-bold text-center py-6 text-black">Our Leaders</h1>
      </div>
      <LeadershipSection leaders={leaders} />
      <Advisory advisor={advisor[0]}/>
    </main>
  )
}