import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustMetricsSection from "@/components/home/TrustMetricsSection";
import SectionDivider from "@/components/ui/SectionDivider";

const TrustStrip = dynamic(() => import("@/components/home/TrustStrip"), {
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: true,
});
const WhoWeHelp = dynamic(() => import("@/components/home/WhoWeHelp"), {
  ssr: true,
});
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), {
  ssr: true,
});
const WhyDepoTaxComparisonSection = dynamic(
  () => import("@/components/home/WhyDepoTaxComparisonSection"),
  { ssr: true },
);
const MeetTheTeam = dynamic(() => import("@/components/home/MeetTheTeam"), {
  ssr: true,
});
const CoreServices = dynamic(() => import("@/components/home/CoreServices"), {
  ssr: true,
});
const IndustriesWeServe = dynamic(
  () => import("@/components/home/IndustriesWeServe"),
  { ssr: true },
);
const AccountingSoftware = dynamic(
  () => import("@/components/home/AccountingSoftware"),
  { ssr: true },
);
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"), {
  ssr: true,
});
const PricingPreview = dynamic(
  () => import("@/components/home/PricingPreview"),
  { ssr: true },
);
const UKTaxDeadlines = dynamic(
  () => import("@/components/home/UKTaxDeadlines"),
  { ssr: true },
);
const FaqSection = dynamic(() => import("@/components/home/FaqSection"), {
  ssr: true,
});
const LocalSEOSection = dynamic(
  () => import("@/components/home/LocalSEOSection"),
  { ssr: true },
);
const OfficeLocations = dynamic(
  () => import("@/components/home/OfficeLocations"),
  { ssr: true },
);
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"), {
  ssr: true,
});

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
