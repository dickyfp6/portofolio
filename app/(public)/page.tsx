'use client';

import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { getFeaturedProjects } from '@/data/projects';
import { getPrimaryOrganization, developmentActivities } from '@/data/experiences';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Download, ArrowRight, Mail, Github, Linkedin, Twitter, Instagram, Phone, GraduationCap } from 'lucide-react';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const primaryOrg = getPrimaryOrganization();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-[1fr,320px] gap-12 md:gap-16 items-center">
          {/* Profile Image - Show on mobile at top */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="relative w-56 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-accent-light/10 dark:shadow-accent-dark/10 ring-1 ring-border-light dark:ring-border-dark group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/20 to-transparent dark:from-accent-dark/20 z-0 transition-opacity duration-500 group-hover:opacity-0" />
              {profile.profileImage ? (
                <Image
                  src={profile.profileImage}
                  alt={profile.fullName}
                  fill
                  className="object-cover relative z-10"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-card-light dark:bg-card-dark text-muted-foreground">
                  {profile.fullName.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground-light dark:text-foreground-dark text-balance">
              {profile.fullName}
            </h1>
            
            <p className="text-2xl md:text-3xl text-accent-light dark:text-accent-dark mb-8 font-medium tracking-tight">
              {profile.title}
            </p>
            
            <p className="text-lg md:text-xl text-foreground-light/70 dark:text-foreground-dark/70 mb-10 max-w-2xl leading-relaxed text-balance">
              {profile.shortBio}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href={`mailto:${profile.contact.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-foreground-light dark:bg-foreground-dark text-background-light dark:text-background-dark font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                Get in Touch
              </a>
              
              <button
                onClick={() => {
                  const event = new CustomEvent('openPortfolioModal');
                  window.dispatchEvent(event);
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-foreground-light dark:text-foreground-dark font-semibold hover:bg-muted-light dark:hover:bg-muted-dark hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-sm transition-all duration-300"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                Download Portfolio
              </button>
            </div>
            
            <div className="flex gap-3 items-center">
              <span className="text-sm font-medium text-foreground-light/50 dark:text-foreground-dark/50 mr-2">Connect:</span>
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
                    className="p-2.5 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-foreground-light/70 dark:text-foreground-dark/70 hover:text-accent-light dark:hover:text-accent-dark hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                    aria-label={link.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
          
          {/* Profile Image - Desktop only */}
          <div className="hidden md:block">
            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-accent-light/5 dark:shadow-accent-dark/5 ring-1 ring-border-light/50 dark:ring-border-dark/50 group" style={{ aspectRatio: '3/4' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/10 to-transparent dark:from-accent-dark/10 z-0 transition-opacity duration-700 group-hover:opacity-0" />
              {profile.profileImage ? (
                <Image
                  src={profile.profileImage}
                  alt={profile.fullName}
                  fill
                  sizes="(max-width: 768px) 0vw, 320px"
                  className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-card-light dark:bg-card-dark relative z-10">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted-light dark:bg-muted-dark flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground-light/50 dark:text-foreground-dark/50">
                        {profile.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Current Role */}
      {primaryOrg && (
        <section className="border-t border-border-light/50 dark:border-border-dark/50 bg-muted-light/30 dark:bg-muted-dark/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="w-full">
              <h2 className="text-sm uppercase tracking-widest text-accent-light dark:text-accent-dark font-bold mb-6 text-center">
                Current Role
              </h2>
              
              <div className="p-8 md:p-10 rounded-[2rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground-light dark:text-foreground-dark tracking-tight">
                      {primaryOrg.currentRole}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-base text-foreground-light/70 dark:text-foreground-dark/70">
                      <span className="font-semibold text-foreground-light dark:text-foreground-dark">{primaryOrg.organizationName}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-border-light dark:bg-border-dark"></span>
                      <span>{primaryOrg.currentPeriod}</span>
                    </div>
                  </div>
                  <Link
                    href="/experience"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-muted-light dark:bg-muted-dark text-foreground-light dark:text-foreground-dark font-medium hover:bg-accent-light hover:text-white dark:hover:bg-accent-dark transition-all duration-300"
                  >
                    Full Experience
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed text-lg text-balance">
                  {primaryOrg.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-accent-light dark:text-accent-dark font-bold mb-3">
              Featured Work
            </h2>
            <p className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
              Selected Projects
            </p>
          </div>
          
          <Link
            href="/projects"
            className="group hidden md:inline-flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <ProjectGrid projects={featuredProjects} />
        
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark font-semibold hover:border-accent-light dark:hover:border-accent-dark transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Development Activities */}
      <section className="border-t border-border-light/50 dark:border-border-dark/50 bg-muted-light/30 dark:bg-muted-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent-light dark:text-accent-dark font-bold mb-3">
                Professional Development
              </h2>
              <p className="text-4xl md:text-5xl font-bold text-foreground-light dark:text-foreground-dark tracking-tight">
                Latest Activities
              </p>
            </div>
            
            <Link
              href="/development"
              className="group hidden md:inline-flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {developmentActivities.slice(0, 2).map((activity) => (
              <div 
                key={activity.id}
                className="group p-8 rounded-[2rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-accent-light/50 dark:hover:border-accent-dark/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-muted-light dark:bg-muted-dark text-foreground-light/70 dark:text-foreground-dark/70 group-hover:bg-accent-light group-hover:text-white dark:group-hover:bg-accent-dark transition-colors duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground-light dark:text-foreground-dark mb-1 tracking-tight">
                      {activity.title}
                    </h3>
                    <p className="text-sm font-medium text-accent-light dark:text-accent-dark">
                      {activity.institution}
                    </p>
                  </div>
                </div>

                <p className="text-foreground-light/70 dark:text-foreground-dark/70 mb-8 leading-relaxed line-clamp-3">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activity.stages.slice(0, 2).map((stage, index) => (
                    <div
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-xs font-medium text-foreground-light/80 dark:text-foreground-dark/80"
                    >
                      {stage.name}
                    </div>
                  ))}
                  {activity.stages.length > 2 && (
                    <div className="px-3 py-1.5 rounded-lg bg-transparent border border-dashed border-border-light dark:border-border-dark text-xs font-medium text-foreground-light/60 dark:text-foreground-dark/60">
                      +{activity.stages.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/development"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark font-semibold hover:border-accent-light dark:hover:border-accent-dark transition-colors"
            >
              All Activities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
