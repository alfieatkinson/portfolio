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
        <title>Alfie Atkinson | Software Engineer Portfolio</title>

        <meta
          name='description'
          content="Discover Alfie Atkinson, a UK-based full-stack software engineer specialising in Python, TypeScript, MERN, and Django. Explore my projects, resume, and portfolio."
        />

        <meta
          name='keywords'
          content="Alfie Atkinson, Software Engineer, Full-Stack Developer, Python, TypeScript, React, Node.js, Django, Portfolio, UK Developer"
        />

        <meta property="og:title" content="Alfie Atkinson | Software Engineer Portfolio" />
        <meta
          property="og:description"
          content="Discover Alfie Atkinson's portfolio and projects in modern web development and software engineering."
        />
        <meta property="og:image" content="https://alfieatkinson.dev/headshot.jpg" />
        <meta property="og:url" content="https://alfieatkinson.dev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alfie Atkinson | Software Engineer Portfolio" />
        <meta
          name="twitter:description"
          content="Discover the innovative work of Alfie Atkinson, a full-stack software engineer. Explore projects, resume, and more."
        />
        <meta name="twitter:image" content="https://alfieatkinson.dev/headshot.jpg" />

        <link rel="canonical" href="https://alfieatkinson.dev" />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
