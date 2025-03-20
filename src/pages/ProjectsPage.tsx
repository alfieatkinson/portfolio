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
          name='description'
          content='Explore a diverse range of projects by Alfie Atkinson, a full-stack software engineer specialising in modern web development, machine learning, and innovative tech solutions.'
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Software Engineer, Projects, Web Development, Machine Learning, Python, TypeScript, AI, React, Django, DevOps, Portfolio'
        />
        <meta property='og:title' content='Projects | Alfie Atkinson' />
        <meta
          property='og:description'
          content='Explore a diverse range of projects from Alfie Atkinson that showcase expertise in full-stack development, AI, and innovative technology solutions.'
        />
        <meta property='og:image' content='https://alfieatkinson.dev/headshot.jpg' />
        <meta property='og:url' content='https://alfieatkinson.dev/projects' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Projects | Alfie Atkinson' />
        <meta
          name='twitter:description'
          content='Discover the innovative projects of Alfie Atkinson, highlighting full-stack development, AI, and cutting-edge web technologies.'
        />
        <meta name='twitter:image' content='https://alfieatkinson.dev/headshot.jpg' />
        <link rel='canonical' href='https://alfieatkinson.dev/projects' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
