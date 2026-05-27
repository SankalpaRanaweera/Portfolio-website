import { motion } from "framer-motion";

const education = [
  {
    school: "University of Jaffna",
    degree: "BICT (Hons) — Bachelor of Information & Communication Technology",
    period: "2020 — 2025",
    note:
      "Bachelor of (Hons) Information & Communication Technology. Specialized in software engineering, web development and database systems.",
  },
  {
    school: "Bandaranayake College Gampaha",
    degree: "G.C.E Advanced Level",
    period: "2018",
    note: "Advanced Level studies: Physical Science & Information & Communication Technology streams.",
  },
  {
    school: "Bandaranayake College Gampaha",
    degree: "G.C.E Ordinary Level",
    period: "2015",
    note: "Completed G.C.E Ordinary Levels forming a foundation for secondary education.",
  },
  {
    school: "Nenasala Information Centre",
    degree: "Certificate — Computer Applications Assistant",
    period: "2019",
    note: "Practical training in computer applications and basic office software.",
  },
  {
    school: "University of Colombo",
    degree: "Certificate — English",
    period: "2019",
    note: "English language course improving written and spoken communication skills.",
  },
  {
    school: "Lanka Institute of Management Development",
    degree: "Certificate — Business & Human Resource Management",
    period: "2019",
    note: "Professional course covering business operations and HR fundamentals.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 02 / Education</div>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
            Schools &amp;{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
              studies
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-8"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-widest text-lime">{ed.period}</div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-cream md:text-3xl">{ed.degree}</h3>
                <p className="mt-1 text-cream/70 text-sm">{ed.school}</p>
                <p className="mt-4 text-xs text-cream/50 leading-relaxed">{ed.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
