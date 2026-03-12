'use client'

import Link from '@/components/ui/Link'
import MegaMenuFooter from './MegaMenuFooter'
import { HiChevronRight } from 'react-icons/hi2'

export default function MegaMenu({ columns, featuredCard, onNavigate, isMobile }) {
  const handleNav = () => {
    if (typeof onNavigate === 'function') onNavigate()
  }
  const totalCols = columns.length + (featuredCard ? 1 : 0)
  const gridCols = isMobile ? 'grid-cols-1' : totalCols <= 2 ? 'grid-cols-2' : totalCols === 3 ? 'grid-cols-3' : 'grid-cols-4'

  const content = (
    <>
      <div className={`grid ${gridCols} gap-8 lg:gap-10 ${isMobile ? 'mb-6' : ''}`}>
        {columns.map((col, i) => (
          <div key={i}>
            {col.title && (
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy mb-3">{col.title}</p>
            )}
            <ul className={`space-y-1 ${isMobile ? 'space-y-1.5' : ''}`}>
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 py-1.5 text-sm text-brand-text hover:text-brand-accent transition-colors duration-200"
                    onClick={handleNav}
                  >
                    <span className="w-4 shrink-0 inline-flex justify-center">
                      <HiChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-brand-accent transition-opacity duration-200" />
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {featuredCard && (
          <div className={`rounded-xl bg-brand-accent/5 border border-brand-accent/20 p-5 ${isMobile ? 'lg:p-5' : ''}`}>
            <p className="text-sm text-brand-text mb-4 leading-relaxed">{featuredCard.text}</p>
            <Link
              href={featuredCard.ctaHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200"
              onClick={handleNav}
            >
              {featuredCard.ctaLabel}
              <span aria-hidden className="text-brand-accent">→</span>
            </Link>
          </div>
        )}
      </div>
      <MegaMenuFooter onNavigate={handleNav} compact={!isMobile} />
    </>
  )

  if (isMobile) {
    return (
      <div className="bg-brand-white rounded-lg border border-brand-grayBorder overflow-hidden">
        <div className="p-4">{content}</div>
      </div>
    )
  }

  return <div className="mega-menu-desktop">{content}</div>
}
