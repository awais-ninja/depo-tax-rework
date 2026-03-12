import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import CoreServices from "@/components/home/CoreServices";

import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingPreview from "@/components/home/PricingPreview";
import FaqSection from "@/components/home/FaqSection";
import OfficeLocations from "@/components/home/OfficeLocations";
import AccountingSoftware from "@/components/home/AccountingSoftware";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import InsightsSection from "@/components/home/InsightsSection";
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
        <TrustStrip />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <WhoWeHelp />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <CoreServices />
        <SectionDivider />
        <AccountingSoftware />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <PricingPreview />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <OfficeLocations />
      </main>
      <Footer />
    </>
  );
}
