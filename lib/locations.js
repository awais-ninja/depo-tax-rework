import { locationsAreas } from '@/data/locations/final-seo-machine-england-locations'

let cached = null
let cachedAreasBySlug = null

function ensureLoaded() {
  if (cached) return

  const areas = Array.isArray(locationsAreas) ? locationsAreas : []
  cached = { areas }

  cachedAreasBySlug = new Map()
  for (const area of areas) {
    const normalized = normalizeLocationSlug(area?.slug)
    if (!normalized) continue
    cachedAreasBySlug.set(normalized, area)
  }
}

export function normalizeLocationSlug(slug) {
  if (!slug || typeof slug !== 'string') return ''

  let s = slug.trim()
  s = s.replace(/^https?:\/\/[^/]+/i, '')
  s = s.split('#')[0].split('?')[0]
  s = s.replace(/^\/+/, '')

  if (s === 'locations') return ''
  if (s.startsWith('locations/')) s = s.slice('locations/'.length)
  return s
}

export function buildLocationHref(locationSlugOrFullSlug) {
  const normalized = normalizeLocationSlug(locationSlugOrFullSlug)
  if (!normalized) return '/locations/'
  return `/locations/${normalized}`
}

function getLocationLinkText(area) {
  return area?.seo?.pageTitle || (area?.areaName ? `Accountants in ${area.areaName}` : 'Accountants in this area')
}

function sortRankForCommercialIntent(intent) {
  const v = String(intent || '').toLowerCase()
  switch (v) {
    case 'high':
      return 0
    case 'medium-high':
      return 1
    case 'medium':
      return 2
    case 'medium-low':
      return 3
    case 'low':
      return 4
    default:
      return 999
  }
}

export function getAllAreas() {
  ensureLoaded()
  return cached.areas
}

export function getSimplifiedAreasForGrid() {
  ensureLoaded()

  const simplified = cached.areas.map((area) => {
    const slug = normalizeLocationSlug(area?.slug)
    return {
      slug,
      href: buildLocationHref(slug),
      areaName: area?.areaName,
      region: area?.region,
      commercialIntent: area?.commercialIntent,
      title: getLocationLinkText(area),
    }
  })

  const filtered = simplified.filter((a) => a.slug)
  filtered.sort((a, b) => {
    const aLondon = a.region === 'London' ? 0 : 1
    const bLondon = b.region === 'London' ? 0 : 1
    if (aLondon !== bLondon) return aLondon - bLondon

    const aIntent = sortRankForCommercialIntent(a.commercialIntent)
    const bIntent = sortRankForCommercialIntent(b.commercialIntent)
    if (aIntent !== bIntent) return aIntent - bIntent

    return String(a.areaName || '').localeCompare(String(b.areaName || ''))
  })

  return filtered
}

export function getSimplifiedAreasGroupedByRegion() {
  ensureLoaded()
  const byRegion = new Map()

  for (const area of cached.areas) {
    const slug = normalizeLocationSlug(area?.slug)
    if (!slug) continue

    const region = area?.region || 'Other'
    const item = {
      slug,
      href: buildLocationHref(slug),
      areaName: area?.areaName,
      region,
      commercialIntent: area?.commercialIntent,
      title: getLocationLinkText(area),
    }

    const list = byRegion.get(region) ?? []
    list.push(item)
    byRegion.set(region, list)
  }

  const regions = Array.from(byRegion.entries()).map(([region, locations]) => {
    const sorted = [...locations].sort((a, b) => {
      const aIntent = sortRankForCommercialIntent(a.commercialIntent)
      const bIntent = sortRankForCommercialIntent(b.commercialIntent)
      if (aIntent !== bIntent) return aIntent - bIntent
      return String(a.areaName || '').localeCompare(String(b.areaName || ''))
    })
    return { region, locations: sorted }
  })

  regions.sort((a, b) => {
    const aLondon = a.region === 'London' ? 0 : 1
    const bLondon = b.region === 'London' ? 0 : 1
    if (aLondon !== bLondon) return aLondon - bLondon

    if (a.locations.length !== b.locations.length) return b.locations.length - a.locations.length
    return a.region.localeCompare(b.region)
  })

  return regions
}

export function getAreaBySlug(locationSlugOrFullSlug) {
  ensureLoaded()
  const normalized = normalizeLocationSlug(locationSlugOrFullSlug)
  if (!normalized) return null
  return cachedAreasBySlug.get(normalized) ?? null
}

export function getAllLocationHrefs() {
  return getSimplifiedAreasForGrid().map((a) => a.href)
}

export function doesLocationExist(locationSlugOrFullSlug) {
  ensureLoaded()
  const normalized = normalizeLocationSlug(locationSlugOrFullSlug)
  return Boolean(normalized && cachedAreasBySlug.has(normalized))
}

export function getAreaLinkText(area) {
  return getLocationLinkText(area)
}

