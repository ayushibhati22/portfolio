import { motion } from 'framer-motion'
import { useState } from 'react'

const floatingTags = [
  { label: 'C++', x: '-12%', y: '15%', delay: 0 },
  { label: 'FastAPI', x: '85%', y: '25%', delay: 0.1 },
  { label: 'Security', x: '-8%', y: '70%', delay: 0.2 },
  { label: 'ML/AI', x: '90%', y: '65%', delay: 0.3 },
]

export function HeroPortrait() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative"
      >
        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[var(--color-gold)]/20 via-transparent to-[var(--color-gold)]/10 blur-3xl opacity-60" />
        <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-2xl" />

        <button
          type="button"
          onClick={() => setFlipped((v) => !v)}
          className="perspective-1000 group relative block w-full cursor-pointer focus-visible:outline-none"
          aria-label={flipped ? 'Show color portrait' : 'Show sketch portrait'}
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="preserve-3d relative aspect-[3/4] w-full"
          >
            <div className="backface-hidden absolute inset-0 overflow-hidden rounded-[2rem] border-2 border-white/10 bg-card shadow-2xl transition-all duration-500 group-hover:border-[var(--color-gold)]/30 group-hover:shadow-[0_0_60px_-15px_var(--color-gold)]">
              <motion.img
                src="/hero-portrait.png"
                alt="Ayushi Bhati"
                className="h-full w-full object-cover object-top"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 inset-x-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="rounded-2xl border border-white/10 bg-background/60 backdrop-blur-xl p-4"
                >
                  <p className="label-sm text-[var(--color-gold)]">Currently at</p>
                  <p className="mt-1 text-lg font-medium">Paytm · Backend</p>
                </motion.div>
              </div>
            </div>

            <div className="backface-hidden rotate-y-180 absolute inset-0 overflow-hidden rounded-[2rem] border-2 border-white/10 bg-card shadow-2xl">
              <img
                src="/hero-portrait-sketch.png"
                alt="Ayushi Bhati - Sketch"
                className="h-full w-full object-cover object-top grayscale contrast-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 mix-blend-overlay bg-[var(--color-gold)]/10" />
              
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="rounded-2xl border border-white/10 bg-background/60 backdrop-blur-xl p-4 text-center">
                  <p className="font-mono text-sm text-muted-foreground">The creative side</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/80 px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground backdrop-blur-md transition-all duration-300 group-hover:border-[var(--color-gold)]/40 group-hover:text-[var(--color-gold)]"
          >
            {flipped ? '← Back' : 'Flip →'}
          </motion.span>
        </button>

        {floatingTags.map((tag, i) => (
          <motion.span
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + tag.delay, duration: 0.5 }}
            style={{ left: tag.x, top: tag.y }}
            className="absolute z-10"
          >
            <motion.span
              animate={{ y: [0, i % 2 ? -8 : 8, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              className="block rounded-full border border-white/15 bg-background/90 px-4 py-2 font-mono text-sm shadow-xl backdrop-blur-md golden-border"
            >
              {tag.label}
            </motion.span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
