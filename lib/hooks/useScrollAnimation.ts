import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  })
  
  return { ref, isInView }
}

export function useParallax(speed = 0.5) {
  const [offsetY, setOffsetY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])
  
  return offsetY
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const scrollProgress = (scrollPosition / totalHeight) * 100
      setProgress(Math.min(scrollProgress, 100))
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Calculate initial progress
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return progress
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return mousePosition
}