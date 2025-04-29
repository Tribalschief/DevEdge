import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Car, Clock, Package, Users,  Globe, Import, Ship, Truck, } from "lucide-react"
import Link from "next/link"
import { ERPFAQSection } from "./faq"

export default function ERMService() {
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
          <h2 className="text-xl font-bold mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-8">with Dynamic Workflows</p>

          <Tabs defaultValue="vehicle-shipping" className="w-full ">
          <TabsList className="w-full h-full bg-gray-900 text-white py-16 px-4">
  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
    <TabsTrigger
      value="vehicle-shipping"
      className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:text-purple-500 transition-all"
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
      value="car-selling"
      className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:text-purple-500 transition-all"
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
      className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:text-purple-500 transition-all"
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
      className="flex w-[250px] items-center p-4 space-x-4 bg-gray-800 rounded-lg hover:text-purple-500 transition-all"
    >
      <div className="bg-white rounded-full p-3">
        <Clock className="h-6 w-6 text-gray-900" />
      </div>
      <div>
        <h3 className="text-base font-semibold">Coming Soon</h3>
        <p className="text-xs text-purple-400">&nbsp;</p>
      </div>
    </TabsTrigger>
  </div>
</TabsList>




            {/* Vehicle Shipping Content */}
            <TabsContent value="vehicle-shipping">
              <Card className="border border-gray-200 ">
                <CardHeader>
                  <CardTitle>Vehicle Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full overflow-x-auto pb-4">
                    <Tabs defaultValue="import" className="w-full">
                      <div className="min-w-max">
                        <TabsList className="flex h-auto p-0 bg-transparent">
                          <TabsTrigger
                            value="import"
                            className="flex flex-col items-center w-40 py-4 px-6 rounded-none data-[state=active]:bg-purple-50 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                          >
                            <Import className="h-10 w-10 mb-2 text-purple-600" />
                            <span className="text-xl">Import</span>
                          </TabsTrigger>
                          <TabsTrigger
                            value="export"
                            className="flex flex-col items-center py-4 w-40  px-6 rounded-none data-[state=active]:bg-purple-50 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                          >
                            <Globe className="h-10 w-10 mb-2 text-purple-600" />
                            <span className="text-xs">Export</span>
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      <div className="h-px w-full bg-gray-200 mt-0"></div>

                      {/* Import Tab Content */}
                      <TabsContent value="import" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {serviceCards.map((card, index) => (
                            <Card key={index} className="border border-gray-200 shadow-sm">
                              <CardHeader>
                                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-md text-gray-600">{card.description}</p>
                              </CardContent>

                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      {/* Export Tab Content */}
                      <TabsContent value="export" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {exportCards.map((card, index) => (
                            <Card key={index} className="border border-gray-200 shadow-sm">
                              <CardHeader>
                                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-md text-gray-600">{card.description}</p>
                              </CardContent>
                              
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
              
            </TabsContent>

            {/* Car Selling Platform Content */}
            <TabsContent value="car-selling">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle>Car Selling Platform</CardTitle>
                  <p className="text-sm text-gray-600">as a Service</p>
                </CardHeader>
                <CardContent>
                  <div className="p-8 text-center">
                    <p className="text-gray-600">Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
              
            </TabsContent>

            {/* Human Resource Content */}
            <TabsContent value="human-resource">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle>Human Resource</CardTitle>
                  <p className="text-sm text-gray-600">Management Solution</p>
                </CardHeader>
                <CardContent>
                  <div className="p-8 text-center">
                    <p className="text-gray-600">Coming Soon</p>
                  </div>
                </CardContent>
              </Card>
              
            </TabsContent>

            {/* Coming Soon Content */}
            <TabsContent value="coming-soon">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-8 text-center">
                    <p className="text-gray-600">New features will be available soon</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 sm:mb-10">
    <span className="text-black">Frequently Asked </span>
    <span className="text-purple-600 block">Questions</span>
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {/* Import/Export Section */}
    <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
        Import / Export
      </h3>
      <ERPFAQSection faqs={importExportFaqs} />
    </div>
    
    {/* Car Selling Platform Section */}
    <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
        Car Selling Platform
      </h3>
      <ERPFAQSection faqs={carSellingFaqs} />
    </div>
    
    {/* HRMS Section */}
    <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">
        HRMS
      </h3>
      <ERPFAQSection faqs={hrmsFaqs} />
    </div>
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
]

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