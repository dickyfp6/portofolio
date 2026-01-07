import { Organization } from './types';

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

export const organizations: Organization[] = [
  {
    id: 'its-student-choir',
    organizationName: 'ITS Student Choir',
    isPrimary: true,
    currentRole: 'Chairman',
    currentPeriod: '2022 - Present',
    description: 'Leading organizational governance, ticketing systems development, and external relations for ITS Student Choir. Managing 25+ client engagements and organizational reforms.',
    logo: '/images/orgs/its-choir.jpg',
    website: 'https://instagram.com/itsstudentchoir',
    experiences: [
      {
        role: 'Chairman',
        period: '2024 - Present',
        description: 'Leading organizational governance, external relations, and system development initiatives.',
        achievements: [
          'Negotiated 25+ client engagements for choir performances',
          'Developed improved ticketing and seat management system',
          'Led organizational reforms (TKO, AD/ART)',
          'Achieved multiple Gold awards at competitions',
          '2nd Winner at regional competitions',
          'Recognition as top-performing student activity unit',
        ],
      },
      {
        role: 'Ticketing & Operations Staff',
        period: '2022 - 2024',
        description: 'Managed event ticketing operations and operational coordination.',
        achievements: [
          'Developed event ticketing system using Google Apps Script',
          'Managed seat availability and transaction tracking',
          'Automated WhatsApp confirmations for ticket purchases',
          'Improved data accuracy in event operations',
        ],
      },
    ],
  },
  {
    id: 'formits',
    organizationName: 'FORMITS - Forum Daerah Mahasiswa ITS Mojokerto',
    isPrimary: false,
    currentRole: 'Former Chairman',
    currentPeriod: '2022 - 2025',
    description: 'Led regional outreach programs engaging 20+ schools, reaching 500+ prospective students, and organizing large-scale UTBK try-out programs.',
    logo: '/images/orgs/formits.jpg',
    experiences: [
      {
        role: 'Chairman',
        period: '2024 - 2025',
        description: 'Led regional outreach and recruitment programs for ITS prospective students from Mojokerto region.',
        achievements: [
          'Led outreach programs engaging 20+ schools',
          'Reached 500+ prospective students',
          'Generated 250+ UTBK try-out registrants',
          'Nominated as awardee at ITS regional student forum',
        ],
      },
      {
        role: 'Data Management Staff',
        period: '2022 - 2024',
        description: 'Managed data collection and analysis for outreach programs.',
        achievements: [
          'Organized student data from multiple schools',
          'Created reports for program evaluation',
          'Supported event coordination through data management',
        ],
      },
    ],
  },
  {
    id: 'ise-2024',
    organizationName: 'Information System Expo (ISE!) 2024',
    isPrimary: false,
    currentRole: 'Director of RISE! Business Case Competition',
    currentPeriod: 'May - Nov 2024',
    description: 'Led end-to-end execution of real-case business competition with 200+ participants, managing cross-functional teams and stakeholder coordination.',
    logo: '/images/orgs/ise.jpg',
    experiences: [
      {
        role: 'Director of RISE! Business Case Competition',
        period: 'May - Nov 2024',
        description: 'Led complete execution of business case competition from planning to implementation.',
        achievements: [
          '200+ registered participants in preliminary round',
          'Managed cross-functional teams across divisions',
          'Coordinated stakeholder negotiations',
          'Collaborated with IT teams for competition administration systems',
          'Delivered successful competition event',
        ],
      },
    ],
  },
  {
    id: 'gerigi-its-2024',
    organizationName: 'Gerigi ITS 2024',
    isPrimary: false,
    currentRole: 'Expert Staff, Data Center Division',
    currentPeriod: 'June - Sept 2024',
    description: 'Developed automated student grouping system using Python for 360+ new students orientation program.',
    logo: '/images/orgs/gerigi.jpg',
    experiences: [
      {
        role: 'Expert Staff, Data Center Division',
        period: 'June - Sept 2024',
        description: 'Developed rule-based grouping system for new student orientation.',
        achievements: [
          'Developed Python-based student grouping system',
          'Successfully grouped 360+ new students',
          'Implemented constraints: gender balance, faculty distribution, capacity',
          'Automated manual grouping process',
          'Supported large-scale operational execution',
        ],
      },
    ],
  },
  {
    id: 'hmsi-its',
    organizationName: 'Himpunan Mahasiswa Sistem Informasi (HMSI) ITS',
    isPrimary: false,
    currentRole: 'Student Welfare Staff',
    currentPeriod: 'July 2023 - Feb 2025',
    description: 'Supported student welfare activities, academic coordination, and community service initiatives.',
    logo: '/images/orgs/hmsi.jpg',
    experiences: [
      {
        role: 'Student Welfare & Social Development Staff',
        period: 'July 2023 - Feb 2025',
        description: 'Supported student welfare and academic coordination activities.',
        achievements: [
          'Provided schedule assistance for students',
          'Coordinated communication with academic administration',
          'Participated in community service initiatives',
          'Supported student welfare programs',
        ],
      },
    ],
  },
  {
    id: 'rumah-teror',
    organizationName: 'Rumah Teror',
    isPrimary: false,
    currentRole: 'Scoring Crew',
    currentPeriod: 'June - July 2023',
    description: 'Managed visitor score data tracking and performance evaluation system for event operations.',
    logo: '/images/orgs/rumah-teror.jpg',
    experiences: [
      {
        role: 'Scoring Crew',
        period: 'June - July 2023',
        description: 'Managed and recorded visitor score data for performance evaluation.',
        achievements: [
          'Tracked visitor scores and rating distributions',
          'Recorded completion times for performance analysis',
          'Used Google Spreadsheet for structured data processing',
          'Supported finalist selection process',
        ],
      },
    ],
  },
  {
    id: 'griya-pakan',
    organizationName: 'Griya Pakan',
    isPrimary: false,
    currentRole: 'Cashier',
    currentPeriod: 'June - July 2022',
    description: 'Processed daily transactions and handled customer service operations.',
    logo: '/images/orgs/griya-pakan.jpg',
    experiences: [
      {
        role: 'Cashier',
        period: 'June - July 2022',
        description: 'Handled POS transactions and customer service.',
        achievements: [
          'Processed daily transactions using POS system',
          'Handled customer inquiries professionally',
          'Ensured accurate product arrangement',
          'Maintained efficient checkout operations',
        ],
      },
    ],
  },
];

// Helper function to get primary organization
export const getPrimaryOrganization = (): Organization | undefined => {
  return organizations.find(org => org.isPrimary);
};

// Helper function to get all organizations
export const getAllOrganizations = (): Organization[] => {
  return organizations;
};
