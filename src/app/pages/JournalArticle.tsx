import { Navigate, useParams, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import Footer from '../components/Footer';
import PageShell from '../components/PageShell';
import Section from '../components/editorial/Section';
import { Eyebrow, Heading, Body } from '../components/editorial/Type';
import SafariBackground from '../components/backgrounds/SafariBackground';
import SafariEditorial from '../components/SafariEditorial';
import KilimanjaroBackground from '../components/backgrounds/KilimanjaroBackground';
import KilimanjaroEditorial from '../components/KilimanjaroEditorial';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';
import { findArticle } from '../data/journal';
import { ROUTES } from '../data/site';

/* ─────────────────────────────────────────────────────────────────────────────
   Article template.

   Immersive articles keep the original full-viewport scroll composition
   exactly as it was built — background + editorial — because those components
   size the page themselves. Standard articles use the editorial primitives.
   ───────────────────────────────────────────────────────────────────────── */

export default function JournalArticle() {
  const { slug } = useParams();
  const article = slug ? findArticle(slug) : undefined;

  if (!article || !article.published) return <Navigate to={ROUTES.journal} replace />;

  if (article.immersive) {
    return (
      <>
        <Navigation />
        {article.immersive === 'safari' ? (
          <>
            <SafariBackground />
            <SafariEditorial />
          </>
        ) : (
          <>
            <KilimanjaroBackground />
            <KilimanjaroEditorial />
          </>
        )}
        <CTAStrip
          className="bg-ink"
          heading="Thinking about it seriously?"
          secondary={[SECONDARY_CTAS.guide, SECONDARY_CTAS.liveQA]}
        />
        <Footer />
      </>
    );
  }

  return (
    <PageShell>
      <Section width="narrow" className="pt-40">
        <Eyebrow className="mb-6">{article.category}</Eyebrow>
        <Heading>{article.title}</Heading>
        <Body className="mt-7">{article.summary}</Body>
        <div className="mt-10">
          <Link to={ROUTES.journal}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            Back to the Journal
          </Link>
        </div>
      </Section>
      <CTAStrip secondary={[SECONDARY_CTAS.guide, SECONDARY_CTAS.contact]} />
    </PageShell>
  );
}
