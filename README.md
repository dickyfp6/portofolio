# Professional Portfolio Website

A modern, data-driven portfolio website with dynamic PDF export capabilities. Built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Single Source of Truth**: All content managed through structured data files
- **Dynamic PDF Generation**: Create custom portfolio PDFs with selected projects
- **Dark/Light Mode**: System-aware theme with manual toggle
- **Fully Responsive**: Optimized for all screen sizes
- **Type-Safe**: Built with TypeScript for reliability
- **Fast & Modern**: Next.js App Router with optimal performance

## 🏗️ Architecture

### Data-Driven Design

All portfolio content is centralized in structured data files:

- `data/profile.ts` - Personal information, contact details, bio
- `data/projects.ts` - Project portfolio with rich metadata
- `data/experiences.ts` - Professional experience and organizations

This ensures that:
- Website and PDF always show consistent data
- Adding/editing content requires changing only one file
- No content duplication across the codebase

### Component Structure

```
components/
├── ThemeProvider.tsx       # Theme context provider
├── ThemeToggle.tsx         # Dark/light mode toggle
├── Navigation.tsx          # Main navigation bar
├── ProjectCard.tsx         # Reusable project card
├── ProjectGrid.tsx         # Grid layout for projects
├── ProjectFilter.tsx       # Category filter component
├── ExperienceCard.tsx      # Organization/role card
├── PortfolioDownloadModal.tsx  # PDF selection modal
├── PortfolioModalManager.tsx   # Modal state manager
└── pdf/
    └── PortfolioPDF.tsx    # PDF document generator
```

### Pages

- `/` - Landing page with featured projects and current role
- `/projects` - Filterable, searchable project portfolio
- `/projects/[id]` - Detailed project page with related projects
- `/experience` - Professional history with expandable cards
- `/about` - Personal information and contact details

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Run development server**:

```bash
npm run dev
```

3. **Open your browser**:

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Adding Your Information

#### 1. Update Profile (`data/profile.ts`)

```typescript
export const profile: Profile = {
  fullName: 'Your Name',
  title: 'Your Professional Title',
  shortBio: 'Your bio...',
  contact: {
    email: 'your.email@example.com',
    location: 'Your Location',
  },
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/yourusername' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  ],
  profileImage: '/images/profile.jpg',
};
```

#### 2. Add Projects (`data/projects.ts`)

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  description: 'Short description',
  category: 'Category Name',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  period: '2024',
  featured: true, // Show on homepage
  relevanceTags: ['tag1', 'tag2'],
  detailedContent: {
    overview: 'Detailed overview...',
    approach: ['Step 1', 'Step 2'],
    output: ['Result 1', 'Result 2'],
  },
  thumbnail: '/images/projects/project.jpg',
}
```

#### 3. Add Experience (`data/experiences.ts`)

```typescript
{
  id: 'org-id',
  organizationName: 'Company Name',
  isPrimary: true, // Show on homepage
  currentRole: 'Your Role',
  currentPeriod: '2023 - Present',
  description: 'What you do...',
  experiences: [
    {
      role: 'Role Name',
      period: '2023 - Present',
      description: 'Role description',
      achievements: ['Achievement 1', 'Achievement 2'],
    },
  ],
}
```

### Dynamic Features

- **Categories**: Auto-generated from projects - just add new categories to any project
- **Featured Projects**: Set `featured: true` to show on homepage
- **Primary Organization**: Set `isPrimary: true` for homepage display
- **Related Projects**: Automatically calculated based on `relevanceTags`

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to:
- Vercel
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    light: '#0070f3',
    dark: '#3b82f6',
  },
}
```

### Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';
```

### PDF Styling

Edit `components/pdf/PortfolioPDF.tsx` - modify the `styles` object to customize PDF appearance.

## 📄 PDF Generation

The portfolio includes a sophisticated PDF export system:

1. User clicks "Download Portfolio"
2. Modal opens with project selection
3. Featured projects are pre-selected
4. User can select/deselect any projects
5. PDF is generated with:
   - Cover page
   - Identity/About page
   - One page per selected project
6. PDF respects current theme (dark/light)

All PDF content comes from the same data files as the website, ensuring consistency.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Icons**: lucide-react
- **PDF**: @react-pdf/renderer

## 📋 Project Structure

```
portfolio/
├── app/                    # Next.js pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects pages
│   ├── experience/        # Experience page
│   └── about/             # About page
├── components/            # React components
├── data/                  # Data files (SSOT)
│   ├── types.ts          # TypeScript types
│   ├── profile.ts        # Your information
│   ├── projects.ts       # Your projects
│   └── experiences.ts    # Your experience
├── public/               # Static assets
└── styles/              # Global styles
```

## 🤝 Best Practices

This portfolio follows:

- **Clean Architecture**: Clear separation of data, logic, and UI
- **DRY Principle**: No content duplication
- **Type Safety**: Comprehensive TypeScript types
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting
- **SEO**: Proper meta tags and structure

## 📝 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

For questions or issues, please open an issue on the GitHub repository.

---

Built with ❤️ using Next.js and TypeScript
