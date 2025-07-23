import { MdAccountBalance, MdCreditCard } from 'react-icons/md'

import { PaymentMethod, PaymentStatus } from '@/modules/api/generated/graphql'

export const getPaymentStatusDisplayName = (status: PaymentStatus): string => {
  switch (status) {
    case PaymentStatus.Cleared:
      return 'Cleared'

    case PaymentStatus.Pending:
      return 'Pending'

    case PaymentStatus.FailedPayment:
      return 'Failed'

    case PaymentStatus.Unknown:
      return 'Unknown'

    default:
      return 'Unknown'
  }
}

export const getPaymentStatusVariant = (status: PaymentStatus): 'success' | 'warning' | 'danger' => {
  switch (status) {
    case PaymentStatus.Cleared:
      return 'success'

    case PaymentStatus.Pending:
    case PaymentStatus.Unknown:
      return 'warning'

    case PaymentStatus.FailedPayment:
      return 'danger'

    default:
      return 'warning'
  }
}

export const paymentMethods = [
  {
    label: 'ACH',
    value: PaymentMethod.Ach,
    icon: MdAccountBalance,
  },
  {
    label: 'Card',
    value: PaymentMethod.Cc,
    icon: MdCreditCard,
  },
]

export const getPaymentMethodDisplayName = (method: PaymentMethod): string => {
  switch (method) {
    case PaymentMethod.Ach:
      return 'ACH'

    case PaymentMethod.Cc:
      return 'Card'

    default:
      return 'Unknown'
  }
}

export const getCustomerPaymentStatusDisplayName = (status: PaymentStatus): string => {
  switch (status) {
    case PaymentStatus.Cleared:
      return 'Paid'

    case PaymentStatus.Pending:
      return 'Pending'

    case PaymentStatus.FailedPayment:
      return 'Failed'

    case PaymentStatus.Unknown:
      return 'Unknown'

    default:
      return 'Unknown'
  }
}

export const statuses = [
  { label: 'Refunded', value: 'REFUNDED' },
  ...Object.values(PaymentStatus).map((status) => ({
    label: getPaymentStatusDisplayName(status),
    value: status,
  })),
]

export const customerStatuses = [
  { label: 'Refunded', value: 'REFUNDED' },
  ...Object.values(PaymentStatus).map((status) => ({
    label: getCustomerPaymentStatusDisplayName(status),
    value: status,
  })),
]

export { PaymentMethod }
