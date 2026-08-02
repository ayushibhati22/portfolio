import { motion } from 'framer-motion'
import { skillGroups } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { ScribbleUnderline, SectionNumber } from '@/components/decorations'

const allSkills = skillGroups.flatMap((g) => g.skills)

export function Skills() {
  return (
    <section id="skills" className="section-block relative overflow-hidden bg-[#e8dfd0]/40">
      <div className="section-shell">
        <div className="mb-14 flex items-end gap-6">
          <SectionNumber n="03" />
          <div className="mx-auto text-center sm:mx-0 sm:text-left">
            <p className="label-caps text-[#9b59b6]">Skills</p>
            <h2 className="heading-xl mt-2 font-serif">
              The <span className="italic text-[#e67e22]">tools</span> I wield
            </h2>
            <ScribbleUnderline />
          </div>
        </div>

        <AnimatedSection>
          <div className="relative mb-14">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#e8dfd0]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#e8dfd0]/80 to-transparent" />
            <div className="flex w-max animate-marquee gap-4">
              {[...allSkills, ...allSkills].map((skill, i) => (
                <motion.span
                  key={`${skill}-${i}`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="rounded-full border-2 border-border bg-white px-5 py-2.5 font-mono text-sm font-medium text-foreground shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-md"
              >
                <div
                  className="absolute left-0 top-0 h-1.5 w-full"
                  style={{ backgroundColor: group.color }}
                />
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: group.color }}
                >
                  {i + 1}
                </div>
                <h3 className="font-serif text-xl" style={{ color: group.color }}>
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/80 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors group-hover:border-current group-hover:text-foreground"
                      style={{ ['--tw-border-opacity' as string]: 1 }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
