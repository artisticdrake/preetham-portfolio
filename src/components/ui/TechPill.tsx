interface TechPillProps {
  label: string
  glow?: boolean
}

export default function TechPill({ label, glow = false }: TechPillProps) {
  return (
    <span
      className={[
        'inline-block px-2.5 py-1 text-[11px] font-mono rounded-md',
        'bg-brand-elevated border border-white/[0.06] text-brand-secondary',
        'transition-colors duration-200 cursor-default',
        'hover:border-brand-cyan/30 hover:text-brand-primary',
        glow ? 'border-brand-cyan/20 text-brand-cyan' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  )
}
