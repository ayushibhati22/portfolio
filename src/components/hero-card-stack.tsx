import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { personal } from '@/data/portfolio'

const cards = [
  {
    id: 'photo',
    image: '/hero-portrait.png',
    label: 'Color',
    filter: '',
  },
  {
    id: 'sketch',
    image: '/hero-portrait-sketch.png',
    label: 'Sketch',
    filter: 'grayscale contrast-110',
  },
]

export function HeroCardStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [exiting, setExiting] = useState<number | null>(null)

  const flip = () => {
    setExiting(activeIndex)
    setActiveIndex((i) => (i + 1) % cards.length)
    setTimeout(() => setExiting(null), 600)
  }

  const current = cards[activeIndex]

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="perspective-1200 relative" style={{ minHeight: 360 }}>
        {[2, 1].map((offset) => (
          <div
            key={offset}
            className="card-paper absolute inset-x-4 rounded-xl border border-border/60"
            style={{
              top: offset * 8,
              transform: `rotate(${(offset - 1) * 2 - 1}deg) scale(${1 - offset * 0.02})`,
              zIndex: 10 - offset,
              height: 340,
            }}
          />
        ))}

        <AnimatePresence mode="popLayout">
          <motion.button
            key={current.id}
            type="button"
            onClick={flip}
            initial={exiting !== null ? { rotateY: 90, opacity: 0 } : { rotateY: -8, opacity: 1 }}
            animate={{ rotateY: -2, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0, x: 80 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="card-paper preserve-3d absolute inset-x-0 top-0 z-20 flex w-full cursor-pointer overflow-hidden rounded-xl border border-border/80 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-yellow)]"
            style={{ height: 340 }}
            aria-label={`Flip card — currently showing ${current.label}`}
          >
            <div className="flex h-full w-full">
              <div className="relative w-[42%] shrink-0 border-r border-border/60 bg-white p-3">
                <div className="h-full overflow-hidden bg-neutral-100">
                  <img
                    src={current.image}
                    alt={personal.name}
                    className={`h-full w-full object-cover object-top ${current.filter}`}
                  />
                </div>
              </div>

              <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-white text-xs font-semibold">
                  AB
                </div>

                <div className="stamp absolute left-5 top-5">
                  OPEN<br />FOR<br />WORK
                </div>

                <div className="mt-14 sm:mt-16">
                  <h2 className="heading-lg font-serif text-foreground">Software Engineer</h2>
                  <p className="body-text mt-4 max-w-sm text-base">
                    I build reliable software across the stack — backend, full-stack, and ML.
                    Currently at Paytm. 3 major projects · 2 fintech internships · Graduating 2027.
                  </p>
                </div>

                <p className="body-text mt-4 border-t border-border/60 pt-4 text-sm">
                  Open to internships & full-time software roles
                </p>
              </div>
            </div>
          </motion.button>
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        Tap card to flip · {current.label}
      </motion.p>
    </div>
  )
}
