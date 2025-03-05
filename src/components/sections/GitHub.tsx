import React from 'react'
import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import constants from '@/constants'
import checkDarkTheme from '@/utils/checkDarkTheme'

const Section = lazy(() => import('@/components/layout/Section'))
const GitHubCalendar = lazy(() => import('react-github-calendar'))

export default function GitHub(): React.JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <div className={clsx(animationClass)}>
      <Section
        className='[&>*]:animate-fade-in'
      >
        <GitHubCalendar
          username={constants.social.github}
          blockSize={16}
          blockMargin={6}
          colorScheme={checkDarkTheme() ? 'dark' : 'light'}
          fontSize={16}
        />
      </Section>
    </div>
  )
}