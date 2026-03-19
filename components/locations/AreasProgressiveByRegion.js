'use client'

import { useMemo, useState } from 'react'
import Link from '@/components/ui/Link'

/**
 * Progressive list:
 * - Show first region heading + initialCount locations
 * - Clicking "Load more" reveals more locations for the current region
 * - Once the current region is fully revealed, the next click reveals the next region heading + its locations
 */
export default function AreasProgressiveByRegion({
  regions,
  initialCount = 5,
  step = 20,
  ariaLabelledBy,
}) {
  const normalizedRegions = useMemo(
    () =>
      (Array.isArray(regions) ? regions : []).filter(
        (r) => Array.isArray(r?.locations) && (r?.locations?.length ?? 0) > 0,
      ),
    [regions],
  )

  const [activeRegionIndex, setActiveRegionIndex] = useState(0)
  const [visibleCounts, setVisibleCounts] = useState(() => {
    const first = normalizedRegions[0]
    const firstCount = first?.locations?.length ? Math.min(initialCount, first.locations.length) : 0
    return [firstCount]
  })

  if (normalizedRegions.length === 0) return null

  const currentRegion = normalizedRegions[activeRegionIndex]
  const currentVisible = visibleCounts[activeRegionIndex] ?? 0
  const currentTotal = currentRegion?.locations?.length ?? 0

  const canLoadMore = (() => {
    if (activeRegionIndex < normalizedRegions.length - 1) return true
    return currentVisible < currentTotal
  })()

  const onLoadMore = () => {
    if (!currentRegion) return
    const locations = Array.isArray(currentRegion.locations) ? currentRegion.locations : []
    if (currentVisible < locations.length) {
      const nextVisible = Math.min(currentVisible + step, locations.length)
      setVisibleCounts((prev) => {
        const next = [...prev]
        next[activeRegionIndex] = nextVisible
        return next
      })
      return
    }

    const nextRegionIndex = activeRegionIndex + 1
    if (nextRegionIndex >= normalizedRegions.length) return

    const nextRegion = normalizedRegions[nextRegionIndex]
    const nextTotal = nextRegion?.locations?.length ?? 0
    const nextVisible = Math.min(step, nextTotal)

    setActiveRegionIndex(nextRegionIndex)
    setVisibleCounts((prev) => {
      const next = [...prev]
      next[nextRegionIndex] = nextVisible
      return next
    })
  }

  return (
    <section
      {...(ariaLabelledBy ? { 'aria-labelledby': ariaLabelledBy } : { 'aria-label': 'Areas we cover by main area' })}
    >
      <div className="space-y-10">
        {Array.from({ length: activeRegionIndex + 1 }).map((_, idx) => {
          const region = normalizedRegions[idx]
          if (!region) return null

          const visible = visibleCounts[idx] ?? 0
          const list = Array.isArray(region.locations) ? region.locations : []
          const shown = list.slice(0, visible)

          if (shown.length === 0) return null

          return (
            <div key={region.region} className="scroll-mt-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-4">{region.region}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {shown.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    aria-label={loc.title}
                    className="group inline-flex items-center justify-center min-h-[44px] px-3 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                  >
                    <span className="text-center group-hover:underline underline-offset-4 decoration-transparent group-hover:decoration-brand-accent transition-[text-decoration-color]">
                      {loc.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}

        {canLoadMore && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={onLoadMore}
              className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-xl font-semibold text-sm border-2 border-brand-accent text-brand-accent bg-white hover:bg-brand-accent/10 transition-colors duration-200"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

