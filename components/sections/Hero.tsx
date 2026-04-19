import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'default' | 'centered' | 'split'
  backgroundPattern?: boolean
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
  backgroundPattern = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 bg-grid-neutral-light/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      )}

      <Container className="relative">
        <div className={cn(
          'py-24 lg:py-32',
          variant === 'centered' && 'text-center',
          variant === 'split' && 'grid lg:grid-cols-2 gap-12 items-center'
        )}>
          <div className={cn(
            variant === 'default' && 'max-w-3xl',
            variant === 'centered' && 'max-w-4xl mx-auto'
          )}>
            <h1 className="text-hero font-bold text-primary mb-6 animate-fade-in">
              {headline}
            </h1>
            <p className="text-body-large text-neutral-charcoal mb-8 animate-slide-up">
              {subheadline}
            </p>
            
            {(primaryCTA || secondaryCTA) && (
              <div className={cn(
                'flex gap-4 animate-slide-up',
                variant === 'centered' && 'justify-center',
                variant !== 'centered' && 'flex-col sm:flex-row'
              )}>
                {primaryCTA && (
                  <Button asChild size="lg">
                    <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
                  </Button>
                )}
                {secondaryCTA && (
                  <Button asChild variant="secondary" size="lg">
                    <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Placeholder for split variant content */}
          {variant === 'split' && (
            <div className="hidden lg:block">
              {/* Future: Add image or form component here */}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

