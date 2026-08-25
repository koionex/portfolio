# Koionex — Portfolio Website

Startup studio site for **Koionex** — "Design, Develop, Deploy."
Built with React + Vite + Tailwind CSS v4. Minimal, dark (black & gray) theme, fully responsive.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/components/Navbar.jsx` — sticky nav, mobile menu
- `src/components/Hero.jsx` — headline + terminal-style status card
- `src/components/Process.jsx` — Design → Develop → Deploy pipeline
- `src/components/Approach.jsx` — product-mindset philosophy
- `src/components/Services.jsx` — service grid
- `src/components/FoundingCohort.jsx` — honest 0 clients / 0 projects framing
- `src/components/Contact.jsx` — CTA / contact
- `src/components/Footer.jsx`
- `src/index.css` — Tailwind v4 theme tokens (colors, fonts) via `@theme`

## Customizing

- Colors/fonts: edit the `@theme` block in `src/index.css`.
- Copy: edit each component directly — content lives inline as it's a single-page site.
- Email: replace `hello@koionex.com` in `Contact.jsx` and `Footer.jsx`.
