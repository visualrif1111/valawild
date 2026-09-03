import { useState } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ accordion — wireframe 09.

   Native buttons with aria-expanded, so keyboard and screen-reader behaviour
   comes for free. Answers stay in the DOM when collapsed (hidden), which keeps
   them findable by in-page search and by crawlers — the FAQ is SEO content,
   not just an interaction.
   ───────────────────────────────────────────────────────────────────────── */

export type QA = { q: string; a: string };

export default function Accordion({ items, idPrefix }: { items: readonly QA[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;
        return (
          <div key={item.q} className="border-t border-ink/12">
            <h3>
              <button
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-6 text-left py-6 group"
              >
                <span className="font-['Italiana',serif] text-[5.5vw] md:text-[22px] leading-[1.25] tracking-[0.02em] text-ink group-hover:text-clay transition-colors duration-300">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 mt-2 w-4 h-4 relative transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                  <span className="absolute inset-x-0 top-1/2 h-px bg-clay -translate-y-1/2" />
                  <span className="absolute inset-y-0 left-1/2 w-px bg-clay -translate-x-1/2" />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p className="font-['Cormorant_Garamond',serif] font-light text-[4.6vw] md:text-[18px] leading-[1.72] text-smoke pb-7 pr-10 max-w-2xl">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
