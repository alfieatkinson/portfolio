import React from "react"
import { lazy } from "react"
import clsx from "clsx"
import useFadeInMounted from "@/hooks/useFadeInMounted"

const Section = lazy(() => import("@/components/layout/Section"))

export default function Hero(): React.JSX.Element {
  const { animationClass } = useFadeInMounted()
  
  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
          Hey👋, I'm Louis Gustavo
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight'
          )}
        >
          I specialize in both building <b>web interfaces</b> and{' '}
          <b>backend systems</b>.
        </h1>
        <p
          className={clsx(
            'animate-fade-in !delay-300',
            'text-muted-dark dark:text-muted',
            'sm:text-lg lg:text-xl',
            'pb-0'
          )}
        >
          Software Engineer
        </p>
      </div>
    </Section>
  )
}