import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
}

const Input = React.forwardRef<HTMLInputElement, React.PropsWithChildren<InputProps>>(
  ({ className, type = 'text', icon, children, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'border-input ring-offset-background placeholder:text-muted-foreground flex h-12 w-full rounded-md border bg-nuetral-50 px-3 py-2 text-payva-purple-950 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-payva-purple-50',
            icon ? 'pl-10' : '',
            className
          )}
          ref={ref}
          {...props}
        />
        {children}
        {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-brand-primary">{icon}</span>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
