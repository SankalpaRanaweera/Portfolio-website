import { motion } from "framer-motion";

const techSkills = [
  { name: "React / JavaScript", level: 90 },
  { name: "Laravel / PHP", level: 88 },
  { name: "Node.js / Express.js", level: 85 },
  { name: "Java / Spring Boot", level: 78 },
  { name: "HTML / CSS", level: 92 },
  { name: "C++ / C#", level: 75 },
  { name: "WordPress & Git", level: 88 },
];

const softSkills = [
  "Project Management",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
];

const tools = [
  "Visual Studio Code",
  "Git",
  "Figma",
  "Canva",
  "Postman",
  "NetBeans",
  "Antigravity",
  "AI Development Tools",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 05 / Skills · Soft · Tools</div>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
            The{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
              toolkit
            </span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Technical skills with bars */}
          <div className="rounded-3xl glass p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-cream">Technical</h3>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cream/40">Depth · 0–100</span>
            </div>
            <ul className="space-y-5">
              {techSkills.map((s, i) => (
                <li key={s.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-cream text-sm">{s.name}</span>
                    <span className="font-mono text-xs text-lime">{s.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-cream/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-lime via-lime to-cream shadow-[0_0_20px_oklch(0.92_0.24_130/0.6)]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft skills */}
          <div className="rounded-3xl glass-lime p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-cream">Soft</h3>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cream/40">How I work</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-full border border-lime/30 bg-ink/40 px-4 py-2 text-sm text-cream/90 transition-all hover:scale-105 hover:border-lime hover:bg-lime hover:text-ink"
                  dangerouslySetInnerHTML={{ __html: s }}
                />
              ))}
            </div>
          </div>

          {/* Tools marquee */}
          <div className="relative overflow-hidden rounded-3xl glass p-8 lg:col-span-2">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-cream">Tools I reach for daily</h3>
              <span className="font-mono text-[11px] uppercase tracking-widest text-cream/40">Stack</span>
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
              <div className="marquee flex w-max gap-4">
                {[...tools, ...tools].map((t, i) => (
                  <span
                    key={t + i}
                    className="shrink-0 rounded-2xl border border-cream/10 bg-cream/[0.03] px-6 py-3 font-display text-lg text-cream/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
