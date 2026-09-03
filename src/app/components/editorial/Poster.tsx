/* ─────────────────────────────────────────────────────────────────────────────
   POSTER SYSTEM — 70s/80s travel-poster language

   Reference direction: stacked sunset bands, flat silhouettes, one hard
   horizon, and a mirrored world beneath it. FS 12A asks for "retro warmth
   with dystopian undertones", "curved forms, circles, arcs, horizons" and
   "70s/80s travel culture" — this is that, applied to Tanzania rather than
   copied wholesale, so the silhouettes are acacia and Kilimanjaro.

   Flat fills only. No soft gradients inside shapes — the flatness is what
   makes it read as print rather than as a web gradient.
   ───────────────────────────────────────────────────────────────────────── */

const BANDS = ['#A81E28', '#C43C22', '#E4682A', '#F0952B', '#F5BE2C'];

/** Stacked sunset stripes. The signature motif — used as a rule, a section
    break, and the sky of every poster block. */
export function SunsetBands({
  className = '',
  count = 5,
  reverse = false,
}: { className?: string; count?: number; reverse?: boolean }) {
  const ramp = reverse ? [...BANDS].reverse() : BANDS;
  return (
    <div aria-hidden className={`flex flex-col w-full ${className}`}>
      {ramp.slice(0, count).map((c, i) => (
        <span
          key={c}
          style={{ background: c, height: `${10 + i * 6}px` }}
          className="block w-full"
        />
      ))}
    </div>
  );
}

/** A thin band rule for between editorial sections. */
export function BandRule({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full flex justify-center ${className}`}>
      <div className="w-40 flex flex-col gap-[3px]">
        {BANDS.map((c) => (
          <span key={c} style={{ background: c }} className="block h-[2px] w-full" />
        ))}
      </div>
    </div>
  );
}

/* ── Silhouettes ─────────────────────────────────────────────────────────── */

/* The ridge is drawn with preserveAspectRatio="none" so it always spans the
   full width — a ridgeline tolerates that stretch. Trees do NOT: stretching
   an acacia canopy turns it into a mushroom, so they are separate, undistorted
   SVGs positioned along the horizon. */

/** Kilimanjaro massif with Mawenzi to its right. Flat fill, print-style. */
function Ridge({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 420 90" preserveAspectRatio="none" className="block w-full h-full">
      <path
        fill={fill}
        d="M0 90 L0 68 C 42 66, 84 60, 124 47 C 152 38, 176 27, 199 23
           L214 21.5 L231 23 C 252 28, 268 38, 284 47
           L300 36 L312 45 C 344 58, 384 65, 420 67 L420 90 Z"
      />
    </svg>
  );
}

/** A single flat-topped acacia. Natural aspect, never stretched. */
function Acacia({ fill, className = '' }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 84" className={`block h-full w-auto ${className}`} fill={fill}>
      {/* canopy — stacked lenses give the flat African umbrella */}
      <ellipse cx="30" cy="20" rx="27" ry="4.4" />
      <ellipse cx="30" cy="26" rx="19" ry="3.6" />
      <ellipse cx="30" cy="31" rx="10" ry="2.8" />
      {/* trunk and two branches */}
      <path d="M28.6 30 L28.6 84 L31.4 84 L31.4 30 Z" />
      <path d="M29.4 40 L18 25.5 L20.2 24.2 L30.4 37 Z" />
      <path d="M30.6 44 L43 27.5 L45 29 L31.6 41 Z" />
    </svg>
  );
}
export function PosterBlock({
  children,
  mirrored = true,
  className = '',
}: {
  children?: React.ReactNode;
  /** The inverted reflection beneath the horizon. */
  mirrored?: boolean;
  className?: string;
}) {
  const horizon = (fill: string, treeFill: string) => (
    <div className="relative w-full h-full">
      <Ridge fill={fill} />
      {/* Trees sit on the horizon line, at their true proportions */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] flex items-end justify-between px-[6%]">
        <Acacia fill={treeFill} className="h-full" />
        <Acacia fill={treeFill} className="h-[72%] opacity-95" />
        <Acacia fill={treeFill} className="h-[88%]" />
      </div>
    </div>
  );

  return (
    <div className={`relative w-full overflow-hidden bg-crimson ${className}`}>
      {/* Sky is the content area. The horizon assembly is pinned to the base so
          display type never has to cross it. */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 flex flex-col">
        <SunsetBands />
        <div className="bg-gold h-[15vh] md:h-[19vh]">{horizon('#16233D', '#16233D')}</div>
        {mirrored && (
          <>
            <div className="bg-navy h-[11vh] md:h-[14vh] scale-y-[-1]">
              {horizon('#A81E28', '#A81E28')}
            </div>
            <div className="bg-navy h-[5vh] md:h-[7vh]" />
          </>
        )}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
