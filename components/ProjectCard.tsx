import Link from 'next/link';
import { Project } from '@/data/types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  showCategory?: boolean;
}

export function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {showCategory && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-accent-light dark:text-accent-dark font-medium">
              {project.category}
            </span>
            <span className="text-sm text-foreground-light/50 dark:text-foreground-dark/50">
              • {project.period}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3 text-foreground-light dark:text-foreground-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-sm rounded-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex items-center text-accent-light dark:text-accent-dark font-medium group-hover:gap-2 transition-all">
          View Project
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
