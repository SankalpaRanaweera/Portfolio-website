import { useState, type ReactNode } from "react";
import { Magnetic } from "./Magnetic";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="group relative block">
      <span className="pointer-events-none absolute -top-2 left-3 z-10 bg-ink px-2 font-mono text-[10px] uppercase tracking-widest text-cream/50 transition-colors group-focus-within:text-lime">
        {label}
      </span>
      {children}
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-10 md:py-48">
      {/* glow bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 gradient-radial-lime blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 07 / Contact</div>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.9] tracking-tight text-cream md:text-[9rem]">
            Let's make{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime text-glow">
              something
            </span>{" "}
            loud.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/60">
            Tell me about the software role, collaboration opportunities, or project scope. I will reply as soon as possible.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-16 max-w-3xl space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Name">
              <input
                required
                className="block w-full rounded-2xl border border-cream/10 bg-cream/[0.02] px-5 py-4 text-cream outline-none transition-all focus:border-lime/60 focus:bg-lime/5 focus:shadow-[0_0_0_4px_oklch(0.92_0.24_130/0.12)]"
                placeholder="Ada Lovelace"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                className="block w-full rounded-2xl border border-cream/10 bg-cream/[0.02] px-5 py-4 text-cream outline-none transition-all focus:border-lime/60 focus:bg-lime/5 focus:shadow-[0_0_0_4px_oklch(0.92_0.24_130/0.12)]"
                placeholder="hi@yourdomain.com"
              />
            </Field>
          </div>

          <Field label="Subject">
            <input
              required
              className="block w-full rounded-2xl border border-cream/10 bg-cream/[0.02] px-5 py-4 text-cream outline-none transition-all focus:border-lime/60 focus:bg-lime/5 focus:shadow-[0_0_0_4px_oklch(0.92_0.24_130/0.12)]"
              placeholder="Job Opportunity / Project Request"
            />
          </Field>

          <Field label="Message">
            <textarea
              required
              rows={5}
              className="block w-full resize-none rounded-2xl border border-cream/10 bg-cream/[0.02] px-5 py-4 text-cream outline-none transition-all focus:border-lime/60 focus:bg-lime/5 focus:shadow-[0_0_0_4px_oklch(0.92_0.24_130/0.12)]"
              placeholder="Describe the opportunity or project…"
            />
          </Field>

          <div className="flex flex-col items-center justify-between gap-6 pt-4 md:flex-row">
            <div className="space-y-2 text-center md:text-left">
              <div className="font-mono text-[11px] uppercase tracking-widest text-cream/40">
                Or email — <a href="mailto:sankalparanaweera9@gmail.com" className="hover:text-lime">sankalparanaweera9@gmail.com</a>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-cream/40">
                Phone — <a href="tel:+94789133858" className="hover:text-lime">+94 78 913 3858</a> · Naivala, Veyangoda
              </div>
            </div>
            <Magnetic strength={0.4}>
              <button
                type="submit"
                data-cursor={sent ? "sent" : "send"}
                disabled={sent}
                className="group inline-flex items-center gap-4 rounded-full bg-lime px-8 py-5 font-display text-lg font-semibold text-ink transition-all hover:scale-105 hover:shadow-[0_0_60px_oklch(0.92_0.24_130/0.5)] disabled:opacity-60"
              >
                {sent ? "Sent ✓" : "Send Transmission"}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Magnetic>
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cream/10 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 font-mono text-[11px] uppercase tracking-widest text-cream/40 md:flex-row md:items-center">
        <div>© 2026 H.R.R.S Ranaweera · Sri Lanka / Remote</div>
        <div className="flex gap-6">
          <a
            className="hover:text-lime"
            href="https://linkedin.com/in/sankalpa-ranaweera"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-lime"
            href="https://github.com/Sankalpa-Ranaweera"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="↗"
          >
            GitHub
          </a>
        </div>
        <div>Designed in motion. Built in React.</div>
      </div>
    </footer>
  );
}
