import { SINGLE_SERVICES } from '@/data/pricing';

function SingleServiceCard({ service, selected, quantity, onToggle, onQuantityChange }) {
  const isMonthly = service.billingType === 'monthly';
  const hasQuantity = !!service.quantityLabel;

  return (
    <div
      className={[
        'relative flex flex-col items-stretch text-left rounded-2xl border bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-sm card-hover transition-all duration-150 min-h-[190px] min-w-0 w-full',
        selected
          ? 'border-brand-navy shadow-[0_18px_55px_rgba(15,23,42,0.22)]'
          : 'border-brand-grayBorder hover:border-brand-navy/60',
      ].join(' ')}
    >
      {selected && (
        <span
          aria-hidden
          className="absolute inset-y-4 left-0 w-1 rounded-full bg-brand-navy"
        />
      )}
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start justify-between gap-2 w-full text-left"
      >
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-brand-navy">{service.name}</h3>
          <p className="mt-1 text-xs sm:text-sm text-brand-text/75">{service.description}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-text/65 mb-1">
            From
          </p>
          <p className="text-lg sm:text-xl font-semibold text-brand-navy">
            £{service.price}
          </p>
          <p className="text-[11px] text-brand-text/75">
            {service.billingType === 'one-off' ? 'one-off' : 'per month'}
          </p>
        </div>
      </button>

      {hasQuantity && selected && (
        <div className="mt-3 pt-3 border-t border-dashed border-brand-grayBorder/80 flex items-center justify-between gap-3">
          <div className="text-[11px] text-brand-text/80">
            <p className="font-medium">{service.quantityLabel}</p>
            <p className="text-[11px] text-brand-text/65">
              Guide price covers ~{service.baseQuantity} {service.quantityUnit}
              {service.baseQuantity > 1 ? 's' : ''}.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-grayBorder px-2 py-1 bg-brand-grayLight/60">
            <button
              type="button"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold text-brand-navy hover:bg-brand-navy/5"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value || '1', 10);
                if (Number.isNaN(val) || val < 1) return;
                onQuantityChange(val);
              }}
              className="w-10 text-center text-xs font-semibold text-brand-navy bg-transparent border-0 focus:outline-none focus:ring-0"
              aria-label={`${service.quantityLabel} quantity`}
            />
            <button
              type="button"
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold text-brand-navy hover:bg-brand-navy/5"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SingleServicesGrid({ selectedKeys, quantities, onToggle, onQuantityChange }) {
  const grouped = SINGLE_SERVICES.reduce((acc, service) => {
    const key = service.category || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(service);
    return acc;
  }, {});

  return (
    <section aria-labelledby="single-services-heading" className="space-y-4">
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <div>
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-brand-text/70">
            Step 3
          </p>
          <h2
            id="single-services-heading"
            className="text-lg sm:text-xl font-semibold text-brand-navy mt-1"
          >
            Pick individual services
          </h2>
        </div>
        <p className="text-sm text-brand-text/70 max-w-xs">
          Select the specific one-off or recurring services you&apos;re interested in. We&apos;ll
          confirm the exact quote with you.
        </p>
      </header>

      <div className="space-y-6">
        {Object.entries(grouped).map(([category, services]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-brand-navy">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {services.map((service) => (
                <SingleServiceCard
                  key={service.key}
                  service={service}
                  selected={selectedKeys.includes(service.key)}
                  quantity={quantities[service.key] ?? 1}
                  onToggle={() => onToggle(service.key)}
                  onQuantityChange={(next) => onQuantityChange(service.key, next)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

