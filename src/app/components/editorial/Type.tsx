import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   Editorial typography primitives.

   Lifted out of the original Safari/Kilimanjaro editorials so every page reads
   in one voice: Italiana for display, Cormorant Garamond for reading copy,
   Kufam for labels. Premium and warm — never a template.
   ───────────────────────────────────────────────────────────────────────── */

type P = { children: React.ReactNode; className?: string };

export const Eyebrow = ({ children, className = '' }: P) => (
  <p className={`font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-clay ${className}`}>
    {children}
  </p>
);

export const Display = ({ children, className = '' }: P) => (
  <h1 className={`font-['Italiana',serif] text-[11vw] md:text-[64px] lg:text-[76px] leading-[1.03] tracking-[0.02em] text-ink ${className}`}>
    {children}
  </h1>
);

/** Article/page title rendered as h1. SEO-01: every core page needs one H1. */
export const PageTitle = ({ children, className = '' }: P) => (
  <h1 className={`font-['Italiana',serif] text-[8vw] md:text-[40px] leading-[1.12] tracking-[0.03em] text-ink ${className}`}>
    {children}
  </h1>
);

export const Heading = ({ children, className = '' }: P) => (
  <h2 className={`font-['Italiana',serif] text-[8vw] md:text-[40px] leading-[1.12] tracking-[0.03em] text-ink ${className}`}>
    {children}
  </h2>
);

export const Subheading = ({ children, className = '' }: P) => (
  <h3 className={`font-['Italiana',serif] text-[6vw] md:text-[26px] leading-[1.2] tracking-[0.03em] text-ink ${className}`}>
    {children}
  </h3>
);

export const Lede = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] font-light text-[5vw] md:text-[22px] leading-[1.62] text-ink/85 ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] font-light text-[4.4vw] md:text-[17px] leading-[1.75] text-smoke/90 ${className}`}>
    {children}
  </p>
);

export const Quote = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] italic font-light text-[5vw] md:text-[21px] leading-[1.55] text-ink/85 border-l-2 border-moss pl-6 ${className}`}>
    {children}
  </p>
);

export const Label = ({ children, className = '' }: P) => (
  <p className={`font-['Kufam',sans-serif] text-[9px] tracking-[0.28em] uppercase text-smoke/75 ${className}`}>
    {children}
  </p>
);

/* ── Poster scale ─────────────────────────────────────────────────────────────
   For use inside PosterBlock, where the ground is crimson rather than cream.
   These are cream-by-default deliberately: passing a colour override into the
   ink-coloured components above would collide, and Tailwind resolves such
   conflicts by stylesheet order rather than class order.

   Abril Fatface gives the heavy poster serif; the dark halo keeps it legible
   where the type crosses from the crimson sky onto the sunset bands.
   ────────────────────────────────────────────────────────────────────────── */

export const PosterEyebrow = ({ children, className = '' }: P) => (
  <p className={`font-['Kufam',sans-serif] text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-gold ${className}`}>
    {children}
  </p>
);

export const PosterTitle = ({ children, className = '' }: P) => (
  <h1
    className={`font-['Abril_Fatface',serif] text-[11.5vw] md:text-[64px] lg:text-[78px] leading-[0.96] tracking-[-0.01em] text-cream ${className}`}
    style={{ textShadow: '0 2px 0 rgba(22,35,61,0.35), 0 0 40px rgba(14,23,41,0.35)' }}
  >
    {children}
  </h1>
);

export const PosterHeading = ({ children, className = '' }: P) => (
  <h2 className={`font-['Abril_Fatface',serif] text-[9vw] md:text-[46px] leading-[1.02] text-cream ${className}`}>
    {children}
  </h2>
);

export const PosterLede = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] font-light text-[5vw] md:text-[21px] leading-[1.6] text-cream/90 ${className}`}>
    {children}
  </p>
);
