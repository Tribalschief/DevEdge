import { ServiceSection } from "@/components/service/service"
import { ServiceCard } from "@/components/service/scard"

import { getServiceForHome } from "@/sanity/lib/getoverview"

export default async function Main() {
  // const services = [
  //   {
  //     icon: <FileText size={40} />,
  //     title: "Internal Audit",
  //     description: "Protecting your digital assets with comprehensive security measures.",
  //   },
  //   {
  //     icon: <Shield size={40} />,
  //     title: "Cybersecurity",
  //     description: "Crafting exceptional digital experiences through innovative web and mobile solutions.",
  //   },
  //   {
  //     icon: <Cog size={40} />,
  //     title: "Business Automation and Transformation Services",
  //     description: "Driving digital transformation through streamlined workflows",
  //   },
  //   {
  //     icon: <Cpu size={40} />,
  //     title: "Intelligent Enterprise Systems & Application Development Services",
  //     description: "Crafting exceptional digital experiences through innovative web and mobile solutions.",
  //   },
  //   {
  //     icon: <BarChart2 size={40} />,
  //     title: "Analytics and Artificial Intelligence Services",
  //     description: "Protecting your digital assets with comprehensive security measures.",
  //   },
  //   {
  //     icon: <Layers size={40} />,
  //     title: "Digital Transformation & Business Automation",
  //     description: "Driving digital transformation through streamlined workflows",
  //   },
  //   {
  //     icon: <FileCode size={40} />,
  //     title: "Technology Consulting and GRC (Governance, Risk & Compliance)",
  //     description: "Crafting exceptional digital experiences through innovative web and mobile solutions.",
  //   },
  //   {
  //     icon: <Database size={40} />,
  //     title: "Precision Data Management & Privacy Services",
  //     description: "Protecting your digital assets with comprehensive security measures.",
  //   },
  //   {
  //     icon: <DollarSign size={40} />,
  //     title: "Integrated Accounting & Financial Advisory Services",
  //     description: "Driving digital transformation through streamlined workflows",
  //   },
  //   {
  //     icon: <AlertTriangle size={40} />,
  //     title: "Risk Management & Human Capital Advisory",
  //     description: "Crafting exceptional digital experiences through innovative web and mobile solutions.",
  //   },
  //   {
  //     icon: <Factory size={40} />,
  //     title: "Industrial Control Systems (ICS) & OT Security Services",
  //     description: "Protecting your digital assets with comprehensive security measures.",
  //   },
  //   {
  //     icon: <Building size={40} />,
  //     title: "Fixed Asset Management",
  //     description: "Driving digital transformation through streamlined workflows",
  //   },
  // ]
  const services = await getServiceForHome()
 
  return (
    <ServiceSection title="What We Do" highlight="We" columns={{ sm: 1, md: 2, lg: 3 }} gap="small" centered={true}>
      {services.map((service, index) => (
        <ServiceCard key={index} icon={service.icon.asset.url} title={service.title} overview={service.overview} index={index} slug={service.slug}/>
      ))}
    </ServiceSection>
  )
}