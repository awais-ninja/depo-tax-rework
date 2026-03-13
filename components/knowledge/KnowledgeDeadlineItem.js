'use client';

/**
 * Single deadline row for Tax Calendar: title, timing, optional description.
 */
export default function KnowledgeDeadlineItem({ title, timing, description }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 py-4 sm:py-5 px-5 sm:px-6 bg-white/80 border-b border-brand-grayBorder/60 last:border-b-0">
      <div>
        <h3 className="font-semibold text-brand-navy">{title}</h3>
        {description && (
          <p className="text-sm text-brand-text/85 mt-1">{description}</p>
        )}
      </div>
      <span className="text-sm font-medium text-brand-accent whitespace-nowrap sm:ml-4">{timing}</span>
    </div>
  );
}
