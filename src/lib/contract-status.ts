import { MdAccountBalance, MdCreditCard, MdPendingActions } from 'react-icons/md'

import { ContractPaymentMethod, ContractStatus } from '@/modules/api/generated/graphql'

export const getContractStatusDisplayName = (status: ContractStatus): string => {
  switch (status) {
    case ContractStatus.InUnderwriting:
      return 'In Underwriting'

    case ContractStatus.CreditLocked:
      return 'Credit Locked'

    case ContractStatus.Active:
      return 'Active'

    case ContractStatus.Defaulted:
      return 'Defaulted'

    case ContractStatus.Paid:
      return 'Paid'

    case ContractStatus.FailedPayment:
      return 'Failed Payment'

    case ContractStatus.InLegal:
      return 'In Legal'

    case ContractStatus.ActiveModifiedPayment:
      return 'Active - Modified Payment'

    case ContractStatus.ApprovedPendingPayment:
      return 'Approved - Pending Payment'

    case ContractStatus.InCollections:
      return 'In Collections'

    case ContractStatus.Chargeback:
      return 'Chargeback'

    case ContractStatus.InCollectionsPendingPayment:
      return 'In Collections - Pending Payment'

    case ContractStatus.InCollectionsPausedPayment:
      return 'Collections - Payments Paused'

    case ContractStatus.Declined:
      return 'Declined'

    case ContractStatus.WriteOff:
      return 'Write Off'

    case ContractStatus.Canceled:
      return 'Canceled'

    case ContractStatus.AbandonedForm:
      return 'Abandoned Form'

    case ContractStatus.WentDark:
      return 'Went Dark'

    case ContractStatus.EarlyPayDiscount:
      return 'Early Pay Discount'

    case ContractStatus.Duplicate:
      return 'Duplicate'

    case ContractStatus.Unknown:
      return 'Unknown'

    default:
      return 'Unknown'
  }
}

export const getContractStatusVariant = (
  status: ContractStatus
): 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'neutral' | 'lightGrey' => {
  switch (status) {
    // Active
    case ContractStatus.Active:
    // Active - Modified Payment
    case ContractStatus.ActiveModifiedPayment:
    // Approved - Pending Payment
    case ContractStatus.ApprovedPendingPayment:
      return 'success'

    // Paid
    case ContractStatus.Paid:
      return 'info' // #0288d1

    // In Underwriting
    case ContractStatus.InUnderwriting:
    // Credit Locked
    case ContractStatus.CreditLocked:
      return 'secondary' // #ab47bc

    // In Collections
    case ContractStatus.InCollections:
    // In Collections - Pending Payment
    case ContractStatus.InCollectionsPendingPayment:
    // Collections - Payments Paused
    case ContractStatus.InCollectionsPausedPayment:
    // Unknown
    case ContractStatus.Unknown:
      return 'warning'

    // Defaulted
    case ContractStatus.Defaulted:
    // In Legal
    case ContractStatus.InLegal:
    // Chargeback
    case ContractStatus.Chargeback:
    // Failed Payment
    case ContractStatus.FailedPayment:
      return 'danger'

    // Duplicate
    case ContractStatus.Duplicate:
      return 'lightGrey' // #f0f0f0

    // Declined
    case ContractStatus.Declined:
    // Canceled
    case ContractStatus.Canceled:
    // Abandoned Form
    case ContractStatus.AbandonedForm:
    // Went Dark
    case ContractStatus.WentDark:
    // Write Off
    case ContractStatus.WriteOff:
    // Early Pay Discount
    case ContractStatus.EarlyPayDiscount:
      return 'neutral' // #000000

    default:
      return 'warning'
  }
}

export const getPaymentMethodDisplayName = (method: ContractPaymentMethod): string => {
  switch (method) {
    case ContractPaymentMethod.Ach:
      return 'ACH'

    case ContractPaymentMethod.Cc:
      return 'Card'

    case ContractPaymentMethod.Pending:
      return 'Pending'

    default:
      return 'Unknown'
  }
}

export const contractPaymentMethods = [
  {
    label: 'ACH',
    value: ContractPaymentMethod.Ach,
    icon: MdAccountBalance,
  },
  {
    label: 'Card',
    value: ContractPaymentMethod.Cc,
    icon: MdCreditCard,
  },
  {
    label: 'Pending',
    value: ContractPaymentMethod.Pending,
    icon: MdPendingActions,
  },
]

export const getDisplayValueForStatus = (
  status: ContractStatus,
  originalValue: string | null | undefined,
  fallbackValue = '-'
) => {
  return status === ContractStatus.Declined || status === ContractStatus.Duplicate ? fallbackValue : originalValue
}
