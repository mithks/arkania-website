'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const expertiseCards = [
  {
    slug: 'ewm',
    title: 'Extended Warehouse\nManagement',
    description:
      'Optimize your warehouse operations with intelligent automation, real-time inventory tracking, and advanced resource management.',
    image: '/assets/ewm_card.png',
  },
  {
    slug: 'tm',
    title: 'Transportation\nManagement',
    description:
      'Streamline your logistics with comprehensive transportation planning, execution, and freight management solutions.',
    image: '/assets/tm_card.png',
  },
  {
    slug: 'custom',
    title: 'Custom\nTailored\nSolutions',
    description:
      'Address unique business requirements with bespoke SAP extensions, seamless system integrations, and scalable software architecture.',
    image: '/assets/custom_card.png',
  },
  {
    slug: 'ai',
    title: 'Integration\nwith AI',
    description:
      'Leverage cutting-edge AI and machine learning to enhance decision-making and automate complex supply chain processes.',
    image: '/assets/ai_card.png',
  },
]

export default function ExpertiseSection() {
  return (
    <section className="relative min-h-screen bg-light flex flex-col justify-end items-center px-6 md:px-8 pt-12 md:pt-16">
      <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-12 md:gap-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          {/* <motion.div
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
          </motion.div> */}

          <h2 className="text-[36px] md:text-[64px] font-bold text-dark leading-tight">
            Expertise That Drives Excellence
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-10 md:py-0">
          {expertiseCards.map((card, index) => (
            <Link
              key={card.slug}
              href={`/services/${card.slug}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                className="relative rounded-t-2xl overflow-hidden cursor-pointer"
              >
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
                    <h3 className="text-[36px] font-bold text-secondary mb-3 whitespace-pre-line">
                      {card.title}
                    </h3>

                    <p className="text-light text-[24px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
