import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Calendar, MapPin, ChevronDown } from "lucide-react";

// Enriched experiences data from CV
const experiences = [
  {
    role: "Junior Web Developer",
    company: "Altitude1 (Pvt) Ltd",
    period: "2025 July — 2026 July",
    location: "Colombo, Sri Lanka",
    icon: Cpu,
    metrics: [
      { label: "Core Frontend", value: "React & WordPress" },
      { label: "Core Backend", value: "Laravel & PHP" },
      { label: "Security & APIs", value: "Firebase & reCAPTCHA" },
    ],
    skills: ["React.js", "Laravel", "WordPress", "Firebase", "Clerk Auth", "API Integration", "AI-assisted Dev"],
    points: [
      "Gained hands-on experience in WordPress, React.js, and Laravel by contributing to multiple dynamic websites and web applications.",
      "Worked with Firebase and Clerk authentication, implemented security features such as reCAPTCHA and secure cookies, and integrated various APIs into applications.",
      "Expanded skill set by exploring AI tools, AI model training concepts, and leveraging AI-assisted development to improve productivity and efficiency.",
    ],
  },
  {
    role: "IE and IT Intern",
    company: "Crystal Martin Ceylon",
    period: "2024 February — 2024 July",
    location: "Katunayake, Sri Lanka",
    icon: Terminal,
    metrics: [
      { label: "Systems Created", value: "2 Systems" },
      { label: "Frontend Tech", value: "HTML / CSS / React" },
      { label: "Backend / Database", value: "Express.js / MySQL / MongoDB" },
    ],
    skills: ["MERN Stack", "MySQL", "HTML & CSS", "JavaScript", "Industrial Training"],
    points: [
      "Completed industrial training at Crystal Martin met my objectives by giving me hands-on experience and enhancing key skills.",
      "Created 'Critical Path Follow-up Chart System' using HTML, CSS, Javascript, PHP, and Mysql.",
      "Created 'Capacity Study System' using the MERN stack."
    ],
  },
];

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const activeExp = experiences[activeIndex];
  const ActiveIcon = activeExp.icon;

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative px-6 pt-32 md:px-10">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-lime/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-1/4 -z-10 h-72 w-72 rounded-full bg-cream/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 01 / Experience</div>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
              Where I've{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
                shipped
              </span>
            </h2>
          </div>
          {/* <p className="max-w-sm text-cream/60">
            A selective history of teams, products, and seasons that shaped how I write code.
          </p> */}
        </div>

        {/* Desktop Split Timeline Layout */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* Left Column: Sticky Timeline & Tabs */}
          <div className="md:col-span-5">
            <div className="sticky top-32 flex flex-col">
              <div className="relative border-l border-cream/10 pl-6 ml-3 space-y-4">
                {/* Visual Connector Path */}
                <div className="absolute left-0 top-0 h-full w-px bg-cream/10" />

                {experiences.map((e, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <button
                      key={e.role + e.company}
                      onClick={() => setActiveIndex(i)}
                      className={`relative flex w-full flex-col items-start rounded-2xl p-5 text-left transition-all duration-300 ${
                        isActive ? "text-cream" : "text-cream/40 hover:text-cream/70"
                      }`}
                    >
                      {/* Sliding active highlight background */}
                      {isActive && (
                        <motion.div
                          layoutId="active-experience-bg"
                          className="absolute inset-0 z-0 rounded-2xl bg-cream/[0.025] border border-cream/10 shadow-[inset_0_1px_0_oklch(1_0_0/0.05)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Moving active node indicator */}
                      <div className="absolute -left-[29px] top-1/2 z-10 -translate-y-1/2 flex items-center justify-center">
                        {isActive ? (
                          <motion.div
                            layoutId="active-timeline-dot"
                            className="relative h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_15px_oklch(0.92_0.24_130/0.8)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          >
                            <span className="absolute -inset-1.5 rounded-full border border-lime/30 animate-ping opacity-75" />
                          </motion.div>
                        ) : (
                          <div className="h-1.5 w-1.5 rounded-full bg-cream/35 hover:bg-cream/60 transition-colors duration-200" />
                        )}
                      </div>

                      <div className="relative z-10">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-lime/90 mb-1.5 font-semibold">
                          {e.period}
                        </div>
                        <div className="font-display text-xl font-bold leading-none tracking-tight">
                          {e.company}
                        </div>
                        <div className="mt-1 text-sm font-sans opacity-85">
                          {e.role}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Experience Card with Animations */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl glass p-8 lg:p-10 relative overflow-hidden"
              >
                {/* Subtle internal glowing radial bg */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-lime/5 blur-[80px]" />

                {/* Header detail */}
                <div className="flex flex-wrap items-start justify-between gap-6 pb-6 border-b border-cream/10">
                  <div className="flex gap-4 items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime/10 border border-lime/25 text-lime shadow-[0_0_20px_oklch(0.92_0.24_130/0.05)]">
                      <ActiveIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-cream leading-tight">
                        {activeExp.role}
                      </h3>
                      <div className="mt-1 font-mono text-sm text-lime/90 font-semibold">{activeExp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right font-mono text-xs text-cream/50">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{activeExp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{activeExp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics grid */}
                <div className="mt-8">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-4 font-semibold">
                    Key Impact Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeExp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="group/metric rounded-2xl bg-cream/[0.015] border border-cream/5 p-4 hover:border-lime/20 hover:bg-cream/[0.035] transition-all duration-300"
                      >
                        <div className="font-display text-2xl font-black bg-gradient-to-r from-lime to-cream bg-clip-text text-transparent group-hover/metric:text-glow transition-all duration-300">
                          {m.value}
                        </div>
                        <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-cream/45 group-hover/metric:text-cream/70 transition-colors">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements List */}
                <div className="mt-8">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-4 font-semibold">
                    Role & Achievements
                  </h4>
                  <ul className="space-y-4">
                    {activeExp.points.map((p, pIdx) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: pIdx * 0.08, ease: "easeOut" }}
                        className="flex gap-3 text-cream/80 text-[14px] leading-relaxed"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime shadow-[0_0_8px_oklch(0.92_0.24_130/0.8)]" />
                        <span>{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-8 pt-6 border-t border-cream/10">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-cream/40 mb-3.5 font-semibold">
                    Core Expertise Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-cream/10 bg-cream/[0.01] px-3.5 py-1.5 font-mono text-[10px] text-cream/70 hover:border-lime/30 hover:text-lime hover:bg-lime/5 transition-all duration-300 cursor-default"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="block md:hidden space-y-4">
          {experiences.map((e, i) => {
            const isOpen = expandedIndex === i;
            const IconComponent = e.icon;
            return (
              <div
                key={e.role + e.company}
                className={`overflow-hidden rounded-3xl glass transition-colors duration-300 ${
                  isOpen ? "border-lime/30" : "hover:border-cream/20"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex gap-3.5 items-center">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen ? "bg-lime/10 border border-lime/30 text-lime" : "bg-cream/5 border border-cream/10 text-cream/70"
                    }`}>
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-cream leading-tight">
                        {e.company}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-widest text-cream/40 mt-0.5">
                        {e.role}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-cream/50 transition-transform duration-350 ease-out ${
                      isOpen ? "rotate-180 text-lime" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content with Height Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-6 border-t border-cream/5 mt-1 pt-5 space-y-6">
                        {/* Dates & Location */}
                        <div className="flex flex-wrap gap-4 font-mono text-[10px] text-cream/50">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{e.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span>{e.location}</span>
                          </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="space-y-2">
                          <div className="text-[9px] font-mono uppercase tracking-widest text-cream/40 font-semibold">Key Metrics</div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                            {e.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="rounded-xl bg-cream/[0.01] border border-cream/5 p-3.5"
                              >
                                <div className="font-display text-xl font-black bg-gradient-to-r from-lime to-cream bg-clip-text text-transparent">
                                  {m.value}
                                </div>
                                <div className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-cream/40">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* points */}
                        <div className="space-y-3">
                          <div className="text-[9px] font-mono uppercase tracking-widest text-cream/40 font-semibold">Achievements</div>
                          <ul className="space-y-3.5">
                            {e.points.map((p) => (
                              <li key={p} className="flex gap-2.5 text-cream/75 text-xs leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime shadow-[0_0_6px_oklch(0.92_0.24_130/0.6)]" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* skills */}
                        <div className="pt-5 border-t border-cream/5 space-y-2.5">
                          <div className="text-[9px] font-mono uppercase tracking-widest text-cream/40 font-semibold">Expertise</div>
                          <div className="flex flex-wrap gap-1.5">
                            {e.skills.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-cream/15 bg-cream/[0.01] px-2.5 py-1 font-mono text-[9px] text-cream/75"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
