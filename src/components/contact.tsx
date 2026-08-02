import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/social'
import { personal } from '@/data/portfolio'
import { AnimatedSection } from '@/components/animated-section'
import { FloatingDoodles, ScribbleUnderline } from '@/components/decorations'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-block relative overflow-hidden checkerboard-alt">
      <FloatingDoodles />

      <div className="section-shell relative">
        <div className="mb-14 text-center">
          <p className="label-caps text-[#4a7fd4]">Contact</p>
          <h2 className="heading-xl mt-3 font-serif">
            All roads lead to <span className="italic text-[#c4706a]">one</span>.
          </h2>
          <div className="mx-auto flex justify-center">
            <ScribbleUnderline />
          </div>
          <p className="body-text mx-auto mt-6 max-w-lg text-lg">
            Open to software internships & full-time roles — let's talk about what you're building.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <AnimatedSection variant="scaleIn">
            <motion.div
              whileHover={{ y: -4 }}
              className="card-paper relative overflow-hidden rounded-[2rem] border border-border p-8 md:p-12"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f5c518]/30 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#4a7fd4]/20 blur-2xl" />

              <form onSubmit={onSubmit} className="relative space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input name="name" placeholder="Your name" required className="h-14 rounded-2xl border-border bg-white/80 text-base" />
                  <Input name="email" type="email" placeholder="you@email.com" required className="h-14 rounded-2xl border-border bg-white/80 text-base" />
                </div>
                <Textarea name="message" placeholder="Tell me about the role or project..." required rows={5} className="rounded-2xl border-border bg-white/80 text-base" />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-yellow w-full text-lg sm:w-auto"
                >
                  <Send className="mr-2 inline h-5 w-5" />
                  {sent ? 'Opening email…' : "Let's Talk ↗"}
                </motion.button>
              </form>

              <div className="relative mt-12 grid gap-4 border-t border-dashed border-border pt-10 sm:grid-cols-2">
                {[
                  { Icon: Mail, href: `mailto:${personal.email}`, label: personal.email, color: '#4a7fd4' },
                  { Icon: Phone, href: `tel:${personal.phone.replace(/\s/g, '')}`, label: personal.phone, color: '#c4706a' },
                  { Icon: LinkedInIcon, href: personal.linkedin, label: 'LinkedIn', color: '#6b9080' },
                  { Icon: GitHubIcon, href: personal.github, label: 'GitHub', color: '#e8b923' },
                ].map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                    rel="noreferrer"
                    whileHover={{ x: 6, scale: 1.02 }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-white/60 p-4 transition-shadow hover:shadow-md"
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
