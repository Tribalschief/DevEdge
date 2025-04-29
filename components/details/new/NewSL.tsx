export function NewServicesList() {
  const services = [
    "Internal Audit",
    "Cybersecurity Services",
    "Multi-Cloud Services",
    "Intelligent Enterprise Systems & Application Development Services",
    "Analytics And Artificial Intelligence Services",
    "Digital Transformation & Business Automation",
    "Business Continuity Management (BCM) Services",
    "Technology Consulting And GRC (Governance, Risk & Compliance)",
    "Precision Data Management & Privacy Services",
    "Integrated Accounting & Financial Advisory Services",
    "Risk Management & Human Capital Advisory",
    "Industrial Control Systems (ICS) & OT Security Services",
    "Fixed Asset Management",
  ];  
  return (
     
      <div className="relative flex flex-col items-center mt-16 sm:mt-12 mb-16  justify-center">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-widest text-purple-700">
          OUR SERVICES
        </h2>
  
        {/* Content Box */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-black rounded-lg p-4 sm:p-6 md:p-8 border-4 border-b-[10px] border-black shadow-2xl">
          {/* Gradient Strip */}
          <div className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-b from-purple-500 to-blue-500" />
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <span className="font-bold min-w-[20px]">{index + 1}.</span>
                <p className="text-xs sm:text-sm md:text-base">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  
    );
  }