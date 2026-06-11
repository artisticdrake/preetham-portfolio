import { motion } from 'framer-motion'
import { skillColumns } from '../../data/skills'
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion'
import SectionHeading from '../ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="06" title="Skills" />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {skillColumns.map((column, colIdx) => (
          <div key={colIdx} className="space-y-8">
            {column.map(category => (
              <motion.div key={category.title} variants={fadeUp}>
                <h3 className="text-[11px] font-mono text-brand-cyan uppercase tracking-widest pb-2 mb-3 border-b border-brand-cyan/15">
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.skills.map(skill => (
                    <li
                      key={skill}
                      className="group flex items-center text-sm font-mono text-brand-secondary hover:text-brand-primary transition-colors cursor-default"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden text-brand-cyan transition-all duration-200 ease-out">
                        ▸
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
