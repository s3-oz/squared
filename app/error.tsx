'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-h1 font-bold text-primary mb-4">
            Something went wrong!
          </h1>
          <p className="text-body-large text-neutral-gray mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset}>Try Again</Button>
            <Button asChild variant="secondary">
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}