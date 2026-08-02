import { motion } from 'framer-motion'
import { lookingFor, roleInterests, softSkills } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'

export function OpenToWork() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#f5c518]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#4a7fd4]/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4706a]/20 blur-3xl" />

      <div className="section-shell relative">
        <AnimatedSection>
          <div className="rounded-[2rem] border border-border/80 bg-gradient-to-br from-[#faf7f2] via-[#f5f0e8] to-[#e8dfd0] p-8 shadow-lg sm:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 rounded-full bg-[#f5c518] px-4 py-2 text-sm font-semibold text-foreground"
              >
                <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
                {lookingFor.headline}
              </motion.span>
              <span className="text-base text-muted-foreground sm:text-lg">{lookingFor.subline}</span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-xl mt-8 font-serif"
            >
              Looking for software roles where I can{' '}
              <span className="text-[#c4706a]">build</span>,{' '}
              <span className="text-[#4a7fd4]">learn</span>, and{' '}
              <span className="text-[#6b9080]">ship</span>.
            </motion.h2>

            <p className="body-text mt-6 max-w-3xl text-base sm:text-lg">{lookingFor.description}</p>

            <div className="mt-10">
              <p className="label-caps mb-4 text-base text-muted-foreground">Interested in</p>
              <div className="flex flex-wrap gap-3">
                {roleInterests.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-2xl border border-[#c4706a]/20 bg-[#c4706a]/8 p-6 sm:p-8">
              <p className="label-caps mb-5 text-base text-[#c4706a]">Soft Skills · What I bring to a team</p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.08, rotate: i % 2 ? 2 : -2 }}
                    className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
