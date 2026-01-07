'use client';

import { Organization } from '@/data/types';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ExperienceCardProps {
  organization: Organization;
}

export function ExperienceCard({ organization }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(organization.isPrimary);

  return (
    <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
              {organization.organizationName}
            </h3>
            {organization.isPrimary && (
              <span className="px-3 py-1 text-xs rounded-full bg-accent-light dark:bg-accent-dark text-white font-medium">
                Primary
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 mb-1">
            <span className="font-medium">{organization.currentRole}</span>
            <span>•</span>
            <span>{organization.currentPeriod}</span>
          </div>
          
          {organization.website && (
            <a
              href={organization.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent-light dark:text-accent-dark hover:underline"
            >
              Visit Website
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
        
        {organization.experiences.length > 1 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      
      <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-4">
        {organization.description}
      </p>
      
      {isExpanded && organization.experiences.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-border-light dark:border-border-dark">
          <h4 className="font-semibold text-foreground-light dark:text-foreground-dark">
            Role History
          </h4>
          
          {organization.experiences.map((exp, index) => (
            <div key={index} className="pl-4 border-l-2 border-accent-light dark:border-accent-dark">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-foreground-light dark:text-foreground-dark">
                  {exp.role}
                </span>
                <span className="text-sm text-foreground-light/50 dark:text-foreground-dark/50">
                  • {exp.period}
                </span>
              </div>
              
              <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 mb-2">
                {exp.description}
              </p>
              
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 flex items-start gap-2"
                    >
                      <span className="text-accent-light dark:text-accent-dark mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
