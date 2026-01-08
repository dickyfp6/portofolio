// Core types for the portfolio data structure

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

export interface Profile {
  fullName: string;
  title: string;
  shortBio: string;
  contact: ContactInfo;
  socialLinks: SocialLink[];
  profileImage: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  period: string;
  featured: boolean;
  relevanceTags: string[];
  detailedContent: {
    overview: string;
    approach: string[];
    output: string[];
    challenges?: string[];
  };
  thumbnail: string;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
    presentation?: string; // Google Slides embed URL or PDF URL
  };
}

export interface Experience {
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface Organization {
  id: string;
  organizationName: string;
  isPrimary: boolean;
  currentRole: string;
  currentPeriod: string;
  description: string;
  logo?: string;
  website?: string;
  experiences: Experience[];
}

export interface DevelopmentActivity {
  id: string;
  title: string;
  institution: string;
  description: string;
  stages: {
    name: string;
    focus: string;
    description: string;
  }[];
}
