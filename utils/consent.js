/**
 * First-party cookie consent state (UK ICO compliant).
 * No third-party scripts; consent stored in a first-party cookie.
 * Only strictly necessary cookies before consent; analytics/marketing after opt-in.
 */

const COOKIE_NAME = 'depotax_consent'
const COOKIE_MAX_AGE_DAYS = 365

export const CONSENT_CATEGORIES = {
  necessary: 'necessary',
  analytics: 'analytics',
  marketing: 'marketing',
  preferences: 'preferences',
}

/** Default: only necessary. Others require opt-in. */
export const DEFAULT_CONSENT = {
  [CONSENT_CATEGORIES.necessary]: true,
  [CONSENT_CATEGORIES.analytics]: false,
  [CONSENT_CATEGORIES.marketing]: false,
  [CONSENT_CATEGORIES.preferences]: false,
}

/**
 * Parse consent from cookie (client-only).
 * @returns {{ choices: Record<string, boolean>, timestamp: number | null } | null}
 */
export function getConsentFromCookie() {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
  if (!match) return null
  try {
    const decoded = decodeURIComponent(match[1])
    const parsed = JSON.parse(decoded)
    if (parsed && typeof parsed.choices === 'object' && typeof parsed.timestamp === 'number') {
      return { choices: { ...DEFAULT_CONSENT, ...parsed.choices }, timestamp: parsed.timestamp }
    }
  } catch (_) {
    // ignore
  }
  return null
}

/**
 * Check if user has already made a choice (banner can be hidden).
 */
export function hasConsentChoice() {
  return getConsentFromCookie() !== null
}

/**
 * Save consent and set cookie (client-only).
 * @param {Record<string, boolean>} choices
 */
export function setConsentCookie(choices) {
  if (typeof document === 'undefined') return
  const payload = {
    choices: { ...DEFAULT_CONSENT, ...choices },
    timestamp: Date.now(),
  }
  const value = encodeURIComponent(JSON.stringify(payload))
  const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`
}

/**
 * Get current consent for a category (client-only).
 */
export function hasConsent(category) {
  const data = getConsentFromCookie()
  if (!data) return category === CONSENT_CATEGORIES.necessary
  return Boolean(data.choices[category])
}

/**
 * Whether to load analytics scripts (only when analytics consent is true).
 */
export function shouldLoadAnalytics() {
  return hasConsent(CONSENT_CATEGORIES.analytics)
}

/**
 * Whether to load marketing/ad scripts (only when marketing consent is true).
 */
export function shouldLoadMarketing() {
  return hasConsent(CONSENT_CATEGORIES.marketing)
}
