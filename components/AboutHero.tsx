'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: 'Who We Are',
    description:
      'Experienced professionals working together to deliver excellence.',
    image: '/assets/whoweare.png',
    target: 'who-we-are',
    className: 'left-24 top-[135px] w-[360px] h-[620px]', // tall card
  },
  {
    title: 'Why We Exist',
    description: 'Driven by innovation, focus on sustainable growth.',
    image: '/assets/whyweexist.png',
    target: 'why-we-exist',
    className: 'left-[500px] top-32 w-[360px] h-[300px]', // square card
  },
  {
    title: 'What Our Clients Say',
    description:
      'Building lasting client relationships through excellence and trust.',
    image: '/assets/whatourclientssay.png',
    target: 'what-clients-say',
    className: 'left-[500px] top-[460px] w-[360px] h-[300px]', // square card
  },
]

export default function AboutHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = 100
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight

    window.scrollTo({ top: y+100, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/about_bg.png"
          alt="About background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/50" />
      </div>

      {/* Glass "About Us" pill */}
      <div className="absolute -right-10 top-[350px] z-20">
        <div
          className="
            glass-dark rounded-full
            px-32 py-4
            text-[36px] font-semibold text-light
            backdrop-blur-xl
          "
        >
          About Us
        </div>
      </div>

      {/* Card Canvas */}
      <div className="relative z-10 min-h-screen max-w-[1700px] mx-auto px-6 md:px-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => scrollToSection(card.target)}
            className={`
              group absolute ${card.className}
              rounded-2xl overflow-hidden cursor-pointer
              bg-dark/50 backdrop-blur-lg
              border border-primary/30
              hover:border-secondary
              transition-all duration-300
            `}
          >
            {/* Image (ONLY this scales on hover) */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-dark/60" />

            {/* Text */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <h3 className="text-[36px] font-bold text-light mb-4">
                {card.title}
              </h3>
              <p className="text-[24px] text-light/80">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
