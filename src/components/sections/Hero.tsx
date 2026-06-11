import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AuroraBackground } from '../ui/aurora-background'
import { NavStatusBadge } from '../ui/StatusBadge'
import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from 'framer-motion'

const fadeUp = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
}

function InlineStat({
  numericValue,
  display,
  label,
  sublabel,
  prefix = '',
  suffix = '',
  formatWithCommas = false,
  isInView,
}: {
  numericValue?: number
  display: string
  label: string
  sublabel: string
  prefix?: string
  suffix?: string
  formatWithCommas?: boolean
  isInView: boolean
}) {
  const count = useCountUp(numericValue ?? 0, 1600, !!(numericValue && isInView))
  const formatted = numericValue && isInView
    ? `${prefix}${formatWithCommas ? count.toLocaleString() : count}${suffix}`
    : display

  return (
    <div className="flex flex-col items-center text-center min-w-0">
      <span className="text-xl md:text-2xl font-mono font-medium text-brand-cyan tabular-nums leading-none">
        {formatted}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-brand-muted font-mono leading-tight whitespace-nowrap">
        {label}
      </span>
      <span className="text-[10px] text-brand-secondary font-mono leading-tight whitespace-nowrap">
        {sublabel}
      </span>
    </div>
  )
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(statsRef, { once: true })

  return (
    <AuroraBackground
      className="h-auto min-h-[calc(100vh-3.5rem)] items-start justify-center py-10 md:py-20"
      showRadialGradient
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Name — full-width identity anchor above the split */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif mb-10 leading-tight"
        >
          <span className="block text-lg md:text-xl text-brand-secondary font-light">Hi, I'm</span>
          <span className="block text-3xl md:text-4xl text-brand-primary italic">Preetham Prathipati</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-4 order-2 lg:order-1"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-mono text-brand-cyan tracking-[0.2em] uppercase"
            >
              LLM / GENAI ENGINEER · NLP · ML ENGINEER
            </motion.p>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-4xl md:text-5xl xl:text-6xl leading-[1.1] tracking-tight">
              <span className="font-sans font-semibold text-brand-primary">Building ML systems</span>
              <br />
              <span className="font-sans font-semibold text-brand-primary">that{' '}</span>
              <em className="font-serif italic text-brand-primary">actually</em>
              <span className="font-sans font-semibold text-brand-primary">{' '}ship.</span>
            </motion.p>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-[15px] text-brand-secondary leading-relaxed max-w-lg">
              MS Computer Science @ Boston University — May 2026.<br />
              I build LLM pipelines and RAG systems end-to-end,
              and ship products to real users.<br />
              Ranked <span className="text-brand-primary font-mono">2nd of 364</span> nationally in IIIT Hyderabad's ML program.
              Won <span className="text-brand-cyan font-mono font-medium">$4,000</span> building cancer AI at Bio-IT World 2026,
              then placed <span className="text-brand-cyan font-mono font-medium">3rd</span> at Music Hackspace Boston (Berklee).
            </motion.p>

            {/* Status */}
            <motion.div variants={fadeUp}>
              <NavStatusBadge />
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                data-umami-event="cta-view-projects"
                className="px-5 py-2.5 rounded-lg bg-brand-cyan text-brand-bg text-sm font-sans font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="/resume/Resume_Preetham_Prathipati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-umami-event="resume-download"
                data-umami-event-source="hero"
                className="px-5 py-2.5 rounded-lg border border-brand-cyan/30 text-brand-cyan text-sm font-sans font-medium hover:border-brand-cyan/60 hover:bg-brand-cyan/5 transition-all"
              >
                Download Resume
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/artisticdrake"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="social-github"
                  data-umami-event-source="hero"
                  className="text-brand-muted hover:text-brand-primary transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/prathipatipreetham"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="social-linkedin"
                  data-umami-event-source="hero"
                  className="text-brand-muted hover:text-brand-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              ref={statsRef}
              variants={fadeUp}
              className="grid grid-cols-2 gap-y-6 sm:flex sm:items-start sm:gap-0 pt-2"
            >
              {[
                { numericValue: 4000, display: '$4,000', label: 'Prize Won',   sublabel: 'Bio-IT 2026', prefix: '$', formatWithCommas: true },
                { numericValue: 3, display: '3rd',     label: 'Place',       sublabel: 'Music Hackspace', suffix: 'rd' },
                { display: '2nd/364',                    label: "Nat'l Rank",  sublabel: 'IIIT HYD' },
                { display: 'Selected', label: 'Investor Intros', sublabel: 'Chronicle · FOMO' },
              ].map((stat, i, arr) => (
                <div key={i} className="flex items-stretch justify-center sm:justify-start sm:flex-1">
                  <InlineStat {...stat} isInView={isInView} />
                  {i < arr.length - 1 && (
                    <div className="hidden sm:block w-px bg-white/[0.08] mx-3 self-stretch" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Glow behind photo */}
            <div
              className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)' }}
            />

            <div className="relative">
              {!imgError ? (
                <img
                  src="/images/preetham.jpg"
                  alt="Preetham Prathipati"
                  loading="eager"
                  onError={() => setImgError(true)}
                  className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[430px] h-[380px] sm:h-[440px] md:h-[520px] object-cover object-top rounded-xl"
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 -20px 60px rgba(0,217,255,0.08), 0 40px 80px rgba(0,0,0,0.4)',
                  }}
                />
              ) : (
                <div
                  className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[430px] h-[380px] sm:h-[440px] md:h-[520px] rounded-xl bg-brand-surface flex items-center justify-center"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="text-xs font-mono text-brand-muted text-center px-4">
                    Drop photo at<br />public/images/preetham.jpg
                  </span>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <ArrowDown size={14} className="text-brand-muted animate-bounce" />
      </motion.div>
    </AuroraBackground>
  )
}
