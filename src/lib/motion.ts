import { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Child item: fades in while rising. Pairs with `staggerContainer`. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Parent wrapper: staggers `fadeUp` children as they scroll into view. */
export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export const viewportOnce = { once: true, margin: '-60px' } as const
