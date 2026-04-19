import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

type CaseStudy = {
  title: string
  sub: string
  story: string
  features: string[]
  lessons: string
}

const caseStudies: Record<string, CaseStudy> = {
  simstudio: {
    title: 'SimStudio — a gym booking system that runs on Square.',
    sub: 'Built for ourselves first. Now available as a starting point for any movement/fitness/class-based business.',
    story:
      '{{OZ_FILL: 3–5 sentences on origin — why SimStudio, who it\'s for, what problem it solves. Keep it honest.}}',
    features: [
      'Live class schedule pulled from Square Appointments',
      'Booking flow with Square-held customer records',
      'Class capacity + waitlist',
      'Instructor pages',
      '{{OZ_FILL: other specific features that matter}}',
    ],
    lessons:
      '{{OZ_FILL: 2–3 honest lessons — what was hard, what surprised us, what we\'d do differently}}',
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = caseStudies[params.slug]
  if (!study) {
    return { title: 'Case Study | Squared' }
  }
  return {
    title: `${study.title} | Squared`,
    description: study.sub,
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const data = caseStudies[params.slug]

  if (!data) {
    notFound()
  }

  return (
    <main>
      <section className="section-padding">
        <Container size="md">
          <Link
            href="/case-studies"
            className="text-secondary-blue hover:underline mb-6 inline-block"
          >
            ← Back to case studies
          </Link>
          <h1 className="text-h1 font-bold text-primary mb-4">{data.title}</h1>
          <p className="text-body-large text-neutral-charcoal">{data.sub}</p>
        </Container>
      </section>

      <section className="section-padding bg-neutral-off">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-4">The story</h2>
          <p className="text-body text-neutral-charcoal">{data.story}</p>
        </Container>
      </section>

      <section className="section-padding">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-6">What it does</h2>
          <ul className="list-disc pl-6 space-y-2 text-body text-neutral-charcoal">
            {data.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-neutral-off">
        <Container size="md">
          <h2 className="text-h2 font-bold text-primary mb-4">What we learned</h2>
          <p className="text-body text-neutral-charcoal">{data.lessons}</p>
        </Container>
      </section>

      <section className="section-padding">
        <Container size="md">
          <Card>
            <CardContent className="py-12 text-center">
              <h2 className="text-h2 font-bold text-primary mb-4">
                Interested in something similar?
              </h2>
              <Button asChild size="lg">
                <Link href="{{OZ_FILL: Calendly link}}">Book a 20-min chat</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </section>
    </main>
  )
}
