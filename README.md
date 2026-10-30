# GitHub Actions Playground

A simple Next.js app for practicing GitHub Actions workflows.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- ESLint (`eslint-config-next`) + Prettier
- Jest + Testing Library for unit tests
- Playwright for end-to-end tests

## Scripts

| Command              | What it does                        |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Start the dev server on :3000       |
| `npm run build`      | Create a production build           |
| `npm run start`      | Serve the production build          |
| `npm run lint`       | Run ESLint via `next lint`          |
| `npm run typecheck`  | Type-check with `tsc`               |
| `npm run format`     | Check formatting with Prettier      |
| `npm run format:fix` | Fix formatting with Prettier        |
| `npm run test`       | Run Jest unit tests with coverage   |
| `npm run test:e2e`   | Run Playwright e2e tests (Chromium) |

## Getting started

```bash
npm install
npx playwright install chromium   # once, for e2e tests
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** `next dev` and `next build` share the `.next` directory — running
> the dev server (including via `npm run test:e2e`, which starts it
> automatically) wipes the production build. In a workflow, run `build` before
> `start`/`test:e2e`, and don't run `dev` in between.
