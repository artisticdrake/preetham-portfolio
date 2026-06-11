import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { HackathonPhoto } from '../../data/hackathons'
import { useLightbox } from '../../hooks/useLightbox'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel'

interface PhotoGalleryProps {
  photos: HackathonPhoto[]
  eventName: string
}

export default function PhotoGallery({ photos, eventName }: PhotoGalleryProps) {
  const lb = useLightbox(photos.length)

  if (photos.length === 0) {
    return (
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="aspect-[4/3] rounded-lg border border-dashed border-white/[0.08] flex items-center justify-center"
          >
            <span className="text-[11px] font-mono text-brand-muted text-center px-2">
              Add photos to<br />public/images/hackathons/
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Gallery carousel */}
      <Carousel
        opts={{ align: 'start', dragFree: true, loop: true }}
        className="mt-5"
      >
        <CarouselContent className="-ml-3">
          {photos.map((photo, i) => (
            <CarouselItem key={i} className="basis-4/5 pl-3 md:basis-1/2 lg:basis-1/3">
              <button
                onClick={() => lb.open(i)}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-zoom-in w-full"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[11px] text-brand-primary font-mono">{photo.caption}</p>
                  </div>
                )}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        {photos.length > 3 && (
          <>
            <CarouselPrevious className="left-2 top-1/2 h-8 w-8 border-white/10 bg-black/50 backdrop-blur hover:bg-black/70" />
            <CarouselNext className="right-2 top-1/2 h-8 w-8 border-white/10 bg-black/50 backdrop-blur hover:bg-black/70" />
          </>
        )}
      </Carousel>

      {/* Lightbox portal */}
      {lb.isOpen && lb.index !== null && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center"
            onClick={lb.close}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 text-brand-secondary hover:text-brand-primary transition-colors z-10"
              onClick={lb.close}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            {photos.length > 1 && (
              <button
                className="absolute left-2 sm:left-5 p-2 text-brand-secondary hover:text-brand-primary transition-colors z-10"
                onClick={e => { e.stopPropagation(); lb.prev() }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lb.index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={photos[lb.index].src}
              alt={photos[lb.index].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={e => e.stopPropagation()}
            />

            {/* Caption */}
            {photos[lb.index].caption && (
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-mono text-brand-secondary">
                {photos[lb.index].caption}
              </p>
            )}

            {/* Next */}
            {photos.length > 1 && (
              <button
                className="absolute right-2 sm:right-5 p-2 text-brand-secondary hover:text-brand-primary transition-colors z-10"
                onClick={e => { e.stopPropagation(); lb.next() }}
                aria-label="Next photo"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Counter */}
            <span className="absolute top-5 left-5 text-xs font-mono text-brand-muted">
              {lb.index + 1} / {photos.length}
            </span>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
