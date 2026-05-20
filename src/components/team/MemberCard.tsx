import type { TeamMember } from '@/lib/data/team-members'

export default function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <p className="text-sm text-fg">{member.name}</p>
      <p className="text-xs text-fg-muted mt-0.5">{member.role}</p>
    </div>
  )
}
