import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { getPageContent } from '@/lib/content/loader'

export default async function ServicesPage() {
  const rawContent = await getPageContent('services')
  const content = rawContent as any
  
  return (
    <>
      <Hero
        headline="Square API Consulting Services"
        subheadline="From quick wins to complete transformations, we deliver Square API solutions that drive real business results"
        primaryCTA={{
          text: 'Book Consultation',
          href: '/consultation',
        }}
        variant="centered"
      />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Process Section */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">Our Process</h2>
            <p className="text-body-large text-neutral-charcoal max-w-2xl mx-auto">
              We've refined our approach over 52 successful integrations to deliver predictable, high-quality results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into your business processes, current tech stack, and growth goals',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We map out the optimal Square API solution tailored to your specific needs',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We build, test, and deploy your custom Square integration with zero disruption',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We monitor, refine, and scale your solution to maximize ROI over time',
              },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-h2 font-bold text-secondary-blue mb-4">{item.step}</div>
                  <h3 className="text-h4 font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <Card className="bg-gradient-primary text-white">
            <CardContent className="py-12 text-center">
              <h2 className="text-h2 font-bold mb-4">Ready to Transform Your Square Experience?</h2>
              <p className="text-body-large mb-8 max-w-2xl mx-auto">
                Let's discuss your specific needs and create a custom Square API solution that delivers measurable results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/consultation">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  )
}