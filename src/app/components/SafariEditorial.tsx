import React from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

// Reusable story beat — fades in, holds, then fades out across a scroll window.
// y drifts gently upward through the hold so the page feels alive.
function Beat({
  p,
  start,
  end,
  className = '',
  children,
}: {
  p: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
  children: React.ReactNode;
}) {
  const opacity = useTransform(p, [start, start + 0.022, end - 0.022, end], [0, 1, 1, 0]);
  const y      = useTransform(p, [start, start + 0.05,  end - 0.05,  end], [28, 0, -8, -20]);
  return (
    <motion.div style={{ opacity, y }} className={`absolute inset-0 ${className}`}>
      {children}
    </motion.div>
  );
}

// Typography atoms
const Label = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Kufam',sans-serif] text-[10px] md:text-xs tracking-[0.35em] uppercase text-white/55 mb-6 md:mb-8"
  >
    {children}
  </p>
);

const Display = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="font-['Italiana',serif] text-[13vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] text-white tracking-[0.04em]"
    style={{ textShadow: '0 2px 40px rgba(0,0,0,0.4)' }}
  >
    {children}
  </h2>
);

const LargeQuote = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[6.5vw] md:text-[4.5vw] lg:text-[3.5vw] leading-[1.1] text-white font-light"
    style={{ textShadow: '0 1px 24px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p
    className={`font-['Cormorant_Garamond',serif] text-[4.2vw] md:text-[2.2vw] lg:text-[1.35vw] leading-[1.72] text-white/88 font-light ${className}`}
    style={{ textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
  >
    {children}
  </p>
);

const Pull = ({ children }: { children: React.ReactNode }) => (
  <p
    className="font-['Cormorant_Garamond',serif] italic text-[5vw] md:text-[2.8vw] lg:text-[2vw] leading-[1.3] text-white/90 font-light border-l border-white/30 pl-6"
    style={{ textShadow: '0 1px 20px rgba(0,0,0,0.5)' }}
  >
    {children}
  </p>
);

const Attr = ({ children }: { children: React.ReactNode }) => (
  <p className="font-['Kufam',sans-serif] text-[9px] md:text-[11px] tracking-[0.22em] uppercase text-white/45 mt-4">
    {children}
  </p>
);

export default function SafariEditorial() {
  const { scrollYProgress } = useScroll();

  return (
    // z-[30] sits above the background's flash overlay (z-20) but below the nav (z-50)
    <div className="fixed inset-0 z-[30] pointer-events-none overflow-hidden">

      {/* ── 1. EARTH & SALT — Arrival ─────────────────────────────── 0 → 0.12 ── */}
      <Beat p={scrollYProgress} start={0} end={0.12} className="flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.8, ease: 'easeOut' }}
          className="text-center"
        >
          <Label>Tanzania, East Africa</Label>
          <Display>Earth &amp; Salt</Display>
          <div className="w-24 h-px bg-white/35 mx-auto mt-8 mb-8" />
          <Body className="max-w-sm md:max-w-md mx-auto text-center">
            There is a moment, somewhere between the tarmac and the red dust road,
            when the city begins to leave your body.
            The air does it. Then the silence. Then the horizon — impossibly wide — does the rest.
          </Body>
        </motion.div>
      </Beat>

      {/* ── 2. THE WILD — Animal encounters ──────────────────────── 0.10 → 0.25 ── */}
      <Beat p={scrollYProgress} start={0.10} end={0.25}
        className="flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20"
      >
        <div className="max-w-lg">
          <Label>The Wild</Label>
          <LargeQuote>
            A lioness crosses the track at dawn.<br />
            Unhurried. She does not look at you.
          </LargeQuote>
          <div className="mt-6 max-w-sm">
            <Body>
              Elephants emerge from the acacia as the light turns amber — a matriarch
              steadying her calf, the herd moving as one quiet mass. A leopard
              sleeps draped across a branch, entirely unconcerned with your presence.
              You will spend an afternoon watching a cheetah watch the plains.
              Nothing will happen. It will be the best afternoon of your trip.
            </Body>
          </div>
        </div>
      </Beat>

      {/* ── 3. THE EXPERIENCE — Silence, patience ────────────────── 0.23 → 0.38 ── */}
      <Beat p={scrollYProgress} start={0.23} end={0.38}
        className="flex flex-col items-end justify-center px-8 md:px-16"
      >
        <div className="max-w-md text-right">
          <Label>The Experience</Label>
          <LargeQuote>Safari teaches you to wait.</LargeQuote>
          <div className="mt-6">
            <Body>
              You stop checking your phone. You start reading the grass — how it
              bends when something moves through it. The birds know before you do.
              Your guide stops the engine. The silence rushes in.
              There is a particular quiet that settles at golden hour across the
              Serengeti — not empty, but full. Something is asking something of you.
              You find you are willing to answer.
            </Body>
          </div>
        </div>
      </Beat>

      {/* ── 4. THE GUIDES — The people behind it ─────────────────── 0.36 → 0.51 ── */}
      <Beat p={scrollYProgress} start={0.36} end={0.51}
        className="flex flex-col justify-center px-8 md:px-16"
      >
        <div className="max-w-lg">
          <Label>The Guides</Label>
          <LargeQuote>
            Your guide has been reading this landscape his entire life.
          </LargeQuote>
          <div className="mt-6 max-w-md">
            <Body>
              He knows every kopje, every seasonal waterhole, every lion family by their
              behaviour rather than their markings. He stops the vehicle without speaking
              and points to the acacia. You see nothing. Then — movement. He has already
              started the engine by the time you've understood what you're looking at.
              The gap between what he sees and what you see is not a gap.
              It is the whole journey.
            </Body>
          </div>
          <Attr>— Abdulrahman · Northern Serengeti · Twenty-one years in the field</Attr>
        </div>
      </Beat>

      {/* ── 5. THE COMMUNITIES — Connection ──────────────────────── 0.49 → 0.63 ── */}
      <Beat p={scrollYProgress} start={0.49} end={0.63}
        className="flex flex-col items-center justify-end px-8 md:px-24 pb-16 md:pb-24"
      >
        <div className="max-w-xl text-center">
          <Label>The Communities</Label>
          <LargeQuote>
            This is not a museum.<br />These are neighbours.
          </LargeQuote>
          <div className="mt-6">
            <Body>
              The Maasai communities bordering the Ngorongoro conservation area
              are navigating a relationship with the land — and with global tourism — that
              is decades old and still evolving. When travel is done carefully,
              it shifts from extraction to exchange. You come to witness.
              You leave having been witnessed in return.
              Something is different after that.
            </Body>
          </div>
        </div>
      </Beat>

      {/* ── 6. THE IMPACT — Women entrepreneurs ──────────────────── 0.61 → 0.75 ── */}
      <Beat p={scrollYProgress} start={0.61} end={0.75}
        className="flex flex-col justify-center px-8 md:px-16"
      >
        <div className="max-w-2xl">
          <Label>The Impact</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <LargeQuote>
                Behind every extraordinary journey, women are building something permanent.
              </LargeQuote>
              <div className="mt-6">
                <Body>
                  Vala Wild works with women-led enterprises across Tanzania — from
                  beadwork cooperatives whose income has put daughters through university,
                  to camp managers who arrived as kitchen staff and now run operations
                  for international guests. This is not charity tourism.
                  This is what happens when the money from travel is pointed
                  in the right direction.
                </Body>
              </div>
            </div>
            <div className="flex flex-col justify-center pt-4 md:pt-12">
              <Pull>
                "I want my daughter to see<br />that I built something here."
              </Pull>
              <Attr>— Amina · Ngorongoro</Attr>
            </div>
          </div>
        </div>
      </Beat>

      {/* ── 7. STAY IN THE STORY — Accommodation ─────────────────── 0.73 → 0.87 ── */}
      <Beat p={scrollYProgress} start={0.73} end={0.87}
        className="flex flex-col items-center justify-center px-8 md:px-24"
      >
        <div className="max-w-lg text-center">
          <Label>Where You Sleep</Label>
          <LargeQuote>
            The place you sleep is part of what you are here for.
          </LargeQuote>
          <div className="mt-8">
            <Body>
              Canvas under the stars on the rim of the Ngorongoro Crater.
              A tent at Sayari Camp close enough to the Mara River to hear
              the migration at night. A private concession that stretches
              further than you can see. Every property we recommend has been
              chosen for one reason: it is in honest relationship with the land
              and the people who live near it.
            </Body>
          </div>
        </div>
      </Beat>

      {/* ── 8. BEGIN YOUR SAFARI — Soft CTA ──────────────────────── 0.85 → 1.00 ── */}
      <Beat p={scrollYProgress} start={0.85} end={1.0}
        className="flex flex-col items-center justify-center px-8"
      >
        <div className="text-center">
          <Label>Begin</Label>
          <Display>Your Safari</Display>
          <div className="w-24 h-px bg-white/35 mx-auto mt-8 mb-8" />
          <Body className="max-w-xs md:max-w-sm mx-auto text-center mb-10">
            Tell us when you'd like to come.
            Tell us what you're hoping to feel.
            We'll take it from there.
          </Body>
          {/* pointer-events-auto so the mailto link is clickable */}
          <a
            href="mailto:hello@valawild.com"
            className="pointer-events-auto font-['Italiana',serif] text-[5vw] md:text-[2.5vw] lg:text-[1.8vw] text-white/90 tracking-[0.08em] border-b border-white/30 pb-1 hover:text-white hover:border-white/70 transition-all duration-500"
            style={{ textShadow: '0 1px 24px rgba(0,0,0,0.5)' }}
          >
            hello@valawild.com
          </a>
          <p className="font-['Kufam',sans-serif] text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/35 mt-6">
            We respond to every enquiry personally
          </p>
        </div>
      </Beat>

    </div>
  );
}
