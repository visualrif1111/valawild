import { Link } from 'react-router';
import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Subheading, Lede, Body, Quote, Label } from '../components/editorial/Type';
import { Horizon, ArcRule } from '../components/editorial/Arc';
import CTAButton from '../components/cta/CTAButton';
import CTAStrip from '../components/cta/CTAStrip';
import GuideDownload from '../components/cta/GuideDownload';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import { ROUTES, BRAND } from '../data/site';
import { CONFIRMED_DEPARTURE, OBJECTIONS } from '../data/kilimanjaro';

/* Homepage — FS 6.1. Sitemap V2 places both CTAs (Book, Contact Us) here. */

export default function Home() {
  return (
    <PageShell>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[900px] opacity-70" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Lesbian-led · Queer-inclusive · Tanzania</Eyebrow>

          <Display>
            You don’t need<br />someone to go with.
          </Display>

          <Lede className="mt-8 max-w-2xl">
            All-inclusive hosted adventures for women who are done waiting for the right
            person to be free. Come on your own. You won’t stay on your own.
          </Lede>

          <div className="mt-11 flex flex-col items-center gap-6">
            <CTAButton cta={PRIMARY_CTA} variant="primary" />
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <CTAButton cta={SECONDARY_CTAS.contact} variant="quiet" />
              <CTAButton cta={SECONDARY_CTAS.guide} variant="quiet" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem / solution ─────────────────────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">The reason most people never go</Eyebrow>
        <Heading>
          It was never about the mountain.
        </Heading>
        <Body className="mt-7">
          Most people who want to do something extraordinary don’t stop because it’s too
          hard, too far or too expensive. They stop because there is nobody obvious to go
          with — and going alone sounds like eating dinner alone for two weeks.
        </Body>
        <Body className="mt-5">
          Vala Wild exists for exactly that gap. Every trip is built solo-first: you arrive
          into a group that has been forming for months, hosted end to end, with people who
          understand why this matters to you.
        </Body>
        <Quote className="mt-10">
          Newly out, recently divorced, burnt out, restless, or simply without anyone free
          in February — you are the reason this exists.
        </Quote>
      </Section>

      <ArcRule />

      {/* ── Featured departure ─────────────────────────────────────────── */}
      <Section width="default">
        <div className="flex flex-col items-start">
          <Eyebrow className="mb-6">The flagship journey</Eyebrow>
          <Heading>Mount Kilimanjaro</Heading>
          <Body className="mt-6 max-w-2xl">
            Nineteen thousand feet, walked slowly, in company. Optional safari either side.
            All-inclusive, fully hosted, and prepared for over four months before you fly.
          </Body>

          <div className="mt-10 w-full border border-cream/12 rounded-3xl p-8 md:p-10 bg-soot/40">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <Label className="text-ember/80">{CONFIRMED_DEPARTURE.month}</Label>
              <span className="w-1 h-1 rounded-full bg-cream/30" />
              <Label>{CONFIRMED_DEPARTURE.status}</Label>
            </div>
            <Subheading>{CONFIRMED_DEPARTURE.title}</Subheading>
            <Body className="mt-4 max-w-xl">{CONFIRMED_DEPARTURE.description}</Body>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link to={ROUTES.kilimanjaro}
                className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase bg-ember text-ink rounded-full px-8 py-4 hover:bg-flare transition-all duration-500">
                {CONFIRMED_DEPARTURE.cta}
              </Link>
              <CTAButton cta={SECONDARY_CTAS.waitlist} variant="quiet" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Come alone / Base Camp ─────────────────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">Base Camp</Eyebrow>
        <Heading>The group forms long before the airport.</Heading>
        <Body className="mt-7">
          Base Camp is the part nobody else does. From the moment you book, you join the
          others going — training together, comparing kit, asking the questions you would
          not ask a stranger, and slowly turning a booking into a group of people who
          already know each other by the time you land.
        </Body>
        <div className="mt-8">
          <Link to={ROUTES.baseCamp}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            How Base Camp works
          </Link>
        </div>
      </Section>

      {/* ── Objection handling ─────────────────────────────────────────── */}
      <Section width="default">
        <Eyebrow className="mb-6">You might be thinking…</Eyebrow>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {OBJECTIONS.map((o) => (
            <div key={o.q}>
              <Subheading className="text-[5vw] md:text-[21px]">{o.q}</Subheading>
              <Body className="mt-3">{o.a}</Body>
            </div>
          ))}
        </div>
      </Section>

      <ArcRule />

      {/* ── Guide + Live Q&A ───────────────────────────────────────────── */}
      <Section width="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <GuideDownload />
          <div>
            <Eyebrow className="mb-4">Live Q&amp;A / Events</Eyebrow>
            <Subheading>Ask everything, commit to nothing.</Subheading>
            <Body className="mt-4">
              A live session with Vicky every fortnight. Fitness, altitude, cost, coming
              alone, what summit night is actually like — bring the question you feel
              silly asking.
            </Body>
            <div className="mt-7">
              <CTAButton cta={SECONDARY_CTAS.liveQA} variant="secondary" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Create Your Own Journey — secondary route, still full weight ── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">Travel with your own people</Eyebrow>
        <Heading>Create Your Own Journey</Heading>
        <Body className="mt-7">
          Not everyone wants a mountain or a group of strangers. If you have your own
          people — a partner, your family, a handful of friends — we build private
          Tanzania journeys with the same queer-aware planning, trusted local partners and
          honest guidance that shape every Vala trip.
        </Body>
        <div className="mt-8">
          <CTAButton cta={SECONDARY_CTAS.ownJourney} variant="secondary" />
        </div>
      </Section>

      {/* ── Impact teaser ──────────────────────────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">Local by Design</Eyebrow>
        <Heading>Adventure first. Then the receipts.</Heading>
        <Body className="mt-7">
          Locally owned accommodation wherever possible, local guides paid properly, and
          five percent of pre-tax net profit committed to supporting women in Tanzania.
          Specific, checkable, and never the reason we ask you to come.
        </Body>
        <div className="mt-8">
          <Link to={ROUTES.impact}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            Read the impact model
          </Link>
        </div>
      </Section>

      <CTAStrip
        heading="Come and find out who else is going."
        body={BRAND.creativeLine}
        secondary={[SECONDARY_CTAS.contact, SECONDARY_CTAS.guide, SECONDARY_CTAS.liveQA]}
      />
    </PageShell>
  );
}
