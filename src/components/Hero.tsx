import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { Magnetic } from "./Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

const letterReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { delay: 0.3 + i * 0.06, duration: 0.9, ease: EASE },
  }),
} as unknown as Variants;

function RevealLine({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span className="block">
        {text.split(" ").map((word, wi) => (
          <span key={wi} className="inline-block overflow-hidden pr-[0.22em]">
            <motion.span
              className="inline-block"
              variants={letterReveal}
              initial="hidden"
              animate="show"
              custom={baseDelay + wi}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  );
}

function ImagePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hidden md:block absolute inset-y-0 right-0 w-[52%]"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.0 }}
    >
      {/* Clip-path wipe reveal */}
      <motion.div
        className="h-full w-full relative overflow-hidden"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 3D tilt on hover — use intrinsic image size (no scaling) */}
        <motion.div
          className="relative inline-block"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <img
            src="/images/1.png"
            alt="H.R.R.S Ranaweera"
            className="block w-[460px] h-[460px] object-contain mt-24 ml-32"
          />

          {/* Subtle grain overlay */}
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        </motion.div>

        
      {/*<div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-ink via-ink/70 to-transparent pointer-events-none z-10" />

        
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink/90 to-transparent pointer-events-none z-10" />

        
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none z-10" /> */}
      </motion.div>

      {/* Lime accent line — animates up from bottom */}
      <motion.div
        className="absolute inset-y-0 left-0 w-[2px] bg-lime z-20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ originY: 1 }}
        transition={{ delay: 1.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Floating badge — bottom left, overlaps the seam */}
      <motion.div
        initial={{ opacity: 0, y: 24, x: -24 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-[-1.25rem] z-30"
      >
        <div className="flex items-center gap-3 rounded-2xl border border-lime/20 bg-ink/80 px-4 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime/10 border border-lime/30">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-lime" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <p className="font-mono text-[10px] text-cream/40 uppercase tracking-widest leading-none mb-1">Role</p>
            <p className="font-mono text-xs font-bold text-cream leading-none">Full-Stack Engineer</p>
          </div>
        </div>
      </motion.div>

      {/* Floating experience pill — mid-right */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-8 z-30 -translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-1 rounded-2xl border border-cream/10 bg-ink/70 px-4 py-3 backdrop-blur-md">
          <span className="font-display text-3xl font-bold text-lime leading-none">1+</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/40 whitespace-nowrap">Years Exp.</span>
        </div>
      </motion.div>

      {/* Year stamp — top right */}
      {/* <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute top-8 right-8 z-30 text-right"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/30">Sri Lanka</p>
        <p className="font-display text-2xl font-bold text-lime/30 leading-none">2026</p>
      </motion.div> */}

      {/* Ambient lime glow behind */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary lime glow */}
        <div className="absolute right-0 top-1/2 h-[80vh] w-[40vw] -translate-y-1/2 bg-lime/5 blur-[100px]" />
        
        {/* Secondary gradient overlay — top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-lime/10 via-transparent to-lime/5" />
        
        {/* Radial glow from top-right corner */}
        <div className="absolute -top-32 -right-32 h-[60vh] w-[60vh] rounded-full bg-lime/8 blur-[120px]" />
        
        {/* Ambient accent — right edge glow */}
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-lime/8 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Floating animated circle 1 */}
        <motion.div
          className="absolute rounded-full bg-lime/20 blur-3xl"
          style={{
            width: "400px",
            height: "400px",
            top: "-50px",
            right: "-150px",
          }}
          animate={{
            y: [0, 60, 0],
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating animated circle 2 */}
        <motion.div
          className="absolute rounded-full bg-lime/15 blur-3xl"
          style={{
            width: "350px",
            height: "350px",
            bottom: "10%",
            right: "-50px",
          }}
          animate={{
            y: [0, -60, 0],
            x: [40, -40, 40],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating animated circle 3 */}
        <motion.div
          className="absolute rounded-full bg-lime/10 blur-3xl"
          style={{
            width: "300px",
            height: "300px",
            top: "40%",
            right: "8%",
          }}
          animate={{
            y: [0, 50, 0],
            x: [-40, 40, -40],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Decorative dot grid — top-left corner of image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1.0 }}
        className="absolute top-10 left-8 z-20 pointer-events-none"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 16 + 8}
                cy={row * 16 + 8}
                r="1.5"
                fill="currentColor"
                className="text-lime/30"
              />
            ))
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* ── LEFT PANEL ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-screen w-full flex-col md:w-[52%]"
      >
        {/* Ambient blobs — left side only */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 gradient-radial-lime blur-3xl opacity-60" />
          <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-lime/10 blur-[120px] animate-float-slow" />
          <div className="absolute inset-0 bg-grain opacity-30" />
        </div>

        <div className="flex flex-1 flex-col justify-between px-8 py md:px-12 md:py-10">
          {/* ── TOP BAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center justify-between"
          >
            {/* Open to work badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/60">
                Open to work
              </span>
            </div>
          </motion.div>

          {/* ── MIDDLE CONTENT ── */}
          <motion.div style={{ y }} className="">
            {/* Role label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
              className="mb-5"
            >
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-lime">
                Software Engineer
              </span>
            </motion.div>

            {/* Name headline */}
            <h1 className="font-display text-[15vw] font-bold leading-[0.88] tracking-[-0.04em] text-cream md:text-[8.5vw]">
              <RevealLine text="H.R.R.S" baseDelay={0} />
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block">
                  <span className="inline-block overflow-hidden pr-[0.22em]">
                    <motion.span
                      variants={letterReveal}
                      initial="hidden"
                      animate="show"
                      custom={2}
                      className="inline-block italic text-lime text-glow"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      Ranaweera
                    </motion.span>
                  </span>
                </span>
              </span>
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.9 }}
              className="mt-6 max-w-sm text-sm text-cream/60 md:text-base"
            >
              Crafting robust, full-stack systems, dynamic web applications,
              and high-performance user interfaces.
            </motion.p>

            {/* Contact info grid */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.9 }}
              className="mt-8 grid grid-cols-1 gap-y-3 gap-x-8 sm:grid-cols-2"
            >
              {[
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: "sankalparanaweera9@gmail.com",
                  href: "mailto:sankalparanaweera9@gmail.com",
                },
                {
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  label: "linkedin.com/in/sankalpa-ranaweera",
                  href: "https://linkedin.com/in/sankalpa-ranaweera",
                },
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "+94 78 913 3858",
                  href: "tel:+94789133858",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Naivala, Veyangoda · Sri Lanka",
                  href: undefined,
                },
              ].map(({ icon, label, href }, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-lime" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                  {href ? (
                    <a
                      href={href}
                      className="font-mono text-[11px] text-cream/60 hover:text-cream transition-colors"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-cream/60">{label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Download CV */}
          <Magnetic strength={0.4}>
            <a
              href="/resume.md"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-ink transition-all hover:scale-105 hover:shadow-[0_0_40px_oklch(0.92_0.24_130/0.5)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              Download CV
            </a>
          </Magnetic>
        </div>
      </motion.div>

      {/* ── RIGHT PANEL — animated image ── */}
      <ImagePanel />
    </section>
  );
}