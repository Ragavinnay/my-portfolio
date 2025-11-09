# Portfolio Deployment Guide

## 🚀 Quick Deployment Options

Your portfolio can be deployed to a public URL using these free services:

### Option 1: Netlify (Recommended - Easiest)
**Best for:** Quick deployment, automatic builds, custom domains

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://www.netlify.com)
3. Sign up/login (free)
4. Drag and drop the `build` folder to Netlify
5. Get your public URL instantly!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Vercel (Also Recommended)
**Best for:** React apps, automatic deployments from GitHub

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://www.vercel.com)
3. Sign up/login with GitHub
4. Import your repository
5. Deploy automatically!

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages
**Best for:** Free hosting with GitHub integration

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Add homepage: `"homepage": "https://yourusername.github.io/my-portfolio"`
4. Run: `npm run deploy`

### Option 4: Surge.sh
**Best for:** Simple static hosting

**Steps:**
```bash
npm install -g surge
npm run build
cd build
surge
```

---

## 📋 Pre-Deployment Checklist

- [ ] Build the project successfully (`npm run build`)
- [ ] Test all links and buttons
- [ ] Verify resume PDF is accessible
- [ ] Check responsive design on mobile
- [ ] Test all navigation links
- [ ] Verify project PDFs open correctly

---

## 🔧 Build Your Project

First, create a production build:

```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

---

## 🌐 Recommended: Netlify Deployment

### Method 1: Drag & Drop (Easiest)
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder
4. Get your URL instantly!

### Method 2: Git Integration (Automatic)
1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy automatically on every push!

---

## 🎯 Custom Domain (Optional)

After deployment, you can:
- Add a custom domain (e.g., yourname.com)
- Configure SSL certificate (automatic)
- Set up redirects

---

## 📝 Environment Variables (If Needed)

If you add features requiring API keys:
- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment variables

---

## ✅ Post-Deployment

1. Test your live URL
2. Share your portfolio link
3. Update your resume with the portfolio URL
4. Add to LinkedIn, GitHub profile, etc.

---

**Need help?** Let me know which platform you prefer!

