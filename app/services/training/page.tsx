import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
import { Container, Button, Card } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { defaultServiceContent } from '@/lib/content/service-defaults'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Square API Training - Build Expertise Fast | Squared',
  description: 'Hands-on Square API training for developers. From fundamentals to advanced integrations.',
}

export default async function TrainingPage() {
  const rawContent = await getPageContent('services-training')
  const content = (rawContent || defaultServiceContent['services-training']) as any

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
                Book Training
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {content.content.sections.intro.headline}
            </h2>
            {(content.content.sections.intro.paragraphs || []).map((para: string, i: number) => (
              <p key={i} className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {para}
              </p>
            ))}
            {content.content.sections.intro.highlight && (
              <p className="text-lg font-semibold text-purple-600 mt-6">
                {content.content.sections.intro.highlight}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Training Options Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.training_options.headline}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {(content.content.sections.training_options?.programs || []).map((program: any, index: number) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.ideal_for}
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                    <span className="ml-2 text-sm">{program.duration}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Format:</span>
                    <span className="ml-2 text-sm">{program.format}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Max Participants:</span>
                    <span className="ml-2 text-sm">{program.max_participants}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-purple-600 mb-4">{program.price}</p>
                <Button className="w-full" variant="secondary" asChild>
                  <Link href="/consultation">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.what_included.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(content.content.sections.what_included?.items || []).map((item: any, index: number) => (
              <div key={index} className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories Section */}
      {content.content.sections.success_stories && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-12">
              {content.content.sections.success_stories.headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {(content.content.sections.success_stories?.stories || []).map((story: any, index: number) => (
                <Card key={index} className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    "{story.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{story.author}</p>
                    <p className="text-sm text-gray-500">{story.company}</p>
                    <p className="text-sm text-purple-600 mt-2">{story.outcome}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            {content.content.sections.faq.headline}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {(content.content.sections.faq?.items || []).map((item: any, index: number) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
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
              {content.content.sections.cta.description}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/consultation">
                {content.content.sections.cta.primary}
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}