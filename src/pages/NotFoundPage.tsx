import React from 'react';
import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Preloader from '@/components/common/Preloader';

const PageWrapper = lazy(() => import('@/components/layout/PageWrapper'));
const Navbar = lazy(() => import('@/components/layout/Navbar'));
const NotFound = lazy(() => import('@/components/sections/NotFound'));
const Footer = lazy(() => import('@/components/layout/Footer'));

export default function NotFoundPage(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Alfie Atkinson</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <NotFound />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  );
}
