import Image from "next/image"
import { CheckCircle } from "lucide-react"

interface BigServiceProps {
  title: string
  description: string
  coverageItems: string[]
  imageSrc: string
}

export function BigService({ title, description, coverageItems, imageSrc }: BigServiceProps) {
  return (
    <div className="w-full py-8 px-4 md:px-8 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-3/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-8">{description}</p>

          <div>
            <h3 className="font-medium mb-4">
              Coverage Includes but not limited to:
            </h3>
            <ul className="space-y-3">
              {coverageItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative w-full max-w-md h-64 md:h-80">
            <Image
              src={imageSrc || '/placeholder.svg'}
              alt={title}
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}