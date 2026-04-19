import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'
import { extractPageContent } from '@/lib/content/helpers'
import { ROICalculator } from '@/components/tools/ROICalculator'

export const metadata: Metadata = {
  title: 'Square API ROI Calculator | Squared',
  description: 'Calculate the potential return on investment from implementing Square APIs in your business.',
}

export default async function ROICalculatorPage() {
  const rawContent = await getPageContent('roi-calculator')
  
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
              {content.hero?.headline || 'Square API ROI Calculator'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {content.hero?.subheadline || 'Calculate your potential return on Square API investment'}
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <Container>
          <ROICalculator content={content.calculator || content.sections?.calculator || { inputs: [], results: {} }} />
        </Container>
      </section>
    </main>
  )
}