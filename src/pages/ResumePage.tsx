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
        <title>Projects | Alfie Atkinson</title>
        <meta
          name="description"
          content="View Alfie Atkinson's resume, the elevator pitch!."
        />
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