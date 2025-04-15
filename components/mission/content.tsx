import type { ReactNode } from "react"

interface ContentSectionProps {
  title: string
  icon: string
  content: string
}

export default function ContentSection({ title, icon, content }: ContentSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center"><img src={icon}/></div>
      <div className="text-center">
        <div className="h-1 w-48 bg-purple-600 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-md text-gray-600 max-w-md mx-auto">{content}</p>
      </div>
    </div>
  )
}