import { Link } from 'react-router';
import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Subheading, Lede, Body, Quote, Label } from '../components/editorial/Type';
import { Horizon, ArcRule } from '../components/editorial/Arc';
import CTAButton from '../components/cta/CTAButton';
import CTAStrip from '../components/cta/CTAStrip';
import GuideDownload from '../components/cta/GuideDownload';
import WaitlistForm from '../components/cta/WaitlistForm';
import EnquiryForm from '../components/cta/EnquiryForm';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import { INTEGRATIONS } from '../data/integrations';
import { ROUTES } from '../data/site';
import { QUICK_FACTS, CONFIRMED_DEPARTURE, PREPARATION, OBJECTIONS } from '../data/kilimanjaro';

/* ─────────────────────────────────────────────────────────────────────────────
   KILIMANJARO — the flagship commercial page. FS 6.2 / 6.2A.

   Acceptance criterion: "The page is easy to skim despite length." So this is
   built as anchored, scannable commercial sections — the immersive scroll
   editorial that used to live at this route now runs as a Journal piece, where
   the format helps instead of burying the departures module.
   ───────────────────────────────────────────────────────────────────────── */

const ANCHORS = [
  { label: 'The trip',    to: '#trip' },
  { label: 'Departures',  to: '#departures' },
  { label: 'Included',    to: '#included' },
  { label: 'Training',    to: '#training' },
  { label: 'Safety',      to: '#safety' },
  { label: 'Questions',   to: '#faq' },
];

const INCLUDED = [
  'All accommodation, before and on the mountain',
  'All meals throughout the trek',
  'Park fees, permits and camping fees',
  'Local guides, cooks and porters, paid properly',
  'Airport transfers in Tanzania',
  'Four months of structured training and Base Camp access',
  'Hosting from arrival to departure',
];

const NOT_INCLUDED = [
  'International flights',
  'Travel insurance (required, including altitude cover)',
  'Visa fees',
  'Personal kit and equipment hire',
  'Tips for the mountain crew',
];

