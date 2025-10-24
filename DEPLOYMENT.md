# Deployment Guide for Teebot Portfolio

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and offers the best deployment experience.

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Teebot portfolio"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

3. **Custom Domain (iteebot.com):**
   - Go to Project Settings → Domains
   - Add `iteebot.com`
   - Follow DNS configuration instructions
   - Add both `iteebot.com` and `www.iteebot.com`

### Option 2: Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Custom domain:** Configure in Netlify dashboard → Domain settings

### Option 3: AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Base directory: `/`
   - Output directory: `.next`
3. Add custom domain in Amplify console

### Option 4: Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t teebot-portfolio .
docker run -p 3000:3000 teebot-portfolio
```

## 🌐 DNS Configuration for iteebot.com

### For Vercel:

Add these DNS records in your domain registrar:

**A Record:**
- Type: A
- Name: @ (or leave blank)
- Value: 76.76.21.21

**CNAME Record:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### For Cloudflare (Recommended):

1. Add your domain to Cloudflare
2. Point nameservers to Cloudflare
3. Add DNS records as shown above
4. Enable Cloudflare proxy (orange cloud) for:
   - Free SSL
   - CDN
   - DDoS protection
   - Better performance

## 📊 Performance Optimization

The site is already optimized with:
- ✅ Static generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking

### Additional Optimizations:

1. **Enable Compression:**
   - Vercel/Netlify: Automatic
   - Custom server: Enable gzip/brotli

2. **CDN:**
   - Vercel: Built-in global CDN
   - Others: Use Cloudflare

3. **Analytics:**
   - Add Vercel Analytics
   - Or Google Analytics
   - Or Plausible (privacy-friendly)

## 🔒 Security

### Headers (add to next.config.ts):

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## 📈 Post-Deployment Checklist

- [ ] Verify site loads at iteebot.com
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Test contact form (if connected)
- [ ] Verify SEO metadata (view source)
- [ ] Test dark mode
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics
- [ ] Configure SSL certificate (auto on Vercel/Netlify)

## 🎯 SEO Post-Deployment

1. **Google Search Console:**
   - Add property: iteebot.com
   - Verify ownership
   - Submit sitemap: `iteebot.com/sitemap.xml`

2. **Google Analytics:**
   - Create property
   - Add tracking code

3. **Social Media:**
   - Test Open Graph tags: [opengraph.xyz](https://www.opengraph.xyz/)
   - Test Twitter cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🆘 Troubleshooting

### Build fails:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use:
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### TypeScript errors:
```bash
npm run build
# Check errors and fix them
```

---

Need help? Contact: hello@iteebot.com

