import { Navigate, useParams, Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import Footer from '../components/Footer';
import PageShell from '../components/PageShell';
import SkipLink from '../components/SkipLink';
import Section from '../components/editorial/Section';
import { Eyebrow, PageTitle, Subheading, Lede, Body, Quote, Label } from '../components/editorial/Type';
import { ArcRule } from '../components/editorial/Arc';
import { BODIES, type Block } from '../data/journal-bodies';
import SafariBackground from '../components/backgrounds/SafariBackground';
import SafariEditorial from '../components/SafariEditorial';
import KilimanjaroBackground from '../components/backgrounds/KilimanjaroBackground';
import KilimanjaroEditorial from '../components/KilimanjaroEditorial';
import CTAStrip from '../components/cta/CTAStrip';
import { SECONDARY_CTAS } from '../data/ctas';
import { ARTICLES, findArticle } from '../data/journal';
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
        <SkipLink />
        <Navigation />
        {/* The scroll editorial carries no heading of its own; SEO-01 and screen
            readers both need one. */}
        <h1 id="main" className="sr-only">{article.title}</h1>
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

  const blocks = BODIES[article.slug] ?? [];

  return (
    <PageShell>
      {/* One section, so article padding never fights Section's defaults —
          conflicting Tailwind padding utilities resolve by stylesheet order,
          not by the order they appear in the class string. Top padding clears
          the tall top-of-page nav. */}
      <Section width="narrow" className="!pt-36 md:!pt-60">
        <Eyebrow className="mb-6">{article.category}</Eyebrow>
        <PageTitle>{article.title}</PageTitle>

        <article className="flex flex-col mt-12">
          {blocks.map((b, i) => <BlockView key={i} block={b} />)}
        </article>

        {/* SEO-04: internal linking between resources */}
        <ReadNext currentSlug={article.slug} />

        <div className="mt-16 pt-10 border-t border-cream/12">
          <Link to={ROUTES.journal}
            className="font-['Kufam',sans-serif] text-[11px] tracking-[0.18em] uppercase text-cream/70 border-b border-cream/25 pb-1 hover:text-cream hover:border-ember transition-all duration-300">
            Back to the Journal
          </Link>
        </div>
      </Section>

      <ArcRule className="mt-8" />
      <CTAStrip
        heading="Questions this didn’t answer?"
        secondary={[SECONDARY_CTAS.guide, SECONDARY_CTAS.liveQA, SECONDARY_CTAS.contact]}
      />
    </PageShell>
  );
}

/** Renders one content block. Spacing lives here so articles read consistently. */
function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'lede':
      return <Lede className="mb-4">{block.text}</Lede>;
    case 'heading':
      return <Subheading className="mt-14 mb-1">{block.text}</Subheading>;
    case 'p':
      return <Body className="mt-5 text-[4.6vw] md:text-[18px]">{block.text}</Body>;
    case 'quote':
      return <Quote className="my-12">{block.text}</Quote>;
    case 'list':
      return (
        <ul className="mt-6 flex flex-col gap-4">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <span aria-hidden className="mt-[0.85em] w-3 h-px bg-ember/60 shrink-0" />
              <span className="font-['Cormorant_Garamond',serif] font-light text-[4.6vw] md:text-[18px] leading-[1.72] text-cream/70">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

/** Two further reads, so articles link to each other rather than dead-ending. */
function ReadNext({ currentSlug }: { currentSlug: string }) {
  const others = ARTICLES.filter((a) => a.published && a.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;
  return (
    <aside className="mt-20 pt-10 border-t border-cream/12">
      <Eyebrow className="mb-7">Read next</Eyebrow>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {others.map((a) => (
          <Link key={a.slug} to={`${ROUTES.journal}/${a.slug}`} className="group block">
            <Label className="text-ember/70">{a.category}</Label>
            <Subheading className="mt-2 text-[5.5vw] md:text-[21px] group-hover:text-ember transition-colors duration-300">
              {a.title}
            </Subheading>
          </Link>
        ))}
      </div>
    </aside>
  );
}
