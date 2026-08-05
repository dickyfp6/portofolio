import Link from 'next/link';
import { Project } from '@/data/types';
import { ArrowRight, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  showCategory?: boolean;
}

export function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
  const hasLinks = project.links && (project.links.github || project.links.live || project.links.demo);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex flex-col h-full p-6 rounded-[1.5rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light/40 dark:hover:border-accent-dark/40 hover:shadow-md transition-all duration-300"
    >
      {/* Top row: category + badges */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {showCategory && (
            <span className="text-xs font-semibold text-accent-light dark:text-accent-dark uppercase tracking-wider">
              {project.category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-500/20">
              <Star className="w-3 h-3 fill-amber-500/50" />
              Featured
            </span>
          )}
          {hasLinks && project.links?.github && (
            <span className="p-1.5 rounded-lg bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-foreground-light/50 dark:text-foreground-dark/50 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
              <Github className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-3 text-foreground-light dark:text-foreground-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors tracking-tight leading-snug">
        {project.title}
      </h3>
      
      <p className="text-sm text-foreground-light/65 dark:text-foreground-dark/65 mb-5 flex-grow leading-relaxed line-clamp-3">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-lg bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-foreground-light/70 dark:text-foreground-dark/70 font-medium"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2.5 py-1 text-xs rounded-lg bg-muted-light dark:bg-muted-dark border border-dashed border-border-light dark:border-border-dark text-foreground-light/50 dark:text-foreground-dark/50">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-foreground-light/40 dark:text-foreground-dark/40 font-medium">
          {project.period}
        </span>
        <div className="flex items-center gap-1 text-sm text-accent-light dark:text-accent-dark font-semibold group-hover:gap-2 transition-all">
          View
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}


