'use client';

/**
 * Large faded background text behind section heading.
 * Visible only on md and lg (desktop/medium); hidden on mobile.
 * Position varies per section; animates left-to-right or right-to-left.
 */
const POSITIONS = {
  'right-top': 'right-12 top-24',
  'right-mid': 'right-8 top-1/2 -translate-y-1/2',
  'right-bottom': 'right-12 bottom-20',
  'left-top': 'left-8 top-24',
  'left-mid': 'left-6 top-1/2 -translate-y-1/2',
  'left-bottom': 'left-8 bottom-20',
  'center-top': 'left-1/2 -translate-x-1/2 top-20',
  'center-mid': 'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
};

export default function SectionBackgroundLabel({ label, position = 'right-top', size = 'lg' }) {
  const positionClass = POSITIONS[position] || POSITIONS['right-top'];
  const sizeClass = size === 'lg' ? 'text-[10rem]' : 'text-[8rem]';
  const isLeft = position.startsWith('left');
  const animationClass = isLeft ? 'animate-bg-label-rtl' : 'animate-bg-label-ltr';
  return (
    <div
      className={`hidden md:block absolute ${positionClass} text-brand-accent opacity-[0.06] font-serif ${sizeClass} leading-none pointer-events-none select-none z-0`}
      aria-hidden
    >
      <span className={`block ${animationClass}`}>
        {label}
      </span>
    </div>
  );
}
