import { useState, useEffect, useCallback } from 'react'

export function useLightbox(length: number) {
  const [index, setIndex] = useState<number | null>(null)

  const open  = useCallback((i: number) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])

  const prev = useCallback(() =>
    setIndex(i => i !== null ? (i - 1 + length) % length : null),
    [length]
  )

  const next = useCallback(() =>
    setIndex(i => i !== null ? (i + 1) % length : null),
    [length]
  )

  useEffect(() => {
    if (index === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, prev, next])

  return { index, open, close, prev, next, isOpen: index !== null }
}
