'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

type ActiveCircle = 'hq' | 'offshore'

export default function WhoWeAreSection3() {
  // Offshore is on top by default
  const [active, setActive] = useState<ActiveCircle>('offshore')

  return (
    <section className="relative bg-light py-20 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-18 md:px-24">

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

          {/* Right Content */}
          <div className="absolute top-0 right-20 max-w-xl space-y-10">

            {/* Description */}
            <p className="text-[24px] text-dark leading-relaxed">
              Established in 2021. Operating across regions to deliver reliable,
              scalable, and timely solutions through a globally aligned team.
            </p>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* USA */}
              <div>
                <h4 className="text-[22px] font-semibold text-primary mb-3">
                  USA Headquarters
                </h4>
                <p className="text-[20px] text-dark/80 leading-relaxed">
                  Arkania LLC<br />
                  28230 Oak Perch Ct,<br />
                  Valley Center,<br />
                  CA 92082<br />
                  USA
                </p>
              </div>

              {/* India */}
              <div>
                <h4 className="text-[22px] font-semibold text-primary mb-3">
                  India Offshore Center
                </h4>
                <p className="text-[20px] text-dark/80 leading-relaxed">
                  Arkania Solutions Pvt Ltd<br />
                  Sankaram, Tc 18/2051-3,<br />
                  TKD Road, Marappalam, Pattom PO,<br />
                  Thiruvananthapuram 695004,<br />
                  Kerala
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
