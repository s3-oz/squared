import { Metadata } from 'next'
import { Container, Card } from '@/components/ui'
import { getPageContent, getContentByType } from '@/lib/content/loader'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  // For now, return a static list. In production, this would come from CMS/API
  return [
    { slug: 'retail-transformation' },
    { slug: 'hospitality-integration' },
    { slug: 'marketplace-platform' },
  ]
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  // In production, fetch metadata from CMS/API
  const titles: Record<string, string> = {
    'retail-transformation': 'Retail Chain Square API Transformation',
    'hospitality-integration': 'Restaurant Group Custom Integration',
    'marketplace-platform': 'Building a Marketplace on Square APIs',
  }
  
  return {
    title: `${titles[params.slug] || 'Case Study'} | Squared`,
    description: 'See how businesses transform with Square API implementations.',
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  // In production, fetch case study data from CMS/API
  const caseStudyData = {
    'retail-transformation': {
      title: 'Retail Chain Square API Transformation',
      client: 'Major Retail Chain',
      industry: 'Retail',
      challenge: 'Fragmented payment systems across 50+ locations',
      solution: 'Unified Square API integration with custom inventory sync',
      results: [
        '40% reduction in payment processing time',
        '25% increase in transaction success rate',
        'Real-time inventory updates across all locations',
        '$2M annual savings in operational costs'
      ],
      testimonial: {
        quote: 'The Square API integration transformed our operations. We now have real-time visibility across all locations and our checkout process is faster than ever.',
        author: 'Sarah Chen',
        role: 'CTO, Major Retail Chain'
      }
    },
    'hospitality-integration': {
      title: 'Restaurant Group Custom Integration',
      client: 'TasteBud Restaurant Group',
      industry: 'Hospitality',
      challenge: 'Complex order management across dine-in, takeout, and delivery',
      solution: 'Custom Square API integration with POS and delivery platforms',
      results: [
        '60% faster order processing',
        'Unified reporting across all channels',
        '30% reduction in order errors',
        'Seamless integration with 5 delivery platforms'
      ],
      testimonial: {
        quote: 'Square APIs allowed us to create a seamless experience for our customers regardless of how they order from us.',
        author: 'Michael Rodriguez',
        role: 'Operations Director, TasteBud'
      }
    },
    'marketplace-platform': {
      title: 'Building a Marketplace on Square APIs',
      client: 'ArtisanHub Marketplace',
      industry: 'E-commerce',
      challenge: 'Enable hundreds of sellers to accept payments seamlessly',
      solution: 'Square OAuth and split payment implementation',
      results: [
        '500+ sellers onboarded in 3 months',
        'Automated split payments and fee distribution',
        '99.9% payment uptime',
        '$10M in transaction volume first year'
      ],
      testimonial: {
        quote: 'Square\'s APIs made it possible for us to build a marketplace that handles complex payment flows with ease.',
        author: 'Emma Thompson',
        role: 'Founder, ArtisanHub'
      }
    }
  }

  const data = caseStudyData[params.slug as keyof typeof caseStudyData]
  
  if (!data) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Link 
              href="/case-studies"
              className="text-purple-600 hover:underline mb-4 inline-block"
            >
              ← Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                {data.client}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                {data.industry}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {data.challenge}
            </p>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {data.solution}
            </p>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">The Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.results.map((result, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300">{result}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium mb-6">
              "{data.testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{data.testimonial.author}</p>
              <p className="opacity-90">{data.testimonial.role}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how Square APIs can revolutionize your operations.
            </p>
            <Link
              href="/consultation"
              className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}