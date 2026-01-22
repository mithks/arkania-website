'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const expertiseCards = [
  {
    title: 'Extended Warehouse\nManagement',
    description: 'Optimize your warehouse operations with intelligent automation, real-time inventory tracking, and advanced resource management.',
    image: '/assets/ewm_card.png',
  },
  {
    title: 'Transportation\nManagement',
    description: 'Streamline your logistics with comprehensive transportation planning, execution, and freight management solutions.',
    image: '/assets/tm_card.png',
  },
  {
    title: 'Custom\nTailored\nSolutions',
    description: 'Address unique business requirements with bespoke SAP extensions, seamless system integrations, and scalable software architecture.',
    image: '/assets/custom_card.png',
  },
]

export default function ExpertiseSection() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-end items-center px-6 md:px-8 pb-0 md:pb-0 pt-12 md:pt-16">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-16 h-16 md:w-20 md:h-20"
          >
            <Image
              src="/assets/arrow.png"
              alt="Arrow"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <h2 className="text-[64px] font-bold text-gray-900 leading-tight">
            Expertise That Drives Excellence
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              className="relative group rounded-t-2xl rounded-b-none overflow-hidden cursor-pointer"
            >
              {/* Card with background image */}
              <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-lg">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-start p-6 md:p-8">
                  <h3 className="text-[36px] font-bold text-arkania-purple mb-3 whitespace-pre-line">
                    {card.title}
                  </h3>
                  <p className="text-white text-[24px] leading-relaxed text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
