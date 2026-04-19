import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { Container, Button, Card } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { defaultServiceContent } from '@/lib/content/service-defaults'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Square Integrations - Tailored Solutions | Squared',
  description: 'Build custom Square API integrations tailored to your unique business requirements.',
}

export default async function CustomIntegrationsPage() {
  const rawContent = await getPageContent('services-custom-integrations')
  const content = (rawContent || defaultServiceContent['services-custom-integrations']) as any

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
                Start Your Integration
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Integration Types Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.integration_types.headline}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.content.sections.integration_types.types.map((type: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{type.category}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.examples.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start">
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
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Examples Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Case Studies
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {(content.content.sections.case_studies?.items || []).map((project: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{project.client}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.challenge}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.tech_stack || []).map((tech: string, tIndex: number) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
              {content.content.sections.next_steps?.headline || "Ready to Transform Your Business?"}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {content.content.sections.next_steps?.description || "Let's build something amazing together."}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consultation">
                Get Started
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}