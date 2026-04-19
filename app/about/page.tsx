import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { getPageContent } from '@/lib/content/loader'

export default async function AboutPage() {
  const content = await getPageContent('about')
  
  return (
    <>
      <Hero
        headline="About Squared - Square API Experts"
        subheadline="We're on a mission to help Australian businesses unlock the full potential of Square's powerful API ecosystem"
        variant="centered"
      />

      {/* Story Section */}
      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">Our Story</h2>
            <p className="text-body-large text-neutral-charcoal mb-6">
              Squared was born from frustration. After years of watching businesses struggle with Square's hidden capabilities, 
              we realized the platform's biggest strength was also its biggest weakness: incredible API power locked behind 
              technical complexity.
            </p>
            <p className="text-body text-neutral-charcoal mb-6">
              We founded Squared in 2019 with a simple mission: make Square's API accessible to every Australian business. 
              Since then, we've helped 52 companies transform their operations, saving them thousands of hours and millions 
              in revenue.
            </p>
            <p className="text-body text-neutral-charcoal">
              Today, we're Australia's only consultancy 100% focused on Square API integration. We eat, sleep, and breathe 
              Square's documentation so our clients don't have to.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-body-large text-neutral-charcoal max-w-2xl mx-auto">
              A small team of Square API specialists delivering big results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Sarah Chen',
                role: 'Lead API Architect',
                bio: '10+ years in payment integrations, Square certified since 2016',
              },
              {
                name: 'Marcus Thompson',
                role: 'Integration Specialist',
                bio: 'Former Square developer, expert in OAuth flows and webhooks',
              },
              {
                name: 'Emma Rodriguez',
                role: 'Client Success Manager',
                bio: 'Ensures every integration delivers measurable business value',
              },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-neutral-light rounded-full mx-auto mb-4" />
                  <h3 className="text-h4 font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-secondary-blue mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-charcoal">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Technical Excellence',
                description: 'We stay current with every Square API update and best practice',
              },
              {
                title: 'Business Focus',
                description: 'Technology serves business goals, not the other way around',
              },
              {
                title: 'Transparent Pricing',
                description: 'Clear quotes, no surprises, ROI-focused engagements',
              },
              {
                title: 'Local Understanding',
                description: 'Built for Australian businesses, regulations, and markets',
              },
            ].map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <h3 className="text-h4 font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 font-bold text-primary mb-8">Certifications & Partnerships</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Badge variant="secondary" className="px-6 py-3 text-base">Square Certified Partner</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">ISO 27001 Compliant</Badge>
              <Badge variant="secondary" className="px-6 py-3 text-base">PCI DSS Level 1</Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <div className="text-center">
            <h2 className="text-h2 font-bold text-primary mb-4">Let's Build Something Great Together</h2>
            <p className="text-body-large text-neutral-charcoal mb-8 max-w-2xl mx-auto">
              Join the 52 Australian businesses already transforming their operations with custom Square integrations
            </p>
            <Button asChild size="lg">
              <Link href="/consultation">Start Your Transformation</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}