import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Car, Clock, Package, Users,  Ship, Import, } from "lucide-react"
import Link from "next/link"

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
      <section className="w-full bg-gray-900 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center p-4 space-x-3">
            <div className="bg-white rounded-full p-2">
              <Package className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Vehicle Shipping</h3>
              <p className="text-xs text-gray-300">Import/ Export/ ERP</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-3">
            <div className="bg-white rounded-full p-2">
              <Car className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Car Selling Platform</h3>
              <p className="text-xs text-gray-300">as a Service</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-3">
            <div className="bg-white rounded-full p-2">
              <Users className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Human Resource</h3>
              <p className="text-xs text-gray-300">Management Solution</p>
            </div>
          </div>

          <div className="flex items-center p-4 space-x-3">
            <div className="bg-white rounded-full p-2">
              <Clock className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="text-sm font-medium">coming soon</h3>
              <p className="text-xs text-gray-300">&nbsp;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customizable Modules with Service Tabs */}
      <section className="w-full py-12 px-auto ">
        <div className="w-full sm:mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Experience Customizable Modules</h2>
          <p className="text-gray-600 mb-8">with Dynamic Workflows</p>

          <Tabs defaultValue="vehicle-shipping" className="w-full ">
            <TabsList className="grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 h-auto bg-purple-600 text-white">
              <TabsTrigger
                value="vehicle-shipping"
                className="flex items-center gap-2 py-5 text-base font-medium data-[state=active]:text-purple-700"
              >
                <Package className="h-16 w-16 sm:h-10 sm:w-10 md:w-16 md:h-16 mr-1" />
                <span className="hidden sm:inline">Vehicle Shipping</span>
                <span className="sm:hidden">Vehicle</span>
              </TabsTrigger>
              <TabsTrigger
                value="car-selling"
                className="flex items-center gap-2 py-5 text-base font-medium data-[state=active]:text-purple-700"
              >
                <Car className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Car Selling Platform</span>
                <span className="sm:hidden">Car</span>
              </TabsTrigger>
              <TabsTrigger
                value="human-resource"
                className="flex items-center gap-2 py-5 text-base font-medium data-[state=active]:text-purple-700"
              >
                <Users className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Human Resource</span>
                <span className="sm:hidden">HR</span>
              </TabsTrigger>
              <TabsTrigger
                value="coming-soon"
                className="flex items-center gap-2 py-5 text-base font-medium data-[state=active]:text-purple-700"
              >
                <Clock className="h-5 w-5 mr-1" />
                <span>Coming Soon</span>
              </TabsTrigger>
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
                            <Import className="h-6 w-6 mb-2 text-purple-600" />
                            <span className="text-xs">Import</span>
                          </TabsTrigger>
                          <TabsTrigger
                            value="export"
                            className="flex flex-col items-center py-4 w-40  px-6 rounded-none data-[state=active]:bg-purple-50 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-purple-600"
                          >
                            <Ship className="h-6 w-6 mb-2 text-purple-600" />
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
                                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs text-gray-600">{card.description}</p>
                              </CardContent>
                              <CardFooter>
                                <Link href="#" className="text-xs text-purple-700 flex items-center">
                                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </CardFooter>
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
                                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-xs text-gray-600">{card.description}</p>
                              </CardContent>
                              <CardFooter>
                                <Link href="#" className="text-xs text-purple-700 flex items-center">
                                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </CardFooter>
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

      {/* Risk Landscape */}
      <section className="w-full py-12 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">
            Gain Insights into Risk Landscape
            <br />
            with One-Click Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskReports.map((report, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium mb-2">{report.title}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-1 border text-left">ID</th>
                        <th className="p-1 border text-left">Risk</th>
                        <th className="p-1 border text-left">Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((row) => (
                        <tr key={row}>
                          <td className="p-1 border">{row}</td>
                          <td className="p-1 border">R{index + 1}</td>
                          <td className="p-1 border">{Math.floor(Math.random() * 5) + 1}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
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

const riskReports = [
  { title: "Control Risk Report" },
  { title: "Comprehensive Risk Report" },
  { title: "Enterprise Risk Summary" },
  { title: "Departmental Risk Summary" },
]

