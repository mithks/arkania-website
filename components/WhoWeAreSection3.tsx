'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

type ActiveCircle = 'hq' | 'offshore'

export default function WhoWeAreSection3() {
  const [active, setActive] = useState<ActiveCircle>('offshore')

  return (
    <section className="relative bg-light py-20 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-24">

        {/* Heading */}
        <h2 className="text-[36px] md:text-[64px] font-bold text-primary mb-10">
          Our Global Footprints
        </h2>

        <div className="relative flex flex-col md:flex-row items-start gap-20">

          {/* Circles Area */}
          <div
            className="
              relative
              w-full md:w-[520px]
              h-[380px] md:h-[420px]
              right-[140px] md:right-0
              flex justify-center md:block
            "
          >
            {/* Headquarters */}
            <motion.div
              onMouseEnter={() => setActive('hq')}
              animate={{
                zIndex: active === 'hq' ? 20 : 10,
                scale: active === 'hq' ? 1.05 : 1,
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="
                absolute md:left-0 md:top-0
                left-1/2 top-0 -translate-x-1/2 md:translate-x-0
                w-[280px] h-[280px]
                md:w-[360px] md:h-[360px]
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
                absolute
                md:left-[200px] md:top-[160px]
                left-1/2 top-[170px] -translate-x-1/2 md:translate-x-0
                w-[220px] h-[220px]
                md:w-[260px] md:h-[260px]
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

          {/* Text + Addresses */}
          <div
            className="
              relative
              w-full
              md:absolute md:top-0 md:right-20
              max-w-xl
              space-y-10
            "
          >
            <p className="text-[18px] md:text-[24px] text-dark leading-relaxed">
              Established in 2021. Operating across regions to deliver reliable,
              scalable, and timely solutions through a globally aligned team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* USA */}
              <div>
                <h4 className="text-[20px] md:text-[22px] font-semibold text-primary mb-3">
                  USA Headquarters
                </h4>
                <p className="text-[18px] md:text-[20px] text-dark/80 leading-relaxed">
                  Arkania LLC<br />
                  28230 Oak Perch Ct,<br />
                  Valley Center,<br />
                  CA 92082<br />
                  USA
                </p>
              </div>

              {/* India */}
              <div>
                <h4 className="text-[20px] md:text-[22px] font-semibold text-primary mb-3">
                  India Offshore Center
                </h4>
                <p className="text-[18px] md:text-[20px] text-dark/80 leading-relaxed">
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
