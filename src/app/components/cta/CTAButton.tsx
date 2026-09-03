import { Link } from 'react-router';
import type { CTA } from '../../data/ctas';

type Variant = 'primary' | 'secondary' | 'quiet';

const BASE =
  "inline-flex items-center justify-center font-['Kufam',sans-serif] uppercase " +
  'tracking-[0.18em] text-[11px] leading-none text-center transition-all duration-500 ' +
  'rounded-full select-none';

/* Curves, not corners — the pill is the retro-futurist tell. */
const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-ember text-ink px-9 py-4 hover:bg-flare hover:tracking-[0.2em] ' +
    'shadow-[0_0_0_0_rgba(212,105,58,0.5)] hover:shadow-[0_8px_38px_-8px_rgba(212,105,58,0.65)]',
  secondary:
    'border border-cream/30 text-cream px-8 py-3.5 hover:border-cream/70 hover:bg-cream/[0.04]',
  quiet:
    'text-cream/55 px-0 py-2 border-b border-cream/20 rounded-none ' +
    'hover:text-cream hover:border-cream/60',
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
