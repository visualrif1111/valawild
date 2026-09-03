/* ─────────────────────────────────────────────────────────────────────────────
   KILIMANJARO — flagship commercial content
   Source: Functional Specification v1.6, sections 6.2 and 6.2A

   Values marked TODO are not fixed in the supplied documents and need Vala's
   confirmation before launch. They are surfaced as nulls rather than invented
   so nothing unverified reaches the page.
   ───────────────────────────────────────────────────────────────────────── */

export type QuickFact = { label: string; value: string | null };

export const QUICK_FACTS: QuickFact[] = [
  { label: 'Destination', value: 'Tanzania — Mount Kilimanjaro' },
  { label: 'Departure',   value: 'February 2028' },
  { label: 'Duration',    value: null }, // TODO: confirm trip length
  { label: 'Route',       value: null }, // TODO: confirm summit route
  { label: 'Difficulty',  value: null }, // TODO: confirm grading
  { label: 'Group size',  value: null }, // TODO: confirm cap
  { label: 'Trip style',  value: 'All-inclusive, hosted, solo-traveller first' },
];

/* ── 6.2A Upcoming departures & waitlist ──────────────────────────────────── */

export const CONFIRMED_DEPARTURE = {
  id: 'feb-2028',
  month: 'February 2028',
  title: 'Founding Vala Kilimanjaro Departure',
  status: 'Open for enquiries',
  description:
    'The first Vala Wild ascent. A founding group of solo travellers and the people ' +
    'they meet on the way up — hosted end to end, with four months of training and ' +
    'preparation behind you before you set foot on the mountain.',
  cta: 'Enquire About February 2028',
  /** Passed into the enquiry form as the trip reference. FS 6.2A. */
  enquiryValue: 'February 2028 - Founding Kilimanjaro Departure',
} as const;

export const WAITLIST = {
  /** Must read as secondary — never as a second bookable trip. FS 4B. */
  prompt: 'Can’t make February? Join the waitlist for our next 2028 Kilimanjaro departure.',
  support:
    'Join the waitlist and we’ll keep you updated when the next Kilimanjaro ' +
    'departure is announced and bookings open.',
  cta: 'Join the Waitlist',
  states: {
    success:   'You’re on the list. We’ll keep you updated when our next 2028 Kilimanjaro departure is announced.',
    error:     'Something went wrong. Please try again.',
    duplicate: 'You’re already on the waitlist. We’ll keep you posted.',
  },
} as const;

/* ── Booking and preparation windows — FS 6.2 ─────────────────────────────── */

export const PREPARATION = {
  bookingWindow: 'Commit three to four months ahead',
  trainingPeriod: 'Around four months of structured training',
  note:
    'You do not need to be an athlete. You need time, a plan and people ' +
    'walking it with you — all three come with the trip.',
} as const;

/* ── Objection handling — FS SM-03, 6.9 ───────────────────────────────────── */

export const OBJECTIONS = [
  {
    q: 'I’d be coming on my own.',
    a: 'Most people do. This trip is built solo-first — the group forms in Base Camp months before you fly, so nobody arrives as a stranger.',
  },
  {
    q: 'I’m not fit enough.',
    a: 'Almost nobody is, at the point they book. That is what the four-month training period is for, and you do not do it alone.',
  },
  {
    q: 'I’m worried about being queer in Tanzania.',
    a: 'A fair worry, and we will not pretend otherwise. Homosexuality is illegal there. We are honest about what that means in practice, we brief the people supporting you directly, and we choose partners and accommodation accordingly.',
  },
  {
    q: 'Am I too old for this?',
    a: 'Our travellers are largely in their thirties, forties and fifties. Summit night does not care how old you are — it cares whether you trained.',
  },
] as const;
