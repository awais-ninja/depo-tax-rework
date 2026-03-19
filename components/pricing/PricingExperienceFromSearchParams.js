'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import PricingExperience from './PricingExperience'
import { PRICING_MODES } from '@/data/pricing'

function mapBusinessType(queryValue) {
  if (!queryValue) return null
  const map = {
    contractors: 'contractor-ltd',
    'limited-companies': 'startups-ltds',
    landlords: 'landlords',
    'non-resident-landlords': 'non-resident-landlords',
    'spv-residential': 'spvs',
    'self-employed': 'self-employed',
  }
  return map[queryValue] ?? null
}

function mapMode(modeParam) {
  if (modeParam === PRICING_MODES.SINGLE_SERVICES) return PRICING_MODES.SINGLE_SERVICES
  return PRICING_MODES.PACKAGES
}

function mapPackageType(packageType) {
  if (!packageType) return null
  const normalized = packageType.toLowerCase()
  if (normalized === 'compliance') return 'Compliance'
  if (normalized === 'core') return 'Core'
  if (normalized === 'growth') return 'Growth'
  return null
}

export default function PricingExperienceFromSearchParams() {
  const searchParams = useSearchParams()

  const derived = useMemo(() => {
    const mode = mapMode(searchParams.get('mode'))
    const service = searchParams.get('service')
    return {
      mode,
      businessTypeId: mapBusinessType(searchParams.get('businessType')),
      initialSelectedServiceKeys: mode === PRICING_MODES.SINGLE_SERVICES && service ? [service] : [],
      initialPackageTier: mapPackageType(searchParams.get('packageType')),
    }
  }, [searchParams])

  return (
    <PricingExperience
      key={`${derived.mode}-${derived.businessTypeId || 'default'}-${derived.initialPackageTier || 'none'}-${derived.initialSelectedServiceKeys.join(',')}`}
      initialMode={derived.mode}
      initialBusinessTypeId={derived.businessTypeId}
      initialPackageTier={derived.initialPackageTier}
      initialSelectedServiceKeys={derived.initialSelectedServiceKeys}
    />
  )
}

