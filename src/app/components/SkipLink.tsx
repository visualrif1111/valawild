/* NFR-03: keyboard users land on the navigation first and need a route past it.
   Hidden until focused. Used by PageShell and by the immersive article layout,
   which composes its own chrome. */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200]
                 focus:rounded-full focus:bg-clay focus:text-paper focus:px-6 focus:py-3
                 focus:font-['Kufam',sans-serif] focus:text-[11px] focus:tracking-[0.18em] focus:uppercase"
    >
      Skip to content
    </a>
  );
}
