'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const navigation = {
  main: [
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'API Consulting', href: '/services/api-consulting' },
        { name: 'Custom Integrations', href: '/services/custom-integrations' },
        { name: 'API Audit', href: '/services/api-audit' },
        { name: 'Training', href: '/services/training' },
      ],
    },
    {
      name: 'Tools',
      href: '#',
      submenu: [
        { name: 'API Playground', href: '/square-api-playground' },
        { name: 'Integration Wizard', href: '/integration-wizard' },
        { name: 'ROI Calculator', href: '/roi-calculator' },
        { name: 'Documentation', href: '/resources' },
      ],
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ],
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-light">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-xl">S²</span>
            </div>
            <span className="text-primary font-semibold text-xl">Squared</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-8">
            {navigation.main.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-secondary-blue',
                    pathname === item.href ? 'text-secondary-blue' : 'text-neutral-charcoal'
                  )}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white shadow-large border border-neutral-light py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-neutral-charcoal hover:bg-neutral-off hover:text-secondary-blue transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/consultation">Book Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center p-2.5 text-neutral-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-neutral-light shadow-large">
            <div className="px-4 py-6 space-y-4">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block text-base font-medium py-2',
                      pathname === item.href ? 'text-secondary-blue' : 'text-neutral-charcoal'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block text-sm text-neutral-gray hover:text-secondary-blue py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-neutral-light">
                <Button asChild className="w-full">
                  <Link href="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}