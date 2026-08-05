'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/development', label: 'Development' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 group"
          >
            <div className="p-2 rounded-lg bg-card-light dark:bg-card-dark shadow-sm border border-border-light dark:border-border-dark group-hover:shadow-md transition-all">
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform text-accent-light dark:text-accent-dark" />
            </div>
            <span className="hidden sm:inline tracking-tight font-extrabold">DFP</span>
          </Link>
          
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1 items-center bg-card-light/50 dark:bg-card-dark/50 p-1 rounded-full border border-border-light dark:border-border-dark shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-accent-light text-white shadow-sm dark:bg-accent-dark'
                      : 'text-foreground-light/70 dark:text-foreground-dark/70 hover:text-foreground-light dark:hover:text-foreground-dark hover:bg-muted-light dark:hover:bg-muted-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-foreground-light dark:text-foreground-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-light dark:border-border-dark absolute top-16 left-0 w-full glass-panel shadow-lg">
            <div className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all font-medium ${
                    isActive(link.href)
                      ? 'bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark border border-accent-light/20 dark:border-accent-dark/20'
                      : 'text-foreground-light/80 dark:text-foreground-dark/80 hover:bg-card-light dark:hover:bg-card-dark border border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
