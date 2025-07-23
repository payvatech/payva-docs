import { CustomerCollectionNote } from '@/modules/api/generated/graphql'

export const getCollectionNoteDisplayName = (note: CustomerCollectionNote): string => {
  switch (note) {
    case CustomerCollectionNote.Unresponsive:
      return 'Unresponsive'

    case CustomerCollectionNote.FinancialHardship:
      return 'Financial hardship'

    case CustomerCollectionNote.PersonalIssue:
      return 'Personal issue'

    case CustomerCollectionNote.MedicalIssue:
      return 'Medical issue'

    case CustomerCollectionNote.RequestedCancellation:
      return 'Requested cancellation'

    case CustomerCollectionNote.UnhappyWithPurchase:
      return 'Unhappy with purchase'

    case CustomerCollectionNote.DisputingPayment:
      return 'Disputing payment'

    case CustomerCollectionNote.ClaimingFraud:
      return 'Claiming fraud'

    default:
      return 'Unknown'
  }
}

export const collectionNotesFilterOptions = Object.values(CustomerCollectionNote).map((note) => ({
  label: getCollectionNoteDisplayName(note),
  value: note,
}))

export const getDaysInCollectionVariant = (days: number | null): 'short' | 'medium' | 'long' | 'default' => {
  if (days === null) {
    return 'default'
  }

  if (days >= 24) {
    return 'long'
  } else if (days >= 8) {
    return 'medium'
  } else if (days >= 0) {
    return 'short'
  }
  return 'default'
}
