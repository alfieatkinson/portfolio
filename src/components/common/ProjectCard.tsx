import React from 'react'
import { lazy } from 'react'
import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'

const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const Card = lazy(() => import('@/components/common/reusable/Card'))
const Heading3 = lazy(() => import('@/components/common/reusable/headings/Heading3'))

export default function ProjectCard({
  title,
  description,
  techStacks,
  links,
}: ProjectProps): React.JSX.Element {
  const techStacksEntry = techStacks.map(
    (techStack: string, index: number): React.JSX.Element => (
      <Badge
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light',
        )}
      >
        {techStack}
      </Badge>
    ),
  )

  const linksEntry = links.map(
    (link: LinkProps, index: number): React.JSX.Element => (
      <li key={index} className='z-10'>
        <a href={link.url} target='_blank' rel='noreferrer' aria-label={link.label}>
          {link.icon}
        </a>
      </li>
    ),
  )

  const linkUrl =
    links.find(({ label }) => label === 'Source Code')?.url ??
    links.find(({ label }) => label === 'Live Demo')?.url

  return (
    <Card className='flex flex-col justify-between'>
      <header>
        <Heading3>
          {linkUrl ? (
            <a
              href={linkUrl}
              className={clsx(
                'no-default z-0',
                'group-hover:text-primary-dark group-hover:dark:text-primary-light',
              )}
              target='_blank'
              rel='noreferrer'
            >
              {title}
            </a>
          ) : (
            <span className='text-muted-dark dark:text-muted'>{title}</span>
          )}
        </Heading3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <div className='mb-6 flex flex-wrap'>{techStacksEntry}</div>
        <ul className='flex space-x-3'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
