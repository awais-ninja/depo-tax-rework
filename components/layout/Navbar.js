'use client'

import Link from '@/components/ui/Link'
import Image from 'next/image'
import { useState } from 'react'
import MegaMenu from './MegaMenu'
import {
  megaMenuAbout,
  megaMenuServices,
  megaMenuPricing,
  megaMenuWhoWeServe,
  megaMenuKnowledge,
} from './navConfig'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about', megaKey: 'about' },
  { label: 'Services', href: '/services', megaKey: 'services' },
  { label: 'Pricing', href: '/pricing', megaKey: 'pricing' },
  { label: 'Who We Serve', href: '/who-we-serve', megaKey: 'whoWeServe' },
  { label: 'Knowledge', href: '/knowledge', megaKey: 'knowledge' },
  { label: 'Work in Progress', href: '/work-in-progress' },
  { label: 'Contact', href: '/contact' },
]

const megaByKey = {
  about: megaMenuAbout,
  services: megaMenuServices,
  pricing: megaMenuPricing,
  whoWeServe: megaMenuWhoWeServe,
  knowledge: megaMenuKnowledge,
}

export default function Navbar() {
  const [openMega, setOpenMega] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeAll = () => {
    setOpenMega(null)
    setMobileOpen(false)
  }

  const handleNav = () => closeAll()

  return (
    <header className="sticky top-0 z-50 bg-brand-white border-b border-brand-grayBorder shadow-sm overflow-visible" onMouseLeave={() => setOpenMega(null)}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <Link href="/" className="flex items-center shrink-0" aria-label="Depotax home" onClick={closeAll}>
            <Image src="/logo.svg" alt="Depotax" width={216} height={58} className="h-11 md:h-12 w-auto" priority />
          </Link>

          <div className="hidden xl:flex xl:items-center xl:flex-1 xl:justify-center xl:gap-1">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.megaKey && setOpenMega(item.label)}
              >
                {item.megaKey ? (
                  <button
                    type="button"
                    className={`relative flex items-center gap-0.5 px-3 xl:px-4 py-6 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${openMega === item.label ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'}`}
                    aria-expanded={openMega === item.label}
                    aria-haspopup="true"
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-accent transition-all duration-200 ${openMega === item.label ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ bottom: '-2px' }} />
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openMega === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link href={item.href} className="relative group flex items-center px-3 xl:px-4 py-6 text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 whitespace-nowrap">
                    {item.label}
                    <span className="absolute left-3 xl:left-4 right-3 xl:right-4 h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" style={{ bottom: '18px' }} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:block shrink-0">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 rounded-md text-brand-text hover:bg-brand-grayLight hover:text-brand-accent transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {openMega && (() => {
        const item = mainNav.find((i) => i.megaKey && i.label === openMega)
        if (!item) return null
        return (
          <div className="hidden xl:block absolute left-0 right-0 top-full w-full bg-brand-white border-t border-brand-grayBorder shadow-lg z-50 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <MegaMenu
                columns={megaByKey[item.megaKey].columns}
                featuredCard={megaByKey[item.megaKey].featuredCard}
                onNavigate={handleNav}
                isMobile={false}
              />
            </div>
          </div>
        )
      })()}

      <nav className="xl:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Mobile menu">
        <div className={`border-t border-brand-grayBorder ${mobileOpen ? 'block' : 'hidden'}`}>
          <ul className="py-2">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-brand-grayBorder last:border-b-0">
                {item.megaKey ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-brand-text"
                      onClick={() => setOpenMega(openMega === item.label ? null : item.label)}
                      aria-expanded={openMega === item.label}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${openMega === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openMega === item.label && (
                      <div className="bg-brand-grayLight/50 px-4 py-4">
                        <MegaMenu
                          columns={megaByKey[item.megaKey].columns}
                          featuredCard={megaByKey[item.megaKey].featuredCard}
                          onNavigate={closeAll}
                          isMobile
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block px-4 py-3 font-medium text-brand-text hover:text-brand-accent" onClick={closeAll}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-4 py-3">
              <Link
                href="/book-consultation"
                className="block w-full text-center py-3 rounded-lg font-semibold text-white bg-brand-accent hover:bg-brand-accentDark"
                onClick={closeAll}
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
