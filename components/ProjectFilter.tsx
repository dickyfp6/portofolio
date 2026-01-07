'use client';

import { useState } from 'react';

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${
          selectedCategory === 'all'
            ? 'bg-accent-light dark:bg-accent-dark text-white'
            : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark'
        }`}
      >
        All Projects
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedCategory === category
              ? 'bg-accent-light dark:bg-accent-dark text-white'
              : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
