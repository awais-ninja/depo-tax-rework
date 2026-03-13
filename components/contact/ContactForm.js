'use client';

import { useState } from 'react';
import Link from '@/components/ui/Link';
import { HiCalendarDays } from 'react-icons/hi2';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const SERVICE_OPTIONS = [
  'Accounting Services',
  'Tax Services',
  'Business Advisory',
  'Property Accounting',
  'General Enquiry',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: form would be sent to API or email service
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-white py-12 sm:py-14 border-t border-brand-grayBorder/60"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-form-heading" className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-8">
          Send an Enquiry
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-brand-grayBorder bg-brand-grayLight/30 p-8 text-center">
                <p className="text-brand-navy font-semibold mb-2">Thank you for your enquiry.</p>
                <p className="text-sm text-brand-text/85">
                  We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-brand-grayBorder px-4 py-3 text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Email Address <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-brand-grayBorder px-4 py-3 text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    className="w-full rounded-xl border border-brand-grayBorder px-4 py-3 text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent"
                    placeholder="+44 ..."
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full rounded-xl border border-brand-grayBorder px-4 py-3 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent bg-white"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-brand-grayBorder px-4 py-3 text-brand-navy placeholder:text-brand-text/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent resize-y min-h-[120px]"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                >
                  Send Message
                </button>
                <p className="text-xs text-brand-text/70 mt-4">
                  Your information will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-grayBorder bg-brand-grayLight/30 p-6 lg:sticky lg:top-24">
              <span className="flex w-11 h-11 rounded-xl bg-brand-accent/10 items-center justify-center text-brand-accent mb-4">
                <HiCalendarDays className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-2">
                Prefer to meet?
              </h3>
              <p className="text-sm text-brand-text/85 mb-5">
                Book a consultation at a time that suits you. Our team is available Monday to Friday, with Saturday and Sunday by arrangement.
              </p>
              <Link
                href={BOOK_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
