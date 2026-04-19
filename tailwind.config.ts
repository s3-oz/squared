import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A', // Slate gray
          dark: '#0A0F1F',
          light: '#1E293B',
        },
        secondary: {
          blue: '#0066CC',
          green: '#87A96B',
        },
        neutral: {
          charcoal: '#333333',
          gray: '#666666',
          light: '#E5E5E5',
          off: '#F8F8F8',
        },
        functional: {
          error: '#DC3545',
          success: '#28A745',
          info: '#17A2B8',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        hero: ['56px', '64px'],
        h1: ['40px', '48px'],
        h2: ['32px', '40px'],
        h3: ['24px', '32px'],
        h4: ['20px', '28px'],
        body: ['16px', '24px'],
        'body-large': ['18px', '28px'],
        small: ['14px', '20px'],
        micro: ['12px', '16px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
        pill: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.1)',
        medium: '0 4px 6px rgba(0,0,0,0.1)',
        large: '0 10px 20px rgba(0,0,0,0.15)',
        hover: '0 6px 12px rgba(0,0,0,0.15)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F172A 0%, #0066CC 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8F8F8 0%, #E5E5E5 100%)',
      },
    },
  },
  plugins: [],
}

export default config