import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const footerLinks = {
  squared: {
    title: 'Squared',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand section */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-2">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">S²</span>
                </div>
                <span className="text-white font-semibold text-xl">Squared<sup className="text-sm">²</sup></span>
              </Link>
              <p className="text-sm text-white/90 font-medium mb-3">
                The power of Square, squared.
              </p>
              <p className="text-sm text-neutral-light leading-relaxed">
                Custom Square-powered websites for Australian businesses.
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
