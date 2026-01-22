'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-white px-6 md:px-8 py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Heading */}
          <h2 className="text-[56px] md:text-[80px] font-bold text-gray-900 leading-tight mb-6 tracking-tight">
            Let’s Connect.
          </h2>
          
          {/* Subtext */}
          <p className="text-[20px] md:text-[24px] text-gray-900 font-medium mb-12 max-w-lg leading-relaxed">
            Connect with us to discuss solutions tailored to your business.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(106, 13, 173, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-full px-10 py-4"
          >
            <span className="text-[20px] font-semibold text-arkania-purple group-hover:text-electric-violet transition-colors duration-300">
              Send message
            </span>
            
            {/* Optional: Subtle purple glow border on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-arkania-purple/10 transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}