export default function Kilimanjaro() {
  return (
    <PageShell>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[900px] opacity-65" />
        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Tanzania · The flagship journey</Eyebrow>
          <Display>Mount<br />Kilimanjaro</Display>
          <Lede className="mt-8 max-w-2xl">
            All-inclusive, fully hosted, and built for people arriving on their own.
            Nineteen thousand feet, walked slowly, with a group that knows your name
            before you land.
          </Lede>
          <div className="mt-11 flex flex-col items-center gap-6">
            <CTAButton cta={PRIMARY_CTA} variant="primary" />
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <CTAButton cta={SECONDARY_CTAS.guide} variant="quiet" />
              <CTAButton cta={SECONDARY_CTAS.liveQA} variant="quiet" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Anchor nav — long page, must stay skimmable ─────────────────── */}
      <nav
        className="sticky z-30 w-full bg-ink/92 backdrop-blur-md border-b border-cream/10"
        style={{ top: 'var(--vw-nav-h)' }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex gap-x-8 gap-y-2 overflow-x-auto py-4 justify-start md:justify-center">
          {ANCHORS.map((a) => (
            <a key={a.to} href={a.to}
              className="font-['Kufam',sans-serif] text-[10px] tracking-[0.2em] uppercase text-cream/50 hover:text-ember whitespace-nowrap transition-colors duration-300">
              {a.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Quick facts ────────────────────────────────────────────────── */}
      <Section width="wide" id="trip">
        <Eyebrow className="mb-8">At a glance</Eyebrow>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="border-t border-cream/12 pt-5">
              <dt><Label>{f.label}</Label></dt>
              <dd className="font-['Cormorant_Garamond',serif] font-light text-[18px] leading-[1.45] text-cream/85 mt-2">
                {f.value ?? <span className="text-cream/30 italic text-[15px]">To be confirmed</span>}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Trip shape ─────────────────────────────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">The shape of it</Eyebrow>
        <Heading>Safari, then the mountain.</Heading>
        <Body className="mt-7">
          The core of the trip is the Kilimanjaro trek, hosted end to end. An optional
          safari extension sits either side of it — the same local partners, the same
          standard of hosting, added on if you want the country as well as the climb.
        </Body>
        <Quote className="mt-10">
          Committing three to four months ahead is not us being difficult. It is the
          minimum runway to train properly and arrive ready.
        </Quote>
      </Section>

      <ArcRule />

      {/* ── 6.2A Departures & waitlist ─────────────────────────────────── */}
      <Section width="default" id="departures">
        <Eyebrow className="mb-6">Upcoming Kilimanjaro departures</Eyebrow>

        {/* Confirmed departure — visually dominant */}
        <div className="w-full border border-ember/25 rounded-3xl p-8 md:p-12 bg-soot/50">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Label className="text-ember/85">{CONFIRMED_DEPARTURE.month}</Label>
            <span className="w-1 h-1 rounded-full bg-cream/30" />
            <Label>{CONFIRMED_DEPARTURE.status}</Label>
          </div>
          <Heading>{CONFIRMED_DEPARTURE.title}</Heading>
          <Body className="mt-5 max-w-2xl">{CONFIRMED_DEPARTURE.description}</Body>
          <div className="mt-9">
            <a href="#enquire"
              className="inline-flex font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase bg-ember text-ink rounded-full px-9 py-4 hover:bg-flare transition-all duration-500">
              {CONFIRMED_DEPARTURE.cta}
            </a>
          </div>
        </div>

        {/* Waitlist — deliberately secondary, stacked beneath, never side-by-side */}
        <div className="mt-14 pt-12 border-t border-cream/10">
          <WaitlistForm />
        </div>
      </Section>

      {/* ── Included / not included ────────────────────────────────────── */}
      <Section width="default" id="included">
        <Eyebrow className="mb-6">All-inclusive, and what that means</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-8">
          <div>
            <Subheading>What’s included</Subheading>
            <ul className="mt-6 flex flex-col gap-4">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span aria-hidden className="mt-2.5 w-3 h-px bg-ember/70 shrink-0" />
                  <span className="font-['Cormorant_Garamond',serif] font-light text-[17px] leading-[1.6] text-cream/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Subheading>What’s not</Subheading>
            <ul className="mt-6 flex flex-col gap-4">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span aria-hidden className="mt-2.5 w-3 h-px bg-cream/25 shrink-0" />
                  <span className="font-['Cormorant_Garamond',serif] font-light text-[17px] leading-[1.6] text-cream/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Training ───────────────────────────────────────────────────── */}
      <Section width="narrow" id="training">
        <Eyebrow className="mb-6">Training &amp; preparation</Eyebrow>
        <Heading>You have four months. That is genuinely enough.</Heading>
        <Body className="mt-7">{PREPARATION.note}</Body>
        <Body className="mt-5">
          {PREPARATION.bookingWindow}, and {PREPARATION.trainingPeriod.toLowerCase()} —
          structured, shared, and run alongside everyone else going on your departure.
        </Body>
        <div className="mt-8">
          <Link to={ROUTES.baseCamp}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            Inside Base Camp
          </Link>
        </div>
      </Section>

      {/* ── Safety ─────────────────────────────────────────────────────── */}
      <Section width="narrow" id="safety">
        <Eyebrow className="mb-6">Safety &amp; support</Eyebrow>
        <Heading>Honest, not reassuring.</Heading>
        <Body className="mt-7">
          Homosexuality is illegal in Tanzania. We say that plainly because you deserve to
          plan around the real country rather than a brochure version of it. In practice
          this trip has been run before, carefully, with local partners who know exactly
          who they are hosting.
        </Body>
        <Body className="mt-5">
          Altitude is managed by pace and route choice, guides carry oxygen and pulse
          oximetry, and the decision to turn around is always the guide’s to make and never
          held against you.
        </Body>
      </Section>

      <ArcRule />

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <Section width="default" id="faq">
        <Eyebrow className="mb-6">The questions everyone asks</Eyebrow>
        <div className="mt-10 flex flex-col gap-10">
          {OBJECTIONS.map((o) => (
            <div key={o.q} className="border-t border-cream/12 pt-6">
              <Subheading className="text-[5.5vw] md:text-[23px]">{o.q}</Subheading>
              <Body className="mt-3 max-w-2xl">{o.a}</Body>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to={ROUTES.faq}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            All questions
          </Link>
        </div>
      </Section>

      {/* ── Guide ──────────────────────────────────────────────────────── */}
      <Section width="default">
        <GuideDownload />
      </Section>

      {/* ── Departure enquiry ──────────────────────────────────────────── */}
      <Section width="default" id="enquire">
        <Eyebrow className="mb-6">February 2028</Eyebrow>
        <Heading>Enquire about the founding departure.</Heading>
        <Body className="mt-6 mb-12 max-w-2xl">
          Tell us a little about you and we’ll come back with the detail — and, if it’s
          useful, a fifteen minute call.
        </Body>
        <EnquiryForm
          id="enquire-form"
          endpoint={INTEGRATIONS.endpoints.enquiry}
          tripReference={CONFIRMED_DEPARTURE.enquiryValue}
          travellingAs
          submitLabel="Enquire About February 2028"
        />
      </Section>

      <CTAStrip
        heading="Fifteen minutes, and you’ll know."
        secondary={[SECONDARY_CTAS.guide, SECONDARY_CTAS.liveQA, SECONDARY_CTAS.contact]}
      />
    </PageShell>
  );
}
