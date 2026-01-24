'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

type ActiveCircle = 'hq' | 'offshore'

export default function WhoWeAreSection3() {
  // ✅ Offshore is on top by default
  const [active, setActive] = useState<ActiveCircle>('offshore')

  return (
    <section className="relative bg-light py-20 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-8">

        {/* Heading */}
        <h2 className="text-[64px] font-bold text-primary mb-10">
          Our Global Footprints
        </h2>

        <div className="relative flex flex-col md:flex-row items-start gap-24">

          {/* Overlapping PNG Area */}
          <div className="relative w-[520px] h-[420px]">

            {/* Headquarters */}
            <motion.div
                onMouseEnter={() => setActive('hq')}
                animate={{
                    zIndex: active === 'hq' ? 20 : 10,
                    scale: active === 'hq' ? 1.05 : 1,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="
                    absolute left-0 top-0
                    w-[360px] h-[360px]
                    rounded-full
                    cursor-pointer
                    flex items-center justify-center
                "
                >
                <Image
                    src="/assets/headquarters.png"
                    alt="Headquarters"
                    width={360}
                    height={360}
                    className="pointer-events-none"
                />
                </motion.div>


            {/* Offshore */}
            <motion.div
                onMouseEnter={() => setActive('offshore')}
                animate={{
                    zIndex: active === 'offshore' ? 20 : 15,
                    scale: active === 'offshore' ? 1.05 : 1,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="
                    absolute left-[200px] top-[160px]
                    w-[260px] h-[260px]
                    rounded-full
                    cursor-pointer
                    flex items-center justify-center
                "
                >
                <Image
                    src="/assets/offshore.png"
                    alt="Offshore"
                    width={260}
                    height={260}
                    className="pointer-events-none"
                />
                </motion.div>


          </div>

          {/* Description */}
          <div className="absolute top-20 right-20 max-w-xl">
            <p className="text-[24px] text-dark leading-relaxed">
              Established in 2021. Operating across regions to deliver reliable,
              scalable, and timely solutions through a globally aligned team.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
