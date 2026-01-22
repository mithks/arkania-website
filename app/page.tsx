'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ExpertiseSection from '@/components/ExpertiseSection'
import ServicesSection from '@/components/ServicesSection'

export default function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <main className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              // Uses the home_bg image from the assets folder (e.g. public/assets/home_bg.jpg)
              // Adjust the file extension if needed (jpg/png/webp)
              backgroundImage: 'url("/assets/home_bg.png")',
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Hero />
        </div>
      </main>

      {/* Intro Section */}
      <IntroSection />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Services Section */}
      <ServicesSection />
    </>
  )
}
