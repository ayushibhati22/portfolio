import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { ScribbleUnderline, SectionNumber } from '@/components/decorations'

function TicketCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0]
  index: number
  featured?: boolean
}) {
  return (
    <AnimatedSection delay={index * 0.1} variant={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.35 }}
        className={`ticket-card group block ${featured ? 'mb-6' : ''}`}
      >
        <span className="ticket-notch ticket-notch-left" />
        <span className="ticket-notch ticket-notch-right" />

        <div className={`grid ${featured ? 'md:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[0.9fr_1.1fr]'}`}>
          <div className="relative min-h-[200px] overflow-hidden md:min-h-[240px]">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span className="label-caps text-white/80">{project.category}</span>
              <h3 className="mt-2 font-serif text-xl font-normal leading-tight sm:text-2xl md:text-3xl">
                {project.shortName}
              </h3>
              <p className="mt-1 text-sm text-white/80 line-clamp-2">{project.title}</p>
            </div>
          </div>

          <div className="relative bg-card p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="label-caps text-muted-foreground">{featured ? 'Featured Project' : project.category}</p>
                <h3 className="mt-2 font-serif text-xl md:text-2xl">{project.title}</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4a7fd4]" />
            </div>
            <p className="body-text mt-4 text-base">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-dashed border-border pt-4">
              <span className="label-caps text-[#4a7fd4]">View on GitHub</span>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground">→</span>
            </div>
          </div>
        </div>
      </motion.a>
    </AnimatedSection>
  )
}

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-block bg-[var(--color-blue-section)]/50">
      <div className="section-shell">
        <div className="mb-14 flex items-end gap-6">
          <SectionNumber n="04" />
          <div>
            <p className="label-caps text-[#4a7fd4]">Featured Work</p>
            <h2 className="heading-xl mt-2 font-serif">
              Projects that <span className="italic text-[#c4706a]">ship</span>.
            </h2>
            <ScribbleUnderline />
          </div>
        </div>

        <TicketCard project={featured} index={0} featured />
        <div className="space-y-5">
          {rest.map((project, i) => (
            <TicketCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
