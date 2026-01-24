'use client'

import Navigation from '@/components/Navigation'
import AboutHero from '@/components/AboutHero'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import WhoWeAreSection2 from '@/components/WhoWeAreSection2'
import WhoWeAreSection3 from '@/components/WhoWeAreSection3'
import WhyWeExistSection from '@/components/WhyWeExistSection'
import WhatOurClientsSaySection from '@/components/WhatOurClientsSaySection'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation darkBackground />

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
