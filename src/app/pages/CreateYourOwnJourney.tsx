import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Heading, Subheading, Lede, Body, Quote, Label, PosterEyebrow, PosterTitle, PosterLede } from '../components/editorial/Type';
import { PosterBlock, BandRule } from '../components/editorial/Poster';
import CTAButton from '../components/cta/CTAButton';
import CTAStrip from '../components/cta/CTAStrip';
import EnquiryForm from '../components/cta/EnquiryForm';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import { INTEGRATIONS } from '../data/integrations';

/* ─────────────────────────────────────────────────────────────────────────────
   CREATE YOUR OWN JOURNEY — FS 6.3, and a top-level page in Sitemap V2.

   This is the secondary commercial pathway ("Travel with your own people"),
   and it carries full page weight: its own hero, audience, safety and support
   detail, expectation-setting and a dedicated enquiry route.

   Positioning guardrail from FS 4A: this must not make Vala Wild look like two
   competing businesses or a general holiday website. Hosted adventures remain
   the dominant proposition — this page is explicitly framed as the other way
   in, for people who already have their people.
   ───────────────────────────────────────────────────────────────────────── */

const AUDIENCES = [
  { title: 'Two mums and a car seat',   body: 'A family safari where the room booking is confirmed as a family room, and nobody has to explain the family at check-in.' },
  { title: 'Two dads and a nine-year-old', body: 'Guides briefed in advance, accommodation chosen deliberately, and an itinerary paced for a child rather than a brochure.' },
  { title: 'A couple, quietly',         body: 'A double bed confirmed in writing before you travel, and honest advice about where discretion is worth it.' },
  { title: 'Trans and non-binary travellers', body: 'Names and pronouns shared with the people supporting you directly, with your permission, and never beyond that.' },
  { title: 'Friends, plural',           body: 'A private group trip with the logistics handled and none of the group-chat admin that usually kills the idea.' },
];

const SUPPORT = [
  { title: 'A trusted local partner',   body: 'We work with the same operator on every journey. Not a marketplace, not the cheapest quote — people we know, who know us.' },
  { title: 'Accommodation chosen, not filtered', body: 'Every property is selected deliberately. Where a room arrangement matters, we confirm it in writing before you travel.' },
  { title: 'Guides briefed beforehand', body: 'The people who spend the week with you are briefed on who is travelling and how you would like to be addressed.' },
  { title: 'Honest safety guidance',    body: 'Homosexuality is illegal in Tanzania. We will tell you plainly what that means day to day, where discretion is sensible, and where it genuinely is not an issue.' },
];

