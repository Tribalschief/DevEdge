import LeaderProfile from "./profile"
import type { Leader } from "./types"

interface LeadershipSectionProps {
  leaders: Leader[]
}

export default function LeadershipSection({ leaders }: LeadershipSectionProps) {
  return (
    <div className="space-y-12">
      {leaders.map((leader, index) => (
        <LeaderProfile key={index} leader={leader} />
      ))}
    </div>
  )
}