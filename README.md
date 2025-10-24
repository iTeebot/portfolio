# Teebot - Technology Consultancy Portfolio

A modern, SEO-optimized single-page portfolio website for Teebot, showcasing our four core divisions: Consulting, Labs, Systems, and Studio.

## 🚀 Features

- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for modern styling
- ✅ **SEO Optimized** with comprehensive metadata
- ✅ **Responsive Design** - works on all devices
- ✅ **Smooth Scrolling** navigation
- ✅ **Beautiful Animations** - gradient blobs, fade-ins
- ✅ **Dark Mode** support
- ✅ **Production Ready** - error-free and optimized

## 🎨 Sections

1. **Hero** - Eye-catching landing section with gradient animations
2. **About** - Company mission, vision, and overview
3. **Divisions** - Four specialized divisions with detailed features
   - Teebot Consulting
   - Teebot Labs
   - Teebot Systems
   - Teebot Studio
4. **Contact** - Contact information and message form
5. **Footer** - Site navigation and company info

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd teebot-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
teebot-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with animations
│   ├── About.tsx          # About section
│   ├── Divisions.tsx      # Four divisions showcase
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer component
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 SEO Features

- Comprehensive metadata (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Optimized for search engines
- Mobile-friendly design

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Docker
- Any Node.js hosting platform

## 🎨 Customization

### Colors

The site uses a gradient color scheme (blue → purple → pink). To customize:
- Edit Tailwind classes in components
- Update CSS variables in `globals.css`

### Content

- Edit component content directly in `components/` folder
- Update metadata in `app/layout.tsx`
- Modify division details in `components/Divisions.tsx`

## 📧 Contact Configuration

To connect the contact form to a backend:

1. Add form handling in `components/Contact.tsx`
2. Use services like:
   - Formspree
   - EmailJS
   - SendGrid
   - Your own API endpoint

## 📝 License

This project is created for Teebot. All rights reserved.

## 🤝 Support

For questions or support, contact: hello@iteebot.com

---

Built with ❤️ by Teebot
