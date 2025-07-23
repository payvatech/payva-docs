import { formatDate } from '@/lib/formatters'

type FormattedDateProps = {
  date?: string
  includeTime?: boolean
}

const FormattedDate = ({ date, includeTime }: FormattedDateProps) => {
  return date ? <span>{formatDate(date, includeTime)}</span> : <span>N/A</span>
}

export { FormattedDate }
