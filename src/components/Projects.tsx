import { motion } from "framer-motion";

const projects = [
  {
    title: "Construction Company System",
    desc: "A full-stack Construction Management System to manage raw materials, consuming items, customers, and overall construction site operations efficiently.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2025",
    link: "#",
  },
  {
    title: "Bakery System",
    desc: "A full-stack Bakery Management System to manage bakery items, customers, sales, and daily business operations efficiently.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2025",
    link: "#",
  },
  {
    title: "Pharmacy System",
    desc: "A Pharmacy POS System built to manage sales, inventory, and pharmacy operations efficiently.",
    stack: ["React", "Laravel", "MySQL"],
    year: "2024",
    link: "#",
  },
  {
    title: "Educational Institute System",
    desc: "A web-based Educational Institute Management System built to manage students, teachers, monthly profit, expenses, and overall institute operations efficiently.",
    stack: ["Laravel", "MySQL"],
    year: "2024",
    link: "#",
  },
  {
    title: "Capacity Study System",
    desc: "A web application built to allow IE members to track machine operators' hourly production, team records, and past production details.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2024",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 03 / Projects</div>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
              Things I've{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
                built
              </span>
            </h2>
          </div>
          {/* <p className="max-w-sm text-cream/60">Full-stack web applications, POS platforms, and industrial systems.</p> */}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.02] p-8 transition-all hover:border-lime/40"
            >
              {/* gradient sweep */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lime/0 via-lime/0 to-lime/0 transition-all duration-700 group-hover:from-lime/10 group-hover:via-transparent group-hover:to-cream/5" />
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-lime/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-lime">{p.year}</span>
                  <span className="text-cream/30 transition-all group-hover:translate-x-1 group-hover:text-lime">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-cream md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-cream/70 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cream/10 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-cream/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
