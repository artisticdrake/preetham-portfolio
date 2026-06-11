import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'

interface StatCounterProps {
  numericValue?: number
  displayValue: string
  label: string
  sublabel: string
  prefix?: string
  suffix?: string
  formatWithCommas?: boolean
}

export default function StatCounter({
  numericValue,
  displayValue,
  label,
  sublabel,
  prefix = '',
  suffix = '',
  formatWithCommas = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const count = useCountUp(numericValue ?? 0, 1800, !!(numericValue && isInView))

  const formattedCount = formatWithCommas
    ? count.toLocaleString()
    : String(count)

  const shown = numericValue && isInView
    ? `${prefix}${formattedCount}${suffix}`
    : displayValue

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-4">
      <span className="text-3xl md:text-4xl font-mono font-medium text-brand-cyan tabular-nums">
        {shown}
      </span>
      <span className="mt-1.5 text-[11px] uppercase tracking-widest text-brand-muted leading-tight">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] text-brand-secondary leading-tight mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  )
}
