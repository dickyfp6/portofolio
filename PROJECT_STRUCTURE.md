# 📂 Complete Project Structure

```
portfolio/
│
├── 📄 package.json                    # Dependencies and scripts
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 tailwind.config.ts              # Tailwind CSS settings
├── 📄 postcss.config.js               # PostCSS configuration
├── 📄 next.config.js                  # Next.js configuration
├── 📄 netlify.toml                    # Netlify deployment config
├── 📄 .gitignore                      # Git ignore rules
├── 📄 .eslintrc.json                  # ESLint configuration
│
├── 📂 app/                            # Next.js App Router
│   ├── 📄 layout.tsx                 # Root layout with providers
│   ├── 📄 page.tsx                   # Homepage (/)
│   ├── 📄 globals.css                # Global styles
│   │
│   ├── 📂 projects/                   # Projects section
│   │   ├── 📄 page.tsx               # All projects (/projects)
│   │   └── 📂 [id]/                  # Dynamic routes
│   │       └── 📄 page.tsx           # Project detail (/projects/[id])
│   │
│   ├── 📂 experience/                 # Experience section
│   │   └── 📄 page.tsx               # Experience page (/experience)
│   │
│   └── 📂 about/                      # About section
│       └── 📄 page.tsx               # About page (/about)
│
├── 📂 components/                     # React components
│   ├── 📄 ThemeProvider.tsx          # Theme context wrapper
│   ├── 📄 ThemeToggle.tsx            # Dark/light mode button
│   ├── 📄 Navigation.tsx             # Main navigation bar
│   ├── 📄 ProjectCard.tsx            # Single project card
│   ├── 📄 ProjectGrid.tsx            # Grid of project cards
│   ├── 📄 ProjectFilter.tsx          # Category filter UI
│   ├── 📄 ExperienceCard.tsx         # Organization/role card
│   ├── 📄 PortfolioDownloadModal.tsx # PDF selection modal
│   ├── 📄 PortfolioModalManager.tsx  # Modal state manager
│   │
│   └── 📂 pdf/                        # PDF generation
│       └── 📄 PortfolioPDF.tsx       # PDF document builder
│
├── 📂 data/                           # Single Source of Truth
│   ├── 📄 types.ts                   # TypeScript interfaces
│   ├── 📄 profile.ts                 # Personal information ⭐ EDIT THIS
│   ├── 📄 projects.ts                # Project portfolio ⭐ EDIT THIS
│   └── 📄 experiences.ts             # Work history ⭐ EDIT THIS
│
├── 📂 public/                         # Static assets
│   └── 📂 images/                     # Images
│       ├── 📄 profile.jpg            # Your photo ⭐ ADD THIS
│       ├── 📂 projects/               # Project images
│       │   ├── 📄 .gitkeep           # Placeholder
│       │   └── 📄 project-*.jpg      # ⭐ ADD YOUR IMAGES
│       └── 📂 orgs/                   # Company logos
│           ├── 📄 .gitkeep           # Placeholder
│           └── 📄 company-*.jpg      # ⭐ ADD YOUR LOGOS
│
└── 📂 docs/                           # Documentation (these files)
    ├── 📄 README.md                  # Complete documentation
    ├── 📄 GET_STARTED.md             # Start here! ⭐
    ├── 📄 SETUP.md                   # Installation guide
    ├── 📄 CHECKLIST.md               # Task checklist
    ├── 📄 DATA_TEMPLATES.md          # Content templates
    ├── 📄 ARCHITECTURE.md            # System architecture
    ├── 📄 DEPLOYMENT.md              # Deploy instructions
    ├── 📄 DOCS_INDEX.md              # This file
    └── 📄 PROJECT_STRUCTURE.md       # File tree

```

---

## 📊 File Count

- **Total Files**: 50+
- **Code Files**: 25
- **Data Files**: 4 ⭐ (you edit these)
- **Component Files**: 10
- **Page Files**: 6
- **Config Files**: 7
- **Documentation**: 8
- **Asset Placeholders**: 3

---

## 🎯 Files You Need to Edit

### Priority 1 (Must Edit) ⭐

```
data/profile.ts         → Your information
data/projects.ts        → Your projects  
data/experiences.ts     → Your work history
public/images/          → Your images
```

### Priority 2 (Optional Edit) 🎨

```
tailwind.config.ts      → Colors/theme
app/layout.tsx          → Fonts/meta
components/Navigation.tsx → Logo/branding
```

### Priority 3 (Rarely Edit) ⚙️

```
package.json            → Dependencies
tsconfig.json           → TypeScript config
next.config.js          → Next.js settings
```

---

## 📁 Directory Purposes

| Directory | Purpose | Edit? |
|-----------|---------|-------|
| `app/` | Next.js pages and routing | No |
| `components/` | Reusable UI components | Rarely |
| `data/` | Your portfolio content | **YES** ⭐ |
| `public/` | Static assets (images) | **YES** ⭐ |
| `docs/` | Documentation | Read only |

