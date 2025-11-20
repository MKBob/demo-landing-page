# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Known UI Issues & Fixes

- **Fixed-width layouts** – Elements relied on hard-coded pixels (`px-80`, `w-[80%]`), causing overflow on smaller screens. Replace with fluid utilities like `max-w-6xl`, `px-4`, and responsive breakpoints (`sm:`, `md:`, `lg:`) so the layout adapts to the viewport.
- **Non-responsive typography** – Titles used a single `text-7xl`, which shrinks poorly on mobile. Use responsive typography stacks (`text-4xl sm:text-5xl lg:text-6xl`) to scale text smoothly without manual media queries.
- **Images without constraints** – Hero images lacked `max-width` limits, leading to stretching. Apply `w-full` with `max-w-*` and `object-contain` so assets respect their container on every device.
- **Stacking context missing** – Primary CTA row forced a single-line layout (`flex` without wrap handling). Allow vertical stacking on small screens (`flex-col sm:flex-row`) to preserve readability while maintaining the desktop layout.
- **Mobile navigation gaps** – Desktop-only navigation hid links entirely on phones. Pair the hamburger trigger with `lg:hidden`/`lg:flex` containers and keep interaction targets ≥44px for accessibility.
- **Copy clarity & accessibility** – Buttons lacked semantic labels (e.g., “Try free trail”). Use purposeful text (“Try free trial”), ensure sufficient contrast, and provide descriptive `alt` attributes to make the UI accessible and professional.
