import React from 'react'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'))
const Navbar = lazy(() => import('@/components/layout/Navbar'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function AboutPage(): React.JSX.Element {
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
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}