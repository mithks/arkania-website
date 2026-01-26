'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/#services' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
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
  const router = useRouter()

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  /* ----------------------------------
     Scroll handling (ALL pages)
     Section spy (HOME only)
  ---------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // ✅ Navbar shape change on ALL pages
      setIsScrolled(scrollY > viewportHeight * 0.8)

      // ❗ Section spy ONLY on home page
      if (pathname !== '/') {
        setActiveSection(null)
        return
      }

      const sections = ['services', 'contact']
      let current: string | null = null

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        const navHeight = 100

        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          current = id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [pathname])

  /* ----------------------------------
     Smooth section scroll (HOME only)
  ---------------------------------- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = 100
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight

    window.scrollTo({
      top: y + 100,
      behavior: 'smooth',
    })
  }

  const isDarkNav = darkBackground || activeSection === 'services'

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
        className={`flex items-center justify-between relative overflow-hidden transition-all duration-500 ${
          isDarkNav
            ? isScrolled
              ? 'glass-dark shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass-dark rounded-full py-6 px-8'
            : isScrolled
              ? 'bg-light shadow-lg rounded-b-[30px] py-6 px-8 w-full'
              : 'glass rounded-full py-6 px-8'
        }`}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Image
            src={isDarkNav ? '/assets/logo_white.svg' : '/assets/logo.svg'}
            alt="Arkania Logo"
            width={120}
            height={40}
            priority
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10 mr-8 md:mr-16">
          {navItems.map((item) => {
            const isSectionLink = item.href.startsWith('/#')
            const sectionId = isSectionLink
              ? item.href.replace('/#', '')
              : null

            let isActive = false

            // Page links
            if (!isSectionLink) {
              isActive = pathname === item.href
            }

            // Section links (active only on home)
            if (isSectionLink && pathname === '/') {
              isActive = activeSection === sectionId
            }

            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!isSectionLink) return

              e.preventDefault()

              if (pathname === '/') {
                scrollToSection(sectionId!)
              } else {
                router.push(`/#${sectionId}`)
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
                        ? 'text-secondary'
                        : 'text-light/80 hover:text-light'
                      : isScrolled
                        ? isActive
                          ? 'text-secondary'
                          : 'text-dark/70 hover:text-dark'
                        : isActive
                          ? 'text-secondary'
                          : 'text-light/80 hover:text-light'
                  }`}
                >
                  {item.name}
                </motion.span>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-secondary"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                {hoveredItem === item.name && !isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
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
