'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const SERVICES = {
  ewm: {
    title: 'Extended Warehouse Management',
    description: `We don’t just configure software; we map it to your physical reality. 
Whether you run a high-volume distribution center or a complex production warehouse, 
we tailor SAP EWM to fit your unique flows—bridging the gap between standard capabilities 
and your operational needs.`,
    image: '/assets/ewm_detail.png',
  },

  tm: {
    title: 'Transportation Management',
    description: `Optimize freight planning, carrier collaboration, and execution with 
SAP TM solutions designed for speed, visibility, and cost control.`,
    image: '/assets/tm_detail.png',
  },

  custom: {
    title: 'Custom Tailored Solutions',
    description: `From ABAP extensions to SAP BTP integrations, we build solutions that 
fit your business—not the other way around.`,
    image: '/assets/custom_detail.png',
  },

  ai: {
    title: 'Integration with AI',
    description: `Leverage machine learning and intelligent automation to enhance 
decision-making across your supply chain.`,
    image: '/assets/ai_detail.png',
  },
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = SERVICES[params.slug as keyof typeof SERVICES]

  if (!service) {
    return <div className="p-40 text-center">Service not found</div>
  }

  return (
    <>
      <Navigation darkBackground/>

      <main className="bg-light">
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT – IMAGE */}
          <div className="relative h-[80vh] lg:h-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="flex items-center px-12 lg:px-20">
            <div className="max-w-xl">
              <h1 className="text-[64px] font-bold text-secondary mb-6">
                {service.title}
              </h1>

              <p className="text-[24px] text-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}
