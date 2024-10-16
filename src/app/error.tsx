'use client';

import { useEffect } from 'react';

import { PageContent } from '@/components';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <PageContent className="flex flex-col items-center justify-center">
      <h2 className="mb-5 text-3xl font-semibold">
        Erro ao carregar a lista de países
      </h2>
      <button
        className="text-xl"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Tente nvamente
      </button>
    </PageContent>
  );
}
