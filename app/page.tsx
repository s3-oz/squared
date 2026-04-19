import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero
        headline="Your Square can do more than you think."
        subheadline="You already use it for payments, catalog, inventory, customers and bookings. We build the custom website, online store, or booking flow on top of it — killing the Shopify, Squarespace or Mindbody bill in the process."
        primaryCTA={{
          text: 'Book a 20-min chat',
          href: '{{OZ_FILL: Calendly link}}',
        }}
        secondaryCTA={{
          text: 'See what we unlock',
          href: '/services',
        }}
        variant="centered"
      />

      {/* The situation */}
      <section className="section-padding">
        <Container size="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-6">
              You already know Square.
            </h2>
            <p className="text-body-large text-neutral-charcoal mb-4">
              You ring up sales through it. Your menu or product catalog lives in it. Maybe you take bookings with Square Appointments, or track stock with Square Inventory, or tap cards with the Square reader.
            </p>
            <p className="text-body-large text-neutral-charcoal">
              That&rsquo;s already a full business system — running quietly in the background. Most people never use half of it.
            </p>
          </div>
        </Container>
      </section>

      {/* The revelation */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 font-bold text-primary mb-4">
              You probably don&rsquo;t know it can also do this.
            </h2>
            <p className="text-body-large text-neutral-charcoal">
              Square has an API. Which means with a custom-built website on top, your Square data can power anything — and you can ditch the extra subscriptions you&rsquo;re paying for right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>A real online store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Your Square catalog on a website that actually looks like your brand — not a Square Online template. <strong>Kills your Shopify bill.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online ordering on your domain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Menu, cart, Square checkout, on yourbusiness.com.au. <strong>Kills the 15% Menulog/UberEats cut.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>A booking flow you&rsquo;re proud of</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Square Appointments, with a custom booking UX and your branding. <strong>Kills your Mindbody/Acuity subscription.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer-facing dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Loyalty, class packs, stock levels, membership — drawn live from Square. <strong>Kills whatever third-party app is syncing to it today.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why us */}
      <section className="section-padding">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">
              One backend. One bill. One human to talk to.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Runs on your Square</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Your data stays where it is. Update Square, the website updates. No second system to maintain.
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
              Show us your Square. We&rsquo;ll tell you what it can do.
            </h2>
            <p className="text-body-large text-neutral-charcoal mb-8 max-w-2xl mx-auto">
              Book a 20-min chat. We&rsquo;ll look at your current Square setup, point out what you&rsquo;re paying for that you don&rsquo;t need, and sketch what a custom site on top of it would look like. No deck, no sales script.
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
