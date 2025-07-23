'use client'

import React from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeBlockProps = {
  language: string
  filename: string
  highlightLines?: number[]
} & (
  | {
      code: string
      tabs?: never
    }
  | {
      code?: never
      tabs: Array<{
        name: string
        code: string
        language?: string
        highlightLines?: number[]
      }>
    }
)

export const CodeBlock = ({ language, filename, code, highlightLines = [] }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    const textToCopy = code
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const activeCode = code
  const activeLanguage = language
  const activeHighlightLines = highlightLines

  return (
    <div className="relative w-full rounded-lg bg-[#190434] p-6 font-mono text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between pb-6">
          <div className="text-xs text-zinc-400">{filename}</div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 font-sans text-xs text-zinc-400 transition-colors hover:text-zinc-200"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={materialDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: 'transparent',
          fontSize: '0.875rem', // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber: number) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber) ? 'rgba(255,255,255,1)' : 'transparent',
            display: 'block',
            width: '100%',
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  )
}
