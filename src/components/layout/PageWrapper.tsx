import React from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function PageWrapper({ className, children }: ComponentProps): React.JSX.Element {
  return <div className={clsx(className, 'bg-overlay dark:bg-overlay-dark pt-18')}>{children}</div>
}
