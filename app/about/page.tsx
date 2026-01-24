'use client'

import Navigation from '@/components/Navigation'
import AboutHero from '@/components/AboutHero'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import WhoWeAreSection2 from '@/components/WhoWeAreSection2'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navigation darkBackground />

      <main>
        <AboutHero />

        {/* Future sections (anchors already wired) */}
        <div id="who-we-are" />
        <div id="why-we-exist" />
        <div id="what-clients-say" />
      </main>
      <WhoWeAreSection />
      <WhoWeAreSection2 />
      <Footer />
    </>
  )
}
