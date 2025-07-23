import { formatAmount } from '@/lib/formatters'
import { cn } from '@/lib/utils'

type FormattedAmountProps = {
  amount: number | undefined
  alignRight?: boolean
}

const FormattedAmount = ({ amount, alignRight }: FormattedAmountProps) => {
  const formattedAmount = formatAmount(amount)

  return <span className={cn(alignRight ? 'inline-flex w-full justify-end pr-4' : '')}>{formattedAmount}</span>
}

export { FormattedAmount }
