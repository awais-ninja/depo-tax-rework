'use client';

import { useMemo, useState } from 'react';
import { PRICING_MATRIX, FEATURE_SETS } from '@/data/pricing';
import { getRecommendedPackage } from '@/utils/getRecommendedPackage';

function getPackages(businessTypeId, sizeId) {
  if (!businessTypeId || !sizeId) return [];
  const byType = PRICING_MATRIX[businessTypeId];
  if (!byType || !Array.isArray(byType.sizes)) return [];
  const size = byType.sizes.find((s) => s.id === sizeId);
  if (!size) return [];

  return size.packages
    .filter((pkg) => pkg.monthlyFrom != null)
    .map((pkg) => ({
      id: pkg.id,
      type: pkg.type,
      name: `${pkg.type} package`,
      monthlyFrom: pkg.monthlyFrom,
      title: pkg.title,
      subtitle: pkg.subtitle,
      features: FEATURE_SETS[pkg.featureKey] ?? [],
      extrasPreview: pkg.extraCharges ? [pkg.extraCharges] : [],
      notes: pkg.notes ?? null,
    }));
}

function PackageCard({ pkg, active, dimmed, recommended, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        'relative flex flex-col items-stretch text-left rounded-2xl border bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-sm card-hover transition-all duration-150 min-h-[220px] min-w-0 w-full',
        active
          ? 'border-brand-accent shadow-[0_22px_65px_rgba(154,0,0,0.25)]'
          : recommended
          ? 'border-brand-navy/80 shadow-[0_18px_55px_rgba(15,23,42,0.18)] ring-1 ring-brand-navy/70'
          : 'border-brand-grayBorder hover:border-brand-navy/45',
        dimmed ? 'opacity-40 blur-[1px]' : '',
      ].join(' ')}
    >
      {recommended && (
        <span className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-brand-navy text-white text-[10px] font-semibold px-3 py-1 shadow-[0_10px_28px_rgba(15,23,42,0.45)]">
          {active ? 'Perfect fit' : 'Recommended for you'}
        </span>
      )}

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-brand-navy">{pkg.name}</h3>
          {pkg.title && (
            <p className="mt-1 text-xs sm:text-sm text-brand-text/75">{pkg.title}</p>
          )}
          {pkg.subtitle && (
            <p className="mt-0.5 text-[11px] text-brand-text/70">{pkg.subtitle}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-text/65 mb-1">
            From
          </p>
          <p className="text-lg sm:text-xl font-semibold text-brand-navy">
            £{pkg.monthlyFrom}
            <span className="ml-1 text-xs font-normal text-brand-text/75">/month</span>
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-brand-text/80">
        {pkg.features?.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {pkg.extrasPreview?.length ? (
        <div className="mt-4 rounded-xl bg-brand-grayLight/60 px-3 py-3">
          <p className="text-[11px] font-medium text-brand-text/70 mb-1">
            Extra charges (guide):
          </p>
          <ul className="space-y-0.5 text-[11px] text-brand-text/75">
            {pkg.extrasPreview.map((extra) => (
              <li key={extra}>{extra}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {pkg.notes && (
        <p className="mt-3 text-[11px] text-brand-text/70">{pkg.notes}</p>
      )}
    </button>
  );
}

export default function PackageGrid({
  businessTypeId,
  sizeId,
  selectedPackageId,
  onSelect,
  initialTier = null,
}) {
  const packages = useMemo(() => getPackages(businessTypeId, sizeId), [businessTypeId, sizeId]);

  const tierOrder = ['Compliance', 'Core', 'Growth'];
  const availableTiers = tierOrder.filter((tier) =>
    packages.some((pkg) => pkg.type === tier)
  );

  const [activeTier, setActiveTier] = useState(initialTier);

  const recommendation = useMemo(
    () => getRecommendedPackage({ businessTypeId, sizeId }),
    [businessTypeId, sizeId]
  );

  if (!businessTypeId || !sizeId) {
    return (
      <section className="rounded-xl border border-dashed border-brand-grayBorder/80 bg-white/70 px-4 py-4 sm:px-5 sm:py-5 text-xs sm:text-sm text-brand-text/75">
        Choose your business type and size to see the most suitable DepoTax packages.
      </section>
    );
  }

  if (!packages.length) {
    return (
      <section className="rounded-xl border border-brand-grayBorder/80 bg-white/80 px-4 py-4 sm:px-5 sm:py-5 text-xs sm:text-sm text-brand-text/75">
        We&apos;ll tailor pricing for your exact situation – please contact us for a personalised
        quote.
      </section>
    );
  }

  return (
    <section aria-labelledby="package-heading" className="space-y-4">
      <header className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-brand-text/70">
              Step 3
            </p>
            <h2
              id="package-heading"
              className="text-lg sm:text-xl font-semibold text-brand-navy mt-1"
            >
              Choose your package
            </h2>
          </div>
          <p className="text-sm text-brand-text/70 max-w-xs">
            These monthly packages group together the services most clients in your position need.
          </p>
        </div>

        {recommendation && (
          <p className="text-xs sm:text-sm text-brand-text/80 rounded-xl bg-white/80 border border-dashed border-brand-grayBorder/80 px-3 py-2">
            Based on your business type and size,{' '}
            <span className="font-semibold text-brand-navy">{recommendation.packageType}</span> is
            likely the best fit for your needs. You can still choose any package you prefer.
          </p>
        )}
      </header>

      {availableTiers.length > 0 && (
        <div className="inline-flex mb-4 rounded-full border border-brand-grayBorder bg-white/90 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          {tierOrder.map((tier) => {
            const enabled = availableTiers.includes(tier);
            const active = enabled && activeTier === tier;
            return (
              <button
                key={tier}
                type="button"
                disabled={!enabled}
                onClick={() => {
                  if (!enabled) return;
                  setActiveTier(tier);
                  const defaultPkg = packages.find((p) => p.type === tier);
                  if (defaultPkg) {
                    onSelect(defaultPkg.id);
                  }
                }}
                className={`min-w-[110px] px-4 py-2 text-xs sm:text-sm rounded-full font-medium min-h-[40px] transition-all ${
                  !enabled
                    ? 'text-brand-text/40 bg-transparent cursor-not-allowed'
                    : active
                    ? 'bg-brand-navy text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]'
                    : 'text-brand-text/80 hover:text-brand-navy hover:bg-brand-grayLight/60'
                }`}
                aria-pressed={active}
              >
                {tier}
              </button>
            );
          })}
        </div>
      )}

      {!activeTier && (
        <p className="text-xs sm:text-sm text-brand-text/70">
          Select a package type above to reveal detailed pricing cards.
        </p>
      )}

      {!activeTier && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 opacity-40 blur-[1px] pointer-events-none select-none">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} active={false} dimmed recommended={false} onSelect={() => {}} />
          ))}
        </div>
      )}

      {activeTier && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {packages.map((pkg) => {
            const isActive = pkg.id === selectedPackageId;
            const dimByTier = pkg.type !== activeTier;
            const dimBySelection = selectedPackageId && pkg.id !== selectedPackageId;
            const isRecommended = recommendation && recommendation.packageId === pkg.id;
            const baseDimmed = dimByTier || dimBySelection;
            const dimmed = isRecommended && !selectedPackageId ? false : baseDimmed;

            return (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                active={isActive}
                dimmed={dimmed}
                recommended={isRecommended}
                onSelect={() => {
                  setActiveTier(pkg.type);
                  onSelect(pkg.id);
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

