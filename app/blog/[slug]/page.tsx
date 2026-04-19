import { Metadata } from 'next'
import { Container } from '@/components/ui'
import { getPageContent, getContentByType } from '@/lib/content/loader'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const blogPosts = await getContentByType('blog-')
  return blogPosts.map((post: any) => ({
    slug: post.slug.replace('blog-', '')
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const content = await getPageContent(`blog-${params.slug}`)
  
  if (!content) {
    return {
      title: 'Blog Post Not Found | Squared'
    }
  }
  
  return {
    title: `${content.title} | Squared`,
    description: content.meta.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const contentData = await getPageContent(`blog-${params.slug}`)
  
  if (!contentData) {
    notFound()
  }

  // Handle the nested content structure
  const article = (contentData as any).content?.article
  const content = (contentData as any).content?.content
  
  if (!article || !content) {
    notFound()
  }

  return (
    <main>
      {/* Article Header */}
      <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Link 
                href="/blog"
                className="text-purple-600 hover:underline"
              >
                Blog
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-purple-600 font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {article.subtitle}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{article.author.name}</span>
              <span>•</span>
              <span>{article.publish_date}</span>
              <span>•</span>
              <span>{article.reading_time}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Introduction */}
              {content.introduction && (
                <div className="mb-8">
                  <p className="text-xl leading-relaxed">{content.introduction.text}</p>
                  {content.introduction.key_point && (
                    <blockquote className="mt-4 border-l-4 border-purple-600 pl-4 italic">
                      {content.introduction.key_point}
                    </blockquote>
                  )}
                </div>
              )}
              
              {/* Sections */}
              {content.sections?.map((section: any, index: number) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{section.heading}</h2>
                  {section.content.map((item: any, iIndex: number) => (
                    <div key={iIndex} className="mb-8">
                      {item.subheading && (
                        <h3 className="text-xl font-semibold mb-3">{item.subheading}</h3>
                      )}
                      {item.text && <p className="mb-4">{item.text}</p>}
                      {item.code_example && (
                        <div className="my-4">
                          <p className="text-sm font-medium text-gray-600 mb-2">
                            {item.code_example.title}
                          </p>
                          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            <code className={`language-${item.code_example.language}`}>
                              {item.code_example.code}
                            </code>
                          </pre>
                        </div>
                      )}
                      {item.benefit && (
                        <p className="text-green-600 dark:text-green-400 italic mt-2">
                          ✓ {item.benefit}
                        </p>
                      )}
                      {item.use_cases && (
                        <ul className="list-disc pl-6 mt-3">
                          {item.use_cases.map((useCase: string, ucIndex: number) => (
                            <li key={ucIndex}>{useCase}</li>
                          ))}
                        </ul>
                      )}
                      {item.ordered_list && (
                        <ol className="list-decimal pl-6 mt-3">
                          {item.ordered_list.map((listItem: string, lIndex: number) => (
                            <li key={lIndex}>{listItem}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">About the Author</h3>
              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="text-sm text-gray-500 mb-3">{article.author.role}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">More API Updates</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Stay updated with the latest Square API news and features
                </p>
              </Link>
              <Link
                href="/resources"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">Implementation Guides</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Step-by-step guides for Square API integration
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement These Updates?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our experts can help you leverage these new features immediately
            </p>
            <Link
              href="/consultation"
              className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Expert Help
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}