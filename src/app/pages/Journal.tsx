import { Link } from 'react-router';
import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Display, Subheading, Body, Lede, Label } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAStrip from '../components/cta/CTAStrip';
import GuideDownload from '../components/cta/GuideDownload';
import { SECONDARY_CTAS } from '../data/ctas';
import { ARTICLES } from '../data/journal';
import { ROUTES } from '../data/site';

/* Journal / Guides / Resources — FS 6.6. SEO/GEO and pre-conversion education. */

export default function Journal() {
  const live = ARTICLES.filter((a) => a.published);
  const soon = ARTICLES.filter((a) => !a.published);

  return (
    <PageShell>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[800px] opacity-50" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Journal / Guides / Resources</Eyebrow>
          <Display>Everything we<br />know, written down.</Display>
          <Lede className="mt-8 max-w-xl">
            Training, kit, altitude, safety and what it is actually like. Useful whether or
            not you ever travel with us.
          </Lede>
        </div>
      </section>

      <Section width="wide">
        <Eyebrow className="mb-8">Guides & resources</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {live.map((a) => (
            <Link key={a.slug} to={`${ROUTES.journal}/${a.slug}`}
              className="group border-t border-ink/12 pt-6 block transition-colors duration-300 hover:border-clay/50">
              <Label className="text-clay">{a.category}</Label>
              <Subheading className="mt-3 group-hover:text-clay transition-colors duration-300">{a.title}</Subheading>
              <Body className="mt-3">{a.summary}</Body>
            </Link>
          ))}
        </div>
      </Section>

      {soon.length > 0 && (
      <Section width="wide">
        <Eyebrow className="mb-8">Coming shortly</Eyebrow>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {soon.map((a) => (
            <li key={a.slug} className="border-t border-ink/10 pt-5">
              <Label className="text-smoke/55">{a.category}</Label>
              <p className="font-['Cormorant_Garamond',serif] font-light text-[19px] leading-[1.4] text-smoke/75 mt-2">
                {a.title}
              </p>
            </li>
          ))}
        </ul>
      </Section>
      )}

      <Section width="default">
        <GuideDownload />
      </Section>

      <CTAStrip secondary={[SECONDARY_CTAS.liveQA, SECONDARY_CTAS.contact]} />
    </PageShell>
  );
}
