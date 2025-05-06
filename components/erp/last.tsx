"use client";
import { CalendarIcon, Heading, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "../contact/form";

export default function LastERM() {
  const scrollToSection = () => {
    const element = document.getElementById('target-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-purple-900 via-slate-950 to-black text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold">Take the Next Step</h1>
          <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto">
          All Your Operations,
          One Powerful Platform
          </p>
          <div className="pt-4" >
            <Button id="target-section" variant="outline" className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Book a Live Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex items-center justify-center bg-gradient-to-b from-[#f3eff8] to-white py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-medium text-center mb-10">
            Talk with Our Team and Get Answers
            <br />
            to Your Questions Related to
            <br />
            DevEdge ERP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="space-y-6 mt-[72px]">
              <div className="space-y-4">
              <FeatureItem 
  heading="✅ Proven ERP for Vehicle Logistics" 
  text="Streamlines import/export, fleet tracking, and customs compliance." 
/>
<FeatureItem 
  heading="🔐 Enterprise-Grade Security" 
  text="Includes built-in cybersecurity and risk management." 
/>
<FeatureItem 
  heading="⚙️ Modular & Scalable Platform" 
  text="Start with what you need expand to HR, sales, or compliance anytime." 
/>
<FeatureItem 
  heading="🌍 Trusted Across Middle East & Beyond" 
  text="Supporting operations in multiple branches and international shipping." 
/>
<FeatureItem 
  heading="👨‍💼 Industry Expertise You Can Rely On" 
  text="Built by logistics and tech professionals for real-world challenges." 
/></div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={<Mail className="w-5 h-5 text-gray-600" />}
                  title="Email"
                  lines={["contact@devedgeconsulting.com"]}
                />
                <div className="space-y-2">
                <ContactCard
                  icon={<MapPin className="w-5 h-5 text-gray-600" />}
                  title="Location Branch 1"
                  lines={[
                    "Al Ruqa Al Hamra - Near Souk Al Haraj",
                    "Sharjah | United Arab Emirates",
                     
                  ]}
                  
                />
                <ContactCard
                  icon={<MapPin className="w-5 h-5 text-gray-600" />}
                  title="Location Branch 2"
                  lines={[
                    "Suit no. 805, Park Avenue Building. ",
                     "Sharah-e-faisal | Karachi, Pakistan",
                     
                  ]}/>
                  <ContactCard
                  icon={<MapPin className="w-5 h-5 text-gray-600" />}
                  title="Location Branch 3"
                  lines={[
                    "Alia Plaza, Thumamah Road at the Cross Roads with Abi Baker ",
                     "Al-Siddiq Road | Riyadh, Kingdom of Saudi Arabia",
                     
                  ]}/>
                  </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mb-20" id="target-section">
              <ContactForm />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ heading,text }: {heading:string , text: string }) {
  return (
    <div className="flex flex-col items-start gap-x-2">
      <div className="mt-1">
        <div className="mt-4 text-xl font-bold text-[#3f3f3f]">{heading}</div>
      </div>
      <p className="text-sm sm:text-base">{text}</p>
    </div>
  );
}

// Contact Card Component
function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-[#f8f9ff] to-[#fcfcff] rounded-xl p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div>
          <div className="text-sm font-semibold text-gray-800">{title}</div>
          {lines.map((line, index) => (
            <div key={index} className="text-sm text-gray-700">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


                     