export default function CreateYourOwnJourney() {
  return (
    <PageShell navTone="dark">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <PosterBlock className="min-h-screen flex items-center justify-center">
        <div className="px-8 md:px-16 text-center max-w-4xl mx-auto pt-52 md:pt-60 pb-[calc(38vh+140px)] md:pb-[calc(42vh+150px)] flex flex-col items-center">
          <PosterEyebrow className="mb-8">Private Tanzania journeys</PosterEyebrow>
          <PosterTitle>Travel with<br />your own people.</PosterTitle>
          <PosterLede className="mt-9 max-w-2xl">
            You already have the people. What you want is someone to plan it who
            understands who is travelling, and does not need it explained twice.
          </PosterLede>
          <div className="mt-12 flex flex-col items-center gap-6">
            <CTAButton cta={SECONDARY_CTAS.ownJourney} variant="poster" label="Start Your Own Journey" />
            <CTAButton cta={PRIMARY_CTA} variant="posterQuiet" />
          </div>
        </div>
      </PosterBlock>

      {/* ── Framing ────────────────────────────────────────────────────── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">Two ways in</Eyebrow>
        <Heading>Come with us, or bring your own.</Heading>
        <Body className="mt-7">
          Most of what Vala Wild does is hosted group adventure — solo travellers, a shared
          departure, a group that forms months in advance. Kilimanjaro is the heart of it.
        </Body>
        <Body className="mt-5">
          This is the other door. Same country, same local partners, same care about who is
          travelling and what that means on the ground — but private, paced to you, and
          built around the people you are already bringing.
        </Body>
        <Quote className="mt-10">
          Not a different company. A different door into the same one.
        </Quote>
      </Section>

      <BandRule />

      {/* ── Who this is for ────────────────────────────────────────────── */}
      <Section width="wide">
        <Eyebrow className="mb-6">Who books these</Eyebrow>
        <Heading className="max-w-2xl">Journeys built around who is actually travelling.</Heading>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {AUDIENCES.map((a) => (
            <div key={a.title} className="border-t border-ink/12 pt-6">
              <Subheading className="text-[5.5vw] md:text-[22px]">{a.title}</Subheading>
              <Body className="mt-3">{a.body}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Journey interest cards — wireframe 03.03 ─────────────────────── */}
      <Section width="wide">
        <Eyebrow className="mb-6">What people ask us for</Eyebrow>
        <Heading className="max-w-2xl">Start from whichever of these sounds like you.</Heading>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERESTS.map((it) => (
            <a key={it.title} href="#enquiry"
              className="group border border-ink/12 rounded-3xl p-7 bg-cream hover:border-moss transition-colors duration-300">
              <Label className="text-moss">{it.tag}</Label>
              <Subheading className="mt-3 text-[5.5vw] md:text-[21px] group-hover:text-moss transition-colors duration-300">
                {it.title}
              </Subheading>
              <Body className="mt-3 text-[16px]">{it.body}</Body>
            </a>
          ))}
        </div>
      </Section>

      {/* ── What we handle ─────────────────────────────────────────────── */}
      <Section width="default">
        <Eyebrow className="mb-6">What we actually do</Eyebrow>
        <Heading>Planning that accounts for you.</Heading>
        <div className="mt-12 flex flex-col gap-10">
          {SUPPORT.map((s, i) => (
            <div key={s.title} className="flex gap-7 items-start">
              <span className="font-['Kufam',sans-serif] text-[10px] tracking-[0.2em] text-clay/60 pt-2 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <Subheading className="text-[5.5vw] md:text-[23px]">{s.title}</Subheading>
                <Body className="mt-3 max-w-2xl">{s.body}</Body>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How the process works — wireframe 03.05 ──────────────────────── */}
      <Section width="default">
        <Eyebrow className="mb-6">How it works</Eyebrow>
        <Heading>Four steps, no obligation until the third.</Heading>
        <ol className="mt-12 flex flex-col gap-10">
          {PROCESS.map((step, i) => (
            <li key={step.title} className="flex gap-7 items-start">
              <span className="font-['Kufam',sans-serif] text-[10px] tracking-[0.2em] text-moss pt-2 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <Subheading className="text-[5.5vw] md:text-[23px]">{step.title}</Subheading>
                <Body className="mt-2 max-w-2xl">{step.body}</Body>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Example routes — wireframe 03.06 ──────────────────────────────── */}
      <Section width="wide">
        <Eyebrow className="mb-6">Shapes we have built before</Eyebrow>
        <Heading className="max-w-2xl">Examples, not packages.</Heading>
        <Body className="mt-6 max-w-2xl">
          Nothing here is a fixed itinerary with a price. They are shapes — starting points
          to argue with.
        </Body>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROUTES_EXAMPLES.map((r) => (
            <div key={r.title} className="border-t-2 border-clay pt-6">
              <Label className="text-clay">{r.shape}</Label>
              <Subheading className="mt-3 text-[5.5vw] md:text-[21px]">{r.title}</Subheading>
              <Body className="mt-3 text-[16px]">{r.body}</Body>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Expectation setting — FS 4A requires honesty over promises ─── */}
      <Section width="narrow">
        <Eyebrow className="mb-6">What we won’t promise</Eyebrow>
        <Heading>We can brief a guide. We can’t rewrite a country.</Heading>
        <Body className="mt-7">
          We will not tell you that every hotel employee, driver and stranger will treat you
          perfectly, because we cannot promise that and you would be right not to believe us.
        </Body>
        <Body className="mt-5">
          What we will promise: we listen, we respect who you are, we brief the people
          directly supporting you, we choose partners accordingly — and we are honest with
          you in advance about what to expect, including the parts that are uncomfortable.
        </Body>
      </Section>

      <BandRule />

      {/* ── Enquiry ────────────────────────────────────────────────────── */}
      <Section width="default" id="enquiry">
        <Eyebrow className="mb-6">Start the conversation</Eyebrow>
        <Heading>Tell us what you’re dreaming about.</Heading>
        <Body className="mt-6 mb-12 max-w-2xl">
          Rough ideas are welcome. Dates, headcount and budget can all be vague at this
          stage — we would rather hear the shape of it and work backwards.
        </Body>
        <EnquiryForm
          id="enquiry"
          endpoint={INTEGRATIONS.endpoints.ownJourney}
          travellingAs
          submitLabel="Send Your Enquiry"
          prompt="Who is travelling, roughly when, and what would make it worth doing?"
        />
      </Section>

      <CTAStrip
        heading="Would it help to talk it through first?"
        secondary={[SECONDARY_CTAS.contact, SECONDARY_CTAS.liveQA]}
      />
    </PageShell>
  );
}

/* Wireframe 03.03 — entry points, each landing on the same enquiry form. */
const INTERESTS = [
  { tag: 'Family',    title: 'A family safari',        body: 'Two mums, two dads, or one of each — with the room booking confirmed as a family room before you travel.' },
  { tag: 'Couple',    title: 'Just the two of us',     body: 'A double bed confirmed in writing, and honest advice about where discretion is worth it.' },
  { tag: 'Friends',   title: 'A group of friends',     body: 'The logistics handled, without the group-chat admin that usually kills the idea.' },
  { tag: 'Milestone', title: 'Something worth marking', body: 'A birthday, an anniversary, a divorce, a recovery. Reasons to travel that are nobody else’s business.' },
  { tag: 'Mixed',     title: 'Safari and the mountain', body: 'The Kilimanjaro trek privately rather than as a hosted group, with safari either side.' },
  { tag: 'Not sure',  title: 'No idea yet',            body: 'Genuinely fine. Most enquiries start as a country and a rough month.' },
];

/* Wireframe 03.05 */
const PROCESS = [
  { title: 'Tell us the shape of it',  body: 'Roughly who, roughly when, and what would make it worth doing. Dates and budget can both be vague.' },
  { title: 'We come back with options', body: 'Two or three directions, with honest notes on cost, pacing and anything we would flag about travelling as you.' },
  { title: 'We build it properly',      body: 'Only once you want to go ahead. Accommodation confirmed, rooms confirmed in writing, guides briefed.' },
  { title: 'You travel, we stay reachable', body: 'A named contact throughout, not a call centre. And an honest debrief afterwards if you want one.' },
];

/* Wireframe 03.06 — deliberately unpriced. */
const ROUTES_EXAMPLES = [
  { shape: 'Around a week',   title: 'Northern circuit safari', body: 'The classic parks at an unhurried pace, with a private vehicle so the day is yours to set.' },
  { shape: 'Around two weeks', title: 'Safari and Kilimanjaro',  body: 'The mountain privately rather than in a hosted group, with days either side to recover properly.' },
  { shape: 'Longer',           title: 'Slow Tanzania',           body: 'Fewer places, more nights in each. Built for people who hate being moved on every morning.' },
];
