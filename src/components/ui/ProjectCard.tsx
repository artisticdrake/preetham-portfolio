import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Presentation } from 'lucide-react'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { Project } from '../../data/projects'
import { EASE } from '../../lib/motion'
import TechPill from './TechPill'
import StatusBadge from './StatusBadge'

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 },
  }),
}

interface ProjectCardProps {
  project: Project
  index?: number
  className?: string
}

export default function ProjectCard({ project, index = 0, className = '' }: ProjectCardProps) {
  const isWinner = project.status === 'prize'
  const ref = useRef<HTMLDivElement>(null)

  // Track the cursor so the spotlight overlay follows it via CSS vars
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      variants={cardReveal}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={[
        'relative flex h-full flex-col p-5 rounded-xl bg-brand-surface overflow-hidden group',
        'border transition-colors duration-300',
        isWinner
          ? 'border-brand-cyan/20 glow-cyan hover:border-brand-cyan/40'
          : 'border-white/[0.07] hover:border-white/[0.16]',
        className,
      ].join(' ')}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Cursor-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(0,217,255,0.07), transparent 70%)',
        }}
      />

      {/* Top accent line for winner */}
      {isWinner && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #00D9FF 40%, transparent)' }}
        />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h3 className="font-serif text-lg text-brand-primary leading-tight">{project.name}</h3>
        <div className="flex items-center gap-2 shrink-0 pt-0.5">
          {project.links.youtube && (
            <a
              href={project.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-link"
              data-umami-event-project={project.name}
              data-umami-event-kind="youtube"
              className="text-brand-muted hover:text-brand-primary hover:scale-110 transition-all"
              aria-label="Watch demo"
            >
              <FaYoutube size={14} />
            </a>
          )}
          {project.links.slides && (
            <a
              href={project.links.slides}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-link"
              data-umami-event-project={project.name}
              data-umami-event-kind="slides"
              className="text-brand-muted hover:text-brand-primary hover:scale-110 transition-all"
              aria-label="Presentation deck"
            >
              <Presentation size={14} />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-link"
              data-umami-event-project={project.name}
              data-umami-event-kind="demo"
              className="text-brand-muted hover:text-brand-primary hover:scale-110 transition-all"
              aria-label="Live demo"
            >
              <ExternalLink size={13} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="project-link"
              data-umami-event-project={project.name}
              data-umami-event-kind="github"
              className="text-brand-muted hover:text-brand-primary hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Status badge */}
      <div className="mb-2">
        <StatusBadge status={project.status} />
      </div>

      {/* Tagline */}
      <p className="text-[11px] font-mono text-brand-cyan mb-2">{project.tagline}</p>

      {/* Description */}
      <p className="text-sm text-brand-secondary leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Metric */}
      <div className="mb-3">
        <span className="text-xs font-mono px-2 py-1 rounded border text-brand-cyan border-brand-cyan/20 bg-brand-cyan/5">
          {project.metric}
        </span>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.div>
  )
}
