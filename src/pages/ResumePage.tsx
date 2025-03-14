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
          content="View the professional resume of Alfie Atkinson, a full-stack software engineer with extensive experience in Python, TypeScript, React, and DevOps. See my career journey and technical expertise."
        />
        <meta
          name='keywords'
          content="Alfie Atkinson, Resume, Software Engineer, Full-Stack Developer, Career, Python, TypeScript, React, DevOps, Portfolio, UK Developer"
        />
        <meta property="og:title" content="Resume | Alfie Atkinson" />
        <meta
          property="og:description"
          content="Explore the resume of Alfie Atkinson, detailing his professional experience, technical skills, and career achievements as a full-stack software engineer."
        />
        <meta property="og:image" content="https://alfieatkinson.dev/headshot.jpg" />
        <meta property="og:url" content="https://alfieatkinson.dev/resume" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resume | Alfie Atkinson" />
        <meta
          name="twitter:description"
          content="Discover Alfie Atkinson's professional journey and technical expertise in full-stack development, showcased in his detailed resume."
        />
        <meta name="twitter:image" content="https://alfieatkinson.dev/headshot.jpg" />
        <link rel="canonical" href="https://alfieatkinson.dev/resume" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
