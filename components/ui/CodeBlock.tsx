import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  language?: string
  filename?: string
}

export function CodeBlock({ 
  children, 
  className, 
  language = 'typescript',
  filename,
  ...props 
}: CodeBlockProps) {
  return (
    <div className="relative rounded-lg bg-primary overflow-hidden">
      {filename && (
        <div className="px-4 py-2 bg-black/20 text-neutral-off text-sm font-mono border-b border-white/10">
          {filename}
        </div>
      )}
      <pre
        className={cn(
          'p-4 overflow-x-auto text-sm font-mono text-neutral-off',
          className
        )}
        {...props}
      >
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  )
}