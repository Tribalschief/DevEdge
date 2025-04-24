import Image from "next/image"

interface FeatureItemProps {
  iconSrc: string
  text: string
}

export function FeatureItem({ iconSrc, text }: FeatureItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-2 rounded-full">
        <Image src={iconSrc || "/placeholder.svg"} alt="Icon" width={80} height={80}  />
      </div>
      <div>
        <p className="font-semibold text-sm">{text}</p>
        <div className="h-1 w-full bg-purple-200 mt-2"></div>
      </div>
    </div>
  )
}
