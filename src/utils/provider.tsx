"use client";
import React from "react";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function QueryProvider({ children }: React.PropsWithChildren) {
  // Check if window is defined before creating the QueryClient and using PersistQueryClientProvider
  if (typeof window !== 'undefined') {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
      },
    })

    const persister = createSyncStoragePersister({
      storage: window.localStorage,
    })

    return (
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
    );
  }

  // Fallback if window is not defined (optional)
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
