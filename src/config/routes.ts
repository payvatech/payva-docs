const ROUTES = {
  root: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  unauthorized: '/unauthorized',
  dashboard: '/dashboard',
  checkout: (checkoutId: number) => `/checkout/${checkoutId}`,
  onboarding: '/onboarding',
  docs: '/docs',
  products: '/products',
  // Admin
  users: '/users',
  partners: '/partners',
  partnerSales: (partnerId: number) => `/partners/${partnerId}/sales`,
  partnerPayouts: (partnerId: number) => `/partners/${partnerId}/payouts`,
  customerSale: ({ partnerId, contractId }: { partnerId: number; contractId: number }) =>
    `/partners/${partnerId}/sales/${contractId}`,
  partnerDocuments: (partnerId: number) => `/partners/${partnerId}/documents`,
  pdfTemplates: '/pdf-templates',

  // Partner
  sales: '/sales',
  sale: (contractId: number) => `/sales/${contractId}`,
  payouts: '/payouts',
  secretKeys: '/keys',
  transactions: '/transactions',
  documents: '/documents',
  collections: '/collections',

  // Customer
  myPlans: '/my-plans',
  paymentMethods: '/payment-methods',
  oneTimePayment: '/one-time-payment',
  myDocuments: '/my-documents',
} as const

export { ROUTES }
