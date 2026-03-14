'use client'

import Link from '@/components/ui/Link'
import MegaMenuFooter from './MegaMenuFooter'
import { IconChevronRight } from '@/components/ui/Icons'

export default function MegaMenu({ columns, featuredCard, onNavigate, isMobile, menuKey }) {
  const handleNav = () => {
    if (typeof onNavigate === 'function') onNavigate()
  }
  const totalCols = columns.length + (featuredCard ? 1 : 0)
  const gridCols = isMobile ? 'grid-cols-1' : totalCols <= 2 ? 'grid-cols-2' : totalCols === 3 ? 'grid-cols-3' : 'grid-cols-4'
  const gridGap = !isMobile && totalCols >= 4 ? 'gap-x-8 gap-y-6 lg:gap-x-10 lg:gap-y-8' : 'gap-8 lg:gap-12'
  const isKnowledge = menuKey === 'knowledge' && !isMobile

  const content = (
    <>
      <div className={`grid ${gridCols} ${gridGap} ${isMobile ? 'mb-6' : ''} ${!isMobile && featuredCard && columns.length === 2 ? 'lg:grid-cols-[1fr_1fr_minmax(260px,1fr)]' : ''} ${!isMobile && totalCols === 4 ? 'lg:grid-cols-4' : ''}`}>
        {columns.map((col, i) => (
          <div key={i} className={`${!isMobile ? 'min-w-0' : ''} ${isKnowledge ? 'min-h-[7rem]' : ''}`}>
            {col.title && (
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-navy mb-3 lg:mb-4 pb-2 border-b border-brand-grayBorder/60">{col.title}</p>
            )}
            <ul className={`space-y-0 ${isMobile ? 'space-y-0.5' : ''}`}>
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 min-h-12 py-2.5 pr-2 text-sm text-brand-text hover:text-brand-accent transition-colors duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40 hover:bg-brand-grayLight/40 -mx-1 px-1"
                    onClick={handleNav}
                  >
                    <span className="w-4 shrink-0 inline-flex justify-center">
                      <IconChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-accent transition-opacity duration-200" />
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {featuredCard && (
          <div className={`rounded-xl bg-brand-accent/8 border border-brand-accent/25 p-5 lg:p-6 ${isMobile ? '' : 'lg:min-w-[260px] lg:max-w-[320px]'}`}>
            <p className="text-sm text-brand-text/90 mb-4 lg:mb-5 leading-relaxed">{featuredCard.text}</p>
            <Link
              href={featuredCard.ctaHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              onClick={handleNav}
            >
              {featuredCard.ctaLabel}
              <IconChevronRight className="w-4 h-4" aria-hidden />
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

  return <div className={`mega-menu-desktop ${menuKey === 'knowledge' ? 'mega-menu--knowledge' : ''}`}>{content}</div>
}
