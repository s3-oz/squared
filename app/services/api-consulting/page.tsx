import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { Container, Button, Card } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { defaultServiceContent } from '@/lib/content/service-defaults'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Square API Consulting - Expert Implementation | Squared',
  description: 'Get expert Square API consulting to accelerate your integration and maximize your investment.',
}

export default async function APIConsultingPage() {
  const rawContent = await getPageContent('services-api-consulting')
  const content = (rawContent || defaultServiceContent['services-api-consulting']) as any

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/consultation">
                  Book Consultation
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.benefits.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.content.sections.benefits.items.map((benefit: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.process.headline}
          </h2>
          <div className="max-w-3xl mx-auto">
            {content.content.sections.process.steps.map((step: any, index: number) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
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
              {content.content.sections.cta.headline}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {content.content.sections.cta.subheadline}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consultation">
                Book Your Consultation
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}