import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(): React.JSX.Element {
  const { pathname } = useLocation()

  useEffect((): void => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <></>
}
