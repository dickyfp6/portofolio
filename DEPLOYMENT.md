# 🚀 Deployment Guide

Complete guide to deploying your portfolio to Netlify and other platforms.

## Option 1: Netlify (Recommended)

### Why Netlify?
- Free tier available
- Automatic deployments from Git
- Built-in CI/CD
- Global CDN
- HTTPS by default
- Custom domains
- Excellent Next.js support

### Step-by-Step Deployment

#### 1. Prepare Your Repository

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Connect to Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign up or log in
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** (or GitLab/Bitbucket)
5. Authorize Netlify to access your repositories
6. Select your portfolio repository

#### 3. Configure Build Settings

Netlify should auto-detect Next.js. Verify these settings:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x or higher

If not auto-detected, the `netlify.toml` file in your project will configure these.

#### 4. Deploy

Click **"Deploy site"**

Netlify will:
1. Clone your repository
2. Install dependencies
3. Build your site
4. Deploy to CDN
5. Assign a URL (e.g., `random-name-123.netlify.app`)

#### 5. Custom Domain (Optional)

1. Click **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions

### Continuous Deployment

Every time you push to `main` branch:
1. Netlify detects the change
2. Automatically rebuilds your site
3. Deploys the new version

To deploy:
```bash
git add .
git commit -m "Update projects"
git push
```

### Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy

---

## Option 2: Vercel

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

Or use the Vercel dashboard:
1. Import from GitHub
2. Configure (auto-detected)
3. Deploy

---

## Option 3: Manual/Traditional Hosting

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

The site will run on `http://localhost:3000`

### Deploy to VPS/Server

1. **Install Node.js 18+** on your server
2. **Upload your code** (via Git, FTP, etc.)
3. **Install dependencies**: `npm install`
4. **Build**: `npm run build`
5. **Run with PM2** (process manager):

```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Setup auto-restart on server reboot
pm2 startup
```

6. **Configure Nginx** as reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Pre-Deployment Checklist

- [ ] Test production build locally: `npm run build && npm start`
- [ ] All images are optimized and under 500KB
- [ ] All data files are complete and error-free
- [ ] No console errors in browser
- [ ] Tested on multiple devices
- [ ] PDF generation works in production
- [ ] Social links are correct
- [ ] Contact email is correct
- [ ] Profile information is up to date

---

## Post-Deployment Checklist

- [ ] Site loads correctly at deployed URL
- [ ] All pages accessible
- [ ] All navigation works
- [ ] All images load
- [ ] Theme toggle works
- [ ] PDF download works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active (HTTPS)

---

## Troubleshooting

### Build Fails

**Issue**: "Module not found"
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

**Issue**: "Out of memory"
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Images Not Loading

**Issue**: 404 for images

Check:
- [ ] Images are in `public/images/`
- [ ] Paths start with `/images/` not `../images/`
- [ ] File names match exactly (case-sensitive)
- [ ] Image files actually exist

### PDF Not Generating

**Issue**: PDF download doesn't work

Check:
- [ ] `@react-pdf/renderer` is installed
- [ ] No console errors
- [ ] Projects are selected in modal
- [ ] Try in different browser

### Site Blank After Deploy

**Issue**: White screen

Check:
- [ ] Browser console for errors
- [ ] Build logs in Netlify for errors
- [ ] Next.js version compatibility
- [ ] Node version (should be 18+)

---

## Performance Optimization

### After Deployment

1. **Test Speed**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

2. **Optimize Images**:
   - Use WebP format
   - Compress all images
   - Lazy load below-fold images

3. **Monitor**:
   - Set up Netlify Analytics
   - Add Google Analytics (optional)
   - Monitor error logs

---

## Updating Your Live Site

### Regular Updates

```bash
# Make your changes to data files

# Test locally
npm run dev

# Build and test
npm run build
npm start

# Commit and push
git add .
git commit -m "Add new project"
git push

# Netlify auto-deploys!
```

### Rollback if Needed

In Netlify dashboard:
1. Go to **Deploys**
2. Find previous successful deploy
3. Click **"Publish deploy"**

---

## Security Best Practices

- [ ] Never commit sensitive data
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated: `npm update`
- [ ] Enable security headers (in `netlify.toml`)
- [ ] Use HTTPS (automatic on Netlify)

---

## Domain Configuration

### Custom Domain on Netlify

1. **Add Domain**:
   - Go to Domain settings
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS**:
   
   **If using Netlify DNS**:
   - Follow automated setup
   
   **If using external DNS**:
   - Add A record: `104.198.14.52`
   - Or CNAME: `your-site.netlify.app`

3. **Enable HTTPS**:
   - Netlify does this automatically
   - May take a few minutes

### WWW vs Non-WWW

Choose your preference:
- `example.com` (apex)
- `www.example.com` (subdomain)

Netlify handles redirects automatically.

---

## Monitoring & Analytics

### Netlify Analytics (Paid)

- Server-side analytics
- No cookie banners needed
- No JavaScript required

### Google Analytics (Free)

Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## Support

**Netlify Support**:
- [Netlify Docs](https://docs.netlify.com)
- [Netlify Community](https://answers.netlify.com)

**Next.js Support**:
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

---

## Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check for errors

# Deployment
git push             # Deploy to Netlify (auto)
vercel --prod        # Deploy to Vercel

# Maintenance
npm update           # Update dependencies
npm audit fix        # Fix security issues
```

---

🎉 **Congratulations!** Your portfolio is now live and accessible to the world!

Share your URL:
- On LinkedIn
- In your email signature
- On your GitHub profile
- With potential employers/clients
