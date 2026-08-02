import { motion } from 'framer-motion'

export function FloatingDoodles({ className = '' }: { className?: string }) {
  const items = [
    { char: '✿', style: 'left-[8%] top-[12%] text-2xl text-[#f5c518]', delay: 0 },
    { char: '★', style: 'right-[10%] top-[20%] text-xl text-[#4a7fd4]', delay: 0.3 },
    { char: '~', style: 'left-[15%] bottom-[25%] text-3xl text-[#c4706a]/60', delay: 0.6 },
    { char: '✦', style: 'right-[18%] bottom-[15%] text-lg text-[#6b9080]', delay: 0.9 },
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map(({ char, style, delay }) => (
        <motion.span
          key={char + style}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
          transition={{ delay, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute ${style}`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export function ScribbleUnderline() {
  return (
    <svg className="mt-1 h-3 w-full max-w-[200px] text-[var(--color-yellow-dark)]" viewBox="0 0 200 12" fill="none">
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        d="M2 8 C40 2, 80 12, 120 6 S180 4, 198 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SectionNumber({ n }: { n: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-serif text-7xl font-normal leading-none text-foreground/10 sm:text-8xl"
    >
      {n}
    </motion.span>
  )
}
