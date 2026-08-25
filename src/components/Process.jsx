const STEPS = [
  {
    n: "01",
    title: "Design",
    desc:
      "We map the product before we touch a component library — information architecture, visual system, and the real content it has to hold.",
    tag: "wireframes · tokens · UI kit",
  },
  {
    n: "02",
    title: "Develop",
    desc:
      "Built with the same rigor as a product roadmap: componentized, versioned, and structured so it can grow past the first release.",
    tag: "React · clean architecture · reviews",
  },
  {
    n: "03",
    title: "Deploy",
    desc:
      "Shipped to production with proper hosting, performance budgets, and monitoring — not a zip file handed over and forgotten.",
    tag: "CI · CDN · uptime",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative px-5 sm:px-8 py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 sm:mb-20">
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink-100 tracking-tight">
            The pipeline.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Every build, same order
          </p>
        </div>

        <div className="relative grid sm:grid-cols-3 gap-0">
          {/* connecting line */}
          <div className="hidden sm:block absolute top-[26px] left-0 right-0 h-px pipeline-line-h" />

          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`relative pt-0 sm:pt-0 pb-10 sm:pb-0 pr-0 sm:pr-8 ${
                i !== 0 ? "sm:pl-8 border-t sm:border-t-0 sm:border-l border-border-soft mt-10 sm:mt-0 pt-10 sm:pt-0" : ""
              }`}
            >
              <div className="relative z-10 flex items-center justify-center h-[52px] w-[52px] rounded-full border border-border-strong bg-bg font-mono text-[13px] text-ink-100 mb-6">
                {s.n}
              </div>
              <h3 className="font-display text-xl text-ink-100 mb-3">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-300 mb-4">{s.desc}</p>
              <p className="font-mono text-[11px] text-ink-500 tracking-wide">{s.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
