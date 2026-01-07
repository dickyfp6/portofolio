# Image Assets Guide

This folder contains all static images for the portfolio.

## Directory Structure

```
public/images/
├── profile.jpg           # Your profile photo
├── projects/            # Project thumbnails
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
└── orgs/               # Organization logos
    ├── company1.jpg
    ├── company2.jpg
    └── ...
```

## Image Requirements

### Profile Image
- **Size**: 400x400px minimum
- **Format**: JPG or PNG
- **Aspect Ratio**: 1:1 (square)
- **File**: `profile.jpg`

### Project Thumbnails
- **Size**: 1200x675px (16:9) recommended
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 or 4:3
- **Location**: `projects/`
- **Naming**: Match project ID (e.g., `distributed-cache-system.jpg`)

### Organization Logos
- **Size**: 200x200px minimum
- **Format**: PNG (with transparency) or JPG
- **Aspect Ratio**: Any (will be contained)
- **Location**: `orgs/`
- **Naming**: Match org ID (e.g., `techcorp.jpg`)

## Adding Images

1. **Prepare your image**:
   - Resize to recommended dimensions
   - Optimize for web (compress)
   - Use meaningful filenames

2. **Place in correct folder**:
   - Profile → `public/images/profile.jpg`
   - Projects → `public/images/projects/your-project-id.jpg`
   - Orgs → `public/images/orgs/org-id.jpg`

3. **Reference in data files**:
   ```typescript
   // In profile.ts
   profileImage: '/images/profile.jpg'
   
   // In projects.ts
   thumbnail: '/images/projects/my-project.jpg'
   
   // In experiences.ts
   logo: '/images/orgs/my-company.jpg'
   ```

## Image Optimization Tips

- Use WebP format for better compression
- Compress images before uploading (TinyPNG, Squoosh)
- Keep file sizes under 500KB
- Use consistent aspect ratios for projects

## Placeholder Images

If you don't have images yet:
- Use placeholder services: `https://via.placeholder.com/1200x675`
- Or leave the field pointing to a default image
- The site will still work without images

## Tools for Image Preparation

- **Resize**: GIMP, Photoshop, or online tools
- **Compress**: TinyPNG, Squoosh.app
- **Format Convert**: CloudConvert, GIMP

---

Remember: All image paths in data files should start with `/images/`
