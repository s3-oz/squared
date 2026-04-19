import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <>
      <Hero headline="Let's have a quick chat." variant="centered" />

      <section className="section-padding">
        <Container size="md">
          <p className="text-body-large text-neutral-charcoal mb-12">
            20 minutes on a call. You show us your Square. We tell you honestly whether what you want is realistic, how long it&rsquo;d take, and what it&rsquo;d cost. No deck, no sales pipeline chase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button asChild size="lg">
              <Link href="{{OZ_FILL: Calendly link}}">Book a slot</Link>
            </Button>
            <span className="text-body text-neutral-charcoal">
              Or email:{' '}
              <a
                href="mailto:{{OZ_FILL: email address}}"
                className="text-secondary-blue hover:underline"
              >
                {'{{OZ_FILL: email address}}'}
              </a>
            </span>
          </div>
        </Container>
      </section>
    </>
  )
}
