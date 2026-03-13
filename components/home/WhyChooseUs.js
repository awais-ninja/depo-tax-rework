'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import TestimonialsBackground from '@/components/ui/TestimonialsBackground';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import {
  HiBolt,
  HiPhoneArrowUpRight,
  HiDocumentMagnifyingGlass,
  HiClock,
  HiGlobeAlt,
  HiShieldCheck,
  HiUserGroup,
  HiBuildingOffice2,
} from 'react-icons/hi2';

import { whyChooseUs as whyChooseUsData } from '@/data/home';

const ICON_MAP = {
  bolt: HiBolt,
  phone: HiPhoneArrowUpRight,
  document: HiDocumentMagnifyingGlass,
  clock: HiClock,
  globe: HiGlobeAlt,
  shield: HiShieldCheck,
  userGroup: HiUserGroup,
  building: HiBuildingOffice2,
};

const HEXAGON_CLIP =
  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

function HexagonCard({ title, description, Icon, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} group flex flex-col items-center text-center min-h-[280px] sm:min-h-[300px] transition-all duration-200 md:hover:-translate-y-1`}
    >
      <div
        className="w-full h-full bg-white border border-brand-grayBorder/80 shadow-[0_8px_28px_rgba(15,23,42,0.08)] md:group-hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:group-hover:border-[#9a0000]/30 overflow-hidden transition-all duration-200 rounded-xl md:[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
      >
        <div className="p-6 sm:p-7 flex flex-col items-center h-full">
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9a0000]/10 text-[#9a0000] mb-4 transition-colors duration-200 group-hover:bg-[#9a0000] group-hover:text-white">
            <Icon className="w-6 h-6" aria-hidden />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-brand-navy mb-2">
            {title}
          </h3>
          <p className="text-sm text-brand-text/85 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

function MobileFeatureCard({ title, description, Icon, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-col rounded-xl border border-brand-grayBorder/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] text-center`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="shrink-0 w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
          <Icon className="w-6 h-6" aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-brand-navy mb-2">{title}</h3>
          <p className="text-sm text-brand-text/85 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function WhyChooseUs() {
  const { heading1, heading2, description, features } = whyChooseUsData;
  const FEATURES = features.map((f) => ({ ...f, Icon: ICON_MAP[f.iconKey] || HiBolt }));
  const row1 = FEATURES.slice(0, 3);
  const row2 = FEATURES.slice(3, 5);
  const row3 = FEATURES.slice(5, 8);

  return (
    <section
      className="relative pt-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      <TestimonialsBackground />
      <SectionBackgroundLabel label="WHY US" position="right-mid" />
      <SectionAmbient />
      <SectionReveal>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block absolute top-20 left-8 text-[#9a0000] opacity-[0.06] font-serif text-[8rem] leading-none pointer-events-none select-none z-0" aria-hidden>
            "
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
            <h2 id="why-choose-heading" className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              <span className="text-[#2b4b6b]">{heading1}</span>
              <span className="text-[#9a0000]">{heading2}</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85">
              {description}
            </p>
          </div>

          {/* Mobile: single column of simple cards with generous spacing */}
          <div className="md:hidden space-y-4">
            {FEATURES.map((item, i) => (
              <MobileFeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                delayClass={i < 3 ? 'reveal-item-delay-3' : i < 6 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'}
              />
            ))}
          </div>

          {/* Desktop: Honeycomb 3 - 2 - 3 */}
          <div className="hidden md:block space-y-2">
            {/* Row 1: 3 hexagons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6">
              {row1.map((item, i) => (
                <div key={item.title} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[280px] lg:w-[300px]">
                  <HexagonCard
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    delayClass="reveal-item-delay-3"
                  />
                </div>
              ))}
            </div>

            {/* Row 2: 2 hexagons, offset on desktop for honeycomb */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6 md:justify-center md:pl-[16.666%]">
              {row2.map((item, i) => (
                <div key={item.title} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[280px] lg:w-[300px]">
                  <HexagonCard
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    delayClass="reveal-item-delay-4"
                  />
                </div>
              ))}
            </div>

            {/* Row 3: 3 hexagons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-6">
              {row3.map((item, i) => (
                <div key={item.title} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[280px] lg:w-[300px]">
                  <HexagonCard
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    delayClass="reveal-item-delay-5"
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
