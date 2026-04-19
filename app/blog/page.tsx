import { Metadata } from 'next'
import { Container, Card } from '@/components/ui'
import { getPageContent, getContentByType } from '@/lib/content/loader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Square API Blog - Updates & Insights | Squared',
  description: 'Stay updated with the latest Square API news, best practices, and implementation insights.',
}

export default async function BlogPage() {
  const contentData = await getPageContent('blog')
  const blogPosts = await getContentByType('blog-')
  
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

      {/* Featured Posts Section */}
      {blogPosts.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 2).map((post: any) => (
                <Card key={post.slug} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-purple-600 font-medium">
                      {post.sections.meta.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.sections.meta.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    <Link 
                      href={`/blog/${post.slug.replace('blog-', '')}`}
                      className="hover:text-purple-600 transition-colors"
                    >
                      {post.sections.hero.headline}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.sections.hero.subheadline}
                  </p>
                  <Link 
                    href={`/blog/${post.slug.replace('blog-', '')}`}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    Read More →
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="grid gap-6 max-w-4xl">
            {blogPosts.map((post: any) => (
              <div 
                key={post.slug} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-purple-600 font-medium">
                    {post.sections.meta.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.sections.meta.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link 
                    href={`/blog/${post.slug.replace('blog-', '')}`}
                    className="hover:text-purple-600 transition-colors"
                  >
                    {post.sections.hero.headline}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {post.sections.hero.subheadline}
                </p>
                <Link 
                  href={`/blog/${post.slug.replace('blog-', '')}`}
                  className="text-purple-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <Container>
          <div className="bg-purple-600 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Square API News
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest API updates and integration tips delivered monthly
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