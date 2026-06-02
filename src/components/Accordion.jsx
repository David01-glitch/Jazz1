import { useId, useState } from 'react';

// Inline expandable section. The full content is ALWAYS in the DOM (rendered to
// static HTML); JS only toggles a CSS grid transition. With JS disabled the
// `.no-js` rule on <html> keeps every panel expanded, so nothing is hidden from
// crawlers or no-script visitors. No modals, popups, redirects or new tabs.
export default function Accordion({
  title,
  children,
  defaultOpen = false,
  triggerLabel = 'Read more',
  kicker,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `acc-panel-${id}`;
  const btnId = `acc-btn-${id}`;

  return (
    <div className="rounded-xl border border-gold/20 bg-charcoal-800/60">
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light rounded-xl"
        >
          <span>
            {kicker && (
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/80">
                {kicker}
              </span>
            )}
            <span className="font-display text-lg text-cream">{title}</span>
          </span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} className="accordion-panel" data-open={open}>
        <div className="accordion-inner">
          <div className="prose-jazz px-5 pb-5 pt-1 text-[15.5px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
