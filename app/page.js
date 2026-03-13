import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustMetricsSection from "@/components/home/TrustMetricsSection";
import TrustStrip from "@/components/home/TrustStrip";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyDepoTaxComparisonSection from "@/components/home/WhyDepoTaxComparisonSection";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import CoreServices from "@/components/home/CoreServices";
import PricingPreview from "@/components/home/PricingPreview";
import UKTaxDeadlines from "@/components/home/UKTaxDeadlines";
import FaqSection from "@/components/home/FaqSection";
import OfficeLocations from "@/components/home/OfficeLocations";
import AccountingSoftware from "@/components/home/AccountingSoftware";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import LocalSEOSection from "@/components/home/LocalSEOSection";
import FinalCTA from "@/components/home/FinalCTA";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata = {
  title: "Home | DepoTax",
  description:
    "Expert tax planning, bookkeeping, payroll and accounting for contractors, limited companies, self-employed professionals, landlords and SPVs. Trusted since 2010. Fixed fee packages.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SectionDivider />
        <TrustMetricsSection />
        <SectionDivider />
        <TrustStrip />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <WhoWeHelp />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <WhyDepoTaxComparisonSection />
        <SectionDivider />
        <MeetTheTeam />
        <SectionDivider />
        <CoreServices />
        <SectionDivider />
        <IndustriesWeServe />
        <SectionDivider />
        <AccountingSoftware />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <PricingPreview />
        <SectionDivider />
        <UKTaxDeadlines />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <LocalSEOSection />
        <SectionDivider />
        <OfficeLocations />
        <SectionDivider />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
