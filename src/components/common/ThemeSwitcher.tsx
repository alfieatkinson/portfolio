import React from 'react'
import { lazy, useState } from 'react'
import checkDarkTheme from '@/utils/checkDarkTheme'
import SunLineIcon from 'remixicon-react/SunLineIcon'
import MoonLineIcon from 'remixicon-react/MoonLineIcon'

const IconButton = lazy(() => import('@/components/common/reusable/buttons/IconButton'))

export default function ThemeSwitcher(): React.JSX.Element {
  const [isDark, setDark] = useState<boolean>(checkDarkTheme)

  const toggleDarkTheme = (): void => {
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'light' : 'dark'
    setDark(!isDark)
  }

  return (
    <IconButton
      className='duration-300'
      icon={isDark ? <MoonLineIcon size={20} /> : <SunLineIcon size={20} />}
      screenReaderText='Toggle theme'
      onClick={toggleDarkTheme}
    />
  )
}
