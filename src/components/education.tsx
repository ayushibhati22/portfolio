import { motion } from 'framer-motion'
import { certificates, education, languages, softSkills } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { ScribbleUnderline, SectionNumber } from '@/components/decorations'

export function Education() {
  return (
    <section id="education" className="section-block paper-texture">
      <div className="section-shell">
        <div className="mb-14 flex items-end gap-6">
          <SectionNumber n="05" />
          <div>
            <p className="label-caps text-[#6b9080]">Education</p>
            <h2 className="heading-xl mt-2 font-serif">
              Foundation & <span className="italic text-[#9b59b6]">credentials</span>.
            </h2>
            <ScribbleUnderline />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {education.map((item, i) => (
              <AnimatedSection key={item.institution} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, rotate: i % 2 ? 0.5 : -0.5 }}
                  className="card-paper rounded-2xl border border-border p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-serif text-xl">{item.degree}</h3>
                    <span className="rounded-full bg-[#f5c518]/30 px-4 py-1.5 text-sm font-semibold">{item.period}</span>
                  </div>
                  <p className="body-text mt-3 text-base">{item.institution}{item.location ? ` · ${item.location}` : ''}</p>
                  <p className="mt-4 inline-block rounded-lg bg-[#4a7fd4]/10 px-4 py-2 text-sm font-semibold text-[#4a7fd4]">{item.detail}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="space-y-5">
            <AnimatedSection delay={0.1}>
              <div className="card-paper rounded-2xl border border-border p-7">
                <h3 className="font-serif text-xl mb-5 text-[#e67e22]">Certifications</h3>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.name} className="flex items-start justify-between gap-3 rounded-xl border border-border/60 bg-white/50 p-4">
                      <span className="body-text text-base">{cert.name}</span>
                      <span className={`label-caps shrink-0 rounded-full px-3 py-1 text-white ${cert.status === 'in-progress' ? 'bg-[#c4706a]' : 'bg-[#6b9080]'}`}>
                        {cert.status === 'in-progress' ? 'In Progress' : 'Done'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="card-paper rounded-2xl border border-border p-7">
                <h3 className="font-serif text-xl mb-4 text-[#9b59b6]">Soft Skills & Languages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {softSkills.map((s) => (
                    <motion.span
                      key={s.name}
                      whileHover={{ scale: 1.08, rotate: 2 }}
                      className="rounded-xl px-4 py-2 text-xs font-semibold text-white shadow-sm"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.name}
                    </motion.span>
                  ))}
                </div>
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between border-t border-border/60 py-3 body-text text-base">
                    <span className="font-medium">{lang.name}</span>
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
