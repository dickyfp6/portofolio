import { Organization, DevelopmentActivity } from './types';

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
    organizationName: 'ITS Student Choir (PSM ITS)',
    isPrimary: true,
    currentRole: 'Chairman',
    currentPeriod: 'February 2022 - Present',
    description: 'Leading organizational governance, ticketing systems development, and external relations for ITS Student Choir. Managing 25+ client engagements and organizational reforms.',
    logo: '/images/orgs/its-choir.jpg',
    website: 'https://instagram.com/itsstudentchoir',
    experiences: [
      {
        role: 'Chairman',
        period: 'February 2025 – Present',
        description: 'Coordinating overall organizational governance and daily operations.',
        achievements: [
          'Coordinated overall organizational governance and daily operations',
          'Designed and implemented annual work programs',
          'Ensured organizational sustainability and performance continuity',
        ],
      },
      {
        role: 'Head of Public Relations Bureau',
        period: 'February 2024 – February 2025',
        description: 'Managing incoming performance requests and external communications.',
        achievements: [
          'Managed incoming performance requests and external communications',
          'Coordinated with internal departments and music directors',
          'Handled stakeholder relations and client negotiations',
        ],
      },
      {
        role: 'Vice Project Officer – Lumineos 2024 (Choir Collaboration Concert)',
        period: 'January – June 2024',
        description: 'Assisted Project Officer in managing overall event execution.',
        achievements: [
          'Assisted Project Officer in managing overall event execution',
          'Coordinated human resources across divisions',
          'Supported internal operational activities',
        ],
      },
      {
        role: 'Head of Ticketing Division – Niskala 2023 & Swara Kentjana 2023',
        period: 'August – October 2023',
        description: 'Designed and implemented concert ticketing systems.',
        achievements: [
          'Designed and implemented concert ticketing systems',
          'Managed ticket sales transactions and seat allocation',
          'Coordinated ticketing teams during event execution',
        ],
      },
      {
        role: 'Intern Staff – Public Relations Department',
        period: 'August 2023 – February 2024',
        description: 'Prepared information broadcasts and announcements.',
        achievements: [
          'Prepared information broadcasts and announcements',
          'Served as Job Manager for assigned activities',
          'Coordinated tasks with department staff',
        ],
      },
      {
        role: 'Event Staff – Konser Anggota Baru 2023',
        period: 'October 2022 – May 2023',
        description: 'Contributed to event concept development.',
        achievements: [
          'Contributed to event concept development',
          'Prepared event rundown and on-day committee structure',
        ],
      },
      {
        role: 'Operational Committee – Latihan Alam 2024',
        period: 'July 2023 – May 2024',
        description: 'Developed promotional content for ITS Student Choir.',
        achievements: [
          'Developed promotional content for ITS Student Choir',
          'Designed event timelines and operational run-downs',
          'Supported execution of outdoor leadership activities',
        ],
      },
    ],
  },
  {
    id: 'formits',
    organizationName: 'FORMITS (Forum Daerah Mahasiswa ITS – Mojokerto)',
    isPrimary: false,
    currentRole: 'Chairman',
    currentPeriod: 'March 2025 – February 2026',
    description: 'Coordinating organizational strategy and work programs, leading cross-functional teams and representing FORMITS in external collaborations.',
    logo: '/images/orgs/formits.jpg',
    experiences: [
      {
        role: 'Chairman',
        period: 'March 2025 – February 2026',
        description: 'Coordinating organizational strategy and work programs.',
        achievements: [
          'Coordinated organizational strategy and work programs',
          'Led cross-functional teams and internal divisions',
          'Represented FORMITS in external collaborations',
        ],
      },
      {
        role: 'Project Officer – FORMITS x ILITS 2024',
        period: 'November 2023 – February 2024',
        description: 'Developed the grand design and program structure.',
        achievements: [
          'Developed the grand design and program structure',
          'Formed and coordinated cross-functional divisions',
          'Managed internal and external committee coordination',
        ],
      },
      {
        role: 'Staff – Data Management Division',
        period: 'April 2023 – February 2024',
        description: 'Maintained organizational databases.',
        achievements: [
          'Maintained organizational databases',
          'Recapped incoming data and archived historical records',
        ],
      },
      {
        role: 'Staff – Facilitator Division (FORMITS x ILITS 2023)',
        period: 'November 2022 – February 2023',
        description: 'Coordinated inter-division budgeting (RAB).',
        achievements: [
          'Coordinated inter-division budgeting (RAB)',
          'Supported logistics, visitation needs, and event security',
        ],
      },
    ],
  },
  {
    id: 'ise-2024',
    organizationName: 'Information System Expo (ISE!)',
    isPrimary: false,
    currentRole: 'Director – RISE! Business Case Competition',
    currentPeriod: 'May – November 2024',
    description: 'Leading end-to-end execution of a real-case business competition, coordinating staff, partners, and executive board reporting.',
    logo: '/images/orgs/ise.jpg',
    experiences: [
      {
        role: 'Director – RISE! Business Case Competition',
        period: 'May – November 2024',
        description: 'Leading end-to-end execution of a real-case business competition.',
        achievements: [
          'Led end-to-end execution of a real-case business competition',
          'Coordinated staff, partners, and executive board reporting',
          'Oversaw participant management and competition delivery',
        ],
      },
      {
        role: 'Staff – RISE! Business Case Competition',
        period: 'April 2023 – February 2024',
        description: 'Developed competition themes and real business case studies.',
        achievements: [
          'Developed competition themes and real business case studies',
          'Prepared guidebooks and assessment rubrics',
        ],
      },
    ],
  },
  {
    id: 'gerigi-its-2024',
    organizationName: 'GERIGI ITS 2024',
    isPrimary: false,
    currentRole: 'Expert Staff – Data Center Division',
    currentPeriod: 'June – September 2024',
    description: 'Grouped new students using Python-based rules and developed student assignment forms.',
    logo: '/images/orgs/gerigi.jpg',
    experiences: [
      {
        role: 'Expert Staff – Data Center Division',
        period: 'June – September 2024',
        description: 'Grouped new students using Python-based rules.',
        achievements: [
          'Grouped new students using Python-based rules',
          'Developed student assignment forms',
          'Generated reporting outputs for associations and presenters',
        ],
      },
    ],
  },
  {
    id: 'hmsi-its',
    organizationName: 'Himpunan Mahasiswa Sistem Informasi (HMSI) ITS',
    isPrimary: false,
    currentRole: 'Staff – Student Welfare Department',
    currentPeriod: 'March 2024 – February 2025',
    description: 'Supporting student welfare activities, academic coordination, and community service initiatives.',
    logo: '/images/orgs/hmsi.jpg',
    experiences: [
      {
        role: 'Staff – Student Welfare Department',
        period: 'March 2024 – February 2025',
        description: 'Created student health awareness content.',
        achievements: [
          'Created student health awareness content',
          'Assisted academic schedule planning',
          'Coordinated with academic administration',
        ],
      },
      {
        role: 'Intern Staff – Social Development Department',
        period: 'July – October 2023',
        description: 'Assisted departmental operational activities.',
        achievements: [
          'Assisted departmental operational activities',
          'Participated in community service programs',
          'Supported public service collaborations',
        ],
      },
    ],
  },
  {
    id: 'gdsc-its',
    organizationName: 'Google Developer Student Clubs (GDSC) ITS',
    isPrimary: false,
    currentRole: 'Event Management Staff',
    currentPeriod: 'September 2023 – July 2024',
    description: 'Conceptualizing and preparing webinar event plans, developing activity proposals and documentation.',
    logo: '/images/orgs/gdsc.jpg',
    experiences: [
      {
        role: 'Event Management Staff',
        period: 'September 2023 – July 2024',
        description: 'Conceptualized and prepared webinar event plans.',
        achievements: [
          'Conceptualized and prepared webinar event plans',
          'Developed activity proposals and documentation',
          'Served as Master of Ceremonies during events',
        ],
      },
    ],
  },
  {
    id: 'menfest',
    organizationName: 'Mental Health Festival (Menfest) 1.0',
    isPrimary: false,
    currentRole: 'Staff – Data Center Division',
    currentPeriod: 'November 2022 – March 2023',
    description: 'Developed databases for organizers and participants, created attendance and feedback systems.',
    logo: '/images/orgs/menfest.jpg',
    experiences: [
      {
        role: 'Staff – Data Center Division',
        period: 'November 2022 – March 2023',
        description: 'Developed databases for organizers and participants.',
        achievements: [
          'Developed databases for organizers and participants',
          'Created attendance and feedback systems',
          'Supported participant registration during event execution',
        ],
      },
    ],
  },
];

