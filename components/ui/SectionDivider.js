'use client';

export default function SectionDivider() {
  return (
    <div aria-hidden className="relative py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-grayBorder/90 to-transparent" />
          <div className="absolute flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-white shadow-[0_6px_18px_rgba(15,23,42,0.12)] border border-brand-grayBorder flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

