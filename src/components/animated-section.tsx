import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  variant = 'fadeUp',
}: {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn'
}) {
  const variants = { fadeUp, fadeLeft, fadeRight, scaleIn }[variant]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px', amount: 0.2 }}
      transition={{ delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <AnimatedSection>
      <div className={`mb-14 max-w-2xl ${alignClass}`}>
        <p className="label-caps mb-3 text-muted-foreground">{eyebrow}</p>
        <h2 className="heading-xl font-serif">{title}</h2>
        {description && <p className="body-text mt-4">{description}</p>}
      </div>
    </AnimatedSection>
  )
}
