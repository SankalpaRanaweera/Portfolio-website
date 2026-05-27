import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "./Magnetic";

interface Project {
  title: string;
  client: string;
  year: string;
  tag: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Construction Company System",
    client: "Full-stack · Construction",
    year: "2026",
    tag: "Full-Stack · Construction",
    gradient: "from-lime/30 via-lime/5 to-transparent",
  },
  {
    title: "Bakery Management System",
    client: "Full-stack · Retail",
    year: "2026",
    tag: "Full-Stack · Bakery",
    gradient: "from-cream/20 via-lime/10 to-transparent",
  },
  {
    title: "Pharmacy POS System",
    client: "Retail · Healthcare",
    year: "2025",
    tag: "POS · Pharmacy",
    gradient: "from-lime/40 via-transparent to-cream/10",
  },
  {
    title: "Educational Institute System",
    client: "Education · Management",
    year: "2025",
    tag: "Management · Education",
    gradient: "from-lime/20 via-lime/5 to-cream/5",
  },
  {
    title: "Capacity Study System",
    client: "Industrial · IE",
    year: "2024",
    tag: "MERN · Industrial",
    gradient: "from-cream/15 via-lime/15 to-transparent",
  },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="work" ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-x-auto">
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between px-6 pt-32 md:px-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">
              ⁠— 02 / Selected Work
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
              Recent <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">obsessions</span>
            </h2>
          </div>
          <div className="hidden font-mono text-xs text-cream/50 md:block">
            ← scroll horizontally →
          </div>
        </div>

        <motion.div style={{ x }} className="mt-16 flex gap-6 pl-6 md:pl-10">
          {projects.map((p, i) => (
            <TiltCard
              key={p.title}
              className="group relative h-[62vh] w-[78vw] shrink-0 overflow-hidden rounded-[2rem] border border-cream/10 md:w-[44vw]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="absolute inset-0 bg-grain opacity-40" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              {/* number */}
              <div className="absolute right-8 top-8 font-mono text-xs uppercase tracking-widest text-cream/60">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>

              {/* big subtle title */}
              <div
                className="pointer-events-none absolute -left-4 top-12 select-none font-display text-[18vw] font-black leading-none text-cream/5 md:text-[10vw]"
              >
                {p.title.split("")[0]}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-lime">
                  <span>{p.tag}</span>
                  <span className="h-px flex-1 bg-lime/30" />
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <p className="text-sm text-cream/60">For {p.client}</p>
                  <div
                    data-cursor="open"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-lime/40 text-lime opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-lime group-hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* hover glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-lime/60 group-hover:shadow-[inset_0_0_60px_oklch(0.92_0.24_130/0.15)]" />
            </TiltCard>
          ))}

          {/* end card */}
          <div className="flex h-[62vh] w-[78vw] shrink-0 flex-col items-center justify-center gap-6 rounded-[2rem] border border-dashed border-lime/30 md:w-[44vw]">
            <div className="font-mono text-xs uppercase tracking-widest text-cream/40">End of reel</div>
            <a
              href="#contact"
              data-cursor="brief"
              className="rounded-full bg-lime px-8 py-4 font-display text-lg font-semibold text-ink transition-all hover:scale-105 hover:shadow-[0_0_60px_oklch(0.92_0.24_130/0.6)]"
            >
              Start a project →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
