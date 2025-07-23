import React from 'react'

interface IssueBannerProps {
  message: string
}

export const IssueBanner = ({ message }: IssueBannerProps) => {
  return <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800 shadow">⚠️ {message}</div>
}
