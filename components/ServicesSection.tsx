'use client'

import { motion } from 'framer-motion'

const servicesCards = [
  {
    title: 'Strategic Implementation',
    description: 'Full-cycle deployment of SAP EWM & TM solutions, ensuring a seamless transition from blueprint to go-live.',
  },
  {
    title: 'Custom Engineering',
    description: 'Tailored extensions using Fiori, ABAP, and SAP BTP to bridge the gap between standard capabilities and business needs.',
  },
  {
    title: 'Seamless Integration',
    description: 'Robust connectivity with third-party systems via APIs and Web Services for a unified ecosystem.',
  },
  {
    title: 'Support & Maintenance',
    description: 'Dedicated post-go-live support to ensure maximum system uptime, stability, and continuous improvement.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 md:px-8 py-20 md:py-32">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-16 md:gap-24">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <h1 className="text-[64px] font-bold text-arkania-purple leading-tight">
              Orchestrating<br />Global Flow
            </h1>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {servicesCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg border border-arkania-purple/30 p-6 md:p-8 hover:border-arkania-purple/60 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-[36px] font-bold text-arkania-purple mb-4">
                  {card.title}
                </h3>
                <p className="text-white text-[24px] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
