"use client";
import { CalendarIcon, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "../contact/form";

export default function LastERM() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-purple-900 via-slate-950 to-black text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold">Take the Next Step</h1>
          <p className="text-sm sm:text-base opacity-80 max-w-xl mx-auto">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="pt-4">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
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
            DevEdge ERM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <FeatureItem text="Streamline vehicle bidding, auto-assign winning bids to inventory, and track auction history." />
                <FeatureItem text="Maintain real-time vehicle records with VIN, specifications, location, and status updates." />
                <FeatureItem text="Optimize container assignments, fleet routes, and overall shipping logistics." />
                <FeatureItem text="Developed on modern technology stack for enhanced efficiency and scalability." />
                <FeatureItem text="Manage shipping schedules, generate Bills of Lading (BOLs), and monitor international deliveries." />
                <FeatureItem text="Ensure compliance with UAE import regulations and accelerate customs clearance." />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={<Mail className="w-5 h-5 text-gray-600" />}
                  title="Email"
                  lines={["hr@devedgeconsulting.com"]}
                />
                <ContactCard
                  icon={<MapPin className="w-5 h-5 text-gray-600" />}
                  title="Location"
                  lines={[
                    "Al Ruqa Al Hamra - Near Souk Al Haraj",
                    "Sharjah | United Arab Emirates",
                  ]}
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mt-[-40px] sm:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-x-2">
      <div className="mt-1">
        <div className="w-3 h-3 rounded-full bg-purple-800"></div>
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
