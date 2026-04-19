import { Metadata } from 'next'
import { Container, Card, Button } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Square API Resources & Tools | Squared',
  description: 'Access comprehensive Square API resources, guides, code samples, and tools to accelerate your development.',
}

export default async function ResourcesPage() {
  const rawContent = await getPageContent('resources')
  
  if (!rawContent) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Content not found</h1>
      </Container>
    )
  }
  
  const content = rawContent as any

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.sections?.hero?.headline || 'Square API Resources & Tools'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {content.sections?.hero?.subheadline || 'Everything you need to succeed with Square APIs'}
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {(content.sections?.categories?.items || []).map((category: any, index: number) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={category.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <Link
                  href={category.href}
                  className="text-purple-600 hover:underline font-medium"
                >
                  Browse {category.title} →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.sections?.featuredTools?.headline || 'Featured Tools'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content.sections?.featuredTools?.tools || []).map((tool: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tool.description}
                </p>
                <Button asChild>
                  <Link href={tool.href}>
                    {tool.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Popular Guides */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Implementation Guides
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {(content.sections?.popularGuides?.guides || []).map((guide: any, index: number) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                        <span className="text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                          {guide.level}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4 mt-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {content.sections?.newsletter?.headline || 'Stay Updated'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {content.sections?.newsletter?.subheadline || 'Get the latest Square API resources'}
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-purple-600 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  )
}