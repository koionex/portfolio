export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-24 sm:py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-bg-raised px-6 py-14 sm:px-16 sm:py-20 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-5">
          Start a project
        </p>
        <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-100 tracking-tight max-w-2xl mx-auto leading-tight">
          Let's design, develop, and deploy the next one.
        </h2>
        <p className="mt-6 text-[14px] sm:text-base text-ink-300 max-w-md mx-auto leading-relaxed">
          Tell us what you're building. We'll reply within a couple of days
          with next steps — no sales call required to start the conversation.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@koionex.com"
            className="inline-flex items-center gap-2 rounded-full bg-ink-100 text-bg px-7 py-3.5 text-[13px] font-mono font-medium hover:bg-white transition-colors"
          >
            koionex.co@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
