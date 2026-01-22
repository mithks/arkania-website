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

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string
  src: string
  alt: string
}) {
  return (
    <Link
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-arkania-purple/80 transition-all duration-300 hover:scale-110"
    >
      <Image src={src} alt={alt} width={18} height={18} />
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
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

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <SocialIcon
                href="https://www.linkedin.com"
                src="/assets/linkedin.svg"
                alt="LinkedIn"
              />
              <SocialIcon
                href="https://twitter.com"
                src="/assets/twitter.svg"
                alt="Twitter"
              />
              <SocialIcon
                href="#contact"
                src="/assets/email.svg"
                alt="Email"
              />
            </div>
          </div>

          {/* Solutions */}
          <div className="md:justify-self-end">
            <h4 className="text-[24px] font-semibold text-arkania-purple mb-6">
              Solutions
            </h4>
            <ul className="flex flex-col gap-4 text-[20px] text-white/80">
              <li>SAP EWM</li>
              <li>SAP TM</li>
              <li>AI Integration</li>
              <li>SAP Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:justify-self-end">
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
        </motion.div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-arkania-purple/60" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[18px] text-white/70">
          <p>© 2026 Arkania. All rights reserved.</p>

          {/* Legal links horizontally */}
          <div className="flex gap-8">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Policy</FooterLink>
            <FooterLink href="#">Security</FooterLink>
          </div>
        </div>

      </div>
    </footer>
  )
}
