import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import zanzibarSrc from '../../../assets/ZANZIBAR.svg';

const BASE_COLOR = '#061424';

export default function ZanzibarBackground() {
  const { scrollYProgress } = useScroll({ offset: ['start start', 'end end'] });

  // ── Spring-smoothed scroll — gives the image an inertia / drift feel ────────
  const scrollYSmooth = useSpring(scrollYProgress, { damping: 20, stiffness: 65, mass: 0.8 });

  // ── Background image — spring-driven, traverses ~90% of SVG height ──────────
  // viewBox 743.97 × 3640.55 → at 100vw, height ≈ 489vw. -440vw = 90%.
  // Page is 2000vh (down from 3600vh) → scroll feels ~1.8× faster.
  const yStack = useTransform(scrollYSmooth, [0, 1], ['0vw', '-440vw']);

  // ── Parallax depth offsets — raw (unsmoothed) so layers separate crisply ──
  // Midground ribbons move at "medium" rate: additional -80vh over full scroll
  const yMid = useTransform(scrollYProgress, [0, 1], ['0vh', '-80vh']);
  // Foreground orb/sparkles move faster: additional -160vh
  const yFore = useTransform(scrollYProgress, [0, 1], ['0vh', '-160vh']);

  // ── Scale pulse at 1/8 intervals ──────────────────────────────────────────
  const scenePulse = useTransform(
    scrollYSmooth,
    [0, 1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8, 1],
    [1.0, 1.10, 1.0, 1.10, 1.0, 1.10, 1.0, 1.10, 1.0]
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
  const parallaxX_fg1 = useTransform(smoothMouseX, [0, 1], ['-3%',  '3%']);
  const parallaxY_fg1 = useTransform(smoothMouseY, [0, 1], ['-3%',  '3%']);
  const parallaxX_fg2 = useTransform(smoothMouseX, [0, 1], ['4%',  '-4%']);
  const parallaxY_fg2 = useTransform(smoothMouseY, [0, 1], ['4%',  '-4%']);

  // ── Flash overlay — intentionally raw (no spring) so cuts stay sharp ──────
  const opacityOverlay = useTransform(
    scrollYProgress,
    [0, 1/16, 2/16, 3/16, 4/16, 5/16, 6/16, 7/16, 8/16, 9/16, 10/16, 11/16, 12/16, 13/16, 14/16, 15/16, 1],
    [0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0, 0.75, 0]
  );

  return (
    // 2000vh — shorter container means faster scroll traversal of the image
    <div className="relative w-full h-[2000vh]" style={{ backgroundColor: BASE_COLOR }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        {/* ── LAYER 1 — Background image (spring scroll, slowest layer) ─────── */}
        <motion.div
          style={{ scale: scenePulse }}
          className="absolute inset-0 will-change-transform"
        >
          <motion.div
            style={{ y: yStack, x: parallaxX_bg }}
            className="absolute top-0 left-0 w-full will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={zanzibarSrc}
                aria-hidden="true"
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 3%, black 8%, black 70%, rgba(0,0,0,0.45) 83%, transparent 93%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 3%, black 8%, black 70%, rgba(0,0,0,0.45) 83%, transparent 93%)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Sky gradient ──────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(6,20,36,0.82) 0%, rgba(6,20,36,0.48) 14%, rgba(6,20,36,0.12) 28%, transparent 46%)',
          }}
        />

        {/* ── Edge vignette ─────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 100% 88% at 50% 42%, transparent 36%, rgba(6,20,36,0.60) 100%)',
          }}
        />

        {/* ── Bottom fade ───────────────────────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 w-full h-[28vh] pointer-events-none"
          style={{ background: `linear-gradient(to top, ${BASE_COLOR}, transparent)` }}
        />

        {/* ── Flash overlay (raw scroll, no spring) ─────────────────────────── */}
        <motion.div
          style={{ opacity: opacityOverlay, backgroundColor: BASE_COLOR }}
          className="absolute inset-0 pointer-events-none mix-blend-multiply z-20"
        />

        {/* ── LAYER 2 — Midground wave ribbons (scroll parallax: -80vh) ────── */}
        <motion.div
          style={{ y: yMid }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          <motion.div style={{ x: parallaxX_fg2, y: parallaxY_fg2 }} className="absolute inset-0">
            <motion.div
              animate={{ x: ['-6%', '6%', '-6%'], y: [0, -8, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '28%', left: '-8%', width: '116%', height: '5vh',
                background:
                  'linear-gradient(to right, transparent, rgba(64,196,204,0.09) 20%, rgba(100,215,220,0.13) 50%, rgba(64,196,204,0.09) 80%, transparent)',
                filter: 'blur(18px)',
              }}
            />
            <motion.div
              animate={{ x: ['7%', '-7%', '7%'], y: [0, 10, 0] }}
              transition={{ duration: 58, repeat: Infinity, ease: 'easeInOut', delay: 10 }}
              style={{
                position: 'absolute',
                top: '46%', left: '-10%', width: '120%', height: '4vh',
                background:
                  'linear-gradient(to right, transparent, rgba(232,216,160,0.07) 25%, rgba(244,232,190,0.10) 55%, rgba(232,216,160,0.07) 80%, transparent)',
                filter: 'blur(24px)',
              }}
            />
            <motion.div
              animate={{ x: ['-9%', '5%', '-9%'], y: [0, -6, 0] }}
              transition={{ duration: 70, repeat: Infinity, ease: 'easeInOut', delay: 24 }}
              style={{
                position: 'absolute',
                top: '64%', left: '-6%', width: '112%', height: '3.5vh',
                background:
                  'linear-gradient(to right, transparent, rgba(64,196,204,0.06) 30%, rgba(123,232,232,0.09) 60%, rgba(64,196,204,0.06) 85%, transparent)',
                filter: 'blur(20px)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* ── LAYER 3 — Foreground orb + sparkles (scroll parallax: -160vh) ── */}
        <motion.div
          style={{ y: yFore }}
          className="absolute inset-0 pointer-events-none z-10"
        >
          {/* Sun / warm water-light orb */}
          <motion.div
            style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
            className="absolute top-[10%] left-[18%] w-[36vw] h-[36vw] max-w-[560px] max-h-[560px] rounded-full mix-blend-overlay"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E8D8A0] to-transparent opacity-22 blur-3xl" />
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.20, 0.34, 0.20] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[12%] rounded-full bg-gradient-to-br from-[#7BE8E8] to-transparent opacity-28 blur-2xl"
            />
          </motion.div>

          {/* Water sparkles + light beams */}
          <motion.div
            style={{ x: parallaxX_fg1, y: parallaxY_fg1 }}
            className="absolute inset-0 mix-blend-screen"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#A8E8DC]"
                style={{
                  width:   Math.random() * 10 + 4  + 'px',
                  height:  Math.random() * 10 + 4  + 'px',
                  left:    Math.random() * 100 + '%',
                  top:     Math.random() * 100 + '%',
                  opacity: Math.random() * 0.16 + 0.03,
                  filter:  `blur(${Math.random() * 3 + 1}px)`,
                }}
                animate={{
                  y: [0, -(Math.random() * 80 + 40), 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.03, 0.26, 0.03],
                }}
                transition={{
                  duration: Math.random() * 10 + 14,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 12,
                }}
              />
            ))}
            <motion.div
              className="absolute top-[-8%] left-[32%] w-[55vw] h-[145vh] rotate-[-20deg] blur-3xl"
              style={{ background: 'linear-gradient(to bottom, rgba(232,216,160,0.05), transparent)' }}
              animate={{ opacity: [0.08, 0.24, 0.08] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-[-5%] right-[28%] w-[35vw] h-[120vh] rotate-[15deg] blur-3xl"
              style={{ background: 'linear-gradient(to bottom, rgba(64,196,204,0.04), transparent)' }}
              animate={{ opacity: [0.05, 0.16, 0.05] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
