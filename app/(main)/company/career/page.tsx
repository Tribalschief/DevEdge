import JoinSection from "@/components/contact/submitcv"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, MapPin } from "lucide-react"
import Link from "next/link"

export default function CareerPage() {
  return (
    <div className="container mx-auto px-4 py-12  mt-[100px]">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          We're looking for passionate individuals to help us build the future of technology.
        </p>
        <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90" size="lg">
          <Linkedin className="mr-2 h-5 w-5" />
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </Link>
        </Button>
      </header>

      

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
        <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Take the first step toward your next great career opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-[#0077B5] text-white hover:bg-[#0077B5]/90 hover:text-white"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </section>
      <section className="mb-12">
         <JoinSection/>
      </section>
    </div>
  )
}

// Sample data
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    isRemote: true,
    description:
      "We're looking for an experienced frontend developer to help build our next-generation web applications using React and TypeScript.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "New York, NY",
    isRemote: true,
    description:
      "Join our backend team to design and implement scalable APIs and services using Node.js and PostgreSQL.",
  },
  {
    id: 3,
    title: "Product Designer",
    location: "Austin, TX",
    isRemote: false,
    description:
      "Help shape our product experience by creating intuitive and beautiful user interfaces and experiences.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Seattle, WA",
    isRemote: true,
    description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes.",
  },
  {
    id: 5,
    title: "Marketing Manager",
    location: "Chicago, IL",
    isRemote: false,
    description: "Lead our marketing efforts to reach new customers and grow our brand presence in the market.",
  },
  {
    id: 6,
    title: "Customer Success Specialist",
    location: "Boston, MA",
    isRemote: true,
    description: "Work directly with our customers to ensure they're successful with our products and services.",
  },
]

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
