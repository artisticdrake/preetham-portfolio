import { useState, useEffect, useRef } from 'react'

export function useCountUp(
  target: number,
  duration: number = 1800,
  enabled: boolean = false
): number {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    if (!enabled) return

    startTimeRef.current = 0

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, enabled])

  return count
}
