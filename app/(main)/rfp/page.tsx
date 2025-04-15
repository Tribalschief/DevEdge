
import RfpForm from "@/components/rfp/rfp"
import ContactHeader from "@/components/rfp/header"



export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ContactHeader />
     <div className="h-[2100px]">
        <RfpForm/>
     </div>
    </main>
  )
}