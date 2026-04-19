// Helper functions for content extraction
export function extractPageContent(data: any) {
  // Handle different content structures from Domain8 generator
  if (data?.content) {
    return data.content
  }
  if (data?.sections) {
    return data.sections
  }
  return data
}