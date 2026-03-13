import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeDeadlineItem from '@/components/knowledge/KnowledgeDeadlineItem';
import KnowledgeRelatedLinks from '@/components/knowledge/KnowledgeRelatedLinks';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

export const metadata = {
  title: 'Tax Calendar | UK Tax & Filing Deadlines | DepoTax',
  description:
    'Key UK tax and filing deadlines: Self Assessment, VAT, corporation tax, annual accounts, PAYE, CIS, and confirmation statements.',
};

const DEADLINES = [
  {
    title: 'Self Assessment',
    timing: '31 January (following tax year)',
    description: 'Paper returns: 31 October. Online returns and balance of tax due: 31 January. Payments on account: 31 January and 31 July.',
  },
  {
    title: 'VAT Returns',
    timing: '1 month and 7 days after period end',
    description: 'Submit return and pay VAT within 1 month and 7 days after the end of your VAT period (often quarterly or monthly).',
  },
  {
    title: 'Corporation Tax',
    timing: '9 months and 1 day after period end',
    description: 'Pay corporation tax 9 months and 1 day after the end of your accounting period. Return due 12 months after period end.',
  },
  {
    title: 'Annual Accounts Filing',
    timing: '9 months after period end',
    description: 'File accounts with Companies House within 9 months of the end of your accounting period (12 months for private companies in first year).',
  },
  {
    title: 'PAYE',
    timing: '22nd of each month (electronic)',
    description: 'If you pay electronically, PAYE is due by the 22nd of the following month. Different rules apply for other payment frequencies.',
  },
  {
    title: 'CIS Returns',
    timing: '19th of each month',
    description: 'Construction Industry Scheme monthly returns must be submitted by the 19th of the following month.',
  },
  {
    title: 'Confirmation Statement',
    timing: 'Annually (at least every 12 months)',
    description: 'File a confirmation statement with Companies House at least once every 12 months to confirm company details are up to date.',
  },
];

const RELATED_LINKS = [
  { label: 'Tax Guides', href: '/knowledge/tax-guides' },
  { label: 'Accounting Guides', href: '/knowledge/accounting-guides' },
  { label: 'FAQs', href: '/knowledge/faqs' },
];

export default function TaxCalendarPage() {
  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="Tax Calendar"
        heading="Tax Calendar"
        paragraph="This page highlights important UK accounting, tax, payroll, and filing deadlines to help businesses and individuals stay aware of key dates. Deadlines can vary by circumstance — use this as a practical reference and confirm with HMRC or your adviser where needed."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-2xl border border-brand-grayBorder overflow-hidden bg-brand-grayLight/30">
          {DEADLINES.map((item) => (
            <KnowledgeDeadlineItem
              key={item.title}
              title={item.title}
              timing={item.timing}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <KnowledgeRelatedLinks title="Related guides" links={RELATED_LINKS} />
      <KnowledgeFinalCTA />
    </>
  );
}
