import { PaymentPlanType } from '@/modules/api/generated/graphql'

import { splitAndCapitalize } from './formatters'

const planTypesOrder = [PaymentPlanType.Funding, PaymentPlanType.Servicing, PaymentPlanType.Pending]

export const planTypesFilterOptions = [
  ...Object.entries(PaymentPlanType)
    .map(([key, value]) => ({
      label: splitAndCapitalize(key),
      value: value,
    }))
    .sort((a, b) => planTypesOrder.indexOf(a.value) - planTypesOrder.indexOf(b.value)),
  { label: '-', value: '-' },
]
