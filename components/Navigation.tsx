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
  { name: 'Contact', href: '/contact' },
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
  const [isOverDarkSection, setIsOverDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximately 100vh)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      setIsScrolled(scrollPosition > viewportHeight * 0.8)
      
      // Check if navigation is over the dark services section
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        const navHeight = 100 // approximate nav height
        // Check if nav is within or overlapping the services section
        // We use this state to both darken the nav AND highlight the link
        setIsOverDarkSection(rect.top <= navHeight && rect.bottom >= 0)
      } else {
        setIsOverDarkSection(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={isScrolled ? { ...navVariants.scrolled, opacity: 1, y: 0 } : { ...navVariants.default, opacity: 1, y: 0 }}
      variants={navVariants}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        layout: { duration: 0.6, ease: 'easeInOut' },
      }}
      className="fixed z-50"
    >
      <motion.div
        layout
        className={`flex items-center justify-between relative overflow-hidden transition-all duration-500 ${
          darkBackground || isOverDarkSection
            ? isScrolled
              ? 'glass-dark shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass-dark rounded-full py-6 px-8'
            : isScrolled
              ? 'bg-white shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass rounded-full py-6 px-8'
        }`}
      >
        {/* Purple curve accent on left (only visible on white background) */}
        {isScrolled && !darkBackground && !isOverDarkSection && (
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-arkania-purple/30 via-arkania-purple/20 to-transparent"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
            }}
          />
        )}
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative z-10"
        >
          <Image
            src={darkBackground || isOverDarkSection ? "/assets/logo_white.png" : "/assets/logo.png"}
            alt="Arkania Logo"
            width={120}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 relative z-10 mr-8 md:mr-16">
          {navItems.map((item) => {
            // UPDATED: Logic to determine if a link is active
            let isActive = false

            if (item.href === '#services') {
               // If the link is Services, check if we are currently scrolled over the section
               isActive = isOverDarkSection
            } else {
               // For standard pages (Home, About, Contact)
               // Check if the path matches AND ensure we aren't currently highlighting Services
               // This prevents "Home" and "Services" from being active at the same time
               isActive = pathname === item.href && !isOverDarkSection
            }

            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (item.href.startsWith('#')) {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  const navHeight = 100
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  const offsetPosition = elementPosition - navHeight
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
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
                className={`text-[24px] font-medium transition-colors duration-300 ${
                  darkBackground || isOverDarkSection
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
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    darkBackground || isOverDarkSection ? 'bg-arkania-purple' : isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              {hoveredItem === item.name && !isActive && (
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    darkBackground || isOverDarkSection ? 'bg-arkania-purple/50' : isScrolled ? 'bg-gray-700/50' : 'bg-white/50'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
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