import { Container } from '@/components/ui/Container'
import { ServiceCard } from './ServiceCard'
import { 
  DocumentMagnifyingGlassIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon 
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils/cn'

const services = [
  {
    title: 'API Audit',
    description: 'Comprehensive analysis of your Square implementation to identify optimization opportunities',
    features: [
      'Security assessment',
      'Performance analysis',
      'Cost optimization',
      'Best practices review',
    ],
    icon: <DocumentMagnifyingGlassIcon className="w-6 h-6" />,
    href: '/services/api-audit',
    ctaText: 'Get Audited',
  },
  {
    title: 'API Consulting',
    description: 'Expert guidance for planning and implementing Square API solutions',
    features: [
      'Architecture design',
      'Integration strategy',
      'Technical roadmap',
      'Ongoing support',
    ],
    icon: <CogIcon className="w-6 h-6" />,
    href: '/services/api-consulting',
    ctaText: 'Start Consulting',
    badge: 'Popular',
  },
  {
    title: 'Custom Integrations',
    description: 'Tailored Square integrations built specifically for your business needs',
    features: [
      'Custom development',
      'Third-party connections',
      'Workflow automation',
      'Full documentation',
    ],
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    href: '/services/custom-integrations',
    ctaText: 'Build Solution',
  },
  {
    title: 'Training',
    description: 'Empower your team with comprehensive Square API knowledge',
    features: [
      'Hands-on workshops',
      'Custom curriculum',
      'Best practices',
      'Ongoing resources',
    ],
    icon: <AcademicCapIcon className="w-6 h-6" />,
    href: '/services/training',
    ctaText: 'Book Training',
  },
]

interface ServicesGridProps {
  title?: string
  description?: string
  variant?: 'default' | 'compact'
}

export function ServicesGrid({ 
  title = 'Our Services',
  description = 'Choose the perfect solution for your Square API needs',
  variant = 'default' 
}: ServicesGridProps) {
  return (
    <section className="section-padding">
      <Container>
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-h2 font-bold text-primary mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-body-large text-neutral-charcoal max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className={cn(
          'grid gap-6',
          variant === 'default' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 max-w-4xl mx-auto'
        )}>
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

