# GitHub Actions Playground

A simple Next.js app for practicing GitHub Actions workflows.

## Tech stack

- Next.js 15 (App Router) + React 19 + TypeScript
- ESLint (`eslint-config-next`) + Prettier
- Jest + Testing Library for unit tests
- Playwright for end-to-end tests
- Flagsmith Cloud for feature flags

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

## Feature flags (Flagsmith Cloud)

Two demo features are gated by flags in
[Flagsmith Cloud](https://app.flagsmith.com):

| Flag           | Evaluated where                 | Feature                       |
| -------------- | ------------------------------- | ----------------------------- |
| `beta_banner`  | Server (`@flagsmith/nodejs`)    | Banner at the top of the page |
| `beta_counter` | Client (`@flagsmith/flagsmith`) | Counter section at the bottom |

Setup:

1. Create both flags in your Flagsmith project (they default to off).
2. Copy `.env.example` to `.env.local` and paste your environment keys.
3. Restart `npm run dev`, toggle the flags in the dashboard, and refresh.

Notes:

- Without keys every flagged feature stays off — the app, builds, and tests
  work standalone.
- The server key (`FLAGSMITH_SERVER_SIDE_ENVIRONMENT_KEY`) is a secret; keep
  it out of the client bundle and store it as a GitHub secret in workflows.
- The client key (`NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_KEY`) is public by
  design, but it is inlined at build time — set it as a workflow `env` var in
  the build step.
- The home page is `force-dynamic`, so the server flag is evaluated per
  request instead of at build time. You can toggle `beta_banner` in the
  dashboard without rebuilding.