// Development Activities
export const developmentActivities: DevelopmentActivity[] = [
  {
    id: 'lkmm-its',
    title: 'Latihan Keterampilan Manajemen Mahasiswa (LKMM)',
    institution: 'Institut Teknologi Sepuluh Nopember (ITS)',
    description: 'Completed a structured leadership development program covering personal, event, and organizational management stages. The program emphasized self-awareness and communication skills, event planning and execution, facilitation and public speaking, as well as organizational governance and strategic analysis. Through progressive LKMM levels (Pra-TD, TD, PP, TM), developed competencies in managing individuals, teams, and organizations within academic and student activity environments.',
    stages: [
      {
        name: 'LKMM Pra-TD — Personal Management',
        focus: 'Self-awareness and personal development',
        description: 'Focused on self-awareness and personal development, including identification of individual strengths and behavioral tendencies through personality frameworks (MBTI, Johari Window, Big Five). Trained in effective communication, active listening, self-reflection, and personal goal management as a foundation for leadership development.',
      },
      {
        name: 'LKMM TD — Event Management',
        focus: 'Planning and managing events',
        description: 'Developed competencies in planning and managing events, including idea formulation, communication flow design, task delegation, timeline management, proposal development, accountability reporting, teamwork motivation, and conflict management in event-based environments.',
      },
      {
        name: 'LKMM PP — Facilitator & Trainer Development',
        focus: 'Facilitation and public speaking',
        description: 'Completed facilitator training to support LKMM programs as a guide and mentor. Trained in audience management, participant behavior analysis, and facilitation techniques, including handling diverse participant types and delivering materials through effective public speaking and engagement strategies.',
      },
      {
        name: 'LKMM TM — Organizational Management',
        focus: 'Organizational leadership and strategic management',
        description: 'Focused on organizational leadership and strategic management, covering organizational governance, environmental scanning, IFAS–EFAS analysis, organizational positioning, and strategy formulation to support sustainable organizational development.',
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
