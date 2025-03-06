import { lazy } from 'react'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))

const github: LinkProps = {
  label: 'Source Code',
  icon: <GithubFillIcon size={22} />,
}

const live: LinkProps = {
  label: 'Live Demo',
  icon: <ExternalLinkFillIcon size={22} />,
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) links.push({ ...live, url })
  return links
}

const filters: string[] = [
  'HTML',
  'CSS',
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'Django',
  'Flask',
  'React',
  'Express.js',
  'Redux',
  'Redis',
  'Next.js',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'TailwindCSS',
  'Docker',
  'Git',
  'RESTful APIs',
  'PyQt',
  'TensorFlow',
  'NumPy',
  'Pandas',
  'Heroku',
  'Vercel',
]

const projects: ProjectProps[] = [
  {
    slug: 'open-license-media-web-app',
    featured: true,
    title: 'Open-License Media Web App',
    description:
      'A web application designed for searching, browsing, and managing open-license media, with secure user account management. Built with a TypeScript/React frontend and a Django/PostgreSQL backend.',
    techStacks: ['TypeScript', 'React', 'Redux', 'Next.js', 'TailwindCSS', 'Django', 'Redis', 'PostgreSQL'],
    otherTechStacks: ['HTML', 'CSS', 'Python', 'JavaScript', 'Git', 'Vercel', 'Heroku'],
    category: 'Full-stack development',
    links: getLinks('Open-License-Media-Web-App'),
  },
  {
    slug: 'portfolio',
    featured: true,
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with TypeScript, React, and TailwindCSS, deployed on Vercel.',
    techStacks: ['TypeScript', 'React', 'Node.js', 'TailwindCSS'],
    otherTechStacks: ['Git', 'HTML', 'CSS', 'JavaScript', 'Vercel'],
    category: 'Front-end development',
    links: getLinks('Portfolio-Website', 'https://alfieatkinson.dev'),
  },
  {
    slug: 'portfolio-old',
    featured: false,
    title: 'Old Portfolio Website',
    description: (
      <span>
        My previous portfolio website adapted from{' '}
        <InlineLink href='https://github.com/soumyajit4419/Portfolio'>Soumyajit's design</InlineLink>
        {' '} using JavaScript, React, Node.js, and Express.js.
      </span>
    ),
    techStacks: ['JavaScript', 'React', 'Node.js', 'Express.js'],
    otherTechStacks: ['Git', 'HTML', 'CSS', 'Vercel'],
    category: 'Front-end development',
    links: getLinks('portfolio-old', 'https://old.alfieatkinson.dev'),
  },
  {
    slug: 'library-management-system',
    featured: true,
    title: 'Library Management System',
    description:
      'A console-based library management system in C++, featuring concurrent access via sockets and full CRUD functionality.',
    techStacks: ['C++'],
    otherTechStacks: ['Git'],
    category: 'Systems programming',
    links: getLinks('Library-Management-System'),
  },
  {
    slug: 'sentiment-analysis-tool',
    featured: true,
    title: 'Sentiment Analysis Tool',
    description: (
      <span>
        A deep-learning sentiment analysis tool using{' '}
        <InlineLink href='https://huggingface.co/docs/transformers/model_doc/bert'>BERT</InlineLink>
        {' '}to analyse social media data in real-time.
      </span>
    ),
    techStacks: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    otherTechStacks: ['Git', 'PyQt'],
    category: 'Machine learning',
    links: getLinks('sentiment-analysis-tool'),
  },
  {
    slug: 'lambda-calculus-interpreter',
    featured: false,
    title: 'Lambda Calculus Interpreter',
    description:
      'A Python-based interpreter for lambda calculus, implementing symbolic substitution and evaluation to explore functional programming concepts.',
    techStacks: ['Python'],
    otherTechStacks: ['Git'],
    category: 'Computational theory',
    links: getLinks('lambda-calculus-interpreter'),
  },
  {
    slug: 'sudoku-solver',
    featured: false,
    title: 'Sudoku Solver',
    description:
      'A Python script that solves Sudoku puzzles using constraint satisfaction with the Z3 theorem prover, ensuring compliance with Sudoku rules across rows, columns, and subgrids.',
    techStacks: ['Python'],
    otherTechStacks: ['Git'],
    category: 'Algorithms',
    links: getLinks('sudoku-solver'),
  },
]

export { filters, projects }
