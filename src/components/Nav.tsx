import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

export function Nav() {
  const links = [
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-6 py-5 md:px-10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2" data-cursor="home">
          <span className="relative inline-flex h-2.5 w-2.5">
            {/* <span className="absolute inline-flex h-full w-full  bg-lime opacity-60" /> */}
            {/* <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" /> */}
          </span>
          {/* <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-cream">
            Ranaweera/Dev
          </span> */}
        </a>

        <div className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 md:flex">
          {links.map((l) => (
            <Magnetic key={l.href} strength={0.25}>
              <a
                href={l.href}
                className="rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cream/80 transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <a
            href="#contact"
            data-cursor="say hi"
            className="group inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-lime transition-all hover:bg-lime hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow group-hover:bg-ink" />
            Available '26
          </a>
        </Magnetic>
      </div>
    </motion.nav>
  );
}
