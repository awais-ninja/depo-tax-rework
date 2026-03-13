'use client';

import { BUSINESS_TYPE_CONFIG, PRICING_MATRIX } from '@/data/pricingData';

function getSizeOptionsForBusinessType(businessTypeId) {
  const type = BUSINESS_TYPE_CONFIG.find((t) => t.id === businessTypeId);
  if (!type) return null;

  const matrix = PRICING_MATRIX[businessTypeId];
  if (matrix && Array.isArray(matrix.sizes)) {
    return {
      sizeLabel: type.sizeMetricLabel,
      options: matrix.sizes.map((size) => ({
        id: size.id,
        label: size.label,
        description:
          matrix.sizeMetricType === 'turnover'
            ? `Turnover band: ${size.label}`
            : matrix.sizeMetricType === 'properties'
            ? `Portfolio size: ${size.label}`
            : 'We will confirm the exact level once we have your details.',
      })),
    };
  }

  // Fallback for simple / non-size-based services (e.g. dormant companies, one-offs).
  return {
    sizeLabel: type.sizeMetricLabel,
    options: [
      {
        id: `${businessTypeId}-standard`,
        label: 'Standard',
        description: 'Not size-based – we will tailor this once we understand your situation.',
      },
    ],
  };
}

export default function SizeSelector({ businessTypeId, value, onChange }) {
  const sizeConfig = getSizeOptionsForBusinessType(businessTypeId);

  if (!businessTypeId || !sizeConfig) {
    return (
      <section
        aria-label="Business size selection"
        className="rounded-xl border border-dashed border-brand-grayBorder/80 bg-white/70 px-4 py-4 sm:px-5 sm:py-5 text-xs sm:text-sm text-brand-text/75"
      >
        Select a business type first to see the most relevant size options.
      </section>
    );
  }

  return (
    <section aria-labelledby="business-size-heading" className="space-y-4">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-brand-text/70">
            Step 2
          </p>
          <h2
            id="business-size-heading"
            className="text-lg sm:text-xl font-semibold text-brand-navy mt-1"
          >
            Choose your {sizeConfig.sizeLabel.toLowerCase()}
          </h2>
        </div>
        <p className="text-sm text-brand-text/70 max-w-xs">
          Pick the option that feels closest – we&apos;ll refine things together if you become a
          client.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {sizeConfig.options.map((size) => {
          const active = value === size.id;
          return (
            <button
              key={size.id}
              type="button"
              onClick={() => onChange(size.id)}
              className={`relative flex flex-col items-start text-left rounded-2xl border bg-white/95 px-4 py-4 sm:px-5 sm:py-5 shadow-sm card-hover transition-all duration-150 min-h-[88px] min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent ${
                active
                  ? 'border-brand-accent shadow-[0_18px_50px_rgba(154,0,0,0.20)]'
                  : 'border-brand-grayBorder hover:border-brand-accent/60'
              }`}
            >
              <span className="text-sm sm:text-base font-medium text-brand-navy">
                {size.label}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-brand-text/75">
                {size.description}
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

