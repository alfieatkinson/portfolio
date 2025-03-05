import React from 'react'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'))
const Navbar = lazy(() => import('@/components/layout/Navbar'))
const GitHub = lazy(() => import('@/components/sections/GitHub'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Projects | Alfie Atkinson</title>
        <meta
          name="description"
          content="Explore Alfie Atkinson's latest projects, including machine learning, web development, and more."
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <GitHub />
          <Projects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}