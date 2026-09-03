import { useState } from 'react';
import { FORMS_LIVE } from '../../data/integrations';

export type FormState = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

/* ─────────────────────────────────────────────────────────────────────────────
   Shared submit behaviour for every lead form.

   FS 6.2A is specific about failure: on error the form must retain what the
   user typed and must not clear. So this hook never resets field state — the
   calling component owns the values and keeps them.
   ───────────────────────────────────────────────────────────────────────── */
export function useLeadForm(endpoint: string) {
  const [state, setState] = useState<FormState>('idle');

  async function submit(payload: Record<string, unknown>) {
    setState('submitting');

    if (!FORMS_LIVE) {
      // Preview mode — see FORMS_LIVE in data/integrations.ts
      await new Promise((r) => setTimeout(r, 550));
      setState('success');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 409) { setState('duplicate'); return; }
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  }

  return { state, submit, reset: () => setState('idle') };
}

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
