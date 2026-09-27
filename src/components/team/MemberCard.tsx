import Image from 'next/image'
import type { TeamMember } from '@/lib/data/team-members'

const avatarTone: Record<TeamMember['subTeam'], string> = {
  Leadership: 'bg-accent text-page',
  Mechanical: 'bg-amber-500/15 text-amber-800 dark:text-amber-300',
  Electrical: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300',
  Software: 'bg-violet-500/15 text-violet-800 dark:text-violet-300',
  General: 'bg-surface text-fg-secondary',
}

function initials(name: string) {
  const parts = name.split(' ')
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

export default function MemberCard({ member }: { member: TeamMember }) {
  const hasImage = member.image && !member.image.includes('placeholder')
  const displayRole = member.role === 'Member' ? `${member.subTeam} Member` : member.role
  const classOf = member.grade ? `Class of ${2026 + (12 - member.grade)}` : null

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-elevated p-3 shadow-sm">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden font-display text-sm font-semibold ${hasImage ? '' : avatarTone[member.subTeam]}`}
      >
        {hasImage ? (
          <Image
            src={member.image}
            alt={member.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{initials(member.name)}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-fg">{member.name}</p>
        <p className="text-xs text-fg-secondary mt-0.5">{displayRole}</p>
        {classOf && <p className="text-xs text-fg-muted">{classOf}</p>}
      </div>
    </div>
  )
}
