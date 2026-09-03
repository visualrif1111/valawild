import React from 'react';

/** Standard editorial section. Generous vertical rhythm; content never full-bleed. */
export default function Section({
  children,
  id,
  className = '',
  width = 'default',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  width?: 'narrow' | 'default' | 'wide';
}) {
  const max =
    width === 'narrow' ? 'max-w-2xl' : width === 'wide' ? 'max-w-6xl' : 'max-w-4xl';
  return (
    <section id={id} className={`relative w-full px-8 md:px-16 py-20 md:py-28 scroll-mt-28 ${className}`}>
      <div className={`${max} mx-auto`}>{children}</div>
    </section>
  );
}
