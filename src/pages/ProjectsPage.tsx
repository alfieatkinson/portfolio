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
          content="Explore Alfie Atkinson's portfolio of projects, including web development, machine learning, AI tools, and software engineering."
        />
        <meta
          name='keywords'
          content='Alfie Atkinson, Software Engineer, Projects, Web Development, Machine Learning, Python, TypeScript, AI, React, Django, Node.js, MongoDB, SQL, DevOps, Portfolio'
        />
        <meta property="og:title" content="Projects | Alfie Atkinson" />
        <meta
          property="og:description"
          content="Explore a diverse range of projects from Alfie Atkinson, showcasing expertise in full-stack development, AI, machine learning, and more."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="https://alfieatkinson.dev/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects | Alfie Atkinson" />
        <meta
          name="twitter:description"
          content="Explore a diverse range of projects from Alfie Atkinson, showcasing expertise in full-stack development, AI, machine learning, and more."
        />
        <meta name="twitter:image" content="URL_to_image" />
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
