"use client";

import Link from "@/components/ui/Link";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import TestimonialsBackground from "@/components/ui/TestimonialsBackground";
import SectionBackgroundLabel from "@/components/ui/SectionBackgroundLabel";
import SectionAmbient from "@/components/ui/SectionAmbient";

const SERVICE_IMAGES = [
  "/services/bookkeeping.jpg",
  "/services/payroll.jpg",
  "/services/tax-return.jpg",
  "/services/management-accounts.jpg",
  "/services/property-account-services.jpg",
  "/services/business-startup.jpg",
];

const SERVICES = [
  {
    title: "Bookkeeping Services",
    description:
      "Accurate bookkeeping services for small businesses, limited companies and startups using modern cloud accounting tools.",
    bullets: [
      "Cloud bookkeeping support",
      "Better financial records",
      "Ongoing monthly accuracy",
    ],
    href: "/services/bookkeeping",
    chip: "Popular Service",
  },
  {
    title: "Payroll Services",
    description:
      "Reliable payroll and PAYE services including payslips, RTI submissions, pension support and HMRC payroll compliance.",
    bullets: [
      "PAYE and RTI submissions",
      "Pension support",
      "HMRC payroll compliance",
    ],
    href: "/services/payroll",
  },
  {
    title: "Self Assessment & Tax Returns",
    description:
      "Expert help with self assessment tax returns, personal tax returns and HMRC filing for sole traders, landlords and individuals.",
    bullets: [
      "Self assessment tax returns",
      "Personal tax return support",
      "HMRC filing assistance",
    ],
    href: "/services/self-assessment",
    chip: "For Individuals",
  },
  {
    title: "Management Accounts",
    description:
      "Clear management accounts, profit and loss reports and cash flow insight to help businesses make better financial decisions.",
    bullets: [
      "Profit and loss reporting",
      "Cash flow visibility",
      "Better financial decisions",
    ],
    href: "/services/management-accounts",
  },
  {
    title: "Property Accounts Services",
    description:
      "Specialist property accounting for landlords, HMO owners and investors including rental accounts and tax reporting support.",
    bullets: [
      "Rental income reporting",
      "Landlord tax support",
      "Property portfolio accounting",
    ],
    href: "/services/landlord-accounting",
    chip: "Property Specialists",
  },
  {
    title: "Business Startup Support",
    description:
      "Startup accounting support including company formation, financial setup, bookkeeping structure and tax planning for new businesses.",
    bullets: [
      "Company formation support",
      "Financial setup guidance",
      "Startup tax planning",
    ],
    href: "/services/startup-support",
    chip: "For Growing Businesses",
  },
];

const CTA_LABELS = [
  "Explore service",
  "View details",
  "Get help",
  "Learn more",
  "Read more",
  "View details",
];

function ServiceRow({ service, index, reverse }) {
  const delay =
    index < 2
      ? "reveal-item-delay-3"
      : index < 4
        ? "reveal-item-delay-4"
        : "reveal-item-delay-5";
  const num = String(index + 1).padStart(2, "0");
  const ctaLabel = CTA_LABELS[index] || "Learn more";

  const content = (
    <div
      className={`reveal-item ${delay} relative pl-6 sm:pl-8 py-2 border-l-4 border-brand-accent lg:border-l-4`}
    >
      <span
        className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-brand-accent flex items-center justify-center text-[10px] font-bold text-brand-accent"
        aria-hidden
      >
        {num}
      </span>
      {service.chip && (
        <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-accent border border-brand-accent/50 rounded px-2.5 py-1 mb-4">
          {service.chip}
        </span>
      )}
      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-brand-text/80 text-sm sm:text-base leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="space-y-2.5 mb-6">
        {service.bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2.5 text-sm text-brand-text/85"
          >
            <svg
              className="w-4 h-4 text-brand-accent shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-200 min-h-[44px]"
      >
        {ctaLabel}
        <span
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        >
          •
        </span>
      </Link>
    </div>
  );
  const imageBlock = (
    <div
      className={`reveal-item ${delay} group relative w-full max-w-[280px] sm:max-w-sm md:max-w-lg mx-auto lg:max-w-none lg:mx-0`}
    >
      <div
        className="absolute inset-0 top-3 left-3 sm:top-4 sm:left-4 rounded-2xl bg-brand-accent/15 -z-10"
        aria-hidden
      />
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        <Image
          src={SERVICE_IMAGES[index]}
          alt=""
          fill
          className="object-cover object-center transition-transform duration-500 md:group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28"
          aria-hidden
        >
          <div
            className="absolute bottom-0 right-0 w-full h-full bg-brand-accent/90"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
        <span
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm border border-white/80 flex items-center justify-center text-sm font-bold text-brand-accent shadow-md"
          aria-hidden
        >
          {num}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: card layout – image on top, content below in one card */}
      <div className={`lg:hidden reveal-item ${delay}`}>
        <div
          className={`rounded-2xl border border-brand-grayBorder bg-white overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.06)] ${index > 0 ? "mt-6" : ""}`}
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={SERVICE_IMAGES[index]}
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              aria-hidden
            />
            <span
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-bold text-brand-accent shadow-md"
              aria-hidden
            >
              {num}
            </span>
            {service.chip && (
              <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-white bg-brand-accent/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                {service.chip}
              </span>
            )}
          </div>
          <div className="p-5 sm:p-6 text-center">
            <h3 className="text-lg font-bold text-brand-navy mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-brand-text/80 leading-relaxed mb-4">
              {service.description}
            </p>
            <ul className="space-y-2 mb-5 text-left inline-block">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-brand-text/85"
                >
                  <svg
                    className="w-4 h-4 text-brand-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="inline-flex items-center justify-center gap-2 w-full min-h-[48px] rounded-xl border-2 border-brand-accent px-5 py-3 text-sm font-semibold text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-200"
            >
              {ctaLabel}
              <span aria-hidden>•</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: original two-column layout */}
      <div
        className={`hidden lg:grid grid-cols-2 gap-16 items-center min-h-0 ${index > 0 ? "pt-20" : ""}`}
      >
        <div className={reverse ? "order-2" : ""}>{content}</div>
        <div className={reverse ? "order-1" : ""}>{imageBlock}</div>
      </div>
    </>
  );
}

export default function CoreServices() {
  return (
    <section
      className="relative pt-14 pb-16 lg:pt-24 lg:pb-32 bg-white overflow-hidden"
      aria-labelledby="core-services-heading"
    >
      <TestimonialsBackground />
      <SectionBackgroundLabel label="SERVICES" position="right-top" />
      <SectionAmbient />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <h2
              id="core-services-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Core </span>
              <span className="text-[#9a0000]">Services</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-xl sm:text-2xl font-bold text-brand-navy max-w-3xl mx-auto mb-3">
              Bookkeeping, Payroll, Tax Returns & Accounting Services in the UK
            </p>
            <p className="reveal-item reveal-item-delay-2 text-center text-brand-text/80 max-w-2xl mx-auto">
              DepoTax provides expert bookkeeping, payroll, tax return, business
              accounting and property accounting services for companies,
              contractors, sole traders, landlords and growing businesses across
              the UK.
            </p>
          </div>

          <div className="space-y-0 lg:space-y-0">
            {SERVICES.map((service, i) => (
              <ServiceRow
                key={service.title}
                service={service}
                index={i}
                reverse={i % 2 === 1}
              />
            ))}
          </div>

          <div className="text-center mt-14 lg:mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-base font-semibold text-white hover:bg-brand-accentDark transition-colors duration-200"
            >
              See more services
              <span aria-hidden>•</span>
            </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
