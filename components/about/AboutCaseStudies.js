"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import SectionBackgroundLabel from "@/components/ui/SectionBackgroundLabel";
import {
  ABOUT_CASE_STUDIES_INTRO,
  ABOUT_CASE_STUDIES,
} from "./aboutCaseStudiesData";

function CaseStudyCard({ study, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] md:hover:border-brand-accent/10 min-h-0`}
      aria-labelledby={`case-study-${study.id}-title`}
    >
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-accent mb-2">
        {study.clientType}
      </p>
      <h3
        id={`case-study-${study.id}-title`}
        className="text-lg sm:text-xl font-bold text-brand-navy mb-4"
      >
        {study.title}
      </h3>
      <dl className="space-y-3 flex-1">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-brand-text/80 mb-1">
            Challenge
          </dt>
          <dd className="text-sm text-brand-text/85 leading-relaxed">
            {study.challenge}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-brand-text/80 mb-1">
            Support
          </dt>
          <dd className="text-sm text-brand-text/85 leading-relaxed">
            {study.support}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-brand-text/80 mb-1">
            Outcome
          </dt>
          <dd className="text-sm text-brand-text/85 leading-relaxed">
            {study.outcome}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function AboutCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="case-studies-heading"
    >
      <SectionBackgroundLabel
        label="CASE STUDIES"
        position="right-mid"
        size="md"
      />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2
              id="case-studies-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Case </span>
              <span className="text-[#9a0000]">Studies</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 mt-4 text-base text-brand-text/85 leading-relaxed">
              {ABOUT_CASE_STUDIES_INTRO}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {ABOUT_CASE_STUDIES.map((study, i) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                delayClass={
                  i === 0
                    ? "reveal-item-delay-3"
                    : i === 1
                      ? "reveal-item-delay-4"
                      : "reveal-item-delay-5"
                }
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
