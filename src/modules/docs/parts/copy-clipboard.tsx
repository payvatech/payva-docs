import React, { useRef, useState } from 'react'
import { ClipboardCheck, ClipboardPlus } from 'lucide-react'

const CopyToClipboard = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)
  const textAreaRef = useRef(null)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <div>
      <textarea
        ref={textAreaRef}
        value={text}
        style={{ position: 'absolute', left: '-9999px' }} // Keep off-screen
        readOnly
      />
      <ClipboardPlus />
      <ClipboardCheck />
      <button onClick={copyToClipboard}>{isCopied ? <ClipboardCheck /> : <ClipboardPlus />}</button>
    </div>
  )
}

export default CopyToClipboard
