import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Body, Lede, Label } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import EnquiryForm from '../components/cta/EnquiryForm';
import { SECONDARY_CTAS } from '../data/ctas';
import { INTEGRATIONS } from '../data/integrations';

/* Live Q&A / Events — FS 6.8. Sub-page of Kilimanjaro in Sitemap V2.
   The lower-friction route for people not ready for a 1:1 call. */

const PROMPTS = [
  'Could I actually do this at my fitness level?',
  'What does altitude really feel like?',
  'What does it cost once everything is added up?',
  'What is it like arriving on my own?',
  'Is Tanzania safe for me specifically?',
  'What happens if I have to turn back?',
];

export default function LiveQA() {
  return (
    <PageShell>
      <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[800px] opacity-50" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Live Q&amp;A / Events</Eyebrow>
          <Display>Bring the question<br />you feel silly asking.</Display>
          <Lede className="mt-8 max-w-xl">
            A live session with Vicky every fortnight. Turn your camera off, stay quiet, and
            just listen if you would rather.
          </Lede>
        </div>
      </section>

      <Section width="default">
        <div className="border border-ink/12 rounded-3xl p-8 md:p-12 bg-cream">
          <Label className="text-clay">Next session</Label>
          <Heading className="mt-4">Couch to Kili</Heading>
          <Body className="mt-4 max-w-xl">
            Fortnightly, live, roughly forty-five minutes. Dates are announced by email —
            register once and you’ll get the invitation each time.
          </Body>
          <p className="font-['Cormorant_Garamond',serif] italic font-light text-[15px] text-smoke/75 mt-6">
            {/* TODO: replace with live event dates once scheduling is confirmed */}
            Next date to be announced.
          </p>
        </div>
      </Section>

      <Section width="default">
        <Eyebrow className="mb-6">What people ask</Eyebrow>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {PROMPTS.map((p) => (
            <li key={p} className="flex gap-4 items-start">
              <span aria-hidden className="mt-3 w-3 h-px bg-clay/60 shrink-0" />
              <span className="font-['Cormorant_Garamond',serif] italic font-light text-[18px] leading-[1.6] text-smoke">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section width="default">
        <Eyebrow className="mb-6">Register</Eyebrow>
        <Heading>Save your place.</Heading>
        <Body className="mt-6 mb-12 max-w-xl">
          One registration covers every session. No obligation to speak, and no follow-up
          sales call unless you ask for one.
        </Body>
        <EnquiryForm
          endpoint={INTEGRATIONS.endpoints.liveQA}
          submitLabel="Join the Next Live Q&A"
          prompt="Anything you'd like covered on the session?"
        />
      </Section>

      <CTAStrip
        heading="Would you rather just talk one to one?"
        secondary={[SECONDARY_CTAS.contact, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}
