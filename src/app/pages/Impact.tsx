import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { BandRule } from '../components/editorial/Poster';
import { Eyebrow, Display, Heading, Subheading, Body, Lede } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAButton from '../components/cta/CTAButton';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';

/* Impact / Local by Design — FS 6.5. Specific and checkable, never vague.
   Sitemap V2 nests Create Your Own Journey under Impact in the footer. */

const COMMITMENTS = [
  { title: 'Five percent of pre-tax net profit', body: 'Committed to supporting women in Tanzania. Pre-tax, net, and stated as a figure rather than a gesture.' },
  { title: 'Locally owned accommodation',        body: 'Wherever it exists at the standard we need, the money stays with people who live there.' },
  { title: 'Local guides and crew, paid properly', body: 'Mountain crews are the most underpaid part of this industry. Ours are not, and we will tell you what they are paid.' },
  { title: 'One operator, known personally',      body: 'We work with the same local partner every time rather than whoever quotes lowest that season.' },
];

export default function Impact() {
  return (
    <PageShell>
      <section className="relative min-h-[78vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[850px] opacity-55" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Local by Design</Eyebrow>
          <Display>Adventure first.<br />Then the receipts.</Display>
          <Lede className="mt-8 max-w-xl">
            We are an adventure company, not a charity with a mountain attached. What we
            commit to, we commit to specifically.
          </Lede>
        </div>
      </section>

      <Section width="default">
        <Eyebrow className="mb-8">What we commit to</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {COMMITMENTS.map((c, i) => (
            <div key={c.title} className="border-t border-ink/12 pt-6">
              <span className="font-['Kufam',sans-serif] text-[10px] tracking-[0.2em] text-moss">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Subheading className="mt-3 text-[5.5vw] md:text-[23px]">{c.title}</Subheading>
              <Body className="mt-3">{c.body}</Body>
            </div>
          ))}
        </div>
      </Section>

      <BandRule />

      <Section width="narrow">
        <Eyebrow className="mb-6">What “Local by Design” means</Eyebrow>
        <Heading>Design decisions, not donations.</Heading>
        <Body className="mt-7">
          Local by Design means the local economy is built into how the trip is constructed
          rather than added afterwards as a percentage. Who is hired, where you sleep, who
          cooks, who guides, and who is paid what — decided at the point the itinerary is
          designed, which is the only point at which those decisions are cheap to make well.
        </Body>
      </Section>

      {/* ── Proof / transparency — wireframe 05.05 ───────────────────────── */}
      <Section width="default">
        <Eyebrow className="mb-6">Proof, and where it is missing</Eyebrow>
        <Heading>What we can show you, and what we can’t yet.</Heading>
        <Body className="mt-7 max-w-2xl">
          A commitment nobody can check is a slogan. These are the things we intend to
          publish, and we would rather list them as pending than imply they already exist.
        </Body>
        <div className="mt-12 flex flex-col gap-6">
          {PROOF.map((p) => (
            <div key={p.item} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-t border-ink/12 pt-5">
              <span className={`font-['Kufam',sans-serif] text-[9px] tracking-[0.24em] uppercase shrink-0 w-32 ${
                p.status === 'Published' ? 'text-moss' : 'text-smoke/70'}`}>
                {p.status}
              </span>
              <span className="font-['Cormorant_Garamond',serif] font-light text-[18px] leading-[1.6] text-ink/85">
                {p.item}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Sitemap V2 routes Create Your Own Journey from Impact */}
      <Section width="narrow">
        <Eyebrow className="mb-6">Travel with your own people</Eyebrow>
        <Heading>Private journeys, same standards.</Heading>
        <Body className="mt-7">
          Everything on this page applies equally to private journeys — same operator, same
          accommodation choices, same commitment on profit.
        </Body>
        <div className="mt-8">
          <CTAButton cta={SECONDARY_CTAS.ownJourney} variant="secondary" label="Create Your Own Journey" />
        </div>
      </Section>

      <CTAStrip
        heading="Ask us about the impact model."
        secondary={[SECONDARY_CTAS.contact, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}

/* Wireframe 05.05. Status is deliberately honest — the 5% figure is committed
   but the reporting behind it does not exist yet, and saying so is worth more
   than implying it does. */
const PROOF = [
  { status: 'Published',  item: 'The 5% of pre-tax net profit commitment, stated as a figure rather than a gesture.' },
  { status: 'Published',  item: 'Named local operating partner, used on every journey rather than tendered each season.' },
  { status: 'To follow',  item: 'Annual figure showing what the 5% amounted to, and who received it.' },
  { status: 'To follow',  item: 'Mountain crew pay rates, published against the Kilimanjaro porter guidelines.' },
  { status: 'To follow',  item: 'Proportion of trip spend that stays inside Tanzania.' },
];
