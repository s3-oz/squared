import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'API Consulting', href: '/services/api-consulting' },
      { label: 'Custom Integrations', href: '/services/custom-integrations' },
      { label: 'API Audit', href: '/services/api-audit' },
      { label: 'Training', href: '/services/training' },
    ],
  },
  tools: {
    title: 'Tools',
    links: [
      { label: 'API Playground', href: '/square-api-playground' },
      { label: 'Integration Wizard', href: '/integration-wizard' },
      { label: 'ROI Calculator', href: '/roi-calculator' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/resources' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
      { label: 'API Reference', href: '/api-reference' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">S²</span>
                </div>
                <span className="text-white font-semibold text-xl">Squared</span>
              </Link>
              <p className="text-sm text-neutral-light leading-relaxed">
                Expert Square API consulting and integration services for Australian businesses.
              </p>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-light hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-neutral-light">
                © {currentYear} Squared. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy"
                  className="text-sm text-neutral-light hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-neutral-light hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}