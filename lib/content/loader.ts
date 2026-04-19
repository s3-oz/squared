// Content loader for integrating with Domain8 content generation
import { PageContent, ComponentCopy } from '@/lib/types/content'
import path from 'path'
import { promises as fs } from 'fs'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'pages', `${slug}.json`)
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Failed to load content for ${slug}:`, error)
    return null
  }
}

export async function getAllPages(): Promise<string[]> {
  try {
    const pagesDir = path.join(CONTENT_DIR, 'pages')
    const files = await fs.readdir(pagesDir)
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
  } catch (error) {
    console.error('Failed to get all pages:', error)
    return []
  }
}

export async function getComponentCopy(): Promise<ComponentCopy | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'component-copy.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Failed to load component copy:', error)
    return null
  }
}

export async function getSEOContent(): Promise<any> {
  try {
    const filePath = path.join(CONTENT_DIR, 'seo-content.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Failed to load SEO content:', error)
    return null
  }
}

// Helper function to get content by type
export async function getContentByType(type: string): Promise<any[]> {
  try {
    const pages = await getAllPages()
    const contentPromises = pages.map(page => getPageContent(page))
    const allContent = await Promise.all(contentPromises)
    
    return allContent.filter(content => 
      content && content.slug && content.slug.startsWith(type)
    ) as any[]
  } catch (error) {
    console.error(`Failed to get content by type ${type}:`, error)
    return []
  }
}

// Cache mechanism for production
const contentCache = new Map<string, any>()

export async function getCachedContent<T>(
  key: string,
  loader: () => Promise<T>
): Promise<T> {
  if (process.env.NODE_ENV === 'production' && contentCache.has(key)) {
    return contentCache.get(key)
  }
  
  const content = await loader()
  
  if (process.env.NODE_ENV === 'production') {
    contentCache.set(key, content)
  }
  
  return content
}