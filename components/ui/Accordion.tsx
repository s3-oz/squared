'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined)

interface AccordionProps {
  children: ReactNode
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  className?: string
}

export function Accordion({ 
  children, 
  type = 'single', 
  defaultValue = [],
  className 
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  )

  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter(item => item !== value)
          : [...openItems, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('divide-y divide-neutral-light', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div className={cn('py-4', className)} data-state={value}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionTrigger({ children, value, className }: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionTrigger must be used within Accordion')

  const isOpen = context.openItems.includes(value)

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between text-left font-medium transition-all hover:text-secondary-blue',
        className
      )}
      onClick={() => context.toggleItem(value)}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
}

interface AccordionContentProps {
  children: ReactNode
  value: string
  className?: string
}

export function AccordionContent({ children, value, className }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error('AccordionContent must be used within Accordion')

  const isOpen = context.openItems.includes(value)

  if (!isOpen) return null

  return (
    <div
      className={cn(
        'pt-4 text-neutral-charcoal animate-slide-up',
        className
      )}
    >
      {children}
    </div>
  )
}