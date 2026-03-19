import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "@/components/ui/Link";
import WhoWeServeHero from "@/components/who-we-serve/WhoWeServeHero";
import ClientTypesGrid from "@/components/who-we-serve/ClientTypesGrid";
import AudienceDetailSection from "@/components/who-we-serve/AudienceDetailSection";
import { AUDIENCE_DETAIL_SECTIONS } from "@/data/who-we-serve";
import IndustriesSupport from "@/components/who-we-serve/IndustriesSupport";
import WhyClientsChoose from "@/components/who-we-serve/WhyClientsChoose";
import ClientJourney from "@/components/who-we-serve/ClientJourney";
import Testimonials from "@/components/home/Testimonials";
import WhoWeServeCTA from "@/components/who-we-serve/WhoWeServeCTA";
import {
  whoWeServeCategories,
  getWhoWeServePageBySlug,
} from "@/data/whoWeServe";

export const metadata = {
  title:
    "Who We Serve | Accountants for Individuals, Businesses & Landlords | DepoTax",
  description:
    "DepoTax provides accounting and tax services for individuals, startups, limited companies, landlords, and property investors across the UK.",
};

export default function WhoWeServePage() {
  const categories = whoWeServeCategories.map((category) => ({
    ...category,
    pages: (Array.isArray(category.pages) ? category.pages : [])
      .map((slug) => getWhoWeServePageBySlug(slug))
      .filter(Boolean),
  }));

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <WhoWeServeHero />
        <ClientTypesGrid />
        <section
          className="relative py-14 sm:py-16 md:py-20 border-t border-brand-grayBorder/60 bg-white"
          aria-labelledby="who-we-serve-index-heading"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(43,75,107,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(154,0,0,0.08),transparent_32%)] pointer-events-none"
            aria-hidden
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
                Who We Support
              </p>
              <p className="text-base text-brand-text/85 leading-relaxed">
                Browse individuals, businesses, property, and specialist pages
                tailored to specific needs and challenges.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-7">
              {categories.map((category, idx) => (
                <section
                  key={category.slug}
                  aria-labelledby={`category-${category.slug}`}
                  className="rounded-2xl border border-brand-grayBorder/80 bg-white p-5 sm:p-6 md:p-7 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="lg:col-span-4">
                      <div className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase bg-brand-accent/10 text-brand-accent">
                        {category.title}
                      </div>
                      <h3
                        id={`category-${category.slug}`}
                        className="mt-3 text-xl sm:text-2xl font-bold text-brand-navy tracking-tight"
                      >
                        {category.title} Accountants
                      </h3>
                      <p className="mt-3 text-base text-brand-text/85 leading-relaxed">
                        {category.description}
                      </p>
                      <p className="mt-3 text-sm text-brand-text/80 leading-relaxed">
                        {category.intro}
                      </p>
                      <div className="mt-4 inline-flex items-center rounded-lg border border-brand-grayBorder bg-brand-grayLight/50 px-3 py-2 text-xs font-medium text-brand-navy">
                        {category.pages.length} specialist pages in this
                        category
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {category.pages.map((page) => (
                          <Link
                            key={page.slug}
                            href={`/who-we-serve/${page.slug}`}
                            className={`group rounded-xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 ${
                              idx % 2 === 0
                                ? "border-brand-grayBorder bg-white hover:border-brand-accent/35 hover:bg-brand-accent/5"
                                : "border-brand-grayBorder bg-brand-grayLight/20 hover:border-brand-navy/30 hover:bg-white"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <p className="text-base font-semibold text-brand-navy group-hover:text-brand-accent transition-colors">
                                {page.pageTitle || page.title}
                              </p>
                              <span
                                className="mt-1 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-hidden
                              >
                                →
                              </span>
                            </div>
                            <p className="mt-2 text-sm text-brand-text/80 line-clamp-2">
                              {page.metaDescription}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
        {AUDIENCE_DETAIL_SECTIONS.map((section) => (
          <AudienceDetailSection
            key={section.id}
            id={section.id}
            label={section.label}
            heading={section.heading}
            paragraph={section.paragraph}
            supportPoints={section.supportPoints}
            serviceLinks={section.serviceLinks}
            ctaLabel={section.ctaLabel}
            ctaHref={section.ctaHref}
            layout={section.layout}
            variant={section.variant}
          />
        ))}
        <IndustriesSupport />
        <WhyClientsChoose />
        <ClientJourney />
        <Testimonials
          title="Trusted by Clients Across the UK"
          sectionId="who-we-serve-reviews"
          maxReviews={4}
          sectionLabel="Client Reviews"
          introParagraph="Feedback from clients who trust DepoTax for practical and dependable accounting support."
        />
        <WhoWeServeCTA />
      </main>
      <Footer />
    </>
  );
}
