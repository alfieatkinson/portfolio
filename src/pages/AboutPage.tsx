import React from 'react'
import { Helmet } from 'react-helmet'
import PageWrapper from '@/components/layout/PageWrapper'
import Navbar from '@/components/layout/Navbar'
import About from '@/components/sections/About'
import Footer from '@/components/layout/Footer'

type AboutPageProps = {
  aboutContent: string
}

export default function AboutPage({ aboutContent }: AboutPageProps): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>About | Alfie Atkinson</title>
        <meta
          name="description"
          content="Learn about Alfie Atkinson, a passionate UK-based full-stack software engineer with expertise in Python, TypeScript, MERN, Django, and DevOps. Discover my journey and background."
        />
        <meta name="keywords" content="Alfie Atkinson, Software Engineer, Full-Stack Developer, About Alfie, Python, TypeScript, React, Django, DevOps, Portfolio, UK Developer, Biography" />
        <meta property="og:title" content="About | Alfie Atkinson" />
        <meta
          property="og:description"
          content="Discover the personal journey and professional background of Alfie Atkinson, a full-stack software engineer passionate about modern web development."
        />
        <meta property="og:image" content="https://alfieatkinson.dev/headshot.jpg" />
        <meta property="og:url" content="https://alfieatkinson.dev/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Alfie Atkinson" />
        <meta
          name="twitter:description"
          content="Learn about Alfie Atkinson's journey as a full-stack software engineer with extensive experience in Python, TypeScript, and modern web technologies."
        />
        <meta name="twitter:image" content="https://alfieatkinson.dev/headshot.jpg" />
        <link rel="canonical" href="https://alfieatkinson.dev/about" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <PageWrapper>
        <Navbar />
        {/* Pass the static Markdown content to the About component */}
        <About>{aboutContent}</About>
        <Footer />
      </PageWrapper>
    </>
  )
}

export async function getStaticProps() {
  // Load the Markdown content at build time
  const aboutContent = await import('@/_data/about.md')
  
  return {
    props: {
      aboutContent: aboutContent.default, // Ensure your .d.ts declares this as a string
    },
  }
}
