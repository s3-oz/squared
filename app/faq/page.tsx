import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Squared',
  description: 'Get answers to common questions about Square API implementation, consulting services, and integration solutions.',
}

export default async function FAQPage() {
  const contentData = await getPageContent('faq')
  
  if (!contentData) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Content not found</h1>
      </Container>
    )
  }

  // Handle the nested content structure
  const content = (contentData as any).content

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {content.hero.subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {content.sections.categories.map((category: any, index: number) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.questions.map((item: any, qIndex: number) => (
                    <details
                      key={qIndex}
                      className="group border border-gray-200 dark:border-gray-700 rounded-lg"
                      open={qIndex === 0}
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <span className="font-medium">{item.question}</span>
                        <svg
                          className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our Square API experts are here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/consultation"
                className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}