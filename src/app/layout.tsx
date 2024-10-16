import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import { Navbar } from '@/components';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>
        <header className="flex items-center bg-white">
          <Navbar />
        </header>

        <main className="min-h-[calc(100vh-104px)] w-full bg-gray-100 pt-28">
          {children}
        </main>
      </body>
    </html>
  );
}
