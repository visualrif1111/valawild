import React from 'react';
import { Navigation } from './Navigation';
import Footer from './Footer';

/** Every page: nav, warm-black ground, footer. Keeps pages to content only. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="relative w-full bg-ink min-h-screen overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
