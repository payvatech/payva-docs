import { useRouter } from 'next/router'

import { cn } from '@/lib/utils'

import { Link } from '../../link'

type NavigationLinkProps = {
  href: string
  icon: NonNullable<React.ReactNode>
  label: string
  isExternal?: boolean
  isButton?: boolean
  disabled?: boolean
  active?: boolean
}

const NavigationLink = ({ href, icon, label, isExternal, disabled, active }: NavigationLinkProps) => {
  const { pathname } = useRouter()
  // const isActive = active ? pathname.includes(href)
  const isActive = active ? active : pathname.includes(href)
  return (
    <li
      className={cn(
        'flex w-full cursor-pointer rounded-full text-sm font-medium text-white',
        'ease transition-colors duration-150',
        isActive ? 'bg-brand-tertiary dark:bg-brand-primary' : 'hover:bg-[#9747ff]/30',
        disabled ? 'pointer-events-none opacity-50' : ''
      )}
    >
      <Link href={href} isExternal={isExternal} className="flex w-full items-center gap-2 px-4 py-2.5">
        {icon}
        <span className="flex-1">{label}</span>
      </Link>
    </li>
  )
}

export { NavigationLink }
