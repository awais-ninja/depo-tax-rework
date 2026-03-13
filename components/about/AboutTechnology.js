'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { ABOUT_TECH_INTRO, ABOUT_TECH_TOOLS, ABOUT_TECH_BENEFITS } from './aboutTechnologyData';

function ToolCard({ item, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} group flex flex-col items-center text-center rounded-xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:border-brand-accent/20 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]`}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.alt}
            width={80}
            height={80}
            className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-brand-grayLight/80 flex items-center justify-center text-brand-navy font-semibold text-xs sm:text-sm text-center px-1">
            {item.name}
          </div>
        )}
      </div>
      {item.category && (
        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-text/50 mb-1">
          {item.category}
        </p>
      )}
      <h3 className="text-sm font-semibold text-brand-navy mb-1.5">{item.name}</h3>
      <p className="text-xs text-brand-text/85 leading-snug">{item.description}</p>
    </article>
  );
}

export default function AboutTechnology() {
  return (
    <section
      id="technology-we-use"
      className="relative py-14 md:py-16 lg:py-20 overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="about-technology-heading"
    >
      <SectionBackgroundLabel label="TECHNOLOGY" position="left-top" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2
              id="about-technology-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Technology </span>
              <span className="text-[#9a0000]">We Use</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-base text-brand-text/85 leading-relaxed">
              {ABOUT_TECH_INTRO}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6 mb-10 sm:mb-12">
            {ABOUT_TECH_TOOLS.map((item, i) => (
              <ToolCard
                key={item.name}
                item={item}
                delayClass={
                  i < 2 ? 'reveal-item-delay-3' : i < 4 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'
                }
              />
            ))}
          </div>

          <div className="reveal-item reveal-item-delay-5 rounded-xl border border-brand-grayBorder bg-white/80 px-5 py-6 sm:px-6 sm:py-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-8">
              {ABOUT_TECH_BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-brand-text/85"
                >
                  <span className="flex h-6 w-6 shrink-0 rounded-full bg-brand-accent/10 items-center justify-center" aria-hidden>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
