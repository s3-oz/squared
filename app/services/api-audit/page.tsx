import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { Container, Button, Card } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { defaultServiceContent } from '@/lib/content/service-defaults'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Square API Audit - Optimize Your Setup | Squared',
  description: 'Get a comprehensive audit of your Square API implementation to identify optimizations and improvements.',
}

export default async function APIAuditPage() {
  const rawContent = await getPageContent('services-api-audit')
  const content = (rawContent || defaultServiceContent['services-api-audit']) as any

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.content.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {content.content.hero.subheadline}
            </p>
            <Button size="lg" asChild>
              <Link href="/consultation">
                Book Your Audit
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.process.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.content.sections.process.timeline.days.map((day: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm text-left max-w-xs mx-auto">
                  {day.activities.map((activity: string, i: number) => (
                    <li key={i} className="mb-1">• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.deliverables.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.content.sections.deliverables.items.map((item: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {(item.includes || item.sample_sections || []).map((include: string, iIndex: number) => (
                    <li key={iIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm">{include}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Discover
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.content.sections.what_included.sections.map((section: any, index: number) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {content.content.sections.next_steps.headline}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {content.content.sections.next_steps.cta.description}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consultation">
                {content.content.sections.next_steps.cta.primary}
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}