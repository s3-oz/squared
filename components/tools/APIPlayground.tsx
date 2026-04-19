'use client'

import { useState } from 'react'
import { Button, Select, Input, CodeBlock } from '@/components/ui'

interface APIPlaygroundProps {
  content: {
    endpoints: Array<{
      name: string
      method: string
      path: string
      description: string
      parameters?: Array<{
        name: string
        type: string
        required: boolean
        description: string
      }>
    }>
    defaultEndpoint?: string
  }
}

import { mockPlaygroundContent } from '@/lib/content/mock-data'

export function APIPlayground({ content }: APIPlaygroundProps) {
  // Use mock data as fallback
  const playgroundContent = {
    endpoints: content.endpoints?.length > 0 ? content.endpoints : mockPlaygroundContent.endpoints,
    defaultEndpoint: content.defaultEndpoint || mockPlaygroundContent.defaultEndpoint
  }
  const [selectedEndpoint, setSelectedEndpoint] = useState(
    playgroundContent.defaultEndpoint
  )
  const [parameters, setParameters] = useState<Record<string, string>>({})
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const currentEndpoint = playgroundContent.endpoints.find(
    (ep) => ep.name === selectedEndpoint
  )

  const handleParameterChange = (name: string, value: string) => {
    setParameters((prev) => ({ ...prev, [name]: value }))
  }

  const generateCurlCommand = () => {
    if (!currentEndpoint) return ''
    
    let url = `https://api.squareup.com${currentEndpoint.path}`
    const params = currentEndpoint.parameters || []
    
    // Replace path parameters
    params.forEach((param) => {
      if (url.includes(`:${param.name}`)) {
        url = url.replace(`:${param.name}`, parameters[param.name] || `{${param.name}}`)
      }
    })
    
    const queryParams = params
      .filter((p) => !currentEndpoint.path.includes(`:${p.name}`) && parameters[p.name])
      .map((p) => `${p.name}=${encodeURIComponent(parameters[p.name])}`)
      .join('&')
    
    if (queryParams && currentEndpoint.method === 'GET') {
      url += `?${queryParams}`
    }
    
    let curl = `curl -X ${currentEndpoint.method} '${url}' \\\n`
    curl += `  -H 'Square-Version: 2023-10-18' \\\n`
    curl += `  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \\\n`
    curl += `  -H 'Content-Type: application/json'`
    
    if (currentEndpoint.method !== 'GET' && queryParams) {
      const body = JSON.stringify(
        Object.fromEntries(
          params
            .filter((p) => !currentEndpoint.path.includes(`:${p.name}`) && parameters[p.name])
            .map((p) => [p.name, parameters[p.name]])
        ),
        null,
        2
      )
      curl += ` \\\n  -d '${body}'`
    }
    
    return curl
  }

  const handleTestAPI = async () => {
    setLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      setResponse(JSON.stringify({
        status: 'success',
        data: {
          message: 'This is a simulated response. In production, this would make a real API call.',
          endpoint: currentEndpoint?.name,
          parameters: parameters
        }
      }, null, 2))
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Panel - Configuration */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Endpoint
            </label>
            <Select
              value={selectedEndpoint}
              onChange={(e) => setSelectedEndpoint(e.target.value)}
              placeholder="Choose an endpoint"
              options={playgroundContent.endpoints.map((endpoint) => ({
                value: endpoint.name,
                label: `${endpoint.method} ${endpoint.name}`
              }))}
            />
          </div>

          {currentEndpoint && (
            <>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {currentEndpoint.description}
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {currentEndpoint.method}
                  </span>
                  <code className="ml-2 text-sm">{currentEndpoint.path}</code>
                </div>
              </div>

              {currentEndpoint.parameters && currentEndpoint.parameters.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-medium">Parameters</h3>
                  {currentEndpoint.parameters.map((param) => (
                    <div key={param.name}>
                      <label className="block text-sm font-medium mb-1">
                        {param.name}
                        {param.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <Input
                        type="text"
                        placeholder={param.description}
                        value={parameters[param.name] || ''}
                        onChange={(e) => handleParameterChange(param.name, e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">{param.type}</p>
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={handleTestAPI}
                disabled={loading}
                className="w-full"
              >
                {loading ? 'Testing...' : 'Test API'}
              </Button>
            </>
          )}
        </div>

        {/* Right Panel - Code & Response */}
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">cURL Command</h3>
            <CodeBlock language="bash">
              {generateCurlCommand()}
            </CodeBlock>
          </div>

          {(response || error) && (
            <div>
              <h3 className="font-medium mb-2">Response</h3>
              {error ? (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                </div>
              ) : (
                <CodeBlock language="json">
                  {response}
                </CodeBlock>
              )}
            </div>
          )}

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Note:</strong> This is a demo environment. To make real API calls, 
              you'll need to use your own Square access token and implement server-side 
              API calls for security.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}