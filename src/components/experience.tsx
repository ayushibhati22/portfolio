import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { FloatingDoodles, ScribbleUnderline, SectionNumber } from '@/components/decorations'

export function Experience() {
  return (
    <section id="experience" className="section-block relative overflow-hidden checkerboard">
      <FloatingDoodles />

      <div className="section-shell relative">
        <div className="mb-16 flex items-end gap-6">
          <SectionNumber n="02" />
          <div>
            <p className="label-caps text-[#c4706a]">Experience</p>
            <h2 className="heading-xl mt-2 font-serif">
              Where I've <span className="italic text-[#4a7fd4]">shipped</span> impact
            </h2>
            <ScribbleUnderline />
          </div>
        </div>

        <div className="relative space-y-16 sm:space-y-20">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#4a7fd4] via-[#c4706a] to-transparent sm:block" />

          {experience.map((item, i) => (
            <AnimatedSection key={item.company} delay={i * 0.15} variant={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="relative sm:pl-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="absolute left-4 top-8 hidden h-6 w-6 rounded-full border-4 border-[var(--color-cream)] sm:block"
                  style={{ backgroundColor: item.color }}
                />

                <div
                  className="relative overflow-hidden rounded-[1.75rem] border border-border/80 shadow-lg"
                  style={{ backgroundColor: item.accent }}
                >
                  <div className="absolute left-0 top-0 h-full w-2" style={{ backgroundColor: item.color }} />

                  <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
                    <div className="relative p-8 lg:p-10">
                      <motion.span
                        whileHover={{ rotate: -6, scale: 1.05 }}
                        className="inline-block rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-md"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.shortCompany}
                      </motion.span>

                      <h3
                        className="mt-6 font-serif text-2xl uppercase leading-tight tracking-wide sm:text-3xl"
                        style={{ color: item.color }}
                      >
                        {item.role}
                      </h3>

                      <p className="label-caps mt-3 text-muted-foreground">{item.type}</p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <span className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium">
                          📍 {item.location}
                        </span>
                        <span className="rounded-full border border-border bg-white/60 px-4 py-2 text-sm font-medium">
                          🗓 {item.period}
                        </span>
                      </div>

                      <p className="mt-6 font-serif text-lg italic text-foreground/70">{item.company}</p>
                    </div>

                    <div className="relative border-t border-border/50 bg-white/50 p-8 backdrop-blur-sm lg:border-l lg:border-t-0 lg:p-10">
                      <p className="label-caps mb-5" style={{ color: item.color }}>
                        What I did
                      </p>
                      <ul className="space-y-4">
                        {item.highlights.map((point, j) => (
                          <motion.li
                            key={point}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + j * 0.08 }}
                            whileHover={{ x: 6 }}
                            className="group flex gap-4"
                          >
                            <span
                              className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                              style={{ backgroundColor: item.color }}
                            >
                              {j + 1}
                            </span>
                            <span className="body-text text-base text-foreground/80 group-hover:text-foreground">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ rotate: 3 }}
                        whileHover={{ rotate: -2, scale: 1.02 }}
                        className="absolute -right-2 -top-4 hidden rounded-lg border border-dashed border-border bg-[#f5c518]/90 px-4 py-2 text-xs font-semibold shadow-md lg:block"
                        style={{ transform: `rotate(${i % 2 ? -3 : 3}deg)` }}
                      >
                        {i === 0 ? 'Current role ✦' : 'Past internship'}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
