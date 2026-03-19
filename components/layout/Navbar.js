'use client'

import Link from '@/components/ui/Link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import MegaMenu from './MegaMenu'
import { mainNav, megaMenus } from '@/data/navigation'
import { BOOKING_URL } from '@/data/contact'

export default function Navbar() {
  const pathname = usePathname()
  const [openMega, setOpenMega] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isServicesActive = pathname === '/services' || (pathname?.startsWith('/services/') ?? false)
  const isKnowledgeActive = pathname === '/knowledge' || (pathname?.startsWith('/knowledge/') ?? false)
  const isContactActive = pathname === '/contact' || (pathname?.startsWith('/contact/') ?? false)
  const isNavItemActive = (href) => pathname === href

  const closeAll = () => {
    setOpenMega(null)
    setMobileOpen(false)
  }

  const handleNav = () => closeAll()

  return (
    <header className="sticky top-0 z-50 bg-brand-white border-b border-brand-grayBorder shadow-sm overflow-visible" onMouseLeave={() => setOpenMega(null)}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Depotax home" onClick={closeAll}>
            <Image
              src="/logo.svg"
              alt="Depotax"
              width={216}
              height={58}
              className="h-11 md:h-12 w-auto min-h-[44px] object-contain object-left"
              sizes="(max-width: 768px) 180px, 216px"
              priority
            />
          </Link>

          <div className="hidden xl:flex xl:items-center xl:flex-1 xl:justify-center xl:gap-1">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.megaKey && setOpenMega(item.label)}
              >
                {item.megaKey ? (
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-0.5 px-3 xl:px-4 py-6 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                      openMega === item.label ||
                      (item.label === 'Services' && isServicesActive) ||
                      (item.label === 'Knowledge' && isKnowledgeActive) ||
                      (item.label === 'Contact' && isContactActive)
                        ? 'text-brand-accent'
                        : 'text-brand-text hover:text-brand-accent'
                    }`}
                    aria-expanded={openMega === item.label}
                    aria-haspopup="true"
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand-accent transition-all duration-200 ${
                          openMega === item.label ||
                          (item.label === 'Services' && isServicesActive) ||
                          (item.label === 'Knowledge' && isKnowledgeActive) ||
                          (item.label === 'Contact' && isContactActive)
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${openMega === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative group flex items-center px-3 xl:px-4 py-6 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${isNavItemActive(item.href) ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'}`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-3 xl:left-4 right-3 xl:right-4 bottom-[18px] h-0.5 bg-brand-accent transition-transform duration-200 origin-left ${
                        isNavItemActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden xl:block shrink-0">
            <Link
              href={BOOKING_URL}
              className="inline-flex items-center justify-center min-h-12 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
              aria-label="Book Consultation (main navigation)"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 min-h-12 min-w-12 flex items-center justify-center rounded-md text-brand-text hover:bg-brand-grayLight hover:text-brand-accent transition-colors duration-200"
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
                columns={megaMenus[item.megaKey].columns}
                featuredCard={megaMenus[item.megaKey].featuredCard}
                onNavigate={handleNav}
                isMobile={false}
                menuKey={item.megaKey}
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
                    <div className="flex items-center w-full">
                      <Link href={item.href} className="flex-1 py-3 px-4 min-h-12 flex items-center font-medium text-brand-text hover:text-brand-accent" onClick={closeAll}>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="p-3 min-h-12 min-w-12 flex items-center justify-center text-brand-text hover:text-brand-accent"
                        onClick={() => setOpenMega(openMega === item.label ? null : item.label)}
                        aria-expanded={openMega === item.label}
                        aria-label={openMega === item.label ? 'Collapse menu' : 'Expand menu'}
                      >
                        <svg className={`w-4 h-4 transition-transform ${openMega === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {openMega === item.label && (
                      <div className="bg-brand-grayLight/50 px-4 py-4">
                        <MegaMenu
                          columns={megaMenus[item.megaKey].columns}
                          featuredCard={megaMenus[item.megaKey].featuredCard}
                          onNavigate={closeAll}
                          isMobile
                          menuKey={item.megaKey}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-3 min-h-12 flex items-center font-medium transition-colors ${isNavItemActive(item.href) ? 'text-brand-accent' : 'text-brand-text hover:text-brand-accent'}`}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="px-4 py-3">
              <Link
                href={BOOKING_URL}
                className="w-full text-center py-3 min-h-12 flex items-center justify-center rounded-lg font-semibold text-white bg-brand-accent hover:bg-brand-accentDark"
                onClick={closeAll}
                aria-label="Book Consultation (mobile menu)"
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
