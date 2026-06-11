import { hackathons } from '../../data/hackathons'
import HackathonCard from '../ui/HackathonCard'
import PhotoGallery from '../ui/PhotoGallery'
import SectionHeading from '../ui/SectionHeading'

export default function Hackathons() {
  const featured = hackathons.find(h => h.featured)
  const others = hackathons.filter(h => !h.featured)

  return (
    <section id="hackathons" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeading index="03" title="Hackathons" />

      <div className="space-y-6">
        {/* Featured hackathon with photo gallery */}
        {featured && (
          <div className="relative">
            <HackathonCard hackathon={featured} />
            <PhotoGallery photos={featured.photos} eventName={featured.name} />
          </div>
        )}

        {/* Other hackathons */}
        <div className="space-y-6">
          {others.map(h => (
            <div key={h.id}>
              <HackathonCard hackathon={h} />
              <PhotoGallery photos={h.photos} eventName={h.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
