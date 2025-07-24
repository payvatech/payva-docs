import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: Date; output: Date }
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> }
}

/** Abandoned Checkout */
export type AbandonedCheckout = {
  __typename?: 'AbandonedCheckout'
  /** Id for checkout */
  checkoutId: Scalars['ID']['output']
  /** Creation date of the abandoned checkout */
  createdAt?: Maybe<Scalars['DateTime']['output']>
  /** Last item the customer interacted with. */
  lastInteraction: Scalars['String']['output']
  /** Reason for leaving the checkout */
  leaveReason: Scalars['String']['output']
  /** Step the customer left on. */
  leaveStep: Scalars['String']['output']
  /** Time the user spent in the checkout flow. */
  timeInCheckout: Scalars['Float']['output']
}

export type AcceptInviteInput = {
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  token: Scalars['String']['input']
}

/** Address */
export type Address = {
  __typename?: 'Address'
  /** First line of the address */
  addressLine1?: Maybe<Scalars['String']['output']>
  /** Second line of the address */
  addressLine2?: Maybe<Scalars['String']['output']>
  /** Third line of the address */
  addressLine3?: Maybe<Scalars['String']['output']>
  /** City */
  city?: Maybe<Scalars['String']['output']>
  /** Country */
  country?: Maybe<Scalars['String']['output']>
  /** US state shortcut - ex. FL */
  state?: Maybe<Scalars['String']['output']>
  /** US zip code */
  zip?: Maybe<Scalars['String']['output']>
}

export type AddressInput = {
  addressLine1: Scalars['String']['input']
  addressLine2?: InputMaybe<Scalars['String']['input']>
  addressLine3?: InputMaybe<Scalars['String']['input']>
  city: Scalars['String']['input']
  country?: InputMaybe<Scalars['String']['input']>
  state: Scalars['String']['input']
  zip: Scalars['String']['input']
}

export type AdvanceAssignments = {
  __typename?: 'AdvanceAssignments'
  merchant: Scalars['String']['output']
  platform: Scalars['String']['output']
}

export type ApplicationData = {
  __typename?: 'ApplicationData'
  address?: Maybe<Scalars['String']['output']>
  /** Bank statement count */
  bankStatementCount?: Maybe<Scalars['String']['output']>
  business_dba?: Maybe<Scalars['String']['output']>
  business_email?: Maybe<Scalars['String']['output']>
  business_name?: Maybe<Scalars['String']['output']>
  business_phone?: Maybe<Scalars['String']['output']>
  business_start_year?: Maybe<Scalars['String']['output']>
  business_tax_id?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  contact_phone?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  /** Credit Card statement count */
  creditCardProcessingStatementCount?: Maybe<Scalars['String']['output']>
  dob?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  /** Has given banking info */
  hasBankingInfo?: Maybe<Scalars['Boolean']['output']>
  /** Has given credit consent */
  hasCreditConsent?: Maybe<Scalars['Boolean']['output']>
  industry?: Maybe<Scalars['String']['output']>
  last_name?: Maybe<Scalars['String']['output']>
  /** Application status */
  merchantStatus?: Maybe<MerchantStatus>
  offer_description?: Maybe<Scalars['String']['output']>
  owner_drivers_license?: Maybe<Scalars['String']['output']>
  owner_email?: Maybe<Scalars['String']['output']>
  owner_ownership_percent?: Maybe<Scalars['String']['output']>
  owners?: Maybe<Array<Owner>>
  partner_id: Scalars['String']['output']
  /** Partner payment method */
  paymentMethodInfo?: Maybe<PaymentMethodInfo>
  referred_by?: Maybe<Scalars['String']['output']>
  social_security_number?: Maybe<Scalars['String']['output']>
  stage_id?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  status_id?: Maybe<Scalars['String']['output']>
  website?: Maybe<Scalars['String']['output']>
  zip?: Maybe<Scalars['String']['output']>
}

export type ApplicationDataInput = {
  address?: InputMaybe<Scalars['String']['input']>
  /** Bank statement count */
  bankStatementCount?: InputMaybe<Scalars['String']['input']>
  business_dba?: InputMaybe<Scalars['String']['input']>
  business_email?: InputMaybe<Scalars['String']['input']>
  business_name?: InputMaybe<Scalars['String']['input']>
  business_phone?: InputMaybe<Scalars['String']['input']>
  business_start_year?: InputMaybe<Scalars['String']['input']>
  business_tax_id?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  contact_phone?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  /** Credit Card statement count */
  creditCardProcessingStatementCount?: InputMaybe<Scalars['String']['input']>
  dob?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  /** Has given banking info */
  hasBankingInfo?: InputMaybe<Scalars['Boolean']['input']>
  /** Has given credit consent */
  hasCreditConsent?: InputMaybe<Scalars['Boolean']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  offer_description?: InputMaybe<Scalars['String']['input']>
  owner_drivers_license?: InputMaybe<Scalars['String']['input']>
  owner_email?: InputMaybe<Scalars['String']['input']>
  owner_ownership_percent?: InputMaybe<Scalars['String']['input']>
  owners?: InputMaybe<Array<OwnerInput>>
  partner_id: Scalars['String']['input']
  referred_by?: InputMaybe<Scalars['String']['input']>
  social_security_number?: InputMaybe<Scalars['String']['input']>
  stage_id?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  status_id?: InputMaybe<Scalars['String']['input']>
  website?: InputMaybe<Scalars['String']['input']>
  zip?: InputMaybe<Scalars['String']['input']>
}

/** An authenticated user */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult'
  token: Scalars['String']['output']
  user: User
}

export enum BankAccountType {
  Checking = 'CHECKING',
  Savings = 'SAVINGS',
  Unknown = 'UNKNOWN',
}

/** The placement where the banner should be displayed */
export enum BannerPlacement {
  CustomerPortal = 'CUSTOMER_PORTAL',
  MerchantPortal = 'MERCHANT_PORTAL',
  SignInPage = 'SIGN_IN_PAGE',
}

export type BillingAddressInput = {
  city: Scalars['String']['input']
  country: Scalars['String']['input']
  state: Scalars['String']['input']
  street: Scalars['String']['input']
  zipCode: Scalars['String']['input']
}

export type CancelContractInput = {
  contractId: Scalars['Float']['input']
  customerId: Scalars['Float']['input']
  type: CancelType
}

export type CancelContractResponse = {
  __typename?: 'CancelContractResponse'
  message?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
  updatedContract?: Maybe<Contract>
}

export enum CancelType {
  Cancel = 'CANCEL',
  Refund = 'REFUND',
}

export type CardPaymentConsentDataInput = {
  cardNumber: Scalars['String']['input']
  cardholder: Scalars['String']['input']
  expiryDate: Scalars['String']['input']
  securityCode: Scalars['String']['input']
}

export type CentrexDocument = {
  __typename?: 'CentrexDocument'
  created_at?: Maybe<Scalars['String']['output']>
  created_by?: Maybe<User>
  description?: Maybe<Scalars['String']['output']>
  doc_id?: Maybe<Scalars['String']['output']>
  doc_type?: Maybe<Scalars['String']['output']>
  download?: Maybe<Scalars['String']['output']>
  file_content?: Maybe<Scalars['String']['output']>
  file_name?: Maybe<Scalars['String']['output']>
}

/** Checkout */
export type Checkout = {
  __typename?: 'Checkout'
  /** Amount Before Taxes */
  amount: Scalars['String']['output']
  /** Checkout url for customer */
  checkoutUrl: Scalars['String']['output']
  /** Status of the credit check */
  creditStatus?: Maybe<CheckoutCreditStatus>
  /** Reason for denial */
  creditStatusReason?: Maybe<CreditStatusReason>
  id: Scalars['ID']['output']
  /** Merchant ID */
  merchantId: Scalars['ID']['output']
  /** Plans that the user was given */
  plans?: Maybe<Scalars['JSON']['output']>
  /** Product ID */
  platformId: Scalars['ID']['output']
  /** Order ID given by platform */
  platformOrderId: Scalars['String']['output']
  /** We want to see the products at time of init checkout */
  products?: Maybe<Scalars['JSON']['output']>
  /** Where do we redirect back to */
  redirectUrl: Scalars['String']['output']
  /** Sales Tax on Order */
  salesTax: Scalars['String']['output']
  /** Plan that the customer selected */
  selectedPlan?: Maybe<Scalars['String']['output']>
  /** Order Status Enum */
  status: OrderStatus
  /** Tier of approved plan */
  tier?: Maybe<Scalars['String']['output']>
  /** User ID */
  userId?: Maybe<Scalars['ID']['output']>
}

export enum CheckoutCreditStatus {
  Approved = 'APPROVED',
  Declined = 'DECLINED',
  Failed = 'FAILED',
}

export type CheckoutPlanModel = {
  __typename?: 'CheckoutPlanModel'
  invoiceAmount: Scalars['String']['output']
  paymentAmount: Scalars['String']['output']
  paymentFrequency: Scalars['String']['output']
  planId: Scalars['String']['output']
  planName: Scalars['String']['output']
  processingFee: Scalars['String']['output']
  sellRate: Scalars['String']['output']
  taxAmount: Scalars['String']['output']
  totalAmount: Scalars['String']['output']
  totalAmountWithTaxAndFees: Scalars['String']['output']
  totalPayments: Scalars['String']['output']
}

export type CommonCustomerDataInput = {
  address: Scalars['String']['input']
  applicationUrl: Scalars['String']['input']
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  ip: Scalars['String']['input']
  lastName: Scalars['String']['input']
}

export type CompleteCheckoutArgs = {
  cardDetails: CreditCardDetailsInput
  /** ID of the checkout */
  checkoutId: Scalars['ID']['input']
  selectedPlan: Scalars['String']['input']
}

export type CompleteCheckoutResponse = {
  __typename?: 'CompleteCheckoutResponse'
  contract: CreateCentrexAdvanceData
  message: Scalars['String']['output']
}

export type ContactNote = {
  __typename?: 'ContactNote'
  content: Scalars['String']['output']
  noteCreatedDate: Scalars['String']['output']
  noteId: Scalars['String']['output']
  noteType: Scalars['Int']['output']
}

export type Contract = {
  __typename?: 'Contract'
  /** Total amount paid so far, incorporating sell rate */
  amountPaid: Scalars['Float']['output']
  /** Amount paid in one payment */
  amountPerPeriod: Scalars['Float']['output']
  /** Amount remaining */
  amountRemaining: Scalars['Float']['output']
  /** Total amount to repay, after incorporating sell rate */
  amountToRepay: Scalars['Float']['output']
  /** Amount that the contract is signed for - invoice amount */
  amountTotal: Scalars['Float']['output']
  /** Centrex advance ID */
  centrexId?: Maybe<Scalars['Float']['output']>
  checkout?: Maybe<Checkout>
  /** Id for checkout */
  checkoutId?: Maybe<Scalars['ID']['output']>
  /** External order id from the platform */
  checkoutPlatformOrderId?: Maybe<Scalars['String']['output']>
  /** Date of the most recent Failed Payment */
  collectionsBegan?: Maybe<Scalars['String']['output']>
  /** Date of the contract sign-in */
  contractDate?: Maybe<Scalars['String']['output']>
  /** Credit insights - Reason for underwriting decision. */
  creditInsights?: Maybe<Scalars['String']['output']>
  customer: Customer
  customerId?: Maybe<Scalars['Float']['output']>
  customerTier?: Maybe<CustomerTierType>
  /** Number of days since collections began */
  daysInCollections?: Maybe<Scalars['Float']['output']>
  /** Documents associated with this contract */
  documents: Array<ContractDocument>
  frequency: ContractPaymentFrequency
  id: Scalars['ID']['output']
  /** Lets us know if customer was notified of the new contract */
  merchantWebhookSent: Scalars['Boolean']['output']
  partner: Partner
  partnerId: Scalars['Float']['output']
  partnerLevel?: Maybe<PartnerLevelType>
  paymentMethod: ContractPaymentMethod
  /** Total number payments to repay this contract */
  paymentsMade: Scalars['Float']['output']
  /** How many payments were made on this contract */
  paymentsTotal?: Maybe<Scalars['Float']['output']>
  /** Info about payouts to partner */
  payoutInfo: PayoutInfo
  planType: PaymentPlanType
  /** Lets us know if customer was notified of the new contract */
  platformWebhookSent: Scalars['Boolean']['output']
  productCreatedBy?: Maybe<User>
  productCreatedByDisplayName?: Maybe<Scalars['String']['output']>
  /** Name of the product */
  productName?: Maybe<Scalars['String']['output']>
  productOption?: Maybe<ProductOption>
  /** Option id for the product */
  productOptionOptionId?: Maybe<Scalars['Float']['output']>
  /** Id for the product */
  productOptionProductId?: Maybe<Scalars['Float']['output']>
  /** Remaining balance on the contract */
  remainingBalance: Scalars['Float']['output']
  /** Percentage for splitting into multiple payments (1 + percentage) */
  sellRate: Scalars['Float']['output']
  status: ContractStatus
  transactions: TransactionsByType
}

