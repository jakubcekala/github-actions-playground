import { Flagsmith } from '@flagsmith/nodejs';

const environmentKey = process.env.FLAGSMITH_SERVER_SIDE_ENVIRONMENT_KEY;

// One lazily-created client shared across requests (reuses its flag cache).
let client: Flagsmith | null = null;

export function getFlagsmithClient(): Flagsmith {
  if (!client) {
    client = new Flagsmith({ environmentKey });
  }
  return client;
}

export function isFlagsmithConfigured(): boolean {
  return Boolean(environmentKey);
}

export async function isFeatureEnabled(feature: string): Promise<boolean> {
  if (!isFlagsmithConfigured()) return false;
  try {
    const flags = await getFlagsmithClient().getEnvironmentFlags();
    return flags.isFeatureEnabled(feature);
  } catch {
    // Keep the feature off if Flagsmith is unreachable.
    return false;
  }
}
