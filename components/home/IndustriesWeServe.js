'use client';

import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import {
  IconUserGroup,
  IconHomeModern,
  IconBuildingOffice2,
  IconUser,
  IconWrenchScrewdriver,
  IconRocketLaunch,
  IconShoppingCart,
  IconBuildingStorefront,
} from '@/components/ui/Icons';

const INDUSTRIES = [
  {
    title: 'Contractors',
    description: 'Sector-focused support for contractors—IR35, limited company accounts and tax efficiency for freelancers and independents.',
    Icon: IconUserGroup,
  },
  {
    title: 'Property Landlords',
    description: 'Expertise in the property sector: rental accounts, landlord tax, portfolio reporting and HMO compliance.',
    Icon: IconHomeModern,
  },
  {
    title: 'Limited Companies',
    description: 'End-to-end support for the limited company sector—from incorporation to year-end accounts and corporation tax.',
    Icon: IconBuildingOffice2,
  },
  {
    title: 'Self-Employed Individuals',
    description: 'Dedicated to the self-employed sector: self assessment, record-keeping, and tax planning for sole traders.',
    Icon: IconUser,
  },
  {
    title: 'Construction (CIS Contractors)',
    description: 'CIS sector specialists—deductions, rebates, payroll and compliance for construction and subcontractors.',
    Icon: IconWrenchScrewdriver,
  },
  {
    title: 'Startups & New Businesses',
    description: 'Built for the startup sector: company formation, early-stage accounts and growth-focused tax advice.',
    Icon: IconRocketLaunch,
  },
  {
    title: 'E-commerce Businesses',
    description: 'Sector-specific support for online retail—multi-channel sales, VAT, inventory and seller-side reporting.',
    Icon: IconShoppingCart,
  },
  {
    title: 'Small Businesses',
    description: 'Day-to-day accounting and tax for the small business sector—bookkeeping, VAT and compliance nationwide.',
    Icon: IconBuildingStorefront,
  },
];

function IndustryCard({ title, description, Icon, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} group rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] md:hover:border-brand-accent/25 md:hover:-translate-y-0.5 text-center md:text-left`}
    >
      <div
        className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4 transition-colors duration-200 md:group-hover:bg-brand-accent md:group-hover:text-white mx-auto md:mx-0"
        aria-hidden
      >
        <Icon className="w-6 h-6" aria-hidden />
      </div>
      <h3 className="text-base font-semibold text-brand-navy mb-2">{title}</h3>
      <p className="text-sm text-brand-text/85 leading-relaxed">{description}</p>
    </article>
  );
}

export default function IndustriesWeServe() {
  return (
    <section
      className="relative pt-14 pb-16 md:pt-18 md:pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <SectionBackgroundLabel label="INDUSTRIES" position="left-bottom" />
      <SectionAmbient />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              id="industries-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Industries We </span>
              <span className="text-[#9a0000]">Serve</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-xl sm:text-2xl font-bold text-brand-navy max-w-3xl mx-auto mb-3">
              Specialist accounting and tax support for key business sectors across the UK
            </p>
            <p className="reveal-item reveal-item-delay-2 text-center text-brand-text/90 max-w-2xl mx-auto">
              From contractors and property to retail and construction—we bring sector-specific expertise so your accounts and tax are in the right hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                Icon={industry.Icon}
                delayClass={
                  i < 2 ? 'reveal-item-delay-3' : i < 4 ? 'reveal-item-delay-4' : 'reveal-item-delay-5'
                }
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
