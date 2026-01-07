import { organizations } from '@/data/experiences';
import { ExperienceCard } from '@/components/ExperienceCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
            Professional Experience
          </h1>
          <p className="text-lg text-foreground-light/70 dark:text-foreground-dark/70 max-w-2xl">
            A comprehensive overview of my professional journey, roles, and achievements across various organizations.
          </p>
        </div>
        
        <div className="space-y-8">
          {organizations.map((org) => (
            <ExperienceCard key={org.id} organization={org} />
          ))}
        </div>
      </section>
    </div>
  );
}
