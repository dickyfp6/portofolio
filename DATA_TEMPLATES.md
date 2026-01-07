# 📝 Data Templates & Examples

This guide provides templates and examples for adding content to your portfolio.

## Profile Template

Copy and customize this in `data/profile.ts`:

```typescript
export const profile: Profile = {
  fullName: 'Your Full Name',
  title: 'Your Professional Title',
  shortBio: 'A compelling 2-3 sentence bio highlighting your expertise, passion, and what makes you unique as a professional.',
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567', // Optional
    location: 'City, State/Country',
  },
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/yourusername',
    },
  ],
  profileImage: '/images/profile.jpg',
};
```

## Project Template

Copy and customize this in `data/projects.ts`:

```typescript
{
  id: 'unique-project-identifier', // lowercase-with-dashes
  title: 'Your Project Title',
  description: 'A concise 1-2 sentence description that captures what the project does and its main value proposition.',
  category: 'Project Category', // e.g., 'Backend Infrastructure', 'Frontend Architecture'
  techStack: ['Technology1', 'Technology2', 'Technology3'], // Main technologies used
  period: '2024', // or '2023 - 2024' for ongoing projects
  featured: false, // Set true for homepage display
  relevanceTags: ['tag1', 'tag2', 'tag3'], // Used for related projects
  detailedContent: {
    overview: 'A detailed paragraph explaining the project context, problem it solved, and overall architecture or approach taken.',
    approach: [
      'First major step or technique used',
      'Second key decision or implementation detail',
      'Third important aspect of the solution',
      'Additional approaches as needed',
    ],
    output: [
      'Quantifiable result or achievement',
      'Performance improvement or metric',
      'User impact or adoption numbers',
      'Any other measurable outcomes',
    ],
    challenges: [ // Optional
      'Technical challenge faced and how you solved it',
      'Another significant obstacle overcome',
    ],
  },
  thumbnail: '/images/projects/project-id.jpg',
  links: { // Optional - add relevant links
    github: 'https://github.com/yourusername/project',
    live: 'https://project-demo.com',
    demo: 'https://demo.project.com',
  },
}
```

## Experience Template

Copy and customize this in `data/experiences.ts`:

```typescript
{
  id: 'organization-id',
  organizationName: 'Company or Organization Name',
  isPrimary: true, // Set true for your main current role
  currentRole: 'Your Current Position Title',
  currentPeriod: '2023 - Present',
  description: 'Brief description of the organization and your overall responsibilities and impact.',
  logo: '/images/orgs/company-id.jpg', // Optional
  website: 'https://company.com', // Optional
  experiences: [
    {
      role: 'Current Position Title',
      period: '2023 - Present',
      description: 'What you do in this role and main responsibilities.',
      achievements: [
        'Specific achievement with quantifiable impact',
        'Another significant accomplishment',
        'Leadership or technical contribution',
        'Process improvement or innovation',
      ],
    },
    {
      role: 'Previous Position at Same Company',
      period: '2021 - 2023',
      description: 'What you did in this previous role.',
      achievements: [
        'Achievement from this period',
        'Another accomplishment',
      ],
    },
  ],
}
```

## Writing Tips

### For Project Descriptions

**Good:**
> "High-performance distributed caching layer with Redis and consistent hashing, reducing database load by 85% and improving API response times."

**Why it works:**
- Specific technology mentioned
- Quantifiable results
- Clear value proposition

**Avoid:**
> "A caching system I built that makes things faster."

**Why to avoid:**
- Too vague
- No metrics
- Lacks technical details

### For Project Overviews

**Good:**
> "Designed and implemented a distributed caching system to handle millions of requests per day with sub-millisecond latency. The system uses consistent hashing for even data distribution and automatic failover."

**Why it works:**
- Sets context and scale
- Mentions key technical decisions
- Shows architectural thinking

### For Achievements

