import React from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import Section from '@/components/layout/Section'
import ReactMarkdown from 'react-markdown'
import Heading1 from '@/components/common/reusable/headings/Heading1'
import Heading2 from '@/components/common/reusable/headings/Heading2'
import Heading3 from '@/components/common/reusable/headings/Heading3'
import Badge from '@/components/common/reusable/Badge'
import HighlightText from '@/components/common/reusable/HighlightText'
import InlineLink from '@/components/common/reusable/InlineLink'

type AboutProps = {
  children: string
}

export default function About({ children }: AboutProps): React.JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <div className={clsx(animationClass)}>
      <Section
        className='[&>*]:animate-fade-in md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'
        maxWidthClass='md:max-w-screen-md'
      >
        <ReactMarkdown
          components={{
            h1: Heading1,
            h2: Heading2,
            h3: Heading3,
            a: InlineLink,
            strong: HighlightText,
            ul: ({ children }): React.JSX.Element => (
              <ul className='mb-8 flex flex-wrap gap-2'>{children}</ul>
            ),
            li: ({ children }): React.JSX.Element => (
              <li>
                <Badge>{children}</Badge>
              </li>
            ),
          }}
        >
          {children}
        </ReactMarkdown>
      </Section>
    </div>
  )
}
