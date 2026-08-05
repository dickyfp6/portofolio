import Link from 'next/link';
import { profile } from '@/data/profile';
import { Github, Linkedin, Instagram, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, React.ElementType> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Instagram: Instagram,
    WhatsApp: Phone,
  };

  return (
    <footer className="border-t border-border-light/50 dark:border-border-dark/50 bg-background-light dark:bg-background-dark py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-light/50 dark:text-foreground-dark/50">
          © {currentYear} <span className="font-semibold text-foreground-light dark:text-foreground-dark">{profile.fullName}</span>
        </p>

        <div className="flex gap-3 items-center">
          {profile.socialLinks.map((link) => {
            const Icon = iconMap[link.platform];
            return Icon ? (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="p-2 rounded-lg text-foreground-light/60 dark:text-foreground-dark/60 hover:text-accent-light dark:hover:text-accent-dark hover:bg-muted-light dark:hover:bg-muted-dark transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
}

