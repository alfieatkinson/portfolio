import React from 'react'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function HighlightText({ children }: ComponentProps): React.JSX.Element {
  const ref = useRef<HTMLLinkElement>(null)
  const [degree, setDegree] = useState<number>(0)

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setDegree((degree + 10) % 360)
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degree}deg, var(--tw-gradient-stops))`
      }
    }, 75)
    return (): void => clearInterval(interval)
  })

  return (
    <span
      ref={ref}
      className={clsx(
        'from-pink-600 to-fuchsia-700 bg-clip-text',
        'dark:from-fuchsia-500 dark:to-pink-400',
        'text-transparent transition',
      )}
    >
      <strong>{children}</strong>
    </span>
  )
}
