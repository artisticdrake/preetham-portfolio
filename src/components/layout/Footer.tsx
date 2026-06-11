import { Mail, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-brand-muted">
          Preetham Prathipati · Built with React + Framer Motion · 2026
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/artisticdrake"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-github"
            data-umami-event-source="footer"
            className="text-brand-muted hover:text-brand-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://linkedin.com/in/prathipatipreetham"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="social-linkedin"
            data-umami-event-source="footer"
            className="text-brand-muted hover:text-brand-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="mailto:prathipatipreetham@gmail.com"
            data-umami-event="email-mailto"
            data-umami-event-source="footer"
            className="text-brand-muted hover:text-brand-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-1.5 text-xs font-mono text-brand-muted hover:text-brand-cyan transition-colors ml-2"
            aria-label="Back to top"
          >
            top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
