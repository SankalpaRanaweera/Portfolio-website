import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
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

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const navItems = ["Home", "Summary", "Experience", "Skills", "Links"];
  const navIcons: Record<string, string> = {
    Home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    Summary: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    Experience: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    Skills: "M13 10V3L4 14h7v7l9-11h-7z",
    Links: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  };

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

            {/* Download CV */}
            
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

            {/* Contact info grid (populated from CV) */}
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
                    <span className="font-mono text-[11px] text-cream/60 hover:text-cream transition-colors">{label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
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

          {/* ── NAV TABS (bottom) ── */}
          {/* <motion.nav
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-1 rounded-full border border-cream/10 bg-cream/5 p-1.5 backdrop-blur-sm">
              {navItems.map((item, i) => (
                <Magnetic key={item} strength={0.3}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-all ${
                      i === 0
                        ? "bg-cream text-ink"
                        : "text-cream/50 hover:text-cream hover:bg-cream/10"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={navIcons[item]} />
                    </svg>
                    {item}
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.nav> */}
        </div>
      </motion.div>

      {/* ── RIGHT PANEL — full-bleed photo ── */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] md:block">
        {/* Replace the src below with your actual photo */}
        <div className="relative h-full w-full overflow-hidden">
          {/* Placeholder gradient — swap for <img> with your real photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-neutral-800 to-neutral-900" />

          {/* Vignette overlay — left edge bleeds into left panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />

          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/60 to-transparent" />

          {/* Lime ambient glow behind subject */}
          <div className="absolute right-0 top-1/2 h-[60vh] w-[40vw] -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]" />

          {/*
            ── USAGE ──
            Replace the gradient div above with your actual photo:

            <img
              src="/your-photo.jpg"
              alt="H.R.R.S Ranaweera"
              className="h-full w-full object-cover object-top"
            />
          */}
        </div>

        {/* Decorative corner label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 right-8 text-right font-mono text-[10px] uppercase tracking-[0.3em] text-cream/30"
        >
          <div>Sri Lanka</div>
          <div className="text-lime">✦ 2026</div>
        </motion.div>
      </div>

      {/* ── MARQUEE (bottom full-width) ── */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-y border-lime/20 bg-lime/5 py-4 backdrop-blur">
        <div className="marquee flex whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight text-cream/90 md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {["React.js", "Laravel", "PHP", "Node.js", "Express.js", "Spring Boot", "MySQL", "MongoDB", "Full-Stack"].map((t, j) => (
                <span key={j} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span className="text-lime">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}