import { useEffect, useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

import { cn } from '@/lib/utils'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

type ExpandableCardProps = {
  title: string
  defaultOpen?: boolean | 'responsive'
  preview?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const MOBILE_BREAKPOINT = 768

const ExpandableCard = ({ title, defaultOpen = false, preview, children, className }: ExpandableCardProps) => {
  const [open, setOpen] = useState(defaultOpen === 'responsive' ? window.innerWidth >= MOBILE_BREAKPOINT : defaultOpen)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)

  useEffect(() => {
    if (defaultOpen !== 'responsive') return
    const handleResize = () => {
      const width = window.innerWidth
      setOpen(width >= MOBILE_BREAKPOINT)
      setIsMobile(width < MOBILE_BREAKPOINT)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [defaultOpen])

  const headerClass = cn(
    'flex items-center justify-between px-4',
    isMobile && !open ? 'py-2' : 'border-b pb-2 pt-3',
    'cursor-pointer select-none'
  )

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className={cn('grid gap-2 rounded-base bg-secondary shadow-primary', className)}>
        <CollapsibleTrigger asChild>
          <div className={headerClass}>
            <h3 className="text-[15px] font-medium">{title}</h3>
            <MdExpandMore className={cn('size-5 transition-transform duration-200', open && 'rotate-180')} />
          </div>
        </CollapsibleTrigger>
        {!open && !isMobile && preview && <div className="px-4 pb-4 pt-1">{preview}</div>}
        {open && (
          <CollapsibleContent className="overflow-hidden">
            <div
              data-state={open ? 'open' : 'closed'}
              className={cn('grid gap-2 px-4 pb-4 pt-1', open ? 'animate-my-slide-down' : 'animate-my-slide-up')}
            >
              {preview}
              {children}
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  )
}

export { ExpandableCard }
