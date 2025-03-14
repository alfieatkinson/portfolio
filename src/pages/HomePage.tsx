import React from 'react'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import PageWrapper from '@/components/layout/PageWrapper'

const Navbar = lazy(() => import('@/components/layout/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Alfie Atkinson | Software Engineer</title>
        <meta
          name='description'
          content='Alfie Atkinson is a UK-based software engineer specialising in full-stack web development with Python, TypeScript, MERN, and Django. Explore his portfolio and projects.'
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Software Engineer, Full Stack Developer, Python, TypeScript, React, Node.js, Django, MongoDB, SQL, DevOps, Web Developer, UK Developer, Portfolio'
        />
        <meta property="og:title" content="Alfie Atkinson | Software Engineer" />
        <meta
          property="og:description"
          content="Explore Alfie Atkinson's portfolio showcasing his work in full-stack development, web applications, and more."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="https://alfieatkinson.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alfie Atkinson | Software Engineer" />
        <meta
          name="twitter:description"
          content="Explore Alfie Atkinson's portfolio showcasing his work in full-stack development, web applications, and more."
        />
        <meta name="twitter:image" content="URL_to_image" />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <br />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
