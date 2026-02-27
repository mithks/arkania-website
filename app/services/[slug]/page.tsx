'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

const SERVICES = {
  ewm: {
    title: 'Extended Warehouse Management',
    description: `We don’t just configure software; we map it to your physical reality. 
Whether you run a high-volume distribution center or a complex production warehouse, 
we tailor SAP EWM to fit your unique flows—bridging the gap between standard capabilities 
and your operational needs.`,
    image: '/assets/ewm_detail.png',
    
    // NEW: Added dynamic capabilities data so each service can have its own grid
    capabilitiesTitle: 'Precision Engineering for Complex Supply Chains',
    capabilitiesSubtitle: "We bridge the gap between SAP EWM's standard capabilities and the unique, physical demands of your warehouse floor.",
    capabilities: [
      {
        title: 'Flawless Inbound & Outbound Execution',
        description: 'Transform chaotic docks into precision checkpoints. We configure SAP EWM to handle complex receiving processes, cross-docking, and advanced wave management, ensuring your goods move from trailer to bin—and back out the door—with zero friction.',
        icon: '📦', // You can replace these with actual SVG icons later
      },
      {
        title: 'Intelligent Storage & Slotting',
        description: 'Stop wasting high-value warehouse real estate. Using dynamic slotting algorithms and advanced flexible bin strategies, we optimize your physical footprint. High-velocity items stay accessible, maximizing picker efficiency and driving down cycle times.',
        icon: '🏢',
      },
      {
        title: 'Seamless Automation & RF Integration',
        description: 'Connect digital data directly to physical action. We integrate your SAP environment securely with RF scanners, automated guided vehicles (AGVs), and Material Flow Systems (MFS), delivering real-time visibility and eliminating manual data entry errors.',
        icon: '🔄',
      }
    ]
  },

  tm: {
    title: 'Transportation Management',
    description: `Optimize freight planning, carrier collaboration, and execution with SAP TM solutions designed for speed, visibility, and cost control.`,
    image: '/assets/tm_detail.png',
    capabilitiesTitle: 'End-to-End Freight Optimization',
    capabilitiesSubtitle: 'Visibility and control across your entire logistics network.',
    capabilities: [
      {
        title: 'Dynamic Routing & Planning',
        description: 'Automate complex routing decisions across multi-modal transport networks. We configure SAP TM to maximize load consolidation, reduce empty miles, and dynamically adjust to real-time constraints and capacity limits.',
        icon: '🚛',
      },
      {
        title: 'Seamless Carrier Collaboration',
        description: 'Streamline your procurement process. We build intuitive portals for freight tendering, rate negotiations, and real-time carrier tracking, ensuring you always secure the best rates and reliable capacity.',
        icon: '🤝',
      },
      {
        title: 'Automated Freight Settlement',
        description: 'Eliminate billing discrepancies. Our setups automate freight auditing and complex charge calculations, integrating directly with SAP ERP for instant financial reconciliation and deep cost-to-serve analytics.',
        icon: '📊',
      }
    ]
  },

  custom: {
    title: 'Custom Tailored Solutions',
    description: `From ABAP extensions to SAP BTP integrations, we build solutions that fit your business—not the other way around.`,
    image: '/assets/custom_detail.png',
    capabilitiesTitle: 'Architected for Your Reality',
    capabilitiesSubtitle: 'Bridging the gap between standard SAP and your custom operational requirements.',
    capabilities: [
      {
        title: 'Advanced ABAP Development',
        description: 'Go beyond out-of-the-box limitations. Our expert developers write clean, high-performance ABAP code for custom transactions, reports, and enhancements that execute your unique business logic flawlessly without impacting system stability.',
        icon: '💻',
      },
      {
        title: 'SAP BTP & Cloud Extensions',
        description: 'Future-proof your architecture. We leverage the SAP Business Technology Platform (BTP) to build side-by-side extensions, keeping your ERP core clean while deploying modern, scalable microservices and custom Fiori applications.',
        icon: '☁️',
      },
      {
        title: 'Seamless 3rd-Party Integrations',
        description: 'Connect your entire ecosystem. Whether integrating external logistics providers, IoT devices, or legacy warehouse systems, we architect secure, high-throughput API and EDI connections using SAP Integration Suite.',
        icon: '🔗',
      }
    ]
  },

  ai: {
    title: 'Integration with AI',
    description: `Leverage machine learning and intelligent automation to enhance decision-making across your supply chain.`,
    image: '/assets/ai_detail.png',
    capabilitiesTitle: 'Next-Generation Supply Chain Intelligence',
    capabilitiesSubtitle: 'Predictive analytics and automated decision making to keep you ahead of the curve.',
    capabilities: [
      {
        title: 'Predictive Demand & Slotting',
        description: 'Move from reactive to proactive. We integrate advanced machine learning models with your historical SAP data to predict volume surges, optimize safety stock, and dynamically reorganize bin slotting before bottlenecks happen.',
        icon: '📈',
      },
      {
        title: 'Generative AI System Assistants',
        description: 'Bypass complex SAP screens using natural language. We integrate secure, conversational AI directly into your SAP environment. Simply type or speak an instruction and our intelligent assistant translates your request into secure, real-time system execution.',
        icon: '💬',
      },
      {
        title: 'Smart Exception Handling',
        description: 'Automate the routine, escalate the exceptions. We deploy AI-driven logic to handle standard logistics anomalies, automatically rerouting delayed shipments or adjusting workflows, freeing your team to focus on high-value strategy.',
        icon: '🤖',
      }     
    ]
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
      <Navigation darkBackground />

      <main className="bg-light">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT – IMAGE */}
          <div className="relative h-[60vh] lg:h-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="flex items-center px-12 lg:px-20 py-16 lg:py-0">
            <div className="max-w-xl">
              <h1 className="text-[36px] md:text-[64px] font-bold text-primary mb-6 leading-tight">
                {service.title}
              </h1>

              <p className="text-[16px] md:text-[20px] text-dark/80 leading-relaxed mb-10">
                {service.description}
              </p>

              {/* NEW: Enterprise Call to Action Button */}
              <Link 
                href="/#contact" 
                className="inline-block bg-secondary text-white px-8 py-4 font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 rounded-full"
              >
                Talk to an SAP Expert
              </Link>
            </div>
          </div>
        </section>

        {/* NEW: CORE CAPABILITIES SECTION */}
        {/* Only renders if the service has capabilities defined */}
        {service.capabilities && service.capabilities.length > 0 && (
          <section className="py-24 px-6 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
              
              <div className="mb-16 md:text-center max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {service.capabilitiesTitle}
                </h2>
                <p className="text-lg text-dark/70">
                  {service.capabilitiesSubtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {service.capabilities.map((cap, index) => (
                  <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div className="text-4xl mb-6">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-dark/80 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}