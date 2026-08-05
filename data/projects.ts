import { Project } from './types';
import projectsData from './projects.json';

export const projects: Project[] = projectsData as Project[];

// Helper function to get unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(projects.map(p => p.category))).sort();
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(p => p.category === category);
};

// Helper function to get related projects based on tags
export const getRelatedProjects = (project: Project, limit: number = 3): Project[] => {
  return projects
    .filter(p => p.id !== project.id)
    .map(p => ({
      project: p,
      score: p.relevanceTags.filter(tag => project.relevanceTags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.project);
};
