import { useState } from 'react';
import { useLeadForm, isValidEmail } from './useLeadForm';
import { FORMS_LIVE } from '../../data/integrations';
import FormsOffline from './FormsOffline';

/* ─────────────────────────────────────────────────────────────────────────────
   Shared enquiry form — Contact (FS 6.7), Create Your Own Journey (FS 6.3) and
   the February 2028 departure enquiry (FS 6.2A).

   Kept deliberately short. FS acceptance criterion: "Form is short and
   friction-light." Qualifying fields are optional and never gate submission.
   ───────────────────────────────────────────────────────────────────────── */

const FIELD =
  'w-full bg-transparent border-b border-cream/20 focus:border-ember/70 outline-none ' +
  "font-['Cormorant_Garamond',serif] text-[17px] text-cream placeholder:text-cream/30 " +
  'py-3 transition-colors duration-300';

const LABEL = "font-['Kufam',sans-serif] text-[9px] tracking-[0.28em] uppercase text-cream/40 mb-1 block";

export default function EnquiryForm({
  endpoint,
  tripReference,
  prompt,
  submitLabel = 'Send Enquiry',
  travellingAs = false,
  id = 'enquiry',
}: {
  endpoint: string;
  /** Passed through as the trip reference — FS 6.2A. */
  tripReference?: string;
  prompt?: string;
  submitLabel?: string;
  /** Show the solo / pair / group qualifier. */
  travellingAs?: boolean;
  id?: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [group, setGroup] = useState('');
  const [touched, setTouched] = useState(false);
  const { state, submit } = useLeadForm(endpoint);

  const invalid = touched && !isValidEmail(email);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email) || !name.trim()) return;
    submit({
      name: name.trim(),
      email: email.trim(),
      message: message.trim() || undefined,
      travellingAs: group || undefined,
      trip: tripReference,
    });
  }

  if (!FORMS_LIVE) {
    return (
      <div id={id} className="w-full max-w-xl scroll-mt-32">
        {prompt && (
          <p className="font-['Cormorant_Garamond',serif] font-light italic text-[17px] leading-[1.7] text-cream/55">
            {prompt}
          </p>
        )}
        <FormsOffline subject={tripReference ?? 'Enquiry'} />
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div id={id} className="w-full max-w-xl" style={{ scrollMarginTop: 'calc(var(--vw-nav-h) + var(--vw-subnav-h) + 1rem)' }}>
        <p role="status" className="font-['Italiana',serif] text-[28px] text-cream leading-tight">
          Thank you — that’s with us.
        </p>
        <p className="font-['Cormorant_Garamond',serif] font-light text-[17px] leading-[1.7] text-cream/60 mt-3">
          Vicky reads every enquiry personally. You’ll hear back within two working days.
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="w-full max-w-xl flex flex-col gap-7" style={{ scrollMarginTop: 'calc(var(--vw-nav-h) + var(--vw-subnav-h) + 1rem)' }} noValidate>
      {prompt && (
        <p className="font-['Cormorant_Garamond',serif] font-light italic text-[17px] leading-[1.7] text-cream/55">
          {prompt}
        </p>
      )}

      <div>
        <label className={LABEL} htmlFor={`${id}-name`}>Your name</label>
        <input id={`${id}-name`} className={FIELD} value={name}
               onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </div>

      <div>
        <label className={LABEL} htmlFor={`${id}-email`}>Email</label>
        <input id={`${id}-email`} type="email" className={FIELD} value={email}
               onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouched(true)}
               autoComplete="email" aria-invalid={invalid} />
        {invalid && (
          <p className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-flare/80 mt-2">
            Please enter a valid email address.
          </p>
        )}
      </div>

      {travellingAs && (
        <div>
          <label className={LABEL} htmlFor={`${id}-group`}>Travelling as (optional)</label>
          <select id={`${id}-group`} value={group} onChange={(e) => setGroup(e.target.value)}
                  className={`${FIELD} appearance-none cursor-pointer`}>
            <option value=""       className="bg-ink">Prefer not to say</option>
            <option value="solo"   className="bg-ink">On my own</option>
            <option value="pair"   className="bg-ink">With one other person</option>
            <option value="group"  className="bg-ink">With a group</option>
          </select>
        </div>
      )}

      <div>
        <label className={LABEL} htmlFor={`${id}-message`}>
          What would you like to know? (optional)
        </label>
        <textarea id={`${id}-message`} rows={4} className={`${FIELD} resize-none`}
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="Fitness, altitude, cost, coming alone — anything." />
      </div>

      {tripReference && <input type="hidden" name="trip" value={tripReference} />}

      {state === 'error' && (
        <p role="alert" className="font-['Kufam',sans-serif] text-[10px] tracking-[0.12em] uppercase text-flare/80">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="self-start font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase
                   bg-ember text-ink rounded-full px-9 py-4 hover:bg-flare transition-all duration-500
                   disabled:opacity-40"
      >
        {state === 'submitting' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
