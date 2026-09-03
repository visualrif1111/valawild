/* ─────────────────────────────────────────────────────────────────────────────
   CROW MARK — secondary brand signature (FS 12A)

   "Explore the crow as a secondary brand motif and recurring visual signature,
   not necessarily as part of the main logo... simple and ownable, similar in
   role to a tiny apparel emblem rather than a dominant brand mark."

   Freedom, intelligence, curiosity, intuition, movement — and the mythological
   Vala as a female seer. Also the quiet joke: we're birdwatchers.

   PLACEHOLDER. The crow belongs to the branding stream (Stage 03 Identity) and
   wants a designer's hand. It is deliberately isolated in this one file so
   swapping it is a single-file change — nothing else references the geometry.
   ───────────────────────────────────────────────────────────────────────── */

export default function CrowMark({
  size = 24,
  className = '',
  withArc = false,
}: {
  size?: number;
  className?: string;
  /** Encircle the mark — the recurring arc/horizon geometry. */
  withArc?: boolean;
}) {
  const body = (
    <g fill="currentColor">
      <path d="M31.9 2.6 L33.7 7.2 C35.3 8.6 35.6 11 34.7 13.6 L34.1 27.4 L36.2 35.6 L31.9 39.4 L27.6 35.6 L29.7 27.4 L29.1 13.6 C28.2 11 28.5 8.6 30.1 7.2 Z" />
      <path d="M29.4 13.2 C22.6 12.2 13.4 14.4 3.4 19.6 L9.6 20.2 L5.6 22.6 L11.4 22.4 L8.4 24.8 L14.6 23.8 L12.6 26 C18.4 23.4 24.4 20.8 29.6 19 Z" />
      <path d="M34.6 13.2 C41.4 12.2 50.6 14.4 60.6 19.6 L54.4 20.2 L58.4 22.6 L52.6 22.4 L55.6 24.8 L49.4 23.8 L51.4 26 C45.6 23.4 39.6 20.8 34.4 19 Z" />
    </g>
  );

  if (withArc) {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
           className={className} aria-hidden focusable="false">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeOpacity="0.35" />
        <g transform="translate(0,12)">{body}</g>
      </svg>
    );
  }

  return (
    <svg width={size} height={size * (44 / 64)} viewBox="0 0 64 44" fill="none"
         className={className} aria-hidden focusable="false">
      {body}
    </svg>
  );
}
