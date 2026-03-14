'use client'

/**
 * Button that opens the cookie settings modal (dispatches event for CookieConsentBanner).
 * Styled like a footer link for consistency.
 */
export default function CookieSettingsTrigger() {
  const open = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'))
    }
  }
  return (
    <button
      type="button"
      onClick={open}
      className="hover:text-white hover:underline transition-colors duration-200 text-sm text-white/90 bg-transparent border-0 cursor-pointer font-inherit p-0"
    >
      Cookie settings
    </button>
  )
}
