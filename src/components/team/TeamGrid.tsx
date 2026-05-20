'use client'

import { teamMembers, subTeams } from '@/lib/data/team-members'
import MemberCard from './MemberCard'

export default function TeamGrid() {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
          Members
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-medium text-fg-muted uppercase tracking-wide mb-6">
          Sub-Teams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="mechanical">
          {subTeams.map((team) => (
            <div key={team.name}>
              <h4 className="text-sm font-medium text-fg mb-1">{team.name}</h4>
              <p className="text-xs text-fg-muted leading-relaxed">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
