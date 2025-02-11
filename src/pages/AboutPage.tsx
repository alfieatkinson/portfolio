import React from 'react'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import about from '@/_data/about.md'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'))
const Navbar = lazy(() => import('@/components/layout/Navbar'))
const About = lazy(() => import('@/components/sections/About'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function AboutPage(): React.JSX.Element {
  const [content, setContent] = useState<string>('')

  useEffect((): void => {
    fetch(about as RequestInfo)
      .then((response: Response): Promise<string> => response.text())
      .then((text: string): void => {
        setContent(text)
        localStorage.about = text
      })
      .catch((): void => setContent('Failed to load content. Please reload the page!'))
  }, [content])

  return (
    <>
      <Helmet>
        <title>About | Alfie Atkinson</title>
        <meta
          name='description'
          content='Alfie Atkinson is a UK-based software engineer specialising in full-stack web development with React, Django, and Node.js.'
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <About children={content} />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}