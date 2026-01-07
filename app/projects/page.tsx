'use client';

import { useState, useMemo } from 'react';
import { projects, getCategories } from '@/data/projects';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ProjectFilter } from '@/components/ProjectFilter';
import { Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = getCategories();
  
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.techStack.some(tech => tech.toLowerCase().includes(query)) ||
        p.relevanceTags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
            All Projects
          </h1>
          <p className="text-lg text-foreground-light/70 dark:text-foreground-dark/70 max-w-2xl">
            A collection of engineering projects showcasing system design, scalable architectures, and data-driven solutions.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground-light/50 dark:text-foreground-dark/50" />
            <input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark focus:border-accent-light dark:focus:border-accent-dark outline-none transition-colors"
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-12">
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        {/* Projects Grid */}
        <div className="mb-8">
          <p className="text-foreground-light/50 dark:text-foreground-dark/50 mb-6">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
          
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>
    </div>
  );
}
