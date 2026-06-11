import { motion } from 'framer-motion'
import { TimelineEntry } from '../../data/timeline'
import { EASE } from '../../lib/motion'
import TechPill from './TechPill'

interface TimelineItemProps {
  entry: TimelineEntry
  isLast: boolean
}

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, visible: {} }}
    >
      {/* Spine — dot pops in, line draws downward */}
      <div className="flex flex-col items-center shrink-0 w-5">
        <motion.div
          className="w-2 h-2 rounded-full mt-[5px] shrink-0 bg-brand-cyan"
          style={{ boxShadow: '0 0 8px rgba(0,217,255,0.45)' }}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: EASE } },
          }}
        />
        {entry.current && (
          <span className="absolute top-[5px] w-2 h-2 rounded-full bg-brand-cyan/60 animate-ping" />
        )}
        {!isLast && (
          <motion.div
            className="w-px flex-1 bg-white/10 mt-1.5 origin-top"
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1, transition: { duration: 0.8, ease: EASE, delay: 0.15 } },
            }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-8 min-w-0 flex-1"
        variants={{
          hidden: { opacity: 0, x: -14 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE, delay: 0.1 } },
        }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
          <div>
            <h3 className="font-sans font-semibold text-brand-primary text-sm leading-tight">
              {entry.org}
            </h3>
            <p className="text-sm text-brand-secondary mt-0.5">{entry.role}</p>
          </div>
          <span className="text-[11px] font-mono text-brand-muted shrink-0 mt-0.5">
            {entry.period}
          </span>
        </div>

        {entry.location && (
          <p className="text-[11px] font-mono text-brand-muted mb-2">{entry.location}</p>
        )}

        {entry.bullets && entry.bullets.length > 0 && (
          <ul className="space-y-1 mb-3">
            {entry.bullets.map((b, i) => (
              <li key={i} className="text-sm text-brand-secondary flex gap-2 leading-relaxed">
                <span className="text-brand-muted mt-0.5 shrink-0">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.tech && entry.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.tech.map(t => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
