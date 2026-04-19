'use client'

import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <>
      <Hero
        headline="Contact Squared - Get Expert Help"
        subheadline="Whether you need a quick answer or a complete Square API transformation, we're here to help"
        variant="centered"
      />

      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="label">Your Name</label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label">Email Address</label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <Input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="label">How Can We Help?</label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your Square API needs..."
                      />
                    </div>
                    
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <EnvelopeIcon className="w-5 h-5 text-secondary-blue mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@squared.com.au" className="text-secondary-blue hover:underline">
                          hello@squared.com.au
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <PhoneIcon className="w-5 h-5 text-secondary-blue mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:1300782733" className="text-secondary-blue hover:underline">
                          1300 SQUARED (1300 782 733)
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="w-5 h-5 text-secondary-blue mt-1" />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-sm text-neutral-charcoal">
                          Sydney, Australia<br />
                          (Remote-first company)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <ClockIcon className="w-5 h-5 text-secondary-blue mt-1" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-neutral-charcoal">
                          Monday - Friday<br />
                          9:00 AM - 5:00 PM AEST
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-h4 font-semibold mb-3">Quick Response Times</h3>
                  <ul className="space-y-2 text-sm text-neutral-charcoal">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-secondary-green rounded-full mr-2" />
                      Email: Within 4 business hours
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-secondary-green rounded-full mr-2" />
                      Phone: Immediate during hours
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-secondary-green rounded-full mr-2" />
                      Emergency support available
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="text-h4 font-semibold mb-3">Prefer to Book a Call?</h3>
                  <p className="text-sm mb-4">
                    Schedule a free 30-minute consultation to discuss your Square API needs
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="/consultation">Book Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-h2 font-bold text-primary mb-4">Common Questions</h2>
            <p className="text-body-large text-neutral-charcoal">
              Find quick answers to frequently asked questions
            </p>
          </div>
          <div className="text-center">
            <Button asChild variant="secondary">
              <a href="/faq">View All FAQs</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}