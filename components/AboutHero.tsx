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
    desktopClass: 'left-24 top-[135px] w-[360px] h-[620px]',
  },
  {
    title: 'Why We Exist',
    description: 'Driven by innovation, focus on sustainable growth.',
    image: '/assets/whyweexist.png',
    target: 'why-we-exist',
    desktopClass: 'left-[500px] top-32 w-[360px] h-[300px]',
  },
  {
    title: 'What Our Clients Say',
    description:
      'Building lasting client relationships through excellence and trust.',
    image: '/assets/whatourclientssay.png',
    target: 'what-clients-say',
    desktopClass: 'left-[500px] top-[460px] w-[360px] h-[300px]',
  },
]

export default function AboutHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = 100
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight

    window.scrollTo({ top: y + 100, behavior: 'smooth' })
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

      {/* About Us pill */}
      <div className="absolute z-20
        top-28 left-1/2 -translate-x-1/2
        md:left-auto md:translate-x-0 md:-right-10 md:top-[350px]"
      >
        <div className="
          glass-dark rounded-full
          px-12 md:px-32 py-3 md:py-4
          text-[24px] md:text-[36px]
          font-semibold text-light
          backdrop-blur-xl
        ">
          About Us
        </div>
      </div>

      {/* Cards */}
      <div className="
        relative z-10 min-h-screen
        max-w-[1700px] mx-auto
        px-4 md:px-8
        pt-40 md:pt-0
      ">
        {/* MOBILE STACK */}
        <div className="flex flex-col gap-6 md:hidden py-10 md:py-0">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(card.target)}
              className="
                relative h-[320px]
                rounded-2xl overflow-hidden
                bg-dark/50 backdrop-blur-lg
                border border-primary/30
              "
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-dark/60" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-[28px] font-bold text-light mb-2">
                  {card.title}
                </h3>
                <p className="text-[18px] text-light/80">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP ABSOLUTE LAYOUT */}
        <div className="hidden md:block relative min-h-screen">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => scrollToSection(card.target)}
              className={`
                group absolute ${card.desktopClass}
                rounded-2xl overflow-hidden cursor-pointer
                bg-dark/50 backdrop-blur-lg
                border border-primary/30
                hover:border-secondary
                transition-all duration-300
              `}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60" />
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
      </div>
    </section>
  )
}
