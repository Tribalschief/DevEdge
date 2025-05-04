'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Car, Clock, Package, Users,  Globe, Import, Ship, Truck, } from "lucide-react"
import Link from "next/link"
import { ERPFAQSection } from "./faq"
import { FaShieldAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export default function ERMService() {
  const InlineHoverCard = ({ title, description }: { title: string; description: string; }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <motion.div
        className="relative flex flex-col p-6 rounded-lg shadow-md border border-gray-200 bg-white transition-all overflow-hidden h-full" // Combined styles
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }} // Lift and enhance shadow
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3 }}
      >
        {/* --- Content mirroring the original Card structure --- */}
        {/* CardHeader equivalent */}
        <div className="mb-4"> {/* Added spacing */}
           <h3 className="text-xl font-medium text-center">{title}</h3> {/* Mimic CardTitle */}
        </div>
        {/* CardContent equivalent */}
        <div className="flex-grow"> {/* Use flex-grow to push bottom bar */}
            <p className="text-md text-gray-600 text-center">{description}</p> {/* Mimic CardContent paragraph */}
        </div>
        {/* --- End of content --- */}

        {/* Bottom Animated Bar (from your target example) */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 max-w-3xl mx-auto">
          DevEdge is a multi functional all-in-one platform for business
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="text-sm text-gray-600">Projects</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Businesses to optimize resource allocation and improve cost efficiency while delivering high-quality
              services.
            </p>
            <p className="text-3xl font-bold">100+</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm text-gray-600">Services</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Comprehensive suite of business operations. From order processing to inventory and logistics management.
            </p>
            <p className="text-3xl font-bold">140+</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm text-gray-600">Support</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              24/7 support team is always available to resolve issues, provide technical assistance and more.
            </p>
            <p className="text-3xl font-bold">All Time</p>
          </div>
        </div>
      </section>

      {/* ERP Solution */}
      <section className="w-full py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Save time & money with our smart business management ERP/ Solution
          </h2>
          <div className="w-full h-px bg-gray-300 mt-6"></div>
        </div>
      </section>

      {/* Services */}
      

      {/* Customizable Modules with Service Tabs */}
      <section className="w-full py-12 px-auto ">
        <div className="w-full sm:mx-auto text-center">
          

          <Tabs defaultValue="vehicle-shipping" className="w-full">
          
      {/* Your TabsList (remains the same) */}
      <TabsList className="w-full h-full bg-gray-900 text-white py-16 px-4">
         {/* ... your TabsTrigger elements ... */}
         <div className="max-w-full mx-auto flex flex-wrap justify-center gap-6">
          <TabsTrigger
            value="vehicle-shipping"
            // Add data-state styling if needed for active tab look
            className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-purple-400 data-[state=active]:bg-purple-900 data-[state=active]:text-white transition-all"
          >
            <div className="bg-white rounded-full p-3">
              <Truck className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-base font-semibold">Vehicle Shipping</h3>
              <p className="text-xs text-purple-400">Import/ Export/ ERP</p>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="Cybersecurity Risk Management Platform"
            className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-purple-400 data-[state=active]:bg-purple-900 data-[state=active]:text-white transition-all"
          >
            <div className="bg-white rounded-full p-3">
              <FaShieldAlt className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-base font-semibold">Cybersecurity </h3>
              <p className="text-xs text-purple-400">Risk Management Platform </p>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="car-selling"
            className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-purple-400 data-[state=active]:bg-purple-900 data-[state=active]:text-white transition-all"
          >
            <div className="bg-white rounded-full p-3">
              <Car className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-base font-semibold">Car Selling Platform</h3>
              <p className="text-xs text-purple-400">as a Service</p>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="human-resource"
            className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-purple-400 data-[state=active]:bg-purple-900 data-[state=active]:text-white transition-all"
          >
            <div className="bg-white rounded-full p-3">
              <Users className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-base font-semibold">Human Resource</h3>
              <p className="text-xs text-purple-400">Management Solution</p>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="coming-soon"
            className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-purple-400 data-[state=active]:bg-purple-900 data-[state=active]:text-white transition-all"
          >
            <div className="bg-white rounded-full p-3">
              <Clock className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-base font-semibold">Coming Soon</h3>
              <p className="text-xs text-purple-400"> </p>
            </div>
          </TabsTrigger>
        </div>
      </TabsList>
      
      {/* ====== Vehicle Shipping Content ====== */}
      <TabsContent value="vehicle-shipping" className="pt-6">
        <Card className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold mt-4 mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-2">with Dynamic Vehicle Shipping Services</p>
          <CardContent className="p-0">
            <div className="w-full overflow-x-auto">
              <Tabs defaultValue="import" className="w-full">
                {/* Import/Export TabsList */}
                <div className="border-b border-gray-200">
                     <TabsList className="flex h-auto p-0 bg-transparent px-6">
                       {/* ... Import/Export TabsTrigger ... */}
                       <TabsTrigger
                            value="import"
                            className="flex flex-col items-center w-auto min-w-[120px] sm:min-w-[160px] py-4 px-4 sm:px-6 rounded-none data-[state=active]:bg-purple-50 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-purple-600 text-gray-600 data-[state=active]:text-purple-700 font-medium"
                        >
                            <Import className="h-8 w-8 sm:h-10 sm:w-10 mb-2 text-purple-600" />
                            <span className="text-base sm:text-lg md:text-xl">Import</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="export"
                            className="flex flex-col items-center w-auto min-w-[120px] sm:min-w-[160px] py-4 px-4 sm:px-6 rounded-none data-[state=active]:bg-purple-50 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-purple-600 text-gray-600 data-[state=active]:text-purple-700 font-medium"
                        >
                            <Globe className="h-8 w-8 sm:h-10 sm:w-10 mb-2 text-purple-600" />
                            <span className="text-base sm:text-lg md:text-xl">Export</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* ====== Import Tab Content - USE INLINE HOVER CARD ====== */}
                <TabsContent value="import" className="mt-0 p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceCards.map((card, index) => (
                      // *** USE THE INLINE HOVER CARD COMPONENT ***
                      <InlineHoverCard
                        key={`import-${index}`}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
                  </div>
                </TabsContent>

                {/* ====== Export Tab Content - USE INLINE HOVER CARD ====== */}
                <TabsContent value="export" className="mt-0 p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exportCards.map((card, index) => (
                       // *** USE THE INLINE HOVER CARD COMPONENT ***
                       <InlineHoverCard
                        key={`export-${index}`}
                        title={card.title}
                        description={card.description}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          {/* FAQ Section */}
           <div className="bg-gray-100 p-5 sm:p-6 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
              Vehicle Import / Export FAQs
            </h3>
            <ERPFAQSection faqs={importExportFaqs} />
          </div>
        </Card>
      </TabsContent>

      {/* ====== Cyber Security Content ====== */}
      <TabsContent value="Cybersecurity Risk Management Platform" className="pt-6">
        <Card className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold mt-4 mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-2">with Dynamic Cybersecurity Risk Management Platform</p>
          <CardContent className="p-6">
             {/* ====== USE INLINE HOVER CARD ====== */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cyberRiskCards.map((card, index) => (
                 // *** USE THE INLINE HOVER CARD COMPONENT ***
                 <InlineHoverCard
                    key={`cyber-${index}`}
                    title={card.title}
                    description={card.description}
                  />
              ))}
            </div>
          </CardContent>
           {/* FAQ Section */}
           <div className="bg-gray-100 p-5 sm:p-6 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
              Cyber Risk Management FAQs
            </h3>
            <ERPFAQSection faqs={cyberRiskFaqs} />
          </div>
        </Card>
      </TabsContent>

      {/* ====== Car Selling Platform Content (Remains the Same) ====== */}
      <TabsContent value="car-selling" className="pt-6">
           <Card className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
             {/* ... CardHeader ... */}
             <h2 className="text-xl font-bold mt-4 mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-2">with Dynamic Car Selling Platform as a Service </p>
             <CardContent className="p-6">
               <div className="py-12 text-center">
                 <p className="text-lg text-gray-500 italic">Content Coming Soon...</p>
               </div>
             </CardContent>
             {/* FAQ Section */}
             <div className="bg-gray-100 p-5 sm:p-6 border-t border-gray-200">
               <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
                 Car Selling FAQs
               </h3>
               <ERPFAQSection faqs={carSellingFaqs} />
             </div>
           </Card>
         </TabsContent>


      {/* ====== Human Resource Content (Remains the Same) ====== */}
      <TabsContent value="human-resource" className="pt-6">
           <Card className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
             {/* ... CardHeader ... */}
              
             <h2 className="text-xl font-bold mt-4 mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-2">with Dynamic Human Resource Management Solution </p>
             <CardContent className="p-6">
               <div className="py-12 text-center">
                 <p className="text-lg text-gray-500 italic">Content Coming Soon...</p>
               </div>
             </CardContent>
             {/* FAQ Section */}
             <div className="bg-gray-100 p-5 sm:p-6 border-t border-gray-200">
               <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
                 HRMS FAQs
               </h3>
               <ERPFAQSection faqs={hrmsFaqs} />
             </div>
           </Card>
         </TabsContent>

      {/* ====== Coming Soon Content (Remains the Same) ====== */}
      <TabsContent value="coming-soon" className="pt-6">
         <Card className="border border-gray-200 shadow-lg rounded-lg overflow-hidden">
           {/* ... CardHeader ... */}
            <CardHeader className="bg-gray-50 border-b border-gray-200">
             <CardTitle className="text-2xl font-semibold text-gray-800">More Services Coming Soon</CardTitle>
           </CardHeader>
           <CardContent className="p-6">
             <div className="py-12 text-center">
               <p className="text-lg text-gray-500 italic">Stay tuned for exciting new platforms!</p>
               <p className="text-lg text-gray-500 italic">Enjoy such services as</p>
               <p className="text-lg text-gray-500 italic">• HRMS</p>
               <p className="text-lg text-gray-500 italic">• Car Selling</p>
               <p className="text-lg text-gray-500 italic">• Cyber Risk</p>
               <p className="text-lg text-gray-500 italic">• Vehicle Shipping</p>

             </div>
           </CardContent>
         </Card>
       </TabsContent>
    </Tabs>
        </div>
      </section>

      
    </main>
  )
}

