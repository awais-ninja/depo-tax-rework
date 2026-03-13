'use client';

import { PRICING_MODES } from '@/data/pricingData';

const OPTIONS = [
  { id: PRICING_MODES.PACKAGES, label: 'Packages' },
  { id: PRICING_MODES.SINGLE_SERVICES, label: 'Single services' },
];

export default function PricingModeToggle({ mode, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-brand-grayBorder/80 bg-white/90 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      {OPTIONS.map((option) => {
        const active = mode === option.id;
        const isPackages = option.id === PRICING_MODES.PACKAGES;
        const isSingle = option.id === PRICING_MODES.SINGLE_SERVICES;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`relative min-w-[120px] px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent min-h-[44px] ${
              active
                ? isPackages
                  ? 'bg-brand-accent text-white shadow-[0_10px_30px_rgba(154,0,0,0.35)]'
                  : 'bg-brand-navy text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]'
                : 'text-brand-text/80 hover:text-brand-accent hover:bg-brand-grayLight/60'
            }`}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