export type ContractDocument = {
  __typename?: 'ContractDocument'
  /** Type of the document (e.g., Merchant Agreement, Service Agreement) */
  type: DocumentType
  /** UUID of the document */
  uuid: Scalars['String']['output']
}

export type ContractEdge = {
  __typename?: 'ContractEdge'
  cursor: Scalars['ID']['output']
  node: Contract
}

export enum ContractPaymentFrequency {
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Unknown = 'UNKNOWN',
  Weekly = 'WEEKLY',
  Workday = 'WORKDAY',
}

export enum ContractPaymentMethod {
  Ach = 'ACH',
  Cc = 'CC',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN',
}

export enum ContractStatus {
  AbandonedForm = 'ABANDONED_FORM',
  Active = 'ACTIVE',
  ActiveModifiedPayment = 'ACTIVE_MODIFIED_PAYMENT',
  ApprovedPendingPayment = 'APPROVED_PENDING_PAYMENT',
  Canceled = 'CANCELED',
  Chargeback = 'CHARGEBACK',
  CreditLocked = 'CREDIT_LOCKED',
  Declined = 'DECLINED',
  Defaulted = 'DEFAULTED',
  Duplicate = 'DUPLICATE',
  EarlyPayDiscount = 'EARLY_PAY_DISCOUNT',
  FailedPayment = 'FAILED_PAYMENT',
  InCollections = 'IN_COLLECTIONS',
  InCollectionsPausedPayment = 'IN_COLLECTIONS_PAUSED_PAYMENT',
  InCollectionsPendingPayment = 'IN_COLLECTIONS_PENDING_PAYMENT',
  InLegal = 'IN_LEGAL',
  InUnderwriting = 'IN_UNDERWRITING',
  Paid = 'PAID',
  RequestingCancellation = 'REQUESTING_CANCELLATION',
  Unknown = 'UNKNOWN',
  WentDark = 'WENT_DARK',
  WriteOff = 'WRITE_OFF',
}

export type CreateAbandonedCheckoutInput = {
  checkoutId: Scalars['ID']['input']
  createdAt: Scalars['DateTime']['input']
  lastInteraction: Scalars['String']['input']
  leaveReason: Scalars['String']['input']
  leaveStep: Scalars['String']['input']
  timeInCheckout: Scalars['Float']['input']
}

export type CreateCentrexAdvanceData = {
  __typename?: 'CreateCentrexAdvanceData'
  advance_assignments: AdvanceAssignments
  contact_id?: Maybe<Scalars['String']['output']>
  customs: Customs
  funding_info: FundingInfo
  participation: Array<Participation>
  pricing: Pricing
}

export type CreateCheckoutArgs = {
  /** Product Option Id */
  legacyLink?: InputMaybe<Scalars['String']['input']>
  /** Product Id */
  productId: Scalars['String']['input']
  /** Product Option Id */
  productOptionId: Scalars['String']['input']
}

export type CreateInviteInput = {
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  lastName: Scalars['String']['input']
  partnerId: Scalars['Int']['input']
  role: UserRole
  subRoleId?: InputMaybe<Scalars['Int']['input']>
}

/** Phone, password, and optionally email for new customer account */
export type CreateNewCustomerLoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  phone: Scalars['String']['input']
}

/** Input for creating a one-time payment */
export type CreateOneTimePaymentInput = {
  amount: Scalars['Float']['input']
  cardDetails: CreditCardInput
  contractId: Scalars['Float']['input']
  customerId: Scalars['Float']['input']
  saveForFuturePayments: Scalars['Boolean']['input']
}

