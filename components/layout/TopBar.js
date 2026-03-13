import Link from '@/components/ui/Link'
import { IconEnvelope, IconPhone, IconWhatsApp, IconFacebook, IconInstagram } from '@/components/ui/Icons'
import { contact, googleReviewsUrl } from '@/data/contact'
import { SITE_NAME } from '@/data/site'

const iconClass = 'w-4 h-4 shrink-0'
const whatsAppUrl = `https://wa.me/${contact.whatsApp}`

export default function TopBar() {
  return (
    <div className="hidden md:block bg-brand-grayLight border-b border-brand-grayBorder text-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="flex flex-row flex-nowrap justify-between items-center gap-2 md:gap-3 lg:gap-4 py-2.5">
          <div className="flex flex-nowrap items-center gap-x-2 md:gap-x-3 lg:gap-x-4 text-[#9a0000] shrink-0 min-w-0">
            <Link href={`mailto:${contact.email}`} className="flex items-center gap-1.5 min-h-12 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shrink-0" aria-label={`Email ${SITE_NAME}`}>
              <IconEnvelope className={iconClass} />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </Link>
            <Link href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 min-h-12 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shrink-0" aria-label="Call London office">
              <IconPhone className={iconClass} />
              <span>{contact.phone}</span>
            </Link>
            <Link href={whatsAppUrl} className="flex items-center gap-1.5 min-h-12 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shrink-0 hidden lg:flex" aria-label={`WhatsApp ${SITE_NAME}`}>
              <IconWhatsApp className={iconClass} />
              <span>(Strictly WhatsApp) {contact.phoneMobile}</span>
            </Link>
            <Link href={whatsAppUrl} className="flex items-center gap-1.5 min-h-12 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shrink-0 lg:hidden" aria-label={`WhatsApp ${contact.phoneMobile}`}>
              <IconWhatsApp className={iconClass} />
              <span className="hidden xl:inline">{contact.phoneMobile}</span>
            </Link>
          </div>
          <div className="flex flex-nowrap items-center gap-x-2 lg:gap-x-4 justify-end text-[#9a0000] shrink-0">
            <Link href={googleReviewsUrl} className="flex items-center gap-1.5 min-h-12 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap shrink-0" aria-label={`${SITE_NAME} Google reviews - 4.9 stars`}>
              <span className="font-medium hidden lg:inline">Google Reviews 4.9 ★</span>
              <span className="font-medium lg:hidden">4.9 ★</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href={contact.social.facebook} className="p-2.5 min-h-12 min-w-12 flex items-center justify-center rounded hover:opacity-90 transition-opacity duration-200" aria-label="Facebook">
                <IconFacebook className={iconClass} />
              </Link>
              <Link href={contact.social.instagram} className="p-2.5 min-h-12 min-w-12 flex items-center justify-center rounded hover:opacity-90 transition-opacity duration-200" aria-label="Instagram">
                <IconInstagram className={iconClass} />
              </Link>
              <Link href={whatsAppUrl} className="p-2.5 min-h-12 min-w-12 flex items-center justify-center rounded hover:opacity-90 transition-opacity duration-200" aria-label="WhatsApp">
                <IconWhatsApp className={iconClass} />
              </Link>
            </div>
            <span className="hidden xl:block w-px h-4 bg-[#9a0000]/30 shrink-0" aria-hidden />
            <Link href="/contact" className="inline-flex items-center justify-center min-h-12 px-3 py-1.5 rounded text-xs font-semibold text-white bg-[#9a0000] hover:opacity-90 transition-opacity duration-200 shrink-0">
              Need Help!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
