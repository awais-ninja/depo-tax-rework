'use client'

import { useState, useEffect } from 'react'
import Link from '@/components/ui/Link'
import {
  getConsentFromCookie,
  setConsentCookie,
  DEFAULT_CONSENT,
  CONSENT_CATEGORIES,
  hasConsentChoice,
} from '@/utils/consent'
import CookieSettingsModal from './CookieSettingsModal'
import { SITE_NAME } from '@/data/site'

/**
 * UK ICO–compliant first-party cookie banner.
 * Left: info; right: Accept all, Reject all, Manage settings.
 * Equal prominence for accept/reject; no inline styles (CSP-safe).
 */
export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    if (!hasConsentChoice()) setVisible(true)
  }, [])

  useEffect(() => {
    const openSettings = () => {
      setShowSettings(true)
      setVisible(false)
    }
    window.addEventListener('open-cookie-settings', openSettings)
    return () => window.removeEventListener('open-cookie-settings', openSettings)
  }, [])

  const acceptAll = () => {
    setConsentCookie({
      [CONSENT_CATEGORIES.necessary]: true,
      [CONSENT_CATEGORIES.analytics]: true,
      [CONSENT_CATEGORIES.marketing]: true,
      [CONSENT_CATEGORIES.preferences]: true,
    })
    setVisible(false)
  }

  const rejectAll = () => {
    setConsentCookie({
      [CONSENT_CATEGORIES.necessary]: true,
      [CONSENT_CATEGORIES.analytics]: false,
      [CONSENT_CATEGORIES.marketing]: false,
      [CONSENT_CATEGORIES.preferences]: false,
    })
    setVisible(false)
  }

  const openSettings = () => setShowSettings(true)

  const onSettingsClose = (saved) => {
    setShowSettings(false)
    if (saved) setVisible(false)
  }

  if (!visible && !showSettings) return null

  return (
    <>
      {visible && (
      <div
        className="fixed bottom-0 left-0 right-0 z-[100] border-t border-brand-grayBorder bg-white shadow-[0_-4px_24px_rgba(15,23,42,0.12)]"
        role="dialog"
        aria-labelledby="cookie-banner-heading"
        aria-describedby="cookie-banner-desc"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8">
            <div className="min-w-0 flex-1">
              <h2 id="cookie-banner-heading" className="text-lg font-semibold text-brand-navy mb-1.5">
                We use cookies
              </h2>
              <p id="cookie-banner-desc" className="text-sm text-brand-text/90 leading-relaxed">
                We use cookies and similar technologies to run this website, improve your experience, and analyse traffic. 
                You can choose which cookies you allow. For more information, see our{' '}
                <Link href="/privacy#cookies" className="text-brand-accent hover:underline font-medium">
                  Cookie and Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0 lg:pt-0.5">
              <button
                type="button"
                onClick={acceptAll}
                className="order-1 sm:order-1 px-4 py-2.5 rounded-lg text-sm font-semibold bg-brand-accent text-white hover:bg-brand-accentDark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="order-2 sm:order-2 px-4 py-2.5 rounded-lg text-sm font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-grayLight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Accept essential only
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="order-3 sm:order-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-brand-navy bg-brand-grayLight hover:bg-brand-grayBorder/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
              >
                Manage settings
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
      {showSettings && (
        <CookieSettingsModal open onClose={onSettingsClose} />
      )}
    </>
  )
}
