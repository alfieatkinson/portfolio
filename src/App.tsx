import React from 'react'
import { lazy } from 'react'
import Router from '@/router'

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

export default function App(): React.JSX.Element {
  return (
    <>
      <Router />
      <ScrollToTop />
      <ScrollToTopFAB />
    </>
  )
}