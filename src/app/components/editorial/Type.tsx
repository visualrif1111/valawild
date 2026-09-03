import React from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
   Editorial typography primitives.

   Lifted out of the original Safari/Kilimanjaro editorials so every page reads
   in one voice: Italiana for display, Cormorant Garamond for reading copy,
   Kufam for labels. Premium and warm — never a template.
   ───────────────────────────────────────────────────────────────────────── */

type P = { children: React.ReactNode; className?: string };

export const Eyebrow = ({ children, className = '' }: P) => (
  <p className={`font-['Kufam',sans-serif] text-[9px] tracking-[0.34em] uppercase text-ember/75 ${className}`}>
    {children}
  </p>
);

export const Display = ({ children, className = '' }: P) => (
  <h1 className={`font-['Italiana',serif] text-[11vw] md:text-[64px] lg:text-[76px] leading-[1.03] tracking-[0.02em] text-cream ${className}`}>
    {children}
  </h1>
);

export const Heading = ({ children, className = '' }: P) => (
  <h2 className={`font-['Italiana',serif] text-[8vw] md:text-[40px] leading-[1.12] tracking-[0.03em] text-cream ${className}`}>
    {children}
  </h2>
);

export const Subheading = ({ children, className = '' }: P) => (
  <h3 className={`font-['Italiana',serif] text-[6vw] md:text-[26px] leading-[1.2] tracking-[0.03em] text-cream ${className}`}>
    {children}
  </h3>
);

export const Lede = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] font-light text-[5vw] md:text-[22px] leading-[1.62] text-cream/80 ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] font-light text-[4.4vw] md:text-[17px] leading-[1.75] text-cream/65 ${className}`}>
    {children}
  </p>
);

export const Quote = ({ children, className = '' }: P) => (
  <p className={`font-['Cormorant_Garamond',serif] italic font-light text-[5vw] md:text-[21px] leading-[1.55] text-cream/85 border-l border-ember/40 pl-6 ${className}`}>
    {children}
  </p>
);

export const Label = ({ children, className = '' }: P) => (
  <p className={`font-['Kufam',sans-serif] text-[9px] tracking-[0.28em] uppercase text-cream/40 ${className}`}>
    {children}
  </p>
);
