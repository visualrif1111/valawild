/* ─────────────────────────────────────────────────────────────────────────────
   INTEGRATION ENDPOINTS

   Placeholders. Swapping in live values is a one-line change each — no
   component touches these strings directly, they route through ctas.ts.

   Spec stack (section 11 / Appendix A): Calendly for call booking, HubSpot for
   lead routing, Resend for confirmations, Turnstile for bot protection.
   Forms POST to Vercel serverless functions under /api — these work alongside
   the current Vite SPA and survive the later Next.js port unchanged.
   ───────────────────────────────────────────────────────────────────────── */

export const INTEGRATIONS = {
  /** Calendly scheduling link for "Book a 15 Minute Call". */
  calendlyUrl: '', // TODO: live Calendly link

  /** Serverless endpoints — see /api. */
  endpoints: {
    enquiry:     '/api/enquiry',
    waitlist:    '/api/waitlist',
    guide:       '/api/guide-download',
    liveQA:      '/api/live-qa-signup',
    ownJourney:  '/api/own-journey-enquiry',
  },

  /** Kilimanjaro guide lead magnet. */
  guideAsset: '/assets/vala-wild-kilimanjaro-guide.pdf', // TODO: live asset

  social: {
    instagram: '',
    tiktok:    '',
  },
} as const;

/** True once a real Calendly link is configured — CTAs fall back to /contact. */
export const hasCalendly = () => INTEGRATIONS.calendlyUrl.length > 0;

/* ─────────────────────────────────────────────────────────────────────────────
   Until the /api routes exist, forms run in preview mode: validation, states
   and copy are all real and reviewable, but nothing is sent. Flip to true the
   moment the serverless endpoints land.
   ───────────────────────────────────────────────────────────────────────── */
export const FORMS_LIVE = false;
