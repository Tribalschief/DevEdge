import { FeatureItem } from "./fitem"

interface FeaturesListProps {
  features: {
    iconSrc: any
    text: string
  }[]
}

export function FeaturesList({ features }: FeaturesListProps) {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <FeatureItem key={index} iconSrc={feature.iconSrc.asset.url} text={feature.text} />
      ))}
    </div>
  )
}
