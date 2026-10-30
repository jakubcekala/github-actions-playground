import styles from './page.module.css';
import BetaBanner from '@/components/beta-banner';
import BetaCounter from '@/components/beta-counter';
import ClientFlagsmithProvider from '@/components/flagsmith-provider';
import { isFeatureEnabled } from '@/lib/flagsmith';

// Opt out of static rendering so server-side flags are evaluated per request
// instead of being baked in at build time.
export const dynamic = 'force-dynamic';

export default async function Home() {
  const showBetaBanner = await isFeatureEnabled('beta_banner');

  return (
    <main className={styles.main}>
      {showBetaBanner && <BetaBanner />}
      <h1>Hello, GitHub Actions! 🚀</h1>
      <p>
        This simple Next.js app is a playground for practicing GitHub Actions
        workflows.
      </p>
      <ul className={styles.list}>
        <li>Build and deploy with GitHub Actions</li>
        <li>Lint, format, and typecheck</li>
        <li>Run unit and end-to-end tests</li>
      </ul>
      {process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_KEY && (
        <ClientFlagsmithProvider>
          <BetaCounter />
        </ClientFlagsmithProvider>
      )}
    </main>
  );
}
