import { Link } from 'react-router';
import type { CTA } from '../../data/ctas';

type Variant = 'primary' | 'secondary' | 'quiet' | 'poster' | 'posterQuiet';

const BASE =
  "inline-flex items-center justify-center font-['Kufam',sans-serif] uppercase " +
  'tracking-[0.18em] text-[11px] leading-none text-center transition-all duration-500 ' +
  'rounded-full select-none';

/* Curves, not corners — the pill is the retro-futurist tell. */
const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-clay text-paper px-9 py-4 hover:bg-ember hover:tracking-[0.2em] ' +
    'shadow-[0_0_0_0_rgba(212,105,58,0.5)] hover:shadow-[0_8px_38px_-8px_rgba(212,105,58,0.65)]',
  secondary:
    'border border-moss/45 text-moss px-8 py-3.5 hover:bg-moss hover:text-paper hover:border-moss',
  quiet:
    'text-smoke/85 px-0 py-2 border-b border-ink/20 rounded-none ' +
    'hover:text-ink hover:border-ink/60',
  /* On the crimson poster ground. Gold fill reads as the sun and clears
     contrast against both the sky and the bands. */
  poster:
    'bg-gold text-navy px-10 py-4 hover:bg-cream ' +
    'shadow-[0_12px_44px_-14px_rgba(14,23,41,0.75)]',
  posterQuiet:
    'text-cream/85 px-0 py-2 border-b border-cream/40 rounded-none ' +
    'hover:text-cream hover:border-gold',
};

export default function CTAButton({
  cta,
  variant = 'secondary',
  className = '',
  label,
}: {
  cta: CTA;
  variant?: Variant;
  className?: string;
  /** Override the canonical label only when context demands it. */
  label?: string;
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const text = label ?? cta.label;

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noreferrer" className={classes}>
        {text}
      </a>
    );
  }
  return (
    <Link to={cta.href} className={classes}>
      {text}
    </Link>
  );
}
