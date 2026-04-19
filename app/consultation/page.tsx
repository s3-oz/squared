import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { CheckIcon, ClockIcon, VideoCameraIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function ConsultationPage() {
  return (
    <>
      <Hero
        headline="Book Your Free Square API Consultation"
        subheadline="Get expert advice on your Square integration needs in a free 30-minute strategy session"
        variant="centered"
      />

      {/* What to Expect */}
      <section className="section-padding">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-h2 font-bold text-primary mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-5 h-5 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">30-Minute Strategy Call</h3>
                    <p className="text-sm text-neutral-charcoal">
                      Focused discussion on your specific Square API needs and opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <VideoCameraIcon className="w-5 h-5 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Video or Phone</h3>
                    <p className="text-sm text-neutral-charcoal">
                      Choose your preferred communication method for maximum convenience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DocumentTextIcon className="w-5 h-5 text-secondary-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Custom Recommendations</h3>
                    <p className="text-sm text-neutral-charcoal">
                      Receive a follow-up email with personalized integration recommendations
                    </p>
                  </div>
                </div>
              </div>

              <Card className="mt-8 bg-neutral-off">
                <CardContent className="pt-6">
                  <h3 className="text-h4 font-semibold mb-4">During Your Consultation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Review your current Square setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Identify integration opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Discuss technical feasibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Estimate ROI and timeline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-secondary-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm">Plan next steps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div>
              <LeadCaptureForm 
                variant="service_page"
                headline="Book Your Free Consultation"
                description="Fill out the form below and we'll contact you within 24 hours to schedule your consultation"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-neutral-off">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-4">Why Book a Consultation?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-4">No Cost</Badge>
                <h3 className="text-h4 font-semibold mb-2">100% Free</h3>
                <p className="text-sm text-neutral-charcoal">
                  No charge, no obligation. Just honest advice about your Square API options.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-4">Expert Advice</Badge>
                <h3 className="text-h4 font-semibold mb-2">Square Specialists</h3>
                <p className="text-sm text-neutral-charcoal">
                  Talk directly with Square API experts who've completed 52+ integrations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-4">Clear Path</Badge>
                <h3 className="text-h4 font-semibold mb-2">Actionable Plan</h3>
                <p className="text-sm text-neutral-charcoal">
                  Leave with a clear understanding of what's possible and how to achieve it.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-8 text-center">Common Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What should I prepare for the consultation?</h3>
                <p className="text-sm text-neutral-charcoal">
                  Just bring your questions! It's helpful to have access to your Square dashboard and 
                  a general idea of what you want to achieve, but we'll guide the conversation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Will I receive a quote during the call?</h3>
                <p className="text-sm text-neutral-charcoal">
                  We'll discuss ballpark figures based on similar projects. A detailed quote requires 
                  deeper analysis, which we'll provide after the call if you're interested in proceeding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What if I'm not technical?</h3>
                <p className="text-sm text-neutral-charcoal">
                  No problem! We speak business, not just tech. We'll explain everything in clear terms 
                  and focus on business outcomes, not technical jargon.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}