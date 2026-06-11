import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Copy } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { fadeUp, staggerContainer, viewportOnce, EASE } from '../../lib/motion'
import Toast from '../ui/Toast'

const EMAIL = 'prathipatipreetham@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silent fail
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <motion.div
        className="max-w-xl"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-brand-primary italic mb-3 overflow-hidden py-1 -my-1">
          <motion.span
            className="block"
            variants={{
              hidden: { y: '115%' },
              visible: { y: 0, transition: { duration: 0.65, ease: EASE } },
            }}
          >
            Let's build something.
          </motion.span>
        </h2>

        <motion.p variants={fadeUp} className="text-brand-secondary leading-relaxed mb-8">
          Targeting <span className="text-brand-primary">LLM/GenAI Engineer</span> and{' '}
          <span className="text-brand-primary">NLP Engineer</span> roles at AI startups and
          conversational AI companies. Strong fit for{' '}
          <span className="text-brand-primary">Healthcare AI</span> and{' '}
          <span className="text-brand-primary">ML Engineer</span> at Series A–C companies.
          Open to <span className="text-brand-primary">Applied Scientist</span> where
          there's substantive model work. STEM OPT from May 2026.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-px border-y border-white/[0.07]">
          {/* Email */}
          <button
            onClick={copyEmail}
            data-umami-event="email-copy"
            className="w-full group flex items-center justify-between py-4 -mx-3 px-3 rounded hover:bg-brand-surface/60 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Mail size={15} className="text-brand-muted shrink-0 group-hover:text-brand-cyan transition-colors" />
              <span className="font-mono text-[13px] sm:text-sm text-brand-primary break-all text-left">{EMAIL}</span>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-mono text-brand-muted group-hover:text-brand-cyan transition-colors shrink-0">
              {copied
                ? <><Check size={12} className="text-brand-green" /> copied!</>
                : <><Copy size={12} /> copy ↗</>
              }
            </span>
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/prathipatipreetham"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-linkedin"
            data-umami-event-source="contact"
            className="group flex items-center justify-between py-4 -mx-3 px-3 rounded hover:bg-brand-surface/60 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <FaLinkedin size={15} className="text-brand-muted shrink-0 group-hover:text-brand-cyan transition-colors" />
              <span className="font-mono text-[13px] sm:text-sm text-brand-primary break-all text-left">linkedin.com/in/prathipatipreetham</span>
            </div>
            <span className="text-xs font-mono text-brand-muted group-hover:text-brand-cyan transition-colors shrink-0">open ↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/artisticdrake"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-github"
            data-umami-event-source="contact"
            className="group flex items-center justify-between py-4 -mx-3 px-3 rounded hover:bg-brand-surface/60 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <FaGithub size={15} className="text-brand-muted shrink-0 group-hover:text-brand-cyan transition-colors" />
              <span className="font-mono text-[13px] sm:text-sm text-brand-primary break-all text-left">github.com/artisticdrake</span>
            </div>
            <span className="text-xs font-mono text-brand-muted group-hover:text-brand-cyan transition-colors shrink-0">open ↗</span>
          </a>
        </motion.div>
      </motion.div>

      <Toast message="Copied to clipboard!" visible={copied} />
    </section>
  )
}
