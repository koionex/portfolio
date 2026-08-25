const SERVICES = [
  {
    title: "Product marketing sites",
    desc: "The front door for a startup or launch — fast, static, built to convert.",
  },
  {
    title: "Static web applications",
    desc: "Interactive, data-driven front-ends shipped without a heavy backend to babysit.",
  },
  {
    title: "Landing & campaign pages",
    desc: "Focused single pages for a launch, a waitlist, or a fundraise — live in days.",
  },
  {
    title: "Design systems & UI kits",
    desc: "A token-based component library so your team can extend the site without us.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-5 sm:px-8 py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 sm:mb-20">
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink-100 tracking-tight">
            What we build.
          </h2>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
            Four surfaces, one standard
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border-soft border border-border-soft rounded-xl overflow-hidden">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-bg p-8 sm:p-10 hover:bg-bg-raised transition-colors"
            >
              <h3 className="font-display text-xl text-ink-100 mb-3">{s.title}</h3>
              <p className="text-[14px] leading-relaxed text-ink-300 max-w-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
