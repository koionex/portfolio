import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#status", label: "Status" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-ink-100 tracking-tight">
          <img
            src={logo}
            alt="Koionex logo"
            className="w-5 h-5 object-contain shrink-0"
          />
          koionex
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink-300">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink-100 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-[13px] font-mono text-ink-100 hover:bg-bg-panel-2 hover:border-ink-400 transition-colors"
        >
          Start a project
          <span className="text-ink-400">→</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-200 p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-px bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-px bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border-soft px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-mono text-sm text-ink-300">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 hover:text-ink-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-[13px] font-mono text-ink-100"
          >
            Start a project →
          </a>
        </div>
      )}
    </header>
  );
}
