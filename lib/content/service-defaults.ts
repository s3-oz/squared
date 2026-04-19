// Default content for service pages
export const defaultServiceContent = {
  'services-api-consulting': {
    sections: {
      hero: {
        headline: 'Square API Consulting Services',
        subheadline: 'Expert guidance to accelerate your Square API implementation',
        primaryCTA: { text: 'Book Consultation', href: '/consultation' },
        secondaryCTA: { text: 'Contact Us', href: '/contact' }
      },
      benefits: {
        headline: 'Why Choose Our Consulting Services',
        items: [
          {
            title: 'Expert Knowledge',
            description: 'Deep understanding of Square APIs and best practices'
          },
          {
            title: 'Faster Implementation',
            description: 'Avoid common pitfalls and accelerate your time to market'
          },
          {
            title: 'Ongoing Support',
            description: 'Continuous assistance throughout your integration journey'
          }
        ]
      },
      process: {
        headline: 'Our Consulting Process',
        steps: [
          {
            title: 'Discovery',
            description: 'We analyze your business needs and technical requirements'
          },
          {
            title: 'Strategy',
            description: 'Design a custom Square API implementation roadmap'
          },
          {
            title: 'Implementation',
            description: 'Guide your team through the integration process'
          },
          {
            title: 'Optimization',
            description: 'Fine-tune your integration for maximum performance'
          }
        ]
      },
      cta: {
        headline: 'Ready to Get Started?',
        subheadline: 'Let us help you unlock the full potential of Square APIs',
        button: { text: 'Schedule Consultation', href: '/consultation' }
      }
    }
  },
  'services-custom-integrations': {
    sections: {
      hero: {
        headline: 'Custom Square Integrations',
        subheadline: 'Tailored solutions that perfectly fit your business needs',
        primaryCTA: { text: 'Get Quote', href: '/contact' }
      },
      integrationTypes: {
        headline: 'Integration Solutions We Build',
        types: [
          {
            title: 'E-commerce Integration',
            description: 'Connect Square with your online store',
            features: ['Real-time inventory sync', 'Automated order processing', 'Customer data integration']
          },
          {
            title: 'ERP Integration',
            description: 'Sync Square with your business systems',
            features: ['Financial data sync', 'Inventory management', 'Reporting automation']
          },
          {
            title: 'Custom Workflows',
            description: 'Build unique automation for your processes',
            features: ['Custom business logic', 'Multi-system integration', 'Workflow automation']
          }
        ]
      },
      examples: {
        headline: 'Recent Integration Projects',
        projects: [
          {
            title: 'Multi-Location Retail Chain',
            description: 'Integrated Square POS with SAP for real-time inventory and financial sync',
            technologies: ['Square API', 'SAP', 'Node.js', 'AWS']
          }
        ]
      },
      cta: {
        headline: 'Need a Custom Integration?',
        subheadline: 'Our team can build exactly what you need',
        button: { text: 'Start Your Project', href: '/contact' }
      }
    }
  },
  'services-api-audit': {
    sections: {
      hero: {
        headline: 'Square API Audit Services',
        subheadline: 'Optimize your existing Square integration for better performance',
        primaryCTA: { text: 'Get Audit', href: '/contact' }
      },
      auditProcess: {
        headline: 'Our Audit Process',
        steps: [
          {
            title: 'Analysis',
            description: 'Review your current Square API implementation'
          },
          {
            title: 'Identify Issues',
            description: 'Find performance bottlenecks and security gaps'
          },
          {
            title: 'Recommendations',
            description: 'Provide detailed improvement suggestions'
          },
          {
            title: 'Implementation',
            description: 'Help you implement the improvements'
          }
        ]
      },
      deliverables: {
        headline: 'What You Receive',
        items: [
          {
            title: 'Comprehensive Report',
            description: 'Detailed analysis of your Square API usage',
            includes: ['Performance metrics', 'Security assessment', 'Best practices review']
          },
          {
            title: 'Optimization Roadmap',
            description: 'Step-by-step plan for improvements',
            includes: ['Priority recommendations', 'Implementation timeline', 'Cost estimates']
          }
        ]
      },
      benefits: {
        headline: 'Benefits of an API Audit',
        items: [
          {
            title: 'Improved Performance',
            description: 'Faster transactions and better user experience'
          },
          {
            title: 'Cost Savings',
            description: 'Reduce unnecessary API calls and optimize usage'
          },
          {
            title: 'Enhanced Security',
            description: 'Identify and fix potential vulnerabilities'
          }
        ]
      },
      cta: {
        headline: 'Ready for an Audit?',
        subheadline: 'Let us help you optimize your Square API implementation',
        button: { text: 'Schedule Audit', href: '/contact' }
      }
    }
  },
  'services-training': {
    sections: {
      hero: {
        headline: 'Square API Training',
        subheadline: 'Empower your team with expert Square API knowledge',
        primaryCTA: { text: 'View Training Options', href: '#options' }
      },
      trainingOptions: {
        headline: 'Training Programs',
        options: [
          {
            title: 'Developer Bootcamp',
            description: 'Intensive hands-on training for developers',
            duration: '3 days',
            format: 'In-person or virtual'
          },
          {
            title: 'API Fundamentals',
            description: 'Introduction to Square APIs for beginners',
            duration: '1 day',
            format: 'Virtual workshop'
          },
          {
            title: 'Custom Training',
            description: 'Tailored training for your specific needs',
            duration: 'Flexible',
            format: 'Customized delivery'
          }
        ]
      },
      curriculum: {
        headline: 'What You\'ll Learn',
        modules: [
          {
            title: 'Square API Basics',
            topics: ['Authentication', 'API structure', 'Best practices', 'Error handling']
          },
          {
            title: 'Advanced Integration',
            topics: ['Webhooks', 'Batch operations', 'Performance optimization', 'Security']
          }
        ]
      },
      testimonials: {
        headline: 'What Our Trainees Say',
        items: [
          {
            quote: 'The training gave our team the confidence to build complex Square integrations.',
            author: 'Sarah Chen',
            role: 'Lead Developer, TechCorp'
          }
        ]
      },
      cta: {
        headline: 'Ready to Upskill Your Team?',
        subheadline: 'Contact us to discuss your training needs',
        button: { text: 'Get Training Quote', href: '/contact' }
      }
    }
  }
}