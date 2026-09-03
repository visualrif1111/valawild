import { Link } from 'react-router';
import PageShell from '../components/PageShell';
import { Eyebrow, Display, Body } from '../components/editorial/Type';
import { Horizon } from '../components/editorial/Arc';
import CTAButton from '../components/cta/CTAButton';
import { PRIMARY_CTA } from '../data/ctas';
import { ROUTES } from '../data/site';

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-8 md:px-16 text-center overflow-hidden">
        <Horizon className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130vw] md:w-[800px] opacity-45" />
        <div className="relative z-10 max-w-2xl flex flex-col items-center pt-24">
          <Eyebrow className="mb-7">Off the trail</Eyebrow>
          <Display>Nothing here.</Display>
          <Body className="mt-7 max-w-md">
            This page has either moved or never existed. Neither is your fault.
          </Body>
          <div className="mt-10 flex flex-col items-center gap-6">
            <CTAButton cta={PRIMARY_CTA} variant="primary" />
            <Link to={ROUTES.home}
              className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-smoke/90 border-b border-ink/20 pb-1 hover:text-ink hover:border-clay transition-all duration-300">
              Back to the beginning
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
