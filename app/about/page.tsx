import { profile } from '@/data/profile';
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-8 md:pt-12 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-foreground-light/70 dark:text-foreground-dark/70 hover:text-foreground-light dark:hover:text-foreground-dark hover:shadow-sm transition-all mb-8 md:mb-12 group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Back to Home</span>
        </Link>
        
        <div className="mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-foreground-light dark:text-foreground-dark">
            About Me
          </h1>
          <div className="w-20 h-1.5 bg-accent-light dark:bg-accent-dark rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            <div className="md:col-span-7 lg:col-span-8 space-y-12">
              <div className="prose prose-lg dark:prose-invert">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-foreground-light dark:text-foreground-dark">
                  {profile.fullName}
                </h2>
                <p className="text-xl text-accent-light dark:text-accent-dark mb-6 font-medium">
                  {profile.title}
                </p>
                <p className="text-foreground-light/80 dark:text-foreground-dark/80 text-lg leading-relaxed text-balance">
                  {profile.shortBio}
                </p>
              </div>
              
              <div className="p-8 rounded-[2rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-foreground-light dark:text-foreground-dark">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground-light/80 dark:text-foreground-dark/80 leading-relaxed text-lg">
                    I specialize in building distributed systems, scalable backend architectures, and data-intensive applications. 
                    My approach combines deep technical expertise with a focus on maintainability, observability, and long-term system health.
                  </p>
                  <p className="text-foreground-light/80 dark:text-foreground-dark/80 leading-relaxed text-lg">
                    Beyond coding, I mentor engineers, establish engineering best practices, and make architectural decisions 
                    that balance immediate needs with future scalability. I believe in building systems that not only work 
                    today but can evolve gracefully as requirements change.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-foreground-light dark:text-foreground-dark">
                  Technical Focus
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Data Management & Processing',
                    'Decision Support Systems',
                    'Backend Development',
                    'Operational Automation',
                    'Data-Driven System Design',
                    'API Design & Integration',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card-light dark:bg-card-dark border border-border-light/50 dark:border-border-dark/50 shadow-sm hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-md transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-light dark:bg-accent-dark mt-2 shrink-0"></div>
                      <span className="text-foreground-light/80 dark:text-foreground-dark/80 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Tools */}
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight text-foreground-light dark:text-foreground-dark">
                  Skills & Tools
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      category: 'Languages & Frameworks',
                      color: 'indigo',
                      skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Flutter', 'Next.js'],
                    },
                    {
                      category: 'Data & Databases',
                      color: 'emerald',
                      skills: ['Pandas', 'Firebase', 'Firestore', 'Google Sheets', 'Excel', 'CSV Processing'],
                    },
                    {
                      category: 'Tools & Platforms',
                      color: 'violet',
                      skills: ['Google Apps Script', 'Git', 'GitHub', 'Gemini API', 'WhatsApp API', 'Geolocation API'],
                    },
                  ].map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-foreground-light/40 dark:text-foreground-dark/40 mb-3">
                        {group.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-xl bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-sm font-medium text-foreground-light/80 dark:text-foreground-dark/80 hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:text-accent-light dark:hover:text-accent-dark transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            
            <div className="md:col-span-5 lg:col-span-4">
              <div className="p-8 rounded-[2rem] bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm md:sticky md:top-28">
                <h3 className="text-xl font-bold mb-6 tracking-tight text-foreground-light dark:text-foreground-dark">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href={`mailto:${profile.contact.email}`}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted-light dark:hover:bg-muted-dark transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground-light/50 dark:text-foreground-dark/50 mb-1">Email</p>
                      <p className="font-medium text-foreground-light dark:text-foreground-dark break-all group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                        {profile.contact.email}
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="p-3 rounded-xl bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground-light/50 dark:text-foreground-dark/50 mb-1">Location</p>
                      <p className="font-medium text-foreground-light dark:text-foreground-dark">
                        {profile.contact.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-border-light dark:border-border-dark">
                    <p className="text-sm font-semibold uppercase tracking-wider text-foreground-light/50 dark:text-foreground-dark/50 mb-4 px-4">
                      Social Profiles
                    </p>
                    <div className="flex flex-wrap gap-3 px-4">
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
                            className="p-3 rounded-xl bg-muted-light dark:bg-muted-dark border border-border-light/50 dark:border-border-dark/50 text-foreground-light/70 dark:text-foreground-dark/70 hover:text-accent-light dark:hover:text-accent-dark hover:border-accent-light/30 dark:hover:border-accent-dark/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
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
      </section>
    </div>
  );
}

