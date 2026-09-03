import { BRAND } from '../../data/site';

/* ─────────────────────────────────────────────────────────────────────────────
   Shown in place of a form while FORMS_LIVE is false.

   The alternative — letting someone fill in a form that reports success and
   silently discards the submission — loses real enquiries and misleads the
   person who sent them. We would rather ask for an email than take a lead we
   cannot store. Remove nothing when the endpoints land: flip FORMS_LIVE and
   the real forms come back.
   ───────────────────────────────────────────────────────────────────────── */

export default function FormsOffline({
  subject,
  action = 'and we’ll take it from there',
}: {
  /** Pre-fills the email subject so enquiries arrive sorted. */
  subject: string;
  action?: string;
}) {
  return (
    <div className="mt-7 border border-ink/12 rounded-2xl p-6 bg-cream">
      <p className="font-['Cormorant_Garamond',serif] font-light text-[17px] leading-[1.65] text-smoke">
        Our online forms aren’t switched on yet. Email{' '}
        <a
          href={`mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}`}
          className="text-clay border-b border-ember/40 hover:border-clay transition-colors duration-300"
        >
          {BRAND.email}
        </a>{' '}
        {action}.
      </p>
      <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.24em] uppercase text-smoke/60 mt-4">
        We reply within two working days
      </p>
    </div>
  );
}
