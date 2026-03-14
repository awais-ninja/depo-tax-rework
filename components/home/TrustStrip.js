'use client';

import Image from 'next/image';
import SectionReveal from '@/components/ui/SectionReveal';

import { trustStrip as trustStripData } from '@/data/home'

const LOGO_WIDTH = 200;
const MOBILE_LOGO_MAX = 120;

/** Mobile: fixed-aspect slot (5/2 fits 120x48) + object-contain so logos keep correct proportions and never squashed. */
function MobileLogoSlot({ name, src, alt, width, height }) {
  return (
    <div className="flex items-center justify-center w-full aspect-[5/2] min-h-[48px]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="max-w-full max-h-full w-auto h-auto object-contain"
        sizes={`(max-width: 640px) 33vw, ${MOBILE_LOGO_MAX}px`}
        loading="lazy"
      />
    </div>
  );
}

export default function TrustStrip() {
  const { heading1, heading2, description, logos } = trustStripData
  return (
    <section
      className="bg-brand-grayLight/50 border-b border-brand-grayBorder py-8"
      aria-label="Trusted by businesses and partners"
    >
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2">
              <span className="text-[#2b4b6b]">{heading1}</span>
              <span className="text-[#9a0000]">{heading2}</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/90">
              {description}
            </p>
          </div>
          <div className="reveal-item reveal-item-delay-3 md:hidden grid grid-cols-3 gap-4 sm:gap-6 max-w-[400px] mx-auto sm:max-w-none">
            {logos.map(({ name, src, alt, width, height }) => (
              <MobileLogoSlot
                key={name}
                name={name}
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            ))}
          </div>
          {/* Desktop: marquee – all logos, consistent slot width */}
          <div className="reveal-item reveal-item-delay-3 w-full overflow-hidden group hidden md:block">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...logos, ...logos].map(({ name, src, alt, width, height }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="shrink-0 flex items-center justify-center w-[200px] h-20 transition-transform duration-300 ease-out md:hover:scale-105 grayscale md:hover:grayscale-0 opacity-80 md:hover:opacity-100"
                >
                  <Image
                    src={src}
                    alt={i < logos.length ? alt : ''}
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
