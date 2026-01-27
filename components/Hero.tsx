'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const handleScheduleClick = () => {
    if (pathname === '/') {
      const el = document.getElementById('contact')
      if (!el) return

      const navHeight = 100
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight

      window.scrollTo({
        top: y + 100,
        behavior: 'smooth',
      })
    } else {
      router.push('/#contact')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/homepage_video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end pb-8 md:pb-16 px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-[64px] font-bold text-light leading-tight"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Transform your
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Supply Chain
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                with Next Gen SAP.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-end">
            <motion.button
              onClick={handleScheduleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                glass-dark rounded-full my-8 px-8 py-4
                text-light font-medium text-[24px]
                relative overflow-hidden group
              "
            >
              <span className="relative z-10">
                Schedule a demo
              </span>

              {/* Hover gradient */}
              <motion.div
                className="
                  absolute inset-0
                  bg-gradient-to-r from-primary/30 to-transparent
                "
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
