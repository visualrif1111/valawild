import { PRIMARY_CTA, SECONDARY_CTAS, type CTA } from '../../data/ctas';
import CTAButton from './CTAButton';

/* ─────────────────────────────────────────────────────────────────────────────
   Repeated conversion block. FS acceptance criterion for the homepage is
   explicit: "The page does not rely on a single CTA at the bottom." Every long
   page gets at least two of these.

   The primary action is always visually dominant — secondaries sit under it as
   lower-friction alternatives, never beside it at equal weight.
   ───────────────────────────────────────────────────────────────────────── */

export default function CTAStrip({
  heading,
  body,
  secondary = [SECONDARY_CTAS.guide, SECONDARY_CTAS.liveQA],
  className = '',
}: {
  heading?: string;
  body?: string;
  secondary?: CTA[];
  className?: string;
}) {
  return (
    <section className={`relative w-full px-8 md:px-16 py-24 md:py-32 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Arc — a horizon line above the ask */}
        <div
          aria-hidden
          className="mx-auto mb-10 h-[1px] w-40 bg-gradient-to-r from-transparent via-ember/60 to-transparent"
        />

        {heading && (
          <h2 className="font-['Italiana',serif] text-[8vw] md:text-[42px] leading-[1.1] text-cream tracking-[0.03em]">
            {heading}
          </h2>
        )}

        {body && (
          <p className="font-['Cormorant_Garamond',serif] font-light text-[4.5vw] md:text-[19px] leading-[1.7] text-cream/70 mt-6">
            {body}
          </p>
        )}

        <div className="mt-12 flex flex-col items-center gap-7">
          <CTAButton cta={PRIMARY_CTA} variant="primary" />

          {PRIMARY_CTA.support && (
            <p className="font-['Cormorant_Garamond',serif] italic font-light text-[15px] leading-relaxed text-cream/45 max-w-md">
              {PRIMARY_CTA.support}
            </p>
          )}

          {secondary.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-4">
              {secondary.map((c) => (
                <CTAButton key={c.id} cta={c} variant="quiet" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
