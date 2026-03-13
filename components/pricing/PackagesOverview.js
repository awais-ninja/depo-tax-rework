import { BUSINESS_TYPE_CONFIG, PRICING_MATRIX, FEATURE_SETS } from '@/data/pricing';

function getBusinessTypesWithPackages() {
  return BUSINESS_TYPE_CONFIG.filter((type) => PRICING_MATRIX[type.id]).sort(
    (a, b) => a.order - b.order
  );
}

function PackageDetailCard({ businessLabel, sizeLabel, pkg }) {
  const features = FEATURE_SETS[pkg.featureKey] ?? [];

  return (
    <article className="flex flex-col rounded-2xl border border-brand-grayBorder/80 bg-white/95 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_6px_22px_rgba(15,23,42,0.08)] space-y-4">
      <header className="space-y-1">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-text/70">
          {businessLabel}
        </p>
        <h3 className="text-sm sm:text-base font-semibold text-brand-navy">
          {pkg.type} – {sizeLabel}
        </h3>
        {pkg.title && (
          <p className="text-xs sm:text-sm text-brand-text/80">{pkg.title}</p>
        )}
        {pkg.subtitle && (
          <p className="text-[11px] text-brand-text/70">{pkg.subtitle}</p>
        )}
      </header>

      <div className="flex items-baseline justify-between gap-3">
        <div className="text-xs text-brand-text/70">
          <p className="font-medium text-brand-text/80">From</p>
        </div>
        <div className="text-right">
          <p className="text-lg sm:text-xl font-semibold text-brand-navy">
            £{pkg.monthlyFrom}
            <span className="ml-1 text-xs font-normal text-brand-text/75">/month</span>
          </p>
        </div>
      </div>

      {features.length > 0 && (
        <ul className="mt-1 space-y-1.5 text-xs sm:text-sm text-brand-text/85">
          {features.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {pkg.extraCharges && (
        <div className="mt-3 rounded-xl bg-brand-grayLight/60 px-3 py-3 text-[11px] text-brand-text/75">
          <p className="font-medium text-brand-text/80 mb-1">Extra charges / conditions</p>
          <p>{pkg.extraCharges}</p>
        </div>
      )}

      {pkg.notes && (
        <p className="mt-2 text-[11px] text-brand-text/70">{pkg.notes}</p>
      )}
    </article>
  );
}

export default function PackagesOverview() {
  const businessTypes = getBusinessTypesWithPackages();

  return (
    <section className="bg-brand-grayLight/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <header className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-text/70 mb-2">
            Packages
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy mb-3">
            Detailed DepoTax Package Guide
          </h1>
          <p className="text-sm sm:text-base text-brand-text/80">
            Browse every DepoTax package by business type and size band. Use this page alongside the
            guided pricing tool to compare options and understand what&apos;s included before you
            speak to us.
          </p>
        </header>

        <div className="space-y-10 sm:space-y-12">
          {businessTypes.map((type) => {
            const matrix = PRICING_MATRIX[type.id];
            const sizes = matrix?.sizes ?? [];
            const hasAny = sizes.some((size) =>
              size.packages?.some((pkg) => pkg.monthlyFrom != null)
            );
            if (!hasAny) return null;

            return (
              <section key={type.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy">
                      {type.label}
                    </h2>
                    <p className="text-sm text-brand-text/75 max-w-2xl">
                      {type.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                  {sizes.map((size) =>
                    (size.packages || [])
                      .filter((pkg) => pkg.monthlyFrom != null)
                      .map((pkg) => (
                        <PackageDetailCard
                          key={pkg.id}
                          businessLabel={type.label}
                          sizeLabel={size.label}
                          pkg={pkg}
                        />
                      ))
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