export type CreateOneTimePaymentResponse = {
  __typename?: 'CreateOneTimePaymentResponse'
  message?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type CreatePartnerSubRoleInput = {
  /** Name of the sub-role */
  name: Scalars['String']['input']
  /** ID of the partner */
  partnerId: Scalars['Int']['input']
}

export type CreditCardDetailsInput = {
  billingAddress: CreditCheckAddressInput
  cardExpiryDate: Scalars['String']['input']
  cardNumber: Scalars['String']['input']
  cardholderFirstName: Scalars['String']['input']
  cardholderLastName: Scalars['String']['input']
  cvv: Scalars['String']['input']
}

export type CreditCardInput = {
  billingAddress: BillingAddressInput
  cardExpiryDate: Scalars['String']['input']
  cardNumber: Scalars['String']['input']
  cardholderFirstName: Scalars['String']['input']
  cardholderLastName: Scalars['String']['input']
  consent: Scalars['Boolean']['input']
  cvv: Scalars['String']['input']
}

export type CreditCheckAddressInput = {
  address: Scalars['String']['input']
  city: Scalars['String']['input']
  country: Scalars['String']['input']
  state: Scalars['String']['input']
  zipcode: Scalars['String']['input']
}

export type CreditCheckArgs = {
  address1: Scalars['String']['input']
  /** ID of the checkout */
  checkoutId: Scalars['ID']['input']
  city: Scalars['String']['input']
  /** Customers SSN */
  ssn: Scalars['String']['input']
  state: Scalars['String']['input']
  zip: Scalars['String']['input']
}

export type CreditCheckResponse = {
  __typename?: 'CreditCheckResponse'
  /** ID of the checkout */
  checkout: Checkout
  /** this will determin whether or not the user is approved */
  oscilarResponse?: Maybe<OscilarResponse>
  plans?: Maybe<Array<CheckoutPlanModel>>
  salesTax?: Maybe<Scalars['String']['output']>
}

export type CreditReportCustomerDataInput = {
  address: Scalars['String']['input']
  applicationUrl: Scalars['String']['input']
  dateOfBirth: Scalars['String']['input']
  email: Scalars['String']['input']
  firstName: Scalars['String']['input']
  ip: Scalars['String']['input']
  last4ssn: Scalars['String']['input']
  lastName: Scalars['String']['input']
  phoneNumber: Scalars['String']['input']
}

export enum CreditStatusReason {
  CreditScoreTooLow = 'CREDIT_SCORE_TOO_LOW',
  IsFrozen = 'IS_FROZEN',
  IsLocked = 'IS_LOCKED',
  NoCreditFile = 'NO_CREDIT_FILE',
}

/** Customer information */
export type Customer = {
  __typename?: 'Customer'
  /** Whether the customer has been sent to Aloware */
  addedToAloware?: Maybe<Scalars['Boolean']['output']>
  /** Customers address */
  address?: Maybe<Address>
  billingAddress?: Maybe<Address>
  /** Centrex Contact ID */
  centrexId?: Maybe<Scalars['Float']['output']>
  /** Number of collection attempts for contact in Centrex */
  collectionAttempts: Scalars['Float']['output']
  /** Collection notes for contact in Centrex */
  collectionNotes?: Maybe<Array<CustomerCollectionNote>>
  /** Contracts associated with the customer */
  contracts?: Maybe<PagedContracts>
  /** Date of birth */
  dob?: Maybe<Scalars['String']['output']>
  email: Scalars['String']['output']
  firstName: Scalars['String']['output']
  /** Customer ID */
  id: Scalars['Float']['output']
  /** Last credit check data */
  lastCreditCheck?: Maybe<Scalars['DateTime']['output']>
  lastName: Scalars['String']['output']
  monthlyCreditChecks?: Maybe<Scalars['Float']['output']>
  /** Customers bank account (only if customer has ACH payment contract) */
  paymentMethodInfo?: Maybe<PaymentMethodInfo>
  /** Customers phone number */
  phoneNumber?: Maybe<Scalars['String']['output']>
  /** Customers phone number extension */
  phoneNumberExtension?: Maybe<Scalars['String']['output']>
  /** customers last known tier */
  tier?: Maybe<Scalars['String']['output']>
}

/** Customer information */
export type CustomerContractsArgs = {
  pagination: PaginationInput
}

export type CustomerBanking = {
  __typename?: 'CustomerBanking'
  /** Confirm modification of customer banking information via Plaid */
  confirm: Customer
  /** Initialize banking data management via Plaid */
  init: InitCustomerBankingEntity
}

export type CustomerBankingConfirmArgs = {
  customerId: Scalars['Float']['input']
  token: Scalars['String']['input']
}

export type CustomerBankingInitArgs = {
  id: Scalars['Float']['input']
}

export enum CustomerCollectionNote {
  ClaimingFraud = 'CLAIMING_FRAUD',
  DisputingPayment = 'DISPUTING_PAYMENT',
  FinancialHardship = 'FINANCIAL_HARDSHIP',
  MedicalIssue = 'MEDICAL_ISSUE',
  PersonalIssue = 'PERSONAL_ISSUE',
  RequestedCancellation = 'REQUESTED_CANCELLATION',
  UnhappyWithPurchase = 'UNHAPPY_WITH_PURCHASE',
  Unresponsive = 'UNRESPONSIVE',
}

export type CustomerDetailsInput = {
  /** Email of the customer */
  email: Scalars['String']['input']
  /** First name of the customer */
  firstName: Scalars['String']['input']
  /** Last name of the customer */
  lastName: Scalars['String']['input']
}

export type CustomerEdge = {
  __typename?: 'CustomerEdge'
  cursor: Scalars['ID']['output']
  node: Customer
}

export enum CustomerTierType {
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO',
}

export type Customs = {
  __typename?: 'Customs'
  CC_PROCESSING_CREDENTIALS: Scalars['String']['output']
  PAYMENTS_START_DATE: Scalars['String']['output']
}

export enum DocumentType {
  MerchantAgreement = 'MERCHANT_AGREEMENT',
  ServiceAgreement = 'SERVICE_AGREEMENT',
}

export enum DownpaymentAmount {
  Deposit = 'DEPOSIT',
  Unknown = 'UNKNOWN',
}

/** A single effective permission (role default + any override) */
export type EffectivePermission = {
  __typename?: 'EffectivePermission'
  /** Allowed or not */
  allowed: Scalars['Boolean']['output']
  /** The permission key */
  permissionKey: Scalars['String']['output']
}

export type FundingDetails = {
  __typename?: 'FundingDetails'
  contract_date: Scalars['String']['output']
  contract_number: Scalars['String']['output']
  funding_date: Scalars['String']['output']
  wire_number: Scalars['String']['output']
}

export type FundingInfo = {
  __typename?: 'FundingInfo'
  funded: Scalars['Boolean']['output']
  funding_details: FundingDetails
}

export type GetCheckoutResponse = {
  __typename?: 'GetCheckoutResponse'
  /** The checkout */
  checkout?: Maybe<Checkout>
  /** The customer associated with the user and the customer */
  customer?: Maybe<Customer>
  /** The Partner associated with the user and the Partner */
  merchant?: Maybe<Partner>
  /** The Platform associated with the user and the Platform */
  platform?: Maybe<Platform>
  /** User associated with the checkout */
  user?: Maybe<User>
}

/** Payouts to partner grouped by date */
export type GroupedPayout = {
  __typename?: 'GroupedPayout'
  /** Date when payouts where cleared */
  clearedAt: Scalars['String']['output']
  /** Total amount paid out on this date */
  totalAmount: Scalars['Float']['output']
  /** Date when payouts where cleared */
  transactions: Array<Transaction>
}

export type InitCheckoutArgs = {
  /** Total value of cart */
  amount: Scalars['String']['input']
  /** Customer details */
  customerDetails: CustomerDetailsInput
  /** Id of Merchant */
  merchantId: Scalars['ID']['input']
  /** Id of Merchant */
  orderId: Scalars['ID']['input']
  /** Array of products and their price */
  platformProducts: Array<PlatformProductsInput>
  /** Sales Tax */
  redirectUrl: Scalars['String']['input']
  /** Sales Tax */
  salesTax: Scalars['String']['input']
}

export type InitCheckoutResponse = {
  __typename?: 'InitCheckoutResponse'
  /** The Checkout */
  checkout?: Maybe<Checkout>
}

export type InitCustomerBankingEntity = {
  __typename?: 'InitCustomerBankingEntity'
  /** Plaid Link token expiration date */
  expiresAt: Scalars['DateTime']['output']
  /** Plaid Link token */
  token: Scalars['String']['output']
}

export type InitPartnerBankingEntity = {
  __typename?: 'InitPartnerBankingEntity'
  /** Plaid Link token expiration date */
  expiresAt: Scalars['DateTime']['output']
  /** Plaid Link token */
  token: Scalars['String']['output']
}

/** Invitation record for onboarding a user to a partner or platform */
export type Invite = {
  __typename?: 'Invite'
  /** When the invite was created */
  createdAt: Scalars['DateTime']['output']
  /** Invitee's email address */
  email: Scalars['String']['output']
  /** Expiration date/time for the invite */
  expiresAt: Scalars['DateTime']['output']
  /** Invitee's first name */
  firstName: Scalars['String']['output']
  id: Scalars['ID']['output']
  /** Invitee's last name */
  lastName: Scalars['String']['output']
  /** Partner to which this invite applies */
  partner: Partner
  /** Role assigned upon acceptance */
  role: UserRole
  /** Current status of the invite */
  status: InviteStatus
  subRole?: Maybe<PartnerSubRole>
  /** Unique token for accepting the invite */
  token: Scalars['String']['output']
}

export type InviteInfo = {
  __typename?: 'InviteInfo'
  alreadyRegistered: Scalars['Boolean']['output']
  email: Scalars['String']['output']
}

/** The status of the invite */
export enum InviteStatus {
  Accepted = 'ACCEPTED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Revoked = 'REVOKED',
  Sent = 'SENT',
}

/** Input for manually uploading banking info */
export type ManualUploadBankingInput = {
  /** Account address */
  accountAddress: Scalars['String']['input']
  /** Account city */
  accountCity: Scalars['String']['input']
  /** Account holder name */
  accountHolderName: Scalars['String']['input']
  /** Account number */
  accountNumber: Scalars['String']['input']
  /** Account state */
  accountState: Scalars['String']['input']
  /** Account type */
  accountType: Scalars['String']['input']
  /** Account ZIP code */
  accountZip: Scalars['String']['input']
  /** Partner ID */
  partnerId: Scalars['String']['input']
  /** Payment type */
  paymentType: Scalars['String']['input']
  /** Routing number */
  routingNumber: Scalars['String']['input']
}

/** Centrex merchant application status enum */
export enum MerchantStatus {
  CoachUw = 'COACH_UW',
  MerchantActive = 'MERCHANT_ACTIVE',
  MerchantDeclined = 'MERCHANT_DECLINED',
  MerchantFinalReview = 'MERCHANT_FINAL_REVIEW',
  MerchantInactive = 'MERCHANT_INACTIVE',
  MerchantNotMovingForward = 'MERCHANT_NOT_MOVING_FORWARD',
  MerchantOfferSent = 'MERCHANT_OFFER_SENT',
  MerchantOnboarding = 'MERCHANT_ONBOARDING',
  MerchantPendingPayee = 'MERCHANT_PENDING_PAYEE',
  MerchantReadyForLinks = 'MERCHANT_READY_FOR_LINKS',
  MerchantSuspended = 'MERCHANT_SUSPENDED',
}

/** Backend metadata */
export type Meta = {
  __typename?: 'Meta'
  /** The current server date and time */
  now: Scalars['DateTime']['output']
}

export type MockCheckoutContract = {
  __typename?: 'MockCheckoutContract'
  amount_per_period: Scalars['String']['output']
  amount_total: Scalars['String']['output']
  checkout_id: Scalars['String']['output']
  contract_date: Scalars['String']['output']
  payment_frequency: Scalars['String']['output']
  payment_method: Scalars['String']['output']
  payments_made: Scalars['Float']['output']
  payments_total: Scalars['Float']['output']
  product_name: Scalars['String']['output']
  status: Scalars['String']['output']
}

export type MockMerchantStatusPayload = {
  __typename?: 'MockMerchantStatusPayload'
  event_date: Scalars['String']['output']
  event_type: Scalars['String']['output']
  external_merchant_id?: Maybe<Scalars['String']['output']>
  level?: Maybe<Scalars['String']['output']>
  merchant_id: Scalars['String']['output']
  status: Scalars['String']['output']
}

export type MockPlatformPaymentPayload = {
  __typename?: 'MockPlatformPaymentPayload'
  checkout_id: Scalars['String']['output']
  event_date: Scalars['String']['output']
  event_name: Scalars['String']['output']
  event_type: Scalars['String']['output']
  order_id: Scalars['String']['output']
  payment_amount: Scalars['String']['output']
  payment_date: Scalars['String']['output']
}

export type MockPlatformPayoutPayload = {
  __typename?: 'MockPlatformPayoutPayload'
  checkout_id: Scalars['String']['output']
  order_id: Scalars['String']['output']
  payment_amount: Scalars['String']['output']
  payment_date: Scalars['String']['output']
}

export type MockStatusChangePayload = {
  __typename?: 'MockStatusChangePayload'
  checkout_id: Scalars['String']['output']
  event_date: Scalars['String']['output']
  event_type: Scalars['String']['output']
  merchant_id: Scalars['String']['output']
  old_status: Scalars['String']['output']
  order_id: Scalars['String']['output']
  plan_id: Scalars['String']['output']
  status: Scalars['String']['output']
}

export type MockWebhookResponse = {
  __typename?: 'MockWebhookResponse'
  merchant_status?: Maybe<MockMerchantStatusPayload>
  payment_failure?: Maybe<MockPlatformPaymentPayload>
  payment_success?: Maybe<MockPlatformPaymentPayload>
  payout?: Maybe<MockPlatformPayoutPayload>
  status_change?: Maybe<MockStatusChangePayload>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Accept an invite token (signup or connect) */
  acceptInvite: User
  /** Add a merchant note to a customer */
  addMerchantNote: Scalars['Boolean']['output']
  /** Give a user a partner sub-role */
  assignUserToSubRole: Scalars['Boolean']['output']
  /** Cancel a contract with or without refunding. */
  cancelContract: CancelContractResponse
  completeCheckout: CompleteCheckoutResponse
  /** Create the abandoned checkout */
  createAbandonedCheckout: AbandonedCheckout
  createCheckout: InitCheckoutResponse
  /** Create customer */
  createCustomer: Customer
  /** Create a new invite for a partner */
  createInvite: Invite
  /** Create a login for a customer who has already used the platform. */
  createNewCustomerLogin: AuthenticationResult
  /** Create a new notice banner */
  createNoticeBanner: NoticeBanner
  /** Create one-time payment. */
  createOneTimePayment: CreateOneTimePaymentResponse
  /** Create a new partner Secret key */
  createPartnerSecret: PartnerSecret
  /** Create a new sub-role for a partner */
  createPartnerSubRole: PartnerSubRole
  creditCheck: CreditCheckResponse
  /** Mutations for banking-related operations */
  customerBanking: CustomerBanking
  /** Delete a notice banner */
  deleteNoticeBanner: Scalars['Boolean']['output']
  /** Dismiss a notice banner for the current user */
  dismissNoticeBanner: Scalars['Boolean']['output']
  /** Generate a PDF and upload to Centrex */
  generatePdf: PdfGenerationResponse
  /** Generate PDF preview for current template content */
  generatePdfPreview: PdfGenerationResponse
  /** Impersonate another user */
  impersonate: AuthenticationResult
  initCheckout: InitCheckoutResponse
  /** Get banking info for a partner */
  manualUploadBanking: Partner
  /** Mark the partner Secret key as viewed */
  markPartnerSecretAsViewed: PartnerSecret
  mockWebhooks: MockWebhookResponse
  /** Update partner onboarding data */
  partnerApprove: PartnerApproveResponse
  /** Mutations for banking-related operations */
  partnerBanking: PartnerBanking
  /** Reset user password with a reset token. */
  passwordReset: PasswordResetResult
  platformPartnerConnect: PlatformPartnerConnectionResponse
  /** This is where we will register a platform */
  platformRegister: RegisterPlatformResponse
  platformToken: PlatformTokenResponse
  /** This is where we will register a platform */
  platformWebhooks: PlatformWebhooksResponse
  /** Refresh tokens */
  refreshTokens: AuthenticationResult
  /** Delete a sub-role for a partner */
  removePartnerSubRole: Scalars['Boolean']['output']
  /** Revoke a permission key from a partner sub-role */
  removeSubRolePermission: PartnerSubRole
  /** Remove a partner sub-role from a user */
  removeUserFromSubRole: Scalars['Boolean']['output']
  /** Resend an existing pending invite */
  resendInvite: Scalars['Boolean']['output']
  /** Revoke (expire) an invite */
  revokeInvite: Scalars['Boolean']['output']
  /** Revoke an existing partnter Secret key */
  revokePartnerSecret: Scalars['Boolean']['output']
  /** Rotate the partner Secret key */
  rotatePartnerSecret: PartnerSecret
  saveProduct: Product
  /** Send a one-time code to the provided email. */
  sendEmailOneTimeCode: SendEmailOneTimeCodeResult
  /** Verify the phone number and return tokens. */
  sendPhoneOneTimeCode: SendPhoneOneTimeCodeResult
  /** Sign in with email and password. */
  signIn: AuthenticationResult
  /** Sign in using WordPress credentials */
  signUp: AuthenticationResult
  /** Submit credit card information */
  submitCreditCard: SubmitCreditCardResponse
  /** Suspend a user for a specific partner */
  suspendUserForPartner: Scalars['Boolean']['output']
  /** Suspend user globally (admin only) */
  suspendUserGlobally: Scalars['Boolean']['output']
  /** Unsuspend a user for a specific partner */
  unsuspendUserForPartner: Scalars['Boolean']['output']
  /** Unsuspend user globally (admin only) */
  unsuspendUserGlobally: Scalars['Boolean']['output']
  updateCheckoutUser: GetCheckoutResponse
  /** Update a notice banner */
  updateNoticeBanner: NoticeBanner
  /** Update partner onboarding data */
  updatePartnerApplicationData: ApplicationData
  /** Update partner onboarding data */
  updatePartnerOnboarding: UpdatePartnerOnboarding
  /** Update an existing sub-role for a partner */
  updatePartnerSubRole: PartnerSubRole
  /** Update the content of a PDF template by type */
  updatePdfTemplate: PdfTemplate
  /** Replace a sub-role’s permissions in single request */
  updateSubRolePermissions: PartnerSubRole
  /** Update a batch of partner‑scoped permissions for a user */
  updateUserPermissions: Scalars['Boolean']['output']
  updateUserPreferences: UserPreferences
  /** Upsert customer information */
  upsertCustomer: Customer
  /** Verify the code and return tokens. */
  verifyEmailOneTimeCode: AuthenticationResult
  /** Verify the phone number and return tokens. */
  verifyPhoneOneTimeCode: AuthenticationResult
}

export type MutationAcceptInviteArgs = {
  input: AcceptInviteInput
}

export type MutationAddMerchantNoteArgs = {
  content: Scalars['String']['input']
  customerId: Scalars['Float']['input']
}

export type MutationAssignUserToSubRoleArgs = {
  subRoleId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type MutationCancelContractArgs = {
  input: CancelContractInput
}

export type MutationCompleteCheckoutArgs = {
  payload: CompleteCheckoutArgs
}

export type MutationCreateAbandonedCheckoutArgs = {
  input: CreateAbandonedCheckoutInput
}

export type MutationCreateCheckoutArgs = {
  payload: CreateCheckoutArgs
}

export type MutationCreateCustomerArgs = {
  input: UpsertCustomerInput
}

export type MutationCreateInviteArgs = {
  input: CreateInviteInput
}

export type MutationCreateNewCustomerLoginArgs = {
  input: CreateNewCustomerLoginInput
}

export type MutationCreateNoticeBannerArgs = {
  input: NoticeBannerInput
}

export type MutationCreateOneTimePaymentArgs = {
  input: CreateOneTimePaymentInput
}

export type MutationCreatePartnerSecretArgs = {
  partnerId: Scalars['Float']['input']
}

export type MutationCreatePartnerSubRoleArgs = {
  input: CreatePartnerSubRoleInput
}

export type MutationCreditCheckArgs = {
  payload: CreditCheckArgs
}

export type MutationDeleteNoticeBannerArgs = {
  id: Scalars['Int']['input']
}

export type MutationDismissNoticeBannerArgs = {
  bannerId: Scalars['Int']['input']
}

export type MutationGeneratePdfArgs = {
  input: PdfRequestInput
}

export type MutationGeneratePdfPreviewArgs = {
  input: PdfRequestInput
}

export type MutationImpersonateArgs = {
  userId: Scalars['Float']['input']
}

export type MutationInitCheckoutArgs = {
  payload: InitCheckoutArgs
}

export type MutationManualUploadBankingArgs = {
  input: ManualUploadBankingInput
}

export type MutationMarkPartnerSecretAsViewedArgs = {
  id: Scalars['Float']['input']
}

export type MutationMockWebhooksArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>
  orderId?: InputMaybe<Scalars['String']['input']>
  paymentAmount?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  webhookType: PlatformWebhooksType
}

export type MutationPartnerApproveArgs = {
  id: Scalars['Float']['input']
}

export type MutationPasswordResetArgs = {
  input: PasswordResetInput
}

export type MutationPlatformPartnerConnectArgs = {
  payload: PlatformPartnerConnectionArgs
}

export type MutationPlatformRegisterArgs = {
  payload: RegisterPlatformArgs
}

export type MutationPlatformTokenArgs = {
  token: Scalars['String']['input']
}

export type MutationPlatformWebhooksArgs = {
  payload: PlatformWebhooksArgs
}

export type MutationRefreshTokensArgs = {
  input: RefreshTokensInput
}

export type MutationRemovePartnerSubRoleArgs = {
  id: Scalars['Int']['input']
}

export type MutationRemoveSubRolePermissionArgs = {
  permissionKey: PermissionKey
  subRoleId: Scalars['Int']['input']
}

export type MutationRemoveUserFromSubRoleArgs = {
  subRoleId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type MutationResendInviteArgs = {
  id: Scalars['Float']['input']
}

export type MutationRevokeInviteArgs = {
  id: Scalars['Float']['input']
}

export type MutationRevokePartnerSecretArgs = {
  id: Scalars['Float']['input']
}

export type MutationRotatePartnerSecretArgs = {
  id: Scalars['Float']['input']
}

export type MutationSaveProductArgs = {
  product: ProductInput
}

export type MutationSendEmailOneTimeCodeArgs = {
  input: SendEmailOneTimeCodeInput
}

export type MutationSendPhoneOneTimeCodeArgs = {
  input: SendPhoneOneTimeCodeInput
}

export type MutationSignInArgs = {
  input: SignInInput
}

export type MutationSignUpArgs = {
  input: SignUpInput
}

export type MutationSubmitCreditCardArgs = {
  customerId: Scalars['Float']['input']
  data: CreditCardInput
}

export type MutationSuspendUserForPartnerArgs = {
  partnerId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type MutationSuspendUserGloballyArgs = {
  id: Scalars['Float']['input']
  partnerId?: InputMaybe<Scalars['Float']['input']>
}

export type MutationUnsuspendUserForPartnerArgs = {
  partnerId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type MutationUnsuspendUserGloballyArgs = {
  id: Scalars['Float']['input']
  partnerId?: InputMaybe<Scalars['Float']['input']>
}

export type MutationUpdateCheckoutUserArgs = {
  checkoutId: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type MutationUpdateNoticeBannerArgs = {
  id: Scalars['Int']['input']
  input: NoticeBannerInput
}

export type MutationUpdatePartnerApplicationDataArgs = {
  applicationData: ApplicationDataInput
  id: Scalars['Float']['input']
}

export type MutationUpdatePartnerOnboardingArgs = {
  address1?: InputMaybe<Scalars['String']['input']>
  business_dba?: InputMaybe<Scalars['String']['input']>
  business_name?: InputMaybe<Scalars['String']['input']>
  business_phone?: InputMaybe<Scalars['String']['input']>
  business_start_year?: InputMaybe<Scalars['Float']['input']>
  business_tax_id?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  contact_phone?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  first_name: Scalars['String']['input']
  id: Scalars['Float']['input']
  industry?: InputMaybe<Scalars['String']['input']>
  last_name: Scalars['String']['input']
  offer_description?: InputMaybe<Scalars['String']['input']>
  owner_dob?: InputMaybe<Scalars['String']['input']>
  owner_drivers_license?: InputMaybe<Scalars['String']['input']>
  owner_ownership_percent?: InputMaybe<Scalars['Float']['input']>
  owner_ssn?: InputMaybe<Scalars['String']['input']>
  owners?: InputMaybe<Array<OwnerInfoInput>>
  referred_by?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  website?: InputMaybe<Scalars['String']['input']>
  zip?: InputMaybe<Scalars['String']['input']>
}

export type MutationUpdatePartnerSubRoleArgs = {
  input: UpdatePartnerSubRoleInput
}

export type MutationUpdatePdfTemplateArgs = {
  content: Scalars['String']['input']
  type: PdfTemplateType
}

export type MutationUpdateSubRolePermissionsArgs = {
  permissionKeys: Array<PermissionKey>
  subRoleId: Scalars['Int']['input']
}

export type MutationUpdateUserPermissionsArgs = {
  partnerId: Scalars['Float']['input']
  permissions: Array<UserPermissionInput>
  userId: Scalars['Float']['input']
}

export type MutationUpdateUserPreferencesArgs = {
  preferences: UserPreferencesInput
}

export type MutationUpsertCustomerArgs = {
  input: UpsertCustomerInput
}

export type MutationVerifyEmailOneTimeCodeArgs = {
  input: VerifyEmailOneTimeCodeInput
}

export type MutationVerifyPhoneOneTimeCodeArgs = {
  input: VerifyPhoneOneTimeCodeInput
}

/** Notice banner for displaying important messages to users */
export type NoticeBanner = {
  __typename?: 'NoticeBanner'
  /** HTML content of the banner */
  content: Scalars['String']['output']
  /** Creation date */
  createdAt: Scalars['DateTime']['output']
  /** User who created the banner */
  createdBy?: Maybe<User>
  /** Banner ID */
  id: Scalars['Int']['output']
  /** Whether users can dismiss this banner */
  isDismissible: Scalars['Boolean']['output']
  /** Whether the banner is enabled */
  isEnabled: Scalars['Boolean']['output']
  /** Where the banner should be displayed */
  placement: BannerPlacement
  /** Banner title */
  title?: Maybe<Scalars['String']['output']>
  /** Last updated date */
  updatedAt: Scalars['DateTime']['output']
  /** User who last updated the banner */
  updatedBy?: Maybe<User>
}

export type NoticeBannerInput = {
  /** Rich text content of the banner */
  content: Scalars['String']['input']
  /** Whether users can dismiss this banner */
  isDismissible?: InputMaybe<Scalars['Boolean']['input']>
  /** Whether the banner is enabled */
  isEnabled: Scalars['Boolean']['input']
  /** Where the banner should be displayed */
  placement: BannerPlacement
  title?: InputMaybe<Scalars['String']['input']>
}

export type OptionInput = {
  delayFirstPayment: Scalars['Boolean']['input']
  downpaymentRequired: Scalars['Boolean']['input']
  frequency: PaymentFrequency
  invoiceAmount: Scalars['String']['input']
  name: Scalars['String']['input']
  optionId: Scalars['Float']['input']
  payments: Scalars['String']['input']
  price: PriceInput
  redirectUrl?: InputMaybe<Scalars['String']['input']>
  sellRate: Scalars['String']['input']
  /** Available terms in months */
  terms?: InputMaybe<Array<Scalars['Float']['input']>>
}

export enum OrderStatus {
  Agreement = 'AGREEMENT',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  CreditCheck = 'CREDIT_CHECK',
  Initiated = 'INITIATED',
}

export type OscilarResponse = {
  __typename?: 'OscilarResponse'
  decision: Scalars['String']['output']
  intent: Scalars['String']['output']
  reason: Scalars['String']['output']
  tier?: Maybe<Scalars['String']['output']>
}

export type Owner = {
  __typename?: 'Owner'
  address?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  dob?: Maybe<Scalars['String']['output']>
  drivers_license?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  last_name?: Maybe<Scalars['String']['output']>
  note_id?: Maybe<Scalars['String']['output']>
  ownership_percent?: Maybe<Scalars['String']['output']>
  phone_number?: Maybe<Scalars['String']['output']>
  ssn?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  zip?: Maybe<Scalars['String']['output']>
}

/** Owner information */
export type OwnerInfo = {
  __typename?: 'OwnerInfo'
  /** Owner Address */
  address?: Maybe<Scalars['String']['output']>
  /** Owner Date of Birth */
  dob?: Maybe<Scalars['String']['output']>
  /** Owner Driver's License */
  drivers_license?: Maybe<Scalars['String']['output']>
  /** Owner Email */
  email?: Maybe<Scalars['String']['output']>
  /** Owner First Name */
  first_name?: Maybe<Scalars['String']['output']>
  /** Owner Last Name */
  last_name?: Maybe<Scalars['String']['output']>
  /** Owner ID */
  note_id?: Maybe<Scalars['String']['output']>
  /** Owner Ownership Percent */
  ownership_percent?: Maybe<Scalars['String']['output']>
  /** Owner Phone Number */
  phone_number?: Maybe<Scalars['String']['output']>
  /** Owner SSN */
  ssn?: Maybe<Scalars['String']['output']>
}

export type OwnerInfoInput = {
  /** Owner Address */
  address?: InputMaybe<Scalars['String']['input']>
  /** Owner Date of Birth */
  dob?: InputMaybe<Scalars['String']['input']>
  /** Owner Driver's License */
  drivers_license?: InputMaybe<Scalars['String']['input']>
  /** Owner Email */
  email?: InputMaybe<Scalars['String']['input']>
  /** Owner First Name */
  first_name?: InputMaybe<Scalars['String']['input']>
  /** Owner Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>
  /** Note ID for centrex */
  note_id?: InputMaybe<Scalars['String']['input']>
  /** Owner Ownership Percent */
  ownership_percent?: InputMaybe<Scalars['String']['input']>
  /** Owner Phone Number */
  phone_number?: InputMaybe<Scalars['String']['input']>
  /** Owner SSN */
  ssn?: InputMaybe<Scalars['String']['input']>
}

export type OwnerInput = {
  address?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  dob?: InputMaybe<Scalars['String']['input']>
  drivers_license?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  note_id?: InputMaybe<Scalars['String']['input']>
  ownership_percent?: InputMaybe<Scalars['String']['input']>
  phone_number?: InputMaybe<Scalars['String']['input']>
  ssn?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  zip?: InputMaybe<Scalars['String']['input']>
}

/** Paged contracts result */
export type PagedContracts = {
  __typename?: 'PagedContracts'
  edges: Array<ContractEdge>
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  totalCount: Scalars['Int']['output']
}

/** Paged customers result */
export type PagedCustomers = {
  __typename?: 'PagedCustomers'
  edges: Array<CustomerEdge>
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  totalCount: Scalars['Int']['output']
}

/** Paged partners result */
export type PagedPartners = {
  __typename?: 'PagedPartners'
  edges: Array<PartnerEdge>
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  totalCount: Scalars['Int']['output']
}

/** Paged transactions result */
export type PagedTransactions = {
  __typename?: 'PagedTransactions'
  edges: Array<TransactionEdge>
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  totalCount: Scalars['Int']['output']
}

export type PagedUsers = {
  __typename?: 'PagedUsers'
  edges: Array<UserEdge>
  endCursor?: Maybe<Scalars['String']['output']>
  hasNextPage: Scalars['Boolean']['output']
  totalCount: Scalars['Int']['output']
}

export type PaginationInput = {
  /** Count of partners to return per page */
  count: Scalars['Float']['input']
  /** Cursor for the start of the next page */
  from?: InputMaybe<Scalars['String']['input']>
}

export type Participation = {
  __typename?: 'Participation'
  commission_amount?: Maybe<Scalars['String']['output']>
  commission_percent?: Maybe<Scalars['String']['output']>
  management_feeOn: Scalars['String']['output']
  management_feePercent: Scalars['String']['output']
  participation_amount?: Maybe<Scalars['String']['output']>
  participation_percent?: Maybe<Scalars['String']['output']>
  syndicateID: Scalars['String']['output']
}

/** Partner */
export type Partner = {
  __typename?: 'Partner'
  /** Partner application data */
  applicationData?: Maybe<ApplicationData>
  /** Indicates if the user has uploaded bank statements */
  bankStatementsUploaded: Scalars['Boolean']['output']
  collections: PagedContracts
  /** Partner contracts - sorted by date descending */
  contracts: PagedContracts
  /** User ID */
  id: Scalars['Float']['output']
  /** Indicates if the user has submitted their information */
  isInformationComplete: Scalars['Boolean']['output']
  /** Indicates if the user is onboarded */
  isOnboarded: Scalars['Boolean']['output']
  /** Indicates if user’s connection to this partner is suspended */
  isSuspended: Scalars['Boolean']['output']
  /** Indicates if the user is the owner of this partner */
  isUserOwner: Scalars['Boolean']['output']
  /** Partner Level */
  level?: Maybe<PartnerLevelType>
  /** Partner logo URL */
  logoUrl?: Maybe<Scalars['String']['output']>
  /** Merchant ID */
  merchantId?: Maybe<Scalars['String']['output']>
  /** Partner application status */
  merchantStatus?: Maybe<MerchantStatus>
  /** Partner's metrics */
  metrics: PartnerMetrics
  /** Partner name */
  name: Scalars['String']['output']
  partnerSecrets?: Maybe<PartnerSecret>
  /** Partner payment method */
  paymentMethodInfo?: Maybe<PaymentMethodInfo>
  payments: PagedTransactions
  /** Partner's payouts grouped by date */
  payouts: Array<GroupedPayout>
  /** Platform referer */
  platformReferer?: Maybe<Scalars['String']['output']>
  /** Partner products */
  products: Array<Product>
  /** Partner representative */
  representative: Scalars['String']['output']
  sellRateConfig: Scalars['JSON']['output']
  /** Partner's service fee percentage */
  serviceFee?: Maybe<Scalars['Float']['output']>
  /** All of partner's transactions */
  transactions: PagedTransactions
  /** Get users associated with this partner */
  users: PagedUsers
}

/** Partner */
export type PartnerContractsArgs = {
  pagination: PaginationInput
}

/** Partner */
export type PartnerPaymentsArgs = {
  fromDate?: InputMaybe<Scalars['String']['input']>
  toDate?: InputMaybe<Scalars['String']['input']>
}

/** Partner */
export type PartnerPayoutsArgs = {
  fromDate?: InputMaybe<Scalars['String']['input']>
  toDate?: InputMaybe<Scalars['String']['input']>
}

/** Partner */
export type PartnerTransactionsArgs = {
  pagination: PaginationInput
}

export type PartnerApproveResponse = {
  __typename?: 'PartnerApproveResponse'
  /** Operation message */
  message: Scalars['String']['output']
  /** Operation success status */
  success: Scalars['Boolean']['output']
}

export type PartnerBanking = {
  __typename?: 'PartnerBanking'
  /** Confirm modification of customer banking information via Plaid */
  confirm: Partner
  /** Initialize banking data management via Plaid */
  init: InitPartnerBankingEntity
}

export type PartnerBankingConfirmArgs = {
  partnerId: Scalars['Float']['input']
  token: Scalars['String']['input']
}

export type PartnerBankingInitArgs = {
  id: Scalars['Float']['input']
}

export type PartnerEdge = {
  __typename?: 'PartnerEdge'
  cursor: Scalars['ID']['output']
  node: Partner
}

export type PartnerIncomeInput = {
  /** Start date of date range, exclusive. In "yyyy-mm-dd" format */
  fromDate: Scalars['DateTime']['input']
  /** ID of the partner whose income data to fetch */
  partnerId: Scalars['Int']['input']
  /** End date of date range, exclusive. In "yyyy-mm-dd" format */
  toDate: Scalars['DateTime']['input']
}

/** A custom sub-role that a partner-owner can define */
export type PartnerIncomeLineItem = {
  __typename?: 'PartnerIncomeLineItem'
  /** Total amount of the advance */
  advanceAmount?: Maybe<Scalars['Float']['output']>
  /** Start date of the advance */
  advanceDate?: Maybe<Scalars['DateTime']['output']>
  /** Status of the advance */
  currentAdvanceStatus?: Maybe<Scalars['String']['output']>
  /** Amount charged back by customer */
  customerChargebackAmount?: Maybe<Scalars['Float']['output']>
  /** Customer's full name */
  customerName?: Maybe<Scalars['String']['output']>
  /** Amount refunded to customer */
  customerRefundAmount?: Maybe<Scalars['Float']['output']>
  /** Customer's email address */
  emailAddress?: Maybe<Scalars['String']['output']>
  /** Gross total collected from customer */
  grossCollectedAmount?: Maybe<Scalars['Float']['output']>
  /** Gross amount paid to merchant from advance */
  grossFundedAmount?: Maybe<Scalars['Float']['output']>
  /** Date of most recent transaction to/from a merchant or syndicate */
  latestOutgoingDate?: Maybe<Scalars['DateTime']['output']>
  /** Subtype of most recent transaction to/from a merchant or syndicate */
  latestOutgoingSubtype?: Maybe<Scalars['String']['output']>
  /** Customer's advance's associated merchant */
  merchant?: Maybe<Scalars['String']['output']>
  /** Date funding was sent to merchant, servicing advances will be null */
  merchantFundedDate?: Maybe<Scalars['DateTime']['output']>
  /** Date of most recent clawback from merchant */
  mostRecentClawbackDate?: Maybe<Scalars['DateTime']['output']>
  /** Net amount paid to merchant from advance */
  netFundedAmount?: Maybe<Scalars['Float']['output']>
  /** Dollar amount we have collected/will collect from this advance */
  ourFee?: Maybe<Scalars['Float']['output']>
  /** Per period payment amount paid by customer to Payva */
  payment?: Maybe<Scalars['Float']['output']>
  /** Funding/Servicing */
  program?: Maybe<PaymentPlanType>
  /** Amount clawed back from merchant */
  totalClawbackAmount?: Maybe<Scalars['Float']['output']>
}

export enum PartnerLevelType {
  Premium = 'PREMIUM',
  Prime = 'PRIME',
  Pro = 'PRO',
}

export type PartnerMetrics = {
  __typename?: 'PartnerMetrics'
  /** Number of all active funding plans */
  activeFundingPlans: Scalars['Int']['output']
  /** Total amount of all active funding plans, in USD */
  activeFundingPlansWorth: Scalars['Float']['output']
  /** Number of all active plans (funding + servicing + unassigned) */
  activePlans: Scalars['Int']['output']
  /** Total amount of all active plans, in USD (funding + servicing + unassigned) */
  activePlansWorth: Scalars['Float']['output']
  /** Number of all active servicing plans */
  activeServicingPlans: Scalars['Int']['output']
  /** Total amount of all active servicing plans, in USD */
  activeServicingPlansWorth: Scalars['Float']['output']
  /** Number of declined applications */
  declined: Scalars['Int']['output']
  /** Application Status */
  merchantStatus: Scalars['String']['output']
  /** Remaining payouts on all contracts, in USD */
  payoutRemaining: Scalars['Float']['output']
  /** Platform referer */
  platformReferer: Scalars['String']['output']
  /** Total amount of all payouts, in USD */
  totalPaidOut: Scalars['Float']['output']
  /** Number of all contracts that are active, defaulted, paid in full, in collection */
  totalSales: Scalars['Int']['output']
}

/** Partner Onboarding */
export type PartnerOnboardingCentrex = {
  __typename?: 'PartnerOnboardingCentrex'
  /** Address */
  address?: Maybe<Scalars['String']['output']>
  /** Business DBA */
  business_dba?: Maybe<Scalars['String']['output']>
  /** Business Name */
  business_name?: Maybe<Scalars['String']['output']>
  /** Business Phone */
  business_phone?: Maybe<Scalars['String']['output']>
  /** Business Start Year */
  business_start_year?: Maybe<Scalars['String']['output']>
  /** Business Tax ID */
  business_tax_id?: Maybe<Scalars['String']['output']>
  /** City */
  city?: Maybe<Scalars['String']['output']>
  /** Owner Phone */
  contact_phone?: Maybe<Scalars['String']['output']>
  /** Date of Birth */
  dob?: Maybe<Scalars['String']['output']>
  /** Documents */
  documents?: Maybe<Array<CentrexDocument>>
  /** Email */
  email: Scalars['String']['output']
  /** First Name */
  first_name: Scalars['String']['output']
  /** Industry type */
  industry?: Maybe<Scalars['String']['output']>
  /** Last Name */
  last_name: Scalars['String']['output']
  /** Description of business offering for customers */
  offer_description?: Maybe<Scalars['String']['output']>
  /** Owner Driver's License */
  owner_drivers_license?: Maybe<Scalars['String']['output']>
  /** Owner Email */
  owner_email?: Maybe<Scalars['String']['output']>
  /** Owner Ownership Percent */
  owner_ownership_percent?: Maybe<Scalars['String']['output']>
  /** Owners information */
  owners?: Maybe<Array<OwnerInfo>>
  /** Referred By */
  referred_by?: Maybe<Scalars['String']['output']>
  /** Social Security Number */
  social_security_number?: Maybe<Scalars['String']['output']>
  /** Stage of partner */
  stage_id?: Maybe<Stage>
  /** State */
  state?: Maybe<Scalars['String']['output']>
  /** Status of partner */
  status_id?: Maybe<Status>
  /** Company website */
  website?: Maybe<Scalars['String']['output']>
  /** Zip */
  zip?: Maybe<Scalars['String']['output']>
}

/** Response for Partner Onboarding queries and mutations */
export type PartnerOnboardingResponse = {
  __typename?: 'PartnerOnboardingResponse'
  /** Partner onboarding data */
  data?: Maybe<PartnerOnboardingCentrex>
  /** Descriptive message about the operation result */
  message: Scalars['String']['output']
  /** Partner payment method */
  paymentMethodInfo?: Maybe<PaymentMethodInfo>
  /** Indicates if the operation was successful */
  success: Scalars['Boolean']['output']
}

/** Partner Secrets information */
export type PartnerSecret = {
  __typename?: 'PartnerSecret'
  /** Creation date of the Secret Key */
  createdAt: Scalars['DateTime']['output']
  /** Partner Secrets ID */
  id: Scalars['Float']['output']
  /** Indicates if the Secret Key has been revoked */
  isRevoked: Scalars['Boolean']['output']
  /** Indicates if the Secret Key has been viewed */
  isSecretKeyViewed: Scalars['Boolean']['output']
  /** Previous Secret Key value */
  previousSecretKey?: Maybe<Scalars['String']['output']>
  /** Current Secret Key value */
  secretKey?: Maybe<Scalars['String']['output']>
  /** Last updated date of the Secret Key */
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

/** A custom sub-role that a partner-owner can define */
export type PartnerSubRole = {
  __typename?: 'PartnerSubRole'
  /** Partner's sub-role ID */
  id: Scalars['Int']['output']
  /** Name of sub-role (e.g. "Closer", "Owner") */
  name: Scalars['String']['output']
  /** List of permission keys granted to this sub-role */
  permissions: Array<PermissionKey>
  /** System key for this sub-role */
  systemKey?: Maybe<Scalars['String']['output']>
}

/** Email to send password reset link to */
export type PasswordResetInput = {
  email: Scalars['String']['input']
}

/** An authenticated user */
export type PasswordResetResult = {
  __typename?: 'PasswordResetResult'
  email: Scalars['String']['output']
  message: Scalars['String']['output']
  sent: Scalars['Boolean']['output']
}

export enum PaymentFrequency {
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Unknown = 'UNKNOWN',
  Weekly = 'WEEKLY',
}

export enum PaymentMethod {
  Ach = 'ACH',
  Cc = 'CC',
  Unknown = 'UNKNOWN',
}

/** Customer payment method information */
export type PaymentMethodInfo = {
  __typename?: 'PaymentMethodInfo'
  /** Account number or last 4 digits of the card */
  accountNumber: Scalars['String']['output']
  /** Account type (applicable for ACH payments) */
  accountType?: Maybe<BankAccountType>
  /** Bank name or Card type (Visa, Amex, etc.) */
  bankName?: Maybe<Scalars['String']['output']>
  /** Billing address */
  billingAddress: Address
  /** Card expiry date (MM/YY) */
  cardExpiryDate?: Maybe<Scalars['String']['output']>
  /** Cardholder first name */
  cardholderFirstName?: Maybe<Scalars['String']['output']>
  /** Cardholder last name */
  cardholderLastName?: Maybe<Scalars['String']['output']>
  /** Name of the account holder or cardholder */
  holderName?: Maybe<Scalars['String']['output']>
  /** Payment type: ACH or CC */
  paymentMethod: Scalars['String']['output']
  /** Payment type: debit/credit */
  paymentType: Scalars['String']['output']
}

export enum PaymentPlanType {
  Funding = 'FUNDING',
  Pending = 'PENDING',
  Servicing = 'SERVICING',
}

export enum PaymentStatus {
  Cleared = 'CLEARED',
  FailedPayment = 'FAILED_PAYMENT',
  Open = 'OPEN',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN',
}

export enum PaymentType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING',
  Unknown = 'UNKNOWN',
}

export type PayoutInfo = {
  __typename?: 'PayoutInfo'
  /** Total amount to be paid out to the partner */
  payoutExpectedTotal: Scalars['Float']['output']
  /** Total amount paid out to partner so far */
  payoutMade: Scalars['Float']['output']
  /** Remaining amount to be paid out to partner */
  payoutRemaining: Scalars['Float']['output']
}

/** Response from PDF generation */
export type PdfGenerationResponse = {
  __typename?: 'PdfGenerationResponse'
  message: Scalars['String']['output']
  pdfBase64?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type PdfRequestInput = {
  cardPaymentConsentData?: InputMaybe<CardPaymentConsentDataInput>
  /** Optional content for preview generation */
  content?: InputMaybe<Scalars['String']['input']>
  creditReportCustomerData?: InputMaybe<CreditReportCustomerDataInput>
  customerData?: InputMaybe<CommonCustomerDataInput>
  /** To generate a preview (no replacements) for client */
  preview?: Scalars['Boolean']['input']
  servicingAgreementContractData?: InputMaybe<ServicingAgreementContractDataInput>
  templateType: PdfTemplateType
}

/** PDF Template content for document generation */
export type PdfTemplate = {
  __typename?: 'PdfTemplate'
  /** HTML content of the PDF Template */
  content: Scalars['String']['output']
  /** Creation date of the PDF Template */
  createdAt: Scalars['DateTime']['output']
  /** PDF Template ID */
  id: Scalars['Float']['output']
  /** PDF Template type */
  type: PdfTemplateType
  /** Last updated date of the PDF Template */
  updatedAt: Scalars['DateTime']['output']
}

/** The type of PDF template */
export enum PdfTemplateType {
  CreditCardAuth = 'CREDIT_CARD_AUTH',
  CreditReportConsent = 'CREDIT_REPORT_CONSENT',
  ServicingAgreement = 'SERVICING_AGREEMENT',
}

export enum PermissionKey {
  ViewAbandonedForms = 'VIEW_ABANDONED_FORMS',
  ViewAccessSettings = 'VIEW_ACCESS_SETTINGS',
  ViewCollections = 'VIEW_COLLECTIONS',
  ViewDocuments = 'VIEW_DOCUMENTS',
  ViewLinkBuilder = 'VIEW_LINK_BUILDER',
  ViewPartners = 'VIEW_PARTNERS',
  ViewPartnerUsers = 'VIEW_PARTNER_USERS',
  ViewPayouts = 'VIEW_PAYOUTS',
  ViewPdfTemplates = 'VIEW_PDF_TEMPLATES',
  ViewProducts = 'VIEW_PRODUCTS',
  ViewSales = 'VIEW_SALES',
  ViewSecretKeys = 'VIEW_SECRET_KEYS',
  ViewSubRoles = 'VIEW_SUB_ROLES',
  ViewTransactions = 'VIEW_TRANSACTIONS',
}

/** Platform type */
export type Platform = {
  __typename?: 'Platform'
  /** Encrypted secret key */
  apiKey: Scalars['String']['output']
  /** Centrex Company Id */
  centrexCompanyId: Scalars['Float']['output']
  /** Platform ID */
  id: Scalars['Float']['output']
  /** Name of the platform */
  name: Scalars['String']['output']
  /** Payee Id */
  payeeId: Scalars['Float']['output']
  /** Payee Id Funding */
  payeeIdFunding: Scalars['Float']['output']
  /** Encrypted secret key */
  secretKeyHash: Scalars['String']['output']
  /** User ID */
  userId: Scalars['ID']['output']
  /** Array of platform webhooks */
  webhooks?: Maybe<Array<PlatformWebhook>>
}

export type PlatformPartnerConnectionArgs = {
  /** ID of the merchant being connected */
  partnerId: Scalars['Int']['input']
  /** ID of the platform */
  platformId: Scalars['Int']['input']
  /** ID of the merchant being connected */
  platformPartnerId?: InputMaybe<Scalars['String']['input']>
}

export type PlatformPartnerConnectionResponse = {
  __typename?: 'PlatformPartnerConnectionResponse'
  /** Status showing whether a merchant and platform are connected */
  isActive: Scalars['Boolean']['output']
  /** The partner that is now associated with a platform */
  partner: Partner
}

export type PlatformProductsInput = {
  /** Price of the product */
  price: Scalars['String']['input']
  /** Name of the product */
  productName: Scalars['String']['input']
  /** Product options */
  productOptions: ProductOptionsInput
}

export type PlatformTokenResponse = {
  __typename?: 'PlatformTokenResponse'
  valid?: Maybe<Scalars['Boolean']['output']>
}

export type PlatformWebhook = {
  __typename?: 'PlatformWebhook'
  id: Scalars['ID']['output']
  platformId?: Maybe<Scalars['Float']['output']>
  type: PlatformWebhooksType
  webhookUrl: Scalars['String']['output']
}

export type PlatformWebhooksArgs = {
  /** ID of the platform */
  platformId: Scalars['String']['input']
  /** What type of webhooks should be sent here */
  type: PlatformWebhooksType
  /** URL of the new webhook */
  webhookUrl: Scalars['String']['input']
}

export type PlatformWebhooksResponse = {
  __typename?: 'PlatformWebhooksResponse'
  /** The platform that is being registered */
  platform: Platform
}

export enum PlatformWebhooksType {
  ApplicationDeclined = 'APPLICATION_DECLINED',
  Canceled = 'CANCELED',
  Chargeback = 'CHARGEBACK',
  Clawback = 'CLAWBACK',
  ContractStatusChange = 'CONTRACT_STATUS_CHANGE',
  MerchantOnboardingApproval = 'MERCHANT_ONBOARDING_APPROVAL',
  MerchantOnboardingDeclined = 'MERCHANT_ONBOARDING_DECLINED',
  MerchantStatus = 'MERCHANT_STATUS',
  NewPurchase = 'NEW_PURCHASE',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentSuccess = 'PAYMENT_SUCCESS',
  Payout = 'PAYOUT',
}

/** User preferences details */
export type Preferences = {
  __typename?: 'Preferences'
  /** Column visibiliy setting */
  columnVisibility?: Maybe<Scalars['JSON']['output']>
  /** Dismissed banner notices */
  dismissedBanners?: Maybe<Scalars['JSON']['output']>
}

export type PriceInput = {
  ach: Scalars['String']['input']
  cc: Scalars['String']['input']
}

export type Pricing = {
  __typename?: 'Pricing'
  advance_amount: Scalars['String']['output']
  advance_program: Scalars['Float']['output']
  advance_type: Scalars['String']['output']
  buy_rate: Scalars['String']['output']
  lien_position: Scalars['String']['output']
  remit_percent: Scalars['String']['output']
  repayment_frequency: Scalars['String']['output']
  repayment_method: Scalars['String']['output']
  repayment_term: Scalars['String']['output']
  sell_rate: Scalars['String']['output']
}

/** Product */
export type Product = {
  __typename?: 'Product'
  /** WordPress ID of the user who created this product */
  createdByWpId?: Maybe<Scalars['String']['output']>
  /** Product ID */
  id: Scalars['ID']['output']
  isLegacy: Scalars['Boolean']['output']
  legacyLink?: Maybe<Scalars['String']['output']>
  /** Product name */
  name: Scalars['String']['output']
  options: Array<ProductOption>
  /** Product image URL */
  productImageUrl?: Maybe<Scalars['String']['output']>
  /** WP ID */
  wpId?: Maybe<Scalars['Float']['output']>
}

export type ProductInput = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  options: Array<OptionInput>
  partnerId: Scalars['Float']['input']
  productImageUrl?: InputMaybe<Scalars['String']['input']>
}

/** Product option */
export type ProductOption = {
  __typename?: 'ProductOption'
  /** Date this option was created */
  createdAt: Scalars['DateTime']['output']
  delayFirstPayment: Scalars['Boolean']['output']
  downpaymentAmount: DownpaymentAmount
  downpaymentRequired: Scalars['Boolean']['output']
  frequency: PaymentFrequency
  /** Product option ID */
  id?: Maybe<Scalars['ID']['output']>
  invoiceAmount: Scalars['String']['output']
  name: Scalars['String']['output']
  /** Product option ID */
  optionId: Scalars['Float']['output']
  payments: Scalars['String']['output']
  price: ProductPrice
  product?: Maybe<Product>
  redirectUrl?: Maybe<Scalars['String']['output']>
  sellRate: Scalars['String']['output']
  /** Available terms in months */
  terms?: Maybe<Array<Scalars['Float']['output']>>
  /** Date this option was last updated */
  updatedAt: Scalars['DateTime']['output']
}

export type ProductOptionsInput = {
  /** Payment frequency */
  frequency: Scalars['String']['input']
  /** Invoice amount */
  payments: Scalars['String']['input']
  /** Invoice amount */
  sellRate: Scalars['String']['input']
}

export type ProductPrice = {
  __typename?: 'ProductPrice'
  ach: Scalars['String']['output']
  cc: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  /** Get active banners for current user/context */
  activeNoticeBanners: Array<NoticeBanner>
  /** Get a single contract */
  contract?: Maybe<Contract>
  customer?: Maybe<Customer>
  customers: PagedCustomers
  /** Get effective permissions of current user for a partner */
  effectivePermissions: Array<EffectivePermission>
  getCheckout: GetCheckoutResponse
  inviteInfo: InviteInfo
  /** Get logged in user's profile */
  me: User
  merchantNotes: Array<ContactNote>
  /** Retrieve basic information about the backend */
  meta: Meta
  /** List all banners (admin) */
  noticeBanners: Array<NoticeBanner>
  /** Get a single partner */
  partner?: Maybe<Partner>
  /** Get partner application data */
  partnerApplication?: Maybe<ApplicationData>
  /** Get all income line items for a partner in a given date range. */
  partnerIncomeClawbackLineItems: Array<PartnerIncomeLineItem>
  /** Get all income line items for a partner in a given date range. */
  partnerIncomeLineItems: Array<PartnerIncomeLineItem>
  /** List all user invites for a partner */
  partnerInvites: Array<Invite>
  /** Get partner onboarding data */
  partnerOnboarding?: Maybe<PartnerOnboardingResponse>
  /** Get all sub-roles for a partner */
  partnerSubRoles: Array<PartnerSubRole>
  /** Get paginated list of partners (sorted by company name) */
  partners: PagedPartners
  /** Get a PDF template by type */
  pdfTemplate?: Maybe<PdfTemplate>
  productById?: Maybe<Product>
  productByName?: Maybe<Product>
  products: Array<Product>
  productsByPartner: Array<Product>
  /** Get notice banners for public pages (no auth required) */
  publicNoticeBanners: Array<NoticeBanner>
  regeneratePlatformKeys: RegisterPlatformResponse
  /** Get all permission keys for a partner sub-role */
  subRolePermissions: Array<PermissionKey>
  /** Get partner application data */
  updatePartnerOnboarding?: Maybe<ApplicationData>
  /** Partner can fetch user by userId and partnerId */
  user: User
  /** List all sub-roles assigned to a given user for this partner */
  userPartnerSubRoles: Array<PartnerSubRole>
  /** Fetch the per user overrides for a given partner */
  userPermissions: Array<UserPermission>
  /** Get all user accounts */
  users: PagedUsers
}

export type QueryActiveNoticeBannersArgs = {
  placement: BannerPlacement
}

export type QueryContractArgs = {
  id: Scalars['ID']['input']
}

export type QueryCustomerArgs = {
  id: Scalars['Float']['input']
}

export type QueryCustomersArgs = {
  pagination: PaginationInput
}

export type QueryEffectivePermissionsArgs = {
  partnerId: Scalars['Float']['input']
}

export type QueryGetCheckoutArgs = {
  checkoutId: Scalars['String']['input']
}

export type QueryInviteInfoArgs = {
  token: Scalars['String']['input']
}

export type QueryMerchantNotesArgs = {
  customerId: Scalars['Float']['input']
}

export type QueryNoticeBannersArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>
  placement?: InputMaybe<BannerPlacement>
}

export type QueryPartnerArgs = {
  id: Scalars['Float']['input']
}

export type QueryPartnerApplicationArgs = {
  id: Scalars['Float']['input']
}

export type QueryPartnerIncomeClawbackLineItemsArgs = {
  input: PartnerIncomeInput
}

export type QueryPartnerIncomeLineItemsArgs = {
  input: PartnerIncomeInput
}

export type QueryPartnerInvitesArgs = {
  partnerId: Scalars['Float']['input']
}

export type QueryPartnerOnboardingArgs = {
  id: Scalars['Float']['input']
}

export type QueryPartnerSubRolesArgs = {
  partnerId: Scalars['Float']['input']
}

export type QueryPartnersArgs = {
  pagination: PaginationInput
}

export type QueryPdfTemplateArgs = {
  type: PdfTemplateType
}

export type QueryProductByIdArgs = {
  id: Scalars['String']['input']
}

export type QueryProductByNameArgs = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type QueryProductsByPartnerArgs = {
  partnerIds: Array<Scalars['Float']['input']>
}

export type QueryPublicNoticeBannersArgs = {
  placement: BannerPlacement
}

export type QueryRegeneratePlatformKeysArgs = {
  platformId: Scalars['Float']['input']
}

export type QuerySubRolePermissionsArgs = {
  subRoleId: Scalars['Int']['input']
}

export type QueryUpdatePartnerOnboardingArgs = {
  address1?: InputMaybe<Scalars['String']['input']>
  business_dba?: InputMaybe<Scalars['String']['input']>
  business_name?: InputMaybe<Scalars['String']['input']>
  business_phone?: InputMaybe<Scalars['String']['input']>
  business_start_year?: InputMaybe<Scalars['Float']['input']>
  business_tax_id?: InputMaybe<Scalars['String']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  contact_phone?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  first_name: Scalars['String']['input']
  id: Scalars['Float']['input']
  industry?: InputMaybe<Scalars['String']['input']>
  last_name: Scalars['String']['input']
  offer_description?: InputMaybe<Scalars['String']['input']>
  owner_dob?: InputMaybe<Scalars['String']['input']>
  owner_drivers_license?: InputMaybe<Scalars['String']['input']>
  owner_ownership_percent?: InputMaybe<Scalars['Float']['input']>
  owner_ssn?: InputMaybe<Scalars['String']['input']>
  owners?: InputMaybe<Array<OwnerInfoInput>>
  referred_by?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  website?: InputMaybe<Scalars['String']['input']>
  zip?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserArgs = {
  id: Scalars['Float']['input']
  partnerId?: InputMaybe<Scalars['Float']['input']>
}

export type QueryUserPartnerSubRolesArgs = {
  partnerId: Scalars['Int']['input']
  userId: Scalars['Int']['input']
}

export type QueryUserPermissionsArgs = {
  partnerId: Scalars['Float']['input']
  userId: Scalars['Float']['input']
}

/** Credentials to verify */
export type RefreshTokensInput = {
  token: Scalars['String']['input']
}

export type RegisterPlatformArgs = {
  /** Name of the new platform */
  platformName: Scalars['String']['input']
  /** ID of the parent user to platform */
  userId: Scalars['Int']['input']
}

export type RegisterPlatformResponse = {
  __typename?: 'RegisterPlatformResponse'
  /** The api key that will be sent to us */
  apiKey: Scalars['String']['output']
  /** The platform that is being registered */
  platform: Platform
  /** The secret key that a platform needs */
  secretKey: Scalars['String']['output']
}

/** Credentials to verify */
export type SendEmailOneTimeCodeInput = {
  email: Scalars['String']['input']
}

/** An authenticated user */
export type SendEmailOneTimeCodeResult = {
  __typename?: 'SendEmailOneTimeCodeResult'
  email: Scalars['String']['output']
  message: Scalars['String']['output']
  sent: Scalars['Boolean']['output']
}

/** Credentials to verify */
export type SendPhoneOneTimeCodeInput = {
  phone: Scalars['String']['input']
}

/** An authenticated user */
export type SendPhoneOneTimeCodeResult = {
  __typename?: 'SendPhoneOneTimeCodeResult'
  message: Scalars['String']['output']
  phone: Scalars['String']['output']
  sent: Scalars['Boolean']['output']
}

export type ServicingAgreementContractDataInput = {
  amountPerPeriod: Scalars['String']['input']
  amountTotal: Scalars['String']['input']
  initialPayment: Scalars['String']['input']
  parnterName: Scalars['String']['input']
  paymentFrequency: Scalars['String']['input']
  paymentsTotal: Scalars['String']['input']
  productName: Scalars['String']['input']
  sellRate: Scalars['String']['input']
}

/** Credentials to verify */
export type SignInInput = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

/** Credentials to verify */
export type SignUpInput = {
  email: Scalars['String']['input']
  first_name: Scalars['String']['input']
  last_name: Scalars['String']['input']
  password: Scalars['String']['input']
  phone: Scalars['String']['input']
  platform?: InputMaybe<Scalars['String']['input']>
  platform_merchant_id: Scalars['String']['input']
}

/** Centrex stage enum */
export enum Stage {
  Activation = 'ACTIVATION',
  Active = 'ACTIVE',
  ClosedLost = 'CLOSED_LOST',
  Collections = 'COLLECTIONS',
  Completed = 'COMPLETED',
  MerchantActivation = 'MERCHANT_ACTIVATION',
  MerchantActive = 'MERCHANT_ACTIVE',
  MerchantInactive = 'MERCHANT_INACTIVE',
  Nurture = 'NURTURE',
  Opportunity = 'OPPORTUNITY',
  UnderwritingCustomer = 'UNDERWRITING_CUSTOMER',
  UnderwritingPartner = 'UNDERWRITING_PARTNER',
}

/** Centrex status enum */
export enum Status {
  AbandonedForm = 'ABANDONED_FORM',
  AccountSettled = 'ACCOUNT_SETTLED',
  AchFundingPendingFirstPayment = 'ACH_FUNDING_PENDING_FIRST_PAYMENT',
  Activating = 'ACTIVATING',
  Approved = 'APPROVED',
  BankStatementsRequested = 'BANK_STATEMENTS_REQUESTED',
  CanceledPendingCancellation = 'CANCELED_PENDING_CANCELLATION',
  CanceledPendingClawback = 'CANCELED_PENDING_CLAWBACK',
  CanceledPendingRefund = 'CANCELED_PENDING_REFUND',
  CanceledSettled = 'CANCELED_SETTLED',
  ChargebackPendingClawback = 'CHARGEBACK_PENDING_CLAWBACK',
  ChargebackSettled = 'CHARGEBACK_SETTLED',
  CoachUw = 'COACH_UW',
  CreditLocked = 'CREDIT_LOCKED',
  Declined = 'DECLINED',
  Defaulted = 'DEFAULTED',
  DefaultedPendingClawback = 'DEFAULTED_PENDING_CLAWBACK',
  DefaultedSettled = 'DEFAULTED_SETTLED',
  DocumentsRequested = 'DOCUMENTS_REQUESTED',
  Duplicate = 'DUPLICATE',
  FailedPayment = 'FAILED_PAYMENT',
  Funded = 'FUNDED',
  FundingEnterFirstPayment = 'FUNDING_ENTER_FIRST_PAYMENT',
  FundingEnterSecondPayment = 'FUNDING_ENTER_SECOND_PAYMENT',
  FundingInCollections = 'FUNDING_IN_COLLECTIONS',
  FundingInRepayment = 'FUNDING_IN_REPAYMENT',
  FundingModifiedPayment = 'FUNDING_MODIFIED_PAYMENT',
  FundingOnHold = 'FUNDING_ON_HOLD',
  FundingParticipationPending = 'FUNDING_PARTICIPATION_PENDING',
  FundingPausedPayment = 'FUNDING_PAUSED_PAYMENT',
  FundingToBeSent = 'FUNDING_TO_BE_SENT',
  InCollectionsFuturePayment = 'IN_COLLECTIONS_FUTURE_PAYMENT',
  InCollectionsPendingPayment = 'IN_COLLECTIONS_PENDING_PAYMENT',
  InRepayment = 'IN_REPAYMENT',
  InUnderwriting = 'IN_UNDERWRITING',
  MerchantActive = 'MERCHANT_ACTIVE',
  MerchantDeclined = 'MERCHANT_DECLINED',
  MerchantFinalReview = 'MERCHANT_FINAL_REVIEW',
  MerchantInactive = 'MERCHANT_INACTIVE',
  MerchantNotMovingForward = 'MERCHANT_NOT_MOVING_FORWARD',
  MerchantOfferSent = 'MERCHANT_OFFER_SENT',
  MerchantOnboarding = 'MERCHANT_ONBOARDING',
  MerchantPendingPayee = 'MERCHANT_PENDING_PAYEE',
  MerchantReadyForLinks = 'MERCHANT_READY_FOR_LINKS',
  MerchantSuspended = 'MERCHANT_SUSPENDED',
  PaidInFull = 'PAID_IN_FULL',
  RequestingCancellation = 'REQUESTING_CANCELLATION',
  ServicingEnterFirstPayment = 'SERVICING_ENTER_FIRST_PAYMENT',
  ServicingInCollections = 'SERVICING_IN_COLLECTIONS',
  ServicingInRepayment = 'SERVICING_IN_REPAYMENT',
  ServicingModifiedPayment = 'SERVICING_MODIFIED_PAYMENT',
  ServicingParticipationPending = 'SERVICING_PARTICIPATION_PENDING',
  ServicingPausedPayment = 'SERVICING_PAUSED_PAYMENT',
  Started = 'STARTED',
  SubscriptionCanceled = 'SUBSCRIPTION_CANCELED',
  WentDark = 'WENT_DARK',
  WriteOff = 'WRITE_OFF',
}

export type SubmitCreditCardResponse = {
  __typename?: 'SubmitCreditCardResponse'
  message?: Maybe<Scalars['String']['output']>
  success: Scalars['Boolean']['output']
}

export type Transaction = {
  __typename?: 'Transaction'
  amount: Scalars['Float']['output']
  centrexId?: Maybe<Scalars['String']['output']>
  clearedAt?: Maybe<Scalars['String']['output']>
  contract: Contract
  contractId: Scalars['Float']['output']
  id: Scalars['Float']['output']
  /** Lets us know if customer was notified of the new contract */
  merchantWebhookSent: Scalars['Boolean']['output']
  method: PaymentMethod
  paymentNumber?: Maybe<Scalars['Int']['output']>
  /** Lets us know if customer was notified of the new contract */
  platformWebhookSent: Scalars['Boolean']['output']
  processedAt?: Maybe<Scalars['String']['output']>
  status: PaymentStatus
  transactionId: Scalars['String']['output']
  type: PaymentType
}

export type TransactionEdge = {
  __typename?: 'TransactionEdge'
  cursor: Scalars['ID']['output']
  node: Transaction
}

export type TransactionsByType = {
  __typename?: 'TransactionsByType'
  incoming: PagedTransactions
  outgoing: PagedTransactions
}

export type TransactionsByTypeIncomingArgs = {
  pagination: PaginationInput
}

export type TransactionsByTypeOutgoingArgs = {
  pagination: PaginationInput
}

export type UpdatePartnerOnboarding = {
  __typename?: 'UpdatePartnerOnboarding'
  /** Operation message */
  message: Scalars['String']['output']
  /** Operation success status */
  success: Scalars['Boolean']['output']
}

export type UpdatePartnerSubRoleInput = {
  /** ID of the partner sub-role to update */
  id: Scalars['Int']['input']
  /** Name of the sub-role */
  name: Scalars['String']['input']
  /** ID of the partner */
  partnerId: Scalars['Int']['input']
}

export type UpsertCustomerInput = {
  address?: InputMaybe<AddressInput>
  collectionAttempts?: InputMaybe<Scalars['Float']['input']>
  dob?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  firstName: Scalars['String']['input']
  id?: InputMaybe<Scalars['Float']['input']>
  lastName: Scalars['String']['input']
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  phoneNumberExtension?: InputMaybe<Scalars['String']['input']>
  userId: Scalars['Float']['input']
}

/** Portal user account */
export type User = {
  __typename?: 'User'
  /** User Auth0 ID */
  auth0Id?: Maybe<Scalars['String']['output']>
  /** Customers associated with this user */
  customers: PagedCustomers
  /** User's email */
  email?: Maybe<Scalars['String']['output']>
  /** User's first name */
  firstName?: Maybe<Scalars['String']['output']>
  /** User ID */
  id: Scalars['Float']['output']
  /** User's last name */
  lastName?: Maybe<Scalars['String']['output']>
  /** User's last sign-in date */
  lastSignInAt?: Maybe<Scalars['DateTime']['output']>
  /** Partners associated with this user */
  partners: PagedPartners
  /** User phone number used for auth */
  phoneNumber?: Maybe<Scalars['String']['output']>
  /** Platform associated with this user */
  platform: Platform
  /** User role */
  role: UserRole
  subRole?: Maybe<PartnerSubRole>
  /** Current user connection with given partner */
  userPartnerConnection: UserPartnerConnection
  /** User preferences */
  userPreferences?: Maybe<UserPreferences>
}

/** Portal user account */
export type UserCustomersArgs = {
  pagination: PaginationInput
}

/** Portal user account */
export type UserPartnersArgs = {
  pagination: PaginationInput
}

/** Portal user account */
export type UserSubRoleArgs = {
  partnerId: Scalars['Float']['input']
}

/** Portal user account */
export type UserUserPartnerConnectionArgs = {
  partnerId: Scalars['Float']['input']
}

export type UserEdge = {
  __typename?: 'UserEdge'
  cursor: Scalars['ID']['output']
  node: User
}

/** User partner connection */
export type UserPartnerConnection = {
  __typename?: 'UserPartnerConnection'
  isInformationComplete: Scalars['Boolean']['output']
  isOnboarded: Scalars['Boolean']['output']
  isSuspended: Scalars['Boolean']['output']
  isUserOwner: Scalars['Boolean']['output']
  partnerId: Scalars['Int']['output']
  userId: Scalars['Int']['output']
}

/** A single permission for a user on a partner */
export type UserPermission = {
  __typename?: 'UserPermission'
  allowed: Scalars['Boolean']['output']
  id: Scalars['Int']['output']
  partnerId: Scalars['Int']['output']
  permissionKey: PermissionKey
  userId: Scalars['Int']['output']
}

export type UserPermissionInput = {
  allowed: Scalars['Boolean']['input']
  permissionKey: PermissionKey
}

/** User preferences */
export type UserPreferences = {
  __typename?: 'UserPreferences'
  /** ID of the user preferences record */
  id: Scalars['Float']['output']
  /** User preferences */
  preferences?: Maybe<Preferences>
  /** User ID associated with the preferences */
  userId: Scalars['Float']['output']
}

export type UserPreferencesInput = {
  columnVisibility?: InputMaybe<Scalars['JSON']['input']>
  dismissedBanners?: InputMaybe<Scalars['JSON']['input']>
}

export enum UserRole {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  None = 'NONE',
  Partner = 'PARTNER',
}

/** Credentials to verify */
export type VerifyEmailOneTimeCodeInput = {
  /** One time code that was sent to email */
  code: Scalars['String']['input']
  /** Email where otc was sent */
  email: Scalars['String']['input']
  /** Update Email? (True by default) */
  updateEmail?: InputMaybe<Scalars['Boolean']['input']>
  /** Required if updateEmail is true - Id of user whose email will be updated */
  userId?: InputMaybe<Scalars['Float']['input']>
}

/** Credentials to verify */
export type VerifyPhoneOneTimeCodeInput = {
  clearedAt?: InputMaybe<Scalars['String']['input']>
  code: Scalars['String']['input']
  /** Create a new user (after verification) if none associated with phone number. Default = true */
  createUserIfNone?: InputMaybe<Scalars['Boolean']['input']>
  phone: Scalars['String']['input']
}

export type SignInMutationVariables = Exact<{
  input: SignInInput
}>

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'AuthenticationResult' } & Pick<
    AuthenticationResult,
    'token'
  > & {
      user: { __typename?: 'User' } & Pick<
        User,
        'firstName' | 'id' | 'lastName' | 'role'
      > & {
          userPreferences?: Maybe<
            { __typename?: 'UserPreferences' } & Pick<
              UserPreferences,
              'id' | 'userId'
            > & {
                preferences?: Maybe<
                  { __typename?: 'Preferences' } & Pick<
                    Preferences,
                    'columnVisibility'
                  >
                >
              }
          >
        }
    }
}

export type PlatformTokenMutationVariables = Exact<{
  token: Scalars['String']['input']
}>

export type PlatformTokenMutation = { __typename?: 'Mutation' } & {
  platformToken: { __typename?: 'PlatformTokenResponse' } & Pick<
    PlatformTokenResponse,
    'valid'
  >
}

export type MockWebhooksMutationVariables = Exact<{
  webhookType: PlatformWebhooksType
  orderId?: InputMaybe<Scalars['String']['input']>
  paymentAmount?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  merchantId?: InputMaybe<Scalars['String']['input']>
}>

export type MockWebhooksMutation = { __typename?: 'Mutation' } & {
  mockWebhooks: { __typename?: 'MockWebhookResponse' } & {
    merchant_status?: Maybe<
      { __typename?: 'MockMerchantStatusPayload' } & Pick<
        MockMerchantStatusPayload,
        | 'event_type'
        | 'event_date'
        | 'merchant_id'
        | 'status'
        | 'external_merchant_id'
        | 'level'
      >
    >
    payment_success?: Maybe<
      { __typename?: 'MockPlatformPaymentPayload' } & Pick<
        MockPlatformPaymentPayload,
        | 'event_type'
        | 'event_date'
        | 'order_id'
        | 'checkout_id'
        | 'payment_amount'
        | 'payment_date'
      >
    >
    payment_failure?: Maybe<
      { __typename?: 'MockPlatformPaymentPayload' } & Pick<
        MockPlatformPaymentPayload,
        | 'event_type'
        | 'event_date'
        | 'order_id'
        | 'checkout_id'
        | 'payment_amount'
        | 'payment_date'
      >
    >
    payout?: Maybe<
      { __typename?: 'MockPlatformPayoutPayload' } & Pick<
        MockPlatformPayoutPayload,
        'order_id' | 'checkout_id' | 'payment_amount' | 'payment_date'
      >
    >
    status_change?: Maybe<
      { __typename?: 'MockStatusChangePayload' } & Pick<
        MockStatusChangePayload,
        | 'event_type'
        | 'event_date'
        | 'order_id'
        | 'checkout_id'
        | 'plan_id'
        | 'old_status'
        | 'status'
      >
    >
  }
}

export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      user {
        firstName
        id
        lastName
        role
        userPreferences {
          id
          userId
          preferences {
            columnVisibility
          }
        }
      }
      token
    }
  }
`
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  )
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>
export const PlatformTokenDocument = gql`
  mutation platformToken($token: String!) {
    platformToken(token: $token) {
      valid
    }
  }
`
export type PlatformTokenMutationFn = Apollo.MutationFunction<
  PlatformTokenMutation,
  PlatformTokenMutationVariables
>

/**
 * __usePlatformTokenMutation__
 *
 * To run a mutation, you first call `usePlatformTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlatformTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [platformTokenMutation, { data, loading, error }] = usePlatformTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function usePlatformTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PlatformTokenMutation,
    PlatformTokenMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PlatformTokenMutation,
    PlatformTokenMutationVariables
  >(PlatformTokenDocument, options)
}
export type PlatformTokenMutationHookResult = ReturnType<
  typeof usePlatformTokenMutation
