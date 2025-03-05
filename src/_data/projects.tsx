import { lazy } from 'react';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon';
import ProjectProps from '@/types/components/ProjectProps';
import LinkProps from '@/types/LinkProps';
import getGitHubUrl from '@/utils/getGitHubUrl';

const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'));

const github: LinkProps = {
  label: 'Source Code',
  icon: <GithubFillIcon size={22} />,
};

const live: LinkProps = {
  label: 'Live Demo',
  icon: <ExternalLinkFillIcon size={22} />,
};

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }];
  if (url) links.push({ ...live, url });
  return links;
};

const filters: string[] = [
  'HTML/CSS',
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'Django',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'TailwindCSS',
  'Docker',
  'CI/CD',
  'Git',
  'RESTful APIs',
  'PyQt',
  'TensorFlow',
  'NumPy',
  'Pandas',
  'Heroku',
  'Vercel',
];

const projects: ProjectProps[] = [
  {
    slug: 'open-license-media-web-app',
    featured: true,
    title: 'Open-License Media Web App',
    description:
      'A web application designed for searching, browsing, and managing open-license media, with secure user account management. Built with a TypeScript/React frontend and a Django/PostgreSQL backend.',
    techStacks: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Django', 'PostgreSQL'],
    otherTechStacks: ['Python', 'JavaScript', 'Git', 'CI/CD', 'Vercel', 'Heroku'],
    category: 'Full-stack development',
    links: getLinks('Open-License-Media-Web-App'),
  },
  {
    slug: 'portfolio-website',
    featured: true,
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with TypeScript, React, and TailwindCSS, deployed on Vercel.',
    techStacks: ['TypeScript', 'React', 'TailwindCSS', 'Vercel'],
    otherTechStacks: ['Git', 'HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('Portfolio-Website', 'https://alfieatkinson.dev'),
  },
  {
    slug: 'library-management-system',
    featured: true,
    title: 'Library Management System',
    description:
      'A console-based library management system in C++, featuring concurrent access via sockets and full CRUD functionality. Implemented Test-Driven Development (TDD) with Catch2.',
    techStacks: ['C++'],
    otherTechStacks: ['Git', 'CI/CD'],
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
        to analyse social media data in real-time. Integrated Reddit API for fetching and processing
        user queries.
      </span>
    ),
    techStacks: ['Python', 'TensorFlow', 'PyQt', 'Pandas', 'NumPy'],
    otherTechStacks: ['Git'],
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
    otherTechStacks: ['Git', 'Functional Programming'],
    category: 'Computational theory',
    links: getLinks('lambda-calculus-interpreter'),
  },
  {
    slug: 'sudoku-solver',
    featured: false,
    title: 'Sudoku Solver',
    description:
      'A Python script that solves Sudoku puzzles using constraint satisfaction with the Z3 theorem prover, ensuring compliance with Sudoku rules across rows, columns, and subgrids.',
    techStacks: ['Python', 'Z3 Theorem Prover'],
    otherTechStacks: ['Git', 'Constraint Satisfaction'],
    category: 'Algorithms',
    links: getLinks('sudoku-solver'),
  },
];

export { filters, projects };
