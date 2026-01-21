'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '/', active: true },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
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

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximately 100vh)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      setIsScrolled(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          isScrolled
            ? 'bg-white shadow-lg rounded-b-[30px] py-4 px-8 w-full'
            : 'glass rounded-full py-4 px-8'
        }`}
      >
        {/* Purple curve accent on left (only visible on white background) */}
        {isScrolled && (
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
          className="text-3xl font-bold relative z-10"
        >
          <span className="text-arkania-purple">
            arkania
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 relative z-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <motion.span
                className={`text-2xl font-medium transition-colors duration-300 ${
                  isScrolled
                    ? item.active
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900'
                    : item.active
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.span>
              {item.active && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              {hoveredItem === item.name && !item.active && (
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    isScrolled ? 'bg-gray-700/50' : 'bg-white/50'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
