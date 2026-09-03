import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import Accordion from '../components/editorial/Accordion';
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
    heading: 'The waitlist',
    items: [
      { q: 'What does joining the waitlist actually do?', a: 'It tells us you want a 2028 departure that is not February, and it means you hear when the next one is announced before it is public. It is not a booking and it costs nothing.' },
      { q: 'Does the waitlist give me priority?', a: 'Yes, in the practical sense: waitlist emails go out before anything else. It is not a formal queue and we will not pretend it is.' },
      { q: 'Can I join the waitlist and also enquire about February?', a: 'Of course. Plenty of people do both while they work out whether the dates are possible.' },
      { q: 'How often will you email me?', a: 'Rarely. When a departure is announced, and when something genuinely useful exists. You can leave at any time.' },
    ],
  },
  {
    heading: 'Private and bespoke journeys',
    items: [
      { q: 'What if I do not want a group trip at all?', a: 'Then Create Your Own Journey is the route. Private Tanzania travel for couples, families, friends and groups, with the same partners and the same care.' },
      { q: 'Is a private journey more expensive?', a: 'Usually, yes — you are not sharing a vehicle, a guide or a group booking. How much depends entirely on shape, so we would rather quote than guess.' },
      { q: 'Can we climb Kilimanjaro privately?', a: 'Yes. The mountain does not have to be a hosted group departure, though you would lose Base Camp and the group that comes with it.' },
      { q: 'How far ahead do private journeys need booking?', a: 'Less than the hosted departures, but the good accommodation goes early. Talk to us as soon as it is a real idea.' },
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
          <Accordion items={g.items} idPrefix={g.heading.toLowerCase().replace(/[^a-z]+/g, '-')} />
        </Section>
      ))}

      <CTAStrip
        heading="Still unsure?"
        secondary={[SECONDARY_CTAS.liveQA, SECONDARY_CTAS.contact, SECONDARY_CTAS.guide]}
      />
    </PageShell>
  );
}
