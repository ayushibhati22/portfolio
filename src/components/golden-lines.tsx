import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function GoldenDripTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const dripHeight = useSpring(useTransform(scrollYProgress, [0, 0.6, 1], ['0%', '60%', '100%']), {
    stiffness: 80,
    damping: 25,
  })

  const blobY = useTransform(scrollYProgress, [0, 0.5, 1], ['-20%', '40%', '100%'])

  return (
    <div ref={ref} className="relative h-32 overflow-hidden sm:h-40">
      <motion.div
        style={{ height: dripHeight }}
        className="absolute inset-x-0 top-0 mx-auto max-w-[3px] origin-top"
      >
        <div className="h-full w-full bg-gradient-to-b from-[var(--color-yellow-dark)] via-[var(--color-yellow)] to-[var(--color-yellow)]/80" />
      </motion.div>

      <motion.div
        style={{ top: blobY }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <div className="relative">
          <div className="h-4 w-4 rounded-full bg-[var(--color-yellow)] shadow-[0_0_20px_8px_rgba(245,197,24,0.5)]" />
          <motion.div
            style={{ scale: useTransform(scrollYProgress, [0.3, 0.7], [0, 2.5]) }}
            className="absolute inset-0 rounded-full bg-[var(--color-yellow)]/40"
          />
        </div>
      </motion.div>

      <motion.div
        style={{ scaleX: useTransform(scrollYProgress, [0.7, 1], [0, 1]) }}
        className="absolute bottom-0 inset-x-0 h-1 origin-center bg-gradient-to-r from-transparent via-[var(--color-yellow)] to-transparent"
      />
    </div>
  )
}

export function SectionColorTransition({ color = 'var(--color-blue-section)' }: { color?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const fillHeight = useTransform(scrollYProgress, [0, 0.3], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ height: fillHeight, backgroundColor: color }}
        className="absolute inset-x-0 top-0 origin-top"
      />
    </div>
  )
}
