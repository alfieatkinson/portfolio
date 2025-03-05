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
          content='Alfie Atkinson is a UK-based software engineer specialising in full-stack web development with React, Django, and Node.js.'
        />
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
