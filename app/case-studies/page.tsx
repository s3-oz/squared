import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const caseStudies = [
  {
    slug: 'retail-transformation',
    title: 'Urban Retail Group: 95% Stockout Reduction',
    client: 'Urban Retail Group',
    industry: 'Retail',
    challenge: 'Managing inventory across 8 locations with disconnected systems',
    result: '$18k monthly revenue increase',
    tags: ['Inventory', 'Multi-location', 'Real-time sync'],
  },
  {
    slug: 'hospitality-integration',
    title: 'TechFlow Hospitality: 30% Fewer Order Errors',
    client: 'TechFlow Hospitality',
    industry: 'Hospitality',
    challenge: 'Multiple ordering channels creating chaos in the kitchen',
    result: '2 hours daily saved in order management',
    tags: ['Order management', 'Integration', 'Automation'],
  },
  {
    slug: 'marketplace-platform',
    title: 'Makers Collective: Custom Marketplace Platform',
    client: 'Makers Collective',
    industry: 'E-commerce',
    challenge: 'Building a multi-vendor marketplace on Square infrastructure',
    result: '150+ vendors onboarded in 3 months',
    tags: ['Marketplace', 'OAuth', 'Multi-vendor'],
  },
  {
    slug: 'service-automation',
    title: 'ProServices Co: 90% Admin Time Reduction',
    client: 'ProServices Co',
    industry: 'Professional Services',
    challenge: 'Manual booking and invoicing consuming valuable time',
    result: 'Fully automated scheduling and billing',
    tags: ['Booking', 'Invoicing', 'Automation'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        headline="Square API Success Stories"
        subheadline="Real results from Australian businesses who transformed their operations with custom Square integrations"
        primaryCTA={{
          text: 'Start Your Success Story',
          href: '/consultation',
        }}
        variant="centered"
      />

      {/* Stats Section */}
      <section className="py-12 bg-neutral-off">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-h2 font-bold text-primary">52</p>
              <p className="text-sm text-neutral-charcoal">Successful Projects</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-primary">$2.4M</p>
              <p className="text-sm text-neutral-charcoal">Revenue Generated</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-primary">6 weeks</p>
              <p className="text-sm text-neutral-charcoal">Average Payback</p>
            </div>
            <div>
              <p className="text-h2 font-bold text-primary">98%</p>
              <p className="text-sm text-neutral-charcoal">Client Satisfaction</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="hover:shadow-hover transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-h3">{study.title}</CardTitle>
                  <CardDescription className="text-base">
                    <strong>Client:</strong> {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-charcoal mb-4">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-secondary-blue font-semibold mb-4">
                    <strong>Result:</strong> {study.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full group">
                    <Link href={`/case-studies/${study.slug}`}>
                      Read Full Story
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 font-bold text-primary mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-body-large text-neutral-charcoal mb-8 max-w-2xl mx-auto">
              Join these successful businesses in transforming your Square experience. 
              Let's discuss your unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/consultation">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}