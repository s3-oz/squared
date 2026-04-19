import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://squared.com.au'

  const staticPages = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const caseStudySlugs = ['simstudio']
  const caseStudyUrls = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...caseStudyUrls]
}
