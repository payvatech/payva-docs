import { MdBusinessCenter, MdGroup, MdHomeFilled, MdOutlinePictureAsPdf } from 'react-icons/md'

import { ROUTES } from '@/config/routes'

import { NavigationLink } from './navigation-link'

const AdminNavigation = () => {
  return (
    <>
      <NavigationLink href={ROUTES.dashboard} icon={<MdHomeFilled size={20} />} label="Overview" />
      <NavigationLink href={ROUTES.partners} icon={<MdBusinessCenter size={20} />} label="Partners" />
      <NavigationLink href={ROUTES.users} icon={<MdGroup size={20} />} label="Users" />
      <NavigationLink href={ROUTES.pdfTemplates} icon={<MdOutlinePictureAsPdf size={20} />} label="PDF Templates" />
    </>
  )
}

export { AdminNavigation }
