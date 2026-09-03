/* ─────────────────────────────────────────────────────────────────────────────
   PER-ROUTE METADATA — FS section 9 (SEO / GEO)

   One title and description per page. Written to be useful in a search result
   rather than keyword-stuffed: each says who the page is for and what it
   offers, because that is also what an AI summary will repeat back.

   Note the limitation: this is a client-rendered SPA, so these are applied
   after hydration. Google renders JavaScript and will see them; some crawlers
   and link unfurlers will only ever see the defaults in index.html. Fixing
   that properly needs server rendering — the Next.js port.
   ───────────────────────────────────────────────────────────────────────── */

import { ROUTES } from './site';

export type PageMeta = { title: string; description: string };

const SUFFIX = ' · Vala Wild';

export const META: Record<string, PageMeta> = {
  [ROUTES.home]: {
    title: 'Vala Wild — Lesbian-led adventure travel, built for solo travellers',
    description:
      'All-inclusive, hosted Kilimanjaro and Tanzania adventures for queer women travelling on their own. Come alone — you won’t stay alone.',
  },
  [ROUTES.kilimanjaro]: {
    title: 'Climb Kilimanjaro' + SUFFIX,
    description:
      'An all-inclusive, fully hosted Kilimanjaro trek built for solo travellers, with four months of training and a group that forms before you fly. February 2028 departure open for enquiries.',
  },
  [ROUTES.baseCamp]: {
    title: 'Base Camp — the four months before you fly' + SUFFIX,
    description:
      'The pre-trip community and training that means nobody arrives as a stranger. How Vala Wild prepares solo travellers for Kilimanjaro.',
  },
  [ROUTES.liveQA]: {
    title: 'Live Q&A and events' + SUFFIX,
    description:
      'A live session with Vicky every fortnight. Ask about fitness, altitude, cost or coming alone — no obligation to book anything.',
  },
  [ROUTES.ownJourney]: {
    title: 'Create Your Own Journey — private Tanzania travel' + SUFFIX,
    description:
      'Private Tanzania journeys for LGBTQ+ couples, families, friends and groups. Queer-aware planning, trusted local partners and honest guidance on safety and discretion.',
  },
  [ROUTES.about]: {
    title: 'About Vala Wild and Vicky' + SUFFIX,
    description:
      'Why Vala Wild exists: lesbian-led, queer-inclusive adventure travel for women who are done waiting for someone to go with.',
  },
  [ROUTES.impact]: {
    title: 'Local by Design — our impact model' + SUFFIX,
    description:
      'Locally owned accommodation, local crews paid properly, and five percent of pre-tax net profit committed to supporting women in Tanzania.',
  },
  [ROUTES.journal]: {
    title: 'Journal, guides and resources' + SUFFIX,
    description:
      'Training, kit, altitude and safety — including honest guidance on travelling to Tanzania as a queer woman. Useful whether or not you travel with us.',
  },
  [ROUTES.contact]: {
    title: 'Book a 15 minute call' + SUFFIX,
    description:
      'A short, no-pressure conversation about whether this trip is right for you — and an honest answer if it isn’t.',
  },
  [ROUTES.faq]: {
    title: 'Questions about Kilimanjaro and Tanzania' + SUFFIX,
    description:
      'Fitness, altitude, solo travel, age, cost and travelling to Tanzania as a queer woman — the questions people actually ask.',
  },
};

export const DEFAULT_META: PageMeta = META[ROUTES.home];

/** Journal articles derive their metadata from the article index. */
export const articleMeta = (title: string, summary: string): PageMeta => ({
  title: title + SUFFIX,
  description: summary,
});
