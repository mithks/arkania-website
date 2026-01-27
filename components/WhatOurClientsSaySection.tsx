'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const logos = [
  '/assets/centurylink_logo.png',
  '/assets/epson_logo.png',
  '/assets/sony_logo.png',
  '/assets/builders_logo.png',
  '/assets/lumen_logo.png',
  '/assets/benjamin_moore_logo.png',
  '/assets/adtran_logo.png',
  '/assets/cardone_logo.png',
  '/assets/grassvalley_logo.png',
  '/assets/penumbra_logo.png',
]

const testimonials = [
  {
    author: 'Client 1',
    text:
      'They engineered a solution that perfectly fit our unique workflows. The delivery quality and attention to detail were exceptional.',
  },
  {
    author: 'Client 2',
    text:
      'Arkania helped us scale globally with confidence. Their SAP expertise is world-class.',
  },
  {
    author: 'Client 3',
    text:
      'A true partner in innovation. Reliable, responsive, and deeply technical.',
  },
]

const RADIUS = 450
const CENTER = 260
const STEP_DURATION = 3500 // ms — slow + premium

export default function WhatOurClientsSaySection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [orbitStep, setOrbitStep] = useState(0)

  /* Testimonial controls */
  const prevTestimonial = () =>
    setTestimonialIndex((i) =>
      i === 0 ? testimonials.length - 1 : i - 1
    )

  const nextTestimonial = () =>
    setTestimonialIndex((i) =>
      i === testimonials.length - 1 ? 0 : i + 1
    )

  /* Logo orbit stepping */
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitStep((s) => s + 1)
    }, STEP_DURATION)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="what-clients-say"
      className="relative py-32 px-18 md:px-24 bg-light overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-[64px] font-bold text-primary leading-tight mb-8">
            Partners in Excellence
          </h2>

          <p className="text-[24px] text-dark leading-relaxed mb-8">
            At Arkania, we believe that true success lies in co-creating value.
            We don’t just deliver software; we build enduring partnerships
            grounded in trust and shared innovation.
          </p>

          {/* TESTIMONIAL BOX */}
          <div className="relative max-w-md ml-16">

            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20"
            >
              <Image
                src="/assets/left_arrow.svg"
                alt="Previous"
                width={32}
                height={32}
              />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20"
            >
              <Image
                src="/assets/right_arrow.svg"
                alt="Next"
                width={32}
                height={32}
              />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="glass rounded-2xl p-8 shadow-lg"
              >
                <Image
                  src="/assets/quote_symbol.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                  className="mb-4"
                />

                <p className="text-[20px] text-dark leading-relaxed mb-6">
                  {testimonials[testimonialIndex].text}
                </p>

                <p className="text-[20px] font-semibold text-primary">
                  {testimonials[testimonialIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT – DISCRETE LOGO ORBIT */}
        <div className="absolute left-[1200px] w-[520px] h-[520px] mx-auto">
          {logos.map((logo, i) => {
            const angle =
              ((360 / logos.length) * (i + orbitStep)) * (Math.PI / 180)

            const x = CENTER + RADIUS * Math.cos(angle) - 55
            const y = CENTER + RADIUS * Math.sin(angle) - 30

            return (
              <motion.div
                key={logo}
                animate={{ x, y }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1], // premium easing
                }}
                className="absolute"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={110}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
