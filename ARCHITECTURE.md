# 📁 Project Architecture

## Directory Structure

```
portfolio/
│
├── 📂 app/                          # Next.js App Router pages
│   ├── layout.tsx                  # Root layout with theme provider
│   ├── page.tsx                    # Homepage (landing page)
│   ├── globals.css                 # Global styles and Tailwind
│   │
│   ├── 📂 projects/
│   │   ├── page.tsx               # All projects page (filterable)
│   │   └── 📂 [id]/
│   │       └── page.tsx           # Dynamic project detail page
│   │
│   ├── 📂 experience/
│   │   └── page.tsx               # Professional experience page
│   │
│   └── 📂 about/
│       └── page.tsx               # About/contact page
│
├── 📂 components/                   # Reusable React components
│   ├── ThemeProvider.tsx           # next-themes provider wrapper
│   ├── ThemeToggle.tsx             # Dark/light mode toggle button
│   ├── Navigation.tsx              # Main navigation bar
│   ├── ProjectCard.tsx             # Individual project card
│   ├── ProjectGrid.tsx             # Grid layout for projects
│   ├── ProjectFilter.tsx           # Category filter component
│   ├── ExperienceCard.tsx          # Organization/role card
│   ├── PortfolioDownloadModal.tsx  # PDF selection modal
│   ├── PortfolioModalManager.tsx   # Global modal state manager
│   │
│   └── 📂 pdf/
│       └── PortfolioPDF.tsx        # PDF document generator
│
├── 📂 data/                         # Single Source of Truth (SSOT)
│   ├── types.ts                    # TypeScript interfaces
│   ├── profile.ts                  # Personal info, contact, bio
│   ├── projects.ts                 # All projects + helper functions
│   └── experiences.ts              # Organizations + roles
│
├── 📂 public/                       # Static assets
│   └── 📂 images/                   # Images for projects, profile, etc.
│       ├── profile.jpg
│       ├── 📂 projects/
│       └── 📂 orgs/
│
├── 📄 package.json                  # Dependencies and scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 netlify.toml                  # Netlify deployment config
├── 📄 README.md                     # Full documentation
└── 📄 SETUP.md                      # Quick start guide
```

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SINGLE SOURCE OF TRUTH                    │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ profile.ts   │  │ projects.ts  │  │experiences.ts│     │
│  │              │  │              │  │              │     │
│  │ • Name       │  │ • Projects   │  │ • Orgs       │     │
│  │ • Title      │  │ • Categories │  │ • Roles      │     │
│  │ • Bio        │  │ • Tech Stack │  │ • Timeline   │     │
│  │ • Contact    │  │ • Details    │  │ • History    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
└──────────────────────┬───────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
┌───────────────┐            ┌────────────────┐
│   WEBSITE UI   │            │   PDF EXPORT   │
│                │            │                │
│ • Homepage     │            │ • Cover Page   │
│ • Projects     │            │ • Identity     │
│ • Experience   │            │ • Projects     │
│ • About        │            │                │
└───────────────┘            └────────────────┘
```

## Component Hierarchy

```
RootLayout
├── ThemeProvider (context)
│   ├── Navigation
│   │   ├── Logo Link
│   │   ├── Nav Links
│   │   └── ThemeToggle
│   │
│   ├── Page Content (children)
│   │   │
│   │   ├── Homepage
│   │   │   ├── Hero Section
│   │   │   ├── Current Role Card
│   │   │   ├── ProjectGrid (featured)
│   │   │   └── CTA Section
│   │   │
│   │   ├── Projects Page
│   │   │   ├── Search Input
│   │   │   ├── ProjectFilter
│   │   │   └── ProjectGrid (filtered)
│   │   │
│   │   ├── Project Detail
│   │   │   ├── Header
│   │   │   ├── Content Sections
│   │   │   └── Related ProjectGrid
│   │   │
│   │   ├── Experience Page
│   │   │   └── ExperienceCard (multiple)
│   │   │       ├── Org Header
│   │   │       └── Role History (expandable)
│   │   │
│   │   └── About Page
│   │       ├── Bio Section
│   │       └── Contact Card
│   │
│   └── PortfolioModalManager
│       └── PortfolioDownloadModal
│           ├── Project Selection List
│           └── PDF Generator
```

## Key Design Patterns

### 1. **Data-Driven Architecture**
- All content in `data/` folder
- TypeScript types ensure data consistency
- Helper functions for data queries
- Zero content duplication

### 2. **Component Composition**
- Small, focused components
- Props-based configuration
- Reusable across pages
- Easy to test and maintain

### 3. **Dynamic Features**
- Categories auto-generated from projects
- Related projects calculated from tags
- Featured items filtered at runtime
- No hardcoded content in UI

### 4. **Theme System**
- System-aware default theme
- Manual toggle available
- Consistent across all pages
- Extends to PDF export

### 5. **Type Safety**
- All data strongly typed
- IDE autocomplete support
- Compile-time error checking
- Prevents runtime errors

## File Naming Conventions

- **Pages**: `page.tsx` (Next.js App Router)
- **Components**: `PascalCase.tsx`
- **Data files**: `lowercase.ts`
- **Types**: Defined in `types.ts`, exported
- **Utilities**: Function names in `camelCase`

## Styling Strategy

- **Tailwind CSS**: Utility-first styling
- **Dark/Light modes**: Class-based (`dark:`)
- **Responsive**: Mobile-first approach
- **Custom colors**: Defined in `tailwind.config.ts`
- **Global styles**: Minimal, in `globals.css`

## State Management

- **Theme**: `next-themes` context
- **Modal**: Custom event system
- **URL state**: Next.js routing
- **No global state library**: Keep it simple

## Performance Optimizations

- **Static Generation**: Build-time page generation
- **Dynamic Imports**: PDF components lazy loaded
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with App Router
- **Tree Shaking**: Unused code eliminated

## Deployment Strategy

1. **Build**: `npm run build`
2. **Static Export**: Generates optimized static files
3. **CDN**: Served from Netlify edge network
4. **Zero Config**: Works out of the box

---

This architecture ensures:
- ✅ Easy to maintain
- ✅ Easy to customize
- ✅ Scalable structure
- ✅ Type-safe development
- ✅ Fast performance
- ✅ Production-ready
