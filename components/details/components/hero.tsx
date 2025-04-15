import Image from "next/image"
import why from '@/public/why.svg'
interface HeroSectionProps {
    title: string
    highlightedText: string
    description: string
  }
  
  export function HeroSection({ title, highlightedText, description }: HeroSectionProps) {
    return (
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-4">
            {title} <span className="text-purple-600">{highlightedText}</span>
          </h1>
          <p className="text-gray-800 text-center mb-8">{description}</p>
        </div>
        <div className="text-5xl font-bold italic mt-4 md:mt-0">
          <Image src={why} alt="Quote" width={100} height={100} />
        </div>
      </div>
    )
  }