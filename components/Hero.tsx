'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

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
    <div className="min-h-screen flex items-end pb-8 md:pb-16 px-6 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end"
      >
        {/* Headline - Left Side */}
        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          <motion.h1
            className="text-[64px] font-bold text-white leading-tight"
            variants={itemVariants}
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

        {/* CTA Button - Right Side */}
        <motion.div
          variants={itemVariants}
          className="flex justify-end"
        >
          <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-dark rounded-full my-8 px-8 py-4 text-white font-medium text-[24px] relative overflow-hidden group"
          >
            <motion.span
              className="relative z-10"
              animate={{ x: isHovered ? 0 : 0 }}
            >
              Schedule a demo
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-arkania-purple/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '0%' : '-100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
