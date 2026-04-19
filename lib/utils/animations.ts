import { Variants } from 'framer-motion'

// Basic animations
export const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { opacity: 0, y: -20 }
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
}

// Stagger animations
export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}

// Directional slide animations
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up') => {
  const initialPosition = {
    left: { x: -60 },
    right: { x: 60 },
    up: { y: 60 },
    down: { y: -60 }
  }

  return {
    initial: { opacity: 0, ...initialPosition[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, ...initialPosition[direction] },
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

// Scale animations
export const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { scale: 0.9, opacity: 0 }
}

export const scaleUp: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: 'easeInOut' }
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: '0 0 25px rgba(147, 51, 234, 0.3)',
    transition: { duration: 0.3 }
  }
}

// Card animations
export const cardHover = {
  initial: { y: 0 },
  whileHover: { 
    y: -5,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

// Text animations
export const textReveal: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
    clipPath: 'inset(100% 0% 0% 0%)'
  },
  animate: { 
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Rotate animation
export const rotate360 = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

// Hero animations
export const heroContent: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export const heroItem: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

// Navbar animation
export const navbarSlide: Variants = {
  initial: { y: -100 },
  animate: { 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

// Feature card animations
export const featureCard: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  whileHover: {
    y: -5,
    boxShadow: '0 20px 40px rgba(147, 51, 234, 0.15)',
    transition: { duration: 0.3 }
  }
}

// Smooth spring animation
export const smoothSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1
}