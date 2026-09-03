import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Subheading, Body, Lede } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';
import { OBJECTIONS } from '../data/kilimanjaro';

/* FAQ — FS 6.9. Footer-only in Sitemap V2, but a real page. */

const GROUPS = [
  {
    heading: 'Fitness and training',
    items: [
      { q: 'How fit do I need to be?', a: 'Fit enough to walk for six to eight hours on consecutive days by the time you fly — not at the point you book. The four-month training period exists precisely to close that gap.' },
      { q: 'What if I fall behind the group?', a: 'The pace is set by the group, not the fastest person in it. Guides walk at the back as well as the front.' },
    ],
  },
  {
    heading: 'Altitude and safety',
    items: [
      { q: 'What if the altitude affects me badly?', a: 'Guides monitor oxygen saturation daily and carry emergency oxygen. Descending is the treatment, and the decision is the guide’s — never yours to argue.' },
      { q: 'What happens if I have to turn back?', a: 'You are supported down and looked after. Nobody is left to manage it alone, and nobody treats it as a failure.' },
    ],
  },
  {
    heading: 'Coming alone',
    items: OBJECTIONS.slice(0, 1).map((o) => ({ q: o.q, a: o.a })).concat([
      { q: 'Will I have to share a room?', a: 'Room arrangements are confirmed with you before travel. If sharing matters to you either way, say so and it is handled.' },
    ]),
  },
  {
    heading: 'Tanzania',
    items: [
      { q: 'Is it safe for me as a queer woman?', a: 'Homosexuality is illegal in Tanzania and we will not pretend otherwise. In practice, this is managed by choosing partners and accommodation carefully, briefing the people supporting you, and being honest with you about where discretion is sensible.' },
      { q: 'Do I need a visa?', a: 'Yes, for most nationalities. Guidance is included in your pre-departure pack.' },
    ],
  },
  {
    heading: 'Booking and cost',
    items: [
      { q: 'What does all-inclusive actually cover?', a: 'Accommodation, meals on the mountain, park and permit fees, local crew, transfers, training and hosting. Flights, insurance, visas, personal kit and crew tips are separate.' },
      { q: 'How far ahead do I need to book?', a: 'Three to four months minimum, so there is time to train properly.' },
      { q: 'What happens on the 15 minute call?', a: 'Vicky answers your questions. If the trip is not right for you, you will be told on the call.' },
    ],
  },
];

export default function FAQ() {
  return (
    <PageShell>
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[780px] opacity-45" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Questions</Eyebrow>
          <Display>The things<br />people actually ask.</Display>
          <Lede className="mt-8 max-w-xl">
            If yours is not here, ask it on a call or at a live session. No question is too
            small or too awkward.
          </Lede>
        </div>
      </section>

      {GROUPS.map((g) => (
        <Section key={g.heading} width="default">
          <Eyebrow className="mb-8">{g.heading}</Eyebrow>
          <div className="flex flex-col gap-9">
            {g.items.map((item) => (
              <div key={item.q} className="border-t border-ink/12 pt-6">
                <Subheading className="text-[5.5vw] md:text-[22px]">{item.q}</Subheading>
                <Body className="mt-3 max-w-2xl">{item.a}</Body>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <CTAStrip
        heading="Still unsure?"
        secondary={[SECONDARY_CTAS.liveQA, SECONDARY_CTAS.contact, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}
