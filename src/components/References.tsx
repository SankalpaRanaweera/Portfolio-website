import { motion } from "framer-motion";
import { Mail, Phone, Landmark } from "lucide-react";

const references = [
  {
    name: "Mr. S.S. Suthaharan",
    role: "Senior Lecturer (Grade A)",
    dept: "Department of Physical Science, Faculty of Applied Science",
    institution: "University of Vavuniya",
    email: "suthaharan@vau.jfn.ac.lk",
    phone: "+94772316644",
  },
  {
    name: "Ms. Premisha Premanathan",
    role: "Lecturer (Probationary)",
    dept: "Department of ICT, Faculty of Technological Studies",
    institution: "University of Vavuniya",
    email: "premishaprem@vau.ac.lk",
    phone: "+94778985485",
  },
];

export function References() {
  return (
    <section id="references" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 06 / References</div>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
            Professional{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
              references
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {references.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl glass p-8 hover:border-lime/30 transition-all duration-300"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div>
                <h3 className="font-display text-2xl font-bold text-cream group-hover:text-lime transition-colors duration-300">
                  {r.name}
                </h3>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-lime font-semibold">
                  {r.role}
                </div>
                
                <div className="mt-6 space-y-2.5 text-cream/70 text-sm">
                  <div className="flex gap-2.5 items-start">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cream/30" />
                    <span>{r.dept}</span>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Landmark className="h-4 w-4 text-cream/40" />
                    <span className="font-medium text-cream/90">{r.institution}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cream/10 space-y-3">
                <a
                  href={`mailto:${r.email}`}
                  className="flex items-center gap-3 text-cream/60 hover:text-lime text-xs transition-colors font-mono"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{r.email}</span>
                </a>
                <a
                  href={`tel:${r.phone}`}
                  className="flex items-center gap-3 text-cream/60 hover:text-lime text-xs transition-colors font-mono"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{r.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
