import { profile } from '@/data/profile';
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground-light/70 dark:text-foreground-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground-light dark:text-foreground-dark">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                  {profile.fullName}
                </h2>
                <p className="text-xl text-accent-light dark:text-accent-dark mb-4">
                  {profile.title}
                </p>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 text-lg leading-relaxed">
                  {profile.shortBio}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                  What I Do
                </h3>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed mb-4">
                  I specialize in building distributed systems, scalable backend architectures, and data-intensive applications. 
                  My approach combines deep technical expertise with a focus on maintainability, observability, and long-term system health.
                </p>
                <p className="text-foreground-light/70 dark:text-foreground-dark/70 leading-relaxed">
                  Beyond coding, I mentor engineers, establish engineering best practices, and make architectural decisions 
                  that balance immediate needs with future scalability. I believe in building systems that not only work 
                  today but can evolve gracefully as requirements change.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                  Technical Focus
                </h3>
                <ul className="space-y-2">
                  {[
                    'Distributed Systems & Microservices Architecture',
                    'Real-time Data Processing & Analytics',
                    'API Design & System Integration',
                    'Infrastructure as Code & DevOps',
                    'Performance Optimization & Scalability',
                    'Engineering Leadership & Mentorship',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent-light dark:text-accent-dark mt-1">•</span>
                      <span className="text-foreground-light/70 dark:text-foreground-dark/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark sticky top-24">
                <h3 className="text-lg font-bold mb-4 text-foreground-light dark:text-foreground-dark">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-foreground-light/50 dark:text-foreground-dark/50 text-sm mb-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                    <a 
                      href={`mailto:${profile.contact.email}`}
                      className="text-accent-light dark:text-accent-dark hover:underline"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-foreground-light/50 dark:text-foreground-dark/50 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      Location
                    </div>
                    <p className="text-foreground-light dark:text-foreground-dark">
                      {profile.contact.location}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border-light dark:border-border-dark">
                    <p className="text-foreground-light/50 dark:text-foreground-dark/50 text-sm mb-3">
                      Connect with me
                    </p>
                    <div className="flex gap-3">
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
                            className="p-2 rounded-lg bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
                            aria-label={link.platform}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
