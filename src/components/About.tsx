import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, type PointerEvent } from "react";

interface Milestone {
  year: string;
  title: string;
  body: string;
  meta: string;
}

const milestones: Milestone[] = [
  {
    year: "2025",
    title: "University Graduation — BICT(Hons)",
    body: "Graduated with BICT(Hons) from the University of Jaffna, specializing in software engineering, web and backend development.",
    meta: "Degree",
  },
  {
    year: "2018",
    title: "G.C.E Advanced Level",
    body: "Completed G.C.E Advanced Levels at Bandaranayake College Gampaha, focusing on Physical Science and Information & Communication Technology.",
    meta: "School",
  },
  {
    year: "2015",
    title: "G.C.E Ordinary Level",
    body: "Completed G.C.E Ordinary Levels at Bandaranayake College Gampaha, forming a strong foundation for secondary education.",
    meta: "School",
  },
  {
    year: "2019",
    title: "Certificate — Computer Applications Assistant",
    body: "Certificate from Nenasala Information Centre: practical training in computer applications and office software.",
    meta: "Certificate",
  },
  {
    year: "2019",
    title: "Certificate — English",
    body: "Certificate in English from the University of Colombo; improved written and spoken communication skills.",
    meta: "Certificate",
  },
  {
    year: "2019",
    title: "Certificate — Business & HR Management",
    body: "Certificate in Business & Human Resource Management from Lanka Institute of Management Development (LIMD).",
    meta: "Certificate",
  },
];

export function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const dragging = useRef(false);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 02 / Education</div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight text-cream md:text-7xl">
              Academic{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
                journey
              </span>{" "}
              & details.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:pt-8">
            {/* <p className="text-cream/70 text-pretty">
              I hold a BICT(Hons) from the University of Jaffna, specializing in front-end and back-end
              development. My education is supported by multiple professional courses in English, business management,
              and applications assistant. Drag to explore.
            </p> */}
          </div>
        </div>

        {/* Drag canvas */}
        <div className="relative mt-20 select-none">
          <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-cream/40">
            <span>Drag ↔ to explore</span>
            <span>
              {String(active + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
            </span>
          </div>

          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            data-cursor="drag"
            className="relative h-px w-full bg-cream/15"
          >
            <div
              className="absolute left-0 top-0 h-px bg-lime transition-all duration-500"
              style={{ width: `${((active + 1) / milestones.length) * 100}%` }}
            />
          </div>

          <motion.div
            drag="x"
            dragConstraints={{ left: -((milestones.length - 1) * 360), right: 0 }}
            dragElastic={0.08}
            style={{ x }}
            onDrag={() => {
              const v = Math.round(Math.abs(x.get()) / 360);
              setActive(Math.min(milestones.length - 1, Math.max(0, v)));
            }}
            className="mt-10 flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                animate={{ opacity: i === active ? 1 : 0.35, scale: i === active ? 1 : 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative h-[360px] w-[340px] shrink-0 overflow-hidden rounded-[1.75rem] glass p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-lime">{m.meta}</span>
                  <span className="font-display text-5xl font-bold text-cream/15">{m.year}</span>
                </div>
                <h3 className="mt-10 font-display text-3xl font-semibold text-cream">{m.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">{m.body}</p>
                {i === active && (
                  <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-lime/40 shadow-[inset_0_0_60px_oklch(0.92_0.24_130/0.1)]" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* dots */}
          <div className="mt-8 flex gap-2">
            {milestones.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  x.set(-i * 360);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-10 bg-lime" : "w-4 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Go to milestone ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { k: "05+", v: "Full-stack Projects" },
            { k: "01+", v: "Years Experience" },
            { k: "14+", v: "Tech Skills Mastered" },
            { k: "03", v: "Extra Curricular Roles" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl glass p-6">
              <div className="font-display text-5xl font-bold text-lime md:text-6xl">{s.k}</div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-cream/50">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
