import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva('font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-2xs text-payva-purple-950 dark:text-payva-purple-100',
      // You can add more sizes if needed:
      // lg: 'text-lg',
      // xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ size, className }))} {...props} />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
