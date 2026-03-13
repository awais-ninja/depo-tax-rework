'use client';

import Image from 'next/image';
import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const OUR_STORY_IMAGE_MAIN = '/aboutus/our-story-image.jpg';
const OUR_STORY_IMAGE_SECONDARY = '/aboutus/our-story-image-2.jpg';

export default function AboutOurStory() {
  return (
    <section
      id="our-story"
      className="relative py-10 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
      aria-labelledby="our-story-heading"
    >
      {/* Subtle diagonal lines — top-left and bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(120deg, transparent, transparent 40px, #1e293b 40px, #1e293b 41px),
            repeating-linear-gradient(-60deg, transparent, transparent 40px, #1e293b 40px, #1e293b 41px)
          `,
          backgroundSize: '100% 100%',
        }}
        aria-hidden
      />

      <SectionBackgroundLabel label="OUR STORY" position="left-mid" size="md" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left: two overlapping images — main (larger, top-right), secondary (smaller, overlapping bottom-left) */}
          <div className="order-2 lg:order-1 flex-shrink-0 w-full max-w-[280px] sm:max-w-[340px] mx-auto lg:max-w-[420px] xl:max-w-[480px]">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[240px] sm:min-h-0">
              {/* Main image — larger, positioned top-right of the block */}
              <div className="absolute top-0 right-0 w-[82%] sm:w-[82%] h-[72%] sm:h-[78%] rounded-xl overflow-hidden shadow-lg sm:shadow-xl border border-white/80 bg-brand-grayLight">
                <Image
                  src={OUR_STORY_IMAGE_MAIN}
                  alt="DepoTax — our story"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 230px, (max-width: 1024px) 340px, 480px"
                />
              </div>
              {/* Secondary image — smaller, overlapping bottom-left of main */}
              <div className="absolute bottom-0 left-0 w-[52%] sm:w-[52%] h-[46%] sm:h-[52%] rounded-xl overflow-hidden shadow-lg sm:shadow-xl border-2 border-white bg-brand-grayLight z-10">
                <Image
                  src={OUR_STORY_IMAGE_SECONDARY}
                  alt="DepoTax team"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 146px, (max-width: 1024px) 180px, 280px"
                />
              </div>
            </div>
          </div>

          {/* Right: heading, paragraph, CTA — max-width ~720px for readability */}
          <div className="order-1 lg:order-2 flex-1 min-w-0 max-w-[720px] lg:max-w-none">
            <h2
              id="our-story-heading"
              className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#2b4b6b] mb-3 sm:mb-5"
            >
              Our Story
            </h2>
            <p className="text-[15px] sm:text-lg text-brand-text/90 leading-[1.7] mb-5 sm:mb-6">
              DepoTax was built to provide reliable, professional, and practical accounting and tax support for businesses and individuals in the UK. From the start, we have focused on clear advice, dependable service, and helping our clients stay compliant while supporting their growth and financial confidence.
            </p>
            <p className="text-[15px] sm:text-lg text-brand-text/90 leading-[1.7] mb-5 sm:mb-6">
              We believe in long-term relationships rather than one-off transactions. Whether you are a sole trader, a limited company, a landlord, or a growing business, we aim to be the accounting and tax partner you can rely on—year in, year out.
            </p>
            <p className="text-[15px] sm:text-lg text-brand-text/90 leading-[1.7] mb-6 sm:mb-8">
              That commitment has allowed us to grow into a trusted accounting and tax consultancy practice, serving clients across London and the UK with the same standards of care and professionalism we set from day one.
            </p>
            <Link
              href="/about#meet-the-team"
              className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-brand-navy hover:bg-brand-navy/90 active:bg-brand-navy/95 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
