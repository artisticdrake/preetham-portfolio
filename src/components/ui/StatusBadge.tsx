import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, BadgeCheck, ShieldCheck } from 'lucide-react'
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

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Scrambles toward `target` whenever it changes: characters resolve
// left-to-right while unresolved ones flicker through random glyphs.
function useScrambleText(target: string, durationMs = 700): string {
  const [text, setText] = useState(target)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(target)
      return
    }

    let frame = 0
    const totalFrames = Math.round(durationMs / 30)
    const id = setInterval(() => {
      frame++
      const resolved = Math.floor((target.length * frame) / totalFrames)
      let out = ''
      for (let i = 0; i < target.length; i++) {
        if (i < resolved || target[i] === ' ') out += target[i]
        else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }
      setText(out)
      if (frame >= totalFrames) {
        setText(target)
        clearInterval(id)
      }
    }, 30)
    return () => clearInterval(id)
  }, [target, durationMs])

  return text
}

const BADGE_LABELS = ['Open to Work', 'Work Authorization']

// Navbar / hero "Open to Work" badge — click reveals work-authorization details
export function NavStatusBadge({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false)
  const [labelIdx, setLabelIdx] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const label = useScrambleText(BADGE_LABELS[labelIdx])

  // Cycle the compact label every 5s; hold still while the popover is open
  useEffect(() => {
    if (!compact || open) return
    const id = setInterval(() => setLabelIdx(i => (i + 1) % BADGE_LABELS.length), 5000)
    return () => clearInterval(id)
  }, [compact, open])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        data-umami-event="open-to-work"
        aria-expanded={open}
        className="group text-left"
      >
        {compact ? (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
            <span className="inline-block w-[7.5rem] whitespace-nowrap text-left text-xs text-brand-secondary group-hover:text-brand-primary transition-colors font-sans">
              {label}
            </span>
            <ChevronDown
              size={11}
              className={`text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </div>
        ) : (
          <div className="flex items-start gap-2.5">
            <span className="mt-[5px] w-1.5 h-1.5 rounded-sm bg-brand-cyan shrink-0" />
            <div>
              <p className="text-sm font-sans text-brand-primary leading-tight flex items-center gap-1.5">
                Actively seeking full-time roles
                <ChevronDown
                  size={12}
                  className={`text-brand-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </p>
              <p className="text-[11px] font-mono text-brand-muted mt-0.5">STEM OPT · Available May 2026</p>
            </div>
          </div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={[
              'absolute top-full mt-2 z-50 w-[19rem] rounded-xl border border-white/10',
              'bg-brand-elevated/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/50',
              compact ? 'right-0' : 'left-0',
            ].join(' ')}
          >
            <p className="text-[10px] font-mono text-brand-muted uppercase tracking-widest mb-3">
              Work Authorization Details
            </p>

            <div className="flex items-start gap-2.5 mb-3">
              <BadgeCheck size={15} className="text-brand-green shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-sans text-brand-primary leading-tight">
                  Up to 3 years of US work authorization
                </p>
                <p className="text-xs text-brand-secondary mt-0.5 leading-relaxed">
                  ★ No sponsorship needed to hire. <br />
                  ★ On F-1 STEM OPT. 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck size={15} className="text-brand-green shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-sans text-brand-primary leading-tight">
                  Not subject to the $100K H-1B fee
                </p>
                <p className="text-xs text-brand-secondary mt-0.5 leading-relaxed">
                  ★ In-US change of status to H-1B is exempt from the surcharge. 
            
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
