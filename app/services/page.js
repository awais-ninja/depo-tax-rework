import ServicesHero from '@/components/services/ServicesHero';
import ServicesExplore from '@/components/services/ServicesExplore';
import ServicesWhyChoose from '@/components/services/ServicesWhyChoose';
import ServicesHowWeWork from '@/components/services/ServicesHowWeWork';
import ServicesFinalCTA from '@/components/services/ServicesFinalCTA';
import { getCategorySectionsWithServices } from '@/components/services/servicesCategoryContent';

export const metadata = {
  title: 'Services',
  description:
    'Accounting, tax, payroll, and advisory services for businesses and individuals across the UK. DepoTax offers compliance, tax planning, and growth support.',
};

/**
 * Services landing page — Hero, unified services explore (tabs + category blocks), Why Choose, How We Work, Final CTA.
 */
export default function ServicesPage() {
  const sections = getCategorySectionsWithServices();

  return (
    <>
      <ServicesHero />
      <ServicesExplore sections={sections} />
      <ServicesWhyChoose />
      <ServicesHowWeWork />
      <ServicesFinalCTA />
    </>
  );
}
