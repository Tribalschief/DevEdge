
import ContactForm from "@/components/contact/form"
import ContactHeader from "@/components/contact/header"

import OfficeLocation from "@/components/contact/officeLocation"


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ContactHeader />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <ContactForm />
        <OfficeLocation />
      </div>
    </main>
  )
}