'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { staggerContainer, fadeInUp } from '@/lib/utils/animations'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimatedSection({ 
  children, 
  className,
  delay = 0,
  stagger = false
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation(0.2)
  
  return (
    <motion.section
      ref={ref}
      variants={stagger ? staggerContainer : fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay }}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  )
}