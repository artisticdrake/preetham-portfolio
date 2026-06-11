import { motion } from 'framer-motion'
import { experience, education } from '../../data/timeline'
import TimelineItem from '../ui/TimelineItem'

export default function Timeline() {
  return (
    <motion.section
      id="experience"
      className="py-24 max-w-7xl mx-auto px-6 md:px-12"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-serif text-3xl md:text-4xl text-brand-primary italic mb-12">
        Experience &amp; Education
      </h2>

      <div className="max-w-2xl">
        {[...experience, ...education].map((entry, i, arr) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={i === arr.length - 1}
          />
        ))}
      </div>
    </motion.section>
  )
}
