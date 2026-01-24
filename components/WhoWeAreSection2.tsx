'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const slides = [
  { id: 1, image: '/assets/leader1.png' },
  { id: 2, image: '/assets/leader2.png' },
  { id: 3, image: '/assets/leader3.png' },
  { id: 4, image: '/assets/leader4.png' },
]

export default function WhoWeAreSection2() {
  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  const next = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

  return (
    <section className="relative bg-light py-32 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-8">

        {/* Slider Area */}
        <div className="relative flex items-center justify-center mb-32">

          {/* Left Arrow */}
            <button
            onClick={prev}
            aria-label="Previous"
            className="
                absolute left-0 md:left-32 z-30
                w-12 h-12 flex items-center justify-center
                hover:scale-110 transition-transform
            "
            >
            <Image
                src="/assets/left_arrow.svg"
                alt="Previous"
                width={32}
                height={32}
            />
            </button>


          {/* Slider */}
          <div className="relative w-full max-w-[1200px] h-[340px] overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].id}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Dark Card */}
                <div className="absolute right-20 top-0 h-full w-[75%] rounded-2xl bg-dark shadow-xl z-5" />

                {/* Portrait */}
                <div className="absolute left-16 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-[220px] h-[260px] rounded-xl overflow-hidden shadow-lg bg-light">
                    <Image
                      src={slides[index].image}
                      alt="Leader"
                      width={220}
                      height={260}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
            <button
            onClick={next}
            aria-label="Next"
            className="
                absolute right-0 md:right-32 z-30
                w-12 h-12 flex items-center justify-center
                hover:scale-110 transition-transform
            "
            >
            <Image
                src="/assets/right_arrow.svg"
                alt="Next"
                width={32}
                height={32}
            />
            </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

          {[
            { value: '20+', label: 'Functional Consultants' },
            { value: '15+', label: 'Technical Consultants' },
            { value: '25+', label: 'Trusted Clients' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <div
                className="
                    w-24 h-24 rounded-full
                    glass
                    flex items-center justify-center
                    border border-primary/20
                    shadow-lg
                "
                >
                <span className="text-[36px] font-bold text-dark">
                  {item.value}
                </span>
              </div>
              <p className="text-[24px] font-semibold text-dark">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
