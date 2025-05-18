interface SectionTitleProps {
    title: string
    highlight?: string
    subtitle?: string
    centered?: boolean
    className?: string
  }
  
  export function SectionTitle({ title, highlight, subtitle, centered = false, className = "" }: SectionTitleProps) {
    // Split the title to highlight a specific word if provided
    let titleContent
  
    if (highlight) {
      const parts = title.split(highlight)
      titleContent = (
        <>
          {parts[0]}
          <span className="text-purple-700">{highlight}</span>
          {parts[1]}
        </>
      )
    } else {
      titleContent = title
    }
  
    return (
      <div className={`${centered ? "text-center" : ""} mt-10 mb-12 ${className}`}>
        <div className="flex items-center gap-2 mb-3 mx-auto justify-center">
          <div className="relative">
            <div className="lg:w-24 lg:h-12 w-20 h-10   bg-purple-700 z-1 rounded-br-lg rounded-tr-lg rounded-bl-lg absolute -left-10 lg:-top-10 -top-8"></div>
            <div className="lg:w-24 lg:h-12 w-20 h-10  bg-black rounded-lg z-0 relative"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{titleContent}</h2>
        </div>
        {subtitle && <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    )
  }
  
  