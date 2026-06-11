import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

interface SectionHeadingProps {
  index: string
  title: string
  right?: ReactNode
  className?: string
}

/**
 * Animated section header: numbered index fades in from the left,
 * the title slides up from behind a mask, and a gradient rule draws
 * itself across the remaining width.
 */
export default function SectionHeading({ index, title, right, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`flex items-center gap-4 mb-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: {} }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
        }}
        className="font-mono text-xs text-brand-cyan/70 tracking-widest"
        aria-hidden
      >
        {index}
      </motion.span>

      <h2 className="font-serif text-3xl md:text-4xl text-brand-primary italic overflow-hidden py-1 -my-1 pr-1">
        <motion.span
          className="block"
          variants={{
            hidden: { y: '115%' },
            visible: { y: 0, transition: { duration: 0.65, ease, delay: 0.05 } },
          }}
        >
          {title}
        </motion.span>
      </h2>

      <motion.div
        className="flex-1 h-px origin-left min-w-[2rem]"
        style={{ background: 'linear-gradient(90deg, rgba(0,217,255,0.3), rgba(255,255,255,0.05))' }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.2 } },
        }}
      />

      {right && (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.45 } },
          }}
          className="shrink-0"
        >
          {right}
        </motion.div>
      )}
    </motion.div>
  )
}
