 'use client';
import Link from '@/components/ui/Link';
import { BUSINESS_TYPE_CONFIG, PRICING_MATRIX, SINGLE_SERVICES, PRICING_MODES } from '@/data/pricing';
import { getRecommendedPackage } from '@/utils/getRecommendedPackage';
import { useCallback, useRef, useState } from 'react';

function getBusinessTypeLabel(id) {
  return BUSINESS_TYPE_CONFIG.find((t) => t.id === id)?.label ?? 'Not selected';
}

function getSizeLabel(businessTypeId, sizeId) {
  const matrix = PRICING_MATRIX[businessTypeId];
  const size = matrix?.sizes?.find((s) => s.id === sizeId);
  return size?.label ?? 'Not selected';
}

function getSelectedPackage(businessTypeId, sizeId, packageId) {
  if (!businessTypeId || !sizeId || !packageId) return null;
  const matrix = PRICING_MATRIX[businessTypeId];
  const size = matrix?.sizes?.find((s) => s.id === sizeId);
  const pkg = size?.packages?.find((p) => p.id === packageId);
  if (!pkg || pkg.monthlyFrom == null) return null;
  return {
    id: pkg.id,
    name: `${pkg.type} package`,
    title: pkg.title,
    monthlyFrom: pkg.monthlyFrom,
    extrasPreview: pkg.extraCharges ? [pkg.extraCharges] : [],
  };
}

function summariseSingleServices(selectedKeys, quantities) {
  let monthly = 0;
  let oneOff = 0;

  const selected = SINGLE_SERVICES.filter((s) => selectedKeys.includes(s.key));

  selected.forEach((service) => {
    const qty = Math.max(1, quantities?.[service.key] ?? 1);
    if (service.billingType === 'one-off') {
      oneOff += service.price * qty;
    } else if (service.billingType === 'monthly') {
      monthly += service.price * qty;
    }
  });

  return {
    monthly: Math.round(monthly),
    oneOff,
    selected,
  };
}

