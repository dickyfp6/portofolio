# 🚀 Quick Start Guide

## Initial Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   - Navigate to http://localhost:3000
   - You should see the portfolio homepage

## Customization Steps

### Step 1: Update Your Profile

Edit `data/profile.ts`:

- Change name, title, bio
- Update contact information
- Add your social links
- Change profile image path

### Step 2: Add Your Projects

Edit `data/projects.ts`:

- Remove sample projects
- Add your projects following the structure
- Set `featured: true` for projects to show on homepage
- Categories are auto-generated - use any category names

### Step 3: Add Your Experience

Edit `data/experiences.ts`:

- Remove sample organizations
- Add your work history
- Set `isPrimary: true` for your main current role
- Add historical roles to each organization

### Step 4: Add Images (Optional)

Place images in `public/images/`:

```
public/
  images/
    profile.jpg
    projects/
      project1.jpg
      project2.jpg
    orgs/
      company1.jpg
```

### Step 5: Customize Theme (Optional)

Edit `tailwind.config.ts` to change colors.

## Testing PDF Generation

1. Click "Download Portfolio" on homepage
2. Select projects you want to include
3. Click "Download PDF"
4. Check the generated PDF

## Deploy to Netlify

### Option 1: GitHub + Netlify Dashboard

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are auto-detected
6. Click "Deploy site"

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Common Tasks

### Add a new project
1. Open `data/projects.ts`
2. Copy an existing project object
3. Update all fields with your project info
4. Save - it will appear automatically

### Change featured projects
1. Open `data/projects.ts`
2. Set `featured: true` or `false` on any project

### Add a new organization
1. Open `data/experiences.ts`
2. Copy an existing organization object
3. Update with your information
4. Set `isPrimary: true` for main role

### Change theme colors
1. Open `tailwind.config.ts`
2. Update color values in `theme.extend.colors`

## Troubleshooting

**Issue**: Page is blank
- Solution: Check browser console for errors
- Ensure all data files have valid TypeScript syntax

**Issue**: PDF not generating
- Solution: Check that you have projects selected
- Try refreshing the page

**Issue**: Images not loading
- Solution: Verify image paths in `public/images/`
- Check file names match data files

## Need Help?

- Check the full README.md for detailed documentation
- Ensure all TypeScript types match the data structure
- Test locally before deploying

---

Happy building! 🎉
