import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects, getRelatedProjects } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, CheckCircle, Lightbulb, Zap, Star, AlertTriangle } from 'lucide-react';
import { ProjectGrid } from '@/components/ProjectGrid';
import { PresentationViewer } from '@/components/PresentationViewer';

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
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-foreground-light/70 dark:text-foreground-dark/70 hover:text-foreground-light dark:hover:text-foreground-dark hover:shadow-sm transition-all group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Projects</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="grid lg:grid-cols-[1fr,300px] gap-8 lg:gap-12 items-start">
          
          {/* Left: Content */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark text-xs font-semibold border border-accent-light/20 dark:border-accent-dark/20">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-500/50" />
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground-light dark:text-foreground-dark text-balance">
                {project.title}
              </h1>
              
              <p className="text-base md:text-lg text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed text-balance">
                {project.description}
              </p>
            </div>

            {/* Overview */}
            <div className="mb-6 p-6 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
                  Overview
                </h2>
              </div>
              <p className="text-foreground-light/80 dark:text-foreground-dark/80 leading-relaxed text-base">
                {project.detailedContent.overview}
              </p>
            </div>

            {/* Presentation Viewer */}
            {project.links?.presentation && (
              <div className="mb-6 p-6 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <h2 className="text-lg font-bold mb-4 text-foreground-light dark:text-foreground-dark tracking-tight">
                  Presentation
                </h2>
                <PresentationViewer 
                  pdfUrl={project.links.presentation}
                  title={project.title}
                />
              </div>
            )}
            
            {/* Approach */}
            <div className="mb-6 p-6 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Zap className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
                  Approach & Implementation
                </h2>
              </div>
              <ul className="space-y-4">
                {project.detailedContent.approach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mt-0.5 shrink-0">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-foreground-light/80 dark:text-foreground-dark/80 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Key Results */}
            <div className="mb-6 p-6 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
                  Key Results & Outcomes
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {project.detailedContent.output.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-1" />
                    <span className="text-foreground-light/80 dark:text-foreground-dark/80 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges */}
            {project.detailedContent.challenges && project.detailedContent.challenges.length > 0 && (
              <div className="mb-6 p-6 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
                    Technical Challenges
                  </h2>
                </div>
                <ul className="space-y-4">
                  {project.detailedContent.challenges.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-orange-500 dark:bg-orange-400 shrink-0" />
                      <span className="text-foreground-light/80 dark:text-foreground-dark/80 text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="lg:sticky lg:top-24 space-y-4">
            {/* Project Info Card */}
            <div className="p-5 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground-light/50 dark:text-foreground-dark/50 mb-4">
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-accent-light dark:text-accent-dark mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-foreground-light/50 dark:text-foreground-dark/50 mb-0.5">Period</p>
                    <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">{project.period}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag className="w-4 h-4 text-accent-light dark:text-accent-dark mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-foreground-light/50 dark:text-foreground-dark/50 mb-0.5">Category</p>
                    <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Card */}
            {project.links && Object.values(project.links).some(Boolean) && (
              <div className="p-5 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground-light/50 dark:text-foreground-dark/50 mb-4">
                  Links
                </h3>
                <div className="flex flex-col gap-2.5">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-sm transition-all"
                    >
                      <Github className="w-4 h-4 text-foreground-light/60 dark:text-foreground-dark/60 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors" />
                      <span className="text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80 group-hover:text-foreground-light dark:group-hover:text-foreground-dark transition-colors">View Source Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 border border-accent-light/20 dark:border-accent-dark/20 hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-accent-light dark:text-accent-dark group-hover:text-white transition-colors" />
                      <span className="text-sm font-semibold text-accent-light dark:text-accent-dark group-hover:text-white transition-colors">Live Demo</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-sm transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-foreground-light/60 dark:text-foreground-dark/60 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors" />
                      <span className="text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80">View Demo</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Tech Stack Card */}
            <div className="p-5 rounded-[1.25rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground-light/50 dark:text-foreground-dark/50 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-foreground-light/80 dark:text-foreground-dark/80 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-border-light/50 dark:border-border-dark/50 bg-muted-light/30 dark:bg-muted-dark/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xs uppercase tracking-widest text-accent-light dark:text-accent-dark font-bold mb-2">
              Related Work
            </h2>
            <p className="text-2xl font-bold text-foreground-light dark:text-foreground-dark tracking-tight mb-8">
              More Projects
            </p>
            <ProjectGrid projects={relatedProjects} />
          </div>
        </section>
      )}
    </div>
  );
}


