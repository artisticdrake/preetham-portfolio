import { ProjectStatus } from '../../data/projects'

interface StatusBadgeProps {
  status: ProjectStatus
}

const config: Record<ProjectStatus, { label: string; classes: string }> = {
  prize:    { label: '🏆 Prize Winner', classes: 'text-brand-cyan border-brand-cyan/25 bg-brand-cyan/8' },
  deployed: { label: '✓ Deployed',      classes: 'text-brand-cyan border-brand-cyan/25 bg-brand-cyan/8' },
  active:   { label: '⚡ Active Build',  classes: 'text-brand-amber border-brand-amber/25 bg-brand-amber/8' },
  complete: { label: 'Complete',         classes: 'text-brand-muted border-brand-muted/30 bg-brand-elevated' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, classes } = config[status]
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono border ${classes}`}>
      {label}
    </span>
  )
}

// Separate component for the navbar "Open to Work" badge
export function NavStatusBadge({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
        <span className="text-xs text-brand-secondary font-sans">Open to Work</span>
      </div>
    )
  }
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-[5px] w-1.5 h-1.5 rounded-sm bg-brand-cyan shrink-0" />
      <div>
        <p className="text-sm font-sans text-brand-primary leading-tight">Actively seeking full-time roles</p>
        <p className="text-[11px] font-mono text-brand-muted mt-0.5">STEM OPT · Available May 2026</p>
      </div>
    </div>
  )
}
