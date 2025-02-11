import React from 'react'
import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme'
import { Analytics } from '@vercel/analytics/react'

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

export default function App(): React.JSX.Element {
  useEffect((): void => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <>
      <Router />
      <ScrollToTop />
      <ScrollToTopFAB />
      <Analytics />
    </>
  )
}