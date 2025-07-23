import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const daysInCollectionsVariants = cva('grid max-w-max place-items-center rounded-lg px-2 py-0.5 text-xs font-medium', {
  variants: {
    variant: {
      short: 'bg-[#FFF4C6] text-black', // 0-7 days
      medium: 'bg-[#D4BB5B] text-black', // 8-23 days
      long: 'bg-[#BB6651] text-white', // 24+ days
      default: 'bg-gray-200 text-black', // N/A or null case
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface DaysInCollectionPillProps extends VariantProps<typeof daysInCollectionsVariants> {
  value: number | null
}

const DaysInCollectionPill = ({ variant, value }: DaysInCollectionPillProps) => {
  return <div className={cn(daysInCollectionsVariants({ variant }))}>{value !== null ? value : 'N/A'}</div>
}

export { DaysInCollectionPill }
