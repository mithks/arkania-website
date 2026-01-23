'use client'

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center items-center px-6 md:px-8 py-20 md:py-32">
      {/* Main Content Container */}
      <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-16 md:gap-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-10xl"
        >
          <p className="text-[64px] font-bold text-gray-900 leading-tight">
            Arkania delivers cutting-edge SAP solutions in Extended Warehouse Management, Transportation Management, and custom tailored development to optimize your operations.
          </p>
        </motion.div>

        {/* Conveyor Video Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-5xl">
            {/* Video Player */}
            <video
              src="/assets/conveyor.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain"
            />
            
            {/* Optional: Add a transparent overlay if you need to prevent clicking/pausing */}
            <div className="absolute inset-0 bg-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}