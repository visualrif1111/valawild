/* ─────────────────────────────────────────────────────────────────────────────
   Retro-futurist form language — curves, arcs and horizons.

   FS 12A: "Use curved forms, circles, arcs, horizons and slightly sexy
   geometry as a subtle visual system... warm, optimistic, sensual and human,
   not mechanical." These are the recurring geometry, used sparingly.
   ───────────────────────────────────────────────────────────────────────── */

/** A rising sun / horizon band. The brand's core retro-futurist gesture. */
export function Horizon({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none">
        <defs>
          <linearGradient id="vw-horizon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#E88C4D" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#D4693A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="130" fill="url(#vw-horizon)" />
        {/* Concentric arcs — golden-ratio spacing */}
        {[130, 96, 71, 52].map((r, i) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="#F2B98E" strokeOpacity={0.16 - i * 0.03} strokeWidth="1" />
        ))}
        <line x1="0" y1="200" x2="400" y2="200" stroke="#F2B98E" strokeOpacity="0.22" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** A thin arc rule — used instead of a flat divider between sections. */
export function ArcRule({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full flex justify-center ${className}`}>
      <svg viewBox="0 0 320 24" className="w-56 h-auto" fill="none">
        <path d="M4 20 Q160 0 316 20" stroke="#D4693A" strokeOpacity="0.5" strokeWidth="1" />
      </svg>
    </div>
  );
}
