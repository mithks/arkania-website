'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="relative min-h-screen bg-light flex flex-col justify-center items-center px-6 md:px-8 overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/conveyor.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto -mt-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-8xl"
        >
          <p className="text-[48px] md:text-[64px] font-bold text-dark leading-tight">
            Arkania solves your toughest logistics challenges with intelligent, precision-engineered SAP solutions that transform complexity into seamless performance.
          </p>
        </motion.div>
      </div>
      
    </section>
  )
}
