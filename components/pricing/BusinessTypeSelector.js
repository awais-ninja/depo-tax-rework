'use client';

import { BUSINESS_TYPE_CONFIG } from '@/data/pricingData';
import {
  IconDocumentText,
  IconClock,
  IconCalculator,
  IconMapPin,
  IconUserGroup,
  IconLightBulb,
  IconHeart,
  IconBolt,
} from '@/components/ui/Icons';

const ICON_COMPONENTS = {
  document: IconDocumentText,
  clock: IconClock,
  calculator: IconCalculator,
  home: IconMapPin,
  building: IconUserGroup,
  globe: IconLightBulb,
  moon: IconHeart,
  star: IconBolt,
};

export default function BusinessTypeSelector({ value, onChange }) {
  const sortedTypes = [...BUSINESS_TYPE_CONFIG].sort((a, b) => a.order - b.order);

  return (
    <section aria-labelledby="business-type-heading" className="space-y-4">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-brand-text/70">
            Step 1
          </p>
          <h2
            id="business-type-heading"
            className="text-lg sm:text-xl font-semibold text-brand-navy mt-1"
          >
            Choose your business type
          </h2>
        </div>
        <p className="text-xs text-brand-text/70 max-w-xs">
          We&apos;ll tailor the packages and services shown based on how you trade today.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {sortedTypes.map((type) => {
          const active = value === type.id;
          const Icon =
            (type.iconKey && ICON_COMPONENTS[type.iconKey]) || ICON_COMPONENTS.document;
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onChange(type.id)}
              className={`relative flex flex-col items-start text-left rounded-2xl border bg-white/95 px-4 py-4 sm:px-5 sm:py-5 shadow-sm card-hover transition-all duration-150 min-h-[96px] min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent ${
                active
                  ? 'border-brand-accent shadow-[0_20px_60px_rgba(154,0,0,0.25)]'
                  : 'border-brand-grayBorder hover:border-brand-navy/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                    active ? 'bg-brand-accent text-white' : 'bg-brand-grayLight/80 text-brand-navy'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm sm:text-base font-medium text-brand-navy">
                  {type.label}
                </span>
              </div>
              <span className="mt-2 text-sm text-brand-text/75">
                {type.description}
              </span>
              {active && (
                <span className="absolute top-3 right-4 inline-flex items-center gap-1 rounded-full bg-brand-accent/10 text-brand-accent px-2 py-0.5 text-[11px] font-semibold">
                  <span className="inline-block h-3 w-3 rounded-full bg-brand-accent" />
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

