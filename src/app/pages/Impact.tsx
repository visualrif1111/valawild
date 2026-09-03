import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Subheading, Body, Lede } from '../components/editorial/Type';
import { Horizon, ArcRule } from '../components/editorial/Arc';
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
            <div key={c.title} className="border-t border-cream/12 pt-6">
              <span className="font-['Kufam',sans-serif] text-[10px] tracking-[0.2em] text-ember/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <Subheading className="mt-3 text-[5.5vw] md:text-[23px]">{c.title}</Subheading>
              <Body className="mt-3">{c.body}</Body>
            </div>
          ))}
        </div>
      </Section>

      <ArcRule />

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
