'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Lightbulb, Trophy } from 'lucide-react'

const pillars = [
  {
    icon: BrainCircuit,
    title: 'Deep Expertise',
    text: 'With years of SAP EWM experience, our team brings deep knowledge and insights to every project.',
  },
  {
    icon: Lightbulb,
    title: 'Client-Centric Innovation',
    text: 'We prioritize understanding unique needs, offering innovative solutions that drive efficiency and growth.',
  },
  {
    icon: Trophy,
    title: 'Commitment to Excellence',
    text: 'Our dedication ensures successful outcomes and long-term satisfaction for every client.',
  },
]

export default function WhyWeExistSection() {
  return (
    <section
      id="why-we-exist"
      className="relative py-40 px-6 md:px-8 bg-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Big Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-[36px] md:text-[64px] font-bold text-light max-w-2xl leading-tight">
              We bridge the gap between complex supply chain challenges
              and seamless, smart execution.
            </p>
          </motion.div>

          {/* Right: Pillars */}
          <div className="grid gap-6">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="
                  glass-dark
                  p-6 rounded-2xl
                  flex items-start gap-5
                  border border-light/10
                  hover:border-secondary/60
                  transition-colors
                "
              >
                {/* Icon */}
                <div className="
                  p-3
                  bg-secondary/20
                  rounded-lg
                  text-secondary
                  shrink-0
                ">
                  <item.icon size={24} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[24px] font-bold text-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[20px] text-light/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
