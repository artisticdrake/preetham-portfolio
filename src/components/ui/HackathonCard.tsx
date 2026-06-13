import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, MapPin } from 'lucide-react'
import { Hackathon } from '../../data/hackathons'
import { EASE } from '../../lib/motion'
import TechPill from './TechPill'

interface HackathonCardProps {
  hackathon: Hackathon
}

export default function HackathonCard({ hackathon }: HackathonCardProps) {
  const isWinner = hackathon.prize !== null
  // Placements and selections without prize money still deserve the accent treatment,
  // as do entries explicitly flagged for the halo.
  const isNotable = isWinner || hackathon.result !== 'Participated' || !!hackathon.highlight
  const stat = hackathon.stat ?? hackathon.prize

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: EASE }}
      className={[
        'relative rounded-xl border p-6 transition-colors duration-300',
        isNotable
          ? 'border-brand-cyan/20 bg-brand-surface glow-cyan hover:border-brand-cyan/35'
          : 'border-white/[0.06] bg-brand-surface hover:border-white/[0.12]',
      ].join(' ')}
    >
      {isNotable && (
        <div
          className="absolute top-0 left-0 right-0 h-px rounded-t-xl"
          style={{ background: 'linear-gradient(90deg, transparent, #00D9FF, transparent)' }}
        />
      )}

      <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {isNotable && <Trophy size={16} className="text-brand-cyan shrink-0" />}
            <h3 className="font-serif text-xl text-brand-primary">{hackathon.name}</h3>
          </div>
          <p className="text-xs font-mono text-brand-muted">{hackathon.track}</p>
        </div>

        {stat && (
          <div className="text-left sm:text-right shrink-0">
            <div className="text-3xl font-mono font-medium text-brand-cyan">{stat}</div>
            <div className="text-xs text-brand-muted font-mono">{hackathon.statLabel ?? hackathon.result}</div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mb-4 flex-wrap text-xs text-brand-secondary font-mono">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {hackathon.date}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} />
          {hackathon.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={12} />
          Team of {hackathon.teamSize}
          {hackathon.totalTeams && ` · ${hackathon.totalTeams} competing teams`}
        </span>
      </div>

      <p className="text-sm text-brand-secondary leading-relaxed mb-4">
        {hackathon.description}
      </p>

      {(hackathon.youtube || hackathon.projectUrl) && (
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          {hackathon.youtube && (
            <a
              href={hackathon.youtube}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="hackathon-demo"
              data-umami-event-name={hackathon.name}
              className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1 w-fit"
            >
              Watch Demo →
            </a>
          )}
          {hackathon.projectUrl && (
            <a
              href={hackathon.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="hackathon-project"
              data-umami-event-name={hackathon.name}
              className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1 w-fit"
            >
              View Project →
            </a>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {hackathon.tech.map(t => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.div>
  )
}
