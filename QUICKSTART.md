# 🚀 Quick Start Guide - Teebot Portfolio

## Get Up and Running in 2 Minutes!

### 1️⃣ Start Development Server

```bash
cd teebot-portfolio
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 What You'll See

Your beautiful single-page portfolio with:

- ✨ **Hero Section** - Eye-catching landing with animated gradients
- 📖 **About Section** - Company mission and vision  
- 🎯 **4 Divisions** - Consulting, Labs, Systems, Studio
- 📧 **Contact Section** - Get in touch form
- 🦶 **Footer** - Site navigation

---

## 🎨 Customization Quick Tips

### Change Content

**Edit Division Details:**
```typescript
// components/Divisions.tsx
const divisions = [
  {
    name: "Teebot Consulting",
    description: "Your new description...",
    // ... customize features, icons, colors
  }
]
```

**Update Company Info:**
```typescript
// app/layout.tsx - SEO metadata
// components/About.tsx - Mission/vision
// components/Contact.tsx - Contact details
```

### Change Colors

The site uses **blue → purple → pink** gradients. To customize:

```tsx
// Find and replace gradient classes:
"from-blue-600 to-purple-600"  // Change to your colors
"from-purple-500 to-pink-500"
```

### Change Fonts

```typescript
// app/layout.tsx
import { Geist } from "next/font/google";
// Replace with your preferred Google Font
```

---

## 🌐 Deploy to Production

### Fastest Way (Vercel):

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# 2. Go to vercel.com
# 3. Import GitHub repo
# 4. Click Deploy
# ✅ Live in 60 seconds!
```

### Add Your Domain (iteebot.com):

1. Vercel Dashboard → Project Settings → Domains
2. Add `iteebot.com` and `www.iteebot.com`
3. Update DNS records at your registrar:
   - **A Record**: @ → 76.76.21.21
   - **CNAME**: www → cname.vercel-dns.com
4. Done! SSL auto-configured ✅

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Run production build locally

# Linting
npm run lint         # Check code quality
```

---

## 📂 Key Files to Know

```
teebot-portfolio/
├── app/
│   ├── layout.tsx          # ← SEO, metadata, fonts
│   ├── page.tsx            # ← Main page structure
│   └── globals.css         # ← Styles & animations
│
├── components/
│   ├── Hero.tsx            # ← Landing section
│   ├── About.tsx           # ← About Teebot
│   ├── Divisions.tsx       # ← 4 divisions (edit here!)
│   ├── Contact.tsx         # ← Contact form
│   └── Footer.tsx          # ← Footer
│
└── public/
    └── robots.txt          # ← SEO
```

---

## 💡 Pro Tips

1. **Test Mobile:** Open dev server on phone using your local IP:
   ```
   http://YOUR_LOCAL_IP:3000
   ```

2. **Dark Mode:** Toggle system dark mode to see both themes

3. **SEO Check:** View page source to see meta tags

4. **Performance:** Run Lighthouse in Chrome DevTools

5. **Contact Form:** Currently a UI placeholder - connect to:
   - Formspree (easiest)
   - EmailJS
   - Your own API

---

## ❓ Common Questions

**Q: Site not loading?**
```bash
# Kill port 3000 and restart
npx kill-port 3000
npm run dev
```

**Q: Build errors?**
```bash
# Clean install
rm -rf .next node_modules
npm install
npm run build
```

**Q: Want to add a blog?**
- Add `/blog` route in `app/blog/page.tsx`
- Or integrate with CMS (Contentful, Sanity)

**Q: Need a database?**
- Use Vercel Postgres, Supabase, or MongoDB Atlas
- Add API routes in `app/api/`

---

## 🎯 Next Steps

- ✅ Customize content for your brand
- ✅ Connect contact form to email service
- ✅ Add your logo to `public/`
- ✅ Deploy to Vercel
- ✅ Configure custom domain
- ✅ Add to Google Search Console
- ✅ Set up analytics

---

## 🆘 Need Help?

- 📖 Full docs: See [README.md](./README.md)
- 🚀 Deployment: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📧 Contact: hello@iteebot.com
- 🌐 Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy Building! 🎉**

*Built with Next.js 14, TypeScript, and Tailwind CSS*

