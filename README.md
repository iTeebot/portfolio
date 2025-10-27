# Teebot - Technology Consultancy Portfolio

A premium, professional portfolio website for Teebot, showcasing our four core divisions with sophisticated design and functional contact capabilities.

## ✨ Features

- ✅ **Premium Design** - Clean, sophisticated aesthetic with professional typography
- ✅ **Next.js 16** with App Router and Turbopack
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for modern styling
- ✅ **Functional Contact Form** - With email delivery via Resend API
- ✅ **Newsletter Subscription** - Built-in audience building
- ✅ **Rate Limiting & Security** - Bot protection and spam prevention
- ✅ **SEO Optimized** with comprehensive metadata
- ✅ **Responsive Design** - Works beautifully on all devices
- ✅ **Dark Mode** support
- ✅ **Production Ready** - Thoroughly tested and optimized

## 🎨 Design Philosophy

**Premium & Professional**
- Playfair Display (serif) for elegant headings
- Inter (sans-serif) for clean body text
- Sophisticated color palette (black, white, refined grays)
- No heavy gradients - just clean, timeless design
- Asymmetric layouts for visual interest

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Create `.env.local` for email functionality:
```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=hello@iteebot.com
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

### 4. Build for Production
```bash
npm run build
npm start
```

## 📚 Documentation

All documentation is organized in the [`docs/`](./docs) folder:

- **[Getting Started](./docs/START-HERE.md)** - Start here for project introduction
- **[Configuration Guide](./docs/ENV-CONFIGURATION.md)** - Email and security setup
- **[Testing Guide](./docs/TESTING-GUIDE.md)** - How to test all features
- **[Redesign Summary](./docs/REDESIGN-SUMMARY.md)** - Complete list of changes
- **[Deployment](./docs/DEPLOYMENT.md)** - How to deploy to production

👉 **See [docs/README.md](./docs/README.md) for the complete documentation index**

## 🏗️ Project Structure

```
teebot-portfolio/
├── app/
│   ├── api/
│   │   ├── contact/         # Contact form API endpoint
│   │   └── newsletter/      # Newsletter subscription API
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Main page
│   └── globals.css          # Premium design system
├── components/
│   ├── Hero.tsx             # Premium hero section
│   ├── About.tsx            # Clean about section
│   ├── Divisions.tsx        # Asymmetric divisions layout
│   ├── Contact.tsx          # Functional contact form
│   ├── Footer.tsx           # Footer with newsletter
│   ├── Navigation.tsx       # Minimal navigation
│   └── ScrollToTop.tsx      # Scroll to top button
├── lib/
│   └── utils/
│       ├── rateLimit.ts     # Rate limiting logic
│       └── validation.ts    # Input validation
├── docs/                    # 📚 All documentation
├── public/                  # Static assets
└── README.md               # You are here!
```

## 🎯 Key Sections

1. **Hero** - Bold, minimal landing with elegant typography
2. **About** - Mission, vision, and core specializations
3. **Divisions** - Four specialized divisions (asymmetric layout)
   - Teebot Consulting - Strategy & Architecture
   - Teebot Labs - Research & Innovation (clickable link)
   - Teebot Systems - Hardware & IoT
   - Teebot Studio - Digital Experiences
4. **Contact** - Functional form with real-time validation
5. **Footer** - Newsletter subscription + social links

## 🔒 Security Features

- ✅ Rate limiting on all form submissions
- ✅ Input validation and sanitization
- ✅ XSS protection
- ✅ Email validation
- ✅ Bot protection infrastructure
- ✅ CORS-ready for production

## 📧 Email Configuration

The site uses **Resend** for modern email delivery:

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Get your API key
3. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=hello@iteebot.com
   ```

**Without configuration:** Forms will work but only log to console.

See [ENV-CONFIGURATION.md](./docs/ENV-CONFIGURATION.md) for details.

## 🎨 Customization

### Colors & Branding
- Edit CSS variables in `app/globals.css`
- Customize color palette (currently: sophisticated neutrals)
- Update logo in `public/logo.png`

### Content
- Edit components in `components/` folder
- Update division details in `components/Divisions.tsx`
- Modify metadata in `app/layout.tsx`

### Fonts
- Currently using: Playfair Display + Inter
- Change in `app/layout.tsx` if desired

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Deploy in one command
vercel
```

Or connect your GitHub repo for automatic deployments.

**Don't forget to add environment variables in Vercel dashboard!**

### Other Platforms
Works with:
- Netlify
- AWS Amplify  
- Docker
- Any Node.js hosting

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Email:** Resend API
- **Icons:** Lucide React
- **Fonts:** Playfair Display + Inter (Google Fonts)

## 📝 License

This project is created for Teebot. All rights reserved.

## 🤝 Support

- **Email:** hello@iteebot.com
- **Website:** [iteebot.com](https://iteebot.com)
- **Labs:** [labs.iteebot.com](https://labs.iteebot.com)

---

Built with precision and care by **Teebot** 🚀
