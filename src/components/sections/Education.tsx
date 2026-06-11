import { education } from '../../data/timeline'
import TimelineItem from '../ui/TimelineItem'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="05" title="Education" />

      <div className="max-w-2xl">
        {education.map((entry, i) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={i === education.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
