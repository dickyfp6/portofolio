import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Home } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors group"
          >
            <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">DFP</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <Link 
                href="/projects" 
                className="text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className="text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                Experience
              </Link>
              <Link 
                href="/about" 
                className="text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                About
              </Link>
            </div>
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
