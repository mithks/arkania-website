'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ArkaniaTextReveal() {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  return (
    <div
      className="absolute -right-[130px] -bottom-[300px] w-full h-[420px] flex items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setPos({ x, y })
      }}
    >
      {/* Base Text (always visible, subtle) */}
      <div className="
        absolute
        text-[45px] md:text-[50px]
        font-extrabold tracking-tight
        text-primary
        select-none
        pointer-events-none
      ">
        arkania
      </div>

      {/* Glow Reveal Layer */}
      <motion.div
        className="
          absolute
          text-[45px] md:text-[50px]
          font-extrabold tracking-tight
          text-secondary
          select-none
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]
        "
        style={{
          WebkitMaskImage: `radial-gradient(
            circle 220px at ${pos.x}% ${pos.y}%,
            black 0%,
            transparent 65%
          )`,
          maskImage: `radial-gradient(
            circle 220px at ${pos.x}% ${pos.y}%,
            black 0%,
            transparent 65%
          )`,
        }}
      >
        arkania
      </motion.div>
    </div>
  )
}
