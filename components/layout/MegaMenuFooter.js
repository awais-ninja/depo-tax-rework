import Link from "@/components/ui/Link";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const iconClass = "w-4 h-4 shrink-0";

export default function MegaMenuFooter({ onNavigate, compact = false }) {
  return (
    <div
      className={`border-t border-brand-grayBorder bg-brand-grayLight/50 ${compact ? "px-0 py-4 mt-6" : "px-6 py-4 lg:px-8 lg:py-5 mt-6"}`}
    >
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 ${compact ? "lg:gap-6" : "lg:gap-8"}`}
      >
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-brand-navy text-sm">
            Feeling lost with finances? We&apos;re here to help.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-text">
            <Link
              href="mailto:info@depotax.co.uk"
              className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-accent transition-colors duration-200"
              onClick={onNavigate}
            >
              <HiEnvelope className={iconClass} />
              <span>info@depotax.co.uk</span>
            </Link>
            <Link
              href="tel:+442036599254"
              className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-accent transition-colors duration-200"
              onClick={onNavigate}
            >
              <HiPhone className={iconClass} />
              <span>+44 20 3659 9254 Phone</span>
            </Link>
            <Link
              href="https://wa.me/447392438213"
              className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-accent transition-colors duration-200"
              onClick={onNavigate}
            >
              <FaWhatsapp className={iconClass} />
              <span>+44 739 243 8213 </span>
            </Link>
            <Link
              href="https://wa.me/447392438213"
              className="inline-flex items-center gap-1.5 text-brand-navy hover:text-brand-accent transition-colors duration-200"
              onClick={onNavigate}
            >
              <FaWhatsapp className={iconClass} />
              <span>+44 739 243 8213 </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="https://www.picktime.com/aazizandco"
              className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-brand-accent text-white hover:bg-brand-accentDark transition-colors duration-200"
              onClick={onNavigate}
            >
              Schedule a Meeting
            </Link>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-colors duration-200"
              onClick={onNavigate}
            >
              Quick Quote
            </Link>
          </div>
        </div>
        <div className="shrink-0 rounded-lg bg-brand-accent text-white p-3 max-w-[240px]">
          <p className="text-xs font-semibold text-white">
            Refer to a friend or family &amp; earn up to 20% discount.
          </p>
        </div>
      </div>
    </div>
  );
}
