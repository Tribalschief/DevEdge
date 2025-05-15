
import RfpForm from "@/components/rfp/rfp"
import ContactHeader from "@/components/rfp/header"



export default function ContactPage() {
  return (
    <main className=" bg-gray-100 relative h-[2475px] sm:h-[2275px] md:h-[2250px] lg:h-[2225px]" >
      <ContactHeader />
     <div className="absolute  left-1/2 top-[10%] transform -translate-x-1/2 w-full   rounded-b-lg shadow-lg">
     
        <RfpForm/>
     </div>
    </main>
  )
}