/* ─────────────────────────────────────────────────────────────────────────────
   CONVERSION ACTIONS

   One canonical definition per CTA. Every page composes from this set so the
   primary action stays dominant and the wording never drifts.

   PRIMARY   — Book a 15 Minute Call. Dominant across the whole site (FS SM-01,
               and the "CTA : BOOK" node hanging off Homepage in Sitemap V2).
   SECONDARY — lower-friction routes for people not ready for a 1:1 call.
   ───────────────────────────────────────────────────────────────────────── */

import { ROUTES } from './site';
import { INTEGRATIONS, hasCalendly } from './integrations';

export type CTA = {
  id: string;
  label: string;
  /** Supporting line. Keeps the ask no-pressure — never sell in the button. */
  support?: string;
  href: string;
  /** External links open in a new tab (Calendly). */
  external?: boolean;
};

/** The dominant action. Never render a page without a route to this. */
export const PRIMARY_CTA: CTA = {
  id: 'book-call',
  label: 'Book a 15 Minute Call',
  support: 'No pressure, no sales pitch — just a conversation about whether this is right for you.',
  get href() { return hasCalendly() ? INTEGRATIONS.calendlyUrl : ROUTES.contact; },
  get external() { return hasCalendly(); },
};

export const SECONDARY_CTAS = {
  contact: {
    id: 'contact',
    label: 'Contact Us',
    support: 'Ask us anything — fitness, altitude, cost, or coming alone.',
    href: ROUTES.contact,
  },
  waitlist: {
    id: 'waitlist',
    label: 'Join the Waitlist',
    support: 'We’ll let you know when the next 2028 Kilimanjaro departure opens.',
    href: `${ROUTES.kilimanjaro}#waitlist`,
  },
  guide: {
    id: 'guide',
    label: 'Download the Guide',
    support: 'The full Kilimanjaro guide — route, training, kit and what it really costs.',
    href: `${ROUTES.kilimanjaro}#guide`,
  },
  liveQA: {
    id: 'live-qa',
    label: 'Join Live Q&A / Events',
    support: 'Bring your questions to a live session with Vicky.',
    href: ROUTES.liveQA,
  },
  ownJourney: {
    id: 'own-journey',
    label: 'Start Your Own Journey',
    support: 'Tell us what you’re dreaming about and we’ll build it around you.',
    href: `${ROUTES.ownJourney}#enquiry`,
  },
} satisfies Record<string, CTA>;

export const ALL_SECONDARY: CTA[] = Object.values(SECONDARY_CTAS);
