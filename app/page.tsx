import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero
        headline="Your Square. On your own website."
        subheadline="Professional websites for less than you think. Built on the Square you already use — catalog, bookings, orders, customers — extended to the web the way you want it."
        primaryCTA={{
          text: 'Book a 20-min chat',
          href: '{{OZ_FILL: Calendly link}}',
        }}
        secondaryCTA={{
          text: 'See how it works',
          href: '/services',
        }}
        variant="centered"
      />

      {/* Problem */}
      <section className="section-padding">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">
              You&rsquo;re already on Square. Your website should be too.
            </h2>
            <p className="text-body-large text-neutral-charcoal">
              Your products, inventory, orders, bookings and customer data already live in Square. Your current website either ignores all that (Squarespace, Wix) or makes you duplicate it (Shopify). Either way, you&rsquo;re paying twice and syncing on spreadsheets.
            </p>
          </div>
        </Container>
      </section>

      {/* Pitch — three pillars */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">
              One backend. One bill. One source of truth.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Runs on your Square</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Reads your real menu, catalog, bookings, customers. Update it once, in Square, like you already do.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actually custom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Not a template locked behind a theme editor. Real design, built for your business, by a human.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Priced like it&rsquo;s 2026</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  No app marketplace, no platform tax, no surprise invoices. {'{{OZ_FILL: price stance — "one flat monthly fee" vs "from $X" vs "chat for quote"}}'}
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* What we build */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">What we build</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Catalog + storefront</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Square products rendered on a site that doesn&rsquo;t look like everyone else&rsquo;s.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bookings + scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Square Appointments powering a booking flow you&rsquo;d actually be proud of.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online ordering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Menu, cart, Square checkout, on your domain, no 15% Menulog tax.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Loyalty dashboards, inventory reports, vertical-specific features — ask.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Proof */}
      <section className="section-padding bg-neutral-off">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-h2 font-bold text-primary mb-6">
              A site we built for ourselves first.
            </h2>
            <Button asChild size="lg">
              <Link href="/case-studies/simstudio">See SimStudio</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="section-padding">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-h2 font-bold text-primary mb-4">
              Stop paying for two systems that don&rsquo;t talk to each other.
            </h2>
            <p className="text-body-large text-neutral-charcoal mb-8 max-w-2xl mx-auto">
              Book a 20-min chat. We&rsquo;ll look at your Square, sketch what&rsquo;s possible, quote fairly. No deck, no sales script.
            </p>
            <Button asChild size="lg">
              <Link href="{{OZ_FILL: Calendly link}}">Book a 20-min chat</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
