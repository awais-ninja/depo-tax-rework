import { IconClock, IconUserGroup, IconDocumentText, IconHeart } from '@/components/ui/Icons';
import { trustMetrics as trustMetricsData } from '@/data/home';

const METRIC_ICONS = [IconClock, IconUserGroup, IconDocumentText, IconHeart];

export default function TrustMetricsSection() {
  const { eyebrow, heading1, heading2, description, metrics } = trustMetricsData
  return (
    <section
      className="relative py-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="trust-metrics-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-text/80 mb-2">
            {eyebrow}
          </p>
          <h2 id="trust-metrics-heading" className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4">
            <span className="text-[#2b4b6b]">{heading1}</span>
            <span className="text-[#9a0000]">{heading2}</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-text/90 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {metrics.map((m, idx) => {
            const Icon = METRIC_ICONS[idx] || IconClock
            return (
            <div
              key={m.label}
              className="rounded-xl border border-brand-grayBorder bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(15,23,42,0.06)] flex flex-col items-center text-center"
            >
              <span className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4" aria-hidden>
                <Icon className="w-6 h-6" />
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-brand-accent mb-1 tabular-nums">{m.value}</p>
              <p className="text-sm font-medium text-brand-navy">{m.label}</p>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
