import { toast } from 'sonner'

export const copyToClipboard = (text: string | null): void => {
  if (text) {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success('Copied to clipboard!')
      },
      (err) => {
        toast.error('Failed to copy text.')
        console.error('Could not copy text: ', err)
      }
    )
  }
}
