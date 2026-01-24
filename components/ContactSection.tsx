'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-light px-6 md:px-8 py-48 md:py-64"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Heading */}
          <h2 className="text-[56px] md:text-[80px] font-bold text-dark leading-tight mb-6">
            Let’s Connect.
          </h2>

          {/* Subtext */}
          <p className="text-[20px] md:text-[24px] text-dark/80 font-medium mb-12 max-w-lg leading-relaxed">
            Connect with us to discuss solutions tailored to your business.
          </p>

          {/* Glass Button */}
          <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="
    group relative rounded-full px-10 py-4
    backdrop-blur-xl
    bg-white/60
    border border-primary/30
    shadow-[0_8px_24px_rgba(15,23,42,0.12)]
    transition-all
  "
>
  <span className="relative z-10 text-[20px] font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
    Send message
  </span>

  {/* Purple glow */}
  <div className="
    absolute -inset-1 rounded-full opacity-0
    group-hover:opacity-100 transition-opacity duration-300
    blur-xl bg-secondary/30
  " />
</motion.button>

        </motion.div>
      </div>
    </section>
  )
}
