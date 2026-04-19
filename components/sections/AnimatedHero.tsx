'use client'

import { motion } from 'framer-motion'
import { Container, Button } from '@/components/ui'
import Link from 'next/link'
import { heroContent, heroItem } from '@/lib/utils/animations'
import { useParallax } from '@/lib/hooks/useScrollAnimation'

interface AnimatedHeroProps {
  headline: string
  subheadline?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundGradient?: string
  showParticles?: boolean
}

export function AnimatedHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundGradient = 'from-purple-50 to-white dark:from-gray-900 dark:to-gray-800',
  showParticles = false
}: AnimatedHeroProps) {
  const parallaxOffset = useParallax(0.3)
  
  return (
    <section className={`relative overflow-hidden bg-gradient-to-b ${backgroundGradient} py-24 md:py-32`}>
      {/* Animated background elements */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      )}
      
      <Container className="relative z-10">
        <motion.div
          variants={heroContent}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <motion.h1 
            variants={heroItem}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            {headline.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          {subheadline && (
            <motion.p 
              variants={heroItem}
              className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              {subheadline}
            </motion.p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <motion.div 
              variants={heroItem}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCTA && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" asChild>
                    <Link href={primaryCTA.href}>
                      {primaryCTA.text}
                    </Link>
                  </Button>
                </motion.div>
              )}
              {secondaryCTA && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="secondary" size="lg" asChild>
                    <Link href={secondaryCTA.href}>
                      {secondaryCTA.text}
                    </Link>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
      
      {/* Animated decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />
    </section>
  )
}