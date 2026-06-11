import { experience } from '../../data/timeline'
import TimelineItem from '../ui/TimelineItem'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="04" title="Experience" />

      <div className="max-w-2xl">
        {experience.map((entry, i) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
