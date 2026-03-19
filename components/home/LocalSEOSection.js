import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { getSimplifiedAreasForGrid } from '@/lib/locations';

const GRID_ITEMS = [
  {
    number: '01',
    heading: 'Credible Team Network',
    description: 'Our team is comprised of qualified accountants, who have valuable experience in advising, monitoring, and coordinating with clients to make sure that all necessary regulatory requirements are fulfilled.',
  },
  {
    number: '02',
    heading: 'Modern Infrastructure',
    description: 'We are a friendly & approachable, independent registered firm of Professional accountants, operating from welcoming offices suited with most cutting edge and digital infrastructure we can find in this line of work.',
  },
  {
    number: '03',
    heading: 'Diverse Abilities',
    description: 'We deal with every aspect of your tax, ranging from the preparation and submission of your self-assessment tax returns to pro-actively managing your tax affairs for partnerships, Limited companies and contractorship.',
  },
  {
    number: '04',
    heading: 'Professional Work Ethics',
    description: 'DepoTax has the ability to offer comprehensive tailor-made solutions to its diversified clientele with utmost professionalism. We don\'t consider any job small and give our whole to any and every client.',
  },
  {
    number: '05',
    heading: 'Always Meeting the Deadlines',
    description: 'Our highly experienced and skilled management team of SFA is capable of performing complex and daunting tasks seamlessly while meeting tight deadlines.',
  },
  {
    number: '06',
    heading: 'Long Term Relationships',
    description: 'Our team is focused on building long-term relationships and craft practical, and affordable solutions for the best interest of our respectable clients. You won\'t believe it but we hold 5.0 Star rating on our Google Profile.',
    linkUrl: 'https://g.page/r/LTHI2u6PZ00SOMAjT',
    linkLabel: 'Google Profile',
  },
];

export default function LocalSEOSection() {
  const topLocations = getSimplifiedAreasForGrid().slice(0, 12);

  return (
    <section
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="local-seo-heading"
    >
      <SectionBackgroundLabel label="ACCOUNTING" position="left-mid" />
      <SectionAmbient />
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2
              id="local-seo-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Local Accounting </span>
              <span className="text-[#9a0000]">Services</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-2 leading-relaxed">
              Trusted Accountants and Tax Consultants for Businesses and Individuals Across the UK
            </p>
            {topLocations.length > 0 && (
              <div className="reveal-item reveal-item-delay-2 mt-4 flex flex-wrap justify-center gap-2">
                {topLocations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="inline-flex items-center rounded-full border border-brand-grayBorder px-3 py-1.5 text-xs sm:text-sm text-brand-text hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
                  >
                    {location.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 2x3 grid with dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-brand-grayBorder">
            {GRID_ITEMS.map((item, index) => {
              const parts = item.linkUrl && item.description.includes(item.linkLabel)
                ? item.description.split(item.linkLabel)
                : null;
              return (
                <div
                  key={item.number}
                  className={`reveal-item ${index < 3 ? 'reveal-item-delay-3' : 'reveal-item-delay-4'} p-6 sm:p-8 border-b border-r border-brand-grayBorder sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0`}
                >
                  <span className="block text-3xl sm:text-4xl font-bold text-brand-accent mb-3" aria-hidden>
                    {item.number}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-brand-text/80 leading-relaxed">
                    {parts ? (
                      <>
                        {parts[0]}
                        <Link
                          href={item.linkUrl}
                          className="font-semibold text-brand-accent underline hover:no-underline"
                        >
                          {item.linkLabel}
                        </Link>
                        {parts[1] || ''}
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
