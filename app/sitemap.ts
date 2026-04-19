import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://squared.com.au'
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/api-consulting',
    '/services/custom-integrations',
    '/services/api-audit',
    '/services/training',
    '/case-studies',
    '/blog',
    '/resources',
    '/square-api-playground',
    '/integration-wizard',
    '/roi-calculator',
    '/contact',
    '/consultation',
    '/faq',
    '/privacy',
    '/terms',
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  // Dynamic pages would be added here in production
  const dynamicUrls = [
    {
      url: `${baseUrl}/case-studies/retail-transformation`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-studies/hospitality-integration`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/case-studies/marketplace-platform`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]

  return [...staticUrls, ...dynamicUrls]
}