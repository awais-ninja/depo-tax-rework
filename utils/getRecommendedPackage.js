import { PRICING_MATRIX, BUSINESS_TYPE_CONFIG } from '@/data/pricing';

// Helper to get the ordered sizes array for a business type
function getSizes(businessTypeId) {
  const byType = PRICING_MATRIX[businessTypeId];
  if (!byType || !Array.isArray(byType.sizes)) return [];
  return byType.sizes;
}

function findSizeIndex(businessTypeId, sizeId) {
  const sizes = getSizes(businessTypeId);
  if (!sizes.length) return -1;
  return sizes.findIndex((s) => s.id === sizeId);
}

// Find first available package of a given tier for this size
function findPackageOfType(packages, type) {
  if (!Array.isArray(packages)) return null;
  return packages.find((pkg) => pkg.type === type && pkg.monthlyFrom != null) || null;
}

// Map a businessTypeId to a high-level category for rules
function mapBusinessCategory(businessTypeId) {
  if (!businessTypeId) return 'other';
  if (businessTypeId === 'self-employed') return 'self-employed';
  if (businessTypeId === 'contractor-ltd') return 'contractor';
  if (businessTypeId === 'startups-ltds') return 'limited';
  if (businessTypeId === 'landlords') return 'landlord';
  if (businessTypeId === 'spvs') return 'spv';
  if (businessTypeId === 'non-resident-landlords') return 'non-resident-landlord';
  if (businessTypeId === 'dormant-companies') return 'dormant';
  return 'other';
}

/**
 * Core recommendation function.
 * Returns { packageId, packageType } or null.
 */
export function getRecommendedPackage({ businessTypeId, sizeId }) {
  if (!businessTypeId || !sizeId) return null;

  const byType = PRICING_MATRIX[businessTypeId];
  if (!byType || !Array.isArray(byType.sizes)) return null;

  const size = byType.sizes.find((s) => s.id === sizeId);
  if (!size || !Array.isArray(size.packages)) return null;

  const packages = size.packages;
  const category = mapBusinessCategory(businessTypeId);
  const sizeIndex = findSizeIndex(businessTypeId, sizeId);
  const sizes = getSizes(businessTypeId);
  const lastIndex = sizes.length ? sizes.length - 1 : 0;

  // Identify whether this is relatively "small", "medium" or "large" within this type
  let band = 'medium';
  if (sizeIndex === 0) band = 'small';
  else if (sizeIndex === lastIndex) band = 'large';
  else if (sizes.length >= 4 && sizeIndex <= 1) band = 'small';
  else if (sizes.length >= 4 && sizeIndex >= lastIndex - 1) band = 'large';

  // Convenience helpers with fallback handling
  const recommendCompliance = () => findPackageOfType(packages, 'Compliance');
  const recommendCore = () =>
    findPackageOfType(packages, 'Core') || findPackageOfType(packages, 'Compliance');
  const recommendGrowth = () =>
    findPackageOfType(packages, 'Growth') ||
    findPackageOfType(packages, 'Core') ||
    findPackageOfType(packages, 'Compliance');

  let chosen = null;

  switch (category) {
    case 'self-employed': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'contractor': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'limited': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'landlord': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'spv': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'non-resident-landlord': {
      if (band === 'small') chosen = recommendCompliance();
      else if (band === 'medium') chosen = recommendCore();
      else chosen = recommendGrowth();
      break;
    }
    case 'dormant': {
      chosen = recommendCompliance();
      break;
    }
    default: {
      // Sensible default for any future types: favour Core if available, else Compliance.
      chosen = recommendCore();
    }
  }

  if (!chosen) return null;

  return {
    packageId: chosen.id,
    packageType: chosen.type,
  };
}

