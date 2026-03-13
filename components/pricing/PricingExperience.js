'use client';

import { useMemo, useState } from 'react';
import { PRICING_MODES, BUSINESS_TYPE_CONFIG, PRICING_MATRIX } from '@/data/pricingData';
import PricingModeToggle from './PricingModeToggle';
import BusinessTypeSelector from './BusinessTypeSelector';
import SizeSelector from './SizeSelector';
import PackageGrid from './PackageGrid';
import SingleServicesGrid from './SingleServicesGrid';
import QuoteSummary from './QuoteSummary';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

function getDefaultBusinessType() {
  const sorted = [...BUSINESS_TYPE_CONFIG].sort((a, b) => a.order - b.order);
  return sorted[0]?.id ?? null;
}

function getDefaultSizeForBusinessType(id) {
  const matrix = PRICING_MATRIX[id];
  return matrix?.sizes?.[0]?.id ?? `${id}-standard`;
}

export default function PricingExperience({
  initialMode = PRICING_MODES.PACKAGES,
  initialBusinessTypeId = null,
  initialPackageTier = null,
  initialSelectedServiceKeys = [],
}) {
  const [mode, setMode] = useState(initialMode);
  const [businessTypeId, setBusinessTypeId] = useState(initialBusinessTypeId);
  const [sizeId, setSizeId] = useState(null);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [selectedServiceKeys, setSelectedServiceKeys] = useState(initialSelectedServiceKeys);
  const [serviceQuantities, setServiceQuantities] = useState({});

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
  };

  const handleBusinessTypeChange = (id) => {
    setBusinessTypeId(id);
    setSizeId(null);
    setSelectedPackageId(null);
    setSelectedServiceKeys([]);
  };

  const handleSizeChange = (id) => {
    setSizeId(id);
    setSelectedPackageId(null);
  };

  const handleServiceToggle = (key) => {
    setSelectedServiceKeys((current) =>
      current.includes(key) ? current.filter((k) => k !== key) : [...current, key]
    );
    setServiceQuantities((current) => {
      if (current[key]) return current;
      return { ...current, [key]: 1 };
    });
  };

  const handleServiceQuantityChange = (key, quantity) => {
    setServiceQuantities((current) => ({ ...current, [key]: quantity }));
  };

  const stepLabel = useMemo(() => {
    if (mode === PRICING_MODES.PACKAGES) {
      return 'Step 3 – choose your package';
    }
    return 'Step 3 – pick individual services';
  }, [mode]);

  return (
    <section id="guided-pricing" className="relative overflow-hidden bg-brand-grayLight/60">
      <SectionBackgroundLabel label="PRICING" position="right-mid" size="md" />
      <SectionAmbient />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          <div className="w-full lg:basis-2/3 space-y-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-text/70">
                  Guided pricing
                </p>
                <h2 className="mt-1 text-lg sm:text-xl font-semibold text-brand-navy">
                  {mode === PRICING_MODES.PACKAGES
                    ? 'Tell us a little about your business'
                    : 'Pick the services you need'}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-brand-text/75 max-w-xl">
                  {mode === PRICING_MODES.PACKAGES
                    ? "We'll show the packages that most closely match businesses like yours. Nothing is final until you've spoken to us."
                    : 'Choose one or more services. We will confirm a tailored quote once we have your details.'}
                </p>
              </div>
              <div className="mt-1 sm:mt-0">
                <PricingModeToggle mode={mode} onChange={handleModeChange} />
              </div>
            </div>

            <div className="space-y-7">
              {mode === PRICING_MODES.PACKAGES ? (
                <>
                  <BusinessTypeSelector
                    value={businessTypeId}
                    onChange={handleBusinessTypeChange}
                  />

                  {businessTypeId && (
                    <>
                      <SizeSelector
                        businessTypeId={businessTypeId}
                        value={sizeId}
                        onChange={handleSizeChange}
                      />

                      {sizeId && (
                        <div className="pt-2 border-t border-dashed border-brand-grayBorder/80">
                          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-text/70 mb-2">
                            {stepLabel}
                          </p>
                          <PackageGrid
                            businessTypeId={businessTypeId}
                            sizeId={sizeId}
                            selectedPackageId={selectedPackageId}
                            onSelect={setSelectedPackageId}
                            initialTier={initialPackageTier}
                          />
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : (
                <div className="pt-2 border-t border-dashed border-brand-grayBorder/80">
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-text/70 mb-2">
                    {stepLabel}
                  </p>
                  <SingleServicesGrid
                    selectedKeys={selectedServiceKeys}
                    quantities={serviceQuantities}
                    onToggle={handleServiceToggle}
                    onQuantityChange={handleServiceQuantityChange}
                  />
                </div>
              )}

              <section className="pt-5 border-t border-brand-grayBorder/80 space-y-2.5">
                <h3 className="text-sm sm:text-base font-semibold text-brand-navy">
                  Reassuringly straightforward
                </h3>
                <p className="text-sm sm:text-base text-brand-text/80 max-w-2xl">
                  DepoTax has been supporting UK businesses, contractors and landlords for years.
                  Our pricing is designed to be clear up-front, with no surprise add-ons. If your
                  situation is unusual, we&apos;ll explain exactly what&apos;s involved before you
                  decide.
                </p>
              </section>
            </div>
          </div>

          <div className="w-full lg:basis-1/3 lg:pl-4 xl:pl-8 flex-shrink-0 mt-6 lg:mt-0">
            <QuoteSummary
              mode={mode}
              businessTypeId={businessTypeId}
              sizeId={sizeId}
              selectedPackageId={selectedPackageId}
              selectedServiceKeys={selectedServiceKeys}
              serviceQuantities={serviceQuantities}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

