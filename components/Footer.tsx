'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (!el) return

      const navHeight = 100
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group relative inline-block w-fit"
    >
      <span className="transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-arkania-purple transition-transform duration-300 group-hover:scale-x-100 origin-left" />
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#0A1020] text-white isolate">
      <div className="max-w-[1700px] mx-auto px-6 md:px-8 py-20">

        {/* Top Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20"
        >
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Image
              src="/assets/logo.svg"
              alt="Arkania Logo"
              width={200}
              height={80}
              priority
            />
            <p className="text-[20px] text-white/80">
              Supply Chain @ Speed of Light
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[24px] font-semibold text-arkania-purple mb-6">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4 text-[20px] text-white/80">
              <li><FooterLink href="#">SAP EWM</FooterLink></li>
              <li><FooterLink href="#">SAP TM</FooterLink></li>
              <li><FooterLink href="#">AI Integration</FooterLink></li>
              <li><FooterLink href="#">SAP Consulting</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[24px] font-semibold text-arkania-purple mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-4 text-[20px] text-white/80">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="#">Why Choose Us</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[24px] font-semibold text-arkania-purple mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-4 text-[20px] text-white/80">
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms of Service</FooterLink></li>
              <li><FooterLink href="#">Cookie Policy</FooterLink></li>
              <li><FooterLink href="#">Security</FooterLink></li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-arkania-purple/60" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[18px] text-white/70">
          <p>© 2026 Arkania. All rights reserved.</p>
          <p>Built with excellence for enterprise success.</p>
        </div>

      </div>
    </footer>
  )
}
