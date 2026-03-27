import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GlobeDots } from '@/components/GlobeDots'
import { ChevronDown } from 'lucide-react'

export default function SupportModelsPage() {
  return (
    <>
      <Navigation darkBackground />

      <main className="relative bg-light text-dark overflow-hidden">
        {/* Hero */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Anchor globe so its bottom sits at the bottom of the viewport */}
            <div className="absolute -right-32 bottom-0 w-[900px] h-[740px] opacity-90">
              <GlobeDots
                enabled
                src="/assets/globe_circle.svg"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[1700px] mx-auto px-18 md:px-24 pt-[200px]">
            <div className="max-w-[720px]">
              <p className="text-[44px] md:text-[56px] font-bold text-dark leading-tight">
                Support Models:
              </p>

              <h1 className="text-[48px] md:text-[70px] font-bold text-dark leading-tight">
                On-Site & Off-Shore
              </h1>

              <p className="mt-8 max-w-[610px] text-[16px] md:text-[20px] text-dark leading-relaxed">
                <span className="font-bold text-dark">
                  Flexible, round-the-clock SAP coverage
                </span>{' '}
                tailored to your operational pace. Choose the engagement
                structure that aligns perfectly with your enterprise needs.
              </p>

              <Link
                href="#models-grid"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-light text-dark px-10 py-4 font-semibold text-lg border border-primary/15 shadow-[0_0_0_1px_rgba(178,75,243,0.10)] hover:shadow-[0_0_0_1px_rgba(178,75,243,0.25)] transition-all duration-300"
              >
                <span>Explore the models</span>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/15 border border-secondary/30"
                >
                  <ChevronDown size={18} className="text-secondary" />
                </span>
              </Link>
            </div>
          </div>

          <div className="absolute left-8 md:left-12 lg:right-[40px] bottom-0 flex gap-[116px] z-10">
            <div className="w-[116px] h-[134px] bg-primary rounded-t-[100px] flex items-center justify-center">
              <span className="text-white font-bold text-[38px]">01</span>
            </div>
            <div className="w-[116px] h-[134px] bg-primary rounded-t-[100px] flex items-center justify-center">
              <span className="text-white font-bold text-[38px]">02</span>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section
          id="models-grid"
          className="relative pt-0 pb-32 md:pb-48 bg-light"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-[185px] -top-[38px] w-[900px] h-[740px] opacity-90 z-0">
              <GlobeDots
                enabled
                src="/assets/globe_circle2.svg"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Left Column: Scaled Images (Pillars included in image files) */}
            <div className="hidden md:block relative w-[350px] lg:w-[400px] flex-shrink-0 h-[800px]">
              
              {/* Image 1: Dedicated Off-shore (Long Pillar + Laptop) */}
              <div className="absolute right-80 top-0 w-[260px] h-[800px] z-20">
                <Image
                  src="/assets/laptop.png"
                  alt="Laptop and pillar illustration"
                  fill
                  className="object-contain object-top drop-shadow-xl"
                  priority
                />
              </div>

              {/* Image 2: Hybrid On-site (Short Pillar + ID Tag) */}
              <div className="absolute left-[60px] lg:left-[70px] top-0 w-[211px] h-[550px] z-20">
                <Image
                  src="/assets/idtag.png"
                  alt="ID tag and pillar illustration"
                  fill
                  className="object-contain object-top drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Column: Content Blocks */}
            <div className="flex-1 flex flex-col relative md:pt-[150px] z-20">
              
              {/* Hybrid On-site Block (Pushed slightly left to hug the short pillar) */}
              <div className="mb-24 md:mb-[160px] md:-ml-[80px] lg:-ml-[120px] transition-all">
                <h2 className="text-[40px] md:text-[52px] font-bold text-[#1a1a2e] tracking-tight leading-tight mb-5">
                  Hybrid On-site
                </h2>
                <p className="text-[18px] md:text-[22px] font-medium text-dark/90 leading-relaxed max-w-[620px] mb-6">
                  The best of both worlds. Direct, face-to-face alignment with your business users during core local hours, seamlessly bridged to our global teams for overnight resolution.
                </p>
                <div className="flex items-center gap-3 text-[13px] md:text-[14px] font-bold text-[#5c1c81] uppercase tracking-wide">
                  <span>BUSINESS ALIGNMENT</span>
                  <span className="text-[#B24BF3]">|</span>
                  <span>CRITICAL PRIORITY</span>
                </div>
              </div>

              {/* Dedicated Off-shore Block (Pushed further left to step under the short pillar and hug the long pillar) */}
              <div className="md:-ml-[200px] lg:-ml-[320px] transition-all">
                <h2 className="text-[40px] md:text-[52px] font-bold text-[#1a1a2e] tracking-tight leading-tight mb-5">
                  Dedicated Off-shore
                </h2>
                <p className="text-[18px] md:text-[22px] font-medium text-dark/90 leading-relaxed max-w-[620px] mb-6">
                  Uninterrupted, 24/7 global execution. Maximize your system uptime with continuous coverage across three integrated shifts, managed entirely from our delivery centers.
                </p>
                <div className="flex items-center gap-3 text-[13px] md:text-[14px] font-bold text-[#5c1c81] uppercase tracking-wide">
                  <span>CONTINUOUS EXECUTION</span>
                  <span className="text-[#B24BF3]">|</span>
                  <span>GLOBAL SCALE</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}