import { useState } from 'react';
import { WAITLIST } from '../../data/kilimanjaro';
import { INTEGRATIONS } from '../../data/integrations';
import { useLeadForm, isValidEmail } from './useLeadForm';
import { FORMS_LIVE } from '../../data/integrations';
import FormsOffline from './FormsOffline';

/* ─────────────────────────────────────────────────────────────────────────────
   FS 6.2A — secondary waitlist.

   Deliberately quieter than the confirmed departure above it: no filled button,
   no card, thinner rules. It must never read as a second bookable trip.
   MVP fields are email plus an optional first name.
   ───────────────────────────────────────────────────────────────────────── */

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [touched, setTouched] = useState(false);
  const { state, submit } = useLeadForm(INTEGRATIONS.endpoints.waitlist);

  const invalid = touched && !isValidEmail(email);
  const settled = state === 'success' || state === 'duplicate';

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    // Values are intentionally not cleared — FS 6.2A requires the form to
    // retain the entered email if submission fails.
    submit({ email: email.trim(), firstName: firstName.trim() || undefined });
  }

  return (
    <div id="waitlist" className="w-full max-w-xl" style={{ scrollMarginTop: 'calc(var(--vw-nav-h) + var(--vw-subnav-h) + 1rem)' }}>
      <p className="font-['Cormorant_Garamond',serif] font-light text-[18px] leading-[1.6] text-smoke">
        {WAITLIST.prompt}
      </p>
      <p className="font-['Cormorant_Garamond',serif] font-light italic text-[15px] leading-[1.7] text-smoke/75 mt-2">
        {WAITLIST.support}
      </p>

      {!FORMS_LIVE ? (
        <FormsOffline subject="Kilimanjaro waitlist" action="and we’ll add you to the waitlist" />
      ) : settled ? (
        <p
          role="status"
          className="font-['Kufam',sans-serif] text-[11px] tracking-[0.14em] uppercase text-clay mt-7 leading-relaxed"
        >
          {state === 'duplicate' ? WAITLIST.states.duplicate : WAITLIST.states.success}
        </p>
      ) : (
        /* Stacked on mobile — FS 6.2A forbids side-by-side CTAs on small screens */
        <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-3" noValidate>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name (optional)"
              autoComplete="given-name"
              className="flex-1 bg-transparent border-b border-ink/20 focus:border-clay outline-none
                         font-['Cormorant_Garamond',serif] text-[17px] text-ink placeholder:text-smoke/60
                         py-3 transition-colors duration-300"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Email address"
              autoComplete="email"
              aria-invalid={invalid}
              aria-label="Email address"
              className="flex-1 bg-transparent border-b border-ink/20 focus:border-clay outline-none
                         font-['Cormorant_Garamond',serif] text-[17px] text-ink placeholder:text-smoke/60
                         py-3 transition-colors duration-300"
            />
          </div>

          {invalid && (
            <p className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-clay">
              Please enter a valid email address.
            </p>
          )}
          {state === 'error' && (
            <p role="alert" className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-clay">
              {WAITLIST.states.error}
            </p>
          )}

          <button
            type="submit"
            disabled={state === 'submitting'}
            className="self-start mt-2 font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase
                       text-smoke border-b border-ink/20 pb-1 hover:text-ink hover:border-clay
                       transition-all duration-300 disabled:opacity-40"
          >
            {state === 'submitting' ? 'Joining…' : WAITLIST.cta}
          </button>
        </form>
      )}
    </div>
  );
}
