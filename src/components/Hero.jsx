export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-ink-400 uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-100" />
            Design. Develop. Deploy.
          </div>

          <h1 className="font-display font-medium text-[2.6rem] leading-[1.06] sm:text-6xl sm:leading-[1.05] lg:text-7xl text-ink-100 max-w-4xl tracking-tight">
            We build static web
            <br className="hidden sm:block" /> applications like a{" "}
            <span className="text-ink-400">product</span>, not a favor.
          </h1>

          <p className="mt-7 max-w-xl text-[15px] sm:text-base leading-relaxed text-ink-300">
            Koionex is a startup studio. We don't take briefs and hand back a
            folder of files — every build follows the same disciplined
            pipeline: design the system, develop it properly, deploy it clean.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-100 text-bg px-6 py-3 text-[13px] font-mono font-medium hover:bg-white transition-colors"
            >
              Start a project
              <span>→</span>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-[13px] font-mono text-ink-200 hover:border-ink-400 transition-colors"
            >
              See the pipeline
            </a>
          </div>
        </div>

        {/* Signature: terminal-style status readout */}
        <div className="mt-16 sm:mt-20 max-w-xl animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="rounded-lg border border-border bg-bg-raised overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-soft">
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
              <span className="ml-3 font-mono text-[11px] text-ink-400">koionex@studio — status</span>
            </div>
            <div className="p-5 font-mono text-[12.5px] sm:text-[13px] leading-[1.9]">
              <p className="text-ink-400">
                <span className="text-ink-200">$</span> studio status --verbose
              </p>
              <p className="text-ink-300">
                stage <span className="text-ink-100">founding</span>
              </p>
              <p className="text-ink-300">
                clients_shipped <span className="text-ink-100">0</span>{" "}
                <span className="text-ink-500">// none yet — by design</span>
              </p>
              <p className="text-ink-300">
                projects_live <span className="text-ink-100">0</span>{" "}
                <span className="text-ink-500">// slate is intentionally clean</span>
              </p>
              <p className="text-ink-300">
                slots_open <span className="text-ink-100">taking founding clients</span>
              </p>
              <p className="text-ink-200 mt-1">
                <span className="text-ink-400">$</span>{" "}
                <span className="cursor-blink">▍</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
