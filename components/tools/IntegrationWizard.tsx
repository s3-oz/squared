'use client'

import { useState } from 'react'
import { Button, Card } from '@/components/ui'
import { useRouter } from 'next/navigation'

interface Question {
  id: string
  question: string
  options: Array<{
    value: string
    label: string
    next?: string
  }>
}

interface Recommendation {
  title: string
  description: string
  features: string[]
  cta: {
    text: string
    href: string
  }
}

interface IntegrationWizardProps {
  content: {
    questions: Question[]
    recommendations: Record<string, Recommendation>
  }
}

import { mockWizardContent } from '@/lib/content/mock-data'

export function IntegrationWizard({ content }: IntegrationWizardProps) {
  // Use mock data as fallback if content is incomplete
  const wizardContent = {
    questions: content.questions?.length > 0 ? content.questions : mockWizardContent.questions,
    recommendations: Object.keys(content.recommendations || {}).length > 0 ? content.recommendations : mockWizardContent.recommendations
  }
  const router = useRouter()
  const [currentQuestionId, setCurrentQuestionId] = useState('business-type')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  
  const currentQuestion = wizardContent.questions.find((q) => q.id === currentQuestionId)
  const progress = (Object.keys(answers).length / wizardContent.questions.length) * 100

  const handleAnswer = (value: string, next?: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionId]: value }))
    
    if (next) {
      setCurrentQuestionId(next)
    } else {
      // Calculate recommendation based on answers
      setShowResults(true)
    }
  }

  const getRecommendation = (): Recommendation => {
    // Logic to determine best recommendation based on answers
    const businessType = answers['business-type']
    const integrationGoal = answers['integration-goal']
    
    // Simplified logic - in production, this would be more sophisticated
    if (businessType === 'retail' && integrationGoal === 'payments') {
      return wizardContent.recommendations['retail-payments']
    } else if (businessType === 'restaurant' && integrationGoal === 'inventory') {
      return wizardContent.recommendations['restaurant-inventory']
    } else if (integrationGoal === 'custom') {
      return wizardContent.recommendations['custom-solution']
    }
    
    return wizardContent.recommendations['general-consultation']
  }

  const resetWizard = () => {
    setAnswers({})
    setCurrentQuestionId('business-type')
    setShowResults(false)
  }

  if (showResults) {
    const recommendation = getRecommendation()
    
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Your Recommended Solution</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Based on your answers, here's what we recommend:
          </p>
        </div>
        
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-4">{recommendation.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {recommendation.description}
          </p>
          
          <div className="mb-8">
            <h4 className="font-medium mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {recommendation.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4">
            <Button
              onClick={() => router.push(recommendation.cta.href)}
              size="lg"
            >
              {recommendation.cta.text}
            </Button>
            <Button
              variant="secondary"
              onClick={resetWizard}
              size="lg"
            >
              Start Over
            </Button>
          </div>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need a different solution?{' '}
            <a href="/contact" className="text-purple-600 hover:underline">
              Contact our experts
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Question {Object.keys(answers).length + 1} of {wizardContent.questions.length}
        </p>
      </div>

      {currentQuestion && (
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value, 'next' in option ? option.next : undefined)}
                className="w-full p-4 text-left rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-500 transition-colors"
              >
                <span className="block font-medium">{option.label}</span>
              </button>
            ))}
          </div>
          
          {Object.keys(answers).length > 0 && (
            <Button
              variant="ghost"
              onClick={() => {
                const previousQuestions = wizardContent.questions.slice(
                  0,
                  wizardContent.questions.findIndex((q) => q.id === currentQuestionId)
                )
                const lastQuestion = previousQuestions[previousQuestions.length - 1]
                if (lastQuestion) {
                  setCurrentQuestionId(lastQuestion.id)
                  const newAnswers = { ...answers }
                  delete newAnswers[lastQuestion.id]
                  setAnswers(newAnswers)
                }
              }}
              className="mt-6"
            >
              ← Previous Question
            </Button>
          )}
        </Card>
      )}
    </div>
  )
}