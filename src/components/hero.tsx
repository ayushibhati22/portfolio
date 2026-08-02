import { motion } from 'framer-motion'
import { personal } from '@/data/portfolio'
import { HeroCardStack } from '@/components/hero-card-stack'
import { FloatingDoodles } from '@/components/decorations'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16 paper-texture">
      <FloatingDoodles />

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute right-[12%] top-[18%] hidden text-5xl sm:block"
      >
        ✿
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute left-[10%] top-[30%] hidden h-16 w-16 rounded-full bg-[#4a7fd4]/20 sm:block"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute right-[20%] bottom-[25%] hidden h-10 w-10 rounded-full bg-[#f5c518]/40 sm:block"
      />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="label-caps text-muted-foreground">
            {personal.name} · {personal.location}
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 font-serif text-xl italic text-[#c4706a] sm:text-2xl"
          >
            building things that work ✦
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <HeroCardStack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className="btn-yellow"
          >
            Let's Talk ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
