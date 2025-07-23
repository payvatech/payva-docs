import { MdDocumentScanner, MdEventAvailable, MdPayment, MdPayments } from 'react-icons/md'

import { ROUTES } from '@/config/routes'

import { NavigationLink } from './navigation-link'

const CustomerNavigation = () => {
  return (
    <>
      <NavigationLink href={ROUTES.myPlans} icon={<MdEventAvailable size={20} />} label="My Plans" />
      <NavigationLink href={ROUTES.myDocuments} icon={<MdDocumentScanner size={20} />} label="My Documents" />
      <NavigationLink href={ROUTES.paymentMethods} icon={<MdPayment size={20} />} label="Payment Methods" />
      <NavigationLink href={ROUTES.oneTimePayment} icon={<MdPayments size={20} />} label="One-Time Payment" />
    </>
  )
}

export { CustomerNavigation }