const serviceCards = [
  {
    title: "Customers",
    description:
      "This feature enables you to create a structured and categorized customer database for efficient management and communication.",
  },
  {
    title: "Auction Buyer ID",
    description:
      "This module streamlines the auction buyer ID allocation and tracking, fulfilling the business needs for efficient auction management.",
  },
  {
    title: "Vehicles",
    description:
      "This feature enables full control over the vehicle lifecycle – from manufacture to international payment processing and delivery.",
  },
  {
    title: "Shipping & Container Management",
    description:
      "This feature enhances shipping container management efficiency by optimizing vehicle loading and tracking.",
  },
  {
    title: "Vehicle Clearance Certificate (VCC)",
    description:
      "This module fulfills the compliance and import certification needs of vehicle importers through a systematic approach.",
  },
  {
    title: "Clients",
    description:
      "This feature supports accurate client data filing, management, and tracking to enhance customer relationships and service delivery.",
  },
  {
    title: "Gate Pass",
    description:
      "This feature provides controlled yard access through vehicle and driver verification, enhancing security and operational efficiency.",
  },
  {
    title: "Vendors",
    description:
      "Vendors can be created and managed with detailed rate structures for services like loading, unloading, and other operational tasks.",
  },
  {
    title: "Finance",
    description:
      "This module ensures the company's financial stability and structure by enabling precise currency control and financial management.",
  },
]

