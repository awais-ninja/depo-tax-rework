import { ReactNode } from 'react';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

type PackageColumn = {
  name: string;
  description: string;
  highlighted?: boolean;
  features: string[];
};

const COLUMNS: PackageColumn[] = [
  {
    name: 'Compliance',
    description:
      'Essential compliance support for businesses that need accurate filings and regulatory peace of mind.',
    highlighted: false,
    features: [
      'Annual accounts preparation',
      'Corporation tax return filing',
      'Confirmation statement filing',
      'Basic bookkeeping guidance',
      'HMRC compliance support',
    ],
  },
  {
    name: 'Core',
    description:
      'Complete financial management for businesses that require ongoing accounting support and reporting.',
    highlighted: true,
    features: [
      'Everything in Compliance',
      'Monthly bookkeeping',
      'VAT return preparation',
      'Payroll support',
      'Basic management reporting',
    ],
  },
  {
    name: 'Growth',
    description:
      'Strategic financial support for businesses focused on scaling, forecasting, and long-term performance.',
    highlighted: false,
    features: [
      'Everything in Core',
      'Detailed management accounts',
      'Cashflow forecasting',
      'Tax planning support',
      'Strategic financial advisory',
    ],
  },
];

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-3.5 w-3.5 text-brand-accent ${className}`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.667 5.833 8.333 14.167 3.75 9.583"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PackageCard({ column }: { column: PackageColumn }) {
  const { name, description, highlighted, features } = column;

  const cardClasses = [
    'flex flex-col rounded-2xl border px-5 py-6 sm:px-6 sm:py-7 bg-white',
    'shadow-[0_6px_22px_rgba(15,23,42,0.06)]',
    highlighted
      ? 'border-brand-accent shadow-[0_16px_45px_rgba(154,0,0,0.26)] relative scale-[1.02] md:scale-[1.04]'
      : 'border-brand-grayBorder',
  ].join(' ');

  return (
    <article className={cardClasses}>
      {highlighted && (
        <span className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-brand-accent text-white text-[11px] font-semibold px-3 py-1 shadow-[0_6px_18px_rgba(154,0,0,0.45)]">
          Recommended
        </span>
      )}

      <header className="space-y-1 mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-brand-navy">{name}</h3>
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-text/70">
          Typical monthly packages
        </p>
        <p className="text-xs sm:text-sm text-brand-text/80">{description}</p>
      </header>

      <hr className="border-brand-grayBorder/70 mb-4" />

      <div className="space-y-2 text-xs sm:text-sm text-brand-text/85">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function PackageComparison(): ReactNode {
  return (
    <section className="relative overflow-hidden bg-brand-grayLight/50">
      <SectionBackgroundLabel label="PACKAGES" position="center-top" size="lg" />
      <SectionAmbient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-text/70 mb-2">
            Package comparison
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy mb-3">
            Which package is right for you?
          </h2>
          <p className="text-sm sm:text-base text-brand-text/80">
            Our packages are designed to support businesses at different stages of growth. Compare
            the options below to understand what level of accounting and financial support best fits
            your needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {COLUMNS.map((column) => (
            <PackageCard key={column.name} column={column} />
          ))}
        </div>
      </div>
    </section>
  );
}

