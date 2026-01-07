'use client';

import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { getFeaturedProjects } from '@/data/projects';
import { getPrimaryOrganization } from '@/data/experiences';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Download, ArrowRight, Mail, Github, Linkedin, Twitter, Instagram, Phone } from 'lucide-react';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const primaryOrg = getPrimaryOrganization();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-[1fr,300px] gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10 border border-blue-500/20 dark:border-blue-400/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              ✨ Available for opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
              {profile.fullName}
            </h1>
            
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-8 font-semibold">
              {profile.title}
            </p>
            
            <p className="text-lg text-foreground-light/70 dark:text-foreground-dark/70 mb-8 max-w-2xl leading-relaxed">
              {profile.shortBio}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`mailto:${profile.contact.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-400/30 transform hover:scale-105 transition-all"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get in Touch
              </a>
              
              <button
                onClick={() => {
                  const event = new CustomEvent('openPortfolioModal');
                  window.dispatchEvent(event);
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/50 dark:hover:shadow-emerald-400/30 transform hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Portfolio
              </button>
              
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-gray-100 font-medium transition-all"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="flex gap-4">
              {profile.socialLinks.map((link) => {
                const Icon = link.platform === 'GitHub' ? Github : 
                           link.platform === 'LinkedIn' ? Linkedin : 
                           link.platform === 'Twitter' ? Twitter :
                           link.platform === 'Instagram' ? Instagram :
                           link.platform === 'WhatsApp' ? Phone : null;
                
                return Icon ? (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all"
                    aria-label={link.platform}
                  >
                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="hidden md:block">
            <div className="relative w-full rounded-2xl overflow-hidden border-4 border-blue-500 dark:border-purple-500 shadow-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" style={{ aspectRatio: '4/5' }}>
              {profile.profileImage ? (
                <Image
                  src={profile.profileImage}
                  alt={profile.fullName}
                  fill
                  sizes="(max-width: 768px) 0vw, 300px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">
                        {profile.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-light/50 dark:text-foreground-dark/50">
                      Add your photo at<br />/public/images/profile.png
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Current Role */}
      {primaryOrg && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border-light dark:border-border-dark">
          <div className="max-w-4xl">
            <h2 className="text-sm uppercase tracking-wider text-foreground-light/50 dark:text-foreground-dark/50 mb-4">
              Current Role
            </h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-foreground-light dark:text-foreground-dark">
                {primaryOrg.currentRole}
              </h3>
              
              <div className="flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 mb-4">
                <span className="font-medium">{primaryOrg.organizationName}</span>
                <span>•</span>
                <span>{primaryOrg.currentPeriod}</span>
              </div>
              
              <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-4">
                {primaryOrg.description}
              </p>
              
              <Link
                href="/experience"
                className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
              >
                View Full Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border-light dark:border-border-dark">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-semibold mb-2">
              Featured Work
            </h2>
            <p className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
              Selected Projects
            </p>
          </div>
          
          <Link
            href="/projects"
            className="group hidden md:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <ProjectGrid projects={featuredProjects} />
        
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