const cyberRiskFaqs = [
  {
    question: 'What is a Cyber Risk Management Tool (CRMT)?',
    answer:
      'A CRMT is a platform that helps organizations identify, assess, monitor, and remediate cyber risks. It centralizes risk data, integrates threat intelligence, and supports compliance with frameworks like ISO 27001 and NIST.',
  },
  {
    question: 'Does this solution support both technical and non-technical risk assessments?',
    answer:
      'Yes. The tool covers non-technical domains like Governance, Risk Management, and Third-party Risk, as well as technical areas such as OS, Network, Database, Middleware, IAM, and Vulnerability Management.',
  },
  {
    question: 'Can the tool integrate with existing vulnerability scanners and SIEM solutions?',
    answer:
      'Absolutely. The tool supports integration with popular scanners and SIEM platforms, enabling real-time alerting, ticket creation, and automated remediation tracking.',
  },
  {
    question: 'What deployment options are available—cloud, hybrid, or on-prem?',
    answer:
      'The platform is flexible and can be deployed as a cloud-based, hybrid, or on-premises solution, depending on the organization’s preferences and regulatory requirements.',
  },
  {
    question: 'How does the solution support exception and risk acceptance workflows?',
    answer:
      'It includes built-in governance workflows for exception handling, including risk acceptance, escalation, approvals, and periodic reviews, ensuring alignment with risk appetite.',
  },
];


