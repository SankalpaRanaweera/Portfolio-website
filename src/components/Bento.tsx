const extracurricular = [
  "Active member of the Sri Lanka University LEO CLUB",
  "University Ambassador — National Child Protection Authority",
  "Member of Zero Plastic Movement",
];

const languages = ["Sinhala", "English"];

const hobbies = ["Add your hobbies here"];

export function Bento() {
  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">⁠— 04 / Capabilities</div>
            <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-cream md:text-7xl">
              What I actually{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif" }} className="italic text-lime/90">
                make.
              </span>
            </h2>
          </div>
          {/* <p className="max-w-sm text-cream/60">
            A small, sharp toolkit. I'd rather do four things at 100% than ten things at 60%.
          </p> */}
        </div>

        {/* Bento grid (reordered: Extra Curricular prominent, Tools large, services compact) */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {/* Extra Curricular — large highlight on the left */}
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl glass-lime p-8 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 gradient-radial-lime opacity-60" />
            <div className="relative h-full">
              <div className="font-mono text-[11px] uppercase tracking-widest text-lime">Extra Curricular</div>
              <h3 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">Activities &amp; Roles</h3>
              <ul className="mt-6 space-y-3 text-cream/70 text-sm">
                {extracurricular.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink/0 border border-lime" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-6 left-8 text-xs text-cream/60">More activities available on the CV</div>
            </div>
          </div>

          {/* Tooling — large panel on the right */}
          <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl glass p-8 md:col-span-2 md:row-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-cream/40">Tooling</div>
            <ul className="mt-6 space-y-3 font-display text-2xl text-cream md:text-3xl">
              {['Figma · Rive · Cavalry', 'React · GLSL · Three.js', 'After Effects · Blender', 'Mechanical pencils'].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="relative col-span-1 overflow-hidden rounded-3xl glass p-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-cream/40">Languages</div>
            <div className="mt-6 flex flex-wrap gap-3">
              {languages.map((l) => (
                <span key={l} className="rounded-full border border-cream/10 bg-cream/[0.02] px-3 py-1 font-mono text-[11px] text-cream/80">
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="relative col-span-1 overflow-hidden rounded-3xl glass p-6 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-cream/40">Hobbies</div>
            <ul className="mt-6 space-y-2 text-cream/70 text-sm">
              {hobbies.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-lime" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
