import { Project } from '@/data/types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  showCategory?: boolean;
}

export function ProjectGrid({ projects, showCategory = true }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-foreground-light/50 dark:text-foreground-dark/50">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          showCategory={showCategory}
        />
      ))}
    </div>
  );
}
