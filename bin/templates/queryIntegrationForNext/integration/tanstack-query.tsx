'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function TanStackQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Create client only once
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60 * 24, // how long fetched data is considered “fresh” before it becomes “stale” 🡢 24 hrs
            gcTime: 1000 * 60 * 60 * 24, // how long inactive (unused) query data stays in memory before being deleted 🡢 24 hrs
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
