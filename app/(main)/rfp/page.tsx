
import RfpForm from "@/components/rfp/rfp"
import ContactHeader from "@/components/rfp/header"



export default function ContactPage() {
  return (
    <main className=" bg-gray-100 relative h-[2500px] xs:h-[2300px] sm:h-[2300px] md:h-[2300px] lg:h-[2250px] xl:h-[2250px]" >
      <ContactHeader />
     <div className="absolute  left-1/2 top-[10%] transform -translate-x-1/2 w-full   rounded-b-lg shadow-lg">
     
        <RfpForm/>
     </div>
    </main>
  )
}