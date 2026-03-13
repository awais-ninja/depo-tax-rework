'use client';

import SectionReveal from '@/components/ui/SectionReveal';

const AFFILIATION_LOGOS = [
  { name: "ACCA", src: "/hero/acca.svg", alt: "ACCA" },
  { name: "Xero", src: "/hero/xero.svg", alt: "Xero" },
  { name: "QuickBooks", src: "/hero/quickBooks.svg", alt: "QuickBooks" },
  { name: "Sage", src: "/hero/sage.svg", alt: "Sage" },
  { name: "HMRC", src: "/hero/hmrc.jpeg", alt: "HMRC" },
  { name: "Moneysoft", src: "/hero/moneysoft.png", alt: "Moneysoft payroll software" },
];

const LOGO_WIDTH = 200;

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
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/80">
              Trusted by businesses, property investors and individuals across the UK.
            </p>
          </div>
          {/* Mobile: 3 logos per row in a static grid */}
          <div className="reveal-item reveal-item-delay-3 md:hidden grid grid-cols-3 gap-4 sm:gap-6">
            {AFFILIATION_LOGOS.map(({ name, src, alt }) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 sm:h-20"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-10 sm:h-12 w-auto max-w-[120px] object-contain"
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
          {/* Desktop: marquee */}
          <div className="reveal-item reveal-item-delay-3 w-full overflow-hidden group hidden md:block">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...AFFILIATION_LOGOS, ...AFFILIATION_LOGOS].map(({ name, src, alt }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="shrink-0 flex items-center justify-center h-20 transition-transform duration-300 ease-out md:hover:scale-105 grayscale md:hover:grayscale-0 opacity-80 md:hover:opacity-100"
                  style={{ width: LOGO_WIDTH }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="h-14 w-auto max-w-[180px] object-contain pointer-events-none"
                    width={180}
                    height={64}
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
