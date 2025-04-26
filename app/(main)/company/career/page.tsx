import JoinSection from "@/components/contact/submitcv"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, MapPin } from "lucide-react"
import Link from "next/link"
import { DividerWithButton } from "./_components/divider"
import career from '@/public/carrer.png'
export default function CareerPage() {
  return (
    <main className="min-h-screen xl:mt-[120px] mt-24 h-full">
    <DividerWithButton image={career} />
    <div className="container mx-auto px-4 py-12  mt-[100px]">
      
      
      

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Work With Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Competitive Compensation</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Salary ranges above industry average</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Performance-based bonuses</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Stock options for all employees</span>
              </li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Health & Wellness</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Comprehensive medical, dental & vision</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Mental health support</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Gym membership reimbursement</span>
              </li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Flexible working hours</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Remote work options</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Unlimited PTO policy</span>
              </li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Career Growth</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Clear promotion paths</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Learning & development budget</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Mentorship programs</span>
              </li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Company Culture</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Diverse and inclusive environment</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Regular team building events</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Transparent leadership</span>
              </li>
            </ul>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Additional Perks</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Free daily lunches</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Latest equipment & tools</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Commuter benefits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-muted-foreground/20">
            {hiringSteps.map((step, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-background">
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

 function ConsultingBenefits() {
  return (
    <main className="mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center w-full">
          <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
              {/* Icon */}
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
                />
              </svg>
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
                {/* Icon */}
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
                  />
                </svg>
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
                {/* Icon */}
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
                  />
                </svg>
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