# RoastBot Website

Modern landing page for RoastBot - the AI-powered SMS roasting bot.

## Features

- **Modern Design**: Dark theme with orange accents
- **Interactive Demo**: Step-by-step walkthrough of bot features
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js and optimized for performance
- **SEO Ready**: Meta tags and structured data included

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment and hosting

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Each push to main triggers a new deployment

### Manual Deployment

```bash
npm run build
```

The static site will be generated in the `out` directory.

## Components

- **Header** - Navigation with smooth scrolling
- **Hero** - Main landing section with CTA
- **Features** - Tech stack and capabilities grid
- **Demo** - Interactive chat simulation
- **HowItWorks** - Step-by-step process flow
- **GitHub** - Open source information
- **Footer** - Links and credits

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```js
colors: {
  'roast-orange': '#FF6B35',
  'roast-red': '#F7931E',
  'roast-dark': '#1a1a1a',
  'roast-gray': '#2d2d2d',
}
```

### Content

All content is contained within the component files. Update text, features, and demo steps directly in the components.

## Performance

- Static generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Fast Core Web Vitals scores

## SEO

- Open Graph meta tags
- Twitter Card support
- Structured data markup
- Semantic HTML structure
- Optimized meta descriptions