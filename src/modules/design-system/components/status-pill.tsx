import { cva, type VariantProps } from 'class-variance-authority'

import { capitalizeWords } from '@/lib/formatters'
import { cn } from '@/lib/utils'

const statusPillVariants = cva('grid max-w-max place-items-center border rounded-xl py-1 px-2 text-xs font-medium', {
  variants: {
    variant: {
      success: 'bg-[#ccfbef] text-[#107569]',
      warning: 'bg-[#FFF3C6] text-[#b84d05]',
      danger: 'bg-[#FEE4E2] text-[#bb241a]',
      info: 'bg-[#0288d1] text-white',
      secondary: 'bg-[#ab47bc] text-white',
      neutral: 'bg-black text-[#f0f0f0]',
      lightGrey: 'bg-[#f0f0f0] text-black',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
})

interface StatusPillProps extends VariantProps<typeof statusPillVariants> {
  label: string | null | undefined
}

const StatusPill = ({ variant, label }: StatusPillProps) => {
  return (
    <div className={cn(statusPillVariants({ variant }))}>
      <span>{capitalizeWords(label as string)}</span>
    </div>
  )
}

export { StatusPill }
