'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';

const articles = [
  {
    category: 'Tax',
    title: 'Tax Planning Tips for Small Businesses',
    excerpt: 'Practical ways to reduce your tax bill and plan ahead for the year end, from allowances to timing of income and expenses.',
    href: '/insights/tax-planning-tips',
  },
  {
    category: 'Property',
    title: 'A Simple Guide to SPV Accounting',
    excerpt: 'What SPV accounting involves, what to keep on top of, and how an accountant can help property investors stay compliant.',
    href: '/insights/spv-accounting-guide',
  },
  {
    category: 'Landlords',
    title: 'What Landlords Need to Know About Tax Returns',
    excerpt: 'Rental income, allowable expenses, and key deadlines for landlord tax returns in the UK.',
    href: '/insights/landlord-tax-returns',
  },
]

export default function InsightsSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-white">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold text-center mb-4">
            Insights, Tax Guides & Business Advice
          </h2>
          <p className="reveal-item reveal-item-delay-2 text-center text-brand-text/80 max-w-2xl mx-auto mb-12">
            Practical guides and updates to help you stay on top of tax and accounting.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article
                key={article.title}
                className={`reveal-item ${i === 0 ? 'reveal-item-delay-3' : i === 1 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'} rounded-xl border border-brand-grayBorder overflow-hidden card-hover`}
              >
              <div className="h-2 bg-brand-navy" aria-hidden />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-2">{article.category}</p>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  <Link href={article.href} className="hover:underline transition-colors duration-200">{article.title}</Link>
                </h3>
                <p className="text-sm text-brand-text/80 mb-4">{article.excerpt}</p>
                <Link href={article.href} className="text-brand-red font-semibold text-sm hover:underline transition-colors duration-200">
                  Read More
                </Link>
              </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