const exportCards = [
  {
    title: "Export Documentation",
    description:
      "Comprehensive solution for managing all export documentation including commercial invoices, packing lists, and certificates of origin.",
  },
  {
    title: "Customs Compliance",
    description:
      "Ensures all exports meet customs regulations and requirements for smooth international shipping and border clearance.",
  },
  {
    title: "Vehicle Export Processing",
    description:
      "Streamlines the entire vehicle export process from preparation to shipping, including all necessary documentation and inspections.",
  },
  {
    title: "Container Management",
    description:
      "Optimizes container loading and tracking for exports, ensuring efficient space utilization and proper vehicle securing.",
  },
  {
    title: "Export Certification",
    description:
      "Manages all required export certificates and compliance documentation for vehicles being shipped internationally.",
  },
  {
    title: "International Shipping",
    description:
      "Coordinates international shipping logistics, carrier selection, and route optimization for vehicle exports.",
  },
  {
    title: "Export Compliance",
    description:
      "Ensures adherence to international trade regulations, export controls, and destination country requirements.",
  },
  {
    title: "Global Logistics",
    description:
      "Manages the entire logistics chain for exports including warehousing, transportation, and final delivery coordination.",
  },
  {
    title: "Export Financial Management",
    description:
      "Handles all financial aspects of exports including international payments, currency exchange, and export financing options.",
  },
]


const importExportFaqs = [
  {
    question: 'What is a Vehicle Shipping ERP and how can it help my business?',
    answer:
      'Our Vehicle Shipping ERP is an all-in-one system for managing vehicle imports/exports. It includes tools for auction tracking, inventory control, document automation (like BOLs and customs forms), financial integration, and real-time shipment tracking ensuring smoother operations and compliance.',
  },
  {
    question: 'Can your ERP handle both import and export operations?',
    answer:
      'Yes. Our system has dedicated modules for both import and export including customer records, shipping container management, auction ID tracking, VCC generation, customs compliance, and financial processing.',
  },
  {
    question: 'How does your solution improve container and shipping management?',
    answer:
      'It optimizes space utilization, tracks vehicle loading/unloading, provides container status updates, and ensures all export documentation (e.g., commercial invoices, certificates) is accurately generated and monitored.',
  },
  {
    question: 'Is the system scalable if I expand to more ports or branches?',
    answer:
      'Absolutely. Our ERP is cloud-based and modular, allowing you to scale across multiple warehouses, ports, or countries with unified visibility.',
  },
  {
    question: 'Do you offer customization for ERP solutions?',
    answer:
      'Yes. All our systems are modular and customizable. Whether you need localized workflows, multi-currency support, or language adjustments, we tailor solutions to fit your business.',
  },
  {
    question: 'How is your ERP different from global platforms like ODOO, SAP or Oracle?',
    answer:
      'DevEdge ERP is cost-effective, quick to deploy, and highly adaptable to your specific industry and regional compliance needs without the heavy licensing burden of global ERPs.',
  },
  {
    question: 'What industries are your ERP solutions suitable for?',
    answer:
      `Our ERP solutions are highly versatile and designed to serve a wide range of industries. They are ideal for:
• Logistics & Shipping
• Auto Trading & Dealerships
• Human Resources
• Government Services
• Asset & Inventory Management

In addition, we provide customized ERP solutions tailored to the unique needs of industries including, but not limited to:
• Hospitality
• Investment & Financial Services
• Retail & Real Estate
• Healthcare
• Industrial & Manufacturing
• Power & Utilities
• Shipping & Logistics
• Consumer Markets

Whether you're managing operations in a single sector or across multiple domains, our ERP systems are built for flexibility, compliance, and scalable growth.`,
  },
  {
    question: 'Can you integrate your ERP with my existing systems?',
    answer:
      'Yes. We offer seamless API integrations with CRMs, finance tools, warehouse systems, and legacy applications.',
  },
  {
    question: 'Do you offer cloud-based deployment and support multi-location businesses?',
    answer:
      'Yes, our ERP is cloud-native, supports hybrid cloud environments, and allows centralized control across multiple locations.',
  },
  {
    question: 'Do you provide mobile and web applications for your ERP and platform solutions?',
    answer:
      'Yes, we offer dedicated mobile apps for Android and iOS, as well as responsive web applications for all our ERP modules, car selling platforms, and HR solutions. These apps ensure that your team can access, manage, and monitor operations anytime, anywhere whether it\'s tracking vehicle shipments, managing HR tasks, or accessing dashboards on the go.',
  },
];

