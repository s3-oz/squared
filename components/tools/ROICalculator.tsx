'use client'

import { useState } from 'react'
import { Button, Card, Input } from '@/components/ui'

interface ROICalculatorProps {
  content: {
    inputs: Array<{
      id: string
      label: string
      placeholder: string
      type: 'currency' | 'percentage' | 'number'
      helperText?: string
    }>
    results: {
      savings: {
        label: string
        description: string
      }
      roi: {
        label: string
        description: string
      }
      payback: {
        label: string
        description: string
      }
    }
  }
}

import { mockCalculatorContent } from '@/lib/content/mock-data'

export function ROICalculator({ content }: ROICalculatorProps) {
  // Use mock data as fallback
  const calcContent = {
    inputs: content.inputs?.length > 0 ? content.inputs : mockCalculatorContent.inputs,
    results: content.results || mockCalculatorContent.results
  }
  const [inputs, setInputs] = useState<Record<string, number>>({
    monthlyTransactions: 0,
    averageTransaction: 0,
    currentProcessingFee: 2.9,
    manualProcessingTime: 5,
    employeeHourlyRate: 25,
    implementationCost: 5000,
  })

  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (id: string, value: string) => {
    const numValue = parseFloat(value) || 0
    setInputs((prev) => ({ ...prev, [id]: numValue }))
  }

  const calculateROI = () => {
    const {
      monthlyTransactions,
      averageTransaction,
      currentProcessingFee,
      manualProcessingTime,
      employeeHourlyRate,
      implementationCost,
    } = inputs

    // Monthly revenue
    const monthlyRevenue = monthlyTransactions * averageTransaction

    // Processing fee savings (Square's competitive rates)
    const squareProcessingFee = 2.6 // Square's rate
    const monthlySavingsProcessing =
      monthlyRevenue * ((currentProcessingFee - squareProcessingFee) / 100)

    // Time savings
    const hoursPerMonth = (monthlyTransactions * manualProcessingTime) / 60
    const monthlySavingsTime = hoursPerMonth * employeeHourlyRate

    // Total monthly savings
    const totalMonthlySavings = monthlySavingsProcessing + monthlySavingsTime
    const totalAnnualSavings = totalMonthlySavings * 12

    // ROI calculation
    const roi = ((totalAnnualSavings - implementationCost) / implementationCost) * 100

    // Payback period
    const paybackMonths = implementationCost / totalMonthlySavings

    return {
      monthlySavings: totalMonthlySavings,
      annualSavings: totalAnnualSavings,
      roi: roi,
      paybackMonths: paybackMonths,
    }
  }

  const results = showResults ? calculateROI() : null

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Your Business Metrics</h2>
            
            <div className="space-y-4">
              {calcContent.inputs.map((input) => (
                <div key={input.id}>
                  <label className="block text-sm font-medium mb-1">
                    {input.label}
                  </label>
                  <Input
                    type="number"
                    placeholder={input.placeholder}
                    value={inputs[input.id] || ''}
                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                  />
                  {input.helperText && (
                    <p className="text-xs text-gray-500 mt-1">{input.helperText}</p>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={() => setShowResults(true)}
              className="w-full mt-6"
              size="lg"
            >
              Calculate ROI
            </Button>
          </Card>
        </div>

        {/* Results Section */}
        <div>
          {showResults && results && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Potential Results</h2>

              <div className="space-y-6">
                {/* Monthly Savings */}
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-medium text-green-800 dark:text-green-200">
                    {calcContent.results.savings.label}
                  </h3>
                  <p className="text-3xl font-bold text-green-900 dark:text-green-100 mt-1">
                    {formatCurrency(results.monthlySavings)}/month
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    {formatCurrency(results.annualSavings)} annually
                  </p>
                </div>

                {/* ROI */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-medium text-purple-800 dark:text-purple-200">
                    {calcContent.results.roi.label}
                  </h3>
                  <p className="text-3xl font-bold text-purple-900 dark:text-purple-100 mt-1">
                    {results.roi.toFixed(0)}%
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                    {calcContent.results.roi.description}
                  </p>
                </div>

                {/* Payback Period */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200">
                    {calcContent.results.payback.label}
                  </h3>
                  <p className="text-3xl font-bold text-blue-900 dark:text-blue-100 mt-1">
                    {results.paybackMonths.toFixed(1)} months
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                    {calcContent.results.payback.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Note:</strong> These calculations are estimates based on 
                  typical Square implementations. Actual results may vary based on 
                  your specific business needs and integration complexity.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full" size="lg">
                  Schedule a Consultation
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowResults(false)}
                  className="w-full"
                  size="lg"
                >
                  Adjust Inputs
                </Button>
              </div>
            </Card>
          )}

          {!showResults && (
            <Card className="p-6 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-medium mb-3">How it works:</h3>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex">
                  <span className="font-semibold mr-2">1.</span>
                  Enter your current business metrics
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">2.</span>
                  We calculate potential savings from Square APIs
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">3.</span>
                  See your ROI and payback period
                </li>
                <li className="flex">
                  <span className="font-semibold mr-2">4.</span>
                  Get personalized recommendations
                </li>
              </ol>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}