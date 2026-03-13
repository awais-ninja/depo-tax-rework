'use client';

import { useState } from 'react';
import KnowledgeCategoryHero from '@/components/knowledge/KnowledgeCategoryHero';
import KnowledgeFaqGroup from '@/components/knowledge/KnowledgeFaqGroup';
import KnowledgeFinalCTA from '@/components/knowledge/KnowledgeFinalCTA';

const FAQ_GROUPS = [
  {
    groupTitle: 'General Accounting',
    items: [
      {
        question: 'What does an accountant do for a small business?',
        answer:
          'An accountant can help with bookkeeping, preparing annual accounts, tax returns, payroll, VAT, and compliance with Companies House and HMRC. They can also advise on tax planning, cashflow, and business structure so you stay organised and compliant.',
      },
      {
        question: 'What records should I keep for accounting purposes?',
        answer:
          'Keep records of sales and income, purchases and expenses, bank statements, receipts, invoices, and supporting documents. HMRC typically requires records to be kept for at least five years for Self Assessment and six years for many business and company records.',
      },
    ],
  },
  {
    groupTitle: 'Tax',
    items: [
      {
        question: 'Do I need to file a Self Assessment tax return?',
        answer:
          'You usually need to file if you are self-employed, a company director, a landlord receiving rental income, or have other income not fully taxed at source. HMRC may also require you to file if your income is over certain thresholds or if you have been sent a notice to file.',
      },
      {
        question: 'What is corporation tax?',
        answer:
          'Corporation tax is a tax on the profits of limited companies and some other organisations. It is paid to HMRC. The rate and rules depend on the level of profits and the financial year. Returns and payments have specific deadlines linked to your accounting period.',
      },
    ],
  },
  {
    groupTitle: 'Compliance',
    items: [
      {
        question: 'When are annual accounts due?',
        answer:
          'For limited companies, accounts are generally due at Companies House 9 months after the end of the accounting period. You may have a later deadline for sending accounts to HMRC with your corporation tax return. Deadlines can differ for the first year or other circumstances.',
      },
      {
        question: 'What is a confirmation statement?',
        answer:
          'A confirmation statement is an annual filing with Companies House that confirms your company’s registered details (directors, address, shareholders, etc.) are up to date. It must be filed at least once every 12 months.',
      },
    ],
  },
  {
    groupTitle: 'Payroll / VAT',
    items: [
      {
        question: 'Can an accountant help manage payroll?',
        answer:
          'Yes. An accountant can run payroll, produce payslips, submit RTI to HMRC, and handle pension reporting. This helps you stay compliant with PAYE and avoid penalties.',
      },
      {
        question: 'How often are VAT returns submitted?',
        answer:
          'VAT returns are usually submitted quarterly (every 3 months), though some businesses submit monthly or annually. The return and any VAT due must be sent to HMRC within 1 month and 7 days after the end of the period.',
      },
    ],
  },
];

export default function KnowledgeFaqsContent() {
  const [openIndex, setOpenIndex] = useState(null);
  let index = 0;

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <KnowledgeCategoryHero
        sectionLabel="FAQs"
        heading="Frequently Asked Questions"
        paragraph="This page provides answers to common questions about accounting, tax returns, business compliance, payroll, and related topics. For tailored advice, get in touch with the DepoTax team."
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {FAQ_GROUPS.map((group) => {
          const startIndex = index;
          index += group.items.length;
          return (
            <KnowledgeFaqGroup
              key={group.groupTitle}
              groupTitle={group.groupTitle}
              items={group.items}
              openIndex={openIndex}
              onToggle={handleToggle}
              startIndex={startIndex}
            />
          );
        })}
      </section>
      <KnowledgeFinalCTA />
    </>
  );
}
