'use client';

import Link from '@/components/ui/Link';
import { IconCalendarDays, IconClock } from '@/components/ui/Icons';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

export default function ContactMeetingInfo() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 sm:py-14 border-t border-brand-grayBorder/60"
      aria-labelledby="meeting-info-heading"
    >
      <SectionBackgroundLabel label="MEETINGS" position="left-top" size="md" />
      <SectionAmbient />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="meeting-info-heading" className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-6">
          Book a Meet & Greet
        </h2>
        <div className="rounded-2xl border border-brand-grayBorder bg-brand-grayLight/30 p-6 sm:p-8 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
          <div className="flex gap-4 mb-4">
            <span className="shrink-0 w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
              <IconCalendarDays className="w-5 h-5" aria-hidden />
            </span>
            <div className="space-y-3 text-brand-text/90">
              <p>
                You can arrange a meeting with our team at a time convenient for you.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 items-center text-sm">
                <span className="inline-flex items-center gap-2">
                  <IconClock className="w-4 h-4 text-brand-accent" aria-hidden />
                  Our office is open Monday to Friday from 10:00 AM to 5:00 PM.
                </span>
              </div>
              <p>
                Saturday meetings are available for pre-booked appointments only.
              </p>
              <p>
                If someone wishes to schedule a meeting on Sunday, the appointment must be arranged at least two days in advance.
              </p>
            </div>
          </div>
          <p className="text-sm text-brand-text/85 pt-2 border-t border-brand-grayBorder/60">
            If you have any questions, feel free to contact us using the details below or complete the enquiry form.
          </p>
          <div className="mt-4">
            <Link
              href="#contact-form"
              className="text-sm font-semibold text-brand-accent hover:underline"
            >
              Go to enquiry form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
