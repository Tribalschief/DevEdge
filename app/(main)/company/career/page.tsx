'use client'
import JoinSection from "@/components/contact/submitcv"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import { DividerWithButton } from "./_components/divider"
import career from '@/public/carrer.png'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
function BenefitCard({ title, items, icon = "✓" }:{title:string, items:string[], icon?:string}) { // Added icon prop
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative border border-gray-300 p-6 rounded-lg shadow-md overflow-hidden" // Added relative and overflow-hidden
        // Removed old hover classes like hover:shadow-lg, hover:-translate-y-1
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }} // Lift effect
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }} // Spring transition for lift
    >
      {/* Card Content */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 items-start"> {/* Added items-start for better alignment */}
            <span className="text-green-500 font-bold mt-1">{icon}</span> {/* Styled icon */}
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Animated Bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600" // Adjusted gradient colors
        initial={{ scaleX: 0, originX: 0 }} // Start animation from the left
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition for the bar
      />
    </motion.div>
  );
}

const benefitsData = [
  {
    title: "Competitive Compensation",
    items: [
      "Salary ranges above industry average",
      "Performance-based bonuses",
      "Stock options for all employees",
    ],
  },
  {
    title: "Health & Wellness",
    items: [
      "Comprehensive medical, dental & vision",
      "Mental health support",
      "Gym membership reimbursement",
    ],
  },
  {
    title: "Work-Life Balance",
    items: [
      "Flexible working hours",
      "Remote work options",
      "Generous PTO policy", // Changed from 'Unlimited' for realism, adjust if needed
    ],
  },
  {
    title: "Career Growth",
    items: [
      "Clear promotion paths",
      "Learning & development budget",
      "Mentorship programs",
    ],
  },
  {
    title: "Company Culture",
    items: [
      "Diverse and inclusive environment",
      "Regular team building events",
      "Transparent leadership",
    ],
  },
  {
    title: "Additional Perks",
    items: [
      "Free daily lunches & snacks", // Added snacks
      "Latest equipment & tools",
      "Commuter benefits program", // Slightly rephrased
    ],
  },
];

function BenefitsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {benefitsData.map((benefit, index) => (
        <BenefitCard
          key={index} // It's better to use a unique ID if available, otherwise index is okay for static lists
          title={benefit.title}
          items={benefit.items}
          // Optionally pass a different icon if needed: icon="⭐"
        />
      ))}
    </div>
  );
}


export default function CareerPage() {
  return (
    <main className="min-h-screen xl:mt-[120px] mt-24 h-full">
    <DividerWithButton heading="Join Our Team" image={career} />
    <div className="container mx-auto px-4 py-12  mt-[100px]">
      
      
      

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Join Us</h2>
        <BenefitsSection/>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-muted-foreground/20">
            {hiringSteps.map((step, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute text-white bg-[#6208CA] flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-background">
                  {index + 1}
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold">{step.title}</h3>
                <p className="mb-4 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="text-center mb-12">
      <ConsultingBenefits/>
      </section>
      <div className="mb-12">
         <JoinSection/>
      </div>
    </div>
    </main>
  )
}


const hiringSteps = [
  {
    title: "Application Review",
    description:
      "Our team reviews your application and resume to determine if your skills and experience match our requirements.",
  },
  {
    title: "Initial Screening",
    description: "A brief phone or video call to discuss your background, experience, and interest in the role.",
  },
  {
    title: "Technical Assessment",
    description: "Depending on the role, you may be asked to complete a technical challenge or skills assessment.",
  },
  {
    title: "Team Interviews",
    description:
      "Meet with several team members to discuss your experience, skills, and fit for the role and company culture.",
  },
  {
    title: "Final Decision",
    description: "We'll make a decision and extend an offer to the selected candidate.",
  },
]



// --- Define Unique Icon Components ---

// Icon for the main "Culture" section
const CultureIcon = ({ className = "w-7 h-7 text-white" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    {/* Placeholder Path: Represents people/team */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Icon for "Diverse Industry Exposure"
const IndustryIcon = ({ className = "w-7 h-7 text-white" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    {/* Placeholder Path: Represents briefcase/business */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Icon for "High Earning Potential"
const EarningsIcon = ({ className = "w-7 h-7 text-white" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    {/* Placeholder Path: Represents growth/graph */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);


// --- Main Component ---

function ConsultingBenefits() {
  return (
    <main className="mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center w-full">
          <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
              {/* Use the Culture Icon */}
              <CultureIcon />
            </div>
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                A Culture of Curiosity, Integrity & Impact
              </h2>
              <hr className="border-t-2 border-gray-200 my-4 w-full" />
              <p className="text-gray-600 text-base leading-relaxed">
                At DevEdge Consulting, we don’t just hire talent — we invest in it.
                Join a team where innovation meets impact, where you're empowered
                to lead, learn, and leave a mark.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full">
          {/* Box 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md w-full">
            <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
                 {/* Use the Industry Icon */}
                 <IndustryIcon />
              </div>
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                  Diverse Industry Exposure
                </h3>
                <hr className="border-t-2 border-gray-200 my-4 w-full" />
                <p className="text-gray-600 text-base leading-relaxed">
                  Consultants work with clients across various industries, gaining broad
                  knowledge, experience, and problem-solving skills that accelerate career growth.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-md w-full">
            <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
              <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
                 {/* Use the Earnings Icon */}
                 <EarningsIcon />
              </div>
              <div className="w-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                  High Earning Potential
                </h3>
                <hr className="border-t-2 border-gray-200 my-4 w-full" />
                <p className="text-gray-600 text-base leading-relaxed">
                  Consulting roles often offer competitive salaries, performance-based
                  bonuses, and opportunities for rapid financial growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}