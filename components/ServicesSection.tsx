'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const servicesCards = [
  {
    title: 'Strategic Implementation',
    description:
      'Full-cycle deployment of SAP EWM & TM solutions, ensuring a seamless transition from blueprint to go-live.',
  },
  {
    title: 'Custom Engineering',
    description:
      'Tailored extensions using Fiori, ABAP, and SAP BTP to bridge the gap between standard capabilities and business needs.',
  },
  {
    title: 'Seamless Integration',
    description:
      'Robust connectivity with third-party systems via APIs and Web Services for a unified ecosystem.',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Dedicated post-go-live support to ensure maximum system uptime, stability, and continuous improvement.',
    href: '/support-models',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative min-h-screen
        bg-gradient-to-b from-dark via-dark to-dark
        overflow-hidden pointer-events-none
      "
    >
      <div className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-8 py-20 md:py-32 pointer-events-auto">
        <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-16 md:gap-24">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <h1 className="text-[48px] md:text-[64px] font-bold text-secondary leading-tight mt-8">
              Orchestrating Global Flow
            </h1>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 -mt-4 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {servicesCards.map((card, index) => (
              (() => {
                const isNavigable = Boolean((card as { href?: string }).href)

                const cardUi = (
                  <motion.div
                    key={card.title}
                    // 1. Initial Load: Handled exclusively inside whileInView so it doesn't bleed into hover exits
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.1 }
                    }}
                    viewport={{ once: true, margin: '-100px' }}
                    
                    // 2. Default Transition: This governs how the card behaves when the mouse LEAVES
                    transition={{ 
                      type: "spring", 
                      // Use a much stiffer spring (700) for static cards so they snap back quickly
                      stiffness: isNavigable ? 400 : 700, 
                      damping: isNavigable ? 25 : 30 
                    }}
                    
                    whileHover={isNavigable ? "hover" : "staticHover"}
                    
                    // 3. Hover Variants: Governs how the card behaves when the mouse ENTERS
                    variants={{
                      hover: {
                        scale: 1.01,
                        boxShadow: "0 24px 48px -12px rgba(178,75,243,0.25)",
                        borderColor: "rgba(178,75,243,0.5)",
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      },
                      staticHover: {
                        scale: 0.985,
                        // Normal, smooth press inward
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }
                    }}
                    className={`
                      relative rounded-[20px] p-8 md:p-10 flex flex-col h-full
                      ${isNavigable ? 'cursor-pointer group' : 'cursor-default'}
                      bg-dark/60 backdrop-blur-md
                      border border-primary/20
                      transition-colors duration-500
                    `}
                  >
                    {/* Inner Text Layer */}
                    <motion.div 
                      // Same logic applied to the text layer
                      transition={{ type: "spring", stiffness: isNavigable ? 400 : 700, damping: isNavigable ? 25 : 30 }}
                      variants={{
                        hover: { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } },
                        staticHover: { y: 2, transition: { type: "spring", stiffness: 400, damping: 25 } }
                      }}
                      className="flex-1"
                    >
                      <h3 className={`text-[32px] md:text-[36px] font-bold mb-4 transition-colors duration-300 ${isNavigable ? 'text-primary group-hover:text-secondary' : 'text-primary'}`}>
                        {card.title}
                      </h3>
                      <p className="text-light/90 text-[20px] md:text-[22px] leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>

                    {/* View More Footer Layer (Only on Navigable Card) */}
                    {isNavigable && (
                      <motion.div 
                        variants={{
                          hover: { y: -8, x: 4, transition: { type: "spring", stiffness: 400, damping: 25 } }
                        }}
                        className="mt-10 flex items-center gap-3 text-secondary font-semibold text-[18px]"
                      >
                        <span className="relative">
                          Explore Models
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                      </motion.div>
                    )}
                  </motion.div>
                )

                if (!isNavigable) return cardUi

                return (
                  <Link key={card.title} href={(card as { href: string }).href} className="block h-full w-full">
                    {cardUi}
                  </Link>
                )
              })()
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}