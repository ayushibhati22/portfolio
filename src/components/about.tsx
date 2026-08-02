import { motion } from 'framer-motion'
import { aboutParagraphs } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { FloatingDoodles, ScribbleUnderline, SectionNumber } from '@/components/decorations'

const highlights = ['Paytm', '265K+ records', 'From scratch', 'Security-first']

export function About() {
  return (
    <section id="about" className="section-block relative overflow-hidden paper-texture">
      <FloatingDoodles />

      <div className="section-shell relative">
        <div className="mb-16 flex items-end gap-6">
          <SectionNumber n="01" />
          <div>
            <p className="label-caps text-[#6b9080]">About Me</p>
            <h2 className="heading-xl mt-2 font-serif">
              Systems depth.
              <br />
              <span className="italic text-[#c4706a]">Production</span> proof.
            </h2>
            <ScribbleUnderline />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <div className="sticky top-28">
              <motion.div
                whileHover={{ rotate: -2 }}
                className="card-paper rounded-2xl border border-border p-8"
              >
                <p className="font-serif text-2xl leading-snug sm:text-3xl">
                  "I don't just write code — I build software that survives{' '}
                  <span className="text-[#4a7fd4]">real traffic</span>,{' '}
                  <span className="text-[#c4706a]">real data</span>, and{' '}
                  <span className="text-[#6b9080]">real users</span>."
                </p>
                <p className="mt-6 text-sm text-muted-foreground">— Ayushi Bhati</p>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.08, rotate: i % 2 ? 3 : -3 }}
                    className="rounded-full border-2 border-dashed border-[var(--color-yellow-dark)] bg-[#f5c518]/20 px-4 py-2 text-sm font-semibold"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {aboutParagraphs.map((para, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="group relative rounded-2xl border border-border/60 bg-white/40 p-6 backdrop-blur-sm transition-shadow hover:shadow-lg"
                >
                  <span className="absolute -left-3 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-yellow)] text-sm font-bold shadow-md">
                    {i + 1}
                  </span>
                  <p className="body-text pl-6 text-base leading-relaxed text-foreground/85">{para}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
