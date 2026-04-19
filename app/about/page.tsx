import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="A human who actually builds websites. With serious AI leverage."
        variant="centered"
      />

      <section className="section-padding">
        <Container size="md">
          <div className="prose prose-lg mx-auto max-w-none">
            <p className="text-body-large text-neutral-charcoal mb-8">
              No account manager. No offshore team. No &ldquo;AI-powered platform&rdquo; that&rsquo;s actually just a template engine. You talk to the person building your site. That person has spent {'{{OZ_FILL: years of web/platform experience}}'} shipping web platforms at the depth most agencies outsource.
            </p>

            <h2 className="text-h2 font-bold text-primary mb-4">What&rsquo;s changed</h2>
            <p className="text-body text-neutral-charcoal mb-8">
              AI makes one competent operator do the work of a small team — and at a small-team fraction of the cost. That&rsquo;s what lets Squared charge less without cutting corners. It&rsquo;s not magic. It&rsquo;s leverage, and you get the benefit.
            </p>

            <h2 className="text-h2 font-bold text-primary mb-4">Why this matters for you</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'You get craft',
                description:
                  'Design decisions, code quality, and opinionated choices made by a human who cares what good looks like.',
              },
              {
                title: 'You get speed',
                description:
                  'Tasks that used to take a team now take one operator with proper AI tooling.',
              },
              {
                title: 'You get the price',
                description: 'Half-team cost, full-team quality.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <h3 className="text-h4 font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-neutral-off">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-4">Why Square</h2>
          <p className="text-body text-neutral-charcoal">
            We kept building our own projects on Square because it&rsquo;s already good at the hard stuff — payments, inventory, customers, bookings. What Square isn&rsquo;t good at is letting you build a site that looks like your actual business. That&rsquo;s where Squared came from.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-4">Who it&rsquo;s for</h2>
          <ul className="list-disc pl-6 space-y-2 text-body text-neutral-charcoal mb-8">
            <li>
              Cafés, retail, salons, personal trainers, small multi-location operators — anyone already on Square who&rsquo;s hit Squarespace&rsquo;s ceiling or bounced off Shopify&rsquo;s costs.
            </li>
            <li>Not for: enterprises, non-Square businesses, or &ldquo;just a landing page&rdquo; jobs.</li>
          </ul>

          <p className="text-body text-neutral-charcoal">
            <strong>Based in</strong> {'{{OZ_FILL: Melbourne / Sydney / Australia}}'}
          </p>
        </Container>
      </section>
    </>
  )
}
