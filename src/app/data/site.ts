/* ─────────────────────────────────────────────────────────────────────────────
   INFORMATION ARCHITECTURE — Vala Wild Sitemap V2
   Source of truth: "Vala Wild Sitemap V2.pdf"

   Sitemap V2 governs. Where the Functional Specification v1.6 (section 3)
   disagrees — it lists nine flat nav items — V2 wins:
     · Top navigation is five pages.
     · Live QA / Events and Base Camp are SUB-PAGES of Kilimanjaro.
     · FAQ is footer-only.
     · Contact is a CTA destination, not a nav item.

   Nav and footer both read from here. Do not hardcode links in components.
   ───────────────────────────────────────────────────────────────────────── */

export type NavNode = {
  label: string;
  to: string;
  /** Sub-pages, per Sitemap V2's amber "Sub Pages" tier. */
  children?: NavNode[];
};

export const ROUTES = {
  home:        '/',
  kilimanjaro: '/kilimanjaro',
  liveQA:      '/kilimanjaro/live-qa-events',
  baseCamp:    '/kilimanjaro/base-camp',
  ownJourney:  '/create-your-own-journey',
  about:       '/about',
  impact:      '/impact',
  journal:     '/journal',
  faq:         '/faq',
  contact:     '/contact',
} as const;

/** Top navigation — the five pages of Sitemap V2, in diagram order. */
export const TOP_NAV: NavNode[] = [
  {
    label: 'Kilimanjaro',
    to: ROUTES.kilimanjaro,
    children: [
      { label: 'Live Q&A / Events', to: ROUTES.liveQA },
      { label: 'Base Camp',         to: ROUTES.baseCamp },
    ],
  },
  { label: 'Create Your Own Journey', to: ROUTES.ownJourney },
  { label: 'About',                   to: ROUTES.about },
  { label: 'Impact',                  to: ROUTES.impact },
  { label: 'Journal',                 to: ROUTES.journal },
];

/** Footer tree — mirrors the footer branch of Sitemap V2 exactly. */
export const FOOTER_NAV: NavNode[] = [
  {
    label: 'Kilimanjaro',
    to: ROUTES.kilimanjaro,
    children: [
      { label: 'Live Q&A / Events', to: ROUTES.liveQA },
      { label: 'Base Camp',         to: ROUTES.baseCamp },
    ],
  },
  { label: 'About', to: ROUTES.about },
  {
    label: 'Impact',
    to: ROUTES.impact,
    children: [{ label: 'Create Your Own Journey', to: ROUTES.ownJourney }],
  },
  { label: 'Journal / Guides / Resources', to: ROUTES.journal },
  { label: 'FAQ', to: ROUTES.faq },
];

export const BRAND = {
  name: 'Vala Wild',
  /** The governing creative line. Locked in the Figma/Trello Master Document. */
  creativeLine: 'Retro-futurism visually; optimism emotionally.',
  positioning: 'Lesbian-led, queer-inclusive adventure travel — built for solo travellers first.',
  email: 'hello@valawild.com',
  /** Discreet in-group phrase — used sparingly, never explained. */
  aside: 'We’re birdwatchers.',
} as const;
