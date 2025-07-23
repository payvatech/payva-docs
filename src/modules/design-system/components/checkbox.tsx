import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { MdCheck } from 'react-icons/md'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:ring-ring peer size-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-payva-purple-950 data-[state=checked]:bg-payva-purple-950 data-[state=checked]:text-white dark:border-payva-purple-500 dark:data-[state=checked]:border-payva-purple-950 dark:data-[state=checked]:bg-payva-purple-950 dark:data-[state=checked]:text-payva-purple-50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('grid place-items-center text-current')}>
      <MdCheck className="size-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
