// Default content to ensure pages render even without CMS data
export const defaultResourcesContent = {
  hero: {
    headline: 'Square API Resources & Tools',
    subheadline: 'Everything you need to succeed with Square APIs'
  },
  categories: {
    items: [
      {
        title: 'Documentation',
        description: 'Comprehensive guides and API references',
        href: '/documentation',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      },
      {
        title: 'Tools',
        description: 'Interactive tools to accelerate development',
        href: '/square-api-playground',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'Guides',
        description: 'Step-by-step implementation tutorials',
        href: '/resources/guides',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
      }
    ]
  },
  featuredTools: {
    headline: 'Featured Tools',
    tools: [
      {
        title: 'API Playground',
        description: 'Test Square APIs in real-time',
        href: '/square-api-playground',
        cta: 'Try It Now'
      },
      {
        title: 'Integration Wizard',
        description: 'Find the perfect Square solution',
        href: '/integration-wizard',
        cta: 'Get Started'
      },
      {
        title: 'ROI Calculator',
        description: 'Calculate your potential savings',
        href: '/roi-calculator',
        cta: 'Calculate ROI'
      }
    ]
  },
  popularGuides: {
    guides: [
      {
        title: 'Getting Started with Square APIs',
        description: 'Learn the basics of Square API integration',
        href: '/documentation/getting-started',
        readTime: '10 min read',
        level: 'Beginner'
      },
      {
        title: 'Implementing Payment Processing',
        description: 'Step-by-step guide to accepting payments',
        href: '/resources/payment-processing',
        readTime: '15 min read',
        level: 'Intermediate'
      },
      {
        title: 'Multi-Location Inventory Sync',
        description: 'Advanced techniques for inventory management',
        href: '/resources/inventory-sync',
        readTime: '20 min read',
        level: 'Advanced'
      }
    ]
  },
  newsletter: {
    headline: 'Stay Updated',
    subheadline: 'Get the latest Square API resources delivered to your inbox'
  }
}