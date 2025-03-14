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
  // Core frontend
  'HTML',
  'CSS',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Redux',
  'Zustand',
  'TailwindCSS',

  // Backend & full-stack
  'Node.js',
  'Express.js',
  'Django',
  'Flask',
  'Redis',
  'PostgreSQL',
  'MongoDB',

  // Systems & low-level
  'C++',
  'PyQt',

  // DevOps & deployment
  'Git',
  'Docker',
  'Vercel',
  'Heroku',

  // Machine learning
  'Python',
  'TensorFlow',
  'NumPy',
  'Pandas',

  // Other tools
  'RESTful APIs',
]

const projects: ProjectProps[] = [
  {
    slug: 'open-galaxy',
    featured: true,
    title: 'OpenGalaxy',
    description:
      'A web application designed for searching, browsing, and managing open-license media, with secure user account management.',
    techStacks: [
      'TypeScript',
      'React',
      'Next.js',
      'Zustand',
      'TailwindCSS',
      'Django',
      'Redis',
      'PostgreSQL',
      'Docker',
    ],
    otherTechStacks: ['HTML', 'CSS', 'Python', 'JavaScript', 'Git', 'Vercel', 'Heroku'],
    category: 'Full-stack development',
    links: getLinks('opengalaxy', 'https://opengalaxy.alfieatkinson.dev'),
  },
  {
    slug: 'portfolio',
    featured: true,
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with TypeScript, React, and TailwindCSS, featuring interactive animations and a responsive UI.',
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
        <InlineLink href='https://github.com/soumyajit4419/Portfolio'>
          Soumyajit's design
        </InlineLink>{' '}
        using JavaScript, React, Node.js, and Express.js.
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
      'A console-based library management system with concurrent access via sockets, implementing multi-threading for efficient CRUD operations.',
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
        A real-time sentiment analysis tool leveraging deep learning and the{' '}
        <InlineLink href='https://huggingface.co/docs/transformers/model_doc/bert'>BERT</InlineLink>{' '}
        model to analyse social media data. Features a PyQt-powered GUI for user interaction.
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
      'A Python interpreter for lambda calculus, featuring symbolic substitution and beta reduction. Designed for exploring functional programming concepts.',
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
      'A Python-based Sudoku solver using constraint satisfaction and the Z3 theorem prover for efficient rule-based solving.',
    techStacks: ['Python'],
    otherTechStacks: ['Git'],
    category: 'Algorithms',
    links: getLinks('sudoku-solver'),
  },
]

export { filters, projects }
