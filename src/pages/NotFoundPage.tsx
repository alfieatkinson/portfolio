import React from 'react'
import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'))
const Navbar = lazy(() => import('@/components/layout/Navbar'))
const NotFound = lazy(() => import('@/components/sections/NotFound'))
const Footer = lazy(() => import('@/components/layout/Footer'))

export default function NotFoundPage(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Alfie Atkinson</title>
        <meta
          name='description'
          content="Sorry, the page you're looking for doesn't exist. It may have been moved or deleted. Check out other pages on my portfolio."
        />
        <meta
          name='keywords'
          content='404, Not Found, Page Not Found, Error, Alfie Atkinson, Portfolio, Software Engineer'
        />
        <meta property='og:title' content='Page Not Found | Alfie Atkinson' />
        <meta
          property='og:description'
          content="Sorry, the page you're looking for doesn't exist. It may have been moved or deleted. Check out other pages on my portfolio."
        />
        <meta property='og:image' content='https://alfieatkinson.dev/headshot.jpg' />
        <meta property='og:url' content='https://alfieatkinson.dev/404' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Page Not Found | Alfie Atkinson' />
        <meta
          name='twitter:description'
          content="Sorry, the page you're looking for doesn't exist. It may have been moved or deleted. Check out other pages on my portfolio."
        />
        <meta name='twitter:image' content='https://alfieatkinson.dev/headshot.jpg' />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <NotFound />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
