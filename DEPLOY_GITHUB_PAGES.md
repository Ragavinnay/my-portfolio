# 🚀 Deploy to GitHub Pages (100% Free Forever)

## ✅ Setup Steps (10 minutes)

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

**Find this line in package.json:**
```json
"private": true,
```

**Add this line right after it** (replace YOUR_USERNAME with your GitHub username):
```json
"homepage": "https://YOUR_USERNAME.github.io/my-portfolio",
```

**Your package.json should now have:**
```json
{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://YOUR_USERNAME.github.io/my-portfolio",
  ...
}
```

### Step 3: Push to GitHub

**If you don't have a GitHub repo:**
1. Go to: https://github.com
2. Create new repository: `my-portfolio`
3. Then run:

```bash
git add .
git commit -m "Ready for GitHub Pages"
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git push -u origin master
```

### Step 4: Deploy
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select: **gh-pages** branch
5. Click **Save**

**Wait 1-2 minutes for GitHub to process**

### Step 6: Done!

**Your portfolio is live at:**
`https://YOUR_USERNAME.github.io/my-portfolio`

**Stays live forever - 100% free!**

---

## 🔄 Update Your Site

Every time you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin master
npm run deploy
```

Your site updates automatically!

---

## 🎯 Why GitHub Pages?

- ✅ **100% Free forever**
- ✅ **No time limits**
- ✅ **No credit card needed**
- ✅ **Direct GitHub integration**
- ✅ **Custom domain support** (free)
- ✅ **Automatic HTTPS**

---

## 📝 Notes

- Replace `YOUR_USERNAME` with your actual GitHub username
- Your site URL will be: `https://YOUR_USERNAME.github.io/my-portfolio`
- Takes 1-2 minutes to go live after first deploy
- Updates take 1-2 minutes after running `npm run deploy`

---

## 🚀 Ready to Deploy?

1. Install: `npm install --save-dev gh-pages`
2. Update package.json (add homepage)
3. Push to GitHub
4. Run: `npm run deploy`
5. Enable Pages in GitHub settings
6. **Live forever!**

