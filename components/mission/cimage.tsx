import Image from "next/image"

export default function CImage({ image }: { image: string }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt="Possible - Silhouette against sunset"
        width={1200}
        height={800}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto object-cover"
        priority={false}
      />
    </div>
  )
}
