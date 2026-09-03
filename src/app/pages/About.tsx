import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { BandRule } from '../components/editorial/Poster';
import { Eyebrow, Display, Heading, Body, Lede, Quote } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';
import { BRAND } from '../data/site';

/* About Vala / About Vicky — FS 6.4. Trust-focused, not autobiography. */

export default function About() {
  return (
    <PageShell>
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[850px] opacity-55" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">About</Eyebrow>
          <Display>Why Vala Wild<br />exists.</Display>
          <Lede className="mt-8 max-w-xl">
            Because the trip Vicky wanted to go on did not exist, and the people who needed
            it most were the ones least likely to have someone to go with.
          </Lede>
        </div>
      </section>

      <Section width="narrow">
        <Eyebrow className="mb-6">The founder</Eyebrow>
        <Heading>Vicky</Heading>
        <Body className="mt-7">
          Vicky has climbed Kilimanjaro before. That matters less for the summit photo than
          for everything around it — knowing how the altitude actually feels on day four,
          which operators are worth trusting, what a group needs at the point it stops being
          fun, and how to get people up a mountain who did not believe they could.
        </Body>
        <Body className="mt-5">
          Vala Wild grew out of a straightforward observation: plenty of queer women want to
          do something enormous, and almost none of them have a ready-made person to do it
          with. Hosted, all-inclusive, solo-first travel closes that gap.
        </Body>
        <Quote className="mt-10">{BRAND.creativeLine}</Quote>
      </Section>

      <BandRule />

      <Section width="narrow">
        <Eyebrow className="mb-6">Why it’s built this way</Eyebrow>
        <Heading>Community is the product.</Heading>
        <Body className="mt-7">
          The mountain is the reason people come. The group is why they finish, and why they
          come back. That is why Base Camp starts months before departure, why groups stay
          small, and why we would rather run fewer trips properly than more trips loosely.
        </Body>
        <Body className="mt-5">
          Lesbian-led and queer-inclusive is not a marketing line here — it determines which
          partners we use, how accommodation is booked, how guides are briefed, and how
          honest we are with you about the country you are travelling to.
        </Body>
      </Section>

      <CTAStrip
        heading="Ask Vicky anything."
        secondary={[SECONDARY_CTAS.contact, SECONDARY_CTAS.liveQA]}
      />
    </PageShell>
  );
}
