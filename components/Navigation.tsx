'use client'

import { motion, AnimatePresence } from 'framer-motion'
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

  // 🔹 MOBILE STATE (NEW)
  const [mobileOpen, setMobileOpen] = useState(false)

  /* ----------------------------------
     EXISTING SCROLL LOGIC (UNCHANGED)
  ---------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      setIsScrolled(scrollY > viewportHeight * 0.8)

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
        if (rect.top <= 100 && rect.bottom >= 100) {
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const y = el.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top: y + 100, behavior: 'smooth' })
  }

  const isDarkNav = darkBackground || activeSection === 'services'

  /* ----------------------------------
     DESKTOP NAV (UNCHANGED)
  ---------------------------------- */
  return (
    <>
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

          {/* DESKTOP LINKS (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-10 mr-8 md:mr-16">
            {navItems.map((item) => {
              const isSectionLink = item.href.startsWith('/#')
              const sectionId = isSectionLink
                ? item.href.replace('/#', '')
                : null

              let isActive = false

              if (item.href === '/') {
                isActive = pathname === '/' && activeSection === null
              } else if (isSectionLink && pathname === '/') {
                isActive = activeSection === sectionId
              } else {
                isActive = pathname === item.href
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
                </Link>
              )
            })}
          </div>

          {/* MOBILE HAMBURGER (NEW, STYLE IS MINIMAL) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className={`w-6 h-[3px] transition-colors duration-300 ${
              isDarkNav ? 'bg-light' : 'bg-primary'
            }`} />
            <span className={`w-6 h-[3px] transition-colors duration-300 ${
              isDarkNav ? 'bg-light' : 'bg-primary'
            }`} />
            <span className={`w-6 h-[3px] transition-colors duration-300 ${
              isDarkNav ? 'bg-light' : 'bg-primary'
            }`} />
          </button>
        </motion.div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY (NEW) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-dark/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="text-[32px] font-semibold text-light"
                  onClick={() => {
                    setMobileOpen(false)

                    if (item.href.startsWith('/#')) {
                      const id = item.href.replace('/#', '')
                      if (pathname === '/') {
                        scrollToSection(id)
                      } else {
                        router.push(`/#${id}`)
                      }
                    } else {
                      router.push(item.href)
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => setMobileOpen(false)}
                className="mt-10 text-light/60"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
