'use client';

import flagsmith from '@flagsmith/flagsmith';
import { FlagsmithProvider } from '@flagsmith/flagsmith/react';

// Public by design — shipped to the browser with the bundle.
const environmentID = process.env.NEXT_PUBLIC_FLAGSMITH_ENVIRONMENT_KEY;

export default function ClientFlagsmithProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!environmentID) {
    // No client-side key configured: render children without flag support.
    return <>{children}</>;
  }
  return (
    <FlagsmithProvider
      flagsmith={flagsmith}
      options={{ environmentID, cacheFlags: true }}
    >
      {children}
    </FlagsmithProvider>
  );
}
