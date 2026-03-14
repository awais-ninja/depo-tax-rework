'use client'

import { useState, useEffect } from 'react'
import Link from '@/components/ui/Link'
import {
  getConsentFromCookie,
  setConsentCookie,
  DEFAULT_CONSENT,
  CONSENT_CATEGORIES,
} from '@/utils/consent'
import { IconCog } from '@/components/ui/Icons'

const CATEGORY_LABELS = {
  [CONSENT_CATEGORIES.necessary]: 'Strictly necessary',
  [CONSENT_CATEGORIES.analytics]: 'Analytics',
  [CONSENT_CATEGORIES.marketing]: 'Marketing / Advertising',
  [CONSENT_CATEGORIES.preferences]: 'Preferences',
}

const CATEGORY_DESCRIPTIONS = {
  [CONSENT_CATEGORIES.necessary]: 'Required for the website to function (e.g. remembering your cookie choices). Cannot be disabled.',
  [CONSENT_CATEGORIES.analytics]: 'Help us understand how visitors use our site so we can improve it.',
  [CONSENT_CATEGORIES.marketing]: 'Used for advertising or tracking across sites. Only set if you agree.',
  [CONSENT_CATEGORIES.preferences]: 'Remember your preferences and improve your experience.',
}

/**
 * Modal for granular cookie settings. UK ICO compliant; equal weight for accept/reject.
 * No inline styles (CSP-safe).
 */
export default function CookieSettingsModal({ open, onClose }) {
  const [choices, setChoices] = useState({ ...DEFAULT_CONSENT })

  useEffect(() => {
    if (open) {
      const data = getConsentFromCookie()
      if (data) setChoices(data.choices)
      else setChoices({ ...DEFAULT_CONSENT })
    }
  }, [open])

  const setCategory = (key, value) => {
    if (key === CONSENT_CATEGORIES.necessary) return
    setChoices((prev) => ({ ...prev, [key]: value }))
  }

  const save = () => {
    setConsentCookie(choices)
    onClose(true)
  }

  const acceptAll = () => {
    const all = {
      [CONSENT_CATEGORIES.necessary]: true,
      [CONSENT_CATEGORIES.analytics]: true,
      [CONSENT_CATEGORIES.marketing]: true,
      [CONSENT_CATEGORIES.preferences]: true,
    }
    setConsentCookie(all)
    onClose(true)
  }

  const rejectAll = () => {
    const essential = {
      [CONSENT_CATEGORIES.necessary]: true,
      [CONSENT_CATEGORIES.analytics]: false,
      [CONSENT_CATEGORIES.marketing]: false,
      [CONSENT_CATEGORIES.preferences]: false,
    }
    setConsentCookie(essential)
    onClose(true)
  }

  if (!open) return null

  return (
    <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-heading"
        onClick={(e) => e.target === e.currentTarget && onClose(false)}
      >
        <div
          className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl border border-brand-grayBorder"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 sm:p-6 border-b border-brand-grayBorder flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-grayLight text-brand-navy" aria-hidden>
              <IconCog className="w-5 h-5" />
            </span>
            <div>
              <h2 id="cookie-settings-heading" className="text-lg font-semibold text-brand-navy">
                Cookie settings
              </h2>
              <p className="text-sm text-brand-text/80">
                Choose which cookies you allow. See our <Link href="/privacy#cookies" className="text-brand-accent hover:underline">Privacy Policy</Link> for details.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 space-y-4">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-brand-navy">{label}</span>
                  {key === CONSENT_CATEGORIES.necessary ? (
                    <span className="text-xs font-semibold text-brand-text/70 bg-brand-grayLight px-2 py-1 rounded">Always on</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCategory(key, !choices[key])}
                      className={`rounded-full w-11 h-6 shrink-0 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ${
                        choices[key] ? 'bg-brand-accent' : 'bg-brand-grayBorder'
                      }`}
                      aria-pressed={choices[key]}
                      aria-label={`${label}: ${choices[key] ? 'on' : 'off'}`}
                    >
                      <span
                        className={`block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                          choices[key] ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>
                <p className="text-sm text-brand-text/80">{CATEGORY_DESCRIPTIONS[key]}</p>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 border-t border-brand-grayBorder flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              type="button"
              onClick={save}
              className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold bg-brand-accent text-white hover:bg-brand-accentDark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
            >
              Save my choices
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-grayLight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-brand-navy bg-brand-grayLight hover:bg-brand-grayBorder/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 transition-colors duration-200"
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
  )
}
