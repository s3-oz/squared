import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Custom Square-powered websites. That's all we do."
        variant="centered"
      />

      <section className="section-padding">
        <Container size="md">
          <p className="text-body-large text-neutral-charcoal mb-12">
            We don&rsquo;t run ads. We don&rsquo;t sell courses. We don&rsquo;t do SEO audits. We build sites that connect to your Square, run on your domain, and look like you care.
          </p>

          <h2 className="text-h2 font-bold text-primary mb-6">What&rsquo;s included</h2>
          <ul className="list-disc pl-6 space-y-2 text-body text-neutral-charcoal mb-12">
            <li>Custom design (not a template)</li>
            <li>Full Square integration — catalog, bookings, orders, customers, whatever you use</li>
            <li>Hosting + maintenance</li>
            <li>Domain setup + SSL</li>
            <li>Migration from your existing site</li>
            <li>Unlimited small content updates</li>
          </ul>

          <h2 className="text-h2 font-bold text-primary mb-6">What costs extra</h2>
          <ul className="list-disc pl-6 space-y-2 text-body text-neutral-charcoal mb-12">
            <li>New features added mid-build</li>
            <li>Non-Square integrations (Stripe, Mailchimp, Xero, etc.)</li>
            <li>Wholesale redesigns</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-h4 font-semibold mb-3">Pricing</h3>
                <p className="text-sm text-neutral-charcoal">
                  {'{{OZ_FILL: price stance — explicit tier, "from $X", or "chat for quote"}}'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-h4 font-semibold mb-3">Timeline</h3>
                <p className="text-sm text-neutral-charcoal">
                  2–4 weeks from kickoff to live site.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="{{OZ_FILL: Calendly link}}">Book a 20-min chat</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
