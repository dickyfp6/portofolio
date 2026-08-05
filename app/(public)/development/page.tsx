import { developmentActivities } from '@/data/experiences';
import { DevelopmentActivityCard } from '@/components/DevelopmentActivityCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
            Development Activities
          </h1>
          <p className="text-lg text-foreground-light/70 dark:text-foreground-dark/70 max-w-2xl">
            Structured leadership and management development programs completed throughout my academic journey.
          </p>
        </div>

        <div className="space-y-8">
          {developmentActivities.map((activity) => (
            <DevelopmentActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
    </div>
  );
}
