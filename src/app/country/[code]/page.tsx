import { Suspense } from 'react';
import Image from 'next/image';

import { detailCountry } from '@/actions/country/detail';
import { BackButton, NeighboringCountries, PageContent } from '@/components';
import { NeighboringCountriesSkeleton } from '@/components/NeighboringCountries/NeighboringCountriesSkeleton';
import { formatNumber } from '@/helpers/math';

type CountryProps = {
  params: {
    code: string;
  };
};

export default async function Country({ params }: CountryProps) {
  const country = await detailCountry({ code: params.code, delay: 1500 });

  return (
    <PageContent className="px-10 xl:px-0">
      <h1 className="mb-16 text-center text-6xl font-bold">{country.name}</h1>

      <BackButton />
      <article className="flex flex-col items-center gap-4 rounded-xl bg-white p-6 md:flex-row md:justify-between">
        <ul className="flex flex-col gap-3 text-lg">
          <li>🏙️ Capital: {country.capital}</li>
          <li>🗺️ Continente: {country.continent}</li>
          <li>‍👩‍👧‍👦 População: {formatNumber(country.population)}</li>
          <li>
            <div>🗣️ Línguas faladas:</div>
            <ul className="mt-4 flex w-1/2 flex-wrap gap-2">
              {country.languages.map((language) => (
                <li
                  key={language}
                  className="flex w-fit justify-center rounded-xl bg-indigo-700 px-3 text-white"
                >
                  {language}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="relative h-[270px] w-full max-w-[400px]">
          <Image
            src={country.flag}
            alt={country.name}
            className="rounded-xl border border-slate-300 object-cover"
            fill
          />
        </div>
      </article>

      <Suspense fallback={<NeighboringCountriesSkeleton />}>
        <NeighboringCountries borders={country.borders} />
      </Suspense>
    </PageContent>
  );
}
