
import ContactForm from "@/components/contact/form"
import ContactHeader from "@/components/contact/header"

import OfficeLocation from "@/components/contact/officeLocation"


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ContactHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-4 mt-4">
        <ContactForm />
        <OfficeLocation />
      </div>
    </main>
  )
}