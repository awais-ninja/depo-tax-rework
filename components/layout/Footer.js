import Link from '@/components/ui/Link';
import Image from 'next/image';
import { IconEnvelope, IconPhone, IconMapPin, IconFacebook, IconLinkedIn, IconInstagram } from '@/components/ui/Icons';
import CookieSettingsTrigger from '@/components/ui/CookieSettingsTrigger';
import {
  quickLinks,
  serviceLinks,
  whoWeHelpLinks,
  bottomLinks,
  columnTitles,
  copyrightText,
  madeBy,
} from '@/data/footer';
import { contact } from '@/data/contact';
import { SITE_NAME } from '@/data/site';

const FOOTER_LINK_CLASS =
  'text-sm text-white/90 hover:text-white hover:underline transition-colors duration-200 inline-flex items-center min-h-12 py-2';

function FooterColumn({ title, children }) {
  return (
    <div className="text-center lg:text-left">
      <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden" role="contentinfo">
      {/* Top accent */}
      <div className="h-1 bg-brand-accent" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Logo centered at top */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Link href="/" className="inline-block" aria-label={`${SITE_NAME} home`}>
            <Image
              src="/footer-logo.svg"
              alt={SITE_NAME}
              width={260}
              height={73}
              className="h-14 sm:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <FooterColumn title={columnTitles.quickLinks}>
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={columnTitles.services}>
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={columnTitles.whoWeHelp}>
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {whoWeHelpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title={columnTitles.contactOffices}>
            <div className="space-y-2.5 text-sm text-white/95 flex flex-col items-center lg:items-stretch">
              <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5">{columnTitles.headOffice}</p>
              <p className="text-white font-medium">{contact.headOffice.label}</p>
              <ul className="space-y-2">
                <li className="flex gap-2 justify-center lg:justify-start text-center lg:text-left items-start">
                  <IconMapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <Link href={contact.headOffice.mapUrl} className="text-white/95 hover:text-white hover:underline transition-colors duration-200 inline-flex items-center min-h-12 py-2" aria-label={`${contact.headOffice.address.replace(/\n/g, ', ')} (View on map)`}>
                    {contact.headOffice.address}
                  </Link>
                </li>
                <li className="flex gap-2 justify-center lg:justify-start items-start">
                  <IconEnvelope className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <Link href={`mailto:${contact.email}`} className="text-white/95 hover:text-white hover:underline transition-colors duration-200 inline-flex items-center min-h-12 py-2" aria-label={`${contact.email} (Email ${SITE_NAME})`}>
                    {contact.email}
                  </Link>
                </li>
                <li className="flex gap-2 justify-center lg:justify-start items-start">
                  <IconPhone className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <span className="flex flex-col gap-0.5 items-center lg:items-stretch">
                    <Link href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-white/95 hover:text-white hover:underline transition-colors duration-200 inline-flex items-center min-h-12 py-2" aria-label={`${contact.phone} (London office)`}>
                      {contact.phone}
                    </Link>
                    <Link href={`tel:${contact.phoneMobile.replace(/\s/g, '')}`} className="text-white/95 hover:text-white hover:underline transition-colors duration-200 inline-flex items-center min-h-12 py-2" aria-label={`${contact.phoneMobile} (mobile)`}>
                      {contact.phoneMobile}
                    </Link>
                  </span>
                </li>
              </ul>
              <div className="pt-2 mt-2 border-t border-white/15">
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">{columnTitles.branches}</p>
                <ul className="space-y-1.5">
                  {contact.branches.map((b) => (
                    <li key={b.label}><Link href={b.mapUrl} className={FOOTER_LINK_CLASS}>{b.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* Divider then centered social links */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20">
          <div className="flex justify-center" aria-label="Social links">
            <div className="flex gap-3">
              <Link href={contact.social.facebook} className="w-11 h-11 min-w-12 min-h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200" aria-label={`${SITE_NAME} on Facebook`}>
                <IconFacebook className="w-4 h-4" />
              </Link>
              <Link href={contact.social.linkedin} className="w-11 h-11 min-w-12 min-h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200" aria-label={`${SITE_NAME} on LinkedIn`}>
                <IconLinkedIn className="w-4 h-4" />
              </Link>
              <Link href={contact.social.instagram} className="w-11 h-11 min-w-12 min-h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200" aria-label={`${SITE_NAME} on Instagram`}>
                <IconInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: copyright, legal links */}
        <div className="mt-6 pt-5 border-t border-white/20 space-y-3 text-center">
          <p className="text-sm text-white">
            {copyrightText(new Date().getFullYear())}
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 text-sm text-white/90">
            {bottomLinks.map((link, i) => (
              <li key={link.label} className="inline-flex items-center">
                <Link href={link.href} className="hover:text-white hover:underline transition-colors duration-200">
                  {link.label}
                </Link>
                {i < bottomLinks.length - 1 && (
                  <span className="text-white/50 pointer-events-none mx-1.5" aria-hidden>,</span>
                )}
              </li>
            ))}
            <li className="inline-flex items-center">
              <span className="text-white/50 pointer-events-none mx-1.5" aria-hidden>,</span>
              <CookieSettingsTrigger />
            </li>
          </ul>
          <p className="text-xs text-white/70 pt-1">
            {madeBy.label}{' '}
            <Link href={madeBy.url} className="text-white/90 hover:text-brand-accent hover:underline transition-colors duration-200 font-medium">
              {madeBy.name}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