---

## 🔄 Data Flow

```
data/profile.ts ────┐
                    ├──→ app/page.tsx (Homepage)
data/projects.ts ───┤
                    ├──→ app/projects/page.tsx (Projects List)
data/experiences.ts─┤
                    ├──→ app/experience/page.tsx (Experience)
                    │
                    ├──→ components/* (UI Components)
                    │
                    └──→ components/pdf/PortfolioPDF.tsx (PDF)
```

**Key Point**: Change data once → Updates everywhere!

---

## 🎨 Component Tree

```
RootLayout (app/layout.tsx)
│
├─── ThemeProvider
│    │
│    ├─── Navigation
│    │    ├── Logo
│    │    ├── Nav Links
│    │    └── ThemeToggle
│    │
│    ├─── Main Content (pages)
│    │    │
│    │    ├─── Homepage (app/page.tsx)
│    │    │    ├── Hero Section
│    │    │    ├── Current Role
│    │    │    ├── ProjectGrid (featured)
│    │    │    └── CTA
│    │    │
│    │    ├─── Projects (app/projects/page.tsx)
│    │    │    ├── Search
│    │    │    ├── ProjectFilter
│    │    │    └── ProjectGrid (all)
│    │    │
│    │    ├─── Project Detail (app/projects/[id]/page.tsx)
│    │    │    ├── Header
│    │    │    ├── Content
│    │    │    └── Related Projects
│    │    │
│    │    ├─── Experience (app/experience/page.tsx)
│    │    │    └── ExperienceCard (multiple)
│    │    │
│    │    └─── About (app/about/page.tsx)
│    │         ├── Bio
│    │         └── Contact
│    │
│    └─── PortfolioModalManager
│         └── PortfolioDownloadModal
│              ├── Project List
│              └── PDF Generator
```

---

## 📦 Build Output

When you run `npm run build`:

```
.next/                      # Build output (ignored by Git)
├── static/                # Static assets
├── server/                # Server code
└── ...                    # Other build files

Generated automatically, don't edit!
```

---

## 🗂️ What Goes Where

### Static Content (doesn't change)
```
public/
└── images/
    └── your-images.jpg
```

### Dynamic Content (from database/API in real apps)
```
data/
├── profile.ts      # In real app: API endpoint
├── projects.ts     # In real app: Database
└── experiences.ts  # In real app: CMS
```

### UI Layer (presentation)
```
components/         # Reusable pieces
app/               # Page assembly
```

---

## 🎯 Quick Navigation

**Need to add a project?**
→ `data/projects.ts`

**Need to update your info?**
→ `data/profile.ts`

**Need to add work experience?**
→ `data/experiences.ts`

**Need to add images?**
→ `public/images/`

**Need to change colors?**
→ `tailwind.config.ts`

**Need to understand how it works?**
→ `docs/ARCHITECTURE.md`

---

## 📝 File Naming Conventions

- **Pages**: `page.tsx` (Next.js requirement)
- **Components**: `PascalCase.tsx` (e.g., `ProjectCard.tsx`)
- **Data files**: `lowercase.ts` (e.g., `profile.ts`)
- **Types**: Defined in `types.ts`
- **Images**: `kebab-case.jpg` (e.g., `my-project.jpg`)

---

## 🔍 Finding Files

**By functionality:**
- Homepage → `app/page.tsx`
- Projects list → `app/projects/page.tsx`
- Single project → `app/projects/[id]/page.tsx`
- Your data → `data/*.ts`

**By type:**
- Pages → `app/**/*.tsx`
- Components → `components/**/*.tsx`
- Data → `data/*.ts`
- Styles → `*.css` + `tailwind.config.ts`
- Config → `*.config.*` + `*.json`

---

## 💡 Pro Tips

1. **Keep data/ clean**: Only edit data files, not structure
2. **Images in public/**: All static assets go here
3. **Components are generic**: They receive data via props
4. **Pages are specific**: They load data and compose components
5. **One source of truth**: Data files are the only source

---

## 🎓 Learning the Structure

**Day 1**: Focus on `data/` folder
**Day 2**: Understand `components/`
**Day 3**: Explore `app/` pages
**Day 4**: Customize styling
**Day 5**: Deploy!

---

## ✅ Checklist

- [ ] Understand `data/` folder (most important!)
- [ ] Know where images go (`public/images/`)
- [ ] Locate page files (`app/`)
- [ ] Find components (`components/`)
- [ ] Identify config files (root `*.config.*`)

---

**Remember**: 
- 📁 `data/` = What you edit most
- 📁 `public/images/` = Your photos
- 📁 `components/` = Usually don't edit
- 📁 `app/` = Usually don't edit

Focus on `data/` and you're 90% done! 🎯