**Good:**
> "Reduced API latency by 70% through caching optimization and query restructuring, improving user experience for 500K+ daily active users."

**Why it works:**
- Specific percentage improvement
- Explains how it was achieved
- Shows real-world impact

**Avoid:**
> "Made the API faster."

**Why to avoid:**
- No specifics
- No measurement
- No context

## Category Suggestions

Choose categories that reflect your work. Examples:

- **Backend Infrastructure**
- **Frontend Architecture**
- **Data Engineering**
- **DevOps**
- **API Architecture**
- **Machine Learning**
- **Mobile Development**
- **Full Stack Development**
- **System Design**
- **Cloud Architecture**

Categories are auto-generated from your projects, so use whatever makes sense for your work.

## Tech Stack Examples

Be specific with versions when relevant:

```typescript
techStack: [
  'Go',
  'Redis',
  'Docker',
  'Kubernetes',
  'Prometheus',
  'Grafana',
]
```

Or for frontend:

```typescript
techStack: [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Vercel',
]
```

## Relevance Tags

Use tags to connect related projects:

```typescript
relevanceTags: ['distributed-systems', 'performance', 'infrastructure']
```

These help the system suggest related projects. Use common themes across projects:
- Technical approaches: 'microservices', 'real-time', 'distributed-systems'
- Focus areas: 'performance', 'scalability', 'security'
- Domains: 'fintech', 'healthcare', 'e-commerce'

## Period Formatting

Use these formats:

- Single year: `'2024'`
- Range: `'2023 - 2024'`
- Ongoing: `'2023 - Present'`
- Month specific: `'Jan 2023 - Present'`

## Data Validation Checklist

Before deploying, verify:

- [ ] All IDs are unique and lowercase-with-dashes
- [ ] All required fields are filled
- [ ] Image paths are correct (starting with `/images/`)
- [ ] URLs are valid and working
- [ ] Email addresses are correct
- [ ] No TypeScript errors in data files
- [ ] Featured projects are actually your best work
- [ ] All dates are in consistent format
- [ ] Tech stack names are consistent across projects
- [ ] Descriptions are proofread

## Example: Complete Project Entry

Here's a complete, production-ready project entry:

```typescript
{
  id: 'realtime-analytics-dashboard',
  title: 'Real-time Analytics Dashboard',
  description: 'Enterprise analytics platform processing 5M+ events daily with sub-second latency, providing real-time insights for 200+ enterprise clients.',
  category: 'Data Engineering',
  techStack: ['Python', 'Apache Kafka', 'Redis', 'PostgreSQL', 'React', 'WebSockets'],
  period: '2023 - 2024',
  featured: true,
  relevanceTags: ['real-time', 'data-engineering', 'scalability'],
  detailedContent: {
    overview: 'Built a comprehensive real-time analytics platform capable of ingesting, processing, and visualizing millions of events per day. The system provides instant insights through WebSocket-based dashboards and supports complex aggregations with minimal latency.',
    approach: [
      'Designed event-driven architecture using Apache Kafka for reliable message streaming',
      'Implemented stream processing pipeline with Python asyncio for parallel event handling',
      'Optimized time-series queries using PostgreSQL with TimescaleDB extension',
      'Built WebSocket-based real-time dashboard with automatic reconnection and state sync',
    ],
    output: [
      'Processing 5M+ events daily with 99.9% uptime',
      'Average end-to-end latency of 800ms for complex aggregations',
      'Reduced infrastructure costs by 40% through efficient resource utilization',
      'Scaled to support 200+ enterprise clients without architecture changes',
    ],
  },
  thumbnail: '/images/projects/realtime-analytics-dashboard.jpg',
  links: {
    github: 'https://github.com/yourusername/realtime-analytics',
    demo: 'https://demo.analytics.example.com',
  },
}
```

---

**Pro Tip**: Start with your best 2-3 projects as featured, then add more over time. Quality over quantity!
