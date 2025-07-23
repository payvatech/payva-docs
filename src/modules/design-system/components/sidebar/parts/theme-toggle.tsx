import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { Switch } from '@/modules/design-system/components/switch'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === 'dark' && mounted

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex items-center justify-between gap-4 py-2.5 pl-4">
      {isDarkMode ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      <span className="mr-auto">{isDarkMode ? 'Dark' : 'Light'} Theme</span>
      <Switch checked={isDarkMode} onClick={() => setTheme(isDarkMode ? 'light' : 'dark')} />
    </div>
  )
}

export { ThemeToggle }
