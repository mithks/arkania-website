'use client'

import { motion } from 'framer-motion'

export default function WhoWeAreSection() {
  return (
    <section
      id="who-we-are"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/rf_scan.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-18 md:px-24">
        <div className="w-full max-w-[1700px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <h2 className="text-[64px] font-bold text-primary leading-tight mb-6">
              Supply Chain at the<br />speed of light.
            </h2>

            <p className="text-[24px] text-dark leading-relaxed">
              We're not just consultants—we're your strategic partners in digital
              transformation, combining deep SAP expertise with cutting-edge AI
              to unlock unprecedented value.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
