'use client';

import { DevelopmentActivity } from '@/data/types';
import { GraduationCap } from 'lucide-react';

interface DevelopmentActivityCardProps {
  activity: DevelopmentActivity;
}

export function DevelopmentActivityCard({ activity }: DevelopmentActivityCardProps) {
  return (
    <div className="bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-sm rounded-lg border border-foreground-light/10 dark:border-foreground-dark/10 p-6 hover:border-accent-light/30 dark:hover:border-accent-dark/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-accent-light/10 dark:bg-accent-dark/10">
          <GraduationCap className="w-6 h-6 text-accent-light dark:text-accent-dark" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-1">
            {activity.title}
          </h3>
          <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70">
            {activity.institution}
          </p>
        </div>
      </div>

      <p className="text-foreground-light/80 dark:text-foreground-dark/80 mb-6 leading-relaxed">
        {activity.description}
      </p>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-foreground-light dark:text-foreground-dark uppercase tracking-wider">
          Program Stages
        </h4>
        {activity.stages.map((stage, index) => (
          <div
            key={index}
            className="pl-4 border-l-2 border-accent-light/30 dark:border-accent-dark/30 py-2"
          >
            <h5 className="font-semibold text-foreground-light dark:text-foreground-dark mb-1">
              {stage.name}
            </h5>
            <p className="text-sm text-accent-light dark:text-accent-dark mb-2">
              Focus: {stage.focus}
            </p>
            <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
