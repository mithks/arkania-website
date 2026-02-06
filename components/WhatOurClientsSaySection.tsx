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

// Desktop orbit
const DESKTOP_RADIUS = 450
const DESKTOP_CENTER = 260

// Mobile orbit
const MOBILE_RADIUS = 200
const MOBILE_CENTER = 300

const STEP_DURATION = 3500

export default function WhatOurClientsSaySection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [orbitStep, setOrbitStep] = useState(0)

  const prevTestimonial = () =>
    setTestimonialIndex((i) =>
      i === 0 ? testimonials.length - 1 : i - 1
    )

  const nextTestimonial = () =>
    setTestimonialIndex((i) =>
      i === testimonials.length - 1 ? 0 : i + 1
    )

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitStep((s) => s + 1)
    }, STEP_DURATION)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="what-clients-say"
      className="relative py-32 px-6 md:px-24 bg-light overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-[36px] md:text-[64px] font-bold text-primary leading-tight mb-8">
            Partners in Excellence
          </h2>

          <p className="text-[20px] md:text-[24px] text-dark leading-relaxed mb-8">
            At Arkania, we believe that true success lies in co-creating value.
            We don’t just deliver software; we build enduring partnerships
            grounded in trust and shared innovation.
          </p>

          {/* TESTIMONIAL BOX */}
          <div className="relative max-w-md md:max-w-md px-6 md:px-0">

            <button
              onClick={prevTestimonial}
              className="absolute -left-3 md:-left-12 top-1/2 -translate-y-1/2 z-20"
            >
              <Image
                src="/assets/left_arrow.svg"
                alt="Previous"
                width={32}
                height={32}
              />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-3 md:-right-12 top-1/2 -translate-y-1/2 z-20"
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
                className="glass rounded-2xl p-4 md:p-8 shadow-lg"
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

        {/* DESKTOP LOGO ORBIT */}
        <div className="hidden lg:block absolute left-[1200px] w-[520px] h-[520px]">
          {logos.map((logo, i) => {
            const angle =
              ((360 / logos.length) * (i + orbitStep)) * (Math.PI / 180)

            const x =
              DESKTOP_CENTER + DESKTOP_RADIUS * Math.cos(angle) - 55
            const y =
              DESKTOP_CENTER + DESKTOP_RADIUS * Math.sin(angle) - 30

            return (
              <motion.div
                key={logo}
                animate={{ x, y }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
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

      {/* MOBILE LOGO ORBIT (BOTTOM) */}
      <div className="relative mt-24 flex justify-center lg:hidden">
        <div className="relative w-[300px] h-[300px]">
          {logos.map((logo, i) => {
            const angle =
              ((360 / logos.length) * (i + orbitStep)) * (Math.PI / 180)

            const x =
              MOBILE_CENTER + MOBILE_RADIUS * Math.cos(angle) - 35
            const y =
              MOBILE_CENTER + MOBILE_RADIUS * Math.sin(angle) - 18

            return (
              <motion.div
                key={logo}
                animate={{ x, y }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute"
              >
                <Image
                  src={logo}
                  alt="Client logo"
                  width={70}
                  height={40}
                  className="object-contain opacity-90"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
