'use client';

import Image from 'next/image';
import SectionReveal from '@/components/ui/SectionReveal';

/**
 * Affiliations & partners – all logos with display specs.
 * Each: src (public path), alt, width/height (intrinsic or display size for Next/Image), aspect (for even strip).
 */
const AFFILIATION_LOGOS = [
  { name: 'ACCA', src: '/hero/acca.svg', alt: 'ACCA - Association of Chartered Certified Accountants', width: 120, height: 48 },
  { name: 'AAT', src: '/hero/aat.svg', alt: 'AAT - Association of Accounting Technicians', width: 120, height: 48 },
  { name: 'Xero', src: '/hero/xero.svg', alt: 'Xero cloud accounting', width: 120, height: 48 },
  { name: 'QuickBooks', src: '/hero/quickBooks.svg', alt: 'QuickBooks accounting software', width: 120, height: 48 },
  { name: 'Sage', src: '/hero/sage.svg', alt: 'Sage business software', width: 120, height: 48 },
  { name: 'HMRC', src: '/hero/hmrc.jpeg', alt: 'HMRC - HM Revenue and Customs', width: 48, height: 48 },
  { name: 'Moneysoft', src: '/hero/moneysoft.png', alt: 'Moneysoft payroll software', width: 120, height: 36 },
];

const LOGO_WIDTH = 200;
const MOBILE_LOGO_MAX = 120;

export default function TrustStrip() {
  return (
    <section
      className="bg-brand-grayLight/50 border-b border-brand-grayBorder py-8"
      aria-label="Trusted by businesses and partners"
    >
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2"
            >
              <span className="text-[#2b4b6b]">Our Affiliations &amp; </span>
              <span className="text-[#9a0000]">Partners</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/90">
              Trusted by businesses, property investors and individuals across the UK.
            </p>
          </div>
          {/* Mobile: 3 logos per row, even height */}
          <div className="reveal-item reveal-item-delay-3 md:hidden grid grid-cols-3 gap-4 sm:gap-6">
            {AFFILIATION_LOGOS.map(({ name, src, alt, width, height }) => (
              <div
                key={name}
                className="flex items-center justify-center min-h-[64px] sm:min-h-[80px]"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="h-10 sm:h-12 w-auto max-w-[120px] object-contain"
                  sizes={`(max-width: 640px) 33vw, ${MOBILE_LOGO_MAX}px`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Desktop: marquee – all logos, consistent slot width */}
          <div className="reveal-item reveal-item-delay-3 w-full overflow-hidden group hidden md:block">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...AFFILIATION_LOGOS, ...AFFILIATION_LOGOS].map(({ name, src, alt, width, height }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="shrink-0 flex items-center justify-center transition-transform duration-300 ease-out md:hover:scale-105 grayscale md:hover:grayscale-0 opacity-80 md:hover:opacity-100"
                  style={{ width: LOGO_WIDTH, height: 80 }}
                >
                  <Image
                    src={src}
                    alt={i < AFFILIATION_LOGOS.length ? alt : ''}
                    width={width}
                    height={height}
                    className="max-h-[56px] w-auto max-w-[160px] object-contain pointer-events-none"
                    sizes={`${LOGO_WIDTH}px`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
