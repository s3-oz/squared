import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-hero font-bold text-primary mb-4">404</h1>
          <h2 className="text-h2 font-semibold text-neutral-charcoal mb-4">
            Page Not Found
          </h2>
          <p className="text-body-large text-neutral-gray mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}