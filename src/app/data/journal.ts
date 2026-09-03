/* ─────────────────────────────────────────────────────────────────────────────
   JOURNAL / GUIDES / RESOURCES — FS 6.6

   Two entries are "immersive": they render the original scroll editorials.
   That work was built for full-viewport narrative scrolling, which fights a
   commercial page but is exactly right for a guide — so it lives here.

   The remaining five are written articles — bodies live in journal-bodies.ts
   as structured blocks so they map onto Sanity later.
   ───────────────────────────────────────────────────────────────────────── */

export type Article = {
  slug: string;
  title: string;
  summary: string;
  category: 'Preparation' | 'Safety' | 'Destination' | 'Community';
  /** Immersive articles render a scroll editorial rather than body copy. */
  immersive?: 'safari' | 'summit';
  published: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: 'safari-guide',
    title: 'The safari, before the mountain',
    summary: 'The optional safari extension — what you see, how it paces the trip, and why most people add it.',
    category: 'Destination',
    immersive: 'safari',
    published: true,
  },
  {
    slug: 'summit-night',
    title: 'What summit night is really like',
    summary: 'Midnight to sunrise on the final ascent, described honestly rather than heroically.',
    category: 'Preparation',
    immersive: 'summit',
    published: true,
  },
  { slug: 'could-i-climb-kilimanjaro', title: 'Could I actually climb Kilimanjaro?',        summary: 'An honest fitness reality check.',                         category: 'Preparation', published: true },
  { slug: 'training-for-kilimanjaro',  title: 'Training for Kilimanjaro',                   summary: 'The four-month build-up, week by week.',                   category: 'Preparation', published: true },
  { slug: 'what-to-pack',              title: 'What to pack for Kilimanjaro',               summary: 'What to buy, borrow, and skip.',                           category: 'Preparation', published: true },
  { slug: 'queer-travel-tanzania',     title: 'Travelling to Tanzania as a queer woman',    summary: 'The law, the reality, and how we plan around both.',       category: 'Safety',      published: true },
  { slug: 'how-base-camp-works',       title: 'How Base Camp works',                        summary: 'The four months before you fly.',                          category: 'Community',   published: true },
];

export const findArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
