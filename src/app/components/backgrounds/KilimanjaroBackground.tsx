import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import moubntSrc from '../../../assets/MOUBNT.svg';

const BASE_COLOR = '#050810';

export default function KilimanjaroBackground() {
  const { scrollYProgress } = useScroll({ offset: ['start start', 'end end'] });

  // ── Scroll through the mountain SVG: same mechanic as Safari's yStack ──────
  // SVG at 100vw is ~499vw tall. -350vw traverses the top 70% (peak → glacier → slopes).
  const yStack = useTransform(scrollYProgress, [0, 1], ['0vw', '-350vw']);

  // ── Scale pulses at the same 1/8 intervals as Safari scenes ───────────────
  const scenePulse = useTransform(
    scrollYProgress,
    [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1],
    [1.0, 1.12, 1.0, 1.12, 1.0, 1.12, 1.0, 1.12, 1.0]
  );

  // ── Mouse parallax ─────────────────────────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const parallaxX_bg  = useTransform(smoothMouseX, [0, 1], ['-1%',  '1%']);
  const parallaxY_bg  = useTransform(smoothMouseY, [0, 1], ['-1%',  '1%']);
  const parallaxX_fg1 = useTransform(smoothMouseX, [0, 1], ['-3%',  '3%']);
  const parallaxY_fg1 = useTransform(smoothMouseY, [0, 1], ['-3%',  '3%']);
  const parallaxX_fg2 = useTransform(smoothMouseX, [0, 1], ['4%',  '-4%']);
  const parallaxY_fg2 = useTransform(smoothMouseY, [0, 1], ['4%',  '-4%']);

  // ── Atmospheric flash between zones — identical to Safari ─────────────────
  const opacityOverlay = useTransform(
    scrollYProgress,
    [0, 1/16, 2/16, 3/16, 4/16, 5/16, 6/16, 7/16, 8/16, 9/16, 10/16, 11/16, 12/16, 13/16, 14/16, 15/16, 1],
    [0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0]
  );

  return (
    <div className="relative w-full h-[3600vh]" style={{ backgroundColor: BASE_COLOR }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        {/* ── MOUBNT mountain — full-width, scrolls top-to-bottom ───────────
            Outer: scale pulse (Safari scene zoom — applied to viewport-sized
                   wrapper so it zooms on the visible portion, not the SVG centre)
            Inner: yStack translation + mouse parallax (scrolls mountain up)
            Innermost: slow ambient float                                    */}
        <motion.div
          style={{ scale: scenePulse }}
          className="absolute inset-0 will-change-transform"
        >
          <motion.div
            style={{ y: yStack, x: parallaxX_bg }}
            className="absolute top-0 left-0 w-full will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={moubntSrc}
                aria-hidden="true"
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  // Fade in from top (sky/summit tip), solid through body, fade at bottom
                  maskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 3%, black 9%, black 68%, rgba(0,0,0,0.45) 82%, transparent 92%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 3%, black 9%, black 68%, rgba(0,0,0,0.45) 82%, transparent 92%)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Deep navy sky gradient — frames the summit ───────────────────── */}
        <motion.div
          style={{
            x: parallaxX_bg,
            y: parallaxY_bg,
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(5,8,16,0.88) 0%, rgba(5,8,16,0.55) 14%, rgba(5,8,16,0.15) 28%, transparent 46%)',
            pointerEvents: 'none',
          }}
        />

        {/* ── Edge vignette — frames the mountain sides ─────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 88% at 50% 42%, transparent 36%, rgba(5,8,16,0.62) 100%)',
          }}
        />

        {/* ── Bottom ground fade ────────────────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 w-full h-[28vh] pointer-events-none"
          style={{ background: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }}
        />

        {/* ── Atmospheric transition overlay — identical timing to Safari ────── */}
        <motion.div
          style={{ opacity: opacityOverlay, backgroundColor: BASE_COLOR }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply z-20"
        />

        {/* ── Cold light / moon orb ─────────────────────────────────────────── */}
        <motion.div
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute top-[8%] right-[18%] w-[32vw] h-[32vw] max-w-[520px] max-h-[520px] rounded-full mix-blend-overlay cursor-pointer z-10"
          whileHover={{ scale: 1.05, filter: 'brightness(1.4)' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#D4E8F8] to-transparent opacity-20 blur-3xl" />
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-[#B8D0E8] to-transparent opacity-30 blur-2xl"
          />
        </motion.div>

        {/* ── Drifting mist / cloud ribbon overlays ─────────────────────────── */}
        <motion.div
          style={{ x: parallaxX_fg2, y: parallaxY_fg2 }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <motion.div
            animate={{ x: ['-6%', '6%', '-6%'], y: [0, -10, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '30%', left: '-8%', width: '116%', height: '5.5vh',
              background:
                'linear-gradient(to right, transparent, rgba(190,210,230,0.10) 20%, rgba(205,222,240,0.14) 50%, rgba(190,210,230,0.10) 80%, transparent)',
              filter: 'blur(20px)',
            }}
          />
          <motion.div
            animate={{ x: ['8%', '-8%', '8%'], y: [0, 8, 0] }}
            transition={{ duration: 65, repeat: Infinity, ease: 'easeInOut', delay: 12 }}
            style={{
              position: 'absolute',
              top: '48%', left: '-12%', width: '124%', height: '4vh',
              background:
                'linear-gradient(to right, transparent, rgba(175,200,225,0.08) 25%, rgba(195,215,238,0.11) 55%, rgba(175,200,225,0.08) 80%, transparent)',
              filter: 'blur(26px)',
            }}
          />
          <motion.div
            animate={{ x: ['-10%', '4%', '-10%'], y: [0, -6, 0] }}
            transition={{ duration: 78, repeat: Infinity, ease: 'easeInOut', delay: 28 }}
            style={{
              position: 'absolute',
              top: '65%', left: '-6%', width: '112%', height: '3.5vh',
              background:
                'linear-gradient(to right, transparent, rgba(200,218,238,0.07) 30%, rgba(215,230,248,0.10) 60%, rgba(200,218,238,0.07) 85%, transparent)',
              filter: 'blur(22px)',
            }}
          />
        </motion.div>

        {/* ── Snow / ice particles + cold diagonal light beam ───────────────── */}
        <motion.div
          style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
          className="absolute inset-0 pointer-events-none mix-blend-screen z-10"
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#C8D8E8]"
              style={{
                width:   Math.random() * 6  + 2  + 'px',
                height:  Math.random() * 6  + 2  + 'px',
                left:    Math.random() * 100 + '%',
                top:     Math.random() * 100 + '%',
                opacity: Math.random() * 0.12 + 0.02,
                filter:  `blur(${Math.random() * 2 + 1}px)`,
              }}
              animate={{
                y: [0, Math.random() * 60 + 30, 0],
                opacity: [0.02, 0.20, 0.02],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 15,
              }}
            />
          ))}
          <motion.div
            className="absolute top-[-8%] right-[22%] w-[45vw] h-[130vh] rotate-[18deg] blur-3xl"
            style={{ background: 'linear-gradient(to bottom, rgba(180,210,238,0.05), transparent)' }}
            animate={{ opacity: [0.07, 0.20, 0.07] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>
    </div>
  );
}
