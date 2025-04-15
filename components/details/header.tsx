"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const DetailedHeader = ({
  image = "/placeholder.svg",
  title = "Service Title",
}: {
  image?: string
  title?: string
}) => {
  const pathname = usePathname()

  return (
    <div className="relative w-full my-[80px] md:my-[100px] h-48">
      <Image
        src={image || "/placeholder.svg"}
        alt="service"
        width={500}
        height={300}
        style={{ width: "100%", height: "200%" }}
      />
      <div className="absolute inset-0 flex sm:mt-20 px-4 md:mx-48 text-white">
        <div className="flex flex-col w-full md:w-auto items-center md:items-start justify-center md:justify-items-start">
          <h1 className="mt-12 md:mt-24 font-bold text-center md:text-left">
            <h3 className="text-sm md:text-base">DevEdge{pathname}</h3>
            <span className="text-3xl md:text-7xl">{title}</span>
          </h1>
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4">
            <Button className="w-full sm:w-auto md:text-base md:px-4 md:py-2"><Link href={"/rfp"}>Submit RFP</Link></Button>
            <Button className="w-full sm:w-auto md:text-base md:px-4 md:py-2"><Link href={"/contact"}>Contact Us</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
