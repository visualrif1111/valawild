import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { BandRule } from '../components/editorial/Poster';
import { Eyebrow, Display, Heading, Subheading, Body, Lede, Quote, Label } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import CTAButton from '../components/cta/CTAButton';
import { ROUTES } from '../data/site';
import { Link } from 'react-router';

/* Base Camp — sub-page of Kilimanjaro in Sitemap V2.
   FS: the pre-trip community and preparation layer. This is the answer to the
   single biggest objection — arriving alone. */

const STAGES = [
  { when: 'Month one',   title: 'You meet the others', body: 'Introductions, the group chat, and the first shared training week. Most people are quietly relieved to find everyone else is nervous too.' },
  { when: 'Month two',   title: 'Training gets real',  body: 'Structured build-up, hill walks where you can get to them, and kit questions answered by people who have carried it.' },
  { when: 'Month three', title: 'Kit and logistics',   body: 'What to buy, what to borrow, what not to waste money on. Flights coordinated so people arrive together where possible.' },
  { when: 'Month four',  title: 'The last push',       body: 'Final preparation, altitude briefing, and the practical detail of what the first day actually looks like.' },
];

export default function BaseCamp() {
  return (
    <PageShell>
      <section className="relative min-h-[78vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[850px] opacity-55" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Base Camp</Eyebrow>
          <Display>Nobody arrives<br />as a stranger.</Display>
          <Lede className="mt-8 max-w-xl">
            The four months before you fly are part of the trip. This is the part that makes
            coming alone survivable — and then genuinely good.
          </Lede>
        </div>
      </section>

      <Section width="narrow">
        <Eyebrow className="mb-6">The idea</Eyebrow>
        <Heading>A group that forms before the airport.</Heading>
        <Body className="mt-7">
          Most group trips introduce you to each other in a hotel lobby on day one. That is
          the moment solo travellers dread, and it is entirely avoidable.
        </Body>
        <Body className="mt-5">
          Base Camp starts the day you book. By the time you land, you have trained
          alongside these people for months, complained to them about boot blisters, and
          worked out who you will be walking next to.
        </Body>
        <Quote className="mt-10">
          You are not joining a tour. You are joining a group that has been waiting for you.
        </Quote>
      </Section>

      <BandRule />

      <Section width="default">
        <Eyebrow className="mb-8">The four months</Eyebrow>
        <div className="flex flex-col gap-10">
          {STAGES.map((s) => (
            <div key={s.when} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10 border-t border-ink/12 pt-6">
              <p className="font-['Kufam',sans-serif] text-[10px] tracking-[0.24em] uppercase text-moss pt-1">{s.when}</p>
              <div>
                <Subheading className="text-[5.5vw] md:text-[23px]">{s.title}</Subheading>
                <Body className="mt-3 max-w-2xl">{s.body}</Body>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Solo reassurance — wireframe 08.06 ───────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">If you are coming alone</Eyebrow>
        <Heading>The whole thing is built for you.</Heading>
        <Body className="mt-7">
          Most people on a Vala departure book on their own. Not as a brave exception —
          as the default the trip is designed around.
        </Body>
        <ul className="mt-9 flex flex-col gap-5">
          {SOLO.map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <span aria-hidden className="mt-[0.85em] w-3 h-px bg-moss shrink-0" />
              <span className="font-['Cormorant_Garamond',serif] font-light text-[18px] leading-[1.7] text-ink/85">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <Quote className="mt-11">
          Nobody has to be brave in the hotel lobby. That moment simply does not happen here.
        </Quote>
      </Section>

      {/* ── The trip this prepares you for — wireframe 08.07 ──────────────── */}
      <Section width="default">
        <div className="border border-clay/35 rounded-3xl p-8 md:p-12 bg-cream">
          <Label className="text-clay">What Base Camp is for</Label>
          <Heading className="mt-4">Mount Kilimanjaro</Heading>
          <Body className="mt-5 max-w-2xl">
            Base Camp exists to get you to a specific mountain, in a specific month, with
            specific people. February 2028 is open for enquiries now.
          </Body>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to={ROUTES.kilimanjaro}
              className="inline-flex font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase bg-clay text-paper rounded-full px-9 py-4 hover:bg-ember transition-all duration-500">
              Explore Kilimanjaro
            </Link>
            <CTAButton cta={PRIMARY_CTA} variant="quiet" />
          </div>
        </div>
      </Section>

      <CTAStrip
        heading="Come and see who else is going."
        secondary={[SECONDARY_CTAS.liveQA, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}

/* Wireframe 08.06 — the single biggest objection, answered concretely. */
const SOLO = [
  'You are introduced to the group months before departure, not in a lobby on day one.',
  'Room arrangements are confirmed with you in advance — sharing is never assumed.',
  'Training happens together, so the first thing you have in common is the hard part.',
  'Guides know who is travelling alone and keep an eye out accordingly.',
  'There is no couples’ table. There is no single supplement surprise at the end.',
];
