import Image from "next/image"

export default function CImage({image}:{image:string}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        alt="Possible - Silhouette against sunset"
        width={600}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  )
}

