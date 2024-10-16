'use client';
import Link from 'next/link';

import { PageContent } from '@/components';

export default function Error() {
  return (
    <PageContent className="flex flex-col items-center justify-center">
      <h2 className="mb-5 text-3xl font-semibold">
        Erro ao carregar os dados do país
      </h2>
      <Link href="/" className="text-xl">
        Voltar para a página inicial
      </Link>
    </PageContent>
  );
}
