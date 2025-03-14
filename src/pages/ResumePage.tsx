import React from 'react'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'))
const Navbar = lazy(() => import('@/components/layout/Navbar'))
const Resume = lazy(() => import('@/components/sections/Resume'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Resume | Alfie Atkinson</title>
        <meta
          name='description'
          content="View Alfie Atkinson's resume, featuring his experience in software engineering, full-stack development, and projects in Python, TypeScript, React, and DevOps."
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Resume, Software Engineer, Full Stack Developer, Python, TypeScript, React, Node.js, Django, DevOps, Portfolio, UK Developer'
        />
        <meta property="og:title" content="Resume | Alfie Atkinson" />
        <meta
          property="og:description"
          content="Explore Alfie Atkinson's professional experience and skill set as a full-stack software engineer, with a focus on React, Python, TypeScript, and DevOps."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="https://alfieatkinson.dev/resume" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume | Alfie Atkinson" />
        <meta
          name="twitter:description"
          content="Explore Alfie Atkinson's professional experience and skill set as a full-stack software engineer, with a focus on React, Python, TypeScript, and DevOps."
        />
        <meta name="twitter:image" content="URL_to_image" />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Resume />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
