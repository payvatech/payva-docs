import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
    {children}
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport ref={ref} className={cn('size-full', className)} {...props} />
))
ScrollViewport.displayName = ScrollAreaPrimitive.Viewport.displayName

const Scrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'duration-[160ms] hover:bg-muted/80 flex touch-none select-none bg-muted p-0.5 transition-colors ease-out',
      orientation === 'vertical' ? 'h-full w-2.5' : 'h-2.5 w-full',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.Scrollbar>
))
Scrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName

const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Corner>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Corner ref={ref} className={cn('bg-muted', className)} {...props} />
))
ScrollAreaCorner.displayName = ScrollAreaPrimitive.Corner.displayName

export { ScrollArea, ScrollViewport, Scrollbar, ScrollAreaCorner }
