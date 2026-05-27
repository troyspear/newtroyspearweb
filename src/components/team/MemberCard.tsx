import Image from 'next/image'
import { User } from 'lucide-react'
import type { TeamMember } from '@/lib/data/team-members'

export default function MemberCard({ member }: { member: TeamMember }) {
  const hasImage = member.image && !member.image.includes('placeholder')
  const displayRole = member.role === 'Member' ? `${member.subTeam} Member` : member.role
  const classOf = member.grade ? `, CO ${2026 + (12 - member.grade)}` : ''

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center shrink-0 overflow-hidden">
        {hasImage ? (
          <Image
            src={member.image}
            alt={member.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-4 h-4 text-fg-muted" aria-hidden="true" />
        )}
      </div>
      <div>
        <p className="text-sm text-fg">{member.name}</p>
        <p className="text-xs text-fg-muted mt-0.5">{displayRole}{classOf}</p>
      </div>
    </div>
  )
}
