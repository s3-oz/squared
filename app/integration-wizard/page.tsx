import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { extractPageContent } from '@/lib/content/helpers'
import { IntegrationWizard } from '@/components/tools/IntegrationWizard'

export const metadata: Metadata = {
  title: 'Square Integration Wizard - Find Your Solution | Squared',
  description: 'Answer a few questions to get personalized Square API integration recommendations for your business.',
}

export default async function IntegrationWizardPage() {
  const rawContent = await getPageContent('integration-wizard')
  
  if (!rawContent) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Content not found</h1>
      </Container>
    )
  }
  
  const content = extractPageContent(rawContent)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {content.hero?.headline || 'Square Integration Wizard'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {content.hero?.subheadline || 'Find the perfect Square API solution for your business'}
            </p>
          </div>
        </Container>
      </section>

      {/* Wizard Section */}
      <section className="py-16">
        <Container>
          <IntegrationWizard content={content.wizard || content.sections?.wizard || { questions: [], recommendations: {} }} />
        </Container>
      </section>
    </main>
  )
}