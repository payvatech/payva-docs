import React from 'react'

interface InfoMessageProps {
  message: string
  icon?: React.ReactNode
  className?: string
}

const InfoMessage: React.FC<InfoMessageProps> = ({ message, icon, className }) => {
  return (
    <div className={`flex items-center gap-3 rounded-md border-2 bg-info p-4 ${className ?? 'border-info'}`}>
      {icon && <span className="shrink-0 text-[2em] text-[--border-info]">{icon}</span>}
      <p className="text-info">{message}</p>
    </div>
  )
}

export { InfoMessage }
