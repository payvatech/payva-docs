import { DocumentType } from '@/modules/api/generated/graphql'

export const getContractDocumentDispayName = (documentType: DocumentType): string => {
  switch (documentType) {
    case DocumentType.MerchantAgreement:
      return 'Merchant Agreement'

    case DocumentType.ServiceAgreement:
      return 'Servicing Agreement'

    default:
      return 'Unknown'
  }
}
