import { Hero } from '@/components/sections/Hero'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const caseStudies = [
  {
    slug: 'simstudio',
    title: 'SimStudio — a gym booking system that runs on Square',
    summary:
      'Built for ourselves first. Class schedule, bookings, capacity, waitlist — all driven by Square Appointments.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        headline="Real sites, real Square, real businesses."
        subheadline={
          '{{OZ_FILL: 1-sentence intro when we have more than one case study — for now just link the SimStudio card}}'
        }
        variant="centered"
      />

      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <Card key={study.slug} className="hover:shadow-hover transition-shadow">
                <CardHeader>
                  <CardTitle className="text-h3">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">{study.summary}</CardDescription>
                  <Button asChild className="w-full group">
                    <Link href={`/case-studies/${study.slug}`}>
                      Read the story
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
