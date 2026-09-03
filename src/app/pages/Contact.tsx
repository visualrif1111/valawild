import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Heading, Body, Lede } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAButton from '../components/cta/CTAButton';
import EnquiryForm from '../components/cta/EnquiryForm';
import { PRIMARY_CTA, SECONDARY_CTAS } from '../data/ctas';
import { INTEGRATIONS, hasCalendly } from '../data/integrations';
import { BRAND } from '../data/site';

/* Contact / Book a Call — FS 6.7. Structured around the primary CTA.
   Sitemap V2 hangs "CTA : CONTACT US" off the homepage; this is where it lands. */

export default function Contact() {
  return (
    <PageShell>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[800px] opacity-50" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Contact</Eyebrow>
          <Display>Fifteen minutes.<br />No pitch.</Display>
          <Lede className="mt-8 max-w-xl">
            A short, no-pressure conversation about whether this is right for you — and an
            honest answer if it isn’t.
          </Lede>
          <div className="mt-10">
            <CTAButton cta={PRIMARY_CTA} variant="primary" />
          </div>
        </div>
      </section>

      <Section width="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow className="mb-6">Book the call</Eyebrow>
            <Heading className="text-[7vw] md:text-[32px]">What happens on it</Heading>
            <Body className="mt-6">
              Vicky asks what you’re thinking about and answers whatever you ask. Fitness,
              altitude, cost, coming alone, travelling as a queer woman in Tanzania — the
              things that are hard to put in a form.
            </Body>
            <Body className="mt-4">
              Nobody is sold to. If the trip isn’t right for you, you’ll be told so on the
              call rather than three emails later.
            </Body>

            {hasCalendly() ? (
              <div className="mt-8">
                <CTAButton cta={PRIMARY_CTA} variant="secondary" />
              </div>
            ) : (
              /* Calendly not yet configured — the enquiry form carries the load */
              <p className="font-['Cormorant_Garamond',serif] italic font-light text-[15px] text-cream/40 mt-8">
                Scheduling opens shortly — send the form and we’ll offer you times.
              </p>
            )}

            <div className="mt-10 pt-8 border-t border-cream/12">
              <Eyebrow className="mb-4">Prefer email?</Eyebrow>
              <a href={`mailto:${BRAND.email}`}
                className="font-['Kufam',sans-serif] text-[11px] tracking-[0.14em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
                {BRAND.email}
              </a>
              <Body className="mt-5 text-[15px]">We reply within two working days.</Body>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-6">Or just ask a question</Eyebrow>
            <EnquiryForm
              endpoint={INTEGRATIONS.endpoints.enquiry}
              travellingAs
              submitLabel="Send Enquiry"
            />
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <CTAButton cta={SECONDARY_CTAS.liveQA} variant="quiet" />
              <CTAButton cta={SECONDARY_CTAS.guide} variant="quiet" />
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
