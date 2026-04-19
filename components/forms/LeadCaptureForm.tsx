'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'

interface LeadCaptureFormProps {
  variant?: 'homepage' | 'tool_exit' | 'service_page'
  headline?: string
  description?: string
  onSubmit?: (data: FormData) => Promise<void>
}

interface FormData {
  name: string
  email: string
  company: string
  phone?: string
  service_interest?: string
  timeline?: string
}

export function LeadCaptureForm({ 
  variant = 'homepage',
  headline,
  description,
  onSubmit 
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service_interest: '',
    timeline: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const getContent = () => {
    switch (variant) {
      case 'homepage':
        return {
          headline: headline || 'Get Your Free Square API Audit',
          description: description || 'Discover untapped opportunities in your Square account',
          submitText: 'Get Free Audit',
          successHeadline: 'Thanks! We\'ll be in touch within 24 hours.',
          successDescription: 'Check your email for immediate next steps.',
        }
      case 'tool_exit':
        return {
          headline: headline || 'Found What You Need?',
          description: description || 'Let\'s discuss how to implement it for your business',
          submitText: 'Get Implementation Help',
          successHeadline: 'Perfect! We\'ll call you within 24 hours.',
          successDescription: 'We\'ll review what you explored and suggest next steps.',
        }
      case 'service_page':
        return {
          headline: headline || 'Ready to Get Started?',
          description: description || 'Tell us about your needs and we\'ll create a custom proposal',
          submitText: 'Get Custom Proposal',
          successHeadline: 'Excellent! Your proposal is on its way.',
          successDescription: 'We\'ll send a detailed proposal within 48 hours.',
        }
    }
  }

  const content = getContent()

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name'
    }
    
    if (variant === 'service_page') {
      if (!formData.service_interest) {
        newErrors.service_interest = 'Please select a service'
      }
      if (!formData.timeline) {
        newErrors.timeline = 'Please select a timeline'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        // Default submission logic
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setIsSuccess(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-secondary-green"
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
          </div>
          <h3 className="text-h3 font-semibold text-primary mb-2">
            {content.successHeadline}
          </h3>
          <p className="text-neutral-charcoal">
            {content.successDescription}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-h3">{content.headline}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="label">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-functional-error mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="label">
              Work Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@business.com.au"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-functional-error mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="label">
              Company Name
            </label>
            <Input
              id="company"
              type="text"
              placeholder="ABC Pty Ltd"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              error={!!errors.company}
            />
            {errors.company && (
              <p className="text-sm text-functional-error mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Phone (Optional)
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="0400 000 000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {variant === 'service_page' && (
            <>
              <div>
                <label htmlFor="service_interest" className="label">
                  Service Interest
                </label>
                <Select
                  id="service_interest"
                  placeholder="Select a service"
                  options={[
                    { value: 'api-audit', label: 'API Audit' },
                    { value: 'consulting', label: 'Consulting' },
                    { value: 'custom-integration', label: 'Custom Integration' },
                    { value: 'not-sure', label: 'Not Sure Yet' },
                  ]}
                  value={formData.service_interest}
                  onChange={(e) => setFormData({ ...formData, service_interest: e.target.value })}
                  error={!!errors.service_interest}
                />
                {errors.service_interest && (
                  <p className="text-sm text-functional-error mt-1">{errors.service_interest}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="label">
                  Timeline
                </label>
                <Select
                  id="timeline"
                  placeholder="Select timeline"
                  options={[
                    { value: 'asap', label: 'ASAP' },
                    { value: 'next-month', label: 'Next Month' },
                    { value: 'next-quarter', label: 'Next Quarter' },
                    { value: 'exploring', label: 'Just Exploring' },
                  ]}
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  error={!!errors.timeline}
                />
                {errors.timeline && (
                  <p className="text-sm text-functional-error mt-1">{errors.timeline}</p>
                )}
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : content.submitText}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}