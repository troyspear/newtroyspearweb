'use client'

import { getMembersByYear, subTeams } from '@/lib/data/team-members'
import MemberCard from './MemberCard'

const SUB_TEAM_ORDER = ['Leadership', 'Mechanical', 'Electrical', 'Software', 'General'] as const

export default function TeamGrid({ year }: { year: string }) {
  const members = getMembersByYear(year)
  const grouped = SUB_TEAM_ORDER.map((team) => ({
    name: team,
    members: members.filter((m) => m.subTeam === team),
  })).filter((g) => g.members.length > 0)

  return (
    <div className="space-y-12">
      {grouped.map((group) => {
        const info = subTeams.find((t) => t.name === group.name)
        return (
          <div key={group.name}>
            <h3 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-1">
              {group.name}
            </h3>
            {info && (
              <p className="text-xs text-fg-muted leading-relaxed mb-4 max-w-xl">{info.description}</p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
              {group.members.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
