import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { APIPlayground } from '@/components/tools/APIPlayground'

export const metadata: Metadata = {
  title: 'Square API Playground - Test Live Endpoints | Squared',
  description: 'Interactive Square API testing environment. Test endpoints, view responses, and generate code samples in real-time.',
}

export default async function SquareAPIPlaygroundPage() {
  const rawContent = await getPageContent('square-api-playground')
  const content = rawContent as any
  
  if (!content) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Content not found</h1>
      </Container>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.hero?.headline || content.sections?.hero?.headline || 'Square API Playground'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {content.hero?.subheadline || content.sections?.hero?.subheadline || 'Test Square APIs in real-time'}
            </p>
          </div>
        </Container>
      </section>

      {/* API Playground Section */}
      <section className="py-16">
        <Container>
          <APIPlayground content={content.playground || content.sections?.playground || { endpoints: [] }} />
        </Container>
      </section>

      {/* Documentation Links */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold mb-8 text-center">
            API Documentation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://developer.squareup.com/docs"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">API Reference</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete Square API documentation</p>
            </a>
            <a
              href="/resources"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Integration Guides</h3>
              <p className="text-gray-600 dark:text-gray-300">Step-by-step implementation guides</p>
            </a>
            <a
              href="/contact"
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">Get Help</h3>
              <p className="text-gray-600 dark:text-gray-300">Contact our Square API experts</p>
            </a>
          </div>
        </Container>
      </section>
    </main>
  )
}