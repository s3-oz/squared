// Mock data for tool pages to ensure build succeeds
export const mockWizardContent = {
  questions: [
    {
      id: 'business-type',
      question: 'What type of business do you run?',
      options: [
        { value: 'retail', label: 'Retail Store', next: 'integration-goal' },
        { value: 'restaurant', label: 'Restaurant/Cafe', next: 'integration-goal' },
        { value: 'service', label: 'Service Business', next: 'integration-goal' },
        { value: 'other', label: 'Other', next: 'integration-goal' }
      ]
    },
    {
      id: 'integration-goal',
      question: 'What\'s your main goal with Square APIs?',
      options: [
        { value: 'payments', label: 'Process payments online' },
        { value: 'inventory', label: 'Manage inventory across locations' },
        { value: 'customers', label: 'Build customer relationships' },
        { value: 'custom', label: 'Custom integration' }
      ]
    }
  ],
  recommendations: {
    'retail-payments': {
      title: 'Square Online Checkout',
      description: 'Perfect for retail businesses looking to accept payments online.',
      features: [
        'Quick setup with pre-built checkout pages',
        'Inventory sync with your Square catalog',
        'Customer data automatically saved'
      ],
      cta: { text: 'Get Started', href: '/contact' }
    },
    'restaurant-inventory': {
      title: 'Restaurant Inventory Management',
      description: 'Streamline your restaurant operations with real-time inventory tracking.',
      features: [
        'Track ingredients across locations',
        'Automated low-stock alerts',
        'Integration with Square POS'
      ],
      cta: { text: 'Learn More', href: '/services/custom-integrations' }
    },
    'custom-solution': {
      title: 'Custom Integration Solution',
      description: 'Build a tailored Square API integration for your unique needs.',
      features: [
        'Fully customized to your workflow',
        'Dedicated development team',
        'Ongoing support and maintenance'
      ],
      cta: { text: 'Get Custom Quote', href: '/contact' }
    },
    'general-consultation': {
      title: 'Custom API Consultation',
      description: 'Let\'s discuss your specific needs and build a tailored solution.',
      features: [
        'Expert analysis of your requirements',
        'Custom integration roadmap',
        'Ongoing support and optimization'
      ],
      cta: { text: 'Book Consultation', href: '/consultation' }
    }
  }
}

export const mockPlaygroundContent = {
  endpoints: [
    {
      name: 'Create Payment',
      method: 'POST',
      path: '/v2/payments',
      description: 'Process a payment through Square',
      parameters: [
        { name: 'amount_money', type: 'object', required: true, description: 'The amount to charge' },
        { name: 'source_id', type: 'string', required: true, description: 'Payment source token' }
      ]
    },
    {
      name: 'List Customers',
      method: 'GET',
      path: '/v2/customers',
      description: 'Retrieve a list of customers',
      parameters: [
        { name: 'limit', type: 'integer', required: false, description: 'Number of results to return' }
      ]
    }
  ],
  defaultEndpoint: 'List Customers'
}

export const mockCalculatorContent = {
  inputs: [
    {
      id: 'monthlyTransactions',
      label: 'Monthly Transactions',
      placeholder: '1000',
      type: 'number',
      helperText: 'Average number of transactions per month'
    },
    {
      id: 'averageTransaction',
      label: 'Average Transaction Value',
      placeholder: '50',
      type: 'currency',
      helperText: 'Average sale amount in AUD'
    },
    {
      id: 'currentProcessingFee',
      label: 'Current Processing Fee (%)',
      placeholder: '2.9',
      type: 'percentage',
      helperText: 'What you currently pay for processing'
    },
    {
      id: 'manualProcessingTime',
      label: 'Manual Processing Time (minutes)',
      placeholder: '5',
      type: 'number',
      helperText: 'Time spent on manual payment tasks'
    },
    {
      id: 'employeeHourlyRate',
      label: 'Employee Hourly Rate',
      placeholder: '25',
      type: 'currency',
      helperText: 'Average hourly rate for staff'
    },
    {
      id: 'implementationCost',
      label: 'Implementation Cost',
      placeholder: '5000',
      type: 'currency',
      helperText: 'One-time setup investment'
    }
  ],
  results: {
    savings: {
      label: 'Monthly Savings',
      description: 'Total savings from efficiency and reduced fees'
    },
    roi: {
      label: 'Return on Investment',
      description: 'First year ROI percentage'
    },
    payback: {
      label: 'Payback Period',
      description: 'Time to recover your investment'
    }
  }
}