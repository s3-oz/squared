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
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
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
          <Link href="/" className="flex items-center space-x-2" title="The power of Square, squared.">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-xl">S²</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-semibold text-xl">Squared<sup className="text-sm">²</sup></span>
              <span className="hidden sm:block text-xs text-neutral-charcoal">The power of Square, squared.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-secondary-blue',
                    pathname === item.href ? 'text-secondary-blue' : 'text-neutral-charcoal'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/contact">Book a chat</Link>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block text-base font-medium py-2',
                    pathname === item.href ? 'text-secondary-blue' : 'text-neutral-charcoal'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-neutral-light">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book a chat
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
