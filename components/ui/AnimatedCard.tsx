'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { featureCard } from '@/lib/utils/animations'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function AnimatedCard({ 
  children, 
  className,
  delay = 0,
  hover = true
}: AnimatedCardProps) {
  const { ref, isInView } = useScrollAnimation()
  
  return (
    <motion.div
      ref={ref}
      variants={featureCard}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      whileHover={hover ? "whileHover" : undefined}
      transition={{ delay }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6",
        "border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {children}
    </motion.div>
  )
}