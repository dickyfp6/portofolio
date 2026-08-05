import { Organization, DevelopmentActivity } from './types';
import orgsData from './organizations.json';
import devData from './developmentActivities.json';

// Educational background
export const education = {
  institution: 'Institut Teknologi Sepuluh Nopember',
  degree: 'Undergraduate in Information System',
  gpa: '3.44/4.00',
  location: 'Surabaya, East Java',
  period: 'August 2022 - June 2026 (Expected)'
};

// Work experiences
export const workExperiences = [
  {
    company: 'Rumah Teror',
    role: 'Scoring Crew',
    location: 'Mojokerto, East Java',
    period: 'June - July 2023',
    responsibilities: [
      'Built a simple analysis related to the rating distribution from visitors using Google Spreadsheet'
    ]
  },
  {
    company: 'Griya Pakan',
    role: 'Cashier',
    location: 'Mojokerto, East Java',
    period: 'June - July 2022',
    responsibilities: [
      'Process transactions accurately using the POS system',
      'Assist customers and handle inquiries',
      'Sort and arrange products at checkout'
    ]
  }
];

export const organizations: Organization[] = orgsData as Organization[];

export const developmentActivities: DevelopmentActivity[] = devData as DevelopmentActivity[];

// Helper function to get primary organization
export const getPrimaryOrganization = (): Organization | undefined => {
  return organizations.find(org => org.isPrimary);
};

// Helper function to get all organizations
export const getAllOrganizations = (): Organization[] => {
  return organizations;
};