function buildWhatsAppLink({ mode, businessLabel, sizeLabel, selectedPackage, servicesSummary, name }) {
  // Use the main WhatsApp number (must be digits only, no + or spaces)
  const phone = '447392438213';
  const lines = [];
  lines.push('DepoTax pricing enquiry from website');
  lines.push('');
  if (name && name.trim()) {
    lines.push(`Name: ${name.trim()}`);
  }
  lines.push(`Mode: ${mode === PRICING_MODES.PACKAGES ? 'Monthly package' : 'Single services'}`);

  if (mode === PRICING_MODES.PACKAGES) {
    lines.push(`Business type: ${businessLabel}`);
    lines.push(`Size band: ${sizeLabel}`);
    if (selectedPackage) {
      lines.push('');
      lines.push(`Selected package: ${selectedPackage.name}`);
      if (selectedPackage.title) {
        lines.push(`Package detail: ${selectedPackage.title}`);
      }
      lines.push(`Guide monthly from: £${selectedPackage.monthlyFrom}/month`);
      if (selectedPackage.extrasPreview?.length) {
        lines.push('');
        lines.push('Likely extras (guide):');
        selectedPackage.extrasPreview.forEach((extra) => lines.push(`- ${extra}`));
      }
    } else {
      lines.push('');
      lines.push('No package has been selected yet on the pricing page.');
    }
  } else if (mode === PRICING_MODES.SINGLE_SERVICES) {
    if (servicesSummary?.selected?.length) {
      lines.push('');
      lines.push('Selected services:');
      servicesSummary.selected.forEach((service) => {
        lines.push(
          `- ${service.name} (${service.billingType === 'one-off' ? 'one-off' : 'monthly'}) – guide £${
            service.price
          }`
        );
      });
      lines.push('');
      lines.push(
        `Guide monthly total: ${
          servicesSummary.monthly ? `from £${servicesSummary.monthly}/month` : 'TBC'
        }`
      );
      lines.push(
        `Guide one-off total: ${
          servicesSummary.oneOff ? `from £${servicesSummary.oneOff}` : 'TBC'
        }`
      );
    } else {
      lines.push('');
      lines.push('No individual services have been selected yet on the pricing page.');
    }
  }

  lines.push('');
  lines.push('Please reply with your best contact number and any extra details about your situation so we can confirm a tailored quote.');
  lines.push('');

  const text = lines.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function QuoteSummary({
  mode,
  businessTypeId,
  sizeId,
  selectedPackageId,
  selectedServiceKeys,
  serviceQuantities = {},
}) {
  const businessLabel = getBusinessTypeLabel(businessTypeId);
  const sizeLabel = getSizeLabel(businessTypeId, sizeId);
  const selectedPackage =
    mode === PRICING_MODES.PACKAGES
      ? getSelectedPackage(businessTypeId, sizeId, selectedPackageId)
      : null;
  const servicesSummary =
    mode === PRICING_MODES.SINGLE_SERVICES
      ? summariseSingleServices(selectedServiceKeys, serviceQuantities)
      : null;

  const recommendation =
    mode === PRICING_MODES.PACKAGES && !selectedPackage
      ? getRecommendedPackage({ businessTypeId, sizeId })
      : null;

  const hasPrimary =
    (mode === PRICING_MODES.PACKAGES && !!selectedPackage) ||
    (mode === PRICING_MODES.SINGLE_SERVICES && servicesSummary?.selected?.length);

  const containerRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [whatsAppName, setWhatsAppName] = useState('');

  const handleDownloadImage = useCallback(async () => {
    if (!containerRef.current || isDownloading) return;
    try {
      setIsDownloading(true);
      const html2canvasMod = await import('html2canvas');
      const html2canvas = html2canvasMod.default || html2canvasMod;
      const canvas = await html2canvas(containerRef.current, {
        backgroundColor: '#ffffff',
        scale: window.devicePixelRatio > 1 ? 2 : 1.5,
        useCORS: true,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'depotax-quote.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // Fail silently; user still has WhatsApp option
      console.error('Failed to download quote image', e);
    } finally {
      setIsDownloading(false);
    }
  }, [isDownloading]);

  const handleOpenWhatsApp = useCallback(() => {
    const trimmedName = whatsAppName.trim();
    if (!trimmedName) {
      // Lightweight guard; avoids sending completely anonymous quote
      alert('Please enter your name so we can recognise your WhatsApp quote.');
      return;
    }
    const url = buildWhatsAppLink({
      mode,
      businessLabel,
      sizeLabel,
      selectedPackage,
      servicesSummary,
      name: trimmedName,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [mode, businessLabel, sizeLabel, selectedPackage, servicesSummary, whatsAppName]);

  return (
    <aside
      aria-label="Your quote summary"
      ref={containerRef}
      className="mt-6 sticky top-4 rounded-3xl border border-brand-grayBorder/90 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] px-5 py-5 sm:px-6 sm:py-6 space-y-5"
    >
      <div className="flex items-center justify-end gap-2.5 pb-2 border-b border-dashed border-brand-grayBorder/70">
        <img
          src="/footer-logo.svg"
          alt="DepoTax Accountants & Tax Consultants"
          className="h-7 w-auto"
        />
        <div className="flex flex-col text-[11px] text-brand-text/90 text-right items-end">
          <span className="font-semibold text-brand-navy">
            DepoTax Accountants &amp; Tax Consultants
          </span>
          <span>info@depotax.co.uk</span>
          <span>+44 20 3659 9254 · +44 7392 438 213</span>
        </div>
      </div>
      <header className="space-y-2">
        <p
          className={`text-[12px] font-semibold tracking-[0.25em] uppercase ${
            mode === PRICING_MODES.PACKAGES ? 'text-brand-accent' : 'text-brand-navy'
          }`}
        >
          Quote summary
        </p>
        <h2 className="text-2xl font-semibold text-brand-navy">
          {mode === PRICING_MODES.PACKAGES
            ? 'Package guide for your business type and size'
            : 'Guide to your selected services'}
        </h2>
        <p className="text-sm sm:text-base text-brand-text/75">
          Use this as a guide – we&apos;ll confirm the exact fee once we&apos;ve reviewed your
          details together.
        </p>
      </header>

      {mode === PRICING_MODES.PACKAGES && (
        <dl className="space-y-2 rounded-xl bg-brand-grayLight/60 px-3.5 py-3.5 text-xs text-brand-text/80">
          <div className="flex items-start justify-between gap-3">
            <dt className="font-medium text-brand-text/80">Mode</dt>
            <dd className="text-right">Monthly package</dd>
          </div>
          <div className="flex items-start justify-between gap-3">
            <dt className="font-medium text-brand-text/80">Business type</dt>
            <dd className="text-right">{businessLabel}</dd>
          </div>
          <div className="flex items-start justify-between gap-3">
            <dt className="font-medium text-brand-text/80">Size</dt>
            <dd className="text-right">{sizeLabel}</dd>
          </div>
        </dl>
      )}

      {mode === PRICING_MODES.PACKAGES && (
        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-text/70">
            Selected package
          </h3>
          {selectedPackage ? (
            <div className="rounded-xl border border-brand-grayBorder/80 bg-white px-3.5 py-3.5 text-xs text-brand-text/80 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{selectedPackage.name}</p>
                  {selectedPackage.title && (
                    <p className="mt-0.5 text-[11px] text-brand-text/75">
                      {selectedPackage.title}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-text/65 mb-0.5">
                    From
                  </p>
                  <p className="text-base font-semibold text-brand-navy">
                    £{selectedPackage.monthlyFrom}
                    <span className="ml-1 text-[11px] font-normal text-brand-text/75">
                      /month
                    </span>
                  </p>
                </div>
              </div>

              {selectedPackage.extrasPreview?.length ? (
                <div className="pt-2 border-t border-dashed border-brand-grayBorder/80">
                  <p className="text-[11px] font-medium text-brand-text/70 mb-1">
                    Likely extras (guide only):
                  </p>
                  <ul className="space-y-0.5 text-[11px] text-brand-text/75">
                    {selectedPackage.extrasPreview.map((extra) => (
                      <li key={extra}>{extra}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="space-y-1.5">
              {recommendation && (
                <p className="text-xs text-brand-text/80">
                  <span className="font-semibold text-brand-navy">
                    Recommended package: {recommendation.packageType}
                  </span>
                  <span className="text-brand-text/75">
                    {' '}
                    – select this on the left to see a guide monthly fee, or choose a different
                    package if you prefer.
                  </span>
                </p>
              )}
              <p className="text-xs text-brand-text/75">
                Select a package on the left to see an estimated monthly fee.
              </p>
            </div>
          )}
        </section>
      )}

      {mode === PRICING_MODES.SINGLE_SERVICES && (
        <section className="space-y-2">
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-text/70">
            Selected services
          </h3>

          {servicesSummary?.selected?.length ? (
            <div className="rounded-xl border border-brand-grayBorder/80 bg-white px-3.5 py-3.5 text-xs text-brand-text/80 space-y-2">
              <ul className="space-y-1.5">
                {servicesSummary.selected.map((service) => (
                  <li key={service.key} className="flex items-start justify-between gap-3">
                    <div className="text-[11px] sm:text-xs text-brand-text/80">
                      <p className="font-medium text-brand-navy">{service.name}</p>
                      {service.quantityLabel && (
                        <p className="text-[11px] text-brand-text/70">
                          {Math.max(1, serviceQuantities?.[service.key] ?? 1)}{' '}
                          {service.quantityUnit}
                          {Math.max(1, serviceQuantities?.[service.key] ?? 1) > 1 ? 's' : ''}
                        </p>
                      )}
                    </div>
                    <span className="text-[11px] text-brand-text/75 whitespace-nowrap">
                      from £
                      {Math.max(1, serviceQuantities?.[service.key] ?? 1) * service.price}{' '}
                      {service.billingType === 'one-off' ? 'one-off' : '/month'}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 pt-2 border-t border-dashed border-brand-grayBorder/80 space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-brand-text/80">Guide monthly total</span>
                  <span className="font-semibold text-brand-navy">
                    {servicesSummary.monthly ? `from £${servicesSummary.monthly}/month` : 'TBC'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-medium text-brand-text/80">Guide one-off total</span>
                  <span className="font-semibold text-brand-navy">
                    {servicesSummary.oneOff ? `from £${servicesSummary.oneOff}` : 'TBC'}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-xs text-brand-text/75">
              Select one or more services on the left to build a simple guide to your monthly and
              one-off fees.
            </p>
          )}
        </section>
      )}

      <div className="pt-3 border-t border-brand-grayBorder/80 space-y-3">
        <p className="text-[11px] text-brand-text/70">
          All pricing is a guide and depends on the quality of records, number of transactions and
          specific support you require. We&apos;ll confirm everything in writing before you join.
        </p>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleDownloadImage}
            disabled={isDownloading}
            className="inline-flex items-center justify-center rounded-full bg-brand-accent text-white text-xs sm:text-sm font-medium px-5 py-2.5 shadow-[0_14px_40px_rgba(154,0,0,0.35)] hover:bg-brand-accentDark transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isDownloading ? 'Preparing image…' : 'Download quote as image'}
          </button>
          <div className="space-y-1">
            <label
              htmlFor="quote-whatsapp-name"
              className="block text-[11px] font-medium text-brand-text/80"
            >
              Your name for WhatsApp
            </label>
            <input
              id="quote-whatsapp-name"
              type="text"
              value={whatsAppName}
              onChange={(e) => setWhatsAppName(e.target.value)}
              className="w-full rounded-full border border-brand-grayBorder px-4 py-2 text-xs sm:text-sm text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-1 focus:ring-brand-accent/70 focus:border-brand-accent"
              placeholder="Enter your name so we recognise your quote"
            />
          </div>
          <button
            type="button"
            onClick={handleOpenWhatsApp}
            disabled={!whatsAppName.trim()}
            className="inline-flex items-center justify-center rounded-full border border-brand-accent bg-white text-xs sm:text-sm font-medium text-brand-accent px-5 py-2.5 hover:bg-brand-accent hover:text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent min-h-12 disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="Send this quote to DepoTax via WhatsApp"
          >
            Send your quote via WhatsApp
          </button>
          <p className="text-[11px] text-brand-text/70">
            We&apos;ll use your name with this quote so our team knows who to contact when you
            message us on WhatsApp.
          </p>
        </div>

        <div className="pt-1 border-t border-dashed border-brand-grayBorder/80 mt-1">
          <p className="text-[11px] text-brand-text/70">
            No obligation. We&apos;ll review your details, confirm the fee, and only start once
            you&apos;re happy.
          </p>
        </div>
      </div>
    </aside>
  );
}

