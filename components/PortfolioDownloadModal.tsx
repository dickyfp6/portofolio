'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { X, Download, Loader2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { Project } from '@/data/types';

interface PortfolioDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioDownloadModal({ isOpen, onClose }: PortfolioDownloadModalProps) {
  const [selectedProjects, setSelectedProjects] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);
  const [PDFComponents, setPDFComponents] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import PDF components only on client
    if (typeof window !== 'undefined') {
      Promise.all([
        import('@react-pdf/renderer'),
        import('./pdf/PortfolioPDF')
      ]).then(([pdfRenderer, portfolioPDF]) => {
        setPDFComponents({
          PDFDownloadLink: pdfRenderer.PDFDownloadLink,
          PortfolioPDF: portfolioPDF.PortfolioPDF
        });
      }).catch((error) => {
        console.error('Error loading PDF components:', error);
      });
    }
  }, []);

  useEffect(() => {
    // Pre-select featured projects
    const featuredIds = projects.filter(p => p.featured).map(p => p.id);
    setSelectedProjects(new Set(featuredIds));
  }, []);

  if (!isOpen) return null;

  // Get unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  // Filter projects by selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const toggleProject = (projectId: string) => {
    const newSelected = new Set(selectedProjects);
    if (newSelected.has(projectId)) {
      newSelected.delete(projectId);
    } else {
      newSelected.add(projectId);
    }
    setSelectedProjects(newSelected);
  };

  const selectAll = () => {
    setSelectedProjects(new Set(filteredProjects.map(p => p.id)));
  };

  const deselectAll = () => {
    setSelectedProjects(new Set());
  };

  const selectedProjectsData = projects.filter(p => selectedProjects.has(p.id));
  const pdfTheme = theme === 'dark' ? 'dark' : 'light';

  const PDFDownloadLink = PDFComponents?.PDFDownloadLink;
  const PortfolioPDF = PDFComponents?.PortfolioPDF;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light dark:border-border-dark">
          <div>
            <h2 className="text-2xl font-bold text-foreground-light dark:text-foreground-dark">
              Download Portfolio
            </h2>
            <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70 mt-1">
              Select projects to include in your custom PDF portfolio
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-card-light dark:hover:bg-card-dark transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Selection */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70">
              {selectedProjects.size} of {projects.length} projects selected
              {selectedCategory !== 'all' && ` • Showing ${filteredProjects.length} in ${selectedCategory}`}
            </p>
            <div className="flex gap-2">
              <button
                onClick={selectAll}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Select All
              </button>
              <span className="text-foreground-light/30 dark:text-foreground-dark/30">|</span>
              <button
                onClick={deselectAll}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Deselect All
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <label
                key={project.id}
                className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedProjects.has(project.id)
                    ? 'border-accent-light dark:border-accent-dark bg-accent-light/5 dark:bg-accent-dark/5'
                    : 'border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedProjects.has(project.id)}
                  onChange={() => toggleProject(project.id)}
                  className="mt-1 w-5 h-5 rounded border-border-light dark:border-border-dark text-accent-light dark:text-accent-dark focus:ring-accent-light dark:focus:ring-accent-dark"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-foreground-light dark:text-foreground-dark">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.featured && (
                        <span className="px-2 py-1 text-xs rounded bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                          Featured
                        </span>
                      )}
                      <span className="text-sm text-foreground-light/50 dark:text-foreground-dark/50">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-light/70 dark:text-foreground-dark/70">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-card-light dark:bg-card-dark"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded bg-card-light dark:bg-card-dark">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border-light dark:border-border-dark">
          <div className="text-sm text-foreground-light/70 dark:text-foreground-dark/70">
            PDF will include cover, identity, and {selectedProjects.size} project{selectedProjects.size !== 1 ? 's' : ''}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
            >
              Cancel
            </button>
            
            {isClient && selectedProjects.size > 0 && PDFDownloadLink && PortfolioPDF ? (
              <PDFDownloadLink
                document={
                  <PortfolioPDF
                    profile={profile}
                    selectedProjects={selectedProjectsData}
                    theme={pdfTheme}
                  />
                }
                fileName={`${profile.fullName.replace(/\s+/g, '-')}-Portfolio.pdf`}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/50 dark:hover:shadow-emerald-400/30 transition-all"
              >
                {({ loading }: { loading: boolean }) =>
                  loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download PDF
                    </>
                  )
                }
              </PDFDownloadLink>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-card-light dark:bg-card-dark text-foreground-light/30 dark:text-foreground-dark/30 cursor-not-allowed"
              >
                {!PDFDownloadLink || !PortfolioPDF ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download PDF
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
