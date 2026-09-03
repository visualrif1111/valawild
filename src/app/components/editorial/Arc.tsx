/* ─────────────────────────────────────────────────────────────────────────────
   Retro-futurist form language — curves, arcs and horizons.

   FS 12A: "curved forms, circles, arcs, horizons and slightly sexy geometry as
   a subtle visual system... warm, optimistic, sensual and human, not
   mechanical." Tuned for the cream canvas (DS-01): a sun-faded 70s travel
   poster rather than anything cold.

   Ring radii step by the golden ratio, per the sacred-geometry note.
   ───────────────────────────────────────────────────────────────────────── */

/** A rising sun / horizon band. The brand's core retro-futurist gesture. */
export function Horizon({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none">
        <defs>
          <linearGradient id="vw-sun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E88C4D" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#D4693A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#A94E27" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="132" fill="url(#vw-sun)" />
        {/* φ-stepped rings — 132 / 1.618 and onward */}
        {[132, 82, 50, 31].map((r, i) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="#A94E27" strokeOpacity={0.3 - i * 0.06} strokeWidth="1" />
        ))}
        <line x1="0" y1="200" x2="400" y2="200" stroke="#4E5F49" strokeOpacity="0.3" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** A thin arc rule — used instead of a flat divider between sections. */
export function ArcRule({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full flex justify-center ${className}`}>
      <svg viewBox="0 0 320 24" className="w-56 h-auto" fill="none">
        <path d="M4 20 Q160 0 316 20" stroke="#A94E27" strokeOpacity="0.55" strokeWidth="1" />
      </svg>
    </div>
  );
}
