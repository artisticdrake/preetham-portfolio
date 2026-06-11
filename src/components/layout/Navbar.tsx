import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileDown, Home } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useActiveSection } from '../../hooks/useActiveSection'
import { NavStatusBadge } from '../ui/StatusBadge'

const NAV_LINKS = [
  { label: 'Projects',    href: '#projects' },
  { label: 'Hackathons',  href: '#hackathons' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Education',   href: '#education' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Contact',     href: '#contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1))

export default function Navbar() {
  const scrolled  = useScrolled(40)
  const progress  = useScrollProgress()
  const active    = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-brand-bg/88 backdrop-blur-xl border-b border-white/[0.07]'
            : 'bg-transparent',
        ].join(' ')}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-px bg-brand-cyan/30 transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
          {/* Monogram — morphs into a Home button once you scroll */}
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center justify-center min-w-[2rem] h-8 text-brand-cyan hover:opacity-80 transition-opacity"
            aria-label="Back to top"
          >
            <AnimatePresence mode="wait" initial={false}>
              {scrolled ? (
                <motion.span
                  key="home"
                  initial={{ opacity: 0, y: 10, rotate: -45 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -10, rotate: 45 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex"
                >
                  <Home size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="pp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif italic text-xl leading-none"
                >
                  PP
                </motion.span>
              )}
            </AnimatePresence>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative text-sm transition-colors font-sans py-1',
                    isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary',
                  ].join(' ')}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-cyan"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <NavStatusBadge compact />
            <a
              href="/resume/Resume_Preetham_Prathipati.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="resume-download"
              data-umami-event-source="navbar"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-brand-cyan/30 text-brand-cyan text-xs font-mono hover:border-brand-cyan/60 hover:bg-brand-cyan/5 transition-all"
            >
              <FileDown size={12} />
              Resume ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-secondary hover:text-brand-primary transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile full-screen overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-xl border-b border-white/[0.07] px-6 py-5 flex flex-col gap-4"
            >
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-brand-secondary hover:text-brand-primary transition-colors py-2 font-sans"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume/Resume_Preetham_Prathipati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                data-umami-event="resume-download"
                data-umami-event-source="navbar-mobile"
                className="flex items-center gap-1.5 text-sm text-brand-cyan font-mono py-1 mt-1"
              >
                <FileDown size={13} />
                Resume ↗
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Navbar height spacer */}
      <div className="h-14" />
    </>
  )
}
