// Content type definitions for squared.com.au

export interface PageContent {
  id: string
  slug: string
  title: string
  meta: PageMeta
  sections: Record<string, SectionContent>
}

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export interface SectionContent {
  type: string
  content: any // This will be more specific based on section type
}

export interface HeroContent {
  headline: string
  subheadline: string
  cta: CTAContent
  backgroundImage?: string
}

export interface CTAContent {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface ServiceContent {
  id: string
  title: string
  description: string
  features: string[]
  price?: string
  icon?: string
  cta?: CTAContent
}

export interface CaseStudyContent {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  image?: string
}

export interface BlogPostContent {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  publishedAt: string
  updatedAt?: string
  tags: string[]
  featuredImage?: string
}

export interface FAQContent {
  id: string
  question: string
  answer: string
  category?: string
}

export interface ComponentCopy {
  navigation: NavigationContent
  footer: FooterContent
  forms: FormContent
  common: CommonContent
}

export interface NavigationContent {
  logo: {
    text: string
    alt: string
  }
  links: NavLink[]
  cta: CTAContent
}

export interface NavLink {
  label: string
  href: string
  subLinks?: NavLink[]
}

export interface FooterContent {
  description: string
  sections: FooterSection[]
  copyright: string
  socialLinks?: SocialLink[]
}

export interface FooterSection {
  title: string
  links: { label: string; href: string }[]
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}

export interface FormContent {
  leadCapture: {
    title: string
    description: string
    fields: FormField[]
    submitText: string
    successMessage: string
    errorMessage: string
  }
  contact: {
    title: string
    description: string
    fields: FormField[]
    submitText: string
    successMessage: string
    errorMessage: string
  }
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    pattern?: string
    message?: string
  }
}

export interface CommonContent {
  loading: string
  error: string
  notFound: {
    title: string
    description: string
    cta: CTAContent
  }
  pagination: {
    previous: string
    next: string
    page: string
  }
}