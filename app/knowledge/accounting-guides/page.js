import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeResourceCard from '@/components/knowledge/KnowledgeResourceCard';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Accounting Guides | Bookkeeping, Payroll & Compliance | DepoTax',
  description:
    'Practical accounting guides for UK businesses: bookkeeping, payroll, annual accounts, VAT returns, and compliance from DepoTax.',
};

const GUIDES = [
  {
    title: 'Annual Accounts Explained',
    summary: 'What annual accounts are, who needs them, and key deadlines for limited companies.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'Bookkeeping Essentials for Small Businesses',
    summary: 'Core bookkeeping practices, records to keep, and how they support tax and reporting.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'What Management Accounts Are Used For',
    summary: 'How management accounts help you understand performance and make better decisions.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'Payroll Basics for Employers',
    summary: 'PAYE, RTI, payslips, and payroll compliance for small businesses and directors.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'VAT Returns Explained',
    summary: 'VAT registration, return periods, and how to stay compliant with HMRC.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
  {
    title: 'Confirmation Statement Filing Guide',
    summary: 'What the confirmation statement is and when and how to file it with Companies House.',
    categoryTag: 'Accounting',
    href: '/knowledge/accounting-guides',
  },
];

const RELATED_SERVICES = [
  { label: 'Annual Accounts', href: '/services/annual-accounts' },
  { label: 'Bookkeeping', href: '/services/bookkeeping' },
  { label: 'Management Accounts', href: '/services/management-accounts' },
  { label: 'Payroll', href: '/services/payroll' },
  { label: 'VAT Returns', href: '/services/vat-returns' },
  { label: 'Confirmation Statement', href: '/services/confirmation-statement' },
];

export default function AccountingGuidesPage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Accounting Guides"
        heading="Accounting Guides"
        paragraph="This section includes practical accounting guidance for businesses needing a better understanding of records, reporting, payroll, VAT, and compliance responsibilities. Use it to support your day-to-day and year-end obligations."
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GUIDES.map((guide) => (
            <KnowledgeResourceCard
              key={guide.title}
              title={guide.title}
              summary={guide.summary}
              categoryTag={guide.categoryTag}
              ctaText="Read Guide"
              href={guide.href}
            />
          ))}
        </div>
      </section>
      <KnowledgeRelatedLinks title="Related services" links={RELATED_SERVICES} />
      <KnowledgeFinalCTA />
    </>
  );
}
