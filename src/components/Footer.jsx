export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 sm:px-8 py-10 border-t border-border-soft">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[12px] text-ink-500">
          © {year} Koionex. Design, develop, deploy.
        </p>
        <div className="flex items-center gap-6 font-mono text-[12px] text-ink-500">
          <a href="mailto:koionex.co@gmail.com" className="hover:text-ink-200 transition-colors">
            Email
          </a>
          <a href="#top" className="hover:text-ink-200 transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
