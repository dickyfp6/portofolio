import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PortfolioModalManager } from '@/components/PortfolioModalManager';
import { profile } from '@/data/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${profile.fullName} - ${profile.title}`,
  description: profile.shortBio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
          async
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <PortfolioModalManager />
        </ThemeProvider>
      </body>
    </html>
  );
}
