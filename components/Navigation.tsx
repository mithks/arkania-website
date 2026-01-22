'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const navVariants = {
  default: {
    top: 12,
    left: '50%',
    right: 'auto',
    width: '100%',
    maxWidth: 1500,
    x: '-50%',
  },
  scrolled: {
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    maxWidth: 'none',
    x: 0,
  },
}

interface NavigationProps {
  darkBackground?: boolean
}

export default function Navigation({ darkBackground = false }: NavigationProps) {
  const pathname = usePathname()

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      setIsScrolled(scrollPosition > viewportHeight * 0.8)

      const sections = ['services', 'contact']
      let currentSection: string | null = null

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        const navHeight = 100

        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          currentSection = `#${id}`
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleSectionScroll = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const navHeight = 100
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const isDarkNav = darkBackground || activeSection === '#services'

  return (
    <motion.nav
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={
        isScrolled
          ? { ...navVariants.scrolled, opacity: 1, y: 0 }
          : { ...navVariants.default, opacity: 1, y: 0 }
      }
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        layout: { duration: 0.6, ease: 'easeInOut' },
      }}
      className="fixed z-[9999] pointer-events-auto"
    >
      <motion.div
        layout
        className={`flex items-center justify-between relative overflow-hidden transition-all duration-500 pointer-events-auto ${
          isDarkNav
            ? isScrolled
              ? 'glass-dark shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass-dark rounded-full py-6 px-8'
            : isScrolled
              ? 'bg-white shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass rounded-full py-6 px-8'
        }`}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
          <Image
            src={isDarkNav ? '/assets/logo_white.png' : '/assets/logo.png'}
            alt="Arkania Logo"
            width={120}
            height={40}
            priority
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 relative z-10 mr-8 md:mr-16">
          {navItems.map((item) => {
            let isActive = false

            if (item.href.startsWith('#')) {
              isActive = activeSection === item.href
            } else {
              isActive = pathname === item.href && !activeSection
            }

            const handleClick = (
              e: React.MouseEvent<HTMLAnchorElement>
            ) => {
              if (item.href.startsWith('#')) {
                e.preventDefault()
                handleSectionScroll(item.href.replace('#', ''))
              }
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleClick}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-[24px] font-medium transition-colors duration-300 ${
                    isDarkNav
                      ? isActive
                        ? 'text-arkania-purple'
                        : 'text-arkania-purple/80 hover:text-arkania-purple'
                      : isScrolled
                        ? isActive
                          ? 'text-gray-900'
                          : 'text-gray-700 hover:text-gray-900'
                        : isActive
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.span>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isDarkNav
                        ? 'bg-arkania-purple'
                        : isScrolled
                          ? 'bg-gray-900'
                          : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                {hoveredItem === item.name && !isActive && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isDarkNav
                        ? 'bg-arkania-purple/50'
                        : isScrolled
                          ? 'bg-gray-700/50'
                          : 'bg-white/50'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </motion.div>
    </motion.nav>
  )
}
