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
  { label: 'Bookkeeping Services', href: '/services/bookkeeping' },
  { label: 'Payroll Services', href: '/services/payroll' },
  { label: 'Self Assessment & Tax Returns', href: '/services/self-assessment' },
  { label: 'Management Accounts', href: '/services/management-accounts' },
  { label: 'Property Accounts', href: '/services/landlord-accounting' },
  { label: 'Business Startup Support', href: '/services/startup-support' },
];

const WHO_WE_HELP_LINKS = [
  { label: 'Limited Companies', href: '/who-we-serve#businesses-detail' },
  { label: 'Contractors', href: '/who-we-serve#businesses-detail' },
  { label: 'Sole Traders', href: '/who-we-serve#individuals-detail' },
  { label: 'Landlords', href: '/who-we-serve#property-clients-detail' },
  { label: 'Startup Businesses', href: '/who-we-serve#businesses-detail' },
  { label: 'eCommerce Businesses', href: '/who-we-serve#specialist-professionals-detail' },
];

const BOTTOM_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
];

const FOOTER_LINK_CLASS =
  'text-sm text-white/90 hover:text-white hover:underline transition-colors duration-200';

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

const ADS_URL = 'https://www.awaisdigitalservices.co.uk';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden" role="contentinfo">
      {/* Top accent */}
      <div className="h-1 bg-brand-accent" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Logo centered at top */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Link href="/" className="inline-block" aria-label="DepoTax home">
            <Image
              src="/footer-logo.svg"
              alt="DepoTax"
              width={260}
              height={73}
              className="h-14 sm:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <FooterColumn title="Quick Links">
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Who We Help">
            <ul className="space-y-1.5 flex flex-col items-center lg:items-stretch">
              {WHO_WE_HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={FOOTER_LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact & Offices">
            <div className="space-y-2.5 text-sm text-white/95 flex flex-col items-center lg:items-stretch">
              <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5">Head office</p>
              <p className="text-white font-medium">London</p>
              <ul className="space-y-2">
                <li className="flex gap-2 justify-center lg:justify-start text-center lg:text-left items-start">
                  <HiMapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <Link href="https://maps.app.goo.gl/4NEbCUgv2xsFiP2T8" className="text-white/95 hover:text-white hover:underline transition-colors duration-200">
                    2 Sanders Parade, Greyhound Lane, Streatham, London SW16 5NL
                  </Link>
                </li>
                <li className="flex gap-2 justify-center lg:justify-start items-start">
                  <HiEnvelope className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <Link href="mailto:info@depotax.co.uk" className="text-white/95 hover:text-white hover:underline transition-colors duration-200">
                    info@depotax.co.uk
                  </Link>
                </li>
                <li className="flex gap-2 justify-center lg:justify-start items-start">
                  <HiPhone className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" aria-hidden />
                  <span className="flex flex-col gap-0.5 items-center lg:items-stretch">
                    <Link href="tel:+442036599254" className="text-white/95 hover:text-white hover:underline transition-colors duration-200">
                      +44 20 3659 9254
                    </Link>
                    <Link href="tel:+447392438213" className="text-white/95 hover:text-white hover:underline transition-colors duration-200">
                      +44 739 2438 213
                    </Link>
                  </span>
                </li>
              </ul>
              <div className="pt-2 mt-2 border-t border-white/15">
                <p className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">Branches</p>
                <ul className="space-y-1.5">
                  <li><Link href="https://maps.app.goo.gl/cb2WVmSebjhz7jY48" className={FOOTER_LINK_CLASS}>Fulham</Link></li>
                  <li><Link href="https://maps.app.goo.gl/VnqDGF9CCkqg1k1q8" className={FOOTER_LINK_CLASS}>Camden</Link></li>
                  <li><Link href="https://maps.app.goo.gl/oMXq4sheufapRvkH6" className={FOOTER_LINK_CLASS}>Milton Keynes</Link></li>
                </ul>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* Divider then centered social links */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20">
          <div className="flex justify-center" aria-label="Social links">
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/depotax"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/depotaxaccountants/"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/depotax"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: copyright, legal links */}
        <div className="mt-6 pt-5 border-t border-white/20 space-y-3 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Copyright DepoTax. Accountants and Tax Consultants. All Rights Reserved
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 text-sm text-white/90">
            {BOTTOM_LINKS.map((link, i) => (
              <li key={link.label} className="inline-flex items-center">
                <Link href={link.href} className="hover:text-white hover:underline transition-colors duration-200">
                  {link.label}
                </Link>
                {i < BOTTOM_LINKS.length - 1 && (
                  <span className="text-white/50 pointer-events-none mx-1.5" aria-hidden>,</span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/70 pt-1">
            Made with ❤️ by{' '}
            <Link
              href={ADS_URL}
              className="text-white/90 hover:text-brand-accent hover:underline transition-colors duration-200 font-medium"
            >
              ADS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
