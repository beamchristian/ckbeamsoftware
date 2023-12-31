import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/Footer';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Home | CKBEAM-SOFTWARE',
  description:
    'Welcome to CKBEAM SOFTWARE, a personal portfolio website for Christian Beam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex gap-4 justify-between items-center">
            <Link className="ml-5 v-10" href="/">
              CKBEAM-SOFTWARE
            </Link>
            <Header />
          </header>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
