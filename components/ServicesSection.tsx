'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center items-center px-6 md:px-8 py-20 md:py-32">
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-10xl"
        >
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Arkania delivers cutting-edge SAP solutions in Extended Warehouse Management, Transportation Management, and custom tailored development to optimize your operations.
          </p>
        </motion.div>

        {/* Conveyor Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <div className="relative w-full max-w-5xl">
            <Image
              src="/assets/conveyor.png"
              alt="Warehouse conveyor belt with boxes"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
