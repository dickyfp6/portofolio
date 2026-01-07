import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, getRelatedProjects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Download } from 'lucide-react';
import { ProjectGrid } from '@/components/ProjectGrid';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  const relatedProjects = getRelatedProjects(project);

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-accent-light dark:text-accent-dark font-medium hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-sm font-medium">
                {project.category}
              </span>
              <span className="text-foreground-light/50 dark:text-foreground-dark/50">
                {project.period}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-light dark:text-foreground-dark">
              {project.title}
            </h1>
            
            <p className="text-xl text-foreground-light/70 dark:text-foreground-dark/70 mb-8">
              {project.description}
            </p>
            
            {/* Links */}
            {project.links && (
              <div className="flex gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </a>
                )}
              </div>
            )}
          </div>
          
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              Overview
            </h2>
            <p className="text-foreground-light/70 dark:text-foreground-dark/70 text-lg">
              {project.detailedContent.overview}
            </p>
          </div>

          {/* Presentation Viewer */}
          {project.links?.presentation && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                Presentation Overview
              </h2>
              <div className="relative w-full rounded-xl overflow-hidden border border-border-light dark:border-border-dark shadow-lg bg-white" style={{ height: '600px' }}>
                <iframe
                  src={project.links.presentation}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${project.title} Presentation`}
                />
              </div>
            </div>
          )}
          
          {/* Approach */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              Approach
            </h2>
            <ul className="space-y-3">
              {project.detailedContent.approach.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark mt-1">•</span>
                  <span className="text-foreground-light/70 dark:text-foreground-dark/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Output */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              Key Results
            </h2>
            <ul className="space-y-3">
              {project.detailedContent.output.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-light dark:text-accent-dark mt-1">✓</span>
                  <span className="text-foreground-light/70 dark:text-foreground-dark/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Challenges */}
          {project.detailedContent.challenges && project.detailedContent.challenges.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                Technical Challenges
              </h2>
              <ul className="space-y-3">
                {project.detailedContent.challenges.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent-light dark:text-accent-dark mt-1">⚡</span>
                    <span className="text-foreground-light/70 dark:text-foreground-dark/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border-light dark:border-border-dark">
          <h2 className="text-3xl font-bold mb-8 text-foreground-light dark:text-foreground-dark">
            Related Projects
          </h2>
          <ProjectGrid projects={relatedProjects} />
        </section>
      )}
    </div>
  );
}
