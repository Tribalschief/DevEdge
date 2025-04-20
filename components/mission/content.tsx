interface ContentSectionProps {
  title: string
  icon: string
  content: string
}

export default function ContentSection({ title, icon, content }: ContentSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <img
          src={icon}
          alt={title}
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
        />
      </div>
      <div className="text-center px-4">
        <div className="h-1 w-24 sm:w-32 md:w-40 bg-purple-600 mx-auto mb-4"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-md text-gray-600 max-w-md mx-auto">
          {content}
        </p>
      </div>
    </div>
  )
}
