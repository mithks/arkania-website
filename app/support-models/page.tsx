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

          <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-8 pt-[200px]">
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

          <div className="absolute left-4 md:left-6 lg:left-36 bottom-0 flex gap-10 z-10">
            <div className="w-[96px] h-[134px] bg-primary rounded-t-[36px] flex items-center justify-center">
              <span className="text-white font-bold text-[38px]">01</span>
            </div>
            <div className="w-[96px] h-[134px] bg-primary rounded-t-[36px] flex items-center justify-center">
              <span className="text-white font-bold text-[38px]">02</span>
            </div>
          </div>
        </section>

        {/* Models */}
        <section
          id="models-grid"
          className="relative pt-0 pb-24 md:pb-32 bg-light"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-32 top-0 w-[900px] h-[740px] opacity-90">
              <GlobeDots
                enabled
                src="/assets/globe_circle2.svg"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* Left (Hybrid On-site) */}
              <div className="relative rounded-[24px] overflow-hidden bg-white/70 border border-primary/10 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-secondary/5 to-white/0" />
                <div className="absolute left-0 top-0 bottom-0 w-[14px] bg-secondary/55" />

                <div className="relative h-full p-8 md:p-10 flex flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div className="max-w-[320px]">
                      <h2 className="text-[36px] md:text-[44px] font-bold text-primary leading-tight">
                        Hybrid On-site
                      </h2>
                      <p className="text-[16px] md:text-[18px] text-dark/70 leading-relaxed mt-6">
                        The best of both worlds: direct, face-to-face
                        alignment with your business users during core
                        phases, backed by a structured engagement model.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 relative flex-1 min-h-[240px]">
                    <div className="absolute -left-2 top-0 w-[420px] h-[280px] opacity-95">
                      <Image
                        src="/assets/laptop.png"
                        alt="Hybrid On-site laptop illustration"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="absolute left-32 top-0 w-[110px] h-[70px]">
                      <Image
                        src="/assets/idtag.png"
                        alt="On-site identification tag"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-[12px] md:text-[13px] font-semibold text-secondary">
                    <span className="px-3 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                      BUSINESS ALIGNMENT
                    </span>
                    <span className="px-3 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                      CRITICAL PRIORITY
                    </span>
                  </div>
                </div>
              </div>

              {/* Right (Dedicated Off-shore) */}
              <div className="relative rounded-[24px] overflow-hidden bg-dark text-light border border-primary/10">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-secondary/5 to-transparent" />
                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-[36px] md:text-[44px] font-bold text-secondary leading-tight">
                      Dedicated Off-shore
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-light/80 leading-relaxed mt-6">
                      Uninterrupted, 24/7 global execution. Maximize
                      system uptime with continuous coverage across the
                      integrated shifts, managed entirely from our global
                      delivery centers.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 text-[12px] md:text-[13px] font-semibold text-secondary">
                    <span className="px-3 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                      CONTINUOUS EXECUTION
                    </span>
                    <span className="px-3 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                      GLOBAL SCALE
                    </span>
                  </div>

                  <div className="mt-12">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center w-full rounded-full bg-secondary text-white px-8 py-4 font-semibold text-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      Talk to an SAP Expert
                    </Link>
                  </div>
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

