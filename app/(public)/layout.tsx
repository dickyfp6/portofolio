import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PortfolioModalManager } from '@/components/PortfolioModalManager';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <PortfolioModalManager />
    </>
  );
}
