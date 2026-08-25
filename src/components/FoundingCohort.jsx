const ROWS = [
  { k: "clients_shipped", v: "0", note: "the ledger is empty — nobody's before us" },
  { k: "projects_live", v: "0", note: "first release hasn't shipped, on purpose" },
  { k: "founding_slots", v: "open", note: "limited, so every build gets full attention" },
];

export default function FoundingCohort() {
  return (
    <section id="status" className="relative px-5 sm:px-8 py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-4">
            Founding cohort
          </p>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-ink-100 tracking-tight leading-tight mb-6">
            Zero clients isn't a gap.
            <br /> It's where you come in.
          </h2>
          <p className="text-[14px] leading-relaxed text-ink-300 max-w-md mb-6">
            Koionex just started. There's no backlog, no queue, and no
            second-priority project — whatever we build next gets the same
            attention we'd want if it were our own product. We're taking on a
            small founding cohort of clients to build that first case study
            with, properly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-ink-100 border-b border-ink-400 pb-0.5 hover:border-ink-100 transition-colors w-fit"
          >
            Become client 001 →
          </a>
        </div>

        <div className="rounded-lg border border-border bg-bg-raised p-6 sm:p-8">
          <p className="font-mono text-[11px] text-ink-500 mb-6">// studio.metrics</p>
          <div className="flex flex-col">
            {ROWS.map((r, i) => (
              <div
                key={r.k}
                className={`flex items-baseline justify-between gap-4 py-4 ${
                  i !== 0 ? "border-t border-border-soft" : ""
                }`}
              >
                <div>
                  <p className="font-mono text-[13px] text-ink-300">{r.k}</p>
                  <p className="text-[12px] text-ink-500 mt-1">{r.note}</p>
                </div>
                <p className="font-display text-2xl sm:text-3xl text-ink-100 shrink-0">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
