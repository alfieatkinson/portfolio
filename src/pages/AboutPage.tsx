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
          content="Learn more about Alfie Atkinson, a passionate UK-based software engineer with expertise in full-stack development, Python, TypeScript, MERN, Django, and DevOps."
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Software Engineer, Full Stack Developer, About Alfie, TypeScript, Python, React, Node.js, Django, MongoDB, SQL, DevOps, Portfolio, UK Developer, AI, Machine Learning'
        />
        <meta property="og:title" content="About | Alfie Atkinson" />
        <meta
          property="og:description"
          content="Learn about Alfie Atkinson's journey, his passion for software engineering, and his experience in web development and machine learning."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="https://alfieatkinson.dev/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Alfie Atkinson" />
        <meta
          name="twitter:description"
          content="Learn about Alfie Atkinson's journey, his passion for software engineering, and his experience in web development and machine learning."
        />
        <meta name="twitter:image" content="URL_to_image" />
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
