'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import AboutHero from '@/components/AboutHero'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import WhoWeAreSection2 from '@/components/WhoWeAreSection2'
import WhoWeAreSection3 from '@/components/WhoWeAreSection3'
import WhyWeExistSection from '@/components/WhyWeExistSection'
import WhatOurClientsSaySection from '@/components/WhatOurClientsSaySection'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const [darkNav, setDarkNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 100

      const darkSections = [
        'why-we-exist',
        'what-clients-say',
      ]

      let isDark = false

      darkSections.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()

        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          isDark = true
        }
      })

      setDarkNav(isDark)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <>
      <Navigation darkBackground={darkNav} />

      <main>
        <AboutHero />
        <WhoWeAreSection />
        <WhoWeAreSection2 />
        <WhoWeAreSection3 />
        <WhyWeExistSection />
        <WhatOurClientsSaySection />
      </main>

      <Footer />
    </>
  )
}
