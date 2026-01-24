'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-screen overflow-hidden">
        <Navigation />
        <Hero />
      </main>

      {/* Intro Section */}
      <IntroSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  )
}
