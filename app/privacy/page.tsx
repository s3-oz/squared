import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent } from '@/lib/content/loader'

export const metadata: Metadata = {
  title: 'Privacy Policy | Squared',
  description: 'Learn how Squared protects and manages your personal information.',
}

export default async function PrivacyPage() {
  const rawContent = await getPageContent('privacy')
  
  if (!rawContent) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Content not found</h1>
      </Container>
    )
  }
  
  const content = (rawContent as any).content || rawContent

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              {content.hero?.headline || 'Privacy Policy'}
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {content.meta?.lastUpdated || 'November 2024'}
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {(content.sections?.content || content.content || []).map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  {section.paragraphs.map((paragraph: string, pIndex: number) => (
                    <p key={pIndex} className="mb-4 text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-6 mb-4">
                      {section.list.map((item: string, iIndex: number) => (
                        <li key={iIndex} className="mb-2 text-gray-600 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}