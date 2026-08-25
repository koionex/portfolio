const POINTS = [
  {
    title: "Built to last past launch",
    desc: "Static doesn't mean disposable. We structure every build so it can be extended, not rebuilt, six months from now.",
  },
  {
    title: "One codebase, product discipline",
    desc: "Componentized front-ends, real version control, documented handoffs — the same standard a funded product team would hold itself to.",
  },
  {
    title: "Small by choice, right now",
    desc: "We're not scaling a client roster yet — we're proving the model on a small number of builds we can stand behind completely.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative px-5 sm:px-8 py-24 sm:py-32 border-t border-border-soft bg-bg-raised/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-4">
            Approach
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink-100 tracking-tight leading-tight">
            We treat static sites like products, not deliverables.
          </h2>
          <p className="mt-6 text-[14px] leading-relaxed text-ink-300 max-w-md">
            Most agencies hand over a folder and move on. Koionex is built the
            other way around: we think in versions, releases, and iterations —
            because that's how the things we admire online actually get made.
          </p>
        </div>

        <div className="flex flex-col">
          {POINTS.map((p, i) => (
            <div
              key={p.title}
              className={`py-7 ${i !== 0 ? "border-t border-border-soft" : ""}`}
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-[11px] text-ink-500 pt-1 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink-100 mb-2">{p.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-300 max-w-md">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
