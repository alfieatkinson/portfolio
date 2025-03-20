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
          content='Learn about Alfie Atkinson, a passionate UK-based full-stack software engineer with expertise in Python, TypeScript, MERN, Django, and DevOps. Discover my journey and background.'
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Software Engineer, Full-Stack Developer, About Alfie, Python, TypeScript, React, Django, DevOps, Portfolio, UK Developer, Biography'
        />
        <meta property='og:title' content='About | Alfie Atkinson' />
        <meta
          property='og:description'
          content='Discover the personal journey and professional background of Alfie Atkinson, a full-stack software engineer passionate about modern web development.'
        />
        <meta property='og:image' content='https://alfieatkinson.dev/headshot.jpg' />
        <meta property='og:url' content='https://alfieatkinson.dev/about' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='About | Alfie Atkinson' />
        <meta
          name='twitter:description'
          content="Learn about Alfie Atkinson's journey as a full-stack software engineer with extensive experience in Python, TypeScript, and modern web technologies."
        />
        <meta name='twitter:image' content='https://alfieatkinson.dev/headshot.jpg' />
        <link rel='canonical' href='https://alfieatkinson.dev/about' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
