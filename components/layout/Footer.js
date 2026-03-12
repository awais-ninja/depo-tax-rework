import Link from '@/components/ui/Link';
import Image from 'next/image';
import {
  HiEnvelope,
  HiPhone,
  HiMapPin,
} from 'react-icons/hi2';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Who We Serve', href: '/who-we-serve' },
  { label: 'Knowledge', href: '/knowledge' },
  { label: 'Contact Us', href: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Bookkeeping Services', href: '/services/accounting' },
  { label: 'Payroll Services', href: '/services/accounting' },
  { label: 'Self Assessment & Tax Returns', href: '/services/tax' },
  { label: 'Management Accounts', href: '/services/accounting' },
  { label: 'Property Accounts', href: '/services/property' },
  { label: 'Business Startup Support', href: '/services/business-advisory' },
];

const WHO_WE_HELP_LINKS = [
  { label: 'Limited Companies', href: '/who-we-serve/limited-companies' },
  { label: 'Contractors', href: '/who-we-serve/contractors' },
  { label: 'Sole Traders', href: '/who-we-serve/sole-traders' },
  { label: 'Landlords', href: '/who-we-serve/landlords' },
  { label: 'Startup Businesses', href: '/who-we-serve/startups' },
  { label: 'eCommerce Businesses', href: '/who-we-serve/ecommerce' },
];

const TRUST_ITEMS = ['Trusted Since 2010', 'Fixed Fee Packages', 'HMRC Support'];

const BOTTOM_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
];

const FOOTER_LINK_CLASS =
  'text-sm text-white/80 hover:text-[#9a0000] transition-colors duration-200';

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Brand / About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="DepoTax home">
              <Image
                src="/logo.svg"
                alt="DepoTax"
                width={140}
                height={40}
                className="h-8 w-auto brightness-0 invert opacity-95"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xs">
              DepoTax provides expert accounting, bookkeeping, tax returns,
              payroll and business support for contractors, limited companies,
              landlords, sole traders and startups across the UK.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
              {TRUST_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3: Services */}
          <FooterColumn title="Services">
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 4: Who We Help */}
          <FooterColumn title="Who We Help">
            <ul className="space-y-2.5">
              {WHO_WE_HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 5: Contact / Offices */}
          <FooterColumn title="Contact & Offices">
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <HiEnvelope className="w-4 h-4 text-[#9a0000] shrink-0 mt-0.5" aria-hidden />
                <Link
                  href="mailto:info@depotax.co.uk"
                  className="hover:text-[#9a0000] transition-colors duration-200"
                >
                  info@depotax.co.uk
                </Link>
              </li>
              <li className="flex gap-3">
                <HiPhone className="w-4 h-4 text-[#9a0000] shrink-0 mt-0.5" aria-hidden />
                <span className="flex flex-col gap-0.5">
                  <Link href="tel:+442036599254" className="hover:text-[#9a0000] transition-colors duration-200">
                    +44 20 3659 9254
                  </Link>
                  <Link href="tel:+447392438213" className="hover:text-[#9a0000] transition-colors duration-200">
                    +44 739 2438 213
                  </Link>
                </span>
              </li>
              <li className="flex gap-3">
                <HiMapPin className="w-4 h-4 text-[#9a0000] shrink-0 mt-0.5" aria-hidden />
                <span>
                  2 Sanders Parade, Greyhound Lane, Streatham, London SW16 5NL
                </span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-white/60 mb-3">Other offices:</p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/contact" className={FOOTER_LINK_CLASS}>Fulham</Link>
              </li>
              <li>
                <Link href="/contact" className={FOOTER_LINK_CLASS}>Camden</Link>
              </li>
              <li>
                <Link href="/contact" className={FOOTER_LINK_CLASS}>Milton Keynes</Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-2" aria-label="Social links">
              <Link
                href="https://www.facebook.com/depotax"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/depotax"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://www.instagram.com/depotax"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/60">
          <p>© 2026 DepoTax. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {BOTTOM_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#9a0000] transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
