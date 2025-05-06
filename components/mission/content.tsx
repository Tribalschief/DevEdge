interface ContentSectionProps {
  title: string
  icon: string
  content: string
}

export default function ContentSection({ title, icon, content }: ContentSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
      <div className="flex justify-center lg:justify-start">
        <img src={icon || "/placeholder.svg"} alt={title} className="w-20 sm:w-24 md:w-28 lg:w-24 xl:w-28 h-auto" />
      </div>

      {/* Purple line - horizontal on mobile, vertical on desktop */}
      <div className="w-24 h-1 lg:w-1 lg:h-auto lg:min-h-[100px] bg-purple-600 my-4 lg:my-0"></div>

      <div className="text-center lg:text-left px-4 lg:px-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-sm sm:text-base md:text-md text-gray-600 max-w-md mx-auto lg:mx-0">{content}</p>
      </div>
    </div>
  )
}