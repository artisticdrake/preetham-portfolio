import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently in the middle band of the viewport.
 * Pass a stable (module-level) array of ids.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // Middle band of the screen decides the active section
      { rootMargin: '-30% 0px -60% 0px' }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])

  return active
}
