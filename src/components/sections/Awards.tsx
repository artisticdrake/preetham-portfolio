import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Award, Sparkles } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp'
import { fadeUp, staggerContainer, viewportOnce, EASE } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'

const cardHover = { y: -4, transition: { duration: 0.25, ease: EASE } }

export default function Awards() {
  const prizeRef = useRef<HTMLDivElement>(null)
  const prizeInView = useInView(prizeRef, { once: true, margin: '-40px' })
  const prize = useCountUp(4000, 1600, prizeInView)

  return (
    <section id="awards" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="01" title="Recognition" />

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Bio-IT — hero card */}
        <motion.div
          ref={prizeRef}
          variants={fadeUp}
          whileHover={cardHover}
          className="relative lg:col-span-2 rounded-xl border border-brand-cyan/25 bg-brand-surface p-7 glow-cyan overflow-hidden hover:border-brand-cyan/40 transition-colors duration-300"
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #00D9FF 40%, transparent)' }}
          />

          <div className="flex items-start justify-between gap-6 flex-wrap mb-5">
            <div className="flex items-center gap-3">
              <Trophy size={22} className="text-brand-cyan shrink-0" />
              <div>
                <h3 className="font-sans font-semibold text-brand-primary text-lg leading-tight">
                  Bio-IT World Hackathon 2026
                </h3>
                <p className="text-xs font-mono text-brand-muted mt-0.5">Fair Data Track · Prize Winner</p>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="text-4xl font-mono font-medium text-brand-cyan leading-none tabular-nums">
                ${prizeInView ? prize.toLocaleString() : '4,000'}
              </div>
              <div className="text-xs text-brand-muted font-mono mt-1">2nd Place · 6 Teams</div>
            </div>
          </div>

          <p className="text-sm text-brand-secondary leading-relaxed mb-4">
            Built <span className="text-brand-primary font-medium">NeST-VNN</span> — a hierarchical Visible Neural
            Network predicting cancer patient clinical outcomes from tumor genotype on NIH CFDE datasets.
            Architecture mirrors biological ontology, making predictions explainable at the pathway level.
            Integrated AWS Bedrock for plain-English clinical interpretation.
          </p>

          <p className="text-xs font-mono text-brand-cyan/70 italic mb-5">
            Judges' citation: "Excelled in model interpretability"
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/artisticdrake/cellmapvnn"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="award-link"
              data-umami-event-project="NeST-VNN"
              data-umami-event-kind="github"
              className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1"
            >
              View Project →
            </a>
            <a
              href="https://www.youtube.com/watch?v=bjEPVhkSdC0"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="award-link"
              data-umami-event-project="NeST-VNN"
              data-umami-event-kind="youtube"
              className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1"
            >
              Watch Demo →
            </a>
          </div>
        </motion.div>

        {/* IIIT Ranking */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="relative rounded-xl border border-white/[0.06] bg-brand-surface p-7 hover:border-white/[0.14] transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <Medal size={20} className="text-brand-cyan shrink-0" />
            <h3 className="font-sans font-semibold text-brand-primary leading-tight">
              National ML Ranking
            </h3>
          </div>

          <div className="text-5xl font-mono font-medium text-brand-cyan leading-none mb-1">
            2<span className="text-2xl">nd</span>
          </div>
          <div className="text-sm font-mono text-brand-secondary mb-4">of 364 nationally</div>

          <p className="text-sm text-brand-secondary leading-relaxed">
            Top <span className="text-brand-primary font-mono">0.6%</span> in IIIT Hyderabad's Foundations
            of Modern Machine Learning — a competitive national program across India.
          </p>

          <p className="text-xs font-mono text-brand-muted mt-4">2023</p>
        </motion.div>

        {/* Music Hackspace — 3rd place */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="relative lg:col-span-2 rounded-xl border border-white/[0.06] bg-brand-surface p-7 hover:border-white/[0.14] transition-colors duration-300"
        >
          <div className="flex items-start justify-between gap-6 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <Award size={20} className="text-brand-cyan shrink-0" />
              <div>
                <h3 className="font-sans font-semibold text-brand-primary text-lg leading-tight">
                  Music Hackspace Boston Hackathon
                </h3>
                <p className="text-xs font-mono text-brand-muted mt-0.5">Berklee College of Music · 3rd Place</p>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <div className="text-3xl font-mono font-medium text-brand-cyan leading-none">3rd</div>
              <div className="text-xs text-brand-muted font-mono mt-1">Jun 2026</div>
            </div>
          </div>

          <p className="text-sm text-brand-secondary leading-relaxed mb-4">
            Built <span className="text-brand-primary font-medium">PocketBand</span> — a phone-as-instrument
            AI jam station with gyro-controlled FX, AI-restyled drums (Stable Audio 3), and AI vocals (Suno),
            bridged live to a DAW. Built with Athul Thulasidasan.
          </p>

          <a
            href="https://github.com/artisticdrake/PocketBand"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="award-link"
            data-umami-event-project="PocketBand"
            data-umami-event-kind="github"
            className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1 w-fit"
          >
            View Project →
          </a>
        </motion.div>

        {/* Boston Protocol — investor selection */}
        <motion.div
          variants={fadeUp}
          whileHover={cardHover}
          className="relative rounded-xl border border-white/[0.06] bg-brand-surface p-7 hover:border-white/[0.14] transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={20} className="text-brand-cyan shrink-0" />
            <h3 className="font-sans font-semibold text-brand-primary leading-tight">
              Selected for Investor Intros
            </h3>
          </div>

          <p className="text-xs font-mono text-brand-muted mb-3">
            Boston Protocol · FOMO · Boston Tech Week
          </p>

          <p className="text-sm text-brand-secondary leading-relaxed">
            <span className="text-brand-primary font-medium">Chronicle</span> — built in one day at a
            healthcare AI hackathon — landed on FOMO's radar for investor introductions and Foundry follow-up.
          </p>

          <a
            href="https://github.com/artisticdrake/Chronicle"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="award-link"
            data-umami-event-project="Chronicle"
            data-umami-event-kind="github"
            className="text-xs font-mono text-brand-cyan hover:text-brand-primary transition-colors flex items-center gap-1 w-fit mt-4"
          >
            View Project →
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
