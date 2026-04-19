'use client'

import { AnimatedHero } from '@/components/sections/AnimatedHero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { motion } from 'framer-motion'
import { staggerItem } from '@/lib/utils/animations'
import Link from 'next/link'
import {
  ChartBarIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  SparklesIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedHero
        headline="Unlock Square's Hidden API Powers"
        subheadline="Transform your Square account into a custom business platform with Australia's only specialized Square API consultancy"
        primaryCTA={{
          text: 'Get Free API Audit',
          href: '/consultation',
        }}
        secondaryCTA={{
          text: 'Try API Playground',
          href: '/square-api-playground',
        }}
        showParticles={true}
      />

      {/* Trust Badges */}
      <AnimatedSection className="py-8 bg-neutral-off">
        <Container>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <motion.div variants={staggerItem} className="flex items-center space-x-2">
              <span className="text-h3 font-bold text-primary">
                <AnimatedCounter to={5} />
              </span>
              <span className="text-sm text-neutral-charcoal">Years Square Expertise</span>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center space-x-2">
              <span className="text-h3 font-bold text-primary">
                <AnimatedCounter to={52} />
              </span>
              <span className="text-sm text-neutral-charcoal">Successful Integrations</span>
            </motion.div>
            <motion.div variants={staggerItem} className="flex items-center space-x-2">
              <span className="text-h3 font-bold text-primary">
                <AnimatedCounter to={100} suffix="%" />
              </span>
              <span className="text-sm text-neutral-charcoal">Australian Owned</span>
            </motion.div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Value Props */}
      <AnimatedSection className="section-padding" stagger={true}>
        <Container>
          <motion.div variants={staggerItem} className="text-center mb-12">
            <p className="text-body-large text-neutral-charcoal max-w-3xl mx-auto">
              Most Square users tap into less than 20% of the platform's capability. 
              We're here to unlock the other 80%—the features Square built but didn't put buttons for.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <ChartBarIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>Every Endpoint, Every Possibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  We know Square's API inside out—from basic payments to complex OAuth flows. 
                  No learning curve on your dime, just immediate expertise applied to your specific needs.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <BuildingStorefrontIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>Built for Australian Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  GST calculations, EFTPOS integration, ABN validation—all the local requirements baked in. 
                  No awkward workarounds or 'it works in the US' solutions.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <CurrencyDollarIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>ROI You Can Bank On</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-charcoal">
                  Our clients average 6-week payback. From saving 20 hours weekly to preventing $15k 
                  in monthly losses—we deliver measurable results, not vague promises.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </Container>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection>
        <ServicesGrid 
          title="From Quick Wins to Complete Transformations"
          description="Whether you need a specific problem solved or your entire Square experience reimagined, we match our approach to your needs."
        />
      </AnimatedSection>

      {/* Tools Preview */}
      <AnimatedSection className="section-padding bg-gradient-subtle" stagger={true}>
        <Container>
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">See the API Magic Yourself</h2>
            <p className="text-body-large text-neutral-charcoal max-w-2xl mx-auto">
              Don't just take our word for it. Explore Square's capabilities hands-on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedCard delay={0.1} className="hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <BeakerIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>API Playground</CardTitle>
                <CardDescription>Test real Square endpoints safely</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/square-api-playground">Start Exploring</Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <SparklesIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>Integration Wizard</CardTitle>
                <CardDescription>Get personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/integration-wizard">Find Your Solution</Link>
                </Button>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-blue/10 flex items-center justify-center mb-4">
                  <CalculatorIcon className="w-6 h-6 text-secondary-blue" />
                </div>
                <CardTitle>ROI Calculator</CardTitle>
                <CardDescription>Calculate your integration value</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/roi-calculator">Calculate ROI</Link>
                </Button>
              </CardContent>
            </AnimatedCard>
          </div>
        </Container>
      </AnimatedSection>

      {/* Lead Capture Section */}
      <AnimatedSection className="section-padding">
        <Container size="sm">
          <LeadCaptureForm variant="homepage" />
        </Container>
      </AnimatedSection>
    </>
  )
}