import { useState } from 'react';
import { INTEGRATIONS } from '../../data/integrations';
import { useLeadForm, isValidEmail } from './useLeadForm';

/* FS 6.6 / 6.2 — lower-friction lead magnet. Email only; nothing else earns a
   field here, because every extra field costs downloads. */

export default function GuideDownload({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const { state, submit } = useLeadForm(INTEGRATIONS.endpoints.guide);

  const invalid = touched && !isValidEmail(email);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email)) return;
    submit({ email: email.trim(), asset: INTEGRATIONS.guideAsset });
  }

  return (
    <div id="guide" className={`w-full max-w-xl ${className}`} style={{ scrollMarginTop: 'calc(var(--vw-nav-h) + var(--vw-subnav-h) + 1rem)' }}>
      <p className="font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-ember/70 mb-4">
        The Kilimanjaro Guide
      </p>
      <h3 className="font-['Italiana',serif] text-[7vw] md:text-[32px] leading-[1.15] text-cream tracking-[0.03em]">
        Everything we’d tell you on the call, in writing.
      </h3>
      <p className="font-['Cormorant_Garamond',serif] font-light text-[17px] leading-[1.7] text-cream/60 mt-4">
        Route, training plan, kit list, what it actually costs, and honest guidance on
        travelling to Tanzania as a queer woman. No pressure to book anything.
      </p>

      {state === 'success' ? (
        <p role="status" className="font-['Kufam',sans-serif] text-[11px] tracking-[0.14em] uppercase text-ember mt-7">
          On its way — check your inbox.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-3" noValidate>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Email address"
            autoComplete="email"
            aria-invalid={invalid}
            aria-label="Email address"
            className="bg-transparent border-b border-cream/20 focus:border-ember/70 outline-none
                       font-['Cormorant_Garamond',serif] text-[17px] text-cream placeholder:text-cream/30
                       py-3 transition-colors duration-300"
          />
          {invalid && (
            <p className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-flare/80">
              Please enter a valid email address.
            </p>
          )}
          {state === 'error' && (
            <p role="alert" className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-flare/80">
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="self-start mt-2 font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase
                       bg-ember text-ink rounded-full px-8 py-3.5 hover:bg-flare transition-all duration-500
                       disabled:opacity-40"
          >
            {state === 'submitting' ? 'Sending…' : 'Download the Guide'}
          </button>
        </form>
      )}
    </div>
  );
}