const carSellingFaqs = [
  {
    question: 'What is the Car Selling Platform you offer?',
    answer:
      'It’s a digital cloud platform for showcasing vehicles, managing buyer-seller interactions, processing secure payments, and tracking vehicle availability. It supports dealers and private sellers alike.',
  },
  {
    question: 'Can I manage private listings and dealership inventory in one platform?',
    answer:
      'Yes. We provide portals for both dealer management and private sellers, with centralized control over listings, specs, media uploads, and real-time availability.',
  },
  {
    question: 'Do you support payment and escrow integrations?',
    answer:
      'Yes. Our platform integrates with secure payment gateways and can support escrow models to ensure safe buyer-seller transactions.',
  },
]

 const hrmsFaqs = [
  {
    question: 'What does your HR management solution include?',
    answer:
      'Our HRMS covers onboarding, attendance, payroll, tax compliance, performance reviews, internal job posting, and compliance reporting all in one intuitive platform.',
  },
  {
    question: 'Is your HR system suitable for large organizations with multiple departments?',
    answer:
      'Yes. It’s designed for scalability, with role-based access, department-wise tracking, and advanced analytics dashboards.',
  },
  {
    question: 'Can I automate payroll and manage leaves with your system?',
    answer:
      'Definitely. Our HRMS includes automated payroll processing, leave request workflows, tax calculations, and payslip generation.',
  },
]
//<ERPFAQSection faqs={importExportFaqs} /> <ERPFAQSection faqs={carSellingFaqs} /> <ERPFAQSection faqs={hrmsFaqs} />

const cyberRiskCards = [
  {
    title: "Cyber Risk Register & Lifecycle Management",
    description:
      "Centralized module to identify, log, assess, and track cyber risks across various domains—network, OS, IAM, and third-party. Supports categorization by inherent and residual risk, with linkage to business units and enterprise risk statements. Enables risk updates, ownership assignments, and historical tracking for audits and reviews.",
  },
  {
    title: "Risk Scoring & Impact Analysis Engine",
    description:
      "Automates risk scoring using internal data and external threat feeds, factoring in likelihood, impact, and breach probability. Includes customizable scoring models aligned with regulatory and industry frameworks (e.g., NIST, ISO 27005). Provides visual scoring trends and risk heatmaps for informed decision-making.",
  },
  {
    title: "Vulnerability & Threat Management",
    description:
      "Integrates with vulnerability scanners and threat intelligence feeds to detect, log, and track exposures across IT assets. Supports ticket creation for remediation actions, and maps vulnerabilities to specific risks and business areas. Allows evidence attachments, timelines, and closure validation to maintain audit readiness.",
  },
  {
    title: "Compliance & ISMS Support (ISO/IEC 27001 & 31000 Ready)",
    description:
      "Helps map controls to ISO 27001, NIST CSF, or organization-specific policies, and track non-compliance and remediation. Identified gaps are logged, assigned, and monitored in real-time through dashboards and auto-notifications. Enables audit trail generation and evidence management for internal and external audits.",
  },
  {
    title: "Exception Management & Risk Acceptance Workflow",
    description:
      "Automates governance workflows for exceptions, including multi-level approvals, justifications, and sign-off tracking. Ensures that accepted risks are documented, reviewed periodically, and revisited based on changes in threat landscape. Helps enforce risk appetite thresholds and escalation rules.",
  },
  {
    title: "Real-Time Dashboards & Analytics Reporting",
    description:
      "Offers interactive dashboards showing risk trends, domain-level metrics, open issues, and remediation progress. Generates multiple report types—Summary, Issues, and Detailed—exportable in various formats for stakeholders. Supports scheduled reporting, risk scoring breakdowns, and drill-down capability for granular insights.",
  },
  {
    title: "Third-Party Risk Management (TPRM)",
    description:
      "Tracks and evaluates cybersecurity posture of vendors and partners with questionnaires, scoring, and ongoing monitoring. Supports supplier onboarding risk assessments, SLA tracking, and third-party breach notifications. Helps reduce supply chain risks and ensure vendor compliance with security policies.",
  },
  {
    title: "Attack Surface Monitoring (Emerging Trend)",
    description:
      "Continuously scans and maps all exposed digital assets (internal/external) to detect misconfigurations or shadow IT. Leverages external threat intelligence and passive scanning to identify high-risk entry points. Helps prioritize remediation and close attack vectors before they can be exploited.",
  },
  {
    title: "AI-Driven Threat Intelligence & Risk Prediction (Emerging Trend)",
    description:
      "Uses AI/ML models to analyze behavioral patterns and predict potential future threats or exploit paths. Provides early warning indicators and suggested mitigation actions based on trend data and anomaly detection. Enhances proactive defense by shifting from reactive to predictive cyber risk management.",
  },
];