>
export type PlatformTokenMutationResult =
  Apollo.MutationResult<PlatformTokenMutation>
export type PlatformTokenMutationOptions = Apollo.BaseMutationOptions<
  PlatformTokenMutation,
  PlatformTokenMutationVariables
>
export const MockWebhooksDocument = gql`
  mutation MockWebhooks(
    $webhookType: PlatformWebhooksType!
    $orderId: String
    $paymentAmount: String
    $status: String
    $merchantId: String
  ) {
    mockWebhooks(
      webhookType: $webhookType
      orderId: $orderId
      paymentAmount: $paymentAmount
      status: $status
      merchantId: $merchantId
    ) {
      merchant_status {
        event_type
        event_date
        merchant_id
        status
        external_merchant_id
        level
      }
      payment_success {
        event_type
        event_date
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      payment_failure {
        event_type
        event_date
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      payout {
        order_id
        checkout_id
        payment_amount
        payment_date
      }
      status_change {
        event_type
        event_date
        order_id
        checkout_id
        plan_id
        old_status
        status
      }
    }
  }
`
export type MockWebhooksMutationFn = Apollo.MutationFunction<
  MockWebhooksMutation,
  MockWebhooksMutationVariables
>

/**
 * __useMockWebhooksMutation__
 *
 * To run a mutation, you first call `useMockWebhooksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMockWebhooksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mockWebhooksMutation, { data, loading, error }] = useMockWebhooksMutation({
 *   variables: {
 *      webhookType: // value for 'webhookType'
 *      orderId: // value for 'orderId'
 *      paymentAmount: // value for 'paymentAmount'
 *      status: // value for 'status'
 *      merchantId: // value for 'merchantId'
 *   },
 * });
 */
export function useMockWebhooksMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MockWebhooksMutation,
    MockWebhooksMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    MockWebhooksMutation,
    MockWebhooksMutationVariables
  >(MockWebhooksDocument, options)
}
export type MockWebhooksMutationHookResult = ReturnType<
  typeof useMockWebhooksMutation
>
export type MockWebhooksMutationResult =
  Apollo.MutationResult<MockWebhooksMutation>
export type MockWebhooksMutationOptions = Apollo.BaseMutationOptions<
  MockWebhooksMutation,
  MockWebhooksMutationVariables
>
