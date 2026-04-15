import type { ReactNode } from 'react';

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Global providers (theme, auth, socket context) mount here.
 * Keep this file free of feature-specific logic.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return children;
}
