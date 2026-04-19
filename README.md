# Squared.com.au Website

Expert Square API consulting and integration services for Australian businesses.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: JSON-based content from Domain8 workflow
- **Deployment**: Vercel-ready

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                   # Utilities and helpers
│   ├── content/          # Content loading
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Build Status

- **Phase 1**: Foundation ✅
- **Phase 2**: Component Library (In Progress)
- **Phase 3**: Page Assembly (Pending)
- **Phase 4**: Styling & Polish (Pending)
- **Phase 5**: Optimization (Pending)

## Brand Guidelines

- **Primary Color**: Slate Gray (#0F172A)
- **Secondary**: Deep Blue (#0066CC)
- **Font**: Inter (sans-serif)
- **Code Font**: JetBrains Mono

## Content Integration

Content is loaded from the Domain8 content generation module:
- Pages: `../05-content-generator/pages/*.json`
- Component Copy: `../05-content-generator/component-copy.json`
- SEO Content: `../05-content-generator/seo-content.json`