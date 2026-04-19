import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  price?: string
  badge?: string
  icon?: ReactNode
  href: string
  ctaText?: string
}

export function ServiceCard({
  title,
  description,
  features = [],
  price,
  badge,
  icon,
  href,
  ctaText = 'Learn More',
}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-hover transition-shadow duration-normal">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          {icon && (
            <div className="w-12 h-12 bg-secondary-blue/10 text-secondary-blue flex items-center justify-center">
              {icon}
            </div>
          )}
          {badge && (
            <Badge variant="secondary">{badge}</Badge>
          )}
        </div>
        <CardTitle className="text-h4">{title}</CardTitle>
        <CardDescription className="text-neutral-charcoal">
          {description}
        </CardDescription>
      </CardHeader>
      
      {features.length > 0 && (
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-neutral-charcoal">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      <CardFooter className="flex flex-col items-stretch gap-3">
        {price && (
          <div className="text-center">
            <span className="text-h3 font-bold text-primary">{price}</span>
          </div>
        )}
        <Button asChild className="w-full">
          <Link href={href}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}