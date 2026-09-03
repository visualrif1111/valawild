import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Subheading, Body, Lede, Quote } from '../components/editorial/Type';
import { Horizon, ArcRule } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';

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

      <ArcRule />

      <Section width="default">
        <Eyebrow className="mb-8">The four months</Eyebrow>
        <div className="flex flex-col gap-10">
          {STAGES.map((s) => (
            <div key={s.when} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-10 border-t border-cream/12 pt-6">
              <p className="font-['Kufam',sans-serif] text-[10px] tracking-[0.24em] uppercase text-ember/70 pt-1">{s.when}</p>
              <div>
                <Subheading className="text-[5.5vw] md:text-[23px]">{s.title}</Subheading>
                <Body className="mt-3 max-w-2xl">{s.body}</Body>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTAStrip
        heading="Come and see who else is going."
        secondary={[SECONDARY_CTAS.liveQA, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}
