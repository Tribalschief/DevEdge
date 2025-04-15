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
    // You can add more leaders here
  ]
  const advisor= []

  return (
    <main className="container mx-auto py-8">
        <div className="w-full mt-10">
        <h1 className="text-4xl font-bold text-center py-6 text-black">Our Leaders</h1>
      </div>
      <LeadershipSection leaders={leaders} />
      <Advisory advisor={leaders[0]}/>
    </main>
  )